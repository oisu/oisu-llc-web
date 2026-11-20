// 以前の CRA のサービスワーカー（オフライン用キャッシュ）を消すためのもの。
// 古いサービスワーカーは /apps/ などの静的ページへのアクセスも index.html で返してしまう。
// 古いものを入れたままのブラウザがこれを読み込むと、キャッシュを消して自分を解除する。消さないこと。
self.addEventListener("install", () => self.skipWaiting())
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: "window" })
      clients.forEach((client) => client.navigate(client.url))
    })()
  )
})
