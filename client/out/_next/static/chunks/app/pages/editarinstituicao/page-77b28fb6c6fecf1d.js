(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7786],{32764:function(e,t,s){Promise.resolve().then(s.bind(s,64568))},64568:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var n=s(57437),r=s(2265),a=s(77148),o=s(29629),i=s(9139),c=s(964),l=s(93908),d=s(71272),u=s(26249),x=s(80665),h=s(81313),j=s(18554),p=s(84465),f=s(19675),k=s(99990);function m(){let{tokenUsuario:e}=(0,h.Z)(),[t,s]=(0,r.useState)([]),[m,g]=(0,r.useState)(!1),[N,C]=(0,r.useState)(),v=async()=>{if(e)try{let t=await x.h.get("/buscabanco",{params:{id:null==e?void 0:e.id}});s(t.data)}catch(e){}};(0,r.useEffect)(()=>{v()},[]);let b=e=>{C(e),g(!0)},L=async t=>{if(e)try{let s=await x.h.delete("/deletabanco",{data:{id:null==e?void 0:e.id,idBanco:t}});v(),200==s.status&&setTimeout(()=>{g(!1),C(" ")})}catch(e){}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.b,{"aria-label":"Example static collection table",children:[(0,n.jsxs)(o.J,{children:[(0,n.jsx)(i.j,{children:"ID"}),(0,n.jsx)(i.j,{children:"Nome"}),(0,n.jsx)(i.j,{children:"Ações"})]}),(0,n.jsx)(c.y,{children:t.map(e=>(0,n.jsxs)(l.g,{children:[(0,n.jsx)(d.X,{children:e.id}),(0,n.jsx)(d.X,{children:e.nomeBanco}),(0,n.jsx)(d.X,{children:(0,n.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,n.jsx)(u.e,{className:"",content:"Mais detalhes",children:(0,n.jsx)("span",{className:"text-lg text-default-400 cursor-pointer active:opacity-50",children:(0,n.jsx)(f.Uf_,{className:"text-buttonAzulClaro"})})}),(0,n.jsx)(u.e,{className:"",content:"Inativar",children:(0,n.jsx)("span",{className:"text-lg text-default-400 cursor-pointer active:opacity-50",children:(0,n.jsx)(j.pyx,{className:"text-iconeDeBloquiar"})})}),(0,n.jsx)(u.e,{className:"",color:"danger",content:"Deletar",children:(0,n.jsx)("span",{className:"text-lg text-danger cursor-pointer active:opacity-50",children:(0,n.jsx)(p.p,{onClick:()=>b(e.id),className:"text-red-500"})})})]})})]},e.id))})]}),(0,n.jsx)(k.Z,{isOpen:m,onClose:()=>g(!1),id:N,confirmaEsclusao:()=>L(N)})]})}},99990:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var n=s(57437);s(2265);var r=s(84603),a=s(2429),o=s(95256),i=s(81887),c=s(47971),l=s(93641);function d(e){let{isOpen:t,onClose:s,confirmaEsclusao:d,message:u,id:x}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.R,{className:"bg-black rounded-lg",backdrop:"opaque",isOpen:t,onClose:s,hideCloseButton:!0,children:(0,n.jsx)(a.A,{children:()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.k,{className:"flex flex-col w-full font-extrabold bg-[#C20E4D]",children:"Deseja fazer a exclus\xe3o"}),(0,n.jsx)(i.I,{}),(0,n.jsxs)(c.R,{className:"gap-6",children:[(0,n.jsx)(l.A,{variant:"light",className:"text-green-500",onPress:s,children:"Cancelar"}),(0,n.jsx)(l.A,{variant:"ghost",color:"danger",onClick:d,className:"text-red-500",children:"Excluir"})]}),(0,n.jsx)("p",{className:"text-green-700",children:u||""})]})})})})}},81313:function(e,t,s){"use strict";let n=(0,s(39099).Ue)(e=>({tokenUsuario:null,setTokenUsuario:t=>e({tokenUsuario:t})}));t.Z=n},84465:function(e,t,s){"use strict";s.d(t,{p:function(){return r}});var n=s(57437);s(2265);let r=e=>(0,n.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 20 20",width:"1em",...e,children:[(0,n.jsx)("path",{d:"M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}),(0,n.jsx)("path",{d:"M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}),(0,n.jsx)("path",{d:"M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}),(0,n.jsx)("path",{d:"M8.60834 13.75H11.3833",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}),(0,n.jsx)("path",{d:"M7.91669 10.4167H12.0834",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5})]})},80665:function(e,t,s){"use strict";s.d(t,{h:function(){return n}});let n=s(38472).Z.create({baseURL:"https://app.fluxodocapital.com.br/api"})},95256:function(e,t,s){"use strict";s.d(t,{k:function(){return d}});var n=s(8621),r=s(2265),a=s(55971),o=s(26242),i=s(65263),c=s(57437),l=(0,a.Gp)((e,t)=>{let{as:s,children:a,className:l,...d}=e,{slots:u,classNames:x,headerId:h,setHeaderMounted:j}=(0,n.v)(),p=(0,o.gy)(t);return(0,r.useEffect)(()=>(j(!0),()=>j(!1)),[j]),(0,c.jsx)(s||"header",{ref:p,className:u.header({class:(0,i.W)(null==x?void 0:x.header,l)}),id:h,...d,children:a})});l.displayName="NextUI.ModalHeader";var d=l}},function(e){e.O(0,[5280,7675,4175,6310,7570,3641,5604,5988,4351,8230,3516,6501,1734,6773,6249,2971,7023,1744],function(){return e(e.s=32764)}),_N_E=e.O()}]);