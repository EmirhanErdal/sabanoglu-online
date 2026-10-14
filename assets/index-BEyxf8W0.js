import{r as l,j as s,ad as w,u as S,ac as $}from"./index-5wVb7amX.js";import"./ProductArt-ColAdoEg.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j=(...e)=>e.filter((t,a,o)=>!!t&&o.indexOf(t)===a).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=l.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:r="",children:i,iconNode:h,...u},m)=>l.createElement("svg",{ref:m,...T,width:t,height:t,stroke:e,strokeWidth:o?Number(a)*24/Number(t):a,className:j("lucide",r),...u},[...h.map(([n,c])=>l.createElement(n,c)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(e,t)=>{const a=l.forwardRef(({className:o,...r},i)=>l.createElement(A,{ref:i,iconNode:t,className:j(`lucide-${N(e)}`,o),...r}));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=x("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=x("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=x("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=x("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=x("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=x("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=x("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=x("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=x("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),b=new Intl.NumberFormat("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2}),I=new Intl.NumberFormat("tr-TR",{maximumFractionDigits:0}),X=e=>`${b.format(Math.round(e*100)/100)} ₺`,J=e=>`${I.format(Math.round(e))} ₺`,g=e=>{const[t,a]=b.format(Math.round(e*100)/100).split(",");return{int:t,dec:a??"00"}},B=e=>e<1?`${Math.round(e*1e3)} g`:`${e.toLocaleString("tr-TR",{maximumFractionDigits:2})} kg`,Y=(e,t)=>t?B(e):`${e} adet`,W=e=>new Date(e).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),M=e=>new Date(e).toLocaleDateString("tr-TR",{day:"numeric",month:"long"}),Q=e=>`${M(e)} ${W(e)}`,_=e=>new Date(e).toLocaleDateString("tr-TR",{day:"numeric",month:"short"});function O(e,t=Date.now()){const a=Math.max(0,Math.round((t-e)/1e3));if(a<45)return"şimdi";const o=Math.round(a/60);if(o<60)return`${o} dk önce`;const r=Math.round(o/60);return r<24?`${r} sa önce`:M(e)}function ee(e){const t=Math.max(0,Math.floor(e/1e3));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}const te=e=>e<1e3?`${Math.round(e/10)*10} m`:`${(e/1e3).toLocaleString("tr-TR",{maximumFractionDigits:1})} km`,se=e=>e.replace(/^(\+90\s?)?0?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/,"0$2 $3 •• $5"),ae=e=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>{var a;return(a=t[0])==null?void 0:a.toLocaleUpperCase("tr")}).join("");function ne(e){return e.toLocaleLowerCase("tr").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ı/g,"i")}const P=""+new URL("logo-lacivert-BhaAKFS5.png",import.meta.url).href,V=""+new URL("logo-beyaz-BJFYjaFG.png",import.meta.url).href;function oe({white:e,height:t=30,className:a}){return s.jsx("img",{src:e?V:P,alt:"Şabanoğlu Süpermarket",height:t,style:{height:t,width:"auto"},className:a,draggable:!1})}function re({size:e=40,radius:t}){return s.jsxs("svg",{width:e,height:e,viewBox:"0 0 64 64","aria-hidden":"true",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"am-bg",x1:"0",y1:"0",x2:"1",y2:"1",children:[s.jsx("stop",{offset:"0",stopColor:"#24346A"}),s.jsx("stop",{offset:"1",stopColor:"#0F1733"})]}),s.jsxs("linearGradient",{id:"am-leaf",x1:"0",y1:"0",x2:"1",y2:"1",children:[s.jsx("stop",{offset:"0",stopColor:"#4CC77E"}),s.jsx("stop",{offset:"1",stopColor:"#167A41"})]})]}),s.jsx("rect",{width:"64",height:"64",rx:t??15,fill:"url(#am-bg)"}),s.jsx("text",{x:"29",y:"44",textAnchor:"middle",fontFamily:"Manrope, sans-serif",fontWeight:"800",fontSize:"38",fill:"#fff",children:"Ş"}),s.jsx("path",{d:"M41 26 C40 16 47 10 56 9 C57 18 51 25 41 26Z",fill:"url(#am-leaf)"}),s.jsx("path",{d:"M42 25 C46 20 50 16 54 12",stroke:"#0E5A2E",strokeWidth:"1.2",fill:"none"})]})}function ie({value:e,old:t,size:a="md",unit:o}){const r=g(e),i={sm:14,md:15.5,lg:20,xl:30}[a];return s.jsxs("span",{className:"price",style:{display:"inline-flex",alignItems:"baseline",gap:6,flexWrap:"wrap"},children:[s.jsxs("span",{className:"num",style:{fontWeight:800,fontSize:i,letterSpacing:"-.02em",color:t?"var(--red)":"inherit"},children:[r.int,s.jsxs("span",{style:{fontSize:i*.68},children:[",",r.dec]}),s.jsx("span",{style:{fontSize:i*.78,marginLeft:2},children:"₺"}),o&&s.jsxs("span",{style:{fontSize:i*.66,color:"var(--muted)",fontWeight:700},children:["/",o]})]}),t?s.jsxs("s",{className:"num",style:{fontSize:i*.72,color:"var(--faint)",fontWeight:600},children:[g(t).int,",",g(t).dec," ₺"]}):null]})}function ce({qty:e,onInc:t,onDec:a,label:o,lg:r,max:i}){return s.jsxs("div",{className:`stepper ${r?"lg":""}`,onClick:h=>h.stopPropagation(),children:[s.jsx("button",{type:"button","aria-label":"Azalt",onClick:a,children:e<=(o?.001:1)?s.jsx(D,{size:r?19:15}):s.jsx(z,{size:r?20:16,strokeWidth:2.6})}),s.jsx("span",{className:"q pop",children:o??e},e),s.jsx("button",{type:"button","aria-label":"Artır",onClick:t,disabled:i,style:i?{opacity:.5}:void 0,children:s.jsx(R,{size:r?20:16,strokeWidth:2.6})})]})}let q=80;function le({open:e,onClose:t,title:a,children:o,footer:r,center:i,wide:h}){const[u,m]=l.useState(e),[n,c]=l.useState(!1),[d,f]=l.useState(80);return l.useEffect(()=>{if(e)m(!0),c(!1),f(q+=2);else if(u){c(!0);const y=window.setTimeout(()=>{m(!1),c(!1)},240);return()=>window.clearTimeout(y)}},[e]),l.useEffect(()=>{if(!e)return;const y=C=>{C.key==="Escape"&&t()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[e,t]),u?w.createPortal(s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`sheet-back ${n?"closing":""}`,onClick:t,style:{zIndex:d}}),s.jsxs("div",{className:`sheet ${i?"center":""} ${n?"closing":""}`,role:"dialog","aria-modal":"true",style:{zIndex:d+1,...h?{maxWidth:860,width:"min(860px, 96vw)"}:{}},children:[s.jsx("div",{className:"sheet-grab"}),a!==void 0&&s.jsxs("div",{className:"sheet-head",children:[s.jsx("h3",{children:a}),s.jsx("button",{className:"icon-btn",onClick:t,"aria-label":"Kapat",children:s.jsx(F,{size:20})})]}),s.jsx("div",{className:"sheet-body",children:o}),r&&s.jsx("div",{className:"sheet-foot",children:r})]})]}),document.body):null}function de({icon:e,title:t,text:a,action:o}){return s.jsxs("div",{className:"empty",children:[s.jsx("div",{className:"ico",children:e}),s.jsx("h4",{children:t}),a&&s.jsx("p",{style:{maxWidth:300},children:a}),o]})}function ue({on:e,onChange:t,label:a}){return s.jsx("button",{type:"button",role:"switch","aria-checked":e,"aria-label":a,className:`switch ${e?"on":""}`,onClick:()=>t(!e)})}let p=null;function G(e="new"){var t,a;try{const o=window.AudioContext||window.webkitAudioContext;if(!o)return;p=p??new o,p.state==="suspended"&&p.resume(),(e==="new"?[880,1318]:e==="ok"?[784,1046]:[520,440]).forEach((i,h)=>{const u=p.createOscillator(),m=p.createGain();u.type="sine",u.frequency.value=i;const n=p.currentTime+h*.13;m.gain.setValueAtTime(1e-4,n),m.gain.exponentialRampToValueAtTime(.12,n+.02),m.gain.exponentialRampToValueAtTime(1e-4,n+.35),u.connect(m),m.connect(p.destination),u.start(n),u.stop(n+.4)})}catch{}try{(t=navigator.userActivation)!=null&&t.hasBeenActive&&((a=navigator.vibrate)==null||a.call(navigator,e==="warn"?[60,40,60]:30))}catch{}}const he=(e=12)=>{var t,a;try{(t=navigator.userActivation)!=null&&t.hasBeenActive&&((a=navigator.vibrate)==null||a.call(navigator,e))}catch{}},K={info:E,ok:v,warn:k,bad:k};function me({role:e,who:t,onOpen:a,sound:o=!0}){const r=S(),[i,h]=l.useState([]),u=l.useRef(new Set),m=l.useRef(Date.now());return l.useEffect(()=>{const n=r.notifs.filter(c=>c.to===e&&!c.read&&(!c.who||!t||c.who===t)&&c.at>=m.current-1500&&!u.current.has(c.id));n.length&&(n.forEach(c=>u.current.add(c.id)),$(e,n.map(c=>c.id)),h(c=>[...n.slice(0,2).map(d=>({id:d.id,title:d.title,body:d.body,tone:d.tone??"info",orderId:d.orderId})),...c].slice(0,3)),o&&G(n[0].tone==="warn"||n[0].tone==="bad"?"warn":n[0].tone==="ok"?"ok":"new"),n.forEach(c=>{window.setTimeout(()=>h(d=>d.map(f=>f.id===c.id?{...f,out:!0}:f)),4600),window.setTimeout(()=>h(d=>d.filter(f=>f.id!==c.id)),4950)}))},[r.notifs,e,t,o]),i.length?w.createPortal(s.jsx("div",{className:"toasts","aria-live":"polite",children:i.map(n=>{const c=K[n.tone]??L;return s.jsxs("div",{className:`toast ${n.tone} ${n.out?"out":""}`,onClick:()=>{a==null||a(n.orderId),h(d=>d.filter(f=>f.id!==n.id))},children:[s.jsx("div",{className:"ti",children:s.jsx(c,{size:19})}),s.jsxs("div",{className:"grow",children:[s.jsx("b",{children:n.title}),s.jsx("span",{children:n.body})]})]},n.id)})}),document.body):null}function fe(){const[e,t]=l.useState(null),a=(r,i="ok")=>{t({msg:r,tone:i,k:Date.now()})};return l.useEffect(()=>{if(!e)return;const r=window.setTimeout(()=>t(null),2200);return()=>window.clearTimeout(r)},[e]),[e?w.createPortal(s.jsx("div",{className:"toasts",style:{top:"auto",bottom:"calc(var(--safe-b) + 96px)"},children:s.jsxs("div",{className:`toast ${e.tone}`,style:{width:"auto",padding:"10px 16px"},children:[s.jsx(v,{size:18}),s.jsx("b",{style:{fontSize:13.5},children:e.msg})]},e.k)}),document.body):null,a]}export{re as A,H as B,k as C,de as E,L as I,oe as L,z as M,ie as P,me as R,ue as S,D as T,F as X,le as a,ce as b,x as c,R as d,G as e,W as f,Q as g,he as h,ae as i,te as j,B as k,E as l,X as m,ee as n,M as o,J as p,v as q,se as r,O as s,ne as t,fe as u,Y as v,_ as w};
