(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-668a2afa"],{"00f5":function(t,e,n){"use strict";n("39ba")},"0e1a":function(t,e,n){"use strict";function r(t){return"function"===typeof t}n.d(e,"a",(function(){return r}))},2800:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return _})),n.d(e,"e",(function(){return m}));var r=n("8f2e"),o=n("b75a"),c={error:"cordova_not_available"},i={error:"plugin_not_installed"};function u(t){var e=function(){if(Promise)return new Promise((function(e,n){t(e,n)}));console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")};if("undefined"!==typeof window&&window.angular){var n=window.document,r=window.angular.element(n.querySelector("[ng-app]")||n.body).injector();if(r){var o=r.get("$q");return o((function(e,n){t(e,n)}))}console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")}return e()}function a(t,e,n,r){var o,c;void 0===r&&(r={});var i=u((function(i,u){o=r.destruct?O(t,e,n,r,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return i(t)}),(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return u(t)})):O(t,e,n,r,i,u),c=u}));return o&&o.error&&(i.catch((function(){})),"function"===typeof c&&c(o.error)),i}function s(t,e,n,r){return void 0===r&&(r={}),u((function(o,c){var i=O(t,e,n,r);i?i.error?c(i.error):i.then&&i.then(o).catch(c):c({error:"unexpected_error"})}))}function l(t,e,n,o){return void 0===o&&(o={}),new r["a"]((function(r){var c;return c=o.destruct?O(t,e,n,o,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.next(t)}),(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.error(t)})):O(t,e,n,o,r.next.bind(r),r.error.bind(r)),c&&c.error&&(r.error(c.error),r.complete()),function(){try{if(o.clearFunction)return o.clearWithArgs?O(t,o.clearFunction,n,o,r.next.bind(r),r.error.bind(r)):O(t,o.clearFunction,[])}catch(c){console.warn("Unable to clear the previous observable watch for",t.constructor.getPluginName(),e),console.warn(c)}}}))}function f(t,e){return e="undefined"!==typeof window&&e?v(window,e):e||("undefined"!==typeof window?window:{}),Object(o["a"])(e,t)}function b(t,e,n){var r,o;"string"===typeof t?r=t:(r=t.constructor.getPluginRef(),n=t.constructor.getPluginName(),o=t.constructor.getPluginInstallName());var u=h(r);return!(!u||e&&"undefined"===typeof u[e])||("undefined"!==typeof window&&window.cordova?(y(n,o,e),i):(g(n,e),c))}function d(t,e){return t._objectInstance&&(!e||"undefined"!==typeof t._objectInstance[e])}function j(t,e,n,r){if(void 0===e&&(e={}),e.sync)return t;if("reverse"===e.callbackOrder)t.unshift(r),t.unshift(n);else if("node"===e.callbackStyle)t.push((function(t,e){t?r(t):n(e)}));else if("object"===e.callbackStyle&&e.successName&&e.errorName){var o={};o[e.successName]=n,o[e.errorName]=r,t.push(o)}else if("undefined"!==typeof e.successIndex||"undefined"!==typeof e.errorIndex){var c=function(){e.successIndex>t.length?t[e.successIndex]=n:t.splice(e.successIndex,0,n)},i=function(){e.errorIndex>t.length?t[e.errorIndex]=r:t.splice(e.errorIndex,0,r)};e.successIndex>e.errorIndex?(i(),c()):(c(),i())}else t.push(n),t.push(r);return t}function O(t,e,n,r,o,c){void 0===r&&(r={}),n=j(n,r,o,c);var i=b(t,e);if(!0===i){var u=h(t.constructor.getPluginRef());return u[e].apply(u,n)}return i}function p(t,e,n,r,o,c){if(void 0===r&&(r={}),n=j(n,r,o,c),d(t,e))return t._objectInstance[e].apply(t._objectInstance,n)}function h(t){return"undefined"!==typeof window?v(window,t):null}function v(t,e){for(var n=e.split("."),r=t,o=0;o<n.length;o++){if(!r)return null;r=r[n[o]]}return r}function y(t,e,n){n?console.warn("Native: tried calling "+t+"."+n+", but the "+t+" plugin is not installed."):console.warn("Native: tried accessing the "+t+" plugin but it's not installed."),e&&console.warn("Install the "+t+" plugin: 'ionic cordova plugin add "+e+"'")}function g(e,n){"undefined"===typeof t&&(n?console.warn("Native: tried calling "+e+"."+n+", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"):console.warn("Native: tried accessing the "+e+" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"))}var _=function(t,e,n){return void 0===n&&(n={}),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return n.sync?O(t,e,r,n):n.observable?l(t,e,r,n):n.eventObservable&&n.event?f(n.event,n.element):n.otherPromise?s(t,e,r,n):a(t,e,r,n)}};function m(t,e,n){return void 0===n&&(n={}),function(){for(var o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];if(n.sync)return p(t,e,o,n);if(n.observable)return new r["a"]((function(r){var c;return c=n.destruct?p(t,e,o,n,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.next(t)}),(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.error(t)})):p(t,e,o,n,r.next.bind(r),r.error.bind(r)),c&&c.error&&r.error(c.error),function(){try{return n.clearWithArgs?p(t,n.clearFunction,o,n,r.next.bind(r),r.error.bind(r)):p(t,n.clearFunction,[])}catch(c){console.warn("Unable to clear the previous observable watch for",t.constructor.getPluginName(),e),console.warn(c)}}}));if(n.otherPromise)return u((function(r,c){var i;i=n.destruct?p(t,e,o,n,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r(t)}),(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c(t)})):p(t,e,o,n,r,c),i&&i.then?i.then(r,c):c()}));var i,a,s=u((function(r,c){i=n.destruct?p(t,e,o,n,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r(t)}),(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c(t)})):p(t,e,o,n,r,c),a=c}));return i&&i.error&&(s.catch((function(){})),"function"===typeof a&&a(i.error)),s}}}).call(this,n("4362"))},"2f27":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("9ab4"),o={setTimeout:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=o.delegate;return((null===n||void 0===n?void 0:n.setTimeout)||setTimeout).apply(void 0,Object(r["h"])([],Object(r["g"])(t)))},clearTimeout:function(t){var e=o.delegate;return((null===e||void 0===e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0}},"33d6":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("70c3"),o=n("2f27");function c(t){o["a"].setTimeout((function(){var e=r["a"].onUnhandledError;if(!e)throw t;e(t)}))}},"39ba":function(t,e,n){},4701:function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return p}));var r=n("9ab4"),o=n("0e1a"),c=n("8d82"),i=n("70c3"),u=n("33d6");function a(){}var s=function(){return b("C",void 0,void 0)}();function l(t){return b("E",void 0,t)}function f(t){return b("N",t,void 0)}function b(t,e,n){return{kind:t,value:e,error:n}}var d=n("2f27"),j=n("6fb1"),O=function(t){function e(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,Object(c["b"])(e)&&e.add(n)):n.destination=g,n}return Object(r["e"])(e,t),e.create=function(t,e,n){return new p(t,e,n)},e.prototype.next=function(t){this.isStopped?y(f(t),this):this._next(t)},e.prototype.error=function(t){this.isStopped?y(l(t),this):(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped?y(s,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(c["a"]),p=function(t){function e(e,n,r){var c,u=t.call(this)||this;if(Object(o["a"])(e))c=e;else if(e){var s;c=e.next,n=e.error,r=e.complete,u&&i["a"].useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=function(){return u.unsubscribe()}):s=e,c=null===c||void 0===c?void 0:c.bind(s),n=null===n||void 0===n?void 0:n.bind(s),r=null===r||void 0===r?void 0:r.bind(s)}return u.destination={next:c?h(c,u):a,error:h(null!==n&&void 0!==n?n:v,u),complete:r?h(r,u):a},u}return Object(r["e"])(e,t),e}(O);function h(t,e){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{t.apply(void 0,Object(r["h"])([],Object(r["g"])(e)))}catch(o){i["a"].useDeprecatedSynchronousErrorHandling?Object(j["a"])(o):Object(u["a"])(o)}}}function v(t){throw t}function y(t,e){var n=i["a"].onStoppedNotification;n&&d["a"].setTimeout((function(){return n(t,e)}))}var g={closed:!0,next:a,error:v,complete:a}},"66b7":function(t,e,n){},"6fb1":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i}));var r=n("70c3"),o=null;function c(t){if(r["a"].useDeprecatedSynchronousErrorHandling){var e=!o;if(e&&(o={errorThrown:!1,error:null}),t(),e){var n=o,c=n.errorThrown,i=n.error;if(o=null,c)throw i}}else t()}function i(t){r["a"].useDeprecatedSynchronousErrorHandling&&o&&(o.errorThrown=!0,o.error=t)}},"70c3":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},"7c47":function(t,e,n){"use strict";n("66b7")},"8d82":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var r=n("9ab4"),o=n("0e1a");function c(t){var e=function(t){Error.call(t),t.stack=(new Error).stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var i=c((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function u(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var a=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}return t.prototype.unsubscribe=function(){var t,e,n,c,u;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=Object(r["i"])(a),f=s.next();!f.done;f=s.next()){var b=f.value;b.remove(this)}}catch(v){t={error:v}}finally{try{f&&!f.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}else a.remove(this);var d=this.initialTeardown;if(Object(o["a"])(d))try{d()}catch(y){u=y instanceof i?y.errors:[y]}var j=this._teardowns;if(j){this._teardowns=null;try{for(var O=Object(r["i"])(j),p=O.next();!p.done;p=O.next()){var h=p.value;try{l(h)}catch(g){u=null!==u&&void 0!==u?u:[],g instanceof i?u=Object(r["h"])(Object(r["h"])([],Object(r["g"])(u)),Object(r["g"])(g.errors)):u.push(g)}}}catch(_){n={error:_}}finally{try{p&&!p.done&&(c=O.return)&&c.call(O)}finally{if(n)throw n.error}}}if(u)throw new i(u)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)l(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=null!==(n=this._teardowns)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&u(e,t)},t.prototype.remove=function(e){var n=this._teardowns;n&&u(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}();a.EMPTY;function s(t){return t instanceof a||t&&"closed"in t&&Object(o["a"])(t.remove)&&Object(o["a"])(t.add)&&Object(o["a"])(t.unsubscribe)}function l(t){Object(o["a"])(t)?t():t.unsubscribe()}},"8f2e":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("4701"),o=n("8d82"),c=n("a355");function i(t){return t}function u(t){return 0===t.length?i:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var a=n("70c3"),s=n("0e1a"),l=n("6fb1"),f=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var o=this,c=j(t)?t:new r["a"](t,e,n);return Object(l["b"])((function(){var t=o,e=t.operator,n=t.source;c.add(e?e.call(c,n):n?o._subscribe(c):o._trySubscribe(c))})),c},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return e=b(e),new e((function(e,o){var c=new r["a"]({next:function(e){try{t(e)}catch(n){o(n),c.unsubscribe()}},error:o,complete:e});n.subscribe(c)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[c["a"]]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return u(t)(this)},t.prototype.toPromise=function(t){var e=this;return t=b(t),new t((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function b(t){var e;return null!==(e=null!==t&&void 0!==t?t:a["a"].Promise)&&void 0!==e?e:Promise}function d(t){return t&&Object(s["a"])(t.next)&&Object(s["a"])(t.error)&&Object(s["a"])(t.complete)}function j(t){return t&&t instanceof r["b"]||d(t)&&Object(o["b"])(t)}},a355:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return"function"===typeof Symbol&&Symbol.observable||"@@observable"}()},a836:function(t,e,n){"use strict";(function(t){function r(){if("undefined"===typeof t){var e="undefined"!==typeof window?window:{},n=5e3,r=Date.now(),o=!1;e.document.addEventListener("deviceready",(function(){console.log("Ionic Native: deviceready event fired after "+(Date.now()-r)+" ms"),o=!0})),setTimeout((function(){!o&&e.cordova&&console.warn("Ionic Native: deviceready did not fire within "+n+"ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")}),n)}}n.d(e,"a",(function(){return r}))}).call(this,n("4362"))},b75a:function(t,e,n){"use strict";n.d(e,"a",(function(){return R}));var r=n("9ab4"),o=function(t){return t&&"number"===typeof t.length&&"function"!==typeof t},c=n("0e1a");function i(t){return Object(c["a"])(null===t||void 0===t?void 0:t.then)}var u=n("8f2e"),a=n("a355");function s(t){return Object(c["a"])(t[a["a"]])}function l(t){return Symbol.asyncIterator&&Object(c["a"])(null===t||void 0===t?void 0:t[Symbol.asyncIterator])}function f(t){return new TypeError("You provided "+(null!==t&&"object"===typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function b(){return"function"===typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var d=b();function j(t){return Object(c["a"])(null===t||void 0===t?void 0:t[d])}function O(t){return Object(r["a"])(this,arguments,(function(){var e,n,o,c;return Object(r["f"])(this,(function(i){switch(i.label){case 0:e=t.getReader(),i.label=1;case 1:i.trys.push([1,,9,10]),i.label=2;case 2:return[4,Object(r["c"])(e.read())];case 3:return n=i.sent(),o=n.value,c=n.done,c?[4,Object(r["c"])(void 0)]:[3,5];case 4:return[2,i.sent()];case 5:return[4,Object(r["c"])(o)];case 6:return[4,i.sent()];case 7:return i.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}function p(t){return Object(c["a"])(null===t||void 0===t?void 0:t.getReader)}var h=n("33d6");function v(t){if(t instanceof u["a"])return t;if(null!=t){if(s(t))return y(t);if(o(t))return g(t);if(i(t))return _(t);if(l(t))return w(t);if(j(t))return m(t);if(p(t))return H(t)}throw f(t)}function y(t){return new u["a"]((function(e){var n=t[a["a"]]();if(Object(c["a"])(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")}))}function g(t){return new u["a"]((function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()}))}function _(t){return new u["a"]((function(e){t.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,h["a"])}))}function m(t){return new u["a"]((function(e){var n,o;try{for(var c=Object(r["i"])(t),i=c.next();!i.done;i=c.next()){var u=i.value;if(e.next(u),e.closed)return}}catch(a){n={error:a}}finally{try{i&&!i.done&&(o=c.return)&&o.call(c)}finally{if(n)throw n.error}}e.complete()}))}function w(t){return new u["a"]((function(e){I(t,e).catch((function(t){return e.error(t)}))}))}function H(t){return w(O(t))}function I(t,e){var n,o,c,i;return Object(r["d"])(this,void 0,void 0,(function(){var u,a;return Object(r["f"])(this,(function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),n=Object(r["b"])(t),s.label=1;case 1:return[4,n.next()];case 2:if(o=s.sent(),o.done)return[3,4];if(u=o.value,e.next(u),e.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=s.sent(),c={error:a},[3,11];case 6:return s.trys.push([6,,9,10]),o&&!o.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(c)throw c.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))}))}function x(t){return Object(c["a"])(null===t||void 0===t?void 0:t.lift)}function k(t){return function(e){if(x(e))return e.lift((function(e){try{return t(e,this)}catch(n){this.error(n)}}));throw new TypeError("Unable to lift unknown Observable type")}}var S=n("4701"),B=function(t){function e(e,n,r,o,c){var i=t.call(this,e)||this;return i.onFinalize=c,i._next=n?function(t){try{n(t)}catch(r){e.error(r)}}:t.prototype._next,i._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,i._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,i}return Object(r["e"])(e,t),e.prototype.unsubscribe=function(){var e,n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))},e}(S["b"]);function P(t,e){return k((function(n,r){var o=0;n.subscribe(new B(r,(function(n){r.next(t.call(e,n,o++))})))}))}function T(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var c=e.schedule((function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()}),r);if(t.add(c),!o)return c}function z(t,e,n,r,o,c,i,u){var a=[],s=0,l=0,f=!1,b=function(){!f||a.length||s||e.complete()},d=function(t){return s<r?j(t):a.push(t)},j=function(t){c&&e.next(t),s++;var u=!1;v(n(t,l++)).subscribe(new B(e,(function(t){null===o||void 0===o||o(t),c?d(t):e.next(t)}),(function(){u=!0}),void 0,(function(){if(u)try{s--;var t=function(){var t=a.shift();i?T(e,i,(function(){return j(t)})):j(t)};while(a.length&&s<r)t();b()}catch(n){e.error(n)}})))};return t.subscribe(new B(e,d,(function(){f=!0,b()}))),function(){null===u||void 0===u||u()}}function A(t,e,n){return void 0===n&&(n=1/0),Object(c["a"])(e)?A((function(n,r){return P((function(t,o){return e(n,t,r,o)}))(v(t(n,r)))}),n):("number"===typeof e&&(n=e),k((function(e,r){return z(e,r,t,n)})))}var E=Array.isArray;function N(t,e){return E(e)?t.apply(void 0,Object(r["h"])([],Object(r["g"])(e))):t(e)}function D(t){return P((function(e){return N(t,e)}))}var C=["addListener","removeListener"],L=["addEventListener","removeEventListener"],F=["on","off"];function R(t,e,n,i){if(Object(c["a"])(n)&&(i=n,n=void 0),i)return R(t,e,n).pipe(D(i));var a=Object(r["g"])(M(t)?L.map((function(r){return function(o){return t[r](e,o,n)}})):q(t)?C.map($(t,e)):U(t)?F.map($(t,e)):[],2),s=a[0],l=a[1];if(!s&&o(t))return A((function(t){return R(t,e,n)}))(v(t));if(!s)throw new TypeError("Invalid event target");return new u["a"]((function(t){var e=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.next(1<e.length?e:e[0])};return s(e),function(){return l(e)}}))}function $(t,e){return function(n){return function(r){return t[n](e,r)}}}function q(t){return Object(c["a"])(t.addListener)&&Object(c["a"])(t.removeListener)}function U(t){return Object(c["a"])(t.on)&&Object(c["a"])(t.off)}function M(t){return Object(c["a"])(t.addEventListener)&&Object(c["a"])(t.removeEventListener)}},cf2a:function(t,e,n){"use strict";n.r(e);var r=n("7a23");const o=Object(r["i"])("訂單資訊"),c=Object(r["i"])("訂單編號 :"),i=Object(r["i"])("宮廟 :"),u=Object(r["i"])("訂單金額 :"),a=Object(r["i"])("折扣 :"),s=Object(r["i"])("應付金額 :"),l=Object(r["i"])("付款方式 :"),f=Object(r["i"])("付款資訊 :"),b=Object(r["i"])("付款時間 :"),d=Object(r["i"])("退款時間 :"),j=Object(r["i"])("取消時間 :"),O=Object(r["i"])("建立時間 :"),p=Object(r["i"])("訂單狀態 :"),h=Object(r["i"])(" 點燈列表 "),v=Object(r["i"])("付款");function y(t,e,n,y,g,_){const m=Object(r["B"])("ion-back-button"),w=Object(r["B"])("ion-buttons"),H=Object(r["B"])("ion-title"),I=Object(r["B"])("ion-toolbar"),x=Object(r["B"])("ion-header"),k=Object(r["B"])("ion-text"),S=Object(r["B"])("ion-col"),B=Object(r["B"])("ion-row"),P=Object(r["B"])("ion-grid"),T=Object(r["B"])("ion-button"),z=Object(r["B"])("ion-content"),A=Object(r["B"])("menu-bar"),E=Object(r["B"])("ion-footer"),N=Object(r["B"])("ion-page");return Object(r["u"])(),Object(r["e"])(N,null,{default:Object(r["H"])(()=>[Object(r["j"])(x,null,{default:Object(r["H"])(()=>[Object(r["j"])(I,null,{default:Object(r["H"])(()=>[Object(r["j"])(w,{slot:"start"},{default:Object(r["H"])(()=>[Object(r["j"])(m,{"default-href":"/order-list"})]),_:1}),Object(r["j"])(H,null,{default:Object(r["H"])(()=>[o]),_:1})]),_:1})]),_:1}),Object(r["j"])(z,{class:"order"},{default:Object(r["H"])(()=>[g.order?(Object(r["u"])(),Object(r["g"])(r["a"],{key:0},[Object(r["j"])(P,null,{default:Object(r["H"])(()=>[Object(r["j"])(B,null,{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[c]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.order_no),1)]),_:1})]),_:1})]),_:1}),Object(r["j"])(B,null,{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[i]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.temple.title),1)]),_:1})]),_:1})]),_:1}),g.order.discount>0?(Object(r["u"])(),Object(r["e"])(B,{key:0},{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[u]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.net_amount),1)]),_:1})]),_:1})]),_:1})):Object(r["f"])("",!0),g.order.discount>0?(Object(r["u"])(),Object(r["e"])(B,{key:1},{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[a]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.discount),1)]),_:1})]),_:1})]),_:1})):Object(r["f"])("",!0),Object(r["j"])(B,null,{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[s]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.amount),1)]),_:1})]),_:1})]),_:1}),g.order.amount>0?(Object(r["u"])(),Object(r["e"])(B,{key:2},{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[l]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.payment_method.title),1)]),_:1})]),_:1})]),_:1})):Object(r["f"])("",!0),g.order.payment?(Object(r["u"])(),Object(r["e"])(B,{key:3},{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[f]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.payment),1)]),_:1})]),_:1})]),_:1})):Object(r["f"])("",!0),g.order.amount>0&&g.order.pay_time?(Object(r["u"])(),Object(r["e"])(B,{key:4},{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[b]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.pay_time),1)]),_:1})]),_:1})]),_:1})):Object(r["f"])("",!0),g.order.drawback_time?(Object(r["u"])(),Object(r["e"])(B,{key:5},{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[d]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.drawback_time),1)]),_:1})]),_:1})]),_:1})):Object(r["f"])("",!0),g.order.cancel_time?(Object(r["u"])(),Object(r["e"])(B,{key:6},{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[j]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.cancel_time),1)]),_:1})]),_:1})]),_:1})):Object(r["f"])("",!0),g.order.create_time?(Object(r["u"])(),Object(r["e"])(B,{key:7},{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[O]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.create_time),1)]),_:1})]),_:1})]),_:1})):Object(r["f"])("",!0),Object(r["j"])(B,null,{default:Object(r["H"])(()=>[Object(r["j"])(S,{class:"ion-text-right",size:"4"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[p]),_:1})]),_:1}),Object(r["j"])(S,{size:"8"},{default:Object(r["H"])(()=>[Object(r["j"])(k,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(g.order.statusDesc),1)]),_:1})]),_:1})]),_:1})]),_:1}),Object(r["j"])(P,null,{default:Object(r["H"])(()=>[Object(r["j"])(S,{size:"12",style:{"font-size":"1.3rem"}},{default:Object(r["H"])(()=>[h]),_:1}),(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["A"])(g.order.items,t=>(Object(r["u"])(),Object(r["e"])(B,{class:"record ion-margin-top",key:t.id},{default:Object(r["H"])(()=>[Object(r["j"])(S,{size:"7"},{default:Object(r["H"])(()=>[Object(r["j"])(B,null,{default:Object(r["H"])(()=>[Object(r["j"])(S,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(t.light.title),1)]),_:2},1024),Object(r["j"])(S,null,{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(t.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),Object(r["j"])(S,{class:"ion-align-self-center",size:"5"},{default:Object(r["H"])(()=>[Object(r["i"])(Object(r["D"])(t.birthday),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),1!=g.order.status||g.order.payment?Object(r["f"])("",!0):(Object(r["u"])(),Object(r["e"])(P,{key:0},{default:Object(r["H"])(()=>[Object(r["j"])(B,null,{default:Object(r["H"])(()=>[Object(r["j"])(S,null,{default:Object(r["H"])(()=>[Object(r["j"])(T,{onClick:_.pay,class:"button-3"},{default:Object(r["H"])(()=>[v]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}))],64)):Object(r["f"])("",!0)]),_:1}),Object(r["j"])(E,null,{default:Object(r["H"])(()=>[Object(r["j"])(A)]),_:1})]),_:1})}var g=n("d722"),_=n("d867"),m=n("a836"),w=n("2800");function H(t,e){for(var n=e.split("."),r=t,o=0;o<n.length;o++){if(!r)return null;r=r[n[o]]}return r}var I=function(){function t(){}return t.installed=function(){var t=!0===Object(w["a"])(this.pluginRef);return t},t.getPlugin=function(){return"undefined"!==typeof window?H(window,this.pluginRef):null},t.getPluginName=function(){var t=this.pluginName;return t},t.getPluginRef=function(){var t=this.pluginRef;return t},t.getPluginInstallName=function(){var t=this.plugin;return t},t.getSupportedPlatforms=function(){var t=this.platforms;return t},t.pluginName="",t.pluginRef="",t.plugin="",t.repo="",t.platforms=[],t.install="",t}();var x=n("8f2e");function k(t,e,n,r){return r=Array.from(r),Object(w["e"])(t,e,n).apply(this,r)}Object(m["a"])();var S=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),B=function(){function t(t,e,n){try{n&&"string"!==typeof n&&(n=Object.keys(n).map((function(t){return t+"="+n[t]})).join(",")),this._objectInstance=cordova.InAppBrowser.open(t,e,n)}catch(r){"undefined"!==typeof window&&window.open(t,e),console.warn("Native: InAppBrowserOriginal is not installed or you are running on a browser. Falling back to window.open.")}}return t.prototype._loadAfterBeforeload=function(t){return k(this,"_loadAfterBeforeload",{sync:!0},arguments)},t.prototype.show=function(){return k(this,"show",{sync:!0},arguments)},t.prototype.close=function(){return k(this,"close",{sync:!0},arguments)},t.prototype.hide=function(){return k(this,"hide",{sync:!0},arguments)},t.prototype.executeScript=function(t){return k(this,"executeScript",{},arguments)},t.prototype.insertCSS=function(t){return k(this,"insertCSS",{},arguments)},t.prototype.on=function(t){var e=this;return function(){if(!0===Object(w["c"])(e))return new x["a"]((function(n){return e._objectInstance.addEventListener(t,n.next.bind(n)),function(){return e._objectInstance.removeEventListener(t,n.next.bind(n))}}))}()},t.prototype.on=function(t){var e=this;return function(){if(!0===Object(w["c"])(e))return new x["a"]((function(n){return e._objectInstance.addEventListener(t,n.next.bind(n)),function(){return e._objectInstance.removeEventListener(t,n.next.bind(n))}}))}()},t}(),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return S(e,t),e.prototype.create=function(t,e,n){return new B(t,e,n)},e.pluginName="InAppBrowser",e.plugin="cordova-plugin-inappbrowser",e.pluginRef="cordova.InAppBrowser",e.repo="https://github.com/apache/cordova-plugin-inappbrowser",e.platforms=["AmazonFire OS","Android","Browser","iOS","macOS","Windows"],e}(I),T=new P,z=n("e193"),A={components:{IonBackButton:_["IonBackButton"],IonButton:_["IonButton"],IonButtons:_["IonButtons"],IonCol:_["IonCol"],IonContent:_["IonContent"],IonFooter:_["IonFooter"],IonGrid:_["IonGrid"],IonHeader:_["IonHeader"],IonPage:_["IonPage"],IonRow:_["IonRow"],IonText:_["IonText"],IonTitle:_["IonTitle"],IonToolbar:_["IonToolbar"],MenuBar:z["a"]},data(){return{id:this.$route.params.id,order:!1}},methods:{pay(){Object(g["executePayment"])(this.id,t=>{let e=T.create(t.url,"_blank",{hardwareback:"no",hidenavigationbuttons:"yes",location:"no",usewkwebview:"yes"});e.on("loadstop").subscribe(n=>{n.url.startsWith(t.return_url)&&(e.close(),Object(g["queryOrder"])(this.id,t=>{2==t.order.status?this.$router.push({name:"OrderCompleted",params:{id:this.id}}):this.order=t.order}))})})},query(){Object(g["queryOrder"])(this.id,t=>{this.order=t.order})}},mounted(){this.query()},watch:{$route(t){"Order"===t.name&&(this.id=t.params.id,this.order=!1,this.query())}}},E=(n("7c47"),n("6b0d")),N=n.n(E);const D=N()(A,[["render",y],["__scopeId","data-v-888c18da"]]);e["default"]=D},e193:function(t,e,n){"use strict";var r=n("7a23");const o=Object(r["i"])(" 點燈祈福 "),c=Object(r["i"])(" 會員資料0資料 "),i=Object(r["i"])(" 購買資料 "),u=Object(r["i"])(" 登出系統 ");function a(t,e,n,a,s,l){const f=Object(r["B"])("ion-img"),b=Object(r["B"])("ion-button"),d=Object(r["B"])("ion-buttons"),j=Object(r["B"])("ion-toolbar");return Object(r["u"])(),Object(r["g"])(r["a"],null,[n.step?(Object(r["u"])(),Object(r["e"])(f,{key:0,class:"step-bar",src:`/assets/images/step-${n.step}.png`},null,8,["src"])):Object(r["f"])("",!0),Object(r["I"])(Object(r["j"])(j,null,{default:Object(r["H"])(()=>[Object(r["j"])(d,null,{default:Object(r["H"])(()=>[Object(r["j"])(b,{class:"button-4","router-link":"/temple-list"},{default:Object(r["H"])(()=>[Object(r["j"])(f,{slot:"start",src:"/assets/images/icon1-1.png"}),o]),_:1}),Object(r["j"])(b,{class:"button-4","router-link":"/member-info"},{default:Object(r["H"])(()=>[Object(r["j"])(f,{slot:"start",src:"/assets/images/icon1-2.png"}),c]),_:1}),Object(r["j"])(b,{class:"button-4","router-link":"/order-list"},{default:Object(r["H"])(()=>[Object(r["j"])(f,{slot:"start",src:"/assets/images/icon1-3.png"}),i]),_:1}),Object(r["j"])(b,{class:"button-4",onClick:l.logout},{default:Object(r["H"])(()=>[Object(r["j"])(f,{slot:"start",src:"/assets/images/icon1-4.png"}),u]),_:1},8,["onClick"])]),_:1})]),_:1},512),[[r["F"],l.token]])],64)}var s=n("d722"),l=n("d867"),f={components:{IonButton:l["IonButton"],IonButtons:l["IonButtons"],IonImg:l["IonImg"],IonToolbar:l["IonToolbar"]},computed:{token(){return this.$store.state.token}},methods:{logout(){Object(s["logout"])(()=>{this.$store.commit("logout"),this.$route.meta.requiresAuth&&this.$router.push({name:"Home"})})}},props:{step:String}},b=(n("00f5"),n("6b0d")),d=n.n(b);const j=d()(f,[["render",a],["__scopeId","data-v-f60f87d0"]]);e["a"]=j}}]);
//# sourceMappingURL=chunk-668a2afa.0b54f643.js.map