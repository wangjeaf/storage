/*!build time : 2013-10-29 6:48:02 PM*/
KISSY.add("gallery/storage/1.1/conf",function(){var a=location.href.indexOf("if-debug=1")>-1,b=location.href.indexOf("if-debug-log=1")>-1,c="http://gm.mmstat.com",d={DEBUG:a,DEBUG_LOG:b,SAM_PV:.001,TIMEOUT_STORAGE:3e3,PROXY:"http://a.tbcdn.cn/s/kissy/gallery/storage/1.1/proxy.html",PROXY_TMALL:"http://www.tmall.com/go/act/stp-tm.php",PROXY_TAOBAO:"http://www.taobao.com/go/act/stp-tb.php",ARR:{ST_SET:c+"/tmallbrand.999.5",ST_GET:c+"/tmallbrand.999.6",ST_RM:c+"/tmallbrand.999.7",ST_CL:c+"/tmallbrand.999.8"},K:{ONLOAD:"onload",PROXY:"proxy",PREFIX:"prefix",XD_TIMEOUT:"xdTimeout",IFRAME_TIMEOUT:"iframeTimeout",IFRAME:"iframe",XD:"xd",CALLBACK_LIST:"callbackList",CACHED_ACTION_LIST:"cachedActionList",PROXY_READY:"proxyReady"}};return d}),KISSY.add("gallery/storage/1.1/util",function(a,b){var c={log:function(){b.DEBUG_LOG&&window.console&&window.console.log&&window.console.log.apply&&window.console.log.apply(window.console,arguments)},fm:function(){if(0==arguments.length)return"";if(1==arguments.length)return arguments[0];var a,b=arguments[0];for(a=1;a<arguments.length;++a){var c=new RegExp("\\{"+(a-1)+"\\}","g");b=b.replace(c,arguments[a])}return b}},d=c;return d.sendLog=function(a){if(a){var b=new Image;b.src=a}},d},{requires:["./conf"]});