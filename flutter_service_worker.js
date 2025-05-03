'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "118522f40327a8241b57d7647609edb0",
".git/config": "c5f44250c29203726255f3afca543526",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f9171e83ca86455b8929f9e79153a354",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "33a4e49d7f3c0042e37b656bfcf141ac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5de4452ef6affd9d3f95f8c58b56a323",
".git/logs/refs/heads/main": "ebaa66a58222dcb44877c9fb6990a217",
".git/logs/refs/remotes/origin/main": "370f4f3a5b5841175878f51b93e1bc09",
".git/objects/05/7022405df728ba012878f1910150dbd121e96c": "1614c64a47a21179a3814bcacf4b29e5",
".git/objects/07/837fc4603679759f9ce7c91f8ef4b69130e535": "7bfb64adc368a8435fbd627186a75ba1",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/18/440799bd57955b00e11b3d20b5e926257d9136": "9cfb514cdea4bf25b758ea6f11882cf0",
".git/objects/1c/6d9dedb4de5eb4dce6ee525748da4cb4e18b6a": "1296ef7a8b142818a94e261571c502ba",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/c42327da5acdc95ea45df10191ef28e27e2537": "edd423b755536fb7b9071d0e8a33aedf",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/fd1366bb63a50f39e6dd63fe2dd83198d3bc43": "e6e518b1e842c700d656bf5ec5816802",
".git/objects/3f/2b35deac6cfc43be3931a409dc5388ba6a4a60": "cd33d0268eee7a9ee455df197d2a4c0b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/41/c2805a7d4ab2e9521a2fb9037662b29da99e08": "2033b83039226668ab4f36781ff46bac",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4e/7b6071164ad7d0bc48594e153d3b5ecae291ae": "184ccd189479c27a3cdb612833bea042",
".git/objects/50/b262d20b51528d2532ac5678529285f40e6203": "785769d0d76c599f9b66ef8e68d1d71f",
".git/objects/54/3be28d6a14e5cea3869daff26c86a46f4dd40f": "cea0e4e56dd44d3557248a4ede187337",
".git/objects/55/73d68e91a15ffe50bd3fa73259126fe0be999a": "2b29a2761aa4b38c9fffa0292f86c2ed",
".git/objects/5e/b65de16d66f57b797fe5c339e8c1f297c2fd06": "cb43431abe5a4c4c8f07f5087dde98b1",
".git/objects/62/7a6a6c9fb5864cd3ff94b335b5c9b69cc24c4d": "7d5484847c440addee8d21c00c5911ac",
".git/objects/64/d93350e2748fe7d2db3e2377cb578f34b74e3a": "1141c04838dc234943d772773c27c5c1",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/4a9df8503b3e7a1c81bfbe67e61cdd6f3fa33e": "a1560823cb141f945fe507f4a0693fe3",
".git/objects/76/12e2269afdc35ee88f22018bf5970815206117": "4e9e20238bfed05c1ca3bdc03a881e27",
".git/objects/7b/d07de138b4c0df4eb4a9e828f22bf882124879": "af24b49f0eae764088165f8f1e8a4b07",
".git/objects/7d/ea89a7cc5910643a3e4f896f920792d215807a": "52134698477786c0de83ba49e1f3db73",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/39c56b7b5bfcb360628f9b1261a3ca8a28287f": "074e3ce30f6efabea8df7023f722439c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fc76c2575a07eb21b68c65d2285b82808a8c3b": "1a081bdacf1782e6b2ef37aa15ecee2c",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/07f0f789763b8716a441579f993c63571d6071": "5e0442ebf9d3e2653a4526c7e7e456a2",
".git/objects/94/cd68cd9de234d03fd4583fe89952b5db074ada": "26d42398e62c0e14a1883a27babd8780",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a3/39c84e4cb01759cf0abf79f36f09c97d98f6f1": "13fca0e523eb2fee2fdb3347d365434d",
".git/objects/a6/916c44d44a94f31a1c5730aa1f8b0d156b50ab": "6141d4ceb43ece8c4c68b0c779bb9274",
".git/objects/ab/0bb257fd05739bca8476bd079b9d4b41d180bc": "39537dca3e85bee79ea79c6cf1dd0e6a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/6f028be84ca040033e28e0b9bfb496bc4e8ce1": "b846a5a852d1bd0dfe9032e056a24b3a",
".git/objects/b5/cf72a58eb8e116352e986e873dbd1e1d27d08c": "d7012d62c6dfd984be6351b3630942aa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ca58754407b2b2b6fb6bf8d902207d2f1610c6": "34d8a570fc0750d627a4aa1c7155fbdc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ca/a3271d477fe24760af53f3e5020694039a6123": "43257166a98ba93d794c95c9231f2eab",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/eb28cb8e3c9e00dc8770dbe2e040daeed60026": "8941843a00437804db18906960878203",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/9f3c34f343cd22954eceda74aa0b4bd7172c9b": "981d92b23addab8768a3634c400777b3",
".git/objects/e7/c7b69c073c84f294e474c7fbc76ab04f402d8b": "c7e5f03536c4889b705ce2f6f9fc1d71",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6e8a2c0b4be9ddc17a8b8c5a511327f102ed1a": "1c07a76478c2b5b8d662f9a769dfa62f",
".git/objects/ef/f1d33fe83ed6b83dd721f5475cb29a0d96727b": "c35c44c7ee415af196a222fd145d820f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2d96ab11cbcf29d7e1a2f634c95725c89f17dc": "6b7ce901052052f14ad2a30c39517ac3",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/ff/d5e4c45bd0050bbed0e8f74177def9b48c1edd": "773d2d35e0c874cb08faffc19391bd9b",
".git/ORIG_HEAD": "9a7d67aab64070666cb9899f11851d11",
".git/refs/heads/main": "9a7d67aab64070666cb9899f11851d11",
".git/refs/remotes/origin/main": "9a7d67aab64070666cb9899f11851d11",
"assets/AssetManifest.bin": "12f6834b1ff319404845bc6e1d103096",
"assets/AssetManifest.bin.json": "de0cf6ae73cb85ff6dd8cde7f8a27f56",
"assets/AssetManifest.json": "934c35ced2fbce689cb7763f7a267489",
"assets/assets/backgrounds/farm_background.jpg": "6faebeddb9db7a794c18fca5149e4af5",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/images/blaney_criddle.png": "ea45a867421957b3b100d6a9ca641ba0",
"assets/assets/images/et_c_equation.png": "12fc16b047988083738088e97c3fb6c0",
"assets/assets/images/fao_penman_monteith.png": "6fd17461a63143aeac4a296d7a852f49",
"assets/assets/images/iwa_equation.png": "65dd63350c3a9251a8af131a96363114",
"assets/assets/images/pan_evaporation.png": "bfd15f50c73b5699f4c169945fe06da3",
"assets/assets/images/radiation_equation.png": "2f322a3d798068c1a77dec91d8700aa7",
"assets/FontManifest.json": "9350ed1be1e5dc0966786d1de8a7998d",
"assets/fonts/MaterialIcons-Regular.otf": "6377ac7dc86e5d256430a2390aeeb42c",
"assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"flutter_bootstrap.js": "f2d59bfe48abe9d092c969d6751bd037",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7115af3f5beba1dfc2c2c5ebb7c11999",
"/": "7115af3f5beba1dfc2c2c5ebb7c11999",
"main.dart.js": "4de120e0301b2486b4e16037dbc7aaf4",
"manifest.json": "82861e8849fe07fe2c879c0c6deb63fb",
"version.json": "4ed2bc4db61fc21f469c1e188d8ad2f0"};
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
