self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/icon.css',
                '/mystyle.css',
                '/LandingPage/img/logo.png',
                '/LandingPage/SizeChart.html', // Ensure this page is cached for full-screen experience
                '/LandingPage/SizeChart2.html', // Cache additional pages if necessary
                // Add other assets you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
