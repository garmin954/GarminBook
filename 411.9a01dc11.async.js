"use strict";(self.webpackChunkGarminBook=self.webpackChunkGarminBook||[]).push([[411,893],{85411:function(pe,k,v){v.r(k),v.d(k,{Components:function(){return lt},Foo:function(){return At},ReactModule:function(){return bt}});var d=v(5574),p=v.n(d),R=v(67294),P=v(85893);function st(h){var l=h.val,g=h.getData;return R.useEffect(function(){g()},[g]),console.log("Test Render"),(0,P.jsx)("div",{children:l})}var K=0,At=function(h){var l=h.title,g=R.useState(0),y=p()(g,2),w=y[0],Q=y[1],W=(0,R.useCallback)(function(){setTimeout(function(){console.log("getData "+K),Q(K),K++},500)},[]);return R.useEffect(function(){return W(),console.log("\u53EA\u6267\u884C\u4E00\u6B21"),function(){}},[]),(0,P.jsxs)("h1",{children:[l," --",(0,P.jsx)(st,{val:w,getData:W}),(0,P.jsx)("button",{onClick:(0,R.useCallback)(function(){return Q(w+1)},[w]),children:"add"})]})},Nt=v(73935),xt=v(76743),Z=function(l){return console.log(l),Nt.createPortal((0,P.jsx)("div",{className:"flexBox",children:(0,P.jsx)("div",{className:"box",children:(0,P.jsxs)("div",{className:"text-center space-y-2",children:[(0,P.jsxs)("div",{className:"space-y-0.5",children:[(0,P.jsx)("p",{className:"text-lg text-black dark:text-white font-semibold mb-2",children:"Erin Lindford"}),(0,P.jsx)("p",{className:"text-gray-500 dark:text-gray-300 font-medium pb-3",children:"Product Engineer"})]}),(0,P.jsx)("button",{className:"btn",onClick:function(){return l.onClose()},children:"Message"})]})})}),document.body)},b=function(){var h=(0,R.useState)(!1),l=p()(h,2),g=l[0],y=l[1];return(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"toggle",onClick:function(){return y(!0)},children:"toggle"}),(0,P.jsx)(xt.Z,{in:g,timeout:500,unmountOnExit:!0,classNames:"alert",children:(0,P.jsx)(Z,{onClose:function(){return y(!1)}})})]})},bt={ShowPortal:b};function $(h){var l,g,y="";if(typeof h=="string"||typeof h=="number")y+=h;else if(typeof h=="object")if(Array.isArray(h))for(l=0;l<h.length;l++)h[l]&&(g=$(h[l]))&&(y&&(y+=" "),y+=g);else for(l in h)h[l]&&(y&&(y+=" "),y+=l);return y}function Ot(){for(var h,l,g=0,y="";g<arguments.length;)(h=arguments[g++])&&(l=$(h))&&(y&&(y+=" "),y+=l);return y}var Tt=Ot,Gt=v(68400),Dt=v.n(Gt),Rt=v(71893),H,T,J=Rt.default.div(H||(H=Dt()([`
  display: flex;
`]))),at=Rt.default.div(T||(T=Dt()([`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  min-height: 1px;
`]))),ut=function(l){var g=(0,R.useMemo)(function(){return{}},[l.direction]);return(0,P.jsx)(J,{className:Tt(l.className),style:g,children:l.children})};ut.defaultProps={direction:"row"};var wt=ut;function ct(h){return(0,P.jsx)(at,{children:h.children})}var jt=Object.assign(wt,{Item:ct}),lt={Flex:jt}},71893:function(pe,k,v){v.r(k),v.d(k,{ServerStyleSheet:function(){return ke},StyleSheetConsumer:function(){return Be},StyleSheetContext:function(){return vt},StyleSheetManager:function(){return re},ThemeConsumer:function(){return $e},ThemeContext:function(){return gt},ThemeProvider:function(){return He},__PRIVATE__:function(){return Ke},createGlobalStyle:function(){return ze},css:function(){return yt},default:function(){return Ht},isStyledComponent:function(){return ft},keyframes:function(){return Ge},styled:function(){return Ht},useTheme:function(){return tt},version:function(){return bt},withTheme:function(){return Ye}});var d=v(70655),p=v(67294),R=v(96774),P=v.n(R),st=v(94582),K=v(27563),At=v(20211),Nt=v(92190),xt=v(94371),Z=v(34155),b=typeof Z!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_ATTR)||"data-styled",bt="6.0.0-rc.1",$=typeof window!="undefined"&&"HTMLElement"in window,Ot=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Z!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==""?{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY:typeof Z!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==""?{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY:!1),Tt={},Gt=/invalid hook call/i,Dt=new Set,Rt=function(e,t){if(!1)var n,r,o,i},H=Object.freeze([]),T=Object.freeze({});function J(e,t,n){return n===void 0&&(n=T),e.theme!==n.theme&&e.theme||t||n.theme}var at=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ut=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wt=/(^-|-$)/g;function ct(e){return e.replace(ut,"-").replace(wt,"")}var jt=/(a)(d)/gi,lt=function(e){return String.fromCharCode(e+(e>25?39:97))};function h(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=lt(t%52)+n;return(lt(t%52)+n).replace(jt,"$1-$2")}var l,g=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},y=function(e){return g(5381,e)};function w(e){return h(y(e)>>>0)}function Q(e){return e.displayName||e.name||"Component"}function W(e){return typeof e=="string"&&!0}var Yt=typeof Symbol=="function"&&Symbol.for,kt=Yt?Symbol.for("react.memo"):60115,ve=Yt?Symbol.for("react.forward_ref"):60112,me={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ge={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ye=((l={})[ve]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[kt]=Kt,l);function Zt(e){return("type"in(t=e)&&t.type.$$typeof)===kt?Kt:"$$typeof"in e?ye[e.$$typeof]:me;var t}var Se=Object.defineProperty,Pe=Object.getOwnPropertyNames,Jt=Object.getOwnPropertySymbols,Ee=Object.getOwnPropertyDescriptor,Ce=Object.getPrototypeOf,Qt=Object.prototype;function _t(e,t,n){if(typeof t!="string"){if(Qt){var r=Ce(t);r&&r!==Qt&&_t(e,r,n)}var o=Pe(t);Jt&&(o=o.concat(Jt(t)));for(var i=Zt(e),s=Zt(t),u=0;u<o.length;++u){var a=o[u];if(!(a in ge||n&&n[a]||s&&a in s||i&&a in i)){var c=Ee(t,a);try{Se(e,a,c)}catch(f){}}}}return e}function F(e){return typeof e=="function"}function ft(e){return typeof e=="object"&&"styledComponentId"in e}function U(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function X(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function q(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Bt(e,t,n){if(n===void 0&&(n=!1),!n&&!q(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Bt(e[r],t[r]);else if(q(t))for(var r in t)e[r]=Bt(e[r],t[r]);return e}var rn={};function on(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,i=e.length;o<i;o+=1)r.push(e[o]);return r.forEach(function(s){n=n.replace(/%[a-z]/,s)}),n}function O(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ie=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw O(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(u,n[s])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),ht=new Map,dt=new Map,Lt=1,pt=function(e){if(ht.has(e))return ht.get(e);for(;dt.has(Lt);)Lt++;var t=Lt++;return ht.set(e,t),dt.set(t,e),t},Ae=function(e,t){ht.set(e,t),dt.set(t,e)},Ne="style[".concat(b,"][").concat("data-styled-version",'="').concat("6.0.0-rc.1",'"]'),xe=new RegExp("^".concat(b,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),be=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Oe=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,s=r.length;i<s;i++){var u=r[i].trim();if(u){var a=u.match(xe);if(a){var c=0|parseInt(a[1],10),f=a[2];c!==0&&(Ae(f,c),be(e,f,a[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(u)}}};function Mt(){return v.nc}var Xt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(u){for(var a=u.childNodes,c=a.length;c>=0;c--){var f=a[c];if(f&&f.nodeType===1&&f.hasAttribute(b))return f}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(b,"active"),r.setAttribute("data-styled-version","6.0.0-rc.1");var s=Mt();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Te=function(){function e(t){this.element=Xt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw O(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),De=function(){function e(t){this.element=Xt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Re=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),qt=$,we={isServer:!$,useCSSOMInjection:!Ot},V=function(){function e(t,n,r){t===void 0&&(t=T),n===void 0&&(n={}),this.options=(0,d.pi)((0,d.pi)({},we),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&$&&qt&&(qt=!1,function(o){for(var i=document.querySelectorAll(Ne),s=0,u=i.length;s<u;s++){var a=i[s];a&&a.getAttribute(b)!=="active"&&(Oe(o,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}return e.registerId=function(t){return pt(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e((0,d.pi)((0,d.pi)({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Re(o):r?new Te(o):new De(o)}(this.options),new Ie(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(pt(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(pt(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(pt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(t){for(var n=t.getTag(),r=n.length,o="",i=function(u){var a=function(m){return dt.get(m)}(u);if(a===void 0)return"continue";var c=t.names.get(a),f=n.getGroup(u);if(c===void 0||f.length===0)return"continue";var E="".concat(b,".g").concat(u,'[id="').concat(a,'"]'),S="";c!==void 0&&c.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),o+="".concat(f).concat(E,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},s=0;s<r;s++)i(s);return o}(this)},e}(),je=/&/g,_e=/^\s*\/\/.*$/gm;function te(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=te(n.children,t)),n})}function ee(e){var t,n,r,o=e===void 0?T:e,i=o.options,s=i===void 0?T:i,u=o.plugins,a=u===void 0?H:u,c=function(S,m,N){return N===n||N.startsWith(n)&&N.endsWith(n)&&N.replaceAll(n,"").length>0?".".concat(t):S},f=a.slice();s.prefix&&f.unshift(st.Ji),f.push(function(S){S.type===K.Fr&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(je,n).replace(r,c))},At.P);var E=function(S,m,N,z){m===void 0&&(m=""),N===void 0&&(N=""),z===void 0&&(z="&"),t=z,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var St=S.replace(_e,""),G=(0,Nt.MY)(N||m?"".concat(N," ").concat(m," { ").concat(St," }"):St);return s.namespace&&(G=te(G,s.namespace)),function(et,nt){for(var I=[],C=0,x=void 0;C<et.length;C+=1)(x=nt(et[C],C,et,nt))&&I.push(x);return I}(G,(0,st.qR)(f))};return E.hash=a.length?a.reduce(function(S,m){return m.name||O(15),g(S,m.name)},5381).toString():"",E}var ne=new V,Ft=ee(),vt=p.createContext({shouldForwardProp:void 0,styleSheet:ne,stylis:Ft}),Be=vt.Consumer,Le=p.createContext(void 0);function mt(){return(0,p.useContext)(vt)}function re(e){var t=(0,p.useState)(e.stylisPlugins),n=t[0],r=t[1],o=mt().styleSheet,i=(0,p.useMemo)(function(){var u=o;return e.sheet?u=e.sheet:e.target&&(u=u.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(u=u.reconstructWithOptions({useCSSOMInjection:!1})),u},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,p.useMemo)(function(){return ee({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);return(0,p.useEffect)(function(){P()(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]),p.createElement(vt.Provider,{value:{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},p.createElement(Le.Provider,{value:s},e.children))}var oe=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ft);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.toString=function(){throw O(12,String(r.name))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ft),this.name+t.hash},e}(),Me=function(e){return e>="A"&&e<="Z"};function ie(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Me(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var se=function(e){return e==null||e===!1||e===""},ae=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!se(i)&&(Array.isArray(i)&&i.isCss||F(i)?r.push("".concat(ie(o),":"),i,";"):q(i)?r.push.apply(r,(0,d.ev)((0,d.ev)(["".concat(o," {")],ae(i),!1),["}"],!1)):r.push("".concat(ie(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in xt.Z||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _(e,t,n,r){if(se(e))return[];if(ft(e))return[".".concat(e.styledComponentId)];if(F(e)){if(!F(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return _(o,t,n,r)}var i;return e instanceof oe?n?(e.inject(n,r),[e.getName(r)]):[e]:q(e)?ae(e):Array.isArray(e)?e.flatMap(function(s){return _(s,t,n,r)}):[e.toString()]}function ue(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(F(n)&&!ft(n))return!1}return!0}var Fe=y("6.0.0-rc.1"),Ue=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ue(t),this.componentId=n,this.baseHash=g(Fe,n),this.baseStyle=r,V.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=U(o,this.staticRulesId);else{var i=X(_(this.rules,t,n,r)),s=h(g(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var u=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,u)}o=U(o,s),this.staticRulesId=s}else{for(var a=g(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var E=this.rules[f];if(typeof E=="string")c+=E;else if(E){var S=X(_(E,t,n,r));a=g(a,S),c+=S}}if(c){var m=h(a>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(c,".".concat(m),void 0,this.componentId)),o=U(o,m)}}return o},e}(),gt=p.createContext(void 0),$e=gt.Consumer;function tt(){return(0,p.useContext)(gt)}function He(e){var t=tt(),n=(0,p.useMemo)(function(){return function(r,o){if(!r)throw O(14);if(F(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw O(8);return o?(0,d.pi)((0,d.pi)({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?p.createElement(gt.Provider,{value:n},e.children):null}var Ut={};function We(e,t,n){var r=ft(e),o=e,i=!W(e),s=t.attrs,u=s===void 0?H:s,a=t.componentId,c=a===void 0?function(C,x){var A=typeof C!="string"?"sc":ct(C);Ut[A]=(Ut[A]||0)+1;var D="".concat(A,"-").concat(w("6.0.0-rc.1"+A+Ut[A]));return x?"".concat(x,"-").concat(D):D}(t.displayName,t.parentComponentId):a,f=t.displayName,E=f===void 0?function(C){return W(C)?"styled.".concat(C):"Styled(".concat(Q(C),")")}(e):f,S=t.displayName&&t.componentId?"".concat(ct(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&o.attrs?o.attrs.concat(u).filter(Boolean):u,N=t.shouldForwardProp;if(r&&o.shouldForwardProp){var z=o.shouldForwardProp;if(t.shouldForwardProp){var St=t.shouldForwardProp;N=function(C,x){return z(C,x)&&St(C,x)}}else N=z}var G=new Ue(n,S,r?o.componentStyle:void 0),et=G.isStatic&&u.length===0;function nt(C,x){return function(A,D,rt,Pt){var Ze=A.attrs,Je=A.componentStyle,Qe=A.defaultProps,Xe=A.foldedComponentIds,qe=A.styledComponentId,tn=A.target,en=tt(),nn=mt(),he=A.shouldForwardProp||nn.shouldForwardProp,B=function(Ct,it,Vt){for(var Y,j=(0,d.pi)((0,d.pi)({},it),{className:void 0,theme:Vt}),zt=0;zt<Ct.length;zt+=1){var It=F(Y=Ct[zt])?Y(j):Y;for(var M in It)j[M]=M==="className"?U(j[M],It[M]):M==="style"?(0,d.pi)((0,d.pi)({},j[M]),It[M]):It[M]}return it.className&&(j.className=U(j.className,it.className)),j}(Ze,D,J(D,en,Qe)||T),Et=B.as||tn,ot={};for(var L in B)B[L]===void 0||L[0]==="$"||L==="as"||L==="theme"||(L==="forwardedAs"?ot.as=B.forwardedAs:he&&!he(L,Et)||(ot[L]=B[L]));var de=function(Ct,it,Vt){var Y=mt(),j=Ct.generateAndInjectStyles(it?T:Vt,Y.styleSheet,Y.stylis);return j}(Je,Pt,B),Wt=U(Xe,qe);return de&&(Wt+=" "+de),B.className&&(Wt+=" "+B.className),ot[W(Et)&&!at.has(Et)?"class":"className"]=Wt,ot.ref=rt,(0,p.createElement)(Et,ot)}(I,C,x,et)}nt.displayName=E;var I=p.forwardRef(nt);return I.attrs=m,I.componentStyle=G,I.displayName=E,I.shouldForwardProp=N,I.foldedComponentIds=r?U(o.foldedComponentIds,o.styledComponentId):"",I.styledComponentId=S,I.target=r?o.target:e,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(x){for(var A=[],D=1;D<arguments.length;D++)A[D-1]=arguments[D];for(var rt=0,Pt=A;rt<Pt.length;rt++)Bt(x,Pt[rt],!0);return x}({},o.defaultProps,C):C}}),Object.defineProperty(I,"toString",{value:function(){return".".concat(I.styledComponentId)}}),i&&_t(I,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function ce(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var le=function(e){return Object.assign(e,{isCss:!0})};function yt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(F(e)||q(e)){var r=e;return le(_(ce(H,(0,d.ev)([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?_(o):le(_(ce(o,t)))}function $t(e,t,n){if(n===void 0&&(n=T),!t)throw O(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,yt.apply(void 0,(0,d.ev)([o],i,!1)))};return r.attrs=function(o){return $t(e,t,(0,d.pi)((0,d.pi)({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return $t(e,t,(0,d.pi)((0,d.pi)({},n),o))},r}var fe=function(e){return $t(We,e)},Ht=fe;at.forEach(function(e){Ht[e]=fe(e)});var Ve=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=ue(t),V.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(X(_(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&V.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function ze(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=yt.apply(void 0,(0,d.ev)([e],t,!1)),o="sc-global-".concat(w(JSON.stringify(r))),i=new Ve(r,o),s=function(a){var c=mt(),f=tt(),E=p.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&u(E,a,c.styleSheet,f,c.stylis),(p.useInsertionEffect||p.useLayoutEffect)(function(){if(!c.styleSheet.server)return u(E,a,c.styleSheet,f,c.stylis),function(){return i.removeStyles(E,c.styleSheet)}},[E,a,c.styleSheet,f,c.stylis]),null};function u(a,c,f,E,S){if(i.isStatic)i.renderStyles(a,Tt,f,S);else{var m=(0,d.pi)((0,d.pi)({},c),{theme:J(c,E,s.defaultProps)});i.renderStyles(a,m,f,S)}}return p.memo(s)}function Ge(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=X(yt.apply(void 0,(0,d.ev)([e],t,!1))),o=w(r);return new oe(o,r)}function Ye(e){var t=p.forwardRef(function(n,r){var o=J(n,tt(),e.defaultProps);return p.createElement(e,(0,d.pi)({},n,{theme:o,ref:r}))});return t.displayName="WithTheme(".concat(Q(e),")"),_t(t,e)}var ke=function(){function e(){var t=this;this._emitSheetCSS=function(){var n=t.instance.toString(),r=Mt(),o=X([r&&'nonce="'.concat(r,'"'),"".concat(b,'="true"'),"".concat("data-styled-version",'="').concat("6.0.0-rc.1",'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(n,"</style>")},this.getStyleTags=function(){if(t.sealed)throw O(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw O(2);var r=((n={})[b]="",n["data-styled-version"]="6.0.0-rc.1",n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),o=Mt();return o&&(r.nonce=o),[p.createElement("style",(0,d.pi)({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new V({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw O(2);return p.createElement(re,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw O(3)},e}(),Ke={StyleSheet:V,mainSheet:ne},sn="__sc-".concat(b,"__")}}]);
