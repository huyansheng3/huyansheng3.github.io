"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","24f59c1a545b24f23fe8c0f3cf11cefb"],["/static/css/main.6fb138e2.css","acf7d4fa167618a94ffca4cc610bb85c"],["/static/js/0.b92f809b.chunk.js","fbd232fdf2538b00fb603aac8a9c1b12"],["/static/js/1.a98abf4e.chunk.js","4488c5a9fb35f2d8bf0a817e3acc41c1"],["/static/js/10.65611c33.chunk.js","93773d23dfd76ceb13dbb2293f8f075d"],["/static/js/11.b87e2f9e.chunk.js","b1fa5a970921e0f5552d702be3d792be"],["/static/js/12.4557cce5.chunk.js","3562175674cbaa7ba8f43235e38bbdbb"],["/static/js/13.21d1d830.chunk.js","450a847a68231fabab93639fedde43b1"],["/static/js/14.29fd297b.chunk.js","6f6cbb8b18a6963e67c64d68afafcdfd"],["/static/js/15.98acb6ca.chunk.js","99116afb5a209f79085baa2e5cab5e7e"],["/static/js/2.6fe18cee.chunk.js","4c2db0f5400ce6fc03782855a4b5d874"],["/static/js/3.932f7f52.chunk.js","15e991aa8f3a65ca895e4a69443b3b5f"],["/static/js/4.d050afa7.chunk.js","211c8d4b25f4e687b74a464dba854888"],["/static/js/5.6e9dcde5.chunk.js","6df5499c71481c824bb556da2aaf00fa"],["/static/js/6.5064b932.chunk.js","feb4c614c933acd393af5e768d360f22"],["/static/js/7.b66c10ab.chunk.js","8b5000d58a72c67c76916cc0ebc17e76"],["/static/js/8.74bcf25b.chunk.js","e3a06b0bdf0da0436f60357b57673c4b"],["/static/js/9.4034d198.chunk.js","52961df5888142bbd1b8c429fc63c7a1"],["/static/js/main.e0c187fc.js","4b04add80b3ec249aff11e82f8f93dd1"],["/static/media/octicons.190e7257.svg","190e72572ee84190f4777765fa49fc47"],["/static/media/octicons.d038ccbc.eot","d038ccbc4a99be24f33a54b482b2422e"],["/static/media/octicons.de59a972.woff2","de59a97248b44599e6747a27a943f738"],["/static/media/octicons.e0d4a324.ttf","e0d4a324833e13be7d4fa762146d0a71"],["/static/media/octicons.ee5b1bee.woff","ee5b1bee959a95bd43b223ec901d098a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});