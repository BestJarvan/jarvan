if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const r=e=>d(e,s),l={module:{uri:s},exports:n,require:r};i[s]=Promise.all(a.map((e=>l[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-3c3737b9"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"2017/07/25/ionic2/ionic2+cordova/index.html",revision:"164edd193e85e9a1b3ab485a137cae6a"},{url:"2017/07/25/js/serve/index.html",revision:"5b2585f2478b53b81164770ae2cd9fc1"},{url:"2017/07/25/node/node.js-login/index.html",revision:"e9c43dc1a563b5b5bc335adb8c34c608"},{url:"2017/08/08/ionic2/ionic2-jpush-iOS/index.html",revision:"d9f8d4f6d30d200be2b0bd8057f91964"},{url:"2018/03/24/wechat/wx-A-Z/index.html",revision:"f3dc4bf067ea5f3c6c29a678f83b3920"},{url:"2018/03/24/wechat/wx-city-picker/index.html",revision:"5f04d3eb0e945649a9c1dffe87c758bf"},{url:"2018/03/24/wechat/wx-iOS/index.html",revision:"4b3da89a620e04dd26f32588a9a34e3e"},{url:"2018/06/08/wechat/wx-problem/index.html",revision:"878b262d893eba669b62886a10018e8f"},{url:"2018/06/14/wechat/wx-star/index.html",revision:"03ed9d8d727b176f63706b9e4f423d27"},{url:"2018/06/20/ionic2/ionic2-jq/index.html",revision:"0b78559f6af3883225d566bc4559dca4"},{url:"2019/08/10/vue/shell-vue/index.html",revision:"f1af47edf73853033a84fa16fb04c509"},{url:"2019/12/15/npm/npm-publish/index.html",revision:"234a3be0e09baf8607ff66220ea98bac"},{url:"2020/04/14/npm/Typescript+verdaccio/index.html",revision:"62b5b15ad8aebf28b43f60151ff38a44"},{url:"2020/08/06/js/indexedDB/index.html",revision:"287ff425c4f2e4e65c6901d7929e2fbe"},{url:"2020/08/07/js/event-loop/index.html",revision:"7efaa19791952aacbac1fd864dd30269"},{url:"2020/11/13/js/input-20/index.html",revision:"ccdf26455b86e9c78728ad1edd58b1c3"},{url:"2021/08/15/notes/xbb-utils/index.html",revision:"756705929fe51303838e44f21a9aefc5"},{url:"2021/10/15/notes/typec-line/index.html",revision:"80506b51108d58fdb59235f978846d0f"},{url:"2021/11/19/notes/macOS12-xcode13/index.html",revision:"bc8fc2c9e7a597b9adf10cc7f943885f"},{url:"2021/12/30/notes/JavaScript-The-Good-Parts/index.html",revision:"765e5c0c0117f33b0ce6469fae493356"},{url:"archives/2017/07/index.html",revision:"73b7786148648aba1073c3e5e42fab75"},{url:"archives/2017/08/index.html",revision:"b23dec54103310e1ce6aeb2046107f8e"},{url:"archives/2017/index.html",revision:"b7b470b63d2db99409a274d590c5e3ce"},{url:"archives/2018/03/index.html",revision:"9ae4be706b8695d15816d6cec75cd4d2"},{url:"archives/2018/06/index.html",revision:"c243a5cb22d5cf53ead96a3e293a9444"},{url:"archives/2018/index.html",revision:"53a5c1da5206eafb7d80c8ccd24c7302"},{url:"archives/2019/08/index.html",revision:"aba486d00b21595af94c47da362e326d"},{url:"archives/2019/12/index.html",revision:"785ab8f3da7ea17adc6f0c18598e2083"},{url:"archives/2019/index.html",revision:"1014fd79f5de3de5e64275f2ba648d1b"},{url:"archives/2020/04/index.html",revision:"974ff0838d7d41085b237ebd3a367240"},{url:"archives/2020/08/index.html",revision:"dccd39c0a8dc475dd4b6e37ddd31d915"},{url:"archives/2020/11/index.html",revision:"bd44b276d4be61f4e3b108c8243267a5"},{url:"archives/2020/index.html",revision:"dc4b02fcc2b2e37e65db6f57b5935d0b"},{url:"archives/2021/08/index.html",revision:"d91c4b8665ea4097286c3c7a6149dc02"},{url:"archives/2021/10/index.html",revision:"6b2f90511c24267e51cf2f25a5b302a4"},{url:"archives/2021/11/index.html",revision:"b3666c9388fb4931e93da42201765255"},{url:"archives/2021/12/index.html",revision:"547a1c2ac3477c9919af5eff6cd723ef"},{url:"archives/2021/index.html",revision:"9a6cb3b2c6c1b208f48b3eea714d23dc"},{url:"archives/index.html",revision:"3e6f26edc188251453155c24b61afd80"},{url:"archives/page/2/index.html",revision:"0976a2305fec27f75204757e5b7c6308"},{url:"categories/index.html",revision:"af1feafb7b334f35179047f18691a90d"},{url:"categories/ionic2/index.html",revision:"528919b628a3114fc0f2b322854c0638"},{url:"categories/js/index.html",revision:"d17be3d35e721feda2c43fd1f7d66ced"},{url:"categories/node/index.html",revision:"ea74f026ea8f5be3c46ba33782b96600"},{url:"categories/notes/index.html",revision:"b0bf542bd4ea6b76d6080a4a207c19dd"},{url:"categories/npm/index.html",revision:"d4f75cb444824feb7d695e788f6730a9"},{url:"categories/vue/index.html",revision:"d0b81bad1c3393e6c253126fe07a1042"},{url:"categories/wechat/index.html",revision:"8cd3a69f1490b2579bf18e140f5c3110"},{url:"css/index.css",revision:"2cf8b7ac83091bdddb1fb6da9eb2f3d5"},{url:"friend/index.html",revision:"0f5754736d90d50ce57402edbcb2c9e1"},{url:"index.html",revision:"3a076aae62b90f7b8e00debbcb7a3d7c"},{url:"js/header.js",revision:"1f38556fb6b6f1071c636e9478c44d7c"},{url:"js/scroll.js",revision:"5c7b389ea1003645b2e2132379a6aa2c"},{url:"js/sidebar.js",revision:"80945c0975fc9cbe619b0f82ce5f31cf"},{url:"js/stun-boot.js",revision:"0bf548eda18a96d5ee7bb68bea9f330f"},{url:"js/utils.js",revision:"dcaac80783d96bc3a9a32f23ed4669e6"},{url:"live2dw/assets/dsr50_2101.model.json",revision:"23b776785210699815122a156da478a8"},{url:"live2dw/assets/physics.json",revision:"36175ab1141357fd7071c7848d3a0be3"},{url:"live2dw/assets/pose.json",revision:"0981d60620faf5683849f3b2fa322ebc"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"manifest.json",revision:"25ff931bb8ce1ce3509d3916c88d6e5a"},{url:"page/2/index.html",revision:"6800c153179d5469f64d2d6da3600b47"},{url:"search.json",revision:"6e7110044d461b7622d99ecc397b856f"},{url:"tags/angular/index.html",revision:"a6dd94726816562844bf625af05d74f9"},{url:"tags/cookie/index.html",revision:"bd3e281a86bb859808b2d1af13410711"},{url:"tags/cordova/index.html",revision:"6b20db7c9e7fb281abbc2c4c6d222c6c"},{url:"tags/event-loop/index.html",revision:"797519728ae2308cae34f66778f02395"},{url:"tags/git/index.html",revision:"d4efec67e7562ec83b35439111fdadf3"},{url:"tags/html/index.html",revision:"eb953a1798e94e038cc327addc7f1444"},{url:"tags/index.html",revision:"994911f03bd935947df3e2d8ec4db4d3"},{url:"tags/indexedDB/index.html",revision:"6b8e5ce23e079c5a9cc74193e59e645f"},{url:"tags/input/index.html",revision:"60fd256504bf50935765ddb41e59fd89"},{url:"tags/ionic2/index.html",revision:"1028541830b2feae6032223700eb8b10"},{url:"tags/javascript/index.html",revision:"0cc59472ac62bbb2e2d323cf4573ce86"},{url:"tags/jest/index.html",revision:"e1c3594dee2c4590514016f780daac6b"},{url:"tags/jpush/index.html",revision:"e70403fc847bd7da00767f066d2ade5c"},{url:"tags/jquery/index.html",revision:"184a5004649d27261be75223b98e5f02"},{url:"tags/localStorage/index.html",revision:"3f3fdd45c71e79bd8515129a142f197f"},{url:"tags/macOS/index.html",revision:"3c26b41704a8e3c622c14d652496b42a"},{url:"tags/nodejs/index.html",revision:"e211b5bd2aae2fc53c33d917377ee795"},{url:"tags/npm/index.html",revision:"1084d097fab505a11695e982e23616e4"},{url:"tags/nrm/index.html",revision:"d6a29bc15a2e1d40c0ccef0e52dce47d"},{url:"tags/pm2/index.html",revision:"9dc4d2ecea15b8f22746a59561aca6d0"},{url:"tags/rollup/index.html",revision:"ca73a9f72f26e31d939722b4d54b95ee"},{url:"tags/sessionStorage/index.html",revision:"4d0d60e9699697291d48c67de458c17d"},{url:"tags/shell/index.html",revision:"3821c5e7533e1bfca6fabe91d2277cc7"},{url:"tags/Simulator/index.html",revision:"bcb0962905ec1cab85d9a1aefaafea90"},{url:"tags/typedoc/index.html",revision:"28e2c2e927349ac16c82a40334443e5c"},{url:"tags/typescript/index.html",revision:"948411ccae333a104610f82fb16ad404"},{url:"tags/verdaccio/index.html",revision:"b7b7ace862fc11c763cf81484ae0ea9a"},{url:"tags/vue/index.html",revision:"5ebabea82856628c0c8a66bdf2be8c67"},{url:"tags/vue2/index.html",revision:"8eec7b8fe96f63adffba8f3619abdbf0"},{url:"tags/wechat/index.html",revision:"b293fb741a2df22d877efde1ec84dd6a"},{url:"tags/Xcode/index.html",revision:"af1914fa3e092176bf699793ae3f7e4d"}],{}),e.registerRoute("/",new e.NetworkFirst({cacheName:"index",plugins:[]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
