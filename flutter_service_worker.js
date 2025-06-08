'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8dd92e8cde5d3e493af38f3277b9128",
".git/config": "c5f44250c29203726255f3afca543526",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4c7d3241b39aa9ba749b1dd4e85257ab",
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
".git/index": "632b870980d81029aba1c3b303a5f8fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2605944190d522299287677bde12408f",
".git/logs/refs/heads/main": "197a143327bda7e36d1911ffdfba05e5",
".git/logs/refs/remotes/origin/gps_open_street_map": "a9ea2402aa7014f488d3378d5d4eba2f",
".git/logs/refs/remotes/origin/main": "074404e44ad7a8c585c18c1453832ffb",
".git/logs/refs/remotes/origin/main_web": "d7a737566ca7a8afb71c5f0e385ab7d7",
".git/logs/refs/remotes/origin/map_test": "6ac8de8f0aa77da4fcf48f20a56a043a",
".git/objects/01/d1161f0cb23be47099e530702a6a849ba69486": "37a578db47744c2ec1002b5a438ab532",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/6c44797c27fd90cac3b40d2ec684da55645dab": "e4d9094c7e89856671de88de46285382",
".git/objects/05/7022405df728ba012878f1910150dbd121e96c": "1614c64a47a21179a3814bcacf4b29e5",
".git/objects/07/837fc4603679759f9ce7c91f8ef4b69130e535": "7bfb64adc368a8435fbd627186a75ba1",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/52b63190296a8bf6599babc86d924cb5f7feae": "93c21052b264932e93be8fb7508b3430",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/df308aee87fe2f8767e4923a7a84a5afc4c0e7": "56ce33ce118152dbc1e586424051146e",
".git/objects/0f/b304c186173fb9c6f5fd4792d4009445ac4e76": "33ffda459c4b6fc170bbf10d63f68d19",
".git/objects/16/6d6d1fe82c7430351a4c024423d25494fc104b": "ff120ff698a81f57e73b59f508018860",
".git/objects/18/440799bd57955b00e11b3d20b5e926257d9136": "9cfb514cdea4bf25b758ea6f11882cf0",
".git/objects/1b/dca237824f59912b1f0c84291aefd32dcc5441": "2757d375e2278e7bbc26a2e2244909a5",
".git/objects/1c/6d9dedb4de5eb4dce6ee525748da4cb4e18b6a": "1296ef7a8b142818a94e261571c502ba",
".git/objects/1d/82674ce01a4c33f6eb2a5b0f5f3f9487dd3be8": "a90701dffad86e34e89de3f6ef4b4c77",
".git/objects/1d/ae58c1781d12716d44bd9e89ffb8efb902e79b": "e0818b406e0c1695918c3eac12f07bf6",
".git/objects/1d/bd5dc2837038b3e0df0cf3d9d6b265dfe04475": "78cec55d0822e4039d85164715c15595",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/f515198e082a4783c40cb31ed1c4216786c85e": "9ad0d7673294d3a9fab34bdb18196542",
".git/objects/25/620900cfb0bee88f05773d069cbd518c7c1ee1": "1f6b4eb0e672133f8e1b914fcc23f944",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/c42327da5acdc95ea45df10191ef28e27e2537": "edd423b755536fb7b9071d0e8a33aedf",
".git/objects/29/f91862a981f4f47e3df12fda63969a64cf86a5": "7cf1327edf228f7d682f0ab6c5e740b2",
".git/objects/2a/00ac7180526e5cb65c4a6078e3b3d4d4a3eafc": "1d67e6c68420ffefb06f942281801a87",
".git/objects/30/ec7a529d760ae94f118952d0c8b701e9fa30da": "7717498be766c85b6a2a4ec0027c9102",
".git/objects/32/30c66be7d22dc96d223ee075968ae3df497fc1": "1a87e3ab788557884255c9864e245c43",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/477273f7a88363fd98fc56f90e8e3353cdae25": "733a31d132b09e3fc920bc244004f50b",
".git/objects/37/10c40b73e3bd63847acb3d0580f5d2e24798fa": "8bfa6cfa7b16443b3c23812c856ded37",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/c3b063639fc4a06d19a94a3b0e4d4cd96462df": "ff463e43450645edd88853a19697d8aa",
".git/objects/3d/fd1366bb63a50f39e6dd63fe2dd83198d3bc43": "e6e518b1e842c700d656bf5ec5816802",
".git/objects/3f/2b35deac6cfc43be3931a409dc5388ba6a4a60": "cd33d0268eee7a9ee455df197d2a4c0b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/41/c2805a7d4ab2e9521a2fb9037662b29da99e08": "2033b83039226668ab4f36781ff46bac",
".git/objects/42/034b669c1c05c2016a44cfbbc3fa022c8e46d0": "7924c2b28a0e363d5169cb280e6459c9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/82e3056948e6b606d26f77c11b24d6c3d4c2c6": "b241c12439de387f93fadfc901f0562b",
".git/objects/46/14f4debfd30345f02cd137247acd09f46f8b5a": "b83d56007618e7eab0b2bb519f8c784b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/18d2f8723659b52091c0dedab59f501e942134": "72811558d382ee6d574fea3b16d9405e",
".git/objects/49/49d1c940df3c40cad981f08e6f4ed274110055": "2a49144b5974fa09d39b9fa036e96b9c",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/beb44d411a04a43afc7ddf66e5b703a6f2388f": "cfeca92032ff667fdbca2d48157271f6",
".git/objects/4e/7b6071164ad7d0bc48594e153d3b5ecae291ae": "184ccd189479c27a3cdb612833bea042",
".git/objects/4f/b5c2a8256a411ff03c56173434dc0749f28978": "db05620a591f3370f5840eba89aec8ab",
".git/objects/50/b262d20b51528d2532ac5678529285f40e6203": "785769d0d76c599f9b66ef8e68d1d71f",
".git/objects/54/3be28d6a14e5cea3869daff26c86a46f4dd40f": "cea0e4e56dd44d3557248a4ede187337",
".git/objects/55/73d68e91a15ffe50bd3fa73259126fe0be999a": "2b29a2761aa4b38c9fffa0292f86c2ed",
".git/objects/5d/05b9f4830b1a58b9e288eade6ebaf2ca078fe7": "dfcc37a7e0d7a773dae3e4b3c2f94d12",
".git/objects/5e/b65de16d66f57b797fe5c339e8c1f297c2fd06": "cb43431abe5a4c4c8f07f5087dde98b1",
".git/objects/61/8f940ab97477a82440f74bdbdfb4d7f3b5a042": "0512b6b4ffceeb1b1d43a6f2c0162f43",
".git/objects/62/7a6a6c9fb5864cd3ff94b335b5c9b69cc24c4d": "7d5484847c440addee8d21c00c5911ac",
".git/objects/64/d93350e2748fe7d2db3e2377cb578f34b74e3a": "1141c04838dc234943d772773c27c5c1",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/ee6dede347c648ac2e257a42cb4d0407022aa3": "9ce99c96301eca948911ef105fbe2428",
".git/objects/6d/4a9df8503b3e7a1c81bfbe67e61cdd6f3fa33e": "a1560823cb141f945fe507f4a0693fe3",
".git/objects/70/992f14a797dcc66f618beac270ad93c8320719": "b34772042f2a7834858159a16ba7da05",
".git/objects/74/27a3d4b81152340850df0318a17eb35235245d": "1a240c166950058863fc4c456b888c28",
".git/objects/76/12e2269afdc35ee88f22018bf5970815206117": "4e9e20238bfed05c1ca3bdc03a881e27",
".git/objects/7b/d07de138b4c0df4eb4a9e828f22bf882124879": "af24b49f0eae764088165f8f1e8a4b07",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/b7b14553dc954024fe9f99fde7c1c4d646b711": "f55316b6adb3d0b937dca491bb140e04",
".git/objects/7d/ea89a7cc5910643a3e4f896f920792d215807a": "52134698477786c0de83ba49e1f3db73",
".git/objects/7f/ddebf2a7438cd3d06b12e23acd33513a97e6c6": "21ad465083f40418bb4ba5e876f96b2e",
".git/objects/81/b510420e30f17f5b8a974cd01f8360497146b2": "33182142e2eb2bfc76a46a723b12eb38",
".git/objects/82/99c0380917c62f4d960dd4c5b13164fc3c128b": "94dfbd707ccbda43b163d9c9e501819f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/39c56b7b5bfcb360628f9b1261a3ca8a28287f": "074e3ce30f6efabea8df7023f722439c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fa10ebd120b0b07520aaf077b138146ab3c39c": "6f15a05cca841074a9a9cccf803997cd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fc76c2575a07eb21b68c65d2285b82808a8c3b": "1a081bdacf1782e6b2ef37aa15ecee2c",
".git/objects/8c/5c8711d5f3b74428a6efaa10ca072ff9c9acfe": "c961e6e18f402d1247b5c670aeab6fa9",
".git/objects/8d/b928fbd82e3ce2bbb772c3639807708ed55e6f": "0444cfe291a8afe99b0eed283239780b",
".git/objects/8e/98e2a2dc38ccb6c75e4016644a035dc8e43152": "8bd8c95e16356c31660e93a084d1fb5f",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/ccd4ddfd1160ccae023a58745ddee05504bbc3": "35b1186352758312ae40af2834886920",
".git/objects/93/07f0f789763b8716a441579f993c63571d6071": "5e0442ebf9d3e2653a4526c7e7e456a2",
".git/objects/94/cd68cd9de234d03fd4583fe89952b5db074ada": "26d42398e62c0e14a1883a27babd8780",
".git/objects/97/407b856c8ec2ed78ae30bfd7314fe72151aa42": "a2d8e02eb30f777280b1fe19fd3b5772",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/1ce3a148452262b06a4f49fa001cdd116e3c5b": "4287bcf761fac276efe67fb1af575da2",
".git/objects/a3/39c84e4cb01759cf0abf79f36f09c97d98f6f1": "13fca0e523eb2fee2fdb3347d365434d",
".git/objects/a6/28f38bc5a13952febcad6b442fb2bb0c4b4982": "7b74c587cf499e86e95eb73bd9e514b0",
".git/objects/a6/916c44d44a94f31a1c5730aa1f8b0d156b50ab": "6141d4ceb43ece8c4c68b0c779bb9274",
".git/objects/ab/0bb257fd05739bca8476bd079b9d4b41d180bc": "39537dca3e85bee79ea79c6cf1dd0e6a",
".git/objects/af/a6a585f4700553fc8e71008e7edadab2d04640": "abbbba6e8c0a5f6c55257f9a0f3c3b32",
".git/objects/b0/ccad7e787f7b3269e30579a201a7b44e409f95": "d34edc410bf9b517192bdaf06e977aef",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/6f028be84ca040033e28e0b9bfb496bc4e8ce1": "b846a5a852d1bd0dfe9032e056a24b3a",
".git/objects/b3/0aab303a63bc79a2cc7bd72d436325040930fe": "fc2acc55ab047c00385aa7bd65ae1984",
".git/objects/b5/165c8a7fefc1163ad645fa1b281b2d1ae0c9fd": "20323d5f3f430f5ebdbf93dde5017cd9",
".git/objects/b5/cf72a58eb8e116352e986e873dbd1e1d27d08c": "d7012d62c6dfd984be6351b3630942aa",
".git/objects/b6/ae228df892a9f0da5f927c580606d7103ea436": "7b3e6881ad5a3542d0a4007f2257160d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ca58754407b2b2b6fb6bf8d902207d2f1610c6": "34d8a570fc0750d627a4aa1c7155fbdc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/d2a159241ab80990a6b326c277f7ad0e3c1356": "5fd5c2c579bd2573c647225ee4eaadc3",
".git/objects/bf/0365a90bf48ad53e54403567bff1ee46cbe829": "30962a34a0e4fdc80aacd41c5159466b",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c2/73ab6f15b165a8a05d60757e81c7c9bc54187d": "ef334c13c66d0e00048c2b28818eefff",
".git/objects/c7/caed2f2f087b4cd0f840299b1f8e70d3db393a": "daf5bfceaa6aa53826e56ecb7b0d3c49",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/a3271d477fe24760af53f3e5020694039a6123": "43257166a98ba93d794c95c9231f2eab",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/eb28cb8e3c9e00dc8770dbe2e040daeed60026": "8941843a00437804db18906960878203",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/42dfed84ac0af6427b792f81ccbffa0085878b": "8945d15815692835d18fdb5e7fa2f6bf",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/9d8a817ac07d6000caa14d3c01ca671e3f31e9": "af54732330348f59e651f8d7c201a290",
".git/objects/db/b49bdfb954488d96bf742a37539a43fdca78ed": "6eaa968321c4217e9b386913f2280a20",
".git/objects/dd/807a3d1c5ed27874bbbc3587ea9ef10dc3c31f": "d134ca332d9d89cc03cd18f550c479b7",
".git/objects/e0/1b19c21571e9e9ecf1aa7d24b392db18f68701": "0aa397244212a42bb75555de2df428c8",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e1/4e26157aaa610c464e31ac71eb46d839e9b938": "f419da1e101d0b0b5d7c6b4c156f8019",
".git/objects/e1/9f3c34f343cd22954eceda74aa0b4bd7172c9b": "981d92b23addab8768a3634c400777b3",
".git/objects/e2/fc53dacc18853add453288dc254ce5ae6d2aa0": "c429fcad474587363ec3e4de17dade54",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/e6/e7d943a72ff00c88affec3de01ef3a5ee2b8d5": "b5e7c66bd5d2c0790c4ba1ebf2a4552f",
".git/objects/e7/c7b69c073c84f294e474c7fbc76ab04f402d8b": "c7e5f03536c4889b705ce2f6f9fc1d71",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ee180f28757f98b83a8acc9363f00831b0fc06": "bec86fcc597b69849f605dc5378be0e5",
".git/objects/ec/6e8a2c0b4be9ddc17a8b8c5a511327f102ed1a": "1c07a76478c2b5b8d662f9a769dfa62f",
".git/objects/ee/927913ce61b5b4a28badf06ac8213f4bf658ff": "71ee5a439ba2d968d864bf4e6ef0e797",
".git/objects/ef/f1d33fe83ed6b83dd721f5475cb29a0d96727b": "c35c44c7ee415af196a222fd145d820f",
".git/objects/ef/f70e3ce165f528a1a605ee4746b6fc30b3d1a7": "aeafec6ca154f09c5de48ffb79847564",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2d96ab11cbcf29d7e1a2f634c95725c89f17dc": "6b7ce901052052f14ad2a30c39517ac3",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fd/17dda45ece1f9772b6dc999bb470ec35ec3fa2": "c650f8c01781c636d876b02202185007",
".git/objects/ff/d5e4c45bd0050bbed0e8f74177def9b48c1edd": "773d2d35e0c874cb08faffc19391bd9b",
".git/ORIG_HEAD": "2a9e12198bcce7d25153101ab9b49dde",
".git/refs/heads/main": "2a9e12198bcce7d25153101ab9b49dde",
".git/refs/remotes/origin/gps_open_street_map": "0f85175db8141cc31bf5c527edf66f92",
".git/refs/remotes/origin/main": "2a9e12198bcce7d25153101ab9b49dde",
".git/refs/remotes/origin/main_web": "0a1d13bd8143984aaa1aa2cd69121a77",
".git/refs/remotes/origin/map_test": "77dca1412069718f0a1fb8e5a0bdc3aa",
"assets/AssetManifest.bin": "c5dae84ddc322c14a2f4c3342c1eeb61",
"assets/AssetManifest.bin.json": "4be235277e5f1f8b970d0912bbe447de",
"assets/AssetManifest.json": "039508c8473018f7ad0f070097a77a72",
"assets/assets/backgrounds/farm_background.jpg": "6faebeddb9db7a794c18fca5149e4af5",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/images/blaney_criddle.png": "ea45a867421957b3b100d6a9ca641ba0",
"assets/assets/images/et_c_equation.png": "12fc16b047988083738088e97c3fb6c0",
"assets/assets/images/faculty_logo.png": "bb6fde68ecf1b308ddb83acba3c9af75",
"assets/assets/images/fao_penman_monteith.png": "6fd17461a63143aeac4a296d7a852f49",
"assets/assets/images/iwa_equation.png": "65dd63350c3a9251a8af131a96363114",
"assets/assets/images/logo.png": "dc67903014ed8f01f09c76466ceea2ce",
"assets/assets/images/pan_evaporation.png": "bfd15f50c73b5699f4c169945fe06da3",
"assets/assets/images/radiation_equation.png": "2f322a3d798068c1a77dec91d8700aa7",
"assets/assets/images/university_logo.png": "4d7fcbb677a825d432e0e558b22d6286",
"assets/FontManifest.json": "9350ed1be1e5dc0966786d1de8a7998d",
"assets/fonts/MaterialIcons-Regular.otf": "4beabac97386f3aadc975cda07d5d614",
"assets/NOTICES": "3579c1e7b07e7abf8eef7d78a51b0b6f",
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
"favicon.png": "e0c8fb6d32856861696b7595bbbc0ac5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "cd1ab8f30274410215c145962f1561e5",
"icons/Icon-192.png": "7066748ff548f40466bec99fafa3a1f8",
"icons/Icon-512.png": "f97b2dd08c3c59f2ce5ca6549aebb8b9",
"icons/Icon-maskable-192.png": "7066748ff548f40466bec99fafa3a1f8",
"icons/Icon-maskable-512.png": "f97b2dd08c3c59f2ce5ca6549aebb8b9",
"index.html": "7115af3f5beba1dfc2c2c5ebb7c11999",
"/": "7115af3f5beba1dfc2c2c5ebb7c11999",
"main.dart.js": "30fadbea13f9e2f46990cb46556c1a03",
"manifest.json": "c05a6c9f6f62857b22578b08fcbe7100",
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
