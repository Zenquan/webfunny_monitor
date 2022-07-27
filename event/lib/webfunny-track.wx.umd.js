!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e="required",t="length",r="type",n="range",o={REQUIRED:"$field$,输入值不可为空",LENGTH:"$field$,输入超长，最大长度为$rule$",TYPE:"$field$,输入的类型不正确，应为$rule$类型",RANGE:"$field$,输入不在范围内，应在$range1$~$range2$之内",LACK:"上送字段缺失，缺少字段$field$"};var i,u,a,c=(i=function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},i(u={exports:{}},u.exports),u.exports);(a=c)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")&&a.default;var l={isString:function(e){return"[object String]"===Object.prototype.toString.apply(e)},isNumber:function(e){return"[object Number]"===Object.prototype.toString.apply(e)},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)},isDate:function(e){return"[object Date]"===Object.prototype.toString.apply(e)},isBoolean:function(e){return"[object Boolean]"===Object.prototype.toString.apply(e)}};function f(e,t){var r=!1,n=function(e,t){var r={success:!1,field:""};for(var n in t){if(!Object.prototype.hasOwnProperty.call(e,n))return r.success=!1,r.field=n,r;r.success=!0}return r}(e,t),i=n.success,u=n.field;if(!(r=i)){var a=o.LACK.replace(/\$field\$/g,u);return console.warn(a),r}for(var c in t){if(!(r=p(e[c],c,t[c])))return r}return r}function p(i,u,a){var c=!1;for(var f in a){var p=a[f];if(f===e&&p){if(!(c=void 0!==i)){var s=o.REQUIRED.replace(/\$field\$/g,u).replace(/\$rule\$/g,"");return console.warn(s),c}}else if(f===t&&p){if(!(c=i.toString().length<=p)){var $=o.LENGTH.replace(/\$field\$/g,u).replace(/\$rule\$/g,p);return console.warn($),c}}else if(f===r&&p){if(!(c=(0,l["is"+p])(i))){var d=o.TYPE.replace(/\$field\$/g,u).replace(/\$rule\$/g,p);return console.warn(d),c}}else if(f===n&&p){var y=i>=p[0]&&i<p[1];if(!y){var b=o.RANGE.replace(/\$field\$/g,u).replace(/\$range1\$/g,p[0]).replace(/\$range2\$/g,p[1]);return console.warn(b),y}}}return c}var s="$$$webfunny-event-domain$$$/tracker/upEvent";function $(e){!function(e){var t=s;wx.request({url:t,data:e,method:"POST",header:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},success:function(e){console.log("sendWXRequest",e.data)}})}(e)}!function(e){f&&$&&(e.webfunnyEventValidateParams=f,e.webfunnyEventSendRequest=$,e._webfunnyEvent="$$$webfunny-event-code$$$")}(wx)}));