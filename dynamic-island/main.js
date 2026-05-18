const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const http = require('http');
const fs = require('fs');
const spotify = require('./spotify');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 420,
    height: 120,
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: true,
    show: false,
    webPreferences: { preload: path.join(__dirname, 'preload.js') },
  });

  win.loadFile('index.html');
  win.once('ready-to-show', () => win.showInactive());
  win.setIgnoreMouseEvents(false);
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
  // Register system media keys and forward them to renderer(s)
  try {
    globalShortcut.register('MediaPlayPause', () => {
      BrowserWindow.getAllWindows().forEach((win) => {
        win.webContents.send('island-notification', { type: 'music', action: 'toggle' });
      });
    });
    globalShortcut.register('MediaNextTrack', () => {
      BrowserWindow.getAllWindows().forEach((win) => {
        win.webContents.send('island-notification', { type: 'music', action: 'next' });
      });
    });
    globalShortcut.register('MediaPreviousTrack', () => {
      BrowserWindow.getAllWindows().forEach((win) => {
        win.webContents.send('island-notification', { type: 'music', action: 'prev' });
      });
    });
  } catch (err) {
    console.warn('Media key registration failed:', err && err.message);
  }
  // Start a small local HTTP control API on localhost
  try {
    const PORT = process.env.DYNAMIC_ISLAND_PORT ? Number(process.env.DYNAMIC_ISLAND_PORT) : 3000;
    // simple config loader: config.json optional
    let config = {};
    try {
      const cfgPath = path.join(__dirname, 'config.json');
      if (fs.existsSync(cfgPath)) config = JSON.parse(fs.readFileSync(cfgPath, 'utf8')) || {};
    } catch (e) { console.warn('config load failed', e && e.message); }

    const server = http.createServer(async (req, res) => {
      // Allow CORS for localhost-origin web pages
      const origin = req.headers.origin || '*';
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Api-Token');

      if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }

      if (req.method === 'POST' && req.url === '/control') {
        try {
          let body = '';
          for await (const chunk of req) body += chunk;
          const payload = body ? JSON.parse(body) : {};
          // optional API token check
          const apiToken = req.headers['x-api-token'];
          if (config.apiToken && apiToken !== config.apiToken) {
            res.writeHead(401); res.end(JSON.stringify({error:'unauthorized'})); return;
          }

          // Forward to internal renderers
          BrowserWindow.getAllWindows().forEach((win) => {
            win.webContents.send('island-notification', payload);
          });

          // If source requests Spotify action and token available, call it
          if (payload.source === 'spotify') {
            const token = config.spotifyToken || process.env.SPOTIFY_TOKEN;
            if (token) {
              try {
                if (payload.action === 'play') await spotify.play(token, payload.options);
                else if (payload.action === 'pause') await spotify.pause(token);
                else if (payload.action === 'next') await spotify.next(token);
                else if (payload.action === 'previous' || payload.action === 'prev') await spotify.previous(token);
              } catch (e) {
                console.warn('Spotify action failed', e && e.message);
              }
            }
          }

          res.writeHead(200, {'Content-Type':'application/json'});
          res.end(JSON.stringify({ok:true}));
        } catch (err) {
          res.writeHead(400); res.end(JSON.stringify({error: String(err && err.message)}));
        }
        return;
      }

      res.writeHead(404); res.end(JSON.stringify({error:'not_found'}));
    });

    server.listen(PORT, '127.0.0.1', () => {
      console.log('Dynamic Island control API listening on http://127.0.0.1:' + PORT);
    });
  } catch (e) { console.warn('Control API failed to start', e && e.message); }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  // Unregister all shortcuts.
  try { globalShortcut.unregisterAll(); } catch (e) {}
});

ipcMain.on('island-request', (_, payload) => {
  BrowserWindow.getAllWindows().forEach((win) => {
    win.webContents.send('island-notification', payload);
  });
});

ipcMain.handle('get-system-info', () => {
  return { platform: process.platform };
});
