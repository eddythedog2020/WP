/**handles:jquery-scrollto**/
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(t){return!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!==-1}function o(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var n=e.scrollTo=function(t,o,n){return e(window).scrollTo(t,o,n)};return n.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(r,i,s){"object"==typeof i&&(s=i,i=0),"function"==typeof s&&(s={onAfter:s}),"max"===r&&(r=9e9),s=e.extend({},n.defaults,s),i=i||s.duration;var a=s.queue&&s.axis.length>1;return a&&(i/=2),s.offset=o(s.offset),s.over=o(s.over),this.each(function(){function f(t){var o=e.extend({},s,{queue:!0,duration:i,complete:t&&function(){t.call(c,d,s)}});l.animate(m,o)}if(null!==r){var u=t(this),c=u?this.contentWindow||window:this,l=e(c),d=r,m={},p;switch(typeof d){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)){d=o(d);break}d=u?e(d):e(d,c);case"object":if(0===d.length)return;(d.is||d.style)&&(p=(d=e(d)).offset())}var h=e.isFunction(s.offset)&&s.offset(c,d)||s.offset;e.each(s.axis.split(""),function(e,t){var o="x"===t?"Left":"Top",r=o.toLowerCase(),i="scroll"+o,x=l[i](),v=n.max(c,t);if(p)m[i]=p[r]+(u?0:x-l.offset()[r]),s.margin&&(m[i]-=parseInt(d.css("margin"+o),10)||0,m[i]-=parseInt(d.css("border"+o+"Width"),10)||0),m[i]+=h[r]||0,s.over[r]&&(m[i]+=d["x"===t?"width":"height"]()*s.over[r]);else{var w=d[r];m[i]=w.slice&&"%"===w.slice(-1)?parseFloat(w)/100*v:w}s.limit&&/^\d+$/.test(m[i])&&(m[i]=m[i]<=0?0:Math.min(m[i],v)),!e&&s.axis.length>1&&(x===m[i]?m={}:a&&(f(s.onAfterFirst),m={}))}),f(s.onAfter)}})},n.max=function(o,n){var r="x"===n?"Width":"Height",i="scroll"+r;if(!t(o))return o[i]-e(o)[r.toLowerCase()]();var s="client"+r,a=o.ownerDocument||o.document,f=a.documentElement,u=a.body;return Math.max(f[i],u[i])-Math.min(f[s],u[s])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var o=this.get(t);if(t.options.interrupt&&t._last&&t._last!==o)return e(t.elem).stop();var n=Math.round(t.now);o!==n&&(e(t.elem)[t.prop](n),t._last=this.get(t))}},n});