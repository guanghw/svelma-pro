!function(){"use strict";const e=["client/chunk.890edef0.js","client/index.21d57420.js","client/chunk.0fbbf14e.js","client/chunk.fc23205d.js","client/chunk.81c8182a.js","client/chunk.e7370317.js","client/pagination.17b03be7.js","client/chunk.0a41e55b.js","client/timepicker.e2f78b4f.js","client/datepicker.24db40d8.js","client/collapse.819bfda6.js","client/message.3afff30e.js","client/snackbar.a59f5d78.js","client/progress.0f22dfbf.js","client/notification.95eb0aab.js","client/layout.0406e51c.js","client/dialog.8fa3ca06.js","client/modal.083c0198.js","client/switch.b098abf4.js","client/toast.aa4e06da.js","client/client.b21566ce.js","client/icon.0ca1520a.js","client/about.11e7daaf.js","client/button.ec074abe.js","client/intro.194f5361.js","client/input.7400f819.js","client/tiles.a767fb5f.js","client/media.281b8d8f.js","client/field.68ecf529.js","client/table.82b52e71.js","client/index.943a1c3c.js","client/[slug].1981a330.js","client/tabs.aaa29078.js","client/index.5f86f78e.js","client/hero.ce7ead82.js","client/chunk.9487e282.js"].concat(["service-worker-index.html","favicon.ico","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","svelma-logo-ico.png","svelma-logo.png","svelma-logo.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1584944593726").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1584944593726"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1584944593726").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
