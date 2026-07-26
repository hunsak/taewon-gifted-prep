const CACHE = "gifted-prep-v3";
const FILES = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener('install', e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(names=>Promise.all(
      names.filter(n=>n!==CACHE).map(n=>caches.delete(n))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e=>{
  if(e.request.url.includes('githubusercontent') || e.request.url.includes('api.github.com')) return;

  // index.html(및 페이지 자체)는 최신 내용을 우선 시도하고, 실패하면 캐시로 대체
  const isPage = e.request.mode === 'navigate' || e.request.url.endsWith('index.html') || e.request.url.endsWith('/');
  if(isPage){
    e.respondWith(
      fetch(e.request).then(res=>{
        const clone = res.clone();
        caches.open(CACHE).then(c=>c.put(e.request, clone));
        return res;
      }).catch(()=> caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request))
  );
});
