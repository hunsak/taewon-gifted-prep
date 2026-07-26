const CACHE = "gifted-prep-v2";
const FILES = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(names=>Promise.all(
      names.filter(n=>n!==CACHE).map(n=>caches.delete(n))
    ))
  );
});

self.addEventListener('fetch', e=>{
  if(e.request.url.includes('githubusercontent') || e.request.url.includes('api.github.com')) return;
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request))
  );
});
