(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9768],{11381:function(e,a,n){Promise.resolve().then(n.bind(n,41539))},41539:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return es}});var t=n(57437),s=n(2265),o=n(59295),r=n(949),i=n(93641),l=n(11829),c=n(2428),d=n(89470),u=n(98925),m=n(72354),h=n(77148),x=n(29629),p=n(9139),j=n(964),v=n(93908),g=n(71272),b=n(5048),f=n(26583);let C=e=>{let{size:a=24,width:n,height:s,...o}=e;return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:a||s,role:"presentation",viewBox:"0 0 24 24",width:a||n,...o,children:(0,t.jsx)("path",{d:"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",fill:"currentColor"})})};var N=n(55060),k=n(79602);let y=[{name:"ID",uid:"id"},{name:"Nome Investimento",uid:"nome"},{name:"Data Compra",uid:"dataCompra"},{name:"Valor Investido",uid:"valorInvestido"},{name:"Data Vencimento",uid:"dataVencimento"},{name:"Institui\xe7\xe3o",uid:"instituicao"},{name:"Quantidade",uid:"quantidade"},{name:"Taxa de Juros",uid:"taxaJuros"},{name:"Ticker",uid:"ticker"},{name:"Tipo",uid:"tipo"},{name:"Tipo Fundo",uid:"tipoFundo"},{name:"Tipo Plano",uid:"tipoPlano"},{name:"Valor Atual FII",uid:"valorAtualFii"},{name:"Valor Pago",uid:"valorPago"},{name:"ID Usu\xe1rio",uid:"idUser"},{name:"A\xe7\xf5es",uid:"actions"}],S=[{name:"Todos",uid:"todos"},{name:"A\xe7\xf5es",uid:"acao"},{name:"Fundos Imobili\xe1rios (FIIs)",uid:"fii"},{name:"Renda Fixa",uid:"rendaFixa"},{name:"Criptomoedas",uid:"cripto"},{name:"Fundos de Investimento",uid:"fundo"},{name:"Previd\xeancia Privada",uid:"previdencia"},{name:"Deb\xeantures",uid:"debentures"}];var I=n(49990),w=n(80665),A=n(81313),F=n(87138),P=n(62187),T=n(11183),D=n(80590),q=n(84603),V=n(2429),z=n(81887),R=n(47971);function Z(e){let{open:a,onClose:n,data:o}=e,[r,l]=(0,s.useState)(!1),[c,d]=(0,s.useState)(!1),[u,m]=(0,s.useState)(""),b=Object.values(o&&o.reduce((e,a)=>{let{nome:n,quantidade:t}=a;return e[n]?e[n].quantidade+=t:e[n]={nome:n,quantidade:t},e},{}));return o?(0,t.jsx)("div",{children:(0,t.jsx)(q.R,{isOpen:a,onClose:n,hideCloseButton:!0,placement:"center",className:"bg-BgCardPadrao ",backdrop:"opaque",size:"2xl",classNames:{backdrop:"bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"},children:(0,t.jsx)(V.A,{children:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z.I,{children:(0,t.jsxs)(h.b,{classNames:{wrapper:"max-h-[382px] bg-BgCardPadrao "},children:[(0,t.jsxs)(x.J,{children:[(0,t.jsx)(p.j,{children:(0,t.jsx)("b",{children:"Nome Do Fii"})}),(0,t.jsx)(p.j,{align:"center",children:(0,t.jsx)("b",{children:"Quantidade de Cotas"})})]}),(0,t.jsx)(j.y,{className:"bg-primaryTable",children:b&&b.map(e=>(0,t.jsxs)(v.g,{className:"border-b-1 border-white",children:[(0,t.jsx)(g.X,{scope:"row",children:e.nome}),(0,t.jsx)(g.X,{align:"center",children:e.quantidade})]},e.id))})]})}),(0,t.jsx)(R.R,{children:(0,t.jsx)(i.A,{color:"danger",variant:"light",onPress:e,children:"Fechar"})})]})})})}):(0,t.jsx)("div",{children:"Carregando..."})}var M=n(95256),B=n(81227),O=n(17821),L=n(14245),E=n(11001),W=n(30358),_=n(34909),U=n(30050);function $(e){let{open:a,onClose:n,object:o,funcao:r}=e,[l,c]=(0,s.useState)(""),u={valorjuros:"",datapagamento:(0,W.Lg)((0,W.iT)())},m=L.Ry().shape({valorjuros:L.Z_().required("Campo Obrigat\xf3rio"),datapagamento:L.hT().required("Campo \xe9 obrigat\xf3rio")}),h=async e=>{try{let a=await w.h.post("/addjuros",{values:e,dadosInvestimento:o});c("Provento adicionado com sucesso!"),200===a.status&&r(),setTimeout(()=>{c(""),n()},3e3)}catch(e){console.error("Erro ao adicionar proventos",e),c("Falha ao adicionar proventos. Tente novamente.")}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(q.R,{backdrop:"opaque",hideCloseButton:!0,isOpen:a,onClose:n,className:"bg-BgCardPadrao",size:"md",classNames:{backdrop:"bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"},children:(0,t.jsx)(O.J9,{initialValues:u,validationSchema:m,onSubmit:h,children:e=>{let{errors:a,handleChange:n,handleSubmit:s,touched:r,values:c,setFieldValue:u}=e;return(0,t.jsx)("form",{onSubmit:s,children:(0,t.jsx)(V.A,{children:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(M.k,{className:"flex flex-col gap-1",children:"Adicionar Proventos?"}),(0,t.jsxs)(z.I,{children:[(0,t.jsxs)("p",{children:["Deseja adicionar proventos ao fundo"," ",(0,t.jsx)("span",{className:"font-bold",children:o.nomeInvestimento}),"?"]}),(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(d.Y,{name:"valorjuros",isInvalid:!!a.valorjuros&&!!r.valorjuros,startContent:(0,t.jsx)("span",{className:"text-white text-small",children:"R$"}),value:c.valorjuros,fullWidth:!0,onChange:e=>{let{name:a,value:n}=e.target;u(a,(0,B.e)(n))}}),(0,t.jsx)(_.b,{locale:"pt-BR",children:(0,t.jsx)(E.J,{isInvalid:!!a.datapagamento&&!!r.datapagamento,name:"datapagamento",label:"Data pagamento",minValue:(0,W.Lg)((0,W.iT)()),onChange:e=>u("datapagamento",e),defaultValue:(0,W.Lg)((0,W.iT)())})})]})]}),(0,t.jsxs)(R.R,{children:[(0,t.jsx)(i.A,{color:"danger",variant:"light",onPress:e,children:"Cancelar"}),(0,t.jsx)(i.A,{color:"success",type:"submit",endContent:(0,t.jsx)(f.p,{}),children:"Confirmar"})]}),l&&(0,t.jsx)(U.Z,{severity:"success",children:l})]})})})}})})})}var J=n(54008);function Y(e){let{open:a,onClose:n,data:o,funcao:r}=e,[l,c]=(0,s.useState)(!1),[d,u]=(0,s.useState)(o),m=o&&o.reduce((e,a)=>{let{nomeInvestimento:n,valor:t,idUser:s,tipoDeInvestimento:o}=a;return!e[n]&&s?e[n]={nomeInvestimento:n,valor:t,idUser:s,tipoDeInvestimento:o}:(e[n].tipoDeInvestimento=o,s&&(e[n].idUser=s),e[n].valor+=t),e},{}),b=m?Object.values(m):[];if(!o)return(0,t.jsx)("div",{children:"Carregando..."});let f=e=>{u(b[e]),c(!0)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(q.R,{isOpen:a,onClose:n,hideCloseButton:!0,placement:"center",className:"bg-BgCardPadrao ",backdrop:"opaque",size:"2xl",classNames:{backdrop:"bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"},children:(0,t.jsx)(V.A,{children:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z.I,{children:(0,t.jsxs)(h.b,{classNames:{wrapper:"max-h-[382px] bg-BgCardPadrao "},children:[(0,t.jsxs)(x.J,{children:[(0,t.jsx)(p.j,{children:(0,t.jsx)("b",{children:"Nome do Investimento"})}),(0,t.jsx)(p.j,{align:"center",children:(0,t.jsx)("b",{children:"Valor"})}),(0,t.jsx)(p.j,{align:"center",children:(0,t.jsx)("b",{children:"Adicionar Lucro"})})]}),(0,t.jsx)(j.y,{className:"bg-primaryTable",children:b&&b.map((a,n)=>(0,t.jsxs)(v.g,{className:"border-b-1 border-white",children:[(0,t.jsx)(g.X,{scope:"row",children:a.nomeInvestimento}),(0,t.jsx)(g.X,{align:"center",children:(0,P.Z)(a.valor)}),(0,t.jsx)(g.X,{align:"center",children:(0,t.jsx)(i.A,{color:"success",onPress:e,endContent:(0,t.jsx)(J.r7I,{}),onClick:()=>f(n),children:"Adicionar"})})]},a.id))})]})}),(0,t.jsx)(R.R,{children:(0,t.jsx)(i.A,{color:"danger",variant:"light",onPress:e,children:"Fechar"})})]})})}),(0,t.jsx)($,{open:l,onClose:()=>c(!1),object:d,funcao:r})]})}var X=n(95404),G=n(59928),Q=n(8127),K=n(70186);let H=[{nome:"Vencido"},{nome:"Retirada antes do prazo"}];function ee(e){let{open:a,onClose:n,object:o,funcao:r}=e,[l,c]=(0,s.useState)(""),u=L.Ry().shape({valorjuros:L.Z_().required("Campo Obrigat\xf3rio"),observacao:L.Z_().optional(),motivo:L.Z_().required("Campo Obrigat\xf3rio")}),m=async e=>{try{let a=await w.h.post("/sacarvencido",{investimento:o,values:e});c("Registro adicionado a transa\xe7\xf5es"),a.status,setTimeout(()=>{r(),c(""),n()},3e3)}catch(e){console.log("Erro ao adicionar ",e),c("Falha ao adicionar. Tente novamente.")}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(q.R,{backdrop:"opaque",hideCloseButton:!0,isOpen:a,onClose:n,className:"bg-BgCardPadrao",size:"md",classNames:{backdrop:"bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"},children:(0,t.jsx)(O.J9,{initialValues:{valorjuros:"",observacao:"",motivo:""},validationSchema:u,onSubmit:m,children:e=>{let{errors:a,handleChange:n,handleSubmit:s,touched:o,values:r,setFieldValue:c}=e;return(0,t.jsx)("form",{onSubmit:s,children:(0,t.jsx)(V.A,{children:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(M.k,{className:"flex flex-col gap-1",children:["Investimento Vencido ou Saque Adiantado",(0,t.jsx)("p",{className:"text-[15px] text-orange-400",children:"Obs: Ao confirmar, o investimento n\xe3o contabilizar\xe1 mais nos investimentos."})]}),(0,t.jsx)(z.I,{children:(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(d.Y,{label:"Valor total atual",name:"valorjuros",isInvalid:!!a.valorjuros&&!!o.valorjuros,startContent:(0,t.jsx)("span",{className:"text-white text-small",children:"R$"}),value:r.valorjuros,fullWidth:!0,onChange:e=>{let{name:a,value:n}=e.target;c(a,(0,B.e)(n))}}),(0,t.jsx)(G.g,{isInvalid:o.motivo&&!!a.motivo,name:"motivo",fullWidth:!0,label:"Motivo ?",onChange:n,children:H.map(e=>(0,t.jsx)(Q.R,{value:e.nome,children:e.nome},e.nome))}),(0,t.jsx)(K.Y,{label:"Observa\xe7\xe3o",name:"observacao",value:r.observacao,onChange:n})]})}),(0,t.jsxs)(R.R,{children:[(0,t.jsx)(i.A,{color:"danger",variant:"light",onPress:e,children:"Cancelar"}),(0,t.jsx)(i.A,{color:"success",type:"submit",endContent:(0,t.jsx)(f.p,{}),children:"Confirmar"})]}),l&&(0,t.jsx)(U.Z,{severity:"success",children:l})]})})})}})})})}function ea(e){let{open:a,onClose:n,object:o,funcao:r,dadosInvestmentos:l}=e,[c,u]=(0,s.useState)(""),m=L.Ry().shape({qtdvenda:L.Rx().required("Campo Obrigat\xf3rio"),valorcota:L.Z_().required("Campo Obrigat\xf3rio"),observacao:L.Z_().optional()}),h=async e=>{try{let a=await w.h.put("/vendacotasfii",{investimento:o,values:e});200===a.status&&(u("Fundo vendido com sucesso"),setTimeout(()=>{u(""),r(),n()},3e3))}catch(e){console.log("Erro ao vender FII:",e),u("Falha ao vender. Tente novamente."),setTimeout(()=>{u(""),r()},3e3)}},x=l.filter(e=>"fii"===e.tipo);console.log("\uD83D\uDE80 ~ BasicModal ~ fiiInvestimentos",x);let p=Object.values(x&&x.reduce((e,a)=>{let{nome:n,quantidade:t}=a;return e[n]?e[n].quantidade+=t:e[n]={nome:n,quantidade:t},e},{}));console.log("\uD83D\uDE80 ~ BasicModal ~ arrayAgrupado",p);let j=p&&(null==o?void 0:o.nome)?p.find(e=>e.nome===o.nome):null;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(q.R,{backdrop:"opaque",hideCloseButton:!0,isOpen:a,onClose:n,size:"md",className:"bg-BgCardPadrao",classNames:{backdrop:"bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"},children:(0,t.jsx)(O.J9,{initialValues:{qtdvenda:"",valorcota:"",observacao:""},validationSchema:m,onSubmit:h,children:e=>{let{errors:a,setFieldValue:n,handleChange:s,handleSubmit:r,touched:l,values:u}=e;return(0,t.jsx)("form",{onSubmit:r,children:(0,t.jsx)(V.A,{children:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(M.k,{className:"flex flex-col gap-1",children:[(0,t.jsxs)("p",{children:["Deseja vender cotas do fundo ",o.nome?o.nome:null,"?"]}),(0,t.jsxs)("p",{children:["quantidade dispon\xedvel: ",(0,t.jsx)("span",{className:"text-primaryTableHover",children:j.quantidade})]})]}),(0,t.jsxs)(z.I,{children:[(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(d.Y,{autoComplete:"off",type:"number",label:"Quantidade de cotas",name:"qtdvenda",isInvalid:l.qtdvenda&&!!a.qtdvenda,value:u.qtdvenda,fullWidth:!0,onChange:s}),(0,t.jsx)(d.Y,{label:"Valor por cota",name:"valorcota",isInvalid:l.valorcota&&!!a.valorcota,value:u.valorcota,fullWidth:!0,onChange:e=>{let{name:a,value:t}=e.target;"valorcota"===a?n(a,(0,B.e)(t)):n(a,t)},startContent:(0,t.jsx)("span",{className:"text-white text-small",children:"R$"})}),(0,t.jsx)(K.Y,{label:"Observa\xe7\xe3o",name:"observacao",value:u.observacao,onChange:s})]}),u.qtdvenda>j.quantidade?(0,t.jsx)(U.Z,{severity:"error",children:"Quantidade maior que a dispon\xedvel"}):null]}),(0,t.jsxs)(R.R,{children:[(0,t.jsx)(i.A,{color:"danger",variant:"light",onPress:e,children:"Cancelar"}),(0,t.jsx)(i.A,{isDisabled:u.qtdvenda>j.quantidade,color:"success",type:"submit",endContent:(0,t.jsx)(f.p,{}),children:"Confirmar"})]}),c&&(0,t.jsx)(U.Z,{severity:"success",children:c})]})})})}})})})}var en=n(16356),et=n(63872);function es(){let[e,a]=(0,s.useState)({open:!1,objeto:null,openVenda:!1,objetoVenda:null});console.log("\uD83D\uDE80 ~ App ~ modalSacar",e);let[n,q]=(0,s.useState)(0),[V,z]=(0,s.useState)(),[R,M]=(0,s.useState)({openClose:!1,objeto:null}),[B,O]=(0,s.useState)([]),[L,E]=(0,s.useState)([]),[W,_]=(0,s.useState)(!1),[U,$]=(0,s.useState)(!1),{tokenUsuario:J}=(0,A.Z)(),[G,Q]=(0,s.useState)("Minhas Rendas Fixas"),[K,H]=(0,s.useState)(),[es,eo]=(0,s.useState)(new Set([])),[er,ei]=(0,s.useState)(new Set(["nome","dataCompra","instituicao","valorInvestido","actions"])),[el,ec]=(0,s.useState)(new Set(["todos"])),[ed,eu]=(0,s.useState)(5),[em,eh]=(0,s.useState)({column:"age",direction:"ascending"}),[ex,ep]=(0,s.useState)(""),[ej,ev]=(0,s.useState)(),{visibility:eg}=(0,T.Z)();(0,s.useEffect)(()=>{switch(Array.from(el)[0]){case"todos":Q("Todos");break;case"acao":Q("Minhas A\xe7\xf5es");break;case"fii":Q("Meus Fundos Imobili\xe1rios (FIIs)");break;case"rendaFixa":default:Q("Minhas Rendas Fixas");break;case"cripto":Q("Minhas Criptomoedas");break;case"fundo":Q("Meus Fundos de Investimento");break;case"previdencia":Q("Previd\xeancia Privada");break;case"debentures":Q("Meus Deb\xeantures")}},[el]);let eb=async()=>{J&&E((await w.h.get("/meusinvestimentos",{params:{id:null==J?void 0:J.id}})).data)},ef=async()=>{z((await w.h.get("/lucratividade",{params:{id:null==J?void 0:J.id}})).data)};(0,s.useEffect)(()=>{ef(),eb()},[el]);let[eC,eN]=s.useState(1),ek=async()=>{try{let e=await w.h.delete("/deletainvestimento",{params:{id:R.objeto}});200===e.status&&(ep(e.data.message),ev("success"),ef(),eb()),setTimeout(()=>{ep(""),M({openClose:!1,objeto:null})},2e3)}catch(e){ep(e.response.data.message),ev("error"),setTimeout(()=>{ep(""),M({openClose:!1,objeto:null})},2e3)}},ey=!!K,eS=s.useMemo(()=>"all"===er?y:y.filter(e=>Array.from(er).includes(e.uid)),[er]),eI=Array.from(el)[0];(0,s.useEffect)(()=>{let e=Array.from(el)[0];"todos"!==e?z(V.filter(a=>a.tipoDeInvestimento===e)):(z([]),ef())},[el,L]);let ew=s.useMemo(()=>{let e=[...L];return ey&&(e=e.filter(e=>e.nome.toLowerCase().includes(K.toLowerCase()))),el&&(e="todos"!=eI?e.filter(e=>e.tipo===eI):e.filter(e=>e.tipo!=eI)),O(e),q(e&&e.reduce((e,a)=>e+a.valorInvestido,0)),e},[L,K,el,eI]),eA=Math.ceil(ew.length/ed),eF=s.useMemo(()=>{let e=(eC-1)*ed;return ew.slice(e,e+ed)},[eC,ew,ed]),eP=(0,s.useMemo)(()=>[...eF].sort((e,a)=>{let n=e[em.column],t=a[em.column],s=n<t?-1:n>t?1:0;return"descending"===em.direction?-s:s}),[em,eF]),eT=s.useCallback((e,n)=>{let s=e[n];switch(n){case"nome":return(0,t.jsx)("p",{children:e.nome});case"dataCompra":return(0,t.jsx)("p",{children:(0,D.Z)(e.dataCompra)});case"dataVencimento":return(0,t.jsx)("p",{children:e.dataVencimento?(0,D.Z)(e.dataVencimento):null});case"valorInvestido":return(0,t.jsx)("p",{children:eg?(0,P.Z)(e.valorInvestido):"****"});case"valorPago":return(0,t.jsx)("p",{children:eg?(0,P.Z)(e.valorPago):"****"});case"actions":return(0,t.jsx)("div",{className:"relative flex justify-end items-center gap-2",children:(0,t.jsxs)(o.F,{className:"bg-background border-1 border-default-200",children:[(0,t.jsx)(r.S,{children:(0,t.jsx)(i.A,{isIconOnly:!0,radius:"full",size:"sm",variant:"light",children:(0,t.jsx)(C,{width:18,height:18,size:18})})}),(0,t.jsxs)(l.a,{children:[(0,t.jsxs)(c.W,{onClick:()=>M({openClose:!0,objeto:e.id}),children:[(0,t.jsxs)("span",{className:"flex gap-2 text-red-500 items-center",children:[(0,t.jsx)(en.FH3,{}),"Deletar"]})," "]}),(0,t.jsx)(c.W,{children:"fii"===e.tipo?(0,t.jsxs)("span",{className:"flex items-center gap-2 text-orange-500",onClick:()=>a({openVenda:!0,objetoVenda:e}),children:[(0,t.jsx)(et.GGD,{})," Vender Cotas ?"]}):(0,t.jsxs)("span",{className:"flex items-center gap-2 text-orange-500",onClick:()=>a({open:!0,objeto:e}),children:[(0,t.jsx)(et.GGD,{})," Sacar/Vencido"]})})]})]})});default:return s}},[eg]),eD=s.useCallback(e=>{eu(Number(e.target.value)),eN(1)},[]),eq=s.useCallback(e=>{e?(H(e),eN(1)):H("")},[]),eV=s.useCallback(()=>{H(""),eN(1)},[]),ez=s.useMemo(()=>(0,t.jsxs)("div",{className:"w-full flex flex-col gap-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsx)(d.Y,{variant:"bordered",size:"md",fullWidth:!0,className:" ",placeholder:"Pesquisar Investimento...",startContent:(0,t.jsx)(k.W,{}),value:K,onClear:()=>eV(),onValueChange:eq}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[(0,t.jsxs)(o.F,{children:[(0,t.jsx)(r.S,{children:(0,t.jsx)(i.A,{endContent:(0,t.jsx)(N.v,{className:"text-small"}),className:"bg-buttonAzulClaro text-white",variant:"solid",children:(0,t.jsx)("p",{children:"Tipo de Investimento"})})}),(0,t.jsx)(l.a,{disallowEmptySelection:!0,"aria-label":"Table Columns",closeOnSelect:!0,selectedKeys:el,selectionMode:"single",onSelectionChange:e=>{"string"==typeof e?ec(new Set([e])):e instanceof Set&&ec(e)},children:S.map(e=>(0,t.jsx)(c.W,{className:"capitalize",children:(0,I.k)(e.name)},e.uid))})]}),"todos"===Array.from(el)[0]||"acao"===Array.from(el)[0]||"fii"===Array.from(el)[0]?(0,t.jsx)(i.A,{endContent:(0,t.jsx)(N.v,{className:"text-small"}),variant:"solid",onClick:()=>$(!0),children:(0,t.jsx)("p",{children:"Juros Ganhos"})}):null,"fii"===Array.from(el)[0]?(0,t.jsx)(i.A,{color:"warning",endContent:(0,t.jsx)(N.v,{className:"text-small"}),onClick:()=>_(!0),variant:"solid",children:(0,t.jsx)("p",{className:"text-lg",children:"Detalhes"})}):null,(0,t.jsxs)(o.F,{children:[(0,t.jsx)(r.S,{children:(0,t.jsx)(i.A,{endContent:(0,t.jsx)(N.v,{className:"text-small"}),className:"bg-buttonCinzaPadrao text-black",variant:"solid",children:"Colunas"})}),(0,t.jsx)(l.a,{disallowEmptySelection:!0,"aria-label":"Table Columns",closeOnSelect:!1,selectedKeys:er,selectionMode:"multiple",onSelectionChange:ei,children:y.map(e=>(0,t.jsx)(c.W,{className:"capitalize",children:(0,I.k)(e.name)},e.uid))})]}),(0,t.jsx)(i.A,{fullWidth:!0,color:"primary",variant:"solid",endContent:(0,t.jsx)(f.p,{size:18,width:18,height:18}),children:(0,t.jsx)(F.default,{href:"/pages/investimentos/novoinvestimento",children:" Novo Investimento"})})]})]}),(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-1text-default-900 text-small",children:[(0,t.jsxs)("span",{children:["Total ",B.length," Investimentos"]}),(0,t.jsxs)("span",{children:[G,", ",(0,t.jsx)("span",{className:"text-primaryTableText",children:eg?(0,P.Z)(n):"****"})," Investidos "]})]}),(0,t.jsxs)("label",{className:"flex items-center text-default-400 text-small",children:["Linhas por P\xe1ginas:",(0,t.jsxs)("select",{className:"bg-transparent outline-none text-default-400 text-small",onChange:eD,children:[(0,t.jsx)("option",{value:"5",children:"5"}),(0,t.jsx)("option",{value:"10",children:"10"}),(0,t.jsx)("option",{value:"15",children:"15"})]})]})]})]}),[K,el,er,eq,eD,ey,n,G,eg]),eR=s.useMemo(()=>(0,t.jsx)("div",{className:"py-2 px-2 flex justify-center items-center",children:(0,t.jsx)(u.g,{showControls:!0,classNames:{cursor:"bg-foreground text-background"},color:"default",isDisabled:ey,page:eC,total:eA,variant:"light",onChange:eN})}),[es,eF.length,eC,eA,ey]);return(0,t.jsxs)("div",{className:"w-full p-8",children:[(0,t.jsxs)(m.w,{className:" px-4 pt-4  bg-BgCardPadrao rounded-lg",children:[(0,t.jsx)(b.Z,{title:G}),(0,t.jsxs)(h.b,{isCompact:!0,removeWrapper:!0,"aria-label":"Example table with custom cells, pagination and sorting",bottomContent:eR,bottomContentPlacement:"outside",classNames:{wrapper:"max-h-[382px] bg-BgCardPadrao "},selectedKeys:es,selectionMode:"none",sortDescriptor:em,topContent:ez,topContentPlacement:"outside",onSelectionChange:eo,onSortChange:eh,children:[(0,t.jsx)(x.J,{columns:eS,children:e=>(0,t.jsx)(p.j,{className:"text-primaryTableText font-bold ",allowsSorting:e.sortable,align:"actions"===e.uid||"pago"===e.uid?"center":"start",children:e.name},e.uid)}),(0,t.jsx)(j.y,{emptyContent:"N\xe3o h\xe1 Investimentos Cadastrados",items:eP,children:e=>(0,t.jsx)(v.g,{className:"hover:text-primaryTableText",children:a=>(0,t.jsx)(g.X,{children:eT(e,a)})},e.id)})]})]}),(0,t.jsx)(Z,{data:B,open:W,onClose:()=>_(!1)}),(0,t.jsx)(Y,{data:V,open:U,onClose:()=>$(!1),funcao:ef}),(0,t.jsx)(X.Z,{isOpen:R.openClose,onClose:()=>M({openClose:!1,objeto:null}),confirmaEsclusao:ek,message:ex,messageTipo:ej,objeto:""}),(0,t.jsx)(ee,{open:e.open,onClose:()=>a({open:!1,objeto:null}),object:e.objeto,funcao:()=>eb()}),(0,t.jsx)(ea,{open:e.openVenda,onClose:()=>a({openVenda:!1,objetoVenda:null}),object:e.objetoVenda,funcao:()=>eb(),dadosInvestmentos:L})]},String(eg))}},49990:function(e,a,n){"use strict";function t(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.d(a,{k:function(){return t}}),n(2265)},62187:function(e,a){"use strict";a.Z=e=>e?e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):"RS 0.00"},81227:function(e,a,n){"use strict";function t(e){return e&&(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")),e}function s(e){return e&&(e=(e=(e=(parseInt(e=e.replace(/\D/g,""))/100).toFixed(2)).replace(".",",")).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")),e}function o(e){return(e=e.replace(/\D/g,"")).split("").reverse().join("").match(/.{1,3}/g).join(".").split("").reverse().join("")}n.d(a,{VL:function(){return t},e:function(){return s},mE:function(){return o}})},95404:function(e,a,n){"use strict";n.d(a,{Z:function(){return u}});var t=n(57437);n(2265);var s=n(84603),o=n(2429),r=n(95256),i=n(81887),l=n(47971),c=n(93641),d=n(30050);function u(e){let{isOpen:a,onClose:n,objeto:u,confirmaEsclusao:m,message:h,messageTipo:x}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.R,{className:"bg-BgCardPadrao rounded-lg",backdrop:"opaque",isOpen:a,onClose:n,hideCloseButton:!0,children:(0,t.jsx)(o.A,{children:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.k,{className:"flex flex-col w-full font-extrabold bg-[#C20E4D]",children:"Deseja fazer a exclus\xe3o"}),(0,t.jsx)(i.I,{}),(0,t.jsxs)(l.R,{className:"gap-6",children:[(0,t.jsx)(c.A,{variant:"bordered",color:"primary",onPress:n,children:"Cancelar"}),(0,t.jsx)(c.A,{variant:"ghost",color:"danger",onClick:m,className:"text-red-500",children:"Excluir"})]}),h?(0,t.jsx)(d.Z,{severity:x||"success",children:h}):null]})})})})}},80590:function(e,a,n){"use strict";function t(e){let[a,n,t]=e.split("/");return"".concat(t,"/").concat(n,"/").concat(a)}n.d(a,{Z:function(){return t}}),n(2265)},81313:function(e,a,n){"use strict";let t=(0,n(39099).Ue)(e=>({tokenUsuario:null,setTokenUsuario:a=>e({tokenUsuario:a})}));a.Z=t},11183:function(e,a,n){"use strict";let t=(0,n(39099).Ue)(e=>({visibility:!1,toggleVisibility:()=>e(e=>({visibility:!e.visibility}))}));a.Z=t},55060:function(e,a,n){"use strict";n.d(a,{v:function(){return s}});var t=n(57437);n(2265);let s=e=>{let{strokeWidth:a=1.5,...n}=e;return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...n,children:(0,t.jsx)("path",{d:"m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,strokeWidth:a})})}},26583:function(e,a,n){"use strict";n.d(a,{p:function(){return s}});var t=n(57437);n(2265);let s=e=>{let{size:a=24,width:n,height:s,...o}=e;return(0,t.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:a||s,role:"presentation",viewBox:"0 0 24 24",width:a||n,...o,children:(0,t.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,children:[(0,t.jsx)("path",{d:"M6 12h12"}),(0,t.jsx)("path",{d:"M12 18V6"})]})})}},79602:function(e,a,n){"use strict";n.d(a,{W:function(){return s}});var t=n(57437);n(2265);let s=e=>(0,t.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,t.jsx)("path",{d:"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,t.jsx)("path",{d:"M22 22L20 20",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]})},5048:function(e,a,n){"use strict";var t=n(57437);n(2265),a.Z=e=>{let{title:a}=e;return(0,t.jsx)("h1",{className:"text-2xl font-bold text-center py-4 text-buttonAzulClaro",children:a})}},80665:function(e,a,n){"use strict";n.d(a,{h:function(){return t}});let t=n(38472).Z.create({baseURL:"https://app.fluxodocapital.com.br/api"})}},function(e){e.O(0,[6051,9095,7240,8422,4175,6310,7570,3641,5604,5988,4351,8230,3516,6501,7822,1298,50,1734,6773,7138,4608,6843,971,6647,5454,9928,1418,2439,2971,7023,1744],function(){return e(e.s=11381)}),_N_E=e.O()}]);