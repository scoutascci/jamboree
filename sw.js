self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v0.6').then(function (cache) {
            return cache.addAll([
                'index.html',
                'comite.html',
                'details.html',
                'programme.html',
                'style.css',
                'css/reset.css',
                'css/simplelightbox.css',
                'css/swiper.css',
                'js/swiper.min.js',
                'js/simple-lightbox.js',
                'js/jquery-3.3.1.min.js',
                'js/jquery.custom.js',
                'images/author.png',
                'images/bg2.jpg',
                'images/bullet.png',
                'images/comments.png',
                'images/date.png',
                'images/drop-down-faq.png',
                'images/drop-down-faq-selected.png',
                'images/dropdown.png',
                'images/favicon.ico',
                'images/jambo-01.jpg',
                'images/jamboree.png',
                'images/nav-next.png',
                'images/nav-prev.png',
                'images/subnav.png',
                'images/subnav_white.png',
                'images/swipe_more.png',
                'images/switch_11.png',
                'images/switch_12.png',
                'images/switch_13.png',
                'images/switch_13_active.png',
                'images/trans_black.png',
                'images/icons/black/back.png',
                'images/icons/black/blog.png',
                'images/icons/black/contact.html',
                'images/icons/black/dribbble.png',
                'images/icons/black/electronics.png',
                'images/icons/black/facebook.png',
                'images/icons/black/form.png',
                'images/icons/black/gplus.png',
                'images/icons/black/linkedin.png',
                'images/icons/black/lock.png',
                'images/icons/black/love.png',
                'images/icons/black/menu_close.png',
                'images/icons/black/message.png',
                'images/icons/black/phone.png',
                'images/icons/black/photos.png',
                'images/icons/black/pinterest.png',
                'images/icons/black/rocket.png',
                'images/icons/black/shop.png',
                'images/icons/black/slider.png',
                'images/icons/black/tables.png',
                'images/icons/black/tabs.png',
                'images/icons/black/toggle.png',
                'images/icons/black/trash.png',
                'images/icons/black/twitter.png',
                'images/icons/black/user.png',
                'images/icons/black/users.png',
                'images/icons/blue/back.png',
                'images/icons/blue/blog.png',
                'images/icons/blue/contact.html',
                'images/icons/blue/contact.png',
                'images/icons/blue/features.png',
                'images/icons/blue/lock.png',
                'images/icons/blue/menu.png',
                'images/icons/blue/music.png',
                'images/icons/blue/phone.png',
                'images/icons/blue/photos.png',
                'images/icons/blue/send.png',
                'images/icons/blue/shop.png',
                'images/icons/blue/twitter.png',
                'images/icons/blue/user.png',
                'images/icons/blue/video.png',
                'images/icons/gray/back.png',
                'images/icons/gray/bike.png',
                'images/icons/gray/blog.png',
                'images/icons/gray/briefcase.png',
                'images/icons/gray/bus.png',
                'images/icons/gray/car.png',
                'images/icons/gray/cart.png',
                'images/icons/gray/categories.png',
                'images/icons/gray/contact.html',
                'images/icons/gray/contact.png',
                'images/icons/gray/drink.png',
                'images/icons/gray/features.png',
                'images/icons/gray/food.png',
                'images/icons/gray/form.png',
                'images/icons/gray/gift.png',
                'images/icons/gray/home.png',
                'images/icons/gray/lock.png',
                'images/icons/gray/love.png',
                'images/icons/gray/message.png',
                'images/icons/gray/mobile.png',
                'images/icons/gray/music.png',
                'images/icons/gray/orders.png',
                'images/icons/gray/phone.png',
                'images/icons/gray/photos.png',
                'images/icons/gray/rocket.png',
                'images/icons/gray/settings.png',
                'images/icons/gray/shop.png',
                'images/icons/gray/tables.png',
                'images/icons/gray/users.png',
                'images/icons/gray/video.png',
                'images/icons/white/blog.png',
                'images/icons/white/cart.png',
                'images/icons/white/contact.html',
                'images/icons/white/home.png',
                'images/icons/white/like.png',
                'images/icons/white/love.png',
                'images/icons/white/menu.png',
                'images/icons/white/message.png',
                'images/icons/white/user.png',
                'images/icons/white/users.png',
                'images/icon-32.png',
                'images/icon-75.png',
                'images/icon-120.png',
                'images/icon-192.png',
                'images/icon-512.png',
                'images/go-to-back.png',
                '11.html',
                '12.html',
                '14.html',
                '15.html',
                '16.html',
                'compteur/timeTo.css',
                'compteur/jquery.time-to.min.js',
                'precamp.html',
                'precamp_samedi.html',
            ])
        })
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (resp) {
            return resp || fetch(event.request).then(function (response) {
                let responseClone = response.clone();
                caches.open('v0.6').then(function (cache) {
                    cache.put(event.request, responseClone)
                });
                return response;
            }).catch(function () {
                return caches.match('images/icon-512.png')
            })
        })
    )
});

self.addEventListener('activate', function (event) {
   var cacheWhitelist = ['v0.6'];

   event.waitUntil(
       caches.keys().then(function (keyList) {
           return Promise.all(keyList.map(function (key) {
               if (cacheWhitelist.indexOf(key) === -1){
                   return caches.delete(key);
               }
           }))
       })
   );
});
