(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0942":function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},"2LUv":function(e,t,n){var r=n("m1Oa"),o=n("o/EK"),i=n("ShTl"),a=n("sJOi");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},"5dyF":function(e,t,n){e.exports=n("9CGT")},"9CGT":function(e,t,n){"use strict";var r=n("fwM5"),o=n("bkNG"),i=n("5YB7"),a=n("Y8Bl"),c=n("7osH");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var s=n("mYab"),l=n("HIQq");t.__esModule=!0,t.default=void 0;var f,p=l(n("mXGw")),d=n("ly6l"),h=n("z4BS"),y=s(n("bBV7")),m=n("a4i1");function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var b=new Map,g=window.IntersectionObserver,w={};function k(){return f||(g?f=new g((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){i(a,e);var t=u(a);function a(e){var n;return r(this,a),(n=t.call(this,e)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:(0,m.addBasePath)(v(e)),as:t?(0,m.addBasePath)(v(t)):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,c=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,d.resolve)(u,a),c=c?(0,d.resolve)(u,c):a,e.preventDefault();var s=n.props.scroll;null==s&&(s=c.indexOf("#")<0),y.default[n.props.replace?"replace":"push"](a,c,{shallow:n.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return o(a,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();y.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,i=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),c={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(c.href=i||o);var u=n("Z0wt").rewriteUrlForNextExport;return c.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(c.href=u(c.href)),p.default.cloneElement(a,c)}}]),a}(p.Component);t.default=O},"9fEB":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=u(n("mXGw")),o=u(n("GlZI")),i=n("9rrO"),a=n("bxxT"),c=n("vI6Y");function u(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;p.has(l)?i=!1:(p.add(l),r[s]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function h(e){var t=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}h.rewind=d.rewind;var y=h;t.default=y},"9rrO":function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},CHlC:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},GlZI:function(e,t,n){"use strict";var r=n("fwM5"),o=n("0pOA"),i=n("bkNG"),a=n("5YB7"),c=n("Y8Bl"),u=n("7osH"),s=n("2LUv");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("mXGw"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){a(s,c);var u=l(s);function s(e){var i;return r(this,s),i=u.call(this,e),p&&(t.add(o(i)),n(o(i))),i}return i(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},J1LG:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},"P+uj":function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},UIRo:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={siteTitle:"phiresky's blog",siteDescription:"About my personal projects and other stuff",stylesheets:[],id:"https://phiresky.github.io/blog/",publicUrlBase:"https://phiresky.github.io",topLinks:[{text:"Blog",href:"https://phiresky.github.io/blog/"},{text:"GitHub",href:"https://github.com/phiresky/"}],backgroundClass:"bg-dark-gray",siteId:"UA-39197996-3",blogRoot:"/blog/",blogSourceUrl:"https://github.com/phiresky/blog",postSourceUrlBase:"https://github.com/phiresky/blog/blob/master/posts/",postSourceHistoryUrlBase:"https://github.com/phiresky/blog/commits/master/posts/"}},hisu:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},kMo5:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("J1LG"),o=n("0942");function i(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!==typeof t?Object(o.a)(e):t}},m1Oa:function(e,t,n){var r=n("z3mR");e.exports=function(e){if(Array.isArray(e))return r(e)}},mK0O:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},"o/EK":function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},sJOi:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("mXGw"))&&r.__esModule?r:{default:r},i=n("9rrO");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}},yBJb:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},zRbM:function(e,t,n){"use strict";var r=n("mK0O"),o=n("mXGw"),i=n.n(o),a=n("9fEB"),c=n.n(a),u=i.a.createElement;var s=function(e){var t=e.description||e.siteDescription,n=(e.title?e.title+" - ":"")+e.siteTitle;return u(c.a,null,u("title",null,n),u("meta",{name:"description",content:t}),u("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),u("link",{rel:"alternate",type:"application/rss+xml",title:"RSS feed of ".concat(e.siteTitle),href:e.publicUrlBase+e.blogRoot+"rss.xml"}),u("link",{rel:"alternate",type:"application/atom+xml",title:"Atom feed of ".concat(e.siteTitle),href:e.publicUrlBase+e.blogRoot+"atom.xml"}),u("link",{rel:"alternate",type:"application/json",title:"JSON feed of ".concat(e.siteTitle),href:e.publicUrlBase+e.blogRoot+"feed.json"}),e.stylesheets&&e.stylesheets.length>0&&e.stylesheets.map((function(e,t){return u("link",{key:t,rel:"stylesheet",href:e})})),u("style",null,"\n          body {\n            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n          }\n      "))},l=n("5dyF"),f=n.n(l),p=i.a.createElement;var d=function(e){return p("div",{className:"relative tc ".concat(e.backgroundClass)},p("div",{className:"mw7 center white"},p("div",{className:"pv4"},p("h4",{className:"normal o-70 ma0 pt2 pb3 ph1"},e.subtitle),p("div",null,e.topLinks&&e.topLinks.length>0&&e.topLinks.map((function(e,t){var n="dib f6 white no-underline pa1 ma1";return e.href.match(/^https?:/)?p("a",{href:e.href,key:t,className:n},e.text):p(f.a,{href:e.href,key:t},p("a",{className:n,key:t},e.text))}))))))},h=n("UIRo"),y=i.a.createElement;var m=function(e){return y("footer",{className:"center w5 f6 tc mt4"},y("p",null,e.override||y("a",{href:h.a.blogSourceUrl},"View blog source on GitHub")))},v=i.a.createElement;var b=function(e){return v("div",null,v("script",{dangerouslySetInnerHTML:{__html:(t=e.siteId,"/* yes, I know... fite me */\n  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n  e.src='https://www.google-analytics.com/analytics.js';\n  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\n  ga('create','".concat(t,"','auto');ga('send','pageview');\n"))}}));var t},g=i.a.createElement;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=k(k({},h.a),e);return g("div",null,g(s,t),g("main",{className:"lh-copy"},g(d,{heroTitle:t.siteTitle,subtitle:t.siteDescription,topLinks:t.topLinks,backgroundClass:t.backgroundClass}),t.children,g(m,{override:t.footer}),t.siteId&&g(b,{siteId:t.siteId})))}}}]);