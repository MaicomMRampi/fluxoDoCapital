"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6635],{22947:function(e,u,t){t.d(u,{J:function(){return n}});var n=(e,u,t)=>{let n=null==u?void 0:u.current;if(!n||!n.contains(e)){let e=document.querySelectorAll("body > span[data-focus-scope-start]"),u=[];if(e.forEach(e=>{u.push(e.nextElementSibling)}),1===u.length)return t.close(),!1}return!n||!n.contains(e)}},70186:function(e,u,t){t.d(u,{Y:function(){return S}});var n=t(31298),r=t(53640),o=t(55971),s=t(277),a=t(2265),l=t(22988),i=t(23950),d=a.useLayoutEffect,c=function(e){var u=a.useRef(e);return d(function(){u.current=e}),u},p=function(e,u){if("function"==typeof e){e(u);return}e.current=u},g=function(e,u){var t=(0,a.useRef)();return(0,a.useCallback)(function(n){e.current=n,t.current&&p(t.current,null),t.current=u,u&&p(u,n)},[u])},f={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},m=function(e){Object.keys(f).forEach(function(u){e.style.setProperty(u,f[u],"important")})},h=null,v=function(e,u){var t=e.scrollHeight;return"border-box"===u.sizingStyle.boxSizing?t+u.borderSize:t-u.paddingSize},b=function(){},x=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],E=!!document.documentElement.currentStyle,A=function(e){var u=window.getComputedStyle(e);if(null===u)return null;var t=x.reduce(function(e,t){return e[t]=u[t],e},{}),n=t.boxSizing;if(""===n)return null;E&&"border-box"===n&&(t.width=parseFloat(t.width)+parseFloat(t.borderRightWidth)+parseFloat(t.borderLeftWidth)+parseFloat(t.paddingRight)+parseFloat(t.paddingLeft)+"px");var r=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),o=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth);return{sizingStyle:t,paddingSize:r,borderSize:o}};function P(e,u,t){var n=c(t);a.useLayoutEffect(function(){var t=function(e){return n.current(e)};if(e)return e.addEventListener(u,t),function(){return e.removeEventListener(u,t)}},[])}var y=function(e){P(window,"resize",e)},B=function(e){P(document.fonts,"loadingdone",e)},C=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],D=a.forwardRef(function(e,u){var t=e.cacheMeasurements,n=e.maxRows,r=e.minRows,o=e.onChange,s=void 0===o?b:o,d=e.onHeightChange,c=void 0===d?b:d,p=(0,i.Z)(e,C),f=void 0!==p.value,x=a.useRef(null),E=g(x,u),P=a.useRef(0),D=a.useRef(),k=function(){var e,u,o,s,a,l,i,d,p,g,f,b=x.current,E=t&&D.current?D.current:A(b);if(E){D.current=E;var y=(e=b.value||b.placeholder||"x",void 0===(u=r)&&(u=1),void 0===(o=n)&&(o=1/0),h||((h=document.createElement("textarea")).setAttribute("tabindex","-1"),h.setAttribute("aria-hidden","true"),m(h)),null===h.parentNode&&document.body.appendChild(h),s=E.paddingSize,a=E.borderSize,i=(l=E.sizingStyle).boxSizing,Object.keys(l).forEach(function(e){h.style[e]=l[e]}),m(h),h.value=e,d=v(h,E),h.value=e,d=v(h,E),h.value="x",g=(p=h.scrollHeight-s)*u,"border-box"===i&&(g=g+s+a),d=Math.max(g,d),f=p*o,"border-box"===i&&(f=f+s+a),[d=Math.min(f,d),p]),B=y[0],C=y[1];P.current!==B&&(P.current=B,b.style.setProperty("height",B+"px","important"),c(B,{rowHeight:C}))}};return a.useLayoutEffect(k),y(k),B(k),a.createElement("textarea",(0,l.Z)({},p,{onChange:function(e){f||k(),s(e)},ref:E}))}),k=t(57437),M=(0,o.Gp)((e,u)=>{let{style:t,minRows:o=3,maxRows:l=8,cacheMeasurements:i=!1,disableAutosize:d=!1,onHeightChange:c,...p}=e,{Component:g,label:f,description:m,startContent:h,endContent:v,hasHelper:b,shouldLabelBeOutside:x,shouldLabelBeInside:E,isInvalid:A,errorMessage:P,getBaseProps:y,getLabelProps:B,getInputProps:C,getInnerWrapperProps:M,getInputWrapperProps:S,getHelperWrapperProps:F,getDescriptionProps:w,getErrorMessageProps:R}=(0,n.G)({...p,ref:u,isMultiline:!0}),[z,T]=(0,a.useState)(o>1),[N,L]=(0,a.useState)(!1),j=f?(0,k.jsx)("label",{...B(),children:f}):null,O=C(),W=d?(0,k.jsx)("textarea",{...O,style:(0,s.d)(O.style,null!=t?t:{})}):(0,k.jsx)(D,{...O,cacheMeasurements:i,"data-hide-scroll":(0,r.PB)(!N),maxRows:l,minRows:o,style:(0,s.d)(O.style,null!=t?t:{}),onHeightChange:(e,u)=>{1===o&&T(e>=2*u.rowHeight),l>o&&L(e>=l*u.rowHeight),null==c||c(e,u)}}),I=(0,a.useMemo)(()=>h||v?(0,k.jsxs)("div",{...M(),children:[h,W,v]}):(0,k.jsx)("div",{...M(),children:W}),[h,O,v,M]);return(0,k.jsxs)(g,{...y(),children:[x?j:null,(0,k.jsxs)("div",{...S(),"data-has-multiple-rows":(0,r.PB)(z),children:[E?j:null,I]}),b?(0,k.jsx)("div",{...F(),children:A&&P?(0,k.jsx)("div",{...R(),children:P}):m?(0,k.jsx)("div",{...w(),children:m}):null}):null]})});M.displayName="NextUI.Textarea";var S=M},52197:function(e,u,t){t.d(u,{S:function(){return B}});var n=t(2265),r=t(80683),o=t(43629),s=t(22947),a=t(23663),l=new WeakMap,i=[],d=t(277),c=t(46896),p=t(26242),g=t(89259),f=t(13389),m=t(48741),h=t(23452),v=t(12094),b=t(55971),x=t(89232),E=t(30256),A=t(36222),P=t(65263),y=t(53640);function B(e){var u,t,B;let C=(0,v.w)(),[D,k]=(0,b.oe)(e,x.v.variantKeys),{as:M,ref:S,children:F,state:w,triggerRef:R,scrollRef:z,defaultOpen:T,onOpenChange:N,isOpen:L,isNonModal:j=!0,shouldFlip:O=!0,containerPadding:W=12,shouldBlockScroll:I=!1,isDismissable:H=!0,shouldCloseOnBlur:_,portalContainer:K,updatePositionDeps:G,dialogProps:U,placement:J="top",triggerType:q="dialog",showArrow:Z=!1,offset:Y=7,crossOffset:V=0,boundaryElement:X,isKeyboardDismissDisabled:Q,shouldCloseOnInteractOutside:$,motionProps:ee,className:eu,classNames:et,onClose:en,...er}=D,eo=(0,p.gy)(S),es=(0,n.useRef)(null),ea=(0,n.useRef)(!1),el=R||es,ei=null!=(t=null!=(u=e.disableAnimation)?u:null==C?void 0:C.disableAnimation)&&t,ed=(0,g.d)({isOpen:L,defaultOpen:T,onOpenChange:e=>{null==N||N(e),e||null==en||en()}}),ec=w||ed,{popoverProps:ep,underlayProps:eg,placement:ef}=function(e,u){let{triggerRef:t,popoverRef:p,showArrow:g,offset:f=7,crossOffset:m=0,scrollRef:h,shouldFlip:v,boundaryElement:b,isDismissable:x=!0,shouldCloseOnBlur:E=!0,placement:A="top",containerPadding:P,shouldCloseOnInteractOutside:y,isNonModal:B,isKeyboardDismissDisabled:C,updatePositionDeps:D=[],...k}=e,M=null==B||B,{overlayProps:S,underlayProps:F}=(0,r.I)({isOpen:u.isOpen,onClose:u.close,shouldCloseOnBlur:E,isDismissable:x,isKeyboardDismissDisabled:C,shouldCloseOnInteractOutside:y||(e=>(0,s.J)(e,t,u))},p),{overlayProps:w,arrowProps:R,placement:z,updatePosition:T}=(0,o.t)({...k,shouldFlip:v,crossOffset:m,targetRef:t,overlayRef:p,isOpen:u.isOpen,scrollRef:h,boundaryElement:b,containerPadding:P,placement:(0,a.Yx)(A),offset:g?f+3:f,onClose:()=>{}});return(0,c.G)(()=>{D.length&&T()},D),(0,n.useEffect)(()=>{if(u.isOpen&&!M&&p.current)return function(e){let u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,t=new Set(e),n=new Set,r=e=>{for(let u of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))t.add(u);let u=e=>{let u=e.parentElement;if(t.has(e)||n.has(u)&&"row"!==u.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let u of t)if(e.contains(u))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:u}),s=u(e);if(s===NodeFilter.FILTER_ACCEPT&&o(e),s!==NodeFilter.FILTER_REJECT){let e=r.nextNode();for(;null!=e;)o(e),e=r.nextNode()}},o=e=>{var u;let t=null!=(u=l.get(e))?u:0;("true"!==e.getAttribute("aria-hidden")||0!==t)&&(0===t&&e.setAttribute("aria-hidden","true"),n.add(e),l.set(e,t+1))};i.length&&i[i.length-1].disconnect(),r(u);let s=new MutationObserver(e=>{for(let u of e)if("childList"===u.type&&0!==u.addedNodes.length&&![...t,...n].some(e=>e.contains(u.target))){for(let e of u.removedNodes)e instanceof Element&&(t.delete(e),n.delete(e));for(let e of u.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&("true"===e.dataset.liveAnnouncer||"true"===e.dataset.reactAriaTopLayer)?t.add(e):e instanceof Element&&r(e)}});s.observe(u,{childList:!0,subtree:!0});let a={observe(){s.observe(u,{childList:!0,subtree:!0})},disconnect(){s.disconnect()}};return i.push(a),()=>{for(let e of(s.disconnect(),n)){let u=l.get(e);null!=u&&(1===u?(e.removeAttribute("aria-hidden"),l.delete(e)):l.set(e,u-1))}a===i[i.length-1]?(i.pop(),i.length&&i[i.length-1].observe()):i.splice(i.indexOf(a),1)}}([p.current])},[M,u.isOpen,p]),{popoverProps:(0,d.d)(S,w),arrowProps:R,underlayProps:F,placement:z}}({triggerRef:el,isNonModal:j,popoverRef:eo,placement:J,offset:Y,scrollRef:z,isDismissable:H,shouldCloseOnBlur:_,boundaryElement:X,crossOffset:V,shouldFlip:O,containerPadding:W,updatePositionDeps:G,isKeyboardDismissDisabled:Q,shouldCloseOnInteractOutside:$},ec),{triggerProps:em}=(0,m.I)({type:q},ec,el),{isFocusVisible:eh,isFocused:ev,focusProps:eb}=(0,f.F)(),ex=(0,n.useMemo)(()=>(0,x.v)({...k}),[(0,A.Xx)(k)]),eE=(0,P.W)(null==et?void 0:et.base,eu),eA=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-slot":"content","data-open":(0,y.PB)(ec.isOpen),"data-arrow":(0,y.PB)(Z),"data-placement":(0,a.sK)(ef,J),className:ex.content({class:(0,P.W)(null==et?void 0:et.content,e.className)})}},[ex,ec.isOpen,Z,ef,J,et]),eP=(0,n.useMemo)(()=>(0,a.Yv)(ef,J)&&ef||J,[ef,J]),ey=(0,n.useCallback)(u=>{var t;let n;return"touch"===u.pointerType&&((null==e?void 0:e.backdrop)==="blur"||(null==e?void 0:e.backdrop)==="opaque")?n=setTimeout(()=>{ea.current=!0},100):ea.current=!0,null==(t=em.onPress)||t.call(em,u),()=>{clearTimeout(n)}},[null==em?void 0:em.onPress]),eB=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{isDisabled:t,...n}=e;return{"data-slot":"trigger","aria-haspopup":"dialog",...(0,d.d)(em,n),onPress:ey,isDisabled:t,className:ex.trigger({class:(0,P.W)(null==et?void 0:et.trigger,e.className),isTriggerDisabled:t}),ref:(0,E.l)(u,el)}},[ec,em,ey,el]),eC=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-slot":"backdrop",className:ex.backdrop({class:null==et?void 0:et.backdrop}),onClick:e=>{if(!ea.current){e.preventDefault();return}ec.close(),ea.current=!1},...eg,...e}},[ex,ec.isOpen,et,eg]);return(0,n.useEffect)(()=>{if(ec.isOpen&&(null==eo?void 0:eo.current))return(0,h.R)([null==eo?void 0:eo.current])},[ec.isOpen,eo]),{state:ec,Component:M||"div",children:F,classNames:et,showArrow:Z,triggerRef:el,placement:eP,isNonModal:j,popoverRef:eo,portalContainer:K,isOpen:ec.isOpen,onClose:ec.close,disableAnimation:ei,shouldBlockScroll:I,backdrop:null!=(B=e.backdrop)?B:"transparent",motionProps:ee,getBackdropProps:eC,getPopoverProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:eo,...(0,d.d)(ep,er,e),style:(0,d.d)(ep.style,er.style,e.style)}},getTriggerProps:eB,getDialogProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"data-slot":"base","data-open":(0,y.PB)(ec.isOpen),"data-focus":(0,y.PB)(ev),"data-arrow":(0,y.PB)(Z),"data-focus-visible":(0,y.PB)(eh),"data-placement":(0,a.sK)(ef,J),...(0,d.d)(eb,U,e),className:ex.base({class:(0,P.W)(eE)}),style:{outline:"none"}}},getContentProps:eA}}},91051:function(e,u,t){t.d(u,{u:function(){return l}});var n={};n={"ar-AE":{longPressMessage:`\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}`},"bg-BG":{longPressMessage:`\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}`},"cs-CZ":{longPressMessage:`Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku`},"da-DK":{longPressMessage:`Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`},"de-DE":{longPressMessage:`Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`},"el-GR":{longPressMessage:`\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}`},"en-US":{longPressMessage:"Long press or press Alt + ArrowDown to open menu"},"es-ES":{longPressMessage:`Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`},"et-EE":{longPressMessage:`Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`},"fi-FI":{longPressMessage:`Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`},"fr-FR":{longPressMessage:`Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`},"he-IL":{longPressMessage:`\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}`},"hr-HR":{longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"},"hu-HU":{longPressMessage:`Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`},"it-IT":{longPressMessage:`Premere a lungo o premere Alt + Freccia gi\xf9 per aprire il menu`},"ja-JP":{longPressMessage:`\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`},"ko-KR":{longPressMessage:`\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}`},"lt-LT":{longPressMessage:`Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.`},"lv-LV":{longPressMessage:`Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a`},"nb-NO":{longPressMessage:`Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`},"nl-NL":{longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"},"pl-PL":{longPressMessage:`Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu`},"pt-BR":{longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"},"pt-PT":{longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"},"ro-RO":{longPressMessage:`Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul`},"ru-RU":{longPressMessage:`\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}`},"sk-SK":{longPressMessage:`Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol`},"sl-SI":{longPressMessage:`Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol`},"sr-SP":{longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"},"sv-SE":{longPressMessage:`H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`},"tr-TR":{longPressMessage:`Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n`},"uk-UA":{longPressMessage:`\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}`},"zh-CN":{longPressMessage:`\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}`},"zh-TW":{longPressMessage:`\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}`}};var r=t(80612),o=t(88623),s=t(15966),a=t(48741);function l(e,u,t){var l;let{type:i="menu",isDisabled:d,trigger:c="press"}=e,p=(0,r.Me)(),{triggerProps:g,overlayProps:f}=(0,a.I)({type:i},u,t),m=(0,o.q)((l=n)&&l.__esModule?l.default:l,"@react-aria/menu"),{longPressProps:h}=(0,s.T)({isDisabled:d||"longPress"!==c,accessibilityDescription:m.format("longPressMessage"),onLongPressStart(){u.close()},onLongPress(){u.open("first")}});return delete g.onPress,{menuTriggerProps:{...g,..."press"===c?{onPressStart(e){"touch"===e.pointerType||"keyboard"===e.pointerType||d||u.open("virtual"===e.pointerType?"first":null)},onPress(e){"touch"!==e.pointerType||d||u.toggle()}}:h,id:p,onKeyDown:e=>{if(!d&&("longPress"!==c||e.altKey)&&t&&t.current)switch(e.key){case"Enter":case" ":if("longPress"===c)return;case"ArrowDown":"continuePropagation"in e||e.stopPropagation(),e.preventDefault(),u.toggle("first");break;case"ArrowUp":"continuePropagation"in e||e.stopPropagation(),e.preventDefault(),u.toggle("last");break;default:"continuePropagation"in e&&e.continuePropagation()}}},menuProps:{...f,"aria-labelledby":p,autoFocus:u.focusStrategy||!0,onClose:u.close}}}},48741:function(e,u,t){t.d(u,{I:function(){return s}});var n=t(64292),r=t(2265),o=t(80612);function s(e,u,t){let s,{type:a}=e,{isOpen:l}=u;(0,r.useEffect)(()=>{t&&t.current&&(0,n.v).set(t.current,u.close)}),"menu"===a?s=!0:"listbox"===a&&(s="listbox");let i=(0,o.Me)();return{triggerProps:{"aria-haspopup":s,"aria-expanded":l,"aria-controls":l?i:null,onPress:u.toggle},overlayProps:{id:i}}}},75699:function(e,u,t){t.d(u,{W:function(){return o}});var n=t(89259),r=t(2265);function o(e){let u=(0,n.d)(e),[t,o]=(0,r.useState)(null),[s,a]=(0,r.useState)([]),l=()=>{a([]),u.close()};return{focusStrategy:t,...u,open(e=null){o(e),u.open()},toggle(e=null){o(e),u.toggle()},close(){l()},expandedKeysStack:s,openSubmenu:(e,u)=>{a(t=>u>t.length?t:[...t.slice(0,u),e])},closeSubmenu:(e,u)=>{a(t=>t[u]===e?t.slice(0,u):t)}}}}}]);