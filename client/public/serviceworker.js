const CACHE_NAME = 'VERSIOn-1'
const urlsToCache = ['index.html','offline.html']
const self = this
//install SW
self.addEventListener('install' ,(event) =>{
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>{
            console.log('Open Cache');

            return cache.addAll(urlsToCache)
        })
    )
})

//Listen for request
self.addEventListener('fetch' ,(event) =>{
    event.respondWith(
        caches.match(event.request)
        .then(() =>{
            return fetch(event.request)
            .catch(() => caches.match('offline.html'))
        })
    )
    
})


//Activate the SW
self.addEventListener('activate' ,(event) =>{
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then(cacheName => Promise.all(
            cacheName.map(cacheName => {
                if(!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )

})
