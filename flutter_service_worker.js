'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "35ded7b13d2d3f14fe9f9a11c0fd574e",
"assets/AssetManifest.bin.json": "0b578af7ce89bed183c28c7d5d831077",
"assets/AssetManifest.json": "a269acb50d40ba675439b9fd84d4ac9e",
"assets/assets/icon/location.png": "f9fe8e699314cf94489e608718e6be38",
"assets/assets/img/bg_image.png": "26ff5f016ee910675da46f1c18f19ade",
"assets/assets/img/fb.png": "cebba4d2e507cb38ee23f2b7bb574541",
"assets/assets/img/fruits/apple.png": "306bf81cb2bb9e23fdc4e3e80958c1eb",
"assets/assets/img/fruits/banana.png": "374b0bd6ee0ef35febdb06da5f110867",
"assets/assets/img/fruits/grapes.png": "11613c54ce4b6b246a86f199578787a6",
"assets/assets/img/fruits/mango.png": "2b99266b7735290b55c44e83902d3805",
"assets/assets/img/fruits/orange.png": "89a0cfba7749693c7a7a5f677aef0828",
"assets/assets/img/fruits/pineapple.png": "fc1934e4be73bf05d072269057151a91",
"assets/assets/img/fruits/strawberry.png": "ef793655d85a52e015cba6b5924379ae",
"assets/assets/img/fruits/watermelon.png": "f921054ea976b619de656848309b82f1",
"assets/assets/img/fruits.png": "0db8620ddf7f534d7bb058d9f060695b",
"assets/assets/img/fruits_basket.png": "9b2db7416d63b0529d04bae699c8bc89",
"assets/assets/img/google.png": "9e2e37b2b3274dff39d9b0ca14d98dff",
"assets/assets/img/login_img.png": "ce801542ddfb4e1e1a3d85b551538558",
"assets/assets/img/logo.png": "a70a0fad526c97604993366f0fe6729c",
"assets/assets/img/meat.png": "6e2b13b290fca885fcdb6642a50a1ce5",
"assets/assets/img/nuts.png": "459acb03d972ce5733ebfbbf3f167916",
"assets/assets/img/nuts_basket.png": "e20a8fb0d0021968b56d6398505a9af7",
"assets/assets/img/sign_up_img.png": "d470a3d9f253918afda811487557650c",
"assets/assets/img/veg/cabbage.png": "e716ded651f0374779bb8fb59ee31c98",
"assets/assets/img/veg/carrot.png": "7ec85f6db4b642d05aadc2340b0eb743",
"assets/assets/img/veg/green-chilly.png": "f42ea8b6bce3cb4dbf6fdb0dde8cbc48",
"assets/assets/img/veg/onion.png": "b80894d4aa5afaa633fc86f31d9046bf",
"assets/assets/img/veg/potato.png": "f8acdacc61454087789ac77f8a08d063",
"assets/assets/img/veg/tomato.png": "9665041c3898e82ca786f381c50e39f5",
"assets/assets/img/veg/veluthulli.png": "fa14c9353def7736df45ac11165d2754",
"assets/assets/img/veg/vendakka.png": "5ec848344f52c0bc77dc676d4e03c0bc",
"assets/assets/img/veg.png": "2c469c4b3dbbc9a0c0f8a4114897915d",
"assets/assets/img/veg_basket.png": "10e8c4bc047d899cf8e5a4ce3d360e55",
"assets/assets/img/welcome_img.png": "19b4cda9393ec248b7279218a240dbb4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4f8b5fdfd1d402c6efbbf04e11f6b83b",
"assets/NOTICES": "14d7acaf04ced1e1835cf5dd8b2386df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7775252ef5d7ff7c96d6c789d951e37c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e5f36bb2a972cbcb6159a0892a4463af",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dabaf0414c3612800ab22c4980576c1e",
"/": "dabaf0414c3612800ab22c4980576c1e",
"main.dart.js": "3af0b4945d5431e3d496d00cf53d77d4",
"manifest.json": "07e1b52ba22a9e6c8e4dde18c98d3748",
"version.json": "fda371a82a172b5e869f61ba7d19c77d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
