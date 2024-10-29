"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7655],{42552:function(e,a,t){t.d(a,{h:function(){return C}});var i=t(57437),n=()=>(0,i.jsxs)("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[(0,i.jsx)("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]}),[r,l]=(0,t(37561).k)({name:"AvatarGroupContext",strict:!1}),o=t(33222),s=t(76767),d=t(21616),u=(0,s.tv)({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...d.Dh],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...d.z6,"flex","items-center","justify-center"],name:[...d.z6,"font-normal","text-center","text-inherit"],icon:[...d.z6,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:o.J.solid.default},primary:{base:o.J.solid.primary},secondary:{base:o.J.solid.secondary},success:{base:o.J.solid.success},warning:{base:o.J.solid.warning},danger:{base:o.J.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 rtl:data-[hover=true]:translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3 rtl:data-[focus-visible=true]:translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}},disableAnimation:{true:{base:"transition-none",img:"transition-none"},false:{}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]});(0,s.tv)({slots:{base:"flex items-center justify-center h-auto w-max",count:"hover:-translate-x-0"},variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}});var c=t(12094),v=t(277),f=t(26242),m=t(75300),g=t(31887),b=t(65263),h=t(53640),p=t(13389),y=t(2265),x=t(46896),V=t(83892),w=(0,t(55971).Gp)((e,a)=>{let{Component:t,ImgComponent:r,src:o,icon:s=(0,i.jsx)(n,{}),alt:d,classNames:w,slots:C,name:E,showFallback:M,fallback:I,getInitials:k,getAvatarProps:j,getImageProps:B}=function(){var e,a,t,i,n,r,o;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=(0,c.w)(),w=l(),C=!!w,{as:E,ref:M,src:I,name:k,icon:j,classNames:B,fallback:D,alt:G=k||"avatar",imgRef:S,color:A=null!=(e=null==w?void 0:w.color)?e:"default",radius:L=null!=(a=null==w?void 0:w.radius)?a:"full",size:N=null!=(t=null==w?void 0:w.size)?t:"md",isBordered:z=null!=(i=null==w?void 0:w.isBordered)&&i,isDisabled:_=null!=(n=null==w?void 0:w.isDisabled)&&n,isFocusable:J=!1,getInitials:P=g.e,ignoreFallback:O=!1,showFallback:R=!1,ImgComponent:U="img",imgProps:F,className:Q,onError:W,...Z}=s,X=E||"span",q=(0,f.gy)(M),H=(0,f.gy)(S),{isFocusVisible:K,isFocused:T,focusProps:Y}=(0,p.F)(),{isHovered:$,hoverProps:ee}=(0,V.X)({isDisabled:_}),ea=null!=(o=null!=(r=s.disableAnimation)?r:null==d?void 0:d.disableAnimation)&&o,et="loaded"===function(e={}){let{loading:a,src:t,srcSet:i,onLoad:n,onError:r,crossOrigin:l,sizes:o,ignoreFallback:s}=e,[d,u]=(0,y.useState)("pending");(0,y.useEffect)(()=>{u(t?"loading":"pending")},[t]);let c=(0,y.useRef)(),v=(0,y.useCallback)(()=>{if(!t)return;f();let e=new Image;e.src=t,l&&(e.crossOrigin=l),i&&(e.srcset=i),o&&(e.sizes=o),a&&(e.loading=a),e.onload=e=>{f(),u("loaded"),null==n||n(e)},e.onerror=e=>{f(),u("failed"),null==r||r(e)},c.current=e},[t,l,i,o,n,r,a]),f=()=>{c.current&&(c.current.onload=null,c.current.onerror=null,c.current=null)};return(0,x.G)(()=>{if(!s)return"loading"===d&&v(),()=>{f()}},[d,v,s]),s?"loaded":d}({src:I,onError:W,ignoreFallback:O}),ei="string"==typeof U,en=(!I||!et)&&R,er=(0,y.useMemo)(()=>{var e;return u({color:A,radius:L,size:N,isBordered:z,isDisabled:_,isInGroup:C,disableAnimation:ea,isInGridGroup:null!=(e=null==w?void 0:w.isGrid)&&e})},[A,L,N,z,_,ea,C,null==w?void 0:w.isGrid]),el=(0,b.W)(null==B?void 0:B.base,Q),eo=(0,y.useMemo)(()=>J||"button"===E,[J,E]),es=(0,y.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:q,tabIndex:eo?0:-1,"data-hover":(0,h.PB)($),"data-focus":(0,h.PB)(T),"data-focus-visible":(0,h.PB)(K),className:er.base({class:(0,b.W)(el,null==e?void 0:e.className)}),...(0,v.d)(Z,ee,eo?Y:{})}},[eo,er,el,Y,Z]),ed=(0,y.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:H,src:I,disableAnimation:ea,"data-loaded":(0,h.PB)(et),className:er.img({class:null==B?void 0:B.img}),...(0,v.d)(F,e,(0,m.z)({disableAnimation:ea},{enabled:ei}))}},[er,et,F,ea,I,H,ei]);return{Component:X,ImgComponent:U,src:I,alt:G,icon:j,name:k,imgRef:H,slots:er,classNames:B,fallback:D,isImgLoaded:et,showFallback:en,ignoreFallback:O,getInitials:P,getAvatarProps:es,getImageProps:ed}}({...e,ref:a}),D=(0,y.useMemo)(()=>!M&&o?null:I?(0,i.jsx)("div",{"aria-label":d,className:C.fallback({class:null==w?void 0:w.fallback}),role:"img",children:I}):E?(0,i.jsx)("span",{"aria-label":d,className:C.name({class:null==w?void 0:w.name}),role:"img",children:k(E)}):(0,i.jsx)("span",{"aria-label":d,className:C.icon({class:null==w?void 0:w.icon}),role:"img",children:s}),[M,o,I,E,w]);return(0,i.jsxs)(t,{...j(),children:[o&&(0,i.jsx)(r,{...B(),alt:d}),D]})});w.displayName="NextUI.Avatar";var C=w},38756:function(e,a,t){t.d(a,{Q:function(){return o}});var i=t(2265),n=t(95729),r=t(79248),l=t(7353);function o(e,a,t){let{validationBehavior:o,focus:s}=e;(0,r.b)(()=>{if("native"===o&&(null==t?void 0:t.current)){var e;let i,n=a.realtimeValidation.isInvalid?a.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";t.current.setCustomValidity(n),t.current.hasAttribute("title")||(t.current.title=""),a.realtimeValidation.isInvalid||a.updateValidation({isInvalid:!(e=t.current).validity.valid,validationDetails:{badInput:(i=e.validity).badInput,customError:i.customError,patternMismatch:i.patternMismatch,rangeOverflow:i.rangeOverflow,rangeUnderflow:i.rangeUnderflow,stepMismatch:i.stepMismatch,tooLong:i.tooLong,tooShort:i.tooShort,typeMismatch:i.typeMismatch,valueMissing:i.valueMissing,valid:i.valid},validationErrors:e.validationMessage?[e.validationMessage]:[]})}});let d=(0,l.i)(()=>{a.resetValidation()}),u=(0,l.i)(e=>{var i,r;a.displayValidation.isInvalid||a.commitValidation();let l=null==t?void 0:null===(i=t.current)||void 0===i?void 0:i.form;!e.defaultPrevented&&t&&l&&function(e){for(let a=0;a<e.elements.length;a++){let t=e.elements[a];if(!t.validity.valid)return t}return null}(l)===t.current&&(s?s():null===(r=t.current)||void 0===r||r.focus(),(0,n._w)("keyboard")),e.preventDefault()}),c=(0,l.i)(()=>{a.commitValidation()});(0,i.useEffect)(()=>{let e=null==t?void 0:t.current;if(!e)return;let a=e.form;return e.addEventListener("invalid",u),e.addEventListener("change",c),null==a||a.addEventListener("reset",d),()=>{e.removeEventListener("invalid",u),e.removeEventListener("change",c),null==a||a.removeEventListener("reset",d)}},[t,u,c,d,o])}},56804:function(e,a,t){t.d(a,{PS:function(){return l},Q3:function(){return d},tL:function(){return s}});var i=t(2265);let n={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},r={...n,customError:!0,valid:!1},l={isInvalid:!1,validationDetails:n,validationErrors:[]},o=(0,i.createContext)({}),s="__formValidationState"+Date.now();function d(e){if(e[s]){let{realtimeValidation:a,displayValidation:t,updateValidation:i,resetValidation:n,commitValidation:r}=e[s];return{realtimeValidation:a,displayValidation:t,updateValidation:i,resetValidation:n,commitValidation:r}}return function(e){let{isInvalid:a,validationState:t,name:n,value:s,builtinValidation:d,validate:f,validationBehavior:m="aria"}=e;t&&(a||(a="invalid"===t));let g=void 0!==a?{isInvalid:a,validationErrors:[],validationDetails:r}:null,b=(0,i.useMemo)(()=>c(function(e,a){if("function"==typeof e){let t=e(a);if(t&&"boolean"!=typeof t)return u(t)}return[]}(f,s)),[f,s]);(null==d?void 0:d.validationDetails.valid)&&(d=null);let h=(0,i.useContext)(o),p=(0,i.useMemo)(()=>n?Array.isArray(n)?n.flatMap(e=>u(h[e])):u(h[n]):[],[h,n]),[y,x]=(0,i.useState)(h),[V,w]=(0,i.useState)(!1);h!==y&&(x(h),w(!1));let C=(0,i.useMemo)(()=>c(V?[]:p),[V,p]),E=(0,i.useRef)(l),[M,I]=(0,i.useState)(l),k=(0,i.useRef)(l),[j,B]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!j)return;B(!1);let e=b||d||E.current;v(e,k.current)||(k.current=e,I(e))}),{realtimeValidation:g||C||b||d||l,displayValidation:"native"===m?g||C||M:g||C||b||d||M,updateValidation(e){"aria"!==m||v(M,e)?E.current=e:I(e)},resetValidation(){v(l,k.current)||(k.current=l,I(l)),"native"===m&&B(!1),w(!0)},commitValidation(){"native"===m&&B(!0),w(!0)}}}(e)}function u(e){return e?Array.isArray(e)?e:[e]:[]}function c(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:r}:null}function v(e,a){return e===a||e&&a&&e.isInvalid===a.isInvalid&&e.validationErrors.length===a.validationErrors.length&&e.validationErrors.every((e,t)=>e===a.validationErrors[t])&&Object.entries(e.validationDetails).every(([e,t])=>a.validationDetails[e]===t)}}}]);