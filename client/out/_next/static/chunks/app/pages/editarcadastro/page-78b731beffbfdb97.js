(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1028],{86768:function(e,a,l){Promise.resolve().then(l.bind(l,22471))},22471:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return f}});var n=l(57437),t=l(2265),s=l(17821),o=l(81313),r=l(42552),i=l(93641),c=l(89470),u=l(81227),d=l(57839),m=l(14245),h=l(80665),p=l(30050),C=l(97735),x=l(4341);function f(){var e;let{tokenUsuario:a,setTokenUsuario:l}=(0,o.Z)(),[f,v]=(0,t.useState)(null),[g,j]=(0,t.useState)((null==a?void 0:a.imageUrl)?"http://localhost:3333/uploads/".concat(a.imageUrl):f),[b,N]=(0,t.useState)(""),[w,Z]=(0,t.useState)(""),[M,O]=(0,t.useState)(!1),S=()=>O(!M),L=async e=>{let l=(null==a?void 0:a.id.toString())||"0";console.log("\uD83D\uDE80 ~ handleImageChange ~ userId",l);let n=e.target.files[0];if(n){let e=URL.createObjectURL(n);v(e),j(e)}let t=new FormData;t.append("image",n),t.append("id",l);try{await h.h.post("/upload",t,{headers:{"Content-Type":"multipart/form-data"}})}catch(e){console.error("Erro no upload:",e)}},y={nome:(null==a?void 0:a.nome)||"",email:(null==a?void 0:a.email)||"",valorOrcamentoMensal:(null==a?void 0:null===(e=a.valorOrcamentoMensal)||void 0===e?void 0:e.toString())||"",senha:""},k=m.Ry().shape({nome:m.Z_().required("O Nome \xe9 obrigat\xf3rio"),email:m.Z_().email("Email inv\xe1lido").required("O Email \xe9 obrigat\xf3rio"),valorOrcamentoMensal:m.Z_().required("O Valor Or\xe7amento Mensal \xe9 obrigat\xf3rio"),senha:m.Z_().optional()}),D=async e=>{let n=await h.h.post("/atualizacadastro",{values:e,id:null==a?void 0:a.id});console.log("\uD83D\uDE80 ~ handleSubmit ~ response",n),200===n.status?(N(n.data.message),Z("success"),l(n.data.response)):(N(n.data.message),Z("error")),setTimeout(()=>{N(""),Z("")},3e3)};return(0,n.jsx)(s.J9,{initialValues:y,validationSchema:k,onSubmit:D,children:e=>{let{values:l,errors:t,handleChange:s,handleSubmit:o,setFieldValue:m,touched:h}=e;return(0,n.jsx)("form",{onSubmit:o,children:(0,n.jsxs)("div",{className:"w-[95%] mx-auto",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-12 pt-4 gap-5 w-full",children:[(0,n.jsx)("div",{className:"xs:col-span-12 md:col-span-3 w-full h-[400px] bg-BgCardPadrao rounded-lg p-4",children:(0,n.jsxs)("div",{className:"w-full flex items-center justify-center flex-col gap-8",children:[null==a?void 0:a.nome,(0,n.jsx)(r.h,{className:"w-28 h-28",showFallback:!0,src:g}),(0,n.jsx)("input",{type:"file",accept:"image/*",onChange:L,className:"hidden w-[60px]",id:"upload-button",name:"image"}),(0,n.jsx)("label",{className:"w-[100%]",htmlFor:"upload-button",children:(0,n.jsx)(i.A,{fullWidth:!0,className:"bg-buttonAzulClaro",as:"span",children:"Nova foto"})})]})}),(0,n.jsx)("div",{className:"col-span-9 bg-BgCardPadrao rounded-lg p-4",children:(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[(0,n.jsx)(c.Y,{label:"Nome",name:"nome",isInvalid:(null==h?void 0:h.nome)&&!!(null==t?void 0:t.nome),value:l.nome,onChange:s}),(0,n.jsx)(c.Y,{label:"E-mail",name:"email",value:l.email,isInvalid:(null==h?void 0:h.email)&&!!(null==t?void 0:t.email),onChange:s}),(0,n.jsx)(c.Y,{label:"Or\xe7amento Mensal",name:"valorOrcamentoMensal",value:l.valorOrcamentoMensal,isInvalid:(null==h?void 0:h.valorOrcamentoMensal)&&!!(null==t?void 0:t.valorOrcamentoMensal),startContent:(0,n.jsx)("span",{className:"text-white text-small",children:"R$"}),onChange:e=>{let{name:a,value:l}=e.target;m(a,(0,u.e)(l))}}),(0,n.jsx)(c.Y,{size:"lg",isInvalid:!!h.senha&&!!t.senha,fullWidth:!0,onChange:s,value:l.senha,name:"senha",className:"text-white",placeholder:"Nova senha",endContent:(0,n.jsx)("button",{type:"button",onClick:S,className:"focus:outline-none",children:M?(0,n.jsx)(C.p,{className:"text-2xl text-default-400 pointer-events-none"}):(0,n.jsx)(x.N,{className:"text-2xl text-default-400 pointer-events-none"})}),type:M?"text":"password"})]})}),(0,n.jsx)(d.Z,{onSubmit:o})]}),(0,n.jsx)("div",{className:"pt-4",children:b&&(0,n.jsx)(p.Z,{severity:w,children:b})})]})})}})}},57839:function(e,a,l){"use strict";l.d(a,{Z:function(){return r}});var n=l(57437),t=l(93641),s=l(37692),o=l(19993);function r(e){let{onSubmit:a,isSubmiting:l}=e;return(0,n.jsx)(t.A,{onClick:a,className:"p-6 text-sm",size:"sm",color:"success",endContent:l?(0,n.jsx)(o.Z,{className:" ml-3 w-[24px] h-[24px]","aria-label":"Loading...",color:"primary"}):(0,n.jsx)(s.Hh6,{}),children:"Salvar"})}},81227:function(e,a,l){"use strict";function n(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function t(e){return e&&(e=(e=(e=(parseInt(e=e.replace(/\D/g,""))/100).toFixed(2)).replace(".",",")).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")),e}function s(e){return(e=e.replace(/\D/g,"")).split("").reverse().join("").match(/.{1,3}/g).join(".").split("").reverse().join("")}l.d(a,{VL:function(){return n},e:function(){return t},mE:function(){return s}})},81313:function(e,a,l){"use strict";let n=(0,l(39099).Ue)(e=>({tokenUsuario:null,setTokenUsuario:a=>e({tokenUsuario:a})}));a.Z=n},4341:function(e,a,l){"use strict";l.d(a,{N:function(){return t}});var n=l(57437);l(2265);let t=e=>(0,n.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,n.jsx)("path",{d:"M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z",fill:"currentColor"})]})},97735:function(e,a,l){"use strict";l.d(a,{p:function(){return t}});var n=l(57437);l(2265);let t=e=>(0,n.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,n.jsx)("path",{d:"M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z",fill:"currentColor"})]})},80665:function(e,a,l){"use strict";l.d(a,{h:function(){return n}});let n=l(38472).Z.create({baseURL:"https://app.fluxodocapital.com.br/api"})}},function(e){e.O(0,[3665,4175,6310,7570,3641,7822,1298,50,6843,7655,7524,2971,7023,1744],function(){return e(e.s=86768)}),_N_E=e.O()}]);