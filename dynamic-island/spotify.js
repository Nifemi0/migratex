// Minimal Spotify Web API helper — uses global fetch available in recent Node/Electron
// Exports functions to call play/pause/next/previous and get playback state.
async function spotifyFetch(path, method = 'GET', token, body) {
  if (!token) throw new Error('Missing Spotify token');
  const res = await fetch(`https://api.spotify.com/v1/${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (res.status === 204) return null;
  const text = await res.text();
  try { return text ? JSON.parse(text) : null; } catch(e){ return text; }
}

module.exports = {
  play: async (token, opts) => spotifyFetch('me/player/play', 'PUT', token, opts || undefined),
  pause: async (token) => spotifyFetch('me/player/pause', 'PUT', token),
  next: async (token) => spotifyFetch('me/player/next', 'POST', token),
  previous: async (token) => spotifyFetch('me/player/previous', 'POST', token),
  state: async (token) => spotifyFetch('me/player', 'GET', token),
};
