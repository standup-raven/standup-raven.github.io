/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/animate.css",
    "revision": "04ea961430e976bad99b7b5269f387aa"
  },
  {
    "url": "assets/css/bootstrap.min.css",
    "revision": "392d74aad6b011a5f72094c3a99b41c5"
  },
  {
    "url": "assets/css/custom.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "4a80ec84ee36c64edb09f54239238365"
  },
  {
    "url": "assets/css/magnific.pupup.css",
    "revision": "eb35066df3f771f146f9a67fec15423f"
  },
  {
    "url": "assets/css/main.css",
    "revision": "ac46f996e15e0964473bbe1ed0759e15"
  },
  {
    "url": "assets/css/metropolis.css",
    "revision": "87e5fabf99bf3ac8ca6998418b5a2568"
  },
  {
    "url": "assets/css/owl.carousel.css",
    "revision": "b51416af9e8adbe3d16f5f2526aba221"
  },
  {
    "url": "assets/css/slick.min.css",
    "revision": "257d4a288b9258cd5e3b638ff6b4e4ad"
  },
  {
    "url": "assets/css/slicknav.css",
    "revision": "e17a02fc9fe16f9a54d687c721c3d179"
  },
  {
    "url": "assets/css/sweet.alert.css",
    "revision": "b19fb938300c55e29b8d8e8dfd6709de"
  },
  {
    "url": "assets/img/emily.png",
    "revision": "bb0f5c873f13a6679d37c7d50c26db0a"
  },
  {
    "url": "assets/img/emily.webp",
    "revision": "675eb19f98765a2425dcc96c9d4f74d6"
  },
  {
    "url": "assets/img/ext/arrow-down.png",
    "revision": "a559b36c9ae1169bd047b1fb3f03d9f2"
  },
  {
    "url": "assets/img/ext/pattern-01.png",
    "revision": "7eca3069122b5c076847fe6cca026e13"
  },
  {
    "url": "assets/img/item-02.png",
    "revision": "ba4bbce1fec01ece71937c5d42c57cb5"
  },
  {
    "url": "assets/img/item-04.png",
    "revision": "9612a65878e1a9efe8d4840b8ced17e4"
  },
  {
    "url": "assets/img/kyle.png",
    "revision": "ec636c58ad6a2fd1f3a7fe47de51e359"
  },
  {
    "url": "assets/img/kyle.webp",
    "revision": "9017d1bb2dfc15b724b49815997f2517"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "c006398a2a071a91d5b2fca6b339f71c"
  },
  {
    "url": "assets/img/logo.webp",
    "revision": "3aac52cf5fbeed95c1f96e3f41e9a125"
  },
  {
    "url": "assets/img/mattermost-logomark-blue.png",
    "revision": "50b80ea138dde37424f5dc491537f8f2"
  },
  {
    "url": "assets/img/taniya.png",
    "revision": "dc684b2b1adb45e7f6b25e835a26f67b"
  },
  {
    "url": "assets/img/taniya.webp",
    "revision": "e061c6c77b55efeb23b255d53499837d"
  },
  {
    "url": "assets/js/active.js",
    "revision": "d3c3edf79744c63807ae76702fb51d26"
  },
  {
    "url": "assets/js/jquery.min.js",
    "revision": "08392cc144c318a7046318343d092683"
  },
  {
    "url": "assets/js/particle.config.js",
    "revision": "c2b8e7fdf6a33d6d6aa59f520df7b5be"
  },
  {
    "url": "assets/js/svg-injector.min.js",
    "revision": "e5a97910c485993a16eb3d452c29bf23"
  },
  {
    "url": "assets/js/vendor/ajaxchimp.min.js",
    "revision": "b55b00aac11280adfd7ff60ff8187922"
  },
  {
    "url": "assets/js/vendor/bootstrap.min.js",
    "revision": "483b72c59ba1ecb70df2bfa893f7f9ef"
  },
  {
    "url": "assets/js/vendor/magicline.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/js/vendor/magnific.popup.min.js",
    "revision": "8f9bb2df0620cd6b53779e0618218218"
  },
  {
    "url": "assets/js/vendor/masonry.pkgd.min.js",
    "revision": "c121c625761316d72c756d243a318b3e"
  },
  {
    "url": "assets/js/vendor/nice.select.min.js",
    "revision": "8dd005658785b71f3e5b968930e9bb77"
  },
  {
    "url": "assets/js/vendor/owl.carousel.min.js",
    "revision": "3431faebff48b0e000f6834fdeea6100"
  },
  {
    "url": "assets/js/vendor/particle.min.js",
    "revision": "83c50a2b5809472789a8fd43a72a20d4"
  },
  {
    "url": "assets/js/vendor/slick.min.js",
    "revision": "892acc5e9713635597769f8df0866a46"
  },
  {
    "url": "assets/js/vendor/slicknav.min.js",
    "revision": "16c14143e15750d3d8187daab12e0805"
  },
  {
    "url": "assets/js/vendor/sweet.alert.min.js",
    "revision": "6542d3fe59f586c9bfa4fd9cb426efbf"
  },
  {
    "url": "assets/js/vendor/wow.min.js",
    "revision": "abb118bf744e2bf057287f8a0f9d435c"
  },
  {
    "url": "index.html",
    "revision": "415c5c8394af69d522a2c56f3f3dc0b5"
  },
  {
    "url": "style.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
