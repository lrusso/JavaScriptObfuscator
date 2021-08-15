const filesToCache = [
	"JavaScriptObfuscator.css",
	"JavaScriptObfuscator.htm",
	"JavaScriptObfuscator.js",
	"JavaScriptObfuscator.json",
	"JavaScriptObfuscator.png",
	"JavaScriptObfuscatorFavIcon_16x16.png",
	"JavaScriptObfuscatorFavIcon_192x192.png",
	"JavaScriptObfuscatorFavIcon_512x512.png",
	"JavaScriptObfuscatorShare.png"
];

const staticCacheName = "JavaScriptObfuscator-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});