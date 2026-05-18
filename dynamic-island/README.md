# Dynamic Island — Local Web Control

This project exposes a small local HTTP control API so a web page can send play/pause/next/previous commands and other notifications to the island UI.

Usage

- Start the app:

```powershell
cd dynamic-island
npm start
```

- By default the API listens on `http://127.0.0.1:3000`.
- Send a POST to `/control` with JSON payload. Example from a web page:

```js
fetch('http://127.0.0.1:3000/control', {
  method: 'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({ source: 'spotify', action: 'play' })
});
```

Spotify integration

- If you want the island to actually control Spotify playback, create a `config.json` next to `main.js` with:

```json
{
  "spotifyToken": "<YOUR_SPOTIFY_OAUTH_TOKEN>",
  "apiToken": "optional-local-api-token"
}
```

- With `spotifyToken` present, commands with `source: 'spotify'` and actions `play`, `pause`, `next`, `previous` will call the Spotify Web API using that token.

Security

- The API is bound to `127.0.0.1` by default and includes optional `apiToken` check if configured.
- Do NOT expose this port to untrusted networks.

Web integration

- From any web page on the same machine you can call the API via `fetch`. The server sends notification payloads to all renderer windows via the `island-notification` IPC channel.
