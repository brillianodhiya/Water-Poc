"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4593],{64593:function(J,Z,y){y.d(Z,{q:function(){return Q}});var W=y(45697),p=y.n(W),G=y(83524),k=y.n(G),$=y(69590),K=y.n($),M=y(67294),h=y(27418),P=y.n(h),A={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},s={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Y=Object.keys(s).map(function(o){return s[o]}),T={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},b={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},C={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},j=Object.keys(b).reduce(function(o,e){return o[b[e]]=e,o},{}),H=[s.NOSCRIPT,s.SCRIPT,s.STYLE],g="data-react-helmet",L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},N=function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")},w=function(){function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}(),v=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(o[t]=n[t])}return o},ce=function(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(o,e):o.__proto__=e)},ee=function(o,e){var n={};for(var t in o)e.indexOf(t)>=0||!Object.prototype.hasOwnProperty.call(o,t)||(n[t]=o[t]);return n},se=function(o,e){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:o},X=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},le=function(e){var n=D(e,s.TITLE),t=D(e,C.TITLE_TEMPLATE);if(t&&n)return t.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var r=D(e,C.DEFAULT_TITLE);return n||r||void 0},fe=function(e){return D(e,C.ON_CHANGE_CLIENT_STATE)||function(){}},q=function(e,n){return n.filter(function(t){return typeof t[e]!="undefined"}).map(function(t){return t[e]}).reduce(function(t,r){return v({},t,r)},{})},de=function(e,n){return n.filter(function(t){return typeof t[s.BASE]!="undefined"}).map(function(t){return t[s.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var i=Object.keys(r),f=0;f<i.length;f++){var u=i[f],a=u.toLowerCase();if(e.indexOf(a)!==-1&&r[a])return t.concat(r)}return t},[])},x=function(e,n,t){var r={};return t.filter(function(i){return Array.isArray(i[e])?!0:(typeof i[e]!="undefined"&&Ee("Helmet: "+e+' should be of type "Array". Instead found type "'+L(i[e])+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,f){var u={};f.filter(function(m){for(var E=void 0,I=Object.keys(m),S=0;S<I.length;S++){var _=I[S],R=_.toLowerCase();n.indexOf(R)!==-1&&!(E===T.REL&&m[E].toLowerCase()==="canonical")&&!(R===T.REL&&m[R].toLowerCase()==="stylesheet")&&(E=R),n.indexOf(_)!==-1&&(_===T.INNER_HTML||_===T.CSS_TEXT||_===T.ITEM_PROP)&&(E=_)}if(!E||!m[E])return!1;var B=m[E].toLowerCase();return r[E]||(r[E]={}),u[E]||(u[E]={}),r[E][B]?!1:(u[E][B]=!0,!0)}).reverse().forEach(function(m){return i.push(m)});for(var a=Object.keys(u),c=0;c<a.length;c++){var l=a[c],d=P()({},r[l],u[l]);r[l]=d}return i},[]).reverse()},D=function(e,n){for(var t=e.length-1;t>=0;t--){var r=e[t];if(r.hasOwnProperty(n))return r[n]}return null},Te=function(e){return{baseTag:de([T.HREF,T.TARGET],e),bodyAttributes:q(A.BODY,e),defer:D(e,C.DEFER),encode:D(e,C.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:q(A.HTML,e),linkTags:x(s.LINK,[T.REL,T.HREF],e),metaTags:x(s.META,[T.NAME,T.CHARSET,T.HTTPEQUIV,T.PROPERTY,T.ITEM_PROP],e),noscriptTags:x(s.NOSCRIPT,[T.INNER_HTML],e),onChangeClientState:fe(e),scriptTags:x(s.SCRIPT,[T.SRC,T.INNER_HTML],e),styleTags:x(s.STYLE,[T.CSS_TEXT],e),title:le(e),titleAttributes:q(A.TITLE,e)}},V=function(){var o=Date.now();return function(e){var n=Date.now();n-o>16?(o=n,e(n)):setTimeout(function(){V(e)},0)}}(),te=function(e){return clearTimeout(e)},pe=typeof window!="undefined"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V:y.g.requestAnimationFrame||V,me=typeof window!="undefined"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:y.g.cancelAnimationFrame||te,Ee=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},U=null,he=function(e){U&&me(U),e.defer?U=pe(function(){ne(e,function(){U=null})}):(ne(e),U=null)},ne=function(e,n){var t=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,f=e.linkTags,u=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,m=e.title,E=e.titleAttributes;z(s.BODY,r),z(s.HTML,i),ve(m,E);var I={baseTag:F(s.BASE,t),linkTags:F(s.LINK,f),metaTags:F(s.META,u),noscriptTags:F(s.NOSCRIPT,a),scriptTags:F(s.SCRIPT,l),styleTags:F(s.STYLE,d)},S={},_={};Object.keys(I).forEach(function(R){var B=I[R],ue=B.newTags,_e=B.oldTags;ue.length&&(S[R]=ue),_e.length&&(_[R]=I[R].oldTags)}),n&&n(),c(e,S,_)},re=function(e){return Array.isArray(e)?e.join(""):e},ve=function(e,n){typeof e!="undefined"&&document.title!==e&&(document.title=re(e)),z(s.TITLE,n)},z=function(e,n){var t=document.getElementsByTagName(e)[0];if(!!t){for(var r=t.getAttribute(g),i=r?r.split(","):[],f=[].concat(i),u=Object.keys(n),a=0;a<u.length;a++){var c=u[a],l=n[c]||"";t.getAttribute(c)!==l&&t.setAttribute(c,l),i.indexOf(c)===-1&&i.push(c);var d=f.indexOf(c);d!==-1&&f.splice(d,1)}for(var m=f.length-1;m>=0;m--)t.removeAttribute(f[m]);i.length===f.length?t.removeAttribute(g):t.getAttribute(g)!==u.join(",")&&t.setAttribute(g,u.join(","))}},F=function(e,n){var t=document.head||document.querySelector(s.HEAD),r=t.querySelectorAll(e+"["+g+"]"),i=Array.prototype.slice.call(r),f=[],u=void 0;return n&&n.length&&n.forEach(function(a){var c=document.createElement(e);for(var l in a)if(a.hasOwnProperty(l))if(l===T.INNER_HTML)c.innerHTML=a.innerHTML;else if(l===T.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=a.cssText:c.appendChild(document.createTextNode(a.cssText));else{var d=typeof a[l]=="undefined"?"":a[l];c.setAttribute(l,d)}c.setAttribute(g,"true"),i.some(function(m,E){return u=E,c.isEqualNode(m)})?i.splice(u,1):f.push(c)}),i.forEach(function(a){return a.parentNode.removeChild(a)}),f.forEach(function(a){return t.appendChild(a)}),{oldTags:i,newTags:f}},oe=function(e){return Object.keys(e).reduce(function(n,t){var r=typeof e[t]!="undefined"?t+'="'+e[t]+'"':""+t;return n?n+" "+r:r},"")},ge=function(e,n,t,r){var i=oe(t),f=re(n);return i?"<"+e+" "+g+'="true" '+i+">"+X(f,r)+"</"+e+">":"<"+e+" "+g+'="true">'+X(f,r)+"</"+e+">"},Ae=function(e,n,t){return n.reduce(function(r,i){var f=Object.keys(i).filter(function(c){return!(c===T.INNER_HTML||c===T.CSS_TEXT)}).reduce(function(c,l){var d=typeof i[l]=="undefined"?l:l+'="'+X(i[l],t)+'"';return c?c+" "+d:d},""),u=i.innerHTML||i.cssText||"",a=H.indexOf(e)===-1;return r+"<"+e+" "+g+'="true" '+f+(a?"/>":">"+u+"</"+e+">")},"")},ae=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[b[r]||r]=e[r],t},n)},ye=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[j[r]||r]=e[r],t},n)},Ce=function(e,n,t){var r,i=(r={key:n},r[g]=!0,r),f=ae(t,i);return[M.createElement(s.TITLE,f,n)]},Pe=function(e,n){return n.map(function(t,r){var i,f=(i={key:r},i[g]=!0,i);return Object.keys(t).forEach(function(u){var a=b[u]||u;if(a===T.INNER_HTML||a===T.CSS_TEXT){var c=t.innerHTML||t.cssText;f.dangerouslySetInnerHTML={__html:c}}else f[a]=t[u]}),M.createElement(e,f)})},O=function(e,n,t){switch(e){case s.TITLE:return{toComponent:function(){return Ce(e,n.title,n.titleAttributes,t)},toString:function(){return ge(e,n.title,n.titleAttributes,t)}};case A.BODY:case A.HTML:return{toComponent:function(){return ae(n)},toString:function(){return oe(n)}};default:return{toComponent:function(){return Pe(e,n)},toString:function(){return Ae(e,n,t)}}}},ie=function(e){var n=e.baseTag,t=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,f=e.linkTags,u=e.metaTags,a=e.noscriptTags,c=e.scriptTags,l=e.styleTags,d=e.title,m=d===void 0?"":d,E=e.titleAttributes;return{base:O(s.BASE,n,r),bodyAttributes:O(A.BODY,t,r),htmlAttributes:O(A.HTML,i,r),link:O(s.LINK,f,r),meta:O(s.META,u,r),noscript:O(s.NOSCRIPT,a,r),script:O(s.SCRIPT,c,r),style:O(s.STYLE,l,r),title:O(s.TITLE,{title:m,titleAttributes:E},r)}},be=function(e){var n,t;return t=n=function(r){ce(i,r);function i(){return N(this,i),se(this,r.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(u){return!K()(this.props,u)},i.prototype.mapNestedChildrenToProps=function(u,a){if(!a)return null;switch(u.type){case s.SCRIPT:case s.NOSCRIPT:return{innerHTML:a};case s.STYLE:return{cssText:a}}throw new Error("<"+u.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(u){var a,c=u.child,l=u.arrayTypeChildren,d=u.newChildProps,m=u.nestedChildren;return v({},l,(a={},a[c.type]=[].concat(l[c.type]||[],[v({},d,this.mapNestedChildrenToProps(c,m))]),a))},i.prototype.mapObjectTypeChildren=function(u){var a,c,l=u.child,d=u.newProps,m=u.newChildProps,E=u.nestedChildren;switch(l.type){case s.TITLE:return v({},d,(a={},a[l.type]=E,a.titleAttributes=v({},m),a));case s.BODY:return v({},d,{bodyAttributes:v({},m)});case s.HTML:return v({},d,{htmlAttributes:v({},m)})}return v({},d,(c={},c[l.type]=v({},m),c))},i.prototype.mapArrayTypeChildrenToProps=function(u,a){var c=v({},a);return Object.keys(u).forEach(function(l){var d;c=v({},c,(d={},d[l]=u[l],d))}),c},i.prototype.warnOnInvalidChildren=function(u,a){return!0},i.prototype.mapChildrenToProps=function(u,a){var c=this,l={};return M.Children.forEach(u,function(d){if(!(!d||!d.props)){var m=d.props,E=m.children,I=ee(m,["children"]),S=ye(I);switch(c.warnOnInvalidChildren(d,E),d.type){case s.LINK:case s.META:case s.NOSCRIPT:case s.SCRIPT:case s.STYLE:l=c.flattenArrayTypeChildren({child:d,arrayTypeChildren:l,newChildProps:S,nestedChildren:E});break;default:a=c.mapObjectTypeChildren({child:d,newProps:a,newChildProps:S,nestedChildren:E});break}}}),a=this.mapArrayTypeChildrenToProps(l,a),a},i.prototype.render=function(){var u=this.props,a=u.children,c=ee(u,["children"]),l=v({},c);return a&&(l=this.mapChildrenToProps(a,l)),M.createElement(e,l)},w(i,null,[{key:"canUseDOM",set:function(u){e.canUseDOM=u}}]),i}(M.Component),n.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var r=e.rewind();return r||(r=ie({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),r},t},Oe=function(){return null},Se=k()(Te,he,ie)(Oe),Q=be(Se);Q.renderStatic=Q.rewind;var Re=null},83524:function(J,Z,y){function W(h){return h&&typeof h=="object"&&"default"in h?h.default:h}var p=y(67294),G=W(p);function k(h,P,A){return P in h?Object.defineProperty(h,P,{value:A,enumerable:!0,configurable:!0,writable:!0}):h[P]=A,h}function $(h,P){h.prototype=Object.create(P.prototype),h.prototype.constructor=h,h.__proto__=P}var K=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function M(h,P,A){if(typeof h!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof P!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof A!="undefined"&&typeof A!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function s(Y){return Y.displayName||Y.name||"Component"}return function(T){if(typeof T!="function")throw new Error("Expected WrappedComponent to be a React component.");var b=[],C;function j(){C=h(b.map(function(g){return g.props})),H.canUseDOM?P(C):A&&(C=A(C))}var H=function(g){$(L,g);function L(){return g.apply(this,arguments)||this}L.peek=function(){return C},L.rewind=function(){if(L.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var v=C;return C=void 0,b=[],v};var N=L.prototype;return N.UNSAFE_componentWillMount=function(){b.push(this),j()},N.componentDidUpdate=function(){j()},N.componentWillUnmount=function(){var v=b.indexOf(this);b.splice(v,1),j()},N.render=function(){return G.createElement(T,this.props)},L}(p.PureComponent);return k(H,"displayName","SideEffect("+s(T)+")"),k(H,"canUseDOM",K),H}}J.exports=M}}]);
