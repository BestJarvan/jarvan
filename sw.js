if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const r=e=>a(e,s),l={module:{uri:s},exports:n,require:r};i[s]=Promise.all(c.map((e=>l[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-3c3737b9"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"2017/07/25/ionic2/ionic2+cordova/index.html",revision:"b80444af44400552b4bf248bccb944c4"},{url:"2017/07/25/js/serve/index.html",revision:"9cfbef39fdcfc99afaa170ac859d9e27"},{url:"2017/07/25/node/node.js-login/index.html",revision:"aea3071722a9a7f93986856f0fd6b33b"},{url:"2017/08/08/ionic2/ionic2-jpush-iOS/index.html",revision:"8f9c84cc1d0d9672662e512b4ed62385"},{url:"2018/03/24/wechat/wx-A-Z/index.html",revision:"e2e395de4013cac9f615eed14869200d"},{url:"2018/03/24/wechat/wx-city-picker/index.html",revision:"d66bbe79797e3903397d986116b3f715"},{url:"2018/03/24/wechat/wx-iOS/index.html",revision:"edaa2c4c80d5846ccfa23f6a9dbe8b8f"},{url:"2018/06/08/wechat/wx-problem/index.html",revision:"5d596c1ae2b66052833ffbdafd8ebca0"},{url:"2018/06/14/wechat/wx-star/index.html",revision:"64f50d5f49af6aaf99b944a162379943"},{url:"2018/06/20/ionic2/ionic2-jq/index.html",revision:"4b818df66fd6958978b50b39fa1aedff"},{url:"2019/08/10/vue/shell-vue/index.html",revision:"464f4112aef4a8e490796db3c9d002ee"},{url:"2019/12/15/npm/npm-publish/index.html",revision:"1d0883c7d3df273246b8f6a96e8a627b"},{url:"2020/04/14/npm/Typescript+verdaccio/index.html",revision:"cac3505ee9924cf9f9cc80b18dac7af5"},{url:"2020/08/06/js/indexedDB/index.html",revision:"baf9cfef3eb7be010b249622c2ac172e"},{url:"2020/08/07/js/event-loop/index.html",revision:"ab544ec7e4aaa1e94d29bc6de345e4e6"},{url:"2020/11/13/js/input-20/index.html",revision:"9e2594c1ccf0fbbf5c86782ee67a2e03"},{url:"2021/08/15/notes/xbb-utils/index.html",revision:"ba22d1933873a36a830b6fe945f58080"},{url:"2021/10/15/notes/typec-line/index.html",revision:"14ef270bcdfcc875efbc64e5bd2867c4"},{url:"2021/11/19/notes/macOS12-xcode13/index.html",revision:"954b7fe8a2278cbeb377e4b59aa1f13c"},{url:"2021/12/30/notes/JavaScript-The-Good-Parts/index.html",revision:"5d2ee4e7851ea2138f50be00ffd0e929"},{url:"archives/2017/07/index.html",revision:"768a7c3292b7a7cf4dfbb45fccb50e20"},{url:"archives/2017/08/index.html",revision:"67fe8b3401455b998c524418d37536e3"},{url:"archives/2017/index.html",revision:"4ad844f337796b1bdffa857f28d2549c"},{url:"archives/2018/03/index.html",revision:"d4564ab4479c64ab92c0e85053c2d331"},{url:"archives/2018/06/index.html",revision:"29d1e1170b5ee3b75af5b024b9065664"},{url:"archives/2018/index.html",revision:"c89256913554bdaa63401920355ff437"},{url:"archives/2019/08/index.html",revision:"29cf0e99888149788a256fc5b4ec5b0e"},{url:"archives/2019/12/index.html",revision:"c540c4add3c127a918181f0a482c4025"},{url:"archives/2019/index.html",revision:"492c9e69e386fb67c0b20436bcb856c1"},{url:"archives/2020/04/index.html",revision:"8b7d467fd86ee58505f6cfcaca782b50"},{url:"archives/2020/08/index.html",revision:"47812df88f74541d562f870787e18078"},{url:"archives/2020/11/index.html",revision:"5a16e7f6fbcf80145fa2b8db373b4c22"},{url:"archives/2020/index.html",revision:"c45fb92477ade2cd97de3656753a0ac3"},{url:"archives/2021/08/index.html",revision:"6a91941cd883b63b0de859ba8866ed21"},{url:"archives/2021/10/index.html",revision:"e3e565315ff759a947848d9623e9404f"},{url:"archives/2021/11/index.html",revision:"6206ff8cfaacc4dcbfe36d30342daaf6"},{url:"archives/2021/12/index.html",revision:"9e286e3b9542192739b65c2d312a5abc"},{url:"archives/2021/index.html",revision:"3240288c353f0804483283b81931ff98"},{url:"archives/index.html",revision:"99167ad387d2121a85a0297d9dbd8667"},{url:"archives/page/2/index.html",revision:"0f59191df60ef96270313c1a19b1ccc0"},{url:"categories/index.html",revision:"f4d2a746b50018a59a9741cae6577e42"},{url:"categories/ionic2/index.html",revision:"6aa05b10a385757cbfaf98b8ddee8e9b"},{url:"categories/js/index.html",revision:"824e8e5999bee34c7c2953b0deabc01e"},{url:"categories/node/index.html",revision:"df649713eff2d184a70b270629233c11"},{url:"categories/notes/index.html",revision:"42d348eda1144a73162a53f72497da0d"},{url:"categories/npm/index.html",revision:"a20deaccb46781f54b8b72c3f9e08595"},{url:"categories/vue/index.html",revision:"482701a6bd96899d0aae31bb8b032f31"},{url:"categories/wechat/index.html",revision:"90ae9ea69d1843bcbc25f37861dc94dc"},{url:"css/index.css",revision:"ff621509ffd9419b513bc26c5c14c158"},{url:"index.html",revision:"bdf0c5bf0c1e08ed176bc79acdc87413"},{url:"js/header.js",revision:"1f38556fb6b6f1071c636e9478c44d7c"},{url:"js/scroll.js",revision:"5c7b389ea1003645b2e2132379a6aa2c"},{url:"js/sidebar.js",revision:"80945c0975fc9cbe619b0f82ce5f31cf"},{url:"js/stun-boot.js",revision:"0bf548eda18a96d5ee7bb68bea9f330f"},{url:"js/utils.js",revision:"dcaac80783d96bc3a9a32f23ed4669e6"},{url:"live2dw/assets/dsr50_2101.model.json",revision:"23b776785210699815122a156da478a8"},{url:"live2dw/assets/physics.json",revision:"36175ab1141357fd7071c7848d3a0be3"},{url:"live2dw/assets/pose.json",revision:"0981d60620faf5683849f3b2fa322ebc"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"manifest.json",revision:"25ff931bb8ce1ce3509d3916c88d6e5a"},{url:"page/2/index.html",revision:"7ca1410b6d71a20d32e32df24b3e1a57"},{url:"search.json",revision:"d04ea618c7884ef780742f5acbf35087"},{url:"tags/angular/index.html",revision:"466b8eca0ecb9ed5cc1dba3bce22a5d4"},{url:"tags/cookie/index.html",revision:"51b1737352491d57878b42a14b1d9b88"},{url:"tags/cordova/index.html",revision:"af45789c3ba6fc389578b69fc078a0fe"},{url:"tags/event-loop/index.html",revision:"021543853109bb16888623359deffb35"},{url:"tags/git/index.html",revision:"855f0dbec07ce0817694e5003dbda4c3"},{url:"tags/html/index.html",revision:"6500592bc4e9ade8b69eb645a9d0a74b"},{url:"tags/index.html",revision:"cc0f1f0c168d8bd7fe9f09ebc9c7ac9a"},{url:"tags/indexedDB/index.html",revision:"48265509340739d6922aab9c7c6d1423"},{url:"tags/input/index.html",revision:"310e0c943a0a8c80ac8db645ea73ef3c"},{url:"tags/ionic2/index.html",revision:"59871615e39827983532c8b47b31b356"},{url:"tags/javascript/index.html",revision:"ba044eb5258c6e7cba15a4ef2a4a0c52"},{url:"tags/jest/index.html",revision:"91c93c50358db01157965f1338368a16"},{url:"tags/jpush/index.html",revision:"06e07a6674bed7d52048bf98c9728c97"},{url:"tags/jquery/index.html",revision:"f6a0bcb295566bd39292785b24636703"},{url:"tags/localStorage/index.html",revision:"a3ce07932b71b1de7f417da5d08639e5"},{url:"tags/macOS/index.html",revision:"6bfb32581cbecd3c4c4902cef91fb5ce"},{url:"tags/nodejs/index.html",revision:"d15a229ad5dbc75c586405b07787197b"},{url:"tags/npm/index.html",revision:"5f055a9742518082e8deaf2cf8dc5064"},{url:"tags/nrm/index.html",revision:"62162444a098ee9194ed5878638bebaa"},{url:"tags/pm2/index.html",revision:"ad636495076a01e7e97b5c5a2f43f634"},{url:"tags/rollup/index.html",revision:"920d942c9c83d44a19cdc554533cb984"},{url:"tags/sessionStorage/index.html",revision:"0b01fddcf3229fe1822069a284eaeb67"},{url:"tags/shell/index.html",revision:"811c75b850c61189b4c66c0e5c9a5d70"},{url:"tags/Simulator/index.html",revision:"93d47957088ac3703190bb0451b0d3b0"},{url:"tags/typedoc/index.html",revision:"a7422bad6323d585325958c7adf7abfa"},{url:"tags/typescript/index.html",revision:"df5c35b7a8ce5bb0bd7abba4b4db41b9"},{url:"tags/verdaccio/index.html",revision:"d980e26a1f7e69f0d13cc5b1afb2b0b0"},{url:"tags/vue/index.html",revision:"e725e0becb4a3fbd92b78a14f02e2746"},{url:"tags/vue2/index.html",revision:"0fdc63ab5e11faa56b8d18c7211a76f2"},{url:"tags/wechat/index.html",revision:"e89ab3d856f7515f5000326053106c09"},{url:"tags/Xcode/index.html",revision:"07902ba8769c9c57521253f5b8d73cfc"}],{}),e.registerRoute("/",new e.NetworkFirst({cacheName:"index",plugins:[]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
