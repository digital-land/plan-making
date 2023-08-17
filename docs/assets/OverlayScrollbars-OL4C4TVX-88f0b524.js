import{k as Sl,_ as Ue,p as et,A as xl,C as hr,F as gr}from"./compat.module-2188d38e.js";import"./preact.module-d1801ce4.js";function D(e,t){if(Ot(e))for(let r=0;r<e.length&&t(e[r],r,e)!==!1;r++);else e&&D(Object.keys(e),r=>t(e[r],r,e));return e}function re(e,t){let r=Re(t);if(me(t)||r){let l=r?"":{};if(e){let n=window.getComputedStyle(e,null);l=r?Sr(e,n,t):t.reduce((o,i)=>(o[i]=Sr(e,n,i),o),l)}return l}e&&D(ue(t),l=>Bl(e,l,t[l]))}var ve=(e,t)=>{let{o:r,u:l,_:n}=e,o=r,i,s=(a,c)=>{let d=o,p=a,f=c||(l?!l(d,p):d!==p);return(f||n)&&(o=p,i=d),[o,f,i]};return[t?a=>s(t(o,i),a):s,a=>[o,!!a,i]]},nt=()=>typeof window<"u",qr=nt()&&Node.ELEMENT_NODE,{toString:Ol,hasOwnProperty:Rt}=Object.prototype,He=e=>e===void 0,xt=e=>e===null,Cl=e=>He(e)||xt(e)?`${e}`:Ol.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),Te=e=>typeof e=="number",Re=e=>typeof e=="string",er=e=>typeof e=="boolean",we=e=>typeof e=="function",me=e=>Array.isArray(e),tt=e=>typeof e=="object"&&!me(e)&&!xt(e),Ot=e=>{let t=!!e&&e.length,r=Te(t)&&t>-1&&t%1==0;return me(e)||!we(e)&&r?t>0&&tt(e)?t-1 in e:!0:!1},Wt=e=>{if(!e||!tt(e)||Cl(e)!=="object")return!1;let t,r="constructor",l=e[r],n=l&&l.prototype,o=Rt.call(e,r),i=n&&Rt.call(n,"isPrototypeOf");if(l&&!o&&!i)return!1;for(t in e);return He(t)||Rt.call(e,t)},ht=e=>{let t=HTMLElement;return e?t?e instanceof t:e.nodeType===qr:!1},Ct=e=>{let t=Element;return e?t?e instanceof t:e.nodeType===qr:!1},tr=(e,t,r)=>e.indexOf(t,r),W=(e,t,r)=>(!r&&!Re(t)&&Ot(t)?Array.prototype.push.apply(e,t):e.push(t),e),Ve=e=>{let t=Array.from,r=[];return t&&e?t(e):(e instanceof Set?e.forEach(l=>{W(r,l)}):D(e,l=>{W(r,l)}),r)},rr=e=>!!e&&e.length===0,Oe=(e,t,r)=>{D(e,l=>l&&l.apply(void 0,t||[])),!r&&(e.length=0)},$t=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),ue=e=>e?Object.keys(e):[],K=(e,t,r,l,n,o,i)=>{let s=[t,r,l,n,o,i];return(typeof e!="object"||xt(e))&&!we(e)&&(e={}),D(s,a=>{D(ue(a),c=>{let d=a[c];if(e===d)return!0;let p=me(d);if(d&&(Wt(d)||p)){let f=e[c],u=f;p&&!me(f)?u=[]:!p&&!Wt(f)&&(u={}),e[c]=K(u,d)}else e[c]=d})}),e},lr=e=>{for(let t in e)return!1;return!0},Xr=(e,t,r,l)=>{if(He(l))return r?r[e]:t;r&&(Re(l)||Te(l))&&(r[e]=l)},te=(e,t,r)=>{if(He(r))return e?e.getAttribute(t):null;e&&e.setAttribute(t,r)},ae=(e,t)=>{e&&e.removeAttribute(t)},De=(e,t,r,l)=>{if(r){let n=te(e,t)||"",o=new Set(n.split(" "));o[l?"add":"delete"](r);let i=Ve(o).join(" ").trim();te(e,t,i)}},$l=(e,t,r)=>{let l=te(e,t)||"";return new Set(l.split(" ")).has(r)},ge=(e,t)=>Xr("scrollLeft",0,e,t),Ae=(e,t)=>Xr("scrollTop",0,e,t),Ut=nt()&&Element.prototype,Wr=(e,t)=>{let r=[],l=t?Ct(t)?t:null:document;return l?W(r,l.querySelectorAll(e)):r},El=(e,t)=>{let r=t?Ct(t)?t:null:document;return r?r.querySelector(e):null},gt=(e,t)=>Ct(e)?(Ut.matches||Ut.msMatchesSelector).call(e,t):!1,nr=e=>e?Ve(e.childNodes):[],Pe=e=>e?e.parentElement:null,Je=(e,t)=>{if(Ct(e)){let r=Ut.closest;if(r)return r.call(e,t);do{if(gt(e,t))return e;e=Pe(e)}while(e)}return null},Al=(e,t,r)=>{let l=e&&Je(e,t),n=e&&El(r,l),o=Je(n,t)===l;return l&&n?l===e||n===e||o&&Je(Je(e,r),t)!==l:!1},ir=(e,t,r)=>{if(r&&e){let l=t,n;Ot(r)?(n=document.createDocumentFragment(),D(r,o=>{o===l&&(l=o.previousSibling),n.appendChild(o)})):n=r,t&&(l?l!==t&&(l=l.nextSibling):l=e.firstChild),e.insertBefore(n,l||null)}},be=(e,t)=>{ir(e,null,t)},Ll=(e,t)=>{ir(Pe(e),e,t)},wr=(e,t)=>{ir(Pe(e),e&&e.nextSibling,t)},xe=e=>{if(Ot(e))D(Ve(e),t=>xe(t));else if(e){let t=Pe(e);t&&t.removeChild(e)}},Ne=e=>{let t=document.createElement("div");return e&&te(t,"class",e),t},Ur=e=>{let t=Ne();return t.innerHTML=e.trim(),D(nr(t),r=>xe(r))},Jt=e=>e.charAt(0).toUpperCase()+e.slice(1),Pl=()=>Ne().style,Hl=["-webkit-","-moz-","-o-","-ms-"],zl=["WebKit","Moz","O","MS","webkit","moz","o","ms"],_t={},Bt={},Il=e=>{let t=Bt[e];if($t(Bt,e))return t;let r=Jt(e),l=Pl();return D(Hl,n=>{let o=n.replace(/-/g,"");return!(t=[e,n+e,o+r,Jt(o)+r].find(i=>l[i]!==void 0))}),Bt[e]=t||""},it=e=>{if(nt()){let t=_t[e]||window[e];return $t(_t,e)||(D(zl,r=>(t=t||window[r+Jt(e)],!t)),_t[e]=t),t}},kl=it("MutationObserver"),mr=it("IntersectionObserver"),Ke=it("ResizeObserver"),Jr=it("cancelAnimationFrame"),Kr=it("requestAnimationFrame"),wt=nt()&&window.setTimeout,Kt=nt()&&window.clearTimeout,Ml=/[^\x20\t\r\n\f]+/g,Yr=(e,t,r)=>{let l=e&&e.classList,n,o=0,i=!1;if(l&&t&&Re(t)){let s=t.match(Ml)||[];for(i=s.length>0;n=s[o++];)i=!!r(l,n)&&i}return i},or=(e,t)=>{Yr(e,t,(r,l)=>r.remove(l))},Le=(e,t)=>(Yr(e,t,(r,l)=>r.add(l)),or.bind(0,e,t)),Et=(e,t,r,l)=>{if(e&&t){let n=!0;return D(r,o=>{let i=l?l(e[o]):e[o],s=l?l(t[o]):t[o];i!==s&&(n=!1)}),n}return!1},Zr=(e,t)=>Et(e,t,["w","h"]),Gr=(e,t)=>Et(e,t,["x","y"]),Tl=(e,t)=>Et(e,t,["t","r","b","l"]),yr=(e,t,r)=>Et(e,t,["width","height"],r&&(l=>Math.round(l))),fe=()=>{},We=e=>{let t,r=e?wt:Kr,l=e?Kt:Jr;return[n=>{l(t),t=r(n,we(e)?e():e)},()=>l(t)]},ar=(e,t)=>{let r,l,n,o=fe,{v:i,g:s,p:a}=t||{},c=function(u){o(),Kt(r),r=l=void 0,o=fe,e.apply(this,u)},d=u=>a&&l?a(l,u):u,p=()=>{o!==fe&&c(d(n)||n)},f=function(){let u=Ve(arguments),v=we(i)?i():i;if(Te(v)&&v>=0){let C=we(s)?s():s,P=Te(C)&&C>=0,E=v>0?wt:Kr,g=v>0?Kt:Jr,y=d(u)||u,L=c.bind(0,y);o();let H=E(L,v);o=()=>g(H),P&&!r&&(r=wt(p,C)),l=n=y}else c(u)};return f.m=p,f},Rl={opacity:1,zindex:1},at=(e,t)=>{let r=t?parseFloat(e):parseInt(e,10);return r===r?r:0},_l=(e,t)=>!Rl[e.toLowerCase()]&&Te(t)?`${t}px`:t,Sr=(e,t,r)=>t!=null?t[r]||t.getPropertyValue(r):e.style[r],Bl=(e,t,r)=>{try{let{style:l}=e;He(l[t])?l.setProperty(t,r):l[t]=_l(t,r)}catch{}},rt=e=>re(e,"direction")==="rtl",xr=(e,t,r)=>{let l=t?`${t}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,i=`${l}right${n}`,s=`${l}bottom${n}`,a=`${l}left${n}`,c=re(e,[o,i,s,a]);return{t:at(c[o],!0),r:at(c[i],!0),b:at(c[s],!0),l:at(c[a],!0)}},{round:Or}=Math,sr={w:0,h:0},lt=e=>e?{w:e.offsetWidth,h:e.offsetHeight}:sr,vt=e=>e?{w:e.clientWidth,h:e.clientHeight}:sr,mt=e=>e?{w:e.scrollWidth,h:e.scrollHeight}:sr,yt=e=>{let t=parseFloat(re(e,"height"))||0,r=parseFloat(re(e,"width"))||0;return{w:r-Or(r),h:t-Or(t)}},Se=e=>e.getBoundingClientRect(),st,Dl=()=>{if(He(st)){st=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){st=!0}}))}catch{}}return st},Qr=e=>e.split(" "),Nl=(e,t,r,l)=>{D(Qr(t),n=>{e.removeEventListener(n,r,l)})},Q=(e,t,r,l)=>{var n;let o=Dl(),i=(n=o&&l&&l.S)!=null?n:o,s=l&&l.$||!1,a=l&&l.C||!1,c=[],d=o?{passive:i,capture:s}:s;return D(Qr(t),p=>{let f=a?u=>{e.removeEventListener(p,f,s),r&&r(u)}:r;W(c,Nl.bind(null,e,p,f,s)),e.addEventListener(p,f,d)}),Oe.bind(0,c)},el=e=>e.stopPropagation(),tl=e=>e.preventDefault(),Vl={x:0,y:0},Dt=e=>{let t=e?Se(e):0;return t?{x:t.left+window.pageYOffset,y:t.top+window.pageXOffset}:Vl},Cr=(e,t)=>{D(me(t)?t:[t],e)},cr=e=>{let t=new Map,r=(o,i)=>{if(o){let s=t.get(o);Cr(a=>{s&&s[a?"delete":"clear"](a)},i)}else t.forEach(s=>{s.clear()}),t.clear()},l=(o,i)=>{if(Re(o)){let c=t.get(o)||new Set;return t.set(o,c),Cr(d=>{we(d)&&c.add(d)},i),r.bind(0,o,i)}er(i)&&i&&r();let s=ue(o),a=[];return D(s,c=>{let d=o[c];d&&W(a,l(c,d))}),Oe.bind(0,a)},n=(o,i)=>{let s=t.get(o);D(Ve(s),a=>{i&&!rr(i)?a.apply(0,i):a()})};return l(e||{}),[l,r,n]},$r=e=>JSON.stringify(e,(t,r)=>{if(we(r))throw new Error;return r}),Fl={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},rl=(e,t)=>{let r={},l=ue(t).concat(ue(e));return D(l,n=>{let o=e[n],i=t[n];if(tt(o)&&tt(i))K(r[n]={},rl(o,i)),lr(r[n])&&delete r[n];else if($t(t,n)&&i!==o){let s=!0;if(me(o)||me(i))try{$r(o)===$r(i)&&(s=!1)}catch{}s&&(r[n]=i)}}),r},ll="os-environment",nl=`${ll}-flexbox-glue`,jl=`${nl}-max`,il="os-scrollbar-hidden",Nt="data-overlayscrollbars-initialize",he="data-overlayscrollbars",ol=`${he}-overflow-x`,al=`${he}-overflow-y`,Ye="overflowVisible",ql="scrollbarHidden",Er="scrollbarPressed",St="updating",Ie="data-overlayscrollbars-viewport",Vt="arrange",sl="scrollbarHidden",Ze=Ye,Yt="data-overlayscrollbars-padding",Xl=Ze,Ar="data-overlayscrollbars-content",dr="os-size-observer",Wl=`${dr}-appear`,Ul=`${dr}-listener`,Jl="os-trinsic-observer",Kl="os-no-css-vars",Yl="os-theme-none",se="os-scrollbar",Zl=`${se}-rtl`,Gl=`${se}-horizontal`,Ql=`${se}-vertical`,cl=`${se}-track`,ur=`${se}-handle`,en=`${se}-visible`,tn=`${se}-cornerless`,Lr=`${se}-transitionless`,Pr=`${se}-interaction`,Hr=`${se}-unusable`,zr=`${se}-auto-hidden`,Ir=`${se}-wheel`,rn=`${cl}-interactive`,ln=`${ur}-interactive`,dl={},Fe=()=>dl,nn=e=>{let t=[];return D(me(e)?e:[e],r=>{let l=ue(r);D(l,n=>{W(t,dl[n]=r[n])})}),t},on="__osOptionsValidationPlugin",an="__osSizeObserverPlugin",pr="__osScrollbarsHidingPlugin",sn="__osClickScrollPlugin",Ft,kr=(e,t,r,l)=>{be(e,t);let n=vt(t),o=lt(t),i=yt(r);return l&&xe(t),{x:o.h-n.h+i.h,y:o.w-n.w+i.w}},cn=e=>{let t=!1,r=Le(e,il);try{t=re(e,Il("scrollbar-width"))==="none"||window.getComputedStyle(e,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return r(),t},dn=(e,t)=>{let r="hidden";re(e,{overflowX:r,overflowY:r,direction:"rtl"}),ge(e,0);let l=Dt(e),n=Dt(t);ge(e,-999);let o=Dt(t);return{i:l.x===n.x,n:n.x!==o.x}},un=(e,t)=>{let r=Le(e,nl),l=Se(e),n=Se(t),o=yr(n,l,!0),i=Le(e,jl),s=Se(e),a=Se(t),c=yr(a,s,!0);return r(),i(),o&&c},pn=()=>{let{body:e}=document,t=Ur(`<div class="${ll}"><div></div></div>`)[0],r=t.firstChild,[l,,n]=cr(),[o,i]=ve({o:kr(e,t,r),u:Gr},kr.bind(0,e,t,r,!0)),[s]=i(),a=cn(t),c={x:s.x===0,y:s.y===0},d={elements:{host:null,padding:!a,viewport:E=>a&&E===E.ownerDocument.body&&E,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=K({},Fl),f=K.bind(0,{},p),u=K.bind(0,{},d),v={k:s,A:c,I:a,L:re(t,"zIndex")==="-1",B:dn(t,r),V:un(t,r),Y:l.bind(0,"z"),j:l.bind(0,"r"),N:u,q:E=>K(d,E)&&u(),F:f,G:E=>K(p,E)&&f(),X:K({},d),U:K({},p)},C=window.addEventListener,P=ar(E=>n(E?"z":"r"),{v:33,g:99});if(ae(t,"style"),xe(t),C("resize",P.bind(0,!1)),!a&&(!c.x||!c.y)){let E;C("resize",()=>{let g=Fe()[pr];E=E||g&&g.R(),E&&E(v,o,P.bind(0,!0))})}return v},ce=()=>(Ft||(Ft=pn()),Ft),fr=(e,t)=>we(t)?t.apply(0,e):t,fn=(e,t,r,l)=>{let n=He(l)?r:l;return fr(e,n)||t.apply(0,e)},ul=(e,t,r,l)=>{let n=He(l)?r:l,o=fr(e,n);return!!o&&(ht(o)?o:t.apply(0,e))},bn=(e,t,r)=>{let{nativeScrollbarsOverlaid:l,body:n}=r||{},{A:o,I:i}=ce(),{nativeScrollbarsOverlaid:s,body:a}=t,c=l??s,d=He(n)?a:n,p=(o.x||o.y)&&c,f=e&&(xt(d)?!i:d);return!!p||!!f},br=new WeakMap,vn=(e,t)=>{br.set(e,t)},hn=e=>{br.delete(e)},pl=e=>br.get(e),Mr=(e,t)=>e?t.split(".").reduce((r,l)=>r&&$t(r,l)?r[l]:void 0,e):void 0,Zt=(e,t,r)=>l=>[Mr(e,l),r||Mr(t,l)!==void 0],fl=e=>{let t=e;return[()=>t,r=>{t=K({},t,r)}]},ct="tabindex",dt=Ne.bind(0,""),jt=e=>{be(Pe(e),nr(e)),xe(e)},gn=e=>{let t=ce(),{N:r,I:l}=t,n=Fe()[pr],o=n&&n.T,{elements:i}=r(),{host:s,padding:a,viewport:c,content:d}=i,p=ht(e),f=p?{}:e,{elements:u}=f,{host:v,padding:C,viewport:P,content:E}=u||{},g=p?e:f.target,y=gt(g,"textarea"),L=g.ownerDocument,H=L.documentElement,_=g===L.body,k=L.defaultView,z=fn.bind(0,[g]),F=ul.bind(0,[g]),Z=fr.bind(0,[g]),j=z.bind(0,dt,c),I=F.bind(0,dt,d),m=j(P),b=m===g,x=b&&_,h=!b&&I(E),w=!b&&ht(m)&&m===h,$=w&&!!Z(d),S=$?j():m,O=$?h:I(),A=x?H:w?S:m,N=y?z(dt,s,v):g,M=x?A:N,R=w?O:h,q=L.activeElement,X=!b&&k.top===k&&q===g,T={W:g,Z:M,J:A,K:!b&&F(dt,a,C),tt:R,nt:!b&&!l&&o&&o(t),ot:x?H:A,st:x?L:A,et:k,ct:L,rt:y,it:_,lt:p,ut:b,dt:w,ft:(ee,de)=>$l(A,b?he:Ie,b?de:ee),_t:(ee,de,ie)=>De(A,b?he:Ie,b?de:ee,ie)},V=ue(T).reduce((ee,de)=>{let ie=T[de];return W(ee,ie&&!Pe(ie)?ie:!1)},[]),U=ee=>ee?tr(V,ee)>-1:null,{W:J,Z:Y,K:le,J:B,tt:G,nt:ne}=T,oe=[()=>{ae(Y,he),ae(Y,Nt),ae(J,Nt),_&&(ae(H,he),ae(H,Nt))}],_e=y&&U(Y),ze=y?J:nr([G,B,le,Y,J].find(ee=>U(ee)===!1)),je=x?J:G||B;return[T,()=>{te(Y,he,b?"viewport":"host"),te(le,Yt,""),te(G,Ar,""),b||te(B,Ie,"");let ee=_&&!b?Le(Pe(g),il):fe;if(_e&&(wr(J,Y),W(oe,()=>{wr(Y,J),xe(Y)})),be(je,ze),be(Y,le),be(le||Y,!b&&B),be(B,G),W(oe,()=>{ee(),ae(le,Yt),ae(G,Ar),ae(B,ol),ae(B,al),ae(B,Ie),U(G)&&jt(G),U(B)&&jt(B),U(le)&&jt(le)}),l&&!b&&(De(B,Ie,sl,!0),W(oe,ae.bind(0,B,Ie))),ne&&(Ll(B,ne),W(oe,xe.bind(0,ne))),X){let de=te(B,ct);te(B,ct,"-1"),B.focus();let ie=()=>de?te(B,ct,de):ae(B,ct),Be=Q(L,"pointerdown keydown",()=>{ie(),Be()});W(oe,[ie,Be])}else q&&q.focus&&q.focus();ze=0},Oe.bind(0,oe)]},wn=(e,t)=>{let{tt:r}=e,[l]=t;return n=>{let{V:o}=ce(),{ht:i}=l(),{vt:s}=n,a=(r||!o)&&s;return a&&re(r,{height:i?"":"100%"}),{gt:a,wt:a}}},mn=(e,t)=>{let[r,l]=t,{Z:n,K:o,J:i,ut:s}=e,[a,c]=ve({u:Tl,o:xr()},xr.bind(0,n,"padding",""));return(d,p,f)=>{let[u,v]=c(f),{I:C,V:P}=ce(),{bt:E}=r(),{gt:g,wt:y,yt:L}=d,[H,_]=p("paddingAbsolute");(g||v||!P&&y)&&([u,v]=a(f));let k=!s&&(_||L||v);if(k){let z=!H||!o&&!C,F=u.r+u.l,Z=u.t+u.b,j={marginRight:z&&!E?-F:0,marginBottom:z?-Z:0,marginLeft:z&&E?-F:0,top:z?-u.t:0,right:z?E?-u.r:"auto":0,left:z?E?"auto":-u.l:0,width:z?`calc(100% + ${F}px)`:""},I={paddingTop:z?u.t:0,paddingRight:z?u.r:0,paddingBottom:z?u.b:0,paddingLeft:z?u.l:0};re(o||i,j),re(i,I),l({K:u,St:!z,P:o?I:K({},j,I)})}return{xt:k}}},{max:Gt}=Math,ke=Gt.bind(0,0),bl="visible",Tr="hidden",yn=42,ut={u:Zr,o:{w:0,h:0}},Sn={u:Gr,o:{x:Tr,y:Tr}},xn=(e,t)=>{let r=window.devicePixelRatio%1!==0?1:0,l={w:ke(e.w-t.w),h:ke(e.h-t.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},pt=e=>e.indexOf(bl)===0,On=(e,t)=>{let[r,l]=t,{Z:n,K:o,J:i,nt:s,ut:a,_t:c,it:d,et:p}=e,{k:f,V:u,I:v,A:C}=ce(),P=Fe()[pr],E=!a&&!v&&(C.x||C.y),g=d&&a,[y,L]=ve(ut,yt.bind(0,i)),[H,_]=ve(ut,mt.bind(0,i)),[k,z]=ve(ut),[F,Z]=ve(ut),[j]=ve(Sn),I=($,S)=>{if(re(i,{height:""}),S){let{St:O,K:A}=r(),{$t:N,D:M}=$,R=yt(n),q=vt(n),X=re(i,"boxSizing")==="content-box",T=O||X?A.b+A.t:0,V=!(C.x&&X);re(i,{height:q.h+R.h+(N.x&&V?M.x:0)-T})}},m=($,S)=>{let O=!v&&!$?yn:0,A=(J,Y,le)=>{let B=re(i,J),G=(S?S[J]:B)==="scroll";return[B,G,G&&!v?Y?O:le:0,Y&&!!O]},[N,M,R,q]=A("overflowX",C.x,f.x),[X,T,V,U]=A("overflowY",C.y,f.y);return{Ct:{x:N,y:X},$t:{x:M,y:T},D:{x:R,y:V},M:{x:q,y:U}}},b=($,S,O,A)=>{let N=(T,V)=>{let U=pt(T),J=V&&U&&T.replace(`${bl}-`,"")||"";return[V&&!U?T:"",pt(J)?"hidden":J]},[M,R]=N(O.x,S.x),[q,X]=N(O.y,S.y);return A.overflowX=R&&q?R:M,A.overflowY=X&&M?X:q,m($,A)},x=($,S,O,A)=>{let{D:N,M}=$,{x:R,y:q}=M,{x:X,y:T}=N,{P:V}=r(),U=S?"marginLeft":"marginRight",J=S?"paddingLeft":"paddingRight",Y=V[U],le=V.marginBottom,B=V[J],G=V.paddingBottom;A.width=`calc(100% + ${T+-1*Y}px)`,A[U]=-T+Y,A.marginBottom=-X+le,O&&(A[J]=B+(q?T:0),A.paddingBottom=G+(R?X:0))},[h,w]=P?P.H(E,u,i,s,r,m,x):[()=>E,()=>[fe]];return($,S,O)=>{let{gt:A,Ot:N,wt:M,xt:R,vt:q,yt:X}=$,{ht:T,bt:V}=r(),[U,J]=S("showNativeOverlaidScrollbars"),[Y,le]=S("overflow"),B=U&&C.x&&C.y,G=!a&&!u&&(A||M||N||J||q),ne=pt(Y.x),oe=pt(Y.y),_e=ne||oe,ze=L(O),je=_(O),ee=z(O),de=Z(O),ie;if(J&&v&&c(sl,ql,!B),G&&(ie=m(B),I(ie,T)),A||R||M||X||J){_e&&c(Ze,Ye,!1);let[Ce,$e]=w(B,V,ie),[pe,Qe]=ze=y(O),[Ee,ml]=je=H(O),kt=vt(i),Mt=Ee,Tt=kt;Ce(),(ml||Qe||J)&&$e&&!B&&h($e,Ee,pe,V)&&(Tt=vt(i),Mt=mt(i));let yl={w:ke(Gt(Ee.w,Mt.w)+pe.w),h:ke(Gt(Ee.h,Mt.h)+pe.h)},vr={w:ke((g?p.innerWidth:Tt.w+ke(kt.w-Ee.w))+pe.w),h:ke((g?p.innerHeight+pe.h:Tt.h+ke(kt.h-Ee.h))+pe.h)};de=F(vr),ee=k(xn(yl,vr),O)}let[Be,Ge]=de,[qe,Xe]=ee,[At,Lt]=je,[Pt,Ht]=ze,ye={x:qe.w>0,y:qe.h>0},ot=ne&&oe&&(ye.x||ye.y)||ne&&ye.x&&!ye.y||oe&&ye.y&&!ye.x;if(R||X||Ht||Lt||Ge||Xe||le||J||G){let Ce={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},$e=b(B,ye,Y,Ce),pe=h($e,At,Pt,V);a||x($e,V,pe,Ce),G&&I($e,T),a?(te(n,ol,Ce.overflowX),te(n,al,Ce.overflowY)):re(i,Ce)}De(n,he,Ye,ot),De(o,Yt,Xl,ot),a||De(i,Ie,Ze,_e);let[zt,It]=j(m(B).Ct);return l({Ct:zt,zt:{x:Be.w,y:Be.h},Tt:{x:qe.w,y:qe.h},Et:ye}),{It,At:Ge,Lt:Xe}}},Rr=(e,t,r)=>{let l={},n=t||{},o=ue(e).concat(ue(n));return D(o,i=>{let s=e[i],a=n[i];l[i]=!!(r||s||a)}),l},Cn=(e,t)=>{let{W:r,J:l,_t:n,ut:o}=e,{I:i,A:s,V:a}=ce(),c=!i&&(s.x||s.y),d=[wn(e,t),mn(e,t),On(e,t)];return(p,f,u)=>{let v=Rr(K({gt:!1,xt:!1,yt:!1,vt:!1,At:!1,Lt:!1,It:!1,Ot:!1,wt:!1},f),{},u),C=c||!a,P=C&&ge(l),E=C&&Ae(l);n("",St,!0);let g=v;return D(d,y=>{g=Rr(g,y(g,p,!!u)||{},u)}),ge(l,P),Ae(l,E),n("",St),o||(ge(r,0),Ae(r,0)),g}},$n=(e,t,r)=>{let l,n=!1,o=()=>{n=!0},i=s=>{if(r){let a=r.reduce((c,d)=>{if(d){let[p,f]=d,u=f&&p&&(s?s(p):Wr(p,e));u&&u.length&&f&&Re(f)&&W(c,[u,f.trim()],!0)}return c},[]);D(a,c=>D(c[0],d=>{let p=c[1],f=l.get(d)||[];if(e.contains(d)){let u=Q(d,p,v=>{n?(u(),l.delete(d)):t(v)});l.set(d,W(f,u))}else Oe(f),l.delete(d)}))}};return r&&(l=new WeakMap,i()),[o,i]},_r=(e,t,r,l)=>{let n=!1,{Ht:o,Pt:i,Dt:s,Mt:a,Rt:c,kt:d}=l||{},p=ar(()=>{n&&r(!0)},{v:33,g:99}),[f,u]=$n(e,p,s),v=o||[],C=i||[],P=v.concat(C),E=(y,L)=>{let H=c||fe,_=d||fe,k=new Set,z=new Set,F=!1,Z=!1;if(D(y,j=>{let{attributeName:I,target:m,type:b,oldValue:x,addedNodes:h,removedNodes:w}=j,$=b==="attributes",S=b==="childList",O=e===m,A=$&&Re(I)?te(m,I):0,N=A!==0&&x!==A,M=tr(C,I)>-1&&N;if(t&&(S||!O)){let R=!$,q=$&&N,X=q&&a&&gt(m,a),T=(X?!H(m,I,x,A):R||q)&&!_(j,!!X,e,l);D(h,V=>k.add(V)),D(w,V=>k.add(V)),Z=Z||T}!t&&O&&N&&!H(m,I,x,A)&&(z.add(I),F=F||M)}),k.size>0&&u(j=>Ve(k).reduce((I,m)=>(W(I,Wr(j,m)),gt(m,j)?W(I,m):I),[])),t)return!L&&Z&&r(!1),[!1];if(z.size>0||F){let j=[Ve(z),F];return!L&&r.apply(0,j),j}},g=new kl(y=>E(y));return g.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:P,subtree:t,childList:t,characterData:t}),n=!0,[()=>{n&&(f(),g.disconnect(),n=!1)},()=>{if(n){p.m();let y=g.takeRecords();return!rr(y)&&E(y,!0)}}]},ft=3333333,bt=e=>e&&(e.height||e.width),vl=(e,t,r)=>{let{Bt:l=!1,Vt:n=!1}=r||{},o=Fe()[an],{B:i}=ce(),s=Ur(`<div class="${dr}"><div class="${Ul}"></div></div>`)[0],a=s.firstChild,c=rt.bind(0,e),[d]=ve({o:void 0,_:!0,u:(v,C)=>!(!v||!bt(v)&&bt(C))}),p=v=>{let C=me(v)&&v.length>0&&tt(v[0]),P=!C&&er(v[0]),E=!1,g=!1,y=!0;if(C){let[L,,H]=d(v.pop().contentRect),_=bt(L),k=bt(H);E=!H||!_,g=!k&&_,y=!E}else P?[,y]=v:g=v===!0;if(l&&y){let L=P?v[0]:rt(s);ge(s,L?i.n?-ft:i.i?0:ft:ft),Ae(s,ft)}E||t({gt:!P,Yt:P?v:void 0,Vt:!!g})},f=[],u=n?p:!1;return[()=>{Oe(f),xe(s)},()=>{if(Ke){let v=new Ke(p);v.observe(a),W(f,()=>{v.disconnect()})}else if(o){let[v,C]=o.O(a,p,n);u=v,W(f,C)}if(l){let[v]=ve({o:void 0},c);W(f,Q(s,"scroll",C=>{let P=v(),[E,g,y]=P;g&&(or(a,"ltr rtl"),E?Le(a,"rtl"):Le(a,"ltr"),p([!!E,g,y])),el(C)}))}u&&(Le(s,Wl),W(f,Q(s,"animationstart",u,{C:!!Ke}))),(Ke||o)&&be(e,s)}]},En=e=>e.h===0||e.isIntersecting||e.intersectionRatio>0,An=(e,t)=>{let r,l=Ne(Jl),n=[],[o]=ve({o:!1}),i=(a,c)=>{if(a){let d=o(En(a)),[,p]=d;if(p)return!c&&t(d),[d]}},s=(a,c)=>{if(a&&a.length>0)return i(a.pop(),c)};return[()=>{Oe(n),xe(l)},()=>{if(mr)r=new mr(a=>s(a),{root:e}),r.observe(l),W(n,()=>{r.disconnect()});else{let a=()=>{let p=lt(l);i(p)},[c,d]=vl(l,a);W(n,c),d(),a()}be(e,l)},()=>{if(r)return s(r.takeRecords(),!0)}]},Br=`[${he}]`,Ln=`[${Ie}]`,qt=["tabindex"],Dr=["wrap","cols","rows"],Xt=["id","class","style","open"],Pn=(e,t,r)=>{let l,n,o,{Z:i,J:s,tt:a,rt:c,ut:d,ft:p,_t:f}=e,{V:u}=ce(),[v]=ve({u:Zr,o:{w:0,h:0}},()=>{let b=p(Ze,Ye),x=p(Vt,""),h=x&&ge(s),w=x&&Ae(s);f(Ze,Ye),f(Vt,""),f("",St,!0);let $=mt(a),S=mt(s),O=yt(s);return f(Ze,Ye,b),f(Vt,"",x),f("",St),ge(s,h),Ae(s,w),{w:S.w+$.w+O.w,h:S.h+$.h+O.h}}),C=c?Dr:Xt.concat(Dr),P=ar(r,{v:()=>l,g:()=>n,p(b,x){let[h]=b,[w]=x;return[ue(h).concat(ue(w)).reduce(($,S)=>($[S]=h[S]||w[S],$),{})]}}),E=b=>{D(b||qt,x=>{if(tr(qt,x)>-1){let h=te(i,x);Re(h)?te(s,x,h):ae(s,x)}})},g=(b,x)=>{let[h,w]=b,$={vt:w};return t({ht:h}),!x&&r($),$},y=({gt:b,Yt:x,Vt:h})=>{let w=!b||h?r:P,$=!1;if(x){let[S,O]=x;$=O,t({bt:S})}w({gt:b,yt:$})},L=(b,x)=>{let[,h]=v(),w={wt:h};return h&&!x&&(b?r:P)(w),w},H=(b,x,h)=>{let w={Ot:x};return x?!h&&P(w):d||E(b),w},[_,k,z]=a||!u?An(i,g):[fe,fe,fe],[F,Z]=d?[fe,fe]:vl(i,y,{Vt:!0,Bt:!0}),[j,I]=_r(i,!1,H,{Pt:Xt,Ht:Xt.concat(qt)}),m=d&&Ke&&new Ke(y.bind(0,{gt:!0}));return m&&m.observe(i),E(),[()=>{_(),F(),o&&o[0](),m&&m.disconnect(),j()},()=>{Z(),k()},()=>{let b={},x=I(),h=z(),w=o&&o[1]();return x&&K(b,H.apply(0,W(x,!0))),h&&K(b,g.apply(0,W(h,!0))),w&&K(b,L.apply(0,W(w,!0))),b},b=>{let[x]=b("update.ignoreMutation"),[h,w]=b("update.attributes"),[$,S]=b("update.elementEvents"),[O,A]=b("update.debounce"),N=S||w,M=R=>we(x)&&x(R);if(N&&(o&&(o[1](),o[0]()),o=_r(a||s,!0,L,{Ht:C.concat(h||[]),Dt:$,Mt:Br,kt:(R,q)=>{let{target:X,attributeName:T}=R;return(!q&&T&&!d?Al(X,Br,Ln):!1)||!!Je(X,`.${se}`)||!!M(R)}})),A)if(P.m(),me(O)){let R=O[0],q=O[1];l=Te(R)&&R,n=Te(q)&&q}else Te(O)?(l=O,n=!1):(l=!1,n=!1)}]},Nr={x:0,y:0},Hn=e=>({K:{t:0,r:0,b:0,l:0},St:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:Nr,Tt:Nr,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:rt(e.Z)}),zn=(e,t)=>{let r=Zt(t,{}),[l,n,o]=cr(),[i,s,a]=gn(e),c=fl(Hn(i)),[d,p]=c,f=Cn(i,c),u=(y,L,H)=>{let _=ue(y).some(k=>y[k])||!lr(L)||H;return _&&o("u",[y,L,H]),_},[v,C,P,E]=Pn(i,p,y=>u(f(r,y),{},!1)),g=d.bind(0);return g.jt=y=>l("u",y),g.Nt=()=>{let{W:y,J:L}=i,H=ge(y),_=Ae(y);C(),s(),ge(L,H),Ae(L,_)},g.qt=i,[(y,L)=>{let H=Zt(t,y,L);return E(H),u(f(H,P(),L),y,!!L)},g,()=>{n(),v(),a()}]},{round:Vr}=Math,In=e=>{let{width:t,height:r}=Se(e),{w:l,h:n}=lt(e);return{x:Vr(t)/l||1,y:Vr(r)/n||1}},kn=(e,t,r)=>{let l=t.scrollbars,{button:n,isPrimary:o,pointerType:i}=e,{pointers:s}=l;return n===0&&o&&l[r?"dragScroll":"clickScroll"]&&(s||[]).includes(i)},Mn=(e,t)=>Q(e,"mousedown",Q.bind(0,t,"click",el,{C:!0,$:!0}),{$:!0}),Fr="pointerup pointerleave pointercancel lostpointercapture",Tn=(e,t,r,l,n,o,i)=>{let{B:s}=ce(),{Ft:a,Gt:c,Xt:d}=l,p=`scroll${i?"Left":"Top"}`,f=`client${i?"X":"Y"}`,u=i?"width":"height",v=i?"left":"top",C=i?"w":"h",P=i?"x":"y",E=(g,y)=>L=>{let{Tt:H}=o(),_=lt(c)[C]-lt(a)[C],k=y*L/_*H[P],z=rt(d)&&i?s.n||s.i?1:-1:1;n[p]=g+k*z};return Q(c,"pointerdown",g=>{let y=Je(g.target,`.${ur}`)===a,L=y?a:c;if(De(t,he,Er,!0),kn(g,e,y)){let H=!y&&g.shiftKey,_=()=>Se(a),k=()=>Se(c),z=(S,O)=>(S||_())[v]-(O||k())[v],F=E(n[p]||0,1/In(n)[P]),Z=g[f],j=_(),I=k(),m=j[u],b=z(j,I)+m/2,x=Z-I[v],h=y?0:x-b,w=S=>{Oe($),L.releasePointerCapture(S.pointerId)},$=[De.bind(0,t,he,Er),Q(r,Fr,w),Q(r,"selectstart",S=>tl(S),{S:!1}),Q(c,Fr,w),Q(c,"pointermove",S=>{let O=S[f]-Z;(y||H)&&F(h+O)})];if(H)F(h);else if(!y){let S=Fe()[sn];S&&W($,S.O(F,z,h,m,x))}L.setPointerCapture(g.pointerId)}})},Rn=(e,t)=>(r,l,n,o,i,s)=>{let{Xt:a}=r,[c,d]=We(333),p=!!i.scrollBy,f=!0;return Oe.bind(0,[Q(a,"pointerenter",()=>{l(Pr,!0)}),Q(a,"pointerleave pointercancel",()=>{l(Pr)}),Q(a,"wheel",u=>{let{deltaX:v,deltaY:C,deltaMode:P}=u;p&&f&&P===0&&Pe(a)===o&&i.scrollBy({left:v,top:C,behavior:"smooth"}),f=!1,l(Ir,!0),c(()=>{f=!0,l(Ir)}),tl(u)},{S:!1,$:!0}),Mn(a,n),Tn(e,o,n,r,i,t,s),d])},{min:Qt,max:jr,abs:_n,round:Bn}=Math,hl=(e,t,r,l)=>{if(l){let s=r?"x":"y",{Tt:a,zt:c}=l,d=c[s],p=a[s];return jr(0,Qt(1,d/(d+p)))}let n=r?"width":"height",o=Se(e)[n],i=Se(t)[n];return jr(0,Qt(1,o/i))},Dn=(e,t,r,l,n,o)=>{let{B:i}=ce(),s=o?"x":"y",a=o?"Left":"Top",{Tt:c}=l,d=Bn(c[s]),p=_n(r[`scroll${a}`]),f=o&&n,u=i.i?p:d-p,v=Qt(1,(f?u:p)/d),C=hl(e,t,o);return 1/C*(1-C)*v},Nn=(e,t,r)=>{let{N:l,L:n}=ce(),{scrollbars:o}=l(),{slot:i}=o,{ct:s,W:a,Z:c,J:d,lt:p,ot:f,it:u,ut:v}=t,{scrollbars:C}=p?{}:e,{slot:P}=C||{},E=ul([a,c,d],()=>v&&u?a:c,i,P),g=(h,w,$)=>{let S=$?Le:or;D(h,O=>{S(O.Xt,w)})},y=(h,w)=>{D(h,$=>{let[S,O]=w($);re(S,O)})},L=(h,w,$)=>{y(h,S=>{let{Ft:O,Gt:A}=S;return[O,{[$?"width":"height"]:`${(100*hl(O,A,$,w)).toFixed(3)}%`}]})},H=(h,w,$)=>{let S=$?"X":"Y";y(h,O=>{let{Ft:A,Gt:N,Xt:M}=O,R=Dn(A,N,f,w,rt(M),$);return[A,{transform:R===R?`translate${S}(${(100*R).toFixed(3)}%)`:""}]})},_=[],k=[],z=[],F=(h,w,$)=>{let S=er($),O=S?$:!0,A=S?!$:!0;O&&g(k,h,w),A&&g(z,h,w)},Z=h=>{L(k,h,!0),L(z,h)},j=h=>{H(k,h,!0),H(z,h)},I=h=>{let w=h?Gl:Ql,$=h?k:z,S=rr($)?Lr:"",O=Ne(`${se} ${w} ${S}`),A=Ne(cl),N=Ne(ur),M={Xt:O,Gt:A,Ft:N};return n||Le(O,Kl),be(O,A),be(A,N),W($,M),W(_,[xe.bind(0,O),r(M,F,s,c,f,h)]),M},m=I.bind(0,!0),b=I.bind(0,!1),x=()=>{be(E,k[0].Xt),be(E,z[0].Xt),wt(()=>{F(Lr)},300)};return m(),b(),[{Ut:Z,Wt:j,Zt:F,Jt:{Kt:k,Qt:m,tn:y.bind(0,k)},nn:{Kt:z,Qt:b,tn:y.bind(0,z)}},x,Oe.bind(0,_)]},Vn=(e,t,r,l)=>{let n,o,i,s,a,c=0,d=fl({}),[p]=d,[f,u]=We(),[v,C]=We(),[P,E]=We(100),[g,y]=We(100),[L,H]=We(()=>c),[_,k,z]=Nn(e,r.qt,Rn(t,r)),{Z:F,J:Z,ot:j,st:I,ut:m,it:b}=r.qt,{Jt:x,nn:h,Zt:w,Ut:$,Wt:S}=_,{tn:O}=x,{tn:A}=h,N=T=>{let{Xt:V}=T,U=m&&!b&&Pe(V)===Z&&V;return[U,{transform:U?`translate(${ge(j)}px, ${Ae(j)}px)`:""}]},M=(T,V)=>{if(H(),T)w(zr);else{let U=()=>w(zr,!0);c>0&&!V?L(U):U()}},R=()=>{s=o,s&&M(!0)},q=[E,H,y,C,u,z,Q(F,"pointerover",R,{C:!0}),Q(F,"pointerenter",R),Q(F,"pointerleave",()=>{s=!1,o&&M(!1)}),Q(F,"pointermove",()=>{n&&f(()=>{E(),M(!0),g(()=>{n&&M(!1)})})}),Q(I,"scroll",T=>{v(()=>{S(r()),i&&M(!0),P(()=>{i&&!s&&M(!1)})}),l(T),m&&O(N),m&&A(N)})],X=p.bind(0);return X.qt=_,X.Nt=k,[(T,V,U)=>{let{At:J,Lt:Y,It:le,yt:B}=U,{A:G}=ce(),ne=Zt(t,T,V),oe=r(),{Tt:_e,Ct:ze,bt:je}=oe,[ee,de]=ne("showNativeOverlaidScrollbars"),[ie,Be]=ne("scrollbars.theme"),[Ge,qe]=ne("scrollbars.visibility"),[Xe,At]=ne("scrollbars.autoHide"),[Lt]=ne("scrollbars.autoHideDelay"),[Pt,Ht]=ne("scrollbars.dragScroll"),[ye,ot]=ne("scrollbars.clickScroll"),zt=J||Y||B,It=le||qe,Ce=ee&&G.x&&G.y,$e=(pe,Qe)=>{let Ee=Ge==="visible"||Ge==="auto"&&pe==="scroll";return w(en,Ee,Qe),Ee};if(c=Lt,de&&w(Yl,Ce),Be&&(w(a),w(ie,!0),a=ie),At&&(n=Xe==="move",o=Xe==="leave",i=Xe!=="never",M(!i,!0)),Ht&&w(ln,Pt),ot&&w(rn,ye),It){let pe=$e(ze.x,!0),Qe=$e(ze.y,!1);w(tn,!(pe&&Qe))}zt&&($(oe),S(oe),w(Hr,!_e.x,!0),w(Hr,!_e.y,!1),w(Zl,je&&!b))},X,Oe.bind(0,q)]},gl=(e,t,r)=>{we(e)&&e(t||void 0,r||void 0)},Me=(e,t,r)=>{let{F:l,N:n,Y:o,j:i}=ce(),s=Fe(),a=ht(e),c=a?e:e.target,d=pl(c);if(t&&!d){let p=!1,f=m=>{let b=Fe()[on],x=b&&b.O;return x?x(m,!0):m},u=K({},l(),f(t)),[v,C,P]=cr(r),[E,g,y]=zn(e,u),[L,H,_]=Vn(e,u,g,m=>P("scroll",[I,m])),k=(m,b)=>E(m,!!b),z=k.bind(0,{},!0),F=o(z),Z=i(z),j=m=>{hn(c),F(),Z(),_(),y(),p=!0,P("destroyed",[I,!!m]),C()},I={options(m,b){if(m){let x=b?l():{},h=rl(u,K(x,f(m)));lr(h)||(K(u,h),k(h))}return K({},u)},on:v,off:(m,b)=>{m&&b&&C(m,b)},state(){let{zt:m,Tt:b,Ct:x,Et:h,K:w,St:$,bt:S}=g();return K({},{overflowEdge:m,overflowAmount:b,overflowStyle:x,hasOverflow:h,padding:w,paddingAbsolute:$,directionRTL:S,destroyed:p})},elements(){let{W:m,Z:b,K:x,J:h,tt:w,ot:$,st:S}=g.qt,{Jt:O,nn:A}=H.qt,N=R=>{let{Ft:q,Gt:X,Xt:T}=R;return{scrollbar:T,track:X,handle:q}},M=R=>{let{Kt:q,Qt:X}=R,T=N(q[0]);return K({},T,{clone:()=>{let V=N(X());return L({},!0,{}),V}})};return K({},{target:m,host:b,padding:x||h,viewport:h,content:w||h,scrollOffsetElement:$,scrollEventElement:S,scrollbarHorizontal:M(O),scrollbarVertical:M(A)})},update:m=>k({},m),destroy:j.bind(0)};return g.jt((m,b,x)=>{L(b,x,m)}),vn(c,I),D(ue(s),m=>gl(s[m],0,I)),bn(g.qt.it,n().cancel,!a&&e.cancel)?(j(!0),I):(g.Nt(),H.Nt(),P("initialized",[I]),g.jt((m,b,x)=>{let{gt:h,yt:w,vt:$,At:S,Lt:O,It:A,wt:N,Ot:M}=m;P("updated",[I,{updateHints:{sizeChanged:h,directionChanged:w,heightIntrinsicChanged:$,overflowEdgeChanged:S,overflowAmountChanged:O,overflowStyleChanged:A,contentMutation:N,hostMutation:M},changedOptions:b,force:x}])}),I.update(!0),I)}return d};Me.plugin=e=>{D(nn(e),t=>gl(t,Me))};Me.valid=e=>{let t=e&&e.elements,r=we(t)&&t();return Wt(r)&&!!pl(r.target)};Me.env=()=>{let{k:e,A:t,I:r,B:l,V:n,L:o,X:i,U:s,N:a,q:c,F:d,G:p}=ce();return K({},{scrollbarsSize:e,scrollbarsOverlaid:t,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:o,staticDefaultInitialization:i,staticDefaultOptions:s,getDefaultInitialization:a,setDefaultInitialization:c,getDefaultOptions:d,setDefaultOptions:p})};var Fn=()=>{if(typeof window>"u"){let c=()=>{};return[c,c]}let e,t,r=window,l=typeof r.requestIdleCallback=="function",n=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=l?r.requestIdleCallback:n,s=l?r.cancelIdleCallback:o,a=()=>{s(e),o(t)};return[(c,d)=>{a(),e=i(l?()=>{a(),t=n(c)}:c,typeof d=="object"?d:{timeout:2233})},a]},jn=e=>{let{options:t,events:r,defer:l}=e||{},[n,o]=gr(Fn,[]),i=Ue(null),s=Ue(l),a=Ue(t),c=Ue(r);return et(()=>{s.current=l},[l]),et(()=>{let{current:d}=i;a.current=t,Me.valid(d)&&d.options(t||{},!0)},[t]),et(()=>{let{current:d}=i;c.current=r,Me.valid(d)&&d.on(r||{},!0)},[r]),et(()=>()=>{var d;o(),(d=i.current)==null||d.destroy()},[]),gr(()=>[d=>{let p=i.current;if(Me.valid(p))return;let f=s.current,u=a.current||{},v=c.current||{},C=()=>i.current=Me(d,u,v);f?n(C,f):C()},()=>i.current],[])},qn=(e,t)=>{let{element:r="div",options:l,events:n,defer:o,children:i,...s}=e,a=r,c=Ue(null),d=Ue(null),[p,f]=jn({options:l,events:n,defer:o});return et(()=>{let{current:u}=c,{current:v}=d;return u&&v&&p({target:u,elements:{viewport:v,content:v}}),()=>{var C;return(C=f())==null?void 0:C.destroy()}},[p,r]),xl(t,()=>({osInstance:f,getElement:()=>c.current}),[]),hr.createElement(a,{"data-overlayscrollbars-initialize":"",ref:c,...s},hr.createElement("div",{ref:d},i))},wl=Sl(qn),Un=wl,Jn=wl;export{Un as OverlayScrollbars,Jn as default};
//# sourceMappingURL=OverlayScrollbars-OL4C4TVX-88f0b524.js.map
