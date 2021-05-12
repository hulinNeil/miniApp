define("data.js",function(require, module, exports){
  'use strict';
  
  module.exports = {
    count:12,
  }
});

define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print){
  'use strict';
 
  const data = require('./data.js')
 App({
   onLaunch: function onLaunch() {
     console.log('App Launch');
   },
   onShow: function onShow() {
     console.log('App Show');
   },
   onHide: function onHide() {
     console.log('App Hide');
   },
   globalData: {
     imageUrl: 'https://sf3-ttcdn-tos.pstatp.com/obj/developer/ide/demo/',
     data: data
   }
 });
});

define("pages/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit,ttJSCore,Reporter,print){
  "use strict";
 
 Page({
   data: {
     count: 10
   },
   onLoad: function onLoad() {
     var _this = this;
      _this.setData({
        isLogin: 200
      });
   },
   onShow: function onShow(){
     console.log('onshow');
   }
 });
});

require('app.js'); // 启动App