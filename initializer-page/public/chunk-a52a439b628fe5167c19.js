(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,t,o){"use strict";var n=o(111).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},111:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(o(0)),r=a(o(112));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var b=function(e){function t(){var e,o;l(this,t);for(var a=arguments.length,i=new Array(a),p=0;p<a;p++)i[p]=arguments[p];return m(d(o=u(this,(e=f(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=o.props,a=t.text,i=t.onCopy,p=t.children,c=t.options,l=n.default.Children.only(p),s=(0,r.default)(a,c);i&&i(a,s),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e)})),o}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),o=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=c(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(o,!0).forEach((function(t){m(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}])&&s(o.prototype,a),i&&s(o,i),t}(n.default.PureComponent);t.CopyToClipboard=b,m(b,"defaultProps",{onCopy:void 0,options:void 0})},112:function(e,t,o){"use strict";var n=o(113),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,i,p,c,l,s=!1;t||(t={}),o=t.debug||!1;try{if(i=n(),p=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),p.selectNodeContents(l),c.addRange(p),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(n){o&&console.error("unable to copy using execCommand: ",n),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(n){o&&console.error("unable to copy using clipboardData: ",n),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(p):c.removeAllRanges()),l&&document.body.removeChild(l),i()}return s}},113:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},229:function(e,t,o){var n=o(42),r=o(230);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(r,a);e.exports=r.locals||{}},230:function(e,t,o){(t=o(43)(!1)).push([e.i,".popup-share{z-index:10000;position:fixed;top:0;left:0;width:500px;background:white;box-shadow:0 10px 40px rgba(0,0,0,0.2);-webkit-transition:all .15s;-moz-transition:all .15s;-ms-transition:all .15s;-o-transition:all .15s;transition:all .15s}.popup-share:before{content:' ';height:60px;width:500px;position:absolute;bottom:-60px;left:0}.popup-share .popup-content{padding:24px;padding-top:8px}.popup-share .popup-content label{display:block;font-size:15px;color:#222;line-height:24px;padding-top:8px}.popup-share .popup-content .control{position:relative;padding-bottom:8px}.popup-share .popup-content .control-input{padding-right:70px}.popup-share .popup-content .control-input.padding-lg{padding-right:88px}.popup-share .popup-content .link{position:absolute;top:0;padding:0 16px;height:38px;line-height:43px;right:0;color:#7D57EF;text-decoration:underline}.popup-share .popup-content .link:hover{text-decoration:none}.popup-share .popup-header{position:relative;padding:4px 16px 2px;border-bottom:1px solid #ebebeb}.popup-share .popup-header h1{font-size:16px;line-height:16px}.popup-share .popup-header .close{display:block;position:absolute;top:8px;right:4px;padding:4px 8px;height:22px;cursor:pointer;opacity:0.7;color:#222}.popup-share .popup-header .close svg{width:14px}.popup-share .popup-header .close:hover{opacity:1}.button.share-ghost{position:fixed;top:0;left:0;transition:none;z-index:99000}.popup-share-overlay{position:fixed;z-index:9999;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.6)}.popup-enter{opacity:0.01;transform:scale(0.95)}.popup-enter-active{opacity:1;transform:scale(1);transition:all 300ms}.popup-exit{opacity:1;transform:scale(1)}.popup-exit-active{opacity:0.01;transform:scale(0.95);transition:all 300ms}.overlay-enter{opacity:0.01}.overlay-enter-active{opacity:1;transition:all 300ms}.overlay-exit{opacity:1}.overlay-exit-active{opacity:0.01;transition:all 300ms}\n",""]),e.exports=t},238:function(e,t,o){"use strict";o.r(t);o(229);var n=o(1),r=o.n(n),a=o(0),i=o.n(a),p=o(101),c=o(102),l=function(){document.documentElement.style.overflow="hidden"},s=function(){document.documentElement.style.overflow=""};function u(e){var t=e.open;return i.a.createElement(p.a,{component:null},t&&i.a.createElement(c.a,{onEnter:function(){l()},onExit:function(){s()},classNames:"overlay",timeout:500},i.a.createElement("div",{className:"popup-share-overlay"})))}u.propTypes={open:r.a.bool.isRequired};var f=u,d=o(3),y=o.n(d),m=o(2),b=o.n(m),h=o(106),g=o(29),v=o(4);function x(e){var t=e.shareUrl,o=e.shareSrc,n=e.open,r=e.onClose,l=e.position,s=Object(a.useState)("Copy"),u=y()(s,2),f=u[0],d=u[1],m=Object(a.useRef)(null),x=Object(a.useRef)(null),w=Object(a.useRef)(null),C=Object(g.a)();Object(a.useEffect)((function(){var e=function(e){var t=b()(m,"current");t&&!t.contains(e.target)&&r()};return document.addEventListener("mousedown",e),b()(x,"current")&&b()(x,"current").focus(),function(){document.removeEventListener("mousedown",e)}}),[r,x]);var E="".concat(C.origin,"/bootstrap.html/").concat(o,"#!").concat(t);return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{component:null},n&&i.a.createElement(c.a,{onEnter:function(){d("复制")},classNames:"popup",timeout:500},i.a.createElement("div",{className:"popup-share",style:{top:"".concat(l.y-200,"px"),left:"".concat(l.x-200,"px")}},i.a.createElement("div",{ref:m},i.a.createElement("div",{className:"popup-header"},i.a.createElement("h1",null,"分享你的配置"),i.a.createElement("a",{href:"/#",onClick:function(e){e.preventDefault(),r()},className:"close"},i.a.createElement(v.l,null))),i.a.createElement("div",{className:"popup-content"},i.a.createElement("label",{htmlFor:"input-share"},"请复制下面的链接来分享你的项目配置；"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{onFocus:function(e){e.target.select()},id:"input-share",className:"control-input ".concat("Copied!"===f?"padding-lg":""),readOnly:!0,value:E,ref:x}),i.a.createElement(h.CopyToClipboard,{onCopy:function(){d("已复制!"),x.current.focus(),setTimeout((function(){r()}),500)},text:E},i.a.createElement("a",{href:"/#",onClick:function(e){e.preventDefault()},className:"link",ref:w},f)))))))),n&&i.a.createElement("button",{className:"button primary share-ghost",type:"button",style:{top:"".concat(l.y,"px"),left:"".concat(l.x,"px")}},"分享..."))}x.propTypes={shareUrl:r.a.string.isRequired,shareSrc:r.a.string.isRequired,open:r.a.bool.isRequired,onClose:r.a.func.isRequired,position:r.a.shape({x:r.a.number.isRequired,y:r.a.number.isRequired}).isRequired};var w=x;function C(e){var t=e.shareUrl,o=e.shareSrc,n=e.open,r=e.onClose,a=e.position;return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{open:n||!1,shareUrl:t,shareSrc:o,position:a,onClose:r}),i.a.createElement(f,{open:n||!1}))}C.propTypes={shareUrl:r.a.string.isRequired,shareSrc:r.a.string.isRequired,open:r.a.bool.isRequired,onClose:r.a.func.isRequired,position:r.a.shape({x:r.a.number.isRequired,y:r.a.number.isRequired}).isRequired};t.default=C}}]);
//# sourceMappingURL=chunk-a52a439b628fe5167c19.js.map