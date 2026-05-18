const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('islandBridge', {
  notify(payload) {
    ipcRenderer.send('island-request', payload);
  },
  onNotification(callback) {
    const listener = (_, data) => callback(data);
    ipcRenderer.on('island-notification', listener);
    return () => ipcRenderer.removeListener('island-notification', listener);
  },
  getSystemInfo() {
    return ipcRenderer.invoke('get-system-info');
  },
});
