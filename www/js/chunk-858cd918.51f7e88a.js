(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-858cd918"],{"10e8":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return s})),n.d(e,"ion_route_redirect",(function(){return c})),n.d(e,"ion_router",(function(){return z})),n.d(e,"ion_router_link",(function(){return B}));var r=n("9ab4"),o=n("6d28"),i=n("61cf"),u=n("7d8d"),a=n("feca"),s=function(){function t(t){Object(o["o"])(this,t),this.ionRouteDataChanged=Object(o["g"])(this,"ionRouteDataChanged",7),this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var u=i[o];if(t[u]!==e[u])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),t}(),c=function(){function t(t){Object(o["o"])(this,t),this.ionRouteRedirectChanged=Object(o["g"])(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),t}(),h="root",f="forward",l="back",d=function(t){var e=t.filter((function(t){return t.length>0})).join("/");return"/"+e},p=function(t,e,n){var r=d(t);return e&&(r="#"+r),void 0!==n&&(r+="?"+n),r},v=function(t,e,n,o,i,u,a){var s=p(Object(r["h"])(Object(r["h"])([],y(e).segments),o),n,a);i===f?t.pushState(u,"",s):t.replaceState(u,"",s)},b=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,u=o.path;i<u.length;i++){var a=u[i];if(":"===a[0]){var s=o.params&&o.params[a.slice(1)];if(!s)return null;e.push(s)}else""!==a&&e.push(a)}return e},g=function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)},m=function(t,e,n){var r=y(e).segments,o=n?t.hash.slice(1):t.pathname,i=y(o).segments;return g(r,i)},y=function(t){var e,n=[""];if(null!=t){var r=t.indexOf("?");r>-1&&(e=t.substr(r+1),t=t.substr(0,r)),n=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0})),0===n.length&&(n=[""])}return{segments:n,queryString:e}},w=function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+d(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++){var o=r[n];e(o)}console.groupEnd()},j=function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+d(r.from),"font-weight: bold"," TO: ","$c "+d(r.to.segments),"font-weight: bold")}console.groupEnd()},O=function(t,e,n,o,u,a){return void 0===u&&(u=!1),Object(r["d"])(void 0,void 0,void 0,(function(){var s,c,f,l;return Object(r["f"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),s=k(t),o>=e.length||!s?[2,u]:[4,new Promise((function(t){return Object(i["c"])(s,t)}))];case 1:return r.sent(),c=e[o],[4,s.setRouteId(c.id,c.params,n,a)];case 2:return f=r.sent(),f.changed&&(n=h,u=!0),[4,O(f.element,e,n,o+1,u,a)];case 3:return u=r.sent(),f.markVisible?[4,f.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,u];case 6:return l=r.sent(),console.error(l),[2,!1];case 7:return[2]}}))}))},R=function(t){return Object(r["d"])(void 0,void 0,void 0,(function(){var e,n,o,i;return Object(r["f"])(this,(function(r){switch(r.label){case 0:e=[],o=t,r.label=1;case 1:return n=k(o),n?[4,n.getRouteId()]:[3,3];case 2:return i=r.sent(),i?(o=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}}))}))},C=function(){return k(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))},P=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",k=function(t){if(t){if(t.matches(P))return t;var e=t.querySelector(P);return null!==e&&void 0!==e?e:void 0}},S=function(t,e){var n=e.from,r=e.to;if(void 0===r)return!1;if(n.length>t.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if("*"===i)return!0;if(i!==t[o])return!1}return n.length===t.length},E=function(t,e){return e.find((function(e){return S(t,e)}))},D=function(t,e){for(var n=Math.min(t.length,e.length),r=0,o=0;o<n;o++){var i=t[o],u=e[o];if(i.id.toLowerCase()!==u.id)break;if(i.params){var a=Object.keys(i.params);if(a.length===u.path.length)for(var s=a.map((function(t){return":"+t})),c=0;c<s.length;c++){if(s[c].toLowerCase()!==u.path[c])break;r++}}r++}return r},L=function(t,e){for(var n,r=new q(t),o=!1,i=0;i<e.length;i++){var u=e[i].path;if(""===u[0])o=!0;else{for(var a=0,s=u;a<s.length;a++){var c=s[a],h=r.next();if(":"===c[0]){if(""===h)return null;n=n||[];var f=n[i]||(n[i]={});f[c.slice(1)]=h}else if(h!==c)return null}o=!1}}var l=!o||o===(""===r.next());return l?n?e.map((function(t,e){return{id:t.id,path:t.path,params:N(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}})):e:null},N=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},U=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var u=i[o],a=D(t,u);a>r&&(n=u,r=a)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:N(e.params,t[n]&&t[n].params)}})):null},x=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var u=i[o],a=L(t,u);if(null!==a){var s=W(a);s>r&&(r=s,n=a)}}return n},W=function(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=o[r],u=0,a=i.path;u<a.length;u++){var s=a[u];":"===s[0]?e+=Math.pow(1,n):""!==s&&(e+=Math.pow(2,n)),n++}return e},q=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),A=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},T=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=A(t,"to");return{from:y(A(t,"from")).segments,to:null==e?void 0:y(e)}}))},I=function(t){return G(_(t))},_=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(t){var e=A(t,"component");return{path:y(A(t,"url")).segments,id:e.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:_(t)}}))},G=function(t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n];M([],e,o)}return e},M=function(t,e,n){if(t=t.slice(),t.push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(var r=0,o=n.children;r<o.length;r++){var i=o[r];M(t,e,i)}else e.push(t)},z=function(){function t(t){Object(o["o"])(this,t),this.ionRouteWillChange=Object(o["g"])(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o["g"])(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return Object(r["d"])(this,void 0,void 0,(function(){var t,e,n;return Object(r["f"])(this,(function(r){switch(r.label){case 0:return[4,C()];case 1:return r.sent(),[4,this.runGuards(this.getPath())];case 2:return t=r.sent(),!0===t?[3,5]:"object"!==typeof t?[3,4]:(e=t.redirect,n=y(e),this.setPath(n.segments,h,n.queryString),[4,this.writeNavStateRoot(n.segments,h)]);case 3:r.sent(),r.label=4;case 4:return[3,7];case 5:return[4,this.onRoutesChanged()];case 6:r.sent(),r.label=7;case 7:return[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(i["n"])(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i["n"])(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){return Object(r["d"])(this,void 0,void 0,(function(){var t,e,n;return Object(r["f"])(this,(function(r){switch(r.label){case 0:return t=this.historyDirection(),e=this.getPath(),[4,this.runGuards(e)];case 1:if(n=r.sent(),!0!==n){if("object"!==typeof n)return[2,!1];e=y(n.redirect).segments}return[2,this.writeNavStateRoot(e,t)]}}))}))},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(t){e.back(),t()}))},t.prototype.canTransition=function(){return Object(r["d"])(this,void 0,void 0,(function(){var t;return Object(r["f"])(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:return t=e.sent(),!0!==t?"object"===typeof t?[2,t.redirect]:[2,!1]:[2,!0]}}))}))},t.prototype.push=function(t,e,n){return void 0===e&&(e="forward"),Object(r["d"])(this,void 0,void 0,(function(){var o,i;return Object(r["f"])(this,(function(r){switch(r.label){case 0:return t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),o=y(t),[4,this.runGuards(o.segments)];case 1:if(i=r.sent(),!0!==i){if("object"!==typeof i)return[2,!1];o=y(i.redirect)}return this.setPath(o.segments,e,o.queryString),[2,this.writeNavStateRoot(o.segments,e,n)]}}))}))},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return Object(r["d"])(this,void 0,void 0,(function(){return Object(r["f"])(this,(function(t){return w(I(this.el)),j(T(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return Object(r["d"])(this,void 0,void 0,(function(){var e,n,o,i,u,a;return Object(r["f"])(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,R(window.document.body)];case 1:return e=r.sent(),n=e.ids,o=e.outlet,i=I(this.el),u=U(n,i),u?(a=b(u),a?(this.setPath(a,t),[4,this.safeWriteNavState(o,u,h,a,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return r.sent(),[2,!0]}}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&E(t,T(this.el))&&this.writeNavStateRoot(t,h)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),h)},t.prototype.historyDirection=function(){var t,e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));var n=e.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?f:n<r?l:h},t.prototype.writeNavStateRoot=function(t,e,n){return Object(r["d"])(this,void 0,void 0,(function(){var o,i,u,a,s,c,h,f;return Object(r["f"])(this,(function(r){return t?(o=T(this.el),i=E(t,o),u=null,i&&(a=i.to,s=a.segments,c=a.queryString,this.setPath(s,e,c),u=i.from,t=s),h=I(this.el),f=x(t,h),f?[2,this.safeWriteNavState(document.body,f,e,t,u,0,n)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),Object(r["d"])(this,void 0,void 0,(function(){var s,c,h;return Object(r["f"])(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:s=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,u,a)];case 3:return c=r.sent(),[3,5];case 4:return h=r.sent(),console.error(h),[3,5];case 5:return s(),[2,c]}}))}))},t.prototype.lock=function(){return Object(r["d"])(this,void 0,void 0,(function(){var t,e;return Object(r["f"])(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},t.prototype.runGuards=function(t,e){return void 0===t&&(t=this.getPath()),Object(r["d"])(this,void 0,void 0,(function(){var n,o,i,u,a,s,c;return Object(r["f"])(this,(function(r){switch(r.label){case 0:return void 0===e&&(e=y(this.previousPath).segments),t&&e?(n=I(this.el),o=x(e,n),i=o&&o[o.length-1].beforeLeave,i?[4,i()]:[3,2]):[2,!0];case 1:return a=r.sent(),[3,3];case 2:a=!0,r.label=3;case 3:return u=a,!1===u||"object"===typeof u?[2,u]:(s=x(t,n),c=s&&s[s.length-1].beforeEnter,[2,!c||c()])}}))}))},t.prototype.writeNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),Object(r["d"])(this,void 0,void 0,(function(){var s,c;return Object(r["f"])(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,s=this.routeChangeEvent(o,i),s&&this.ionRouteWillChange.emit(s),[4,O(t,e,n,u,!1,a)]);case 1:return c=r.sent(),this.busy=!1,s&&this.ionRouteDidChange.emit(s),[2,c]}}))}))},t.prototype.setPath=function(t,e,n){this.state++,v(window.history,this.root,this.useHash,t,e,this.state,n)},t.prototype.getPath=function(){return m(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=d(t);if(this.previousPath=r,r===n)return null;var o=e?d(e):null;return{from:n,redirectedFrom:o,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o["k"])(this)},enumerable:!1,configurable:!0}),t}(),H=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}",B=function(){function t(t){var e=this;Object(o["o"])(this,t),this.routerDirection="forward",this.onClick=function(t){Object(a["d"])(e.href,t,e.routerDirection,e.routerAnimation)}}return t.prototype.render=function(){var t,e=Object(u["b"])(this),n={href:this.href,rel:this.rel,target:this.target};return Object(o["j"])(o["c"],{onClick:this.onClick,class:Object(a["a"])(this.color,(t={},t[e]=!0,t["ion-activatable"]=!0,t))},Object(o["j"])("a",Object.assign({},n),Object(o["j"])("slot",null)))},t}();B.style=H},feca:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var r=n("9ab4"),o=function(t,e){return null!==e.closest(t)},i=function(t,e){var n;return"string"===typeof t&&t.length>0?Object.assign((n={"ion-color":!0},n["ion-color-"+t]=!0,n),e):e},u=function(t){if(void 0!==t){var e=Array.isArray(t)?t:t.split(" ");return e.filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t}))}return[]},a=function(t){var e={};return u(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,n,o){return Object(r["d"])(void 0,void 0,void 0,(function(){var i;return Object(r["f"])(this,(function(r){return null!=t&&"#"!==t[0]&&!s.test(t)&&(i=document.querySelector("ion-router"),i)?(null!=e&&e.preventDefault(),[2,i.push(t,n,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=chunk-858cd918.51f7e88a.js.map