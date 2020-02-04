const staticAssets = [
	"./images/",
	"./home.css",
	"./index.html"
]

self.addEventListener("install", async event => {
	const cache = await caches.open("static-cache")
	cache.addAll(staticAssets)
})