(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-497f9f07"],{"00f5":function(n,t,e){"use strict";e("39ba")},"0e1a":function(n,t,e){"use strict";function r(n){return"function"===typeof n}e.d(t,"a",(function(){return r}))},2800:function(n,t,e){"use strict";(function(n){e.d(t,"a",(function(){return d})),e.d(t,"c",(function(){return p})),e.d(t,"b",(function(){return y})),e.d(t,"d",(function(){return m})),e.d(t,"e",(function(){return O}));var r=e("8f2e"),o=e("b75a"),i={error:"cordova_not_available"},u={error:"plugin_not_installed"};function c(n){var t=function(){if(Promise)return new Promise((function(t,e){n(t,e)}));console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")};if("undefined"!==typeof window&&window.angular){var e=window.document,r=window.angular.element(e.querySelector("[ng-app]")||e.body).injector();if(r){var o=r.get("$q");return o((function(t,e){n(t,e)}))}console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")}return t()}function a(n,t,e,r){var o,i;void 0===r&&(r={});var u=c((function(u,c){o=r.destruct?v(n,t,e,r,(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return u(n)}),(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return c(n)})):v(n,t,e,r,u,c),i=c}));return o&&o.error&&(u.catch((function(){})),"function"===typeof i&&i(o.error)),u}function s(n,t,e,r){return void 0===r&&(r={}),c((function(o,i){var u=v(n,t,e,r);u?u.error?i(u.error):u.then&&u.then(o).catch(i):i({error:"unexpected_error"})}))}function f(n,t,e,o){return void 0===o&&(o={}),new r["a"]((function(r){var i;return i=o.destruct?v(n,t,e,o,(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return r.next(n)}),(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return r.error(n)})):v(n,t,e,o,r.next.bind(r),r.error.bind(r)),i&&i.error&&(r.error(i.error),r.complete()),function(){try{if(o.clearFunction)return o.clearWithArgs?v(n,o.clearFunction,e,o,r.next.bind(r),r.error.bind(r)):v(n,o.clearFunction,[])}catch(i){console.warn("Unable to clear the previous observable watch for",n.constructor.getPluginName(),t),console.warn(i)}}}))}function l(n,t){return t="undefined"!==typeof window&&t?g(window,t):t||("undefined"!==typeof window?window:{}),Object(o["a"])(t,n)}function d(n,t,e){var r,o;"string"===typeof n?r=n:(r=n.constructor.getPluginRef(),e=n.constructor.getPluginName(),o=n.constructor.getPluginInstallName());var c=y(r);return!(!c||t&&"undefined"===typeof c[t])||("undefined"!==typeof window&&window.cordova?(w(e,o,t),u):(j(e,t),i))}function p(n,t){return n._objectInstance&&(!t||"undefined"!==typeof n._objectInstance[t])}function b(n,t,e,r){if(void 0===t&&(t={}),t.sync)return n;if("reverse"===t.callbackOrder)n.unshift(r),n.unshift(e);else if("node"===t.callbackStyle)n.push((function(n,t){n?r(n):e(t)}));else if("object"===t.callbackStyle&&t.successName&&t.errorName){var o={};o[t.successName]=e,o[t.errorName]=r,n.push(o)}else if("undefined"!==typeof t.successIndex||"undefined"!==typeof t.errorIndex){var i=function(){t.successIndex>n.length?n[t.successIndex]=e:n.splice(t.successIndex,0,e)},u=function(){t.errorIndex>n.length?n[t.errorIndex]=r:n.splice(t.errorIndex,0,r)};t.successIndex>t.errorIndex?(u(),i()):(i(),u())}else n.push(e),n.push(r);return n}function v(n,t,e,r,o,i){void 0===r&&(r={}),e=b(e,r,o,i);var u=d(n,t);if(!0===u){var c=y(n.constructor.getPluginRef());return c[t].apply(c,e)}return u}function h(n,t,e,r,o,i){if(void 0===r&&(r={}),e=b(e,r,o,i),p(n,t))return n._objectInstance[t].apply(n._objectInstance,e)}function y(n){return"undefined"!==typeof window?g(window,n):null}function g(n,t){for(var e=t.split("."),r=n,o=0;o<e.length;o++){if(!r)return null;r=r[e[o]]}return r}function w(n,t,e){e?console.warn("Native: tried calling "+n+"."+e+", but the "+n+" plugin is not installed."):console.warn("Native: tried accessing the "+n+" plugin but it's not installed."),t&&console.warn("Install the "+n+" plugin: 'ionic cordova plugin add "+t+"'")}function j(t,e){"undefined"===typeof n&&(e?console.warn("Native: tried calling "+t+"."+e+", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"):console.warn("Native: tried accessing the "+t+" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"))}var m=function(n,t,e){return void 0===e&&(e={}),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return e.sync?v(n,t,r,e):e.observable?f(n,t,r,e):e.eventObservable&&e.event?l(e.event,e.element):e.otherPromise?s(n,t,r,e):a(n,t,r,e)}};function O(n,t,e){return void 0===e&&(e={}),function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];if(e.sync)return h(n,t,o,e);if(e.observable)return new r["a"]((function(r){var i;return i=e.destruct?h(n,t,o,e,(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return r.next(n)}),(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return r.error(n)})):h(n,t,o,e,r.next.bind(r),r.error.bind(r)),i&&i.error&&r.error(i.error),function(){try{return e.clearWithArgs?h(n,e.clearFunction,o,e,r.next.bind(r),r.error.bind(r)):h(n,e.clearFunction,[])}catch(i){console.warn("Unable to clear the previous observable watch for",n.constructor.getPluginName(),t),console.warn(i)}}}));if(e.otherPromise)return c((function(r,i){var u;u=e.destruct?h(n,t,o,e,(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return r(n)}),(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return i(n)})):h(n,t,o,e,r,i),u&&u.then?u.then(r,i):i()}));var u,a,s=c((function(r,i){u=e.destruct?h(n,t,o,e,(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return r(n)}),(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return i(n)})):h(n,t,o,e,r,i),a=i}));return u&&u.error&&(s.catch((function(){})),"function"===typeof a&&a(u.error)),s}}}).call(this,e("4362"))},"2f27":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("9ab4"),o={setTimeout:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=o.delegate;return((null===e||void 0===e?void 0:e.setTimeout)||setTimeout).apply(void 0,Object(r["h"])([],Object(r["g"])(n)))},clearTimeout:function(n){var t=o.delegate;return((null===t||void 0===t?void 0:t.clearTimeout)||clearTimeout)(n)},delegate:void 0}},"33d6":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("70c3"),o=e("2f27");function i(n){o["a"].setTimeout((function(){var t=r["a"].onUnhandledError;if(!t)throw n;t(n)}))}},"39ba":function(n,t,e){},4701:function(n,t,e){"use strict";e.d(t,"b",(function(){return v})),e.d(t,"a",(function(){return h}));var r=e("9ab4"),o=e("0e1a"),i=e("8d82"),u=e("70c3"),c=e("33d6");function a(){}var s=function(){return d("C",void 0,void 0)}();function f(n){return d("E",void 0,n)}function l(n){return d("N",n,void 0)}function d(n,t,e){return{kind:n,value:t,error:e}}var p=e("2f27"),b=e("6fb1"),v=function(n){function t(t){var e=n.call(this)||this;return e.isStopped=!1,t?(e.destination=t,Object(i["b"])(t)&&t.add(e)):e.destination=j,e}return Object(r["e"])(t,n),t.create=function(n,t,e){return new h(n,t,e)},t.prototype.next=function(n){this.isStopped?w(l(n),this):this._next(n)},t.prototype.error=function(n){this.isStopped?w(f(n),this):(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped?w(s,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(i["a"]),h=function(n){function t(t,e,r){var i,c=n.call(this)||this;if(Object(o["a"])(t))i=t;else if(t){var s;i=t.next,e=t.error,r=t.complete,c&&u["a"].useDeprecatedNextContext?(s=Object.create(t),s.unsubscribe=function(){return c.unsubscribe()}):s=t,i=null===i||void 0===i?void 0:i.bind(s),e=null===e||void 0===e?void 0:e.bind(s),r=null===r||void 0===r?void 0:r.bind(s)}return c.destination={next:i?y(i,c):a,error:y(null!==e&&void 0!==e?e:g,c),complete:r?y(r,c):a},c}return Object(r["e"])(t,n),t}(v);function y(n,t){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n.apply(void 0,Object(r["h"])([],Object(r["g"])(t)))}catch(o){u["a"].useDeprecatedSynchronousErrorHandling?Object(b["a"])(o):Object(c["a"])(o)}}}function g(n){throw n}function w(n,t){var e=u["a"].onStoppedNotification;e&&p["a"].setTimeout((function(){return e(n,t)}))}var j={closed:!0,next:a,error:g,complete:a}},"6fb1":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return u}));var r=e("70c3"),o=null;function i(n){if(r["a"].useDeprecatedSynchronousErrorHandling){var t=!o;if(t&&(o={errorThrown:!1,error:null}),n(),t){var e=o,i=e.errorThrown,u=e.error;if(o=null,i)throw u}}else n()}function u(n){r["a"].useDeprecatedSynchronousErrorHandling&&o&&(o.errorThrown=!0,o.error=n)}},"70c3":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},"8d82":function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return s}));var r=e("9ab4"),o=e("0e1a");function i(n){var t=function(n){Error.call(n),n.stack=(new Error).stack},e=n(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var u=i((function(n){return function(t){n(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(n,t){return t+1+") "+n.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function c(n,t){if(n){var e=n.indexOf(t);0<=e&&n.splice(e,1)}}var a=function(){function n(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._teardowns=null}return n.prototype.unsubscribe=function(){var n,t,e,i,c;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=Object(r["i"])(a),l=s.next();!l.done;l=s.next()){var d=l.value;d.remove(this)}}catch(g){n={error:g}}finally{try{l&&!l.done&&(t=s.return)&&t.call(s)}finally{if(n)throw n.error}}else a.remove(this);var p=this.initialTeardown;if(Object(o["a"])(p))try{p()}catch(w){c=w instanceof u?w.errors:[w]}var b=this._teardowns;if(b){this._teardowns=null;try{for(var v=Object(r["i"])(b),h=v.next();!h.done;h=v.next()){var y=h.value;try{f(y)}catch(j){c=null!==c&&void 0!==c?c:[],j instanceof u?c=Object(r["h"])(Object(r["h"])([],Object(r["g"])(c)),Object(r["g"])(j.errors)):c.push(j)}}}catch(m){e={error:m}}finally{try{h&&!h.done&&(i=v.return)&&i.call(v)}finally{if(e)throw e.error}}}if(c)throw new u(c)}},n.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)f(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=null!==(e=this._teardowns)&&void 0!==e?e:[]).push(t)}},n.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},n.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},n.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&c(t,n)},n.prototype.remove=function(t){var e=this._teardowns;e&&c(e,t),t instanceof n&&t._removeParent(this)},n.EMPTY=function(){var t=new n;return t.closed=!0,t}(),n}();a.EMPTY;function s(n){return n instanceof a||n&&"closed"in n&&Object(o["a"])(n.remove)&&Object(o["a"])(n.add)&&Object(o["a"])(n.unsubscribe)}function f(n){Object(o["a"])(n)?n():n.unsubscribe()}},"8f2e":function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e("4701"),o=e("8d82"),i=e("a355");function u(n){return n}function c(n){return 0===n.length?u:1===n.length?n[0]:function(t){return n.reduce((function(n,t){return t(n)}),t)}}var a=e("70c3"),s=e("0e1a"),f=e("6fb1"),l=function(){function n(n){n&&(this._subscribe=n)}return n.prototype.lift=function(t){var e=new n;return e.source=this,e.operator=t,e},n.prototype.subscribe=function(n,t,e){var o=this,i=b(n)?n:new r["a"](n,t,e);return Object(f["b"])((function(){var n=o,t=n.operator,e=n.source;i.add(t?t.call(i,e):e?o._subscribe(i):o._trySubscribe(i))})),i},n.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},n.prototype.forEach=function(n,t){var e=this;return t=d(t),new t((function(t,o){var i=new r["a"]({next:function(t){try{n(t)}catch(e){o(e),i.unsubscribe()}},error:o,complete:t});e.subscribe(i)}))},n.prototype._subscribe=function(n){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(n)},n.prototype[i["a"]]=function(){return this},n.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return c(n)(this)},n.prototype.toPromise=function(n){var t=this;return n=d(n),new n((function(n,e){var r;t.subscribe((function(n){return r=n}),(function(n){return e(n)}),(function(){return n(r)}))}))},n.create=function(t){return new n(t)},n}();function d(n){var t;return null!==(t=null!==n&&void 0!==n?n:a["a"].Promise)&&void 0!==t?t:Promise}function p(n){return n&&Object(s["a"])(n.next)&&Object(s["a"])(n.error)&&Object(s["a"])(n.complete)}function b(n){return n&&n instanceof r["b"]||p(n)&&Object(o["b"])(n)}},a355:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){return"function"===typeof Symbol&&Symbol.observable||"@@observable"}()},a836:function(n,t,e){"use strict";(function(n){function r(){if("undefined"===typeof n){var t="undefined"!==typeof window?window:{},e=5e3,r=Date.now(),o=!1;t.document.addEventListener("deviceready",(function(){console.log("Ionic Native: deviceready event fired after "+(Date.now()-r)+" ms"),o=!0})),setTimeout((function(){!o&&t.cordova&&console.warn("Ionic Native: deviceready did not fire within "+e+"ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")}),e)}}e.d(t,"a",(function(){return r}))}).call(this,e("4362"))},b75a:function(n,t,e){"use strict";e.d(t,"a",(function(){return $}));var r=e("9ab4"),o=function(n){return n&&"number"===typeof n.length&&"function"!==typeof n},i=e("0e1a");function u(n){return Object(i["a"])(null===n||void 0===n?void 0:n.then)}var c=e("8f2e"),a=e("a355");function s(n){return Object(i["a"])(n[a["a"]])}function f(n){return Symbol.asyncIterator&&Object(i["a"])(null===n||void 0===n?void 0:n[Symbol.asyncIterator])}function l(n){return new TypeError("You provided "+(null!==n&&"object"===typeof n?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function d(){return"function"===typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var p=d();function b(n){return Object(i["a"])(null===n||void 0===n?void 0:n[p])}function v(n){return Object(r["a"])(this,arguments,(function(){var t,e,o,i;return Object(r["f"])(this,(function(u){switch(u.label){case 0:t=n.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,Object(r["c"])(t.read())];case 3:return e=u.sent(),o=e.value,i=e.done,i?[4,Object(r["c"])(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,Object(r["c"])(o)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}function h(n){return Object(i["a"])(null===n||void 0===n?void 0:n.getReader)}var y=e("33d6");function g(n){if(n instanceof c["a"])return n;if(null!=n){if(s(n))return w(n);if(o(n))return j(n);if(u(n))return m(n);if(f(n))return _(n);if(b(n))return O(n);if(h(n))return x(n)}throw l(n)}function w(n){return new c["a"]((function(t){var e=n[a["a"]]();if(Object(i["a"])(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}))}function j(n){return new c["a"]((function(t){for(var e=0;e<n.length&&!t.closed;e++)t.next(n[e]);t.complete()}))}function m(n){return new c["a"]((function(t){n.then((function(n){t.closed||(t.next(n),t.complete())}),(function(n){return t.error(n)})).then(null,y["a"])}))}function O(n){return new c["a"]((function(t){var e,o;try{for(var i=Object(r["i"])(n),u=i.next();!u.done;u=i.next()){var c=u.value;if(t.next(c),t.closed)return}}catch(a){e={error:a}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}t.complete()}))}function _(n){return new c["a"]((function(t){I(n,t).catch((function(n){return t.error(n)}))}))}function x(n){return _(v(n))}function I(n,t){var e,o,i,u;return Object(r["d"])(this,void 0,void 0,(function(){var c,a;return Object(r["f"])(this,(function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),e=Object(r["b"])(n),s.label=1;case 1:return[4,e.next()];case 2:if(o=s.sent(),o.done)return[3,4];if(c=o.value,t.next(c),t.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=s.sent(),i={error:a},[3,11];case 6:return s.trys.push([6,,9,10]),o&&!o.done&&(u=e.return)?[4,u.call(e)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))}))}function S(n){return Object(i["a"])(null===n||void 0===n?void 0:n.lift)}function P(n){return function(t){if(S(t))return t.lift((function(t){try{return n(t,this)}catch(e){this.error(e)}}));throw new TypeError("Unable to lift unknown Observable type")}}var A=e("4701"),E=function(n){function t(t,e,r,o,i){var u=n.call(this,t)||this;return u.onFinalize=i,u._next=e?function(n){try{e(n)}catch(r){t.error(r)}}:n.prototype._next,u._error=o?function(n){try{o(n)}catch(n){t.error(n)}finally{this.unsubscribe()}}:n.prototype._error,u._complete=r?function(){try{r()}catch(n){t.error(n)}finally{this.unsubscribe()}}:n.prototype._complete,u}return Object(r["e"])(t,n),t.prototype.unsubscribe=function(){var t,e=this.closed;n.prototype.unsubscribe.call(this),!e&&(null===(t=this.onFinalize)||void 0===t||t.call(this))},t}(A["b"]);function N(n,t){return P((function(e,r){var o=0;e.subscribe(new E(r,(function(e){r.next(n.call(t,e,o++))})))}))}function k(n,t,e,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var i=t.schedule((function(){e(),o?n.add(this.schedule(null,r)):this.unsubscribe()}),r);if(n.add(i),!o)return i}function T(n,t,e,r,o,i,u,c){var a=[],s=0,f=0,l=!1,d=function(){!l||a.length||s||t.complete()},p=function(n){return s<r?b(n):a.push(n)},b=function(n){i&&t.next(n),s++;var c=!1;g(e(n,f++)).subscribe(new E(t,(function(n){null===o||void 0===o||o(n),i?p(n):t.next(n)}),(function(){c=!0}),void 0,(function(){if(c)try{s--;var n=function(){var n=a.shift();u?k(t,u,(function(){return b(n)})):b(n)};while(a.length&&s<r)n();d()}catch(e){t.error(e)}})))};return n.subscribe(new E(t,p,(function(){l=!0,d()}))),function(){null===c||void 0===c||c()}}function B(n,t,e){return void 0===e&&(e=1/0),Object(i["a"])(t)?B((function(e,r){return N((function(n,o){return t(e,n,r,o)}))(g(n(e,r)))}),e):("number"===typeof t&&(e=t),P((function(t,r){return T(t,r,n,e)})))}var L=Array.isArray;function F(n,t){return L(t)?n.apply(void 0,Object(r["h"])([],Object(r["g"])(t))):n(t)}function H(n){return N((function(t){return F(n,t)}))}var R=["addListener","removeListener"],C=["addEventListener","removeEventListener"],D=["on","off"];function $(n,t,e,u){if(Object(i["a"])(e)&&(u=e,e=void 0),u)return $(n,t,e).pipe(H(u));var a=Object(r["g"])(Y(n)?C.map((function(r){return function(o){return n[r](t,o,e)}})):q(n)?R.map(U(n,t)):M(n)?D.map(U(n,t)):[],2),s=a[0],f=a[1];if(!s&&o(n))return B((function(n){return $(n,t,e)}))(g(n));if(!s)throw new TypeError("Invalid event target");return new c["a"]((function(n){var t=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.next(1<t.length?t:t[0])};return s(t),function(){return f(t)}}))}function U(n,t){return function(e){return function(r){return n[e](t,r)}}}function q(n){return Object(i["a"])(n.addListener)&&Object(i["a"])(n.removeListener)}function M(n){return Object(i["a"])(n.on)&&Object(i["a"])(n.off)}function Y(n){return Object(i["a"])(n.addEventListener)&&Object(i["a"])(n.removeEventListener)}},c3c4:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var r=e("a836"),o=e("2800");function i(n,t){for(var e=t.split("."),r=n,o=0;o<e.length;o++){if(!r)return null;r=r[e[o]]}return r}var u=function(){function n(){}return n.installed=function(){var n=!0===Object(o["a"])(this.pluginRef);return n},n.getPlugin=function(){return"undefined"!==typeof window?i(window,this.pluginRef):null},n.getPluginName=function(){var n=this.pluginName;return n},n.getPluginRef=function(){var n=this.pluginRef;return n},n.getPluginInstallName=function(){var n=this.plugin;return n},n.getSupportedPlatforms=function(){var n=this.platforms;return n},n.pluginName="",n.pluginRef="",n.plugin="",n.repo="",n.platforms=[],n.install="",n}();var c=e("8f2e");function a(n,t,e,r){return r=Array.from(r),Object(o["e"])(n,t,e).apply(this,r)}Object(r["a"])();var s=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},n(t,e)};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),f=function(){function n(n,t,e){try{e&&"string"!==typeof e&&(e=Object.keys(e).map((function(n){return n+"="+e[n]})).join(",")),this._objectInstance=cordova.InAppBrowser.open(n,t,e)}catch(r){"undefined"!==typeof window&&window.open(n,t),console.warn("Native: InAppBrowserOriginal is not installed or you are running on a browser. Falling back to window.open.")}}return n.prototype._loadAfterBeforeload=function(n){return a(this,"_loadAfterBeforeload",{sync:!0},arguments)},n.prototype.show=function(){return a(this,"show",{sync:!0},arguments)},n.prototype.close=function(){return a(this,"close",{sync:!0},arguments)},n.prototype.hide=function(){return a(this,"hide",{sync:!0},arguments)},n.prototype.executeScript=function(n){return a(this,"executeScript",{},arguments)},n.prototype.insertCSS=function(n){return a(this,"insertCSS",{},arguments)},n.prototype.on=function(n){var t=this;return function(){if(!0===Object(o["c"])(t))return new c["a"]((function(e){return t._objectInstance.addEventListener(n,e.next.bind(e)),function(){return t._objectInstance.removeEventListener(n,e.next.bind(e))}}))}()},n.prototype.on=function(n){var t=this;return function(){if(!0===Object(o["c"])(t))return new c["a"]((function(e){return t._objectInstance.addEventListener(n,e.next.bind(e)),function(){return t._objectInstance.removeEventListener(n,e.next.bind(e))}}))}()},n}(),l=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return s(t,n),t.prototype.create=function(n,t,e){return new f(n,t,e)},t.pluginName="InAppBrowser",t.plugin="cordova-plugin-inappbrowser",t.pluginRef="cordova.InAppBrowser",t.repo="https://github.com/apache/cordova-plugin-inappbrowser",t.platforms=["AmazonFire OS","Android","Browser","iOS","macOS","Windows"],t}(u),d=new l},e193:function(n,t,e){"use strict";var r=e("7a23");const o=Object(r["i"])(" 點燈祈福 "),i=Object(r["i"])(" 會員資料資料 "),u=Object(r["i"])(" 購買資料 "),c=Object(r["i"])(" 登出系統 ");function a(n,t,e,a,s,f){const l=Object(r["B"])("ion-img"),d=Object(r["B"])("ion-button"),p=Object(r["B"])("ion-buttons"),b=Object(r["B"])("ion-toolbar");return Object(r["u"])(),Object(r["g"])(r["a"],null,[e.step?(Object(r["u"])(),Object(r["e"])(l,{key:0,class:"step-bar",src:`/assets/images/step-${e.step}.png`},null,8,["src"])):Object(r["f"])("",!0),Object(r["I"])(Object(r["j"])(b,null,{default:Object(r["H"])(()=>[Object(r["j"])(p,null,{default:Object(r["H"])(()=>[Object(r["j"])(d,{class:"button-4","router-link":"/temple-list"},{default:Object(r["H"])(()=>[Object(r["j"])(l,{slot:"start",src:"/assets/images/icon1-1.png"}),o]),_:1}),Object(r["j"])(d,{class:"button-4","router-link":"/member-info"},{default:Object(r["H"])(()=>[Object(r["j"])(l,{slot:"start",src:"/assets/images/icon1-2.png"}),i]),_:1}),Object(r["j"])(d,{class:"button-4","router-link":"/order-list"},{default:Object(r["H"])(()=>[Object(r["j"])(l,{slot:"start",src:"/assets/images/icon1-3.png"}),u]),_:1}),Object(r["j"])(d,{class:"button-4",onClick:f.logout},{default:Object(r["H"])(()=>[Object(r["j"])(l,{slot:"start",src:"/assets/images/icon1-4.png"}),c]),_:1},8,["onClick"])]),_:1})]),_:1},512),[[r["F"],f.token]])],64)}var s=e("d722"),f=e("d867"),l={components:{IonButton:f["IonButton"],IonButtons:f["IonButtons"],IonImg:f["IonImg"],IonToolbar:f["IonToolbar"]},computed:{token(){return this.$store.state.token}},methods:{logout(){Object(s["logout"])(()=>{this.$store.commit("logout"),this.$route.meta.requiresAuth&&this.$router.push({name:"Home"})})}},props:{step:String}},d=(e("00f5"),e("6b0d")),p=e.n(d);const b=p()(l,[["render",a],["__scopeId","data-v-f60f87d0"]]);t["a"]=b}}]);
//# sourceMappingURL=chunk-497f9f07.510dd150.js.map