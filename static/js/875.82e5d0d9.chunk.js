/*! For license information please see 875.82e5d0d9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[875],{7075:function(t,n,r){r.d(n,{Df:function(){return u},M1:function(){return f},TP:function(){return l},aK:function(){return s},tx:function(){return h}});var e=r(5861),o=r(1243);function i(){i=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,e=Object.defineProperty||function(t,n,r){t[n]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(O){s=function(t,n,r){return t[n]=r}}function l(t,n,r,o){var i=n&&n.prototype instanceof p?n:p,a=Object.create(i.prototype),c=new k(o||[]);return e(a,"_invoke",{value:j(t,r,c)}),a}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var x=Object.getPrototypeOf,g=x&&x(x(E([])));g&&g!==n&&r.call(g,a)&&(y=g);var m=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function b(t,n){function o(e,i,a,c){var u=f(t[e],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;e(this,"_invoke",{value:function(t,r){function e(){return new n((function(n,e){o(t,r,n,e)}))}return i=i?i.then(e,e):e()}})}function j(t,n,r){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=Z(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var u=f(t,n,r);if("normal"===u.type){if(e=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(e="completed",r.method="throw",r.arg=u.arg)}}}function Z(t,n){var r=n.method,e=t.iterator[r];if(void 0===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=void 0,Z(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,e(m,"constructor",{value:v,configurable:!0}),e(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(n,r,e,o,i){void 0===i&&(i=Promise);var a=new b(l(n,r,e,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),s(m,u,"Generator"),s(m,a,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(r,e){return a.type="throw",a.arg=t,n.next=r,e&&(n.method="next",n.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:E(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var a="afe52aa8ce58d403415529b103529ed7",c="https://api.themoviedb.org/3/",u=function(){var t=(0,e.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"trending/movie/day?api_key=").concat(a));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"search/movie?api_key=").concat(a,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"movie/").concat(n,"?api_key=").concat(a));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(a));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(a));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},9098:function(t,n,r){r.d(n,{__:function(){return v},aV:function(){return f},dh:function(){return d},ds:function(){return p},ye:function(){return h}});var e,o,i,a,c,u=r(168),s=r(5867),l=r(1087),f=s.ZP.ul(e||(e=(0,u.Z)(["\n    display: flex;\n    margin-top: 20px;\n    flex-direction:column;\n    list-style-type: none;\n    gap: 10px;\n"]))),h=(0,s.ZP)(l.rU)(o||(o=(0,u.Z)(["\n  /* padding: 4px;\n  border-radius: 4px; */\n  /* border: 1px solid grey; */\n  /* text-decoration: none; */\n  color: black;\n  font-size: 14px;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: tomato;\n  }\n  /* :hover {\n    background-color: lightblue;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }     */\n"]))),p=s.ZP.ul(i||(i=(0,u.Z)(["\n  --items: 6;\n  --gap: 20px;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--gap);\n  padding: 50px;\n  list-style: none;\n"]))),d=s.ZP.li(a||(a=(0,u.Z)(["\n  flex-basis: calc((100% - var(--gap) * (var(--items) - 1)) / var(--items));\n"]))),v=s.ZP.img(c||(c=(0,u.Z)(["\n  width: 200px; \n"])))},6479:function(t,n,r){r.d(n,{W2:function(){return l},Wf:function(){return h},XU:function(){return d},vj:function(){return f},xD:function(){return p}});var e,o,i,a,c,u=r(168),s=r(5867),l=s.ZP.section(e||(e=(0,u.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-top: 20px;\n  padding: 0 0 20px 20px;\n"]))),f=s.ZP.div(o||(o=(0,u.Z)(["\n  flex-basis: 320px;\n  margin-bottom: 20px;\n  \n"]))),h=s.ZP.img(i||(i=(0,u.Z)(["\n  min-width: 200px;\n"]))),p=s.ZP.div(a||(a=(0,u.Z)(["\n"]))),d=s.ZP.p(c||(c=(0,u.Z)(["\n  margin: 16px 0;\n"])))},8875:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var e=r(9439),o=r(7689),i=r(2791),a=r(7075),c=r(2850),u=r(6479),s=r(184),l=function(t){var n=t.details,r=n.genres,e=void 0===r?[]:r,o=n.title,i=n.poster_path,a=n.release_date,l=n.vote_average,f=n.overview;return(0,s.jsxs)(u.W2,{children:[(0,s.jsx)(u.vj,{children:(0,s.jsx)(u.Wf,{src:i?"".concat("https://image.tmdb.org/t/p/w500").concat(i):(0,s.jsx)(c.a,{}),alt:o})}),(0,s.jsxs)(u.xD,{children:[(0,s.jsxs)("h2",{children:[o,a?"(".concat(a.slice(0,4),")"):""]}),(0,s.jsxs)(u.XU,{children:["User Score: ",l?"".concat(Math.round(10*l),"%"):"Empty.."]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)(u.XU,{children:f||"Oops..."}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)(u.XU,{children:e.length?e.map((function(t){return t.name})).join(", "):"Oops..."})]})]})},f=r(3459),h=r(9128),p=r(9098),d=function(){var t,n,r=(0,o.UO)().movieId,u=(0,o.TH)(),d=(0,i.useRef)(null!==(t=null===(n=u.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/"),v=(0,i.useState)({}),y=(0,e.Z)(v,2),x=y[0],g=y[1],m=(0,i.useState)(!1),w=(0,e.Z)(m,2),b=w[0],j=w[1],Z=(0,i.useState)(null),_=(0,e.Z)(Z,2),L=_[0],k=_[1];return(0,i.useEffect)((function(){j(!0),(0,a.TP)(r).then((function(t){g(t)})).catch((function(t){g({}),k(String(t))})).finally((function(){j(!1)}))}),[r]),(0,s.jsx)(f.W2,{children:(0,s.jsxs)("main",{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)(f.II,{to:d.current,children:[(0,s.jsx)(h.jTe,{size:"12"}),"Go back"]}),x&&(0,s.jsx)(l,{details:x}),b&&(0,s.jsx)(c.a,{}),L&&(0,s.jsx)("span",{children:L})]}),(0,s.jsx)("p",{children:"Additional information"}),(0,s.jsx)(p.aV,{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(p.ye,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(p.ye,{to:"reviews",children:"Reviews"})})]})}),(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)(c.a,{}),children:(0,s.jsx)(o.j3,{})})]})})}}}]);
//# sourceMappingURL=875.82e5d0d9.chunk.js.map