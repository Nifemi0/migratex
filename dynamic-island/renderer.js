// Renderer stub for Dynamic Island (best-effort)
(function(){
  const el = id=>document.getElementById(id);
  const icon = el('icon');
  const badge = el('badge');
  const content = el('content');
  const controls = el('controls');
  const notifyBtn = el('notify-btn');
  const infoBtn = el('simulate-info');
  const toggleBtn = el('toggle-music');
  let badgeCount = 0;
  let playing = false;

  function setBadge(n){ badgeCount = n; badge.textContent = String(n); }
  function showNotification(title, body){ content.textContent = title + ' — ' + body; setBadge(badgeCount+1); icon.classList.add('pulse'); setTimeout(()=>icon.classList.remove('pulse'),900); }

  function safeBridge(){ return window.islandBridge && typeof window.islandBridge.notify === 'function' }

  // Hook into preload's onNotification if available
  if(window.islandBridge && typeof window.islandBridge.onNotification === 'function'){
    window.islandBridge.onNotification((evt)=>{
      showNotification(evt.title||'Notification', evt.body||'');
      if(evt.type === 'music'){
        controls.style.display = 'flex';
        toggleBtn.textContent = evt.playing ? '⏸️' : '▶️';
        playing = !!evt.playing;
        toggleBtn.classList.toggle('playing', playing);
      }
    });
  }

  // UI actions
  notifyBtn.addEventListener('click', ()=>{
    const payload = {title:'Hello', body:'This is a simulated notice', type:'generic'};
    if(safeBridge()) window.islandBridge.notify(payload);
    showNotification(payload.title, payload.body);
  });

  infoBtn.addEventListener('click', async ()=>{
    if(window.islandBridge && typeof window.islandBridge.getSystemInfo === 'function'){
      try{ const sys = await window.islandBridge.getSystemInfo(); content.textContent = sys.platform + ' • ' + (sys.arch||''); }
      catch(e){ content.textContent = 'getSystemInfo error'; }
    } else {
      content.textContent = navigator.userAgent;
    }
  });

  toggleBtn.addEventListener('click', ()=>{
    playing = !playing;
    toggleBtn.textContent = playing ? '⏸️' : '▶️';
    toggleBtn.classList.toggle('playing', playing);
    // notify main process about music state if bridge exists
    if(window.islandBridge && typeof window.islandBridge.notify === 'function'){
      window.islandBridge.notify({title:'Music', body: playing ? 'Playing' : 'Paused', type:'music', playing});
    }
  });

  // Small idle animation loop for the icon
  setInterval(()=>{ icon.classList.toggle('pulse'); setTimeout(()=>icon.classList.remove('pulse'),300); }, 4000);

  // initial state
  controls.style.display = 'none';
  setBadge(0);
})();
