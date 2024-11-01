(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8811],{77196:function(e,t,n){Promise.resolve().then(n.bind(n,69519))},16463:function(e,t,n){"use strict";var a=n(71169);n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}}),n.o(a,"useRouter")&&n.d(t,{useRouter:function(){return a.useRouter}})},69519:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(57437),r=n(2265),l=n(17821),o=n(81227),s=n(57839),i=n(80665),c=n(14245);let u={estabelecimento:"",comprador:"",valor:"",qtdparcelas:"",datavencimento:"",pagador:""},d=c.Ry().shape({estabelecimento:c.Z_().required("Patrim\xf4nio \xe9 obrigat\xf3rio"),comprador:c.Z_().required("Patrim\xf4nio \xe9 obrigat\xf3rio"),valor:c.Z_().required("Valor \xe9 obrigat\xf3rio"),datavencimento:c.hT().required("Data \xe9 obrigat\xf3rio"),qtdparcelas:c.Z_().optional(),pagador:c.Z_().optional()});var f=n(89470),m=n(26249),p=n(61734),v=n(81313),b=n(11001),h=n(34909),g=n(30050),x=n(5048),C=n(16463);function j(){let e=(0,C.useRouter)(),{tokenUsuario:t}=(0,v.Z)(),[n,c]=(0,r.useState)(""),[j,y]=(0,r.useState)(""),[k,w]=(0,r.useState)(!1),P=e=>{w(!k),k&&e("qtdparcelas","")},N=async n=>{200===(await i.h.post("/novaconta",{dados:n,idUsuario:null==t?void 0:t.id})).status?(c("Conta Cadastrado com Sucesso"),y("success"),setTimeout(()=>{e.push("/pages/contas/listaconta")},2e3)):(c("Erro ao Cadastrar Conta"),y("error")),setTimeout(()=>{c(""),y("")},2e3)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.J9,{initialValues:u,validationSchema:d,onSubmit:N,children:e=>{var t;let{values:r,errors:l,handleChange:i,handleSubmit:c,isSubmitting:u,setFieldValue:d,touched:v}=e;return(0,a.jsx)("form",{onSubmit:c,children:(0,a.jsxs)("div",{className:"pt-8 flex flex-col gap-3 md:w-[60%] xs:w-full px-4 mx-auto",children:[(0,a.jsx)(x.Z,{title:"Cadastro de Conta"}),(0,a.jsx)(f.Y,{fullWidth:!0,name:"estabelecimento",label:"Estabelecimento",isInvalid:!!l.estabelecimento&&v.estabelecimento,autoComplete:"off",value:r.estabelecimento,onChange:i}),(0,a.jsx)(f.Y,{fullWidth:!0,name:"comprador",label:"Comprador",isInvalid:!!l.comprador&&v.comprador,autoComplete:"off",value:r.comprador,onChange:i}),(0,a.jsx)(f.Y,{fullWidth:!0,name:"pagador",label:"Pagador(es)",autoComplete:"off",value:r.pagador,onChange:i}),(0,a.jsx)(f.Y,{fullWidth:!0,name:"valor",label:"Valor Total Compra",value:r.valor,autoComplete:"off",isInvalid:!!l.valor&&v.valor,onBlur:i,onChange:e=>{let{name:t,value:n}=e.target;"valor"===t?d(t,(0,o.e)(n)):d(t,n)},startContent:(0,a.jsx)("div",{className:"pointer-events-none flex items-center",children:(0,a.jsx)("span",{className:"text-white text-small",children:"R$"})})}),(0,a.jsx)(h.b,{locale:"pt-BR",children:(0,a.jsx)(b.J,{name:"datavencimento",isInvalid:!!l.datavencimento&&v.datavencimento,hideTimeZone:!0,onChange:e=>d("datavencimento",e),label:"1\xb0 Vencimento"})}),(0,a.jsxs)("div",{className:"flex gap-4",children:["Parcelado ?",(0,a.jsx)(m.e,{color:"warning",placement:"right-end",content:"Marque se a conta tiver mais de uma parcela",children:(0,a.jsxs)("p",{className:"flex gap-2",children:[(0,a.jsx)(p.K,{isSelected:k,onValueChange:()=>P(d)})," Sim "]})})]}),k&&(0,a.jsx)(f.Y,{type:"number",name:"qtdparcelas",label:"Quantidade de Parcelas",value:r.qtdparcelas,onChange:i}),k&&(0,a.jsxs)(g.Z,{severity:"info",children:["Conta parcelada em ",r.qtdparcelas," vezes no valor de ",((t=r.valor)&&(t=(t=t.replace(/\./g,"")).replace(",",".")),parseFloat(t)/parseInt(r.qtdparcelas)).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})]}),(0,a.jsx)(s.Z,{onSubmit:c,isSubmiting:u}),n?(0,a.jsx)(g.Z,{severity:j,variant:"filled",children:n}):null]})})}})})}},57839:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(57437),r=n(93641),l=n(37692),o=n(19993);function s(e){let{onSubmit:t,isSubmiting:n}=e;return(0,a.jsx)(r.A,{onClick:t,className:"p-6 text-sm",size:"sm",color:"success",endContent:n?(0,a.jsx)(o.Z,{className:" ml-3 w-[24px] h-[24px]","aria-label":"Loading...",color:"primary"}):(0,a.jsx)(l.Hh6,{}),children:"Salvar"})}},81227:function(e,t,n){"use strict";function a(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function r(e){return e&&(e=(e=(e=(parseInt(e=e.replace(/\D/g,""))/100).toFixed(2)).replace(".",",")).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")),e}function l(e){return(e=e.replace(/\D/g,"")).split("").reverse().join("").match(/.{1,3}/g).join(".").split("").reverse().join("")}n.d(t,{VL:function(){return a},e:function(){return r},mE:function(){return l}})},81313:function(e,t,n){"use strict";let a=(0,n(39099).Ue)(e=>({tokenUsuario:null,setTokenUsuario:t=>e({tokenUsuario:t})}));t.Z=a},5048:function(e,t,n){"use strict";var a=n(57437);n(2265),t.Z=e=>{let{title:t}=e;return(0,a.jsx)("h1",{className:"text-2xl font-bold text-center py-4 text-buttonAzulClaro",children:t})}},80665:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});let a=n(38472).Z.create({baseURL:"http://localhost:3333/api"})},19993:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(12094),r=n(55971),l=(0,n(76767).tv)({slots:{base:"flex flex-col justify-center gap-1 max-w-fit items-center",label:"",svgWrapper:"relative block",svg:"z-0 relative overflow-hidden",track:"h-full stroke-default-300/50",indicator:"h-full stroke-current",value:"absolute font-normal inset-0 flex items-center justify-center"},variants:{color:{default:{svg:"text-default-400"},primary:{svg:"text-primary"},secondary:{svg:"text-secondary"},success:{svg:"text-success"},warning:{svg:"text-warning"},danger:{svg:"text-danger"}},size:{sm:{svg:"w-8 h-8",label:"text-small",value:"text-[0.5rem]"},md:{svg:"w-10 h-10",label:"text-small",value:"text-[0.55rem]"},lg:{svg:"w-12 h-12",label:"text-medium",value:"text-[0.6rem]"}},isIndeterminate:{true:{svg:"animate-spinner-ease-spin"}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:{},false:{indicator:"transition-all !duration-500"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1},compoundVariants:[{disableAnimation:!0,isIndeterminate:!1,class:{svg:"!transition-none motion-reduce:transition-none"}}]}),o=n(26242),s=n(65263),i=n(36222),c=n(34140),u=n(53640),d=n(277),f=n(2265),m=n(60543),p=n(41286),v=n(57437),b=(0,r.Gp)((e,t)=>{let{Component:n,slots:b,classNames:h,label:g,showValueLabel:x,getProgressBarProps:C,getLabelProps:j,getSvgProps:y,getIndicatorProps:k,getTrackProps:w}=function(e){var t,n,v;let b=(0,a.w)(),[h,g]=(0,r.oe)(e,l.variantKeys),{ref:x,as:C,id:j,className:y,classNames:k,label:w,valueLabel:P,value:N,minValue:I=0,maxValue:E=100,strokeWidth:Z,showValueLabel:S=!1,formatOptions:L={style:"percent"},...D}=h,T=(0,o.gy)(x),R=(0,s.W)(null==k?void 0:k.base,y),[,V]=(0,m.t)({rerender:!0,delay:100}),W=(null==(t=e.isIndeterminate)||t)&&void 0===N,q=null!=(v=null!=(n=e.disableAnimation)?n:null==b?void 0:b.disableAnimation)&&v,{progressBarProps:z,labelProps:_}=(0,p.D)({id:j,label:w,value:N,minValue:I,maxValue:E,valueLabel:P,formatOptions:L,isIndeterminate:W,"aria-labelledby":e["aria-labelledby"],"aria-label":e["aria-label"]}),B=(0,f.useMemo)(()=>l({...g,disableAnimation:q,isIndeterminate:W}),[(0,i.Xx)(g),q,W]),$=!!q||V,M=Z||("sm"===e.size?2:3),U=16-M,A=2*U*Math.PI,Y=A-(0,f.useMemo)(()=>$?W?.25:N?(0,c.Ez)((N-I)/(E-I),1):0:0,[$,N,I,E,W])*A,O=(0,f.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:T,"data-indeterminate":(0,u.PB)(W),"data-disabled":(0,u.PB)(e.isDisabled),className:B.base({class:R}),...(0,d.d)(z,D,t)}},[T,B,W,e.isDisabled,R,z,D]),F=(0,f.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{className:B.label({class:null==k?void 0:k.label}),...(0,d.d)(_,e)}},[B,k,_]),H=(0,f.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{viewBox:"0 0 32 32",fill:"none",strokeWidth:M,className:B.svg({class:null==k?void 0:k.svg}),...e}},[M,B,k]),G=(0,f.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{cx:16,cy:16,r:U,role:"presentation",strokeDasharray:"".concat(A," ").concat(A),strokeDashoffset:Y,transform:"rotate(-90 16 16)",strokeLinecap:"round",className:B.indicator({class:null==k?void 0:k.indicator}),...e}},[B,k,Y,A,U]),J=(0,f.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{cx:16,cy:16,r:U,role:"presentation",strokeDasharray:"".concat(A," ").concat(A),strokeDashoffset:0,transform:"rotate(-90 16 16)",strokeLinecap:"round",className:B.track({class:null==k?void 0:k.track}),...e}},[B,k,A,U]);return{Component:C||"div",domRef:T,slots:B,classNames:k,label:w,showValueLabel:S,getProgressBarProps:O,getLabelProps:F,getSvgProps:H,getIndicatorProps:G,getTrackProps:J}}({ref:t,...e}),P=C();return(0,v.jsxs)(n,{...P,children:[(0,v.jsxs)("div",{className:b.svgWrapper({class:null==h?void 0:h.svgWrapper}),children:[(0,v.jsxs)("svg",{...y(),children:[(0,v.jsx)("circle",{...w()}),(0,v.jsx)("circle",{...k()})]}),x&&(0,v.jsx)("span",{className:b.value({class:null==h?void 0:h.value}),children:P["aria-valuetext"]})]}),g&&(0,v.jsx)("span",{...j(),children:g})]})});b.displayName="NextUI.CircularProgress";var h=b},60543:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});var a=n(2265);function r(e={}){let{rerender:t=!1,delay:n=0}=e,r=(0,a.useRef)(!1),[l,o]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{r.current=!0;let e=null;return t&&(n>0?e=setTimeout(()=>{o(!0)},n):o(!0)),()=>{r.current=!1,t&&o(!1),e&&clearTimeout(e)}},[t]),[(0,a.useCallback)(()=>r.current,[]),l]}},15795:function(e,t,n){"use strict";n.d(t,{X:function(){return l}});var a=n(34909);let r=new Map;function l(e){let{locale:t}=(0,a.j)(),n=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():"");if(r.has(n))return r.get(n);let l=new Intl.Collator(t,e);return r.set(n,l),l}},41286:function(e,t,n){"use strict";n.d(t,{D:function(){return u}});var a=n(60357),r=n(50655),l=n(277),o=n(60720),s=n(34909),i=n(40839),c=n(2265);function u(e){let{value:t=0,minValue:n=0,maxValue:u=100,valueLabel:d,isIndeterminate:f,formatOptions:m={style:"percent"}}=e,p=(0,a.z)(e,{labelable:!0}),{labelProps:v,fieldProps:b}=(0,o.N)({...e,labelElementType:"span"}),h=((t=(0,r.uZ)(t,n,u))-n)/(u-n),g=function(e={}){let{locale:t}=(0,s.j)();return(0,c.useMemo)(()=>new i.e(t,e),[t,e])}(m);if(!f&&!d){let e="percent"===m.style?h:t;d=g.format(e)}return{progressBarProps:(0,l.d)(p,{...b,"aria-valuenow":f?void 0:t,"aria-valuemin":n,"aria-valuemax":u,"aria-valuetext":f?void 0:d,role:"progressbar"}),labelProps:v}}},20878:function(e,t,n){"use strict";n.d(t,{z:function(){return r},G:function(){return o}});var a=n(90731);function r(e,t){let n=l(e,t,"left"),a=l(e,t,"top"),r=t.offsetWidth,o=t.offsetHeight,s=e.scrollLeft,i=e.scrollTop,{borderTopWidth:c,borderLeftWidth:u}=getComputedStyle(e),d=e.scrollLeft+parseInt(u,10),f=e.scrollTop+parseInt(c,10),m=d+e.clientWidth,p=f+e.clientHeight;n<=s?s=n-parseInt(u,10):n+r>m&&(s+=n+r-m),a<=f?i=a-parseInt(c,10):a+o>p&&(i+=a+o-p),e.scrollLeft=s,e.scrollTop=i}function l(e,t,n){let a="left"===n?"offsetLeft":"offsetTop",r=0;for(;t.offsetParent&&(r+=t[a],t.offsetParent!==e);){if(t.offsetParent.contains(e)){r-=e[a];break}t=t.offsetParent}return r}function o(e,t){if(document.contains(e)){let i=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(i).overflow)for(let t of function(e,t){let n=[];for(;e&&e!==document.documentElement;)(0,a.a)(e,void 0)&&n.push(e),e=e.parentElement;return n}(e))r(t,e);else{var n,l,o,s;let{left:a,top:r}=e.getBoundingClientRect();null==e||null===(n=e.scrollIntoView)||void 0===n||n.call(e,{block:"nearest"});let{left:i,top:c}=e.getBoundingClientRect();(Math.abs(a-i)>1||Math.abs(r-c)>1)&&(null==t||null===(o=t.containingElement)||void 0===o||null===(l=o.scrollIntoView)||void 0===l||l.call(o,{block:"center",inline:"center"}),null===(s=e.scrollIntoView)||void 0===s||s.call(e,{block:"nearest"}))}}}},99222:function(e,t,n){"use strict";n.d(t,{P:function(){return s}});var a=n(79248),r=n(2265);let l=0,o=new Map;function s(e){let[t,n]=(0,r.useState)();return(0,a.b)(()=>{if(!e)return;let t=o.get(e);if(t)n(t.element.id);else{let a=`react-aria-description-${l++}`;n(a);let r=document.createElement("div");r.id=a,r.style.display="none",r.textContent=e,document.body.appendChild(r),t={refCount:0,element:r},o.set(e,t)}return t.refCount++,()=>{t&&0==--t.refCount&&(t.element.remove(),o.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}},21166:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var a=n(7353),r=n(2265);function l(e,t,n,l){let o=(0,a.i)(n),s=null==n;(0,r.useEffect)(()=>{if(s||!e.current)return;let n=e.current;return n.addEventListener(t,o,l),()=>{n.removeEventListener(t,o,l)}},[e,t,l,s,o])}}},function(e){e.O(0,[3665,9095,4175,6310,7570,3641,5604,4351,8230,3516,7822,1298,50,1734,6249,6843,971,5454,2971,7023,1744],function(){return e(e.s=77196)}),_N_E=e.O()}]);