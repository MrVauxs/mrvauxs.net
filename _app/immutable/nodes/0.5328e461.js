import{C as Ke,S as te,i as se,s as ae,D as z,k as D,a as N,l as T,m as H,c as O,h as c,n,b as I,E as R,g,v as K,d as p,f as Q,F as G,G as Z,H as j,I as Je,J,K as Y,L as Qe,M as We,q as W,r as X,N as x,O as $,P as ee,Q as _e,R as le,y as ie,z as oe,A as re,B as fe,T as Ue,U as Xe}from"../chunks/index.e8edb9a4.js";import{w as Ye}from"../chunks/index.5c251795.js";const ye=!0,jl=Object.freeze(Object.defineProperty({__proto__:null,prerender:ye},Symbol.toStringTag,{value:"Module"}));const he={};function Pe(i){return i==="local"?localStorage:sessionStorage}function ge(i,e,t){const s=(t==null?void 0:t.serializer)??JSON,o=(t==null?void 0:t.storage)??"local";function l(a,r){Pe(o).setItem(a,s.stringify(r))}if(!he[i]){const a=Ye(e,d=>{const S=Pe(o).getItem(i);S&&d(s.parse(S));{const w=V=>{V.key===i&&d(V.newValue?s.parse(V.newValue):null)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)}}),{subscribe:r,set:f}=a;he[i]={set(d){l(i,d),f(d)},update(d){const S=d(Ke(a));l(i,S),f(S)},subscribe:r}}return he[i]}ge("modeOsPrefers",!1);ge("modeUserPrefers",void 0);ge("modeCurrent",!1);const xe=i=>({}),Re=i=>({}),$e=i=>({}),He=i=>({}),el=i=>({}),ke=i=>({});function Ae(i){let e,t,s;const o=i[22].lead,l=z(o,i,i[21],ke);return{c(){e=D("div"),l&&l.c(),this.h()},l(a){e=T(a,"DIV",{class:!0});var r=H(e);l&&l.l(r),r.forEach(c),this.h()},h(){n(e,"class",t="app-bar-slot-lead "+i[4])},m(a,r){I(a,e,r),l&&l.m(e,null),s=!0},p(a,r){l&&l.p&&(!s||r&2097152)&&G(l,o,a,a[21],s?j(o,a[21],r,el):Z(a[21]),ke),(!s||r&16&&t!==(t="app-bar-slot-lead "+a[4]))&&n(e,"class",t)},i(a){s||(g(l,a),s=!0)},o(a){p(l,a),s=!1},d(a){a&&c(e),l&&l.d(a)}}}function Fe(i){let e,t,s;const o=i[22].trail,l=z(o,i,i[21],He);return{c(){e=D("div"),l&&l.c(),this.h()},l(a){e=T(a,"DIV",{class:!0});var r=H(e);l&&l.l(r),r.forEach(c),this.h()},h(){n(e,"class",t="app-bar-slot-trail "+i[2])},m(a,r){I(a,e,r),l&&l.m(e,null),s=!0},p(a,r){l&&l.p&&(!s||r&2097152)&&G(l,o,a,a[21],s?j(o,a[21],r,$e):Z(a[21]),He),(!s||r&4&&t!==(t="app-bar-slot-trail "+a[2]))&&n(e,"class",t)},i(a){s||(g(l,a),s=!0)},o(a){p(l,a),s=!1},d(a){a&&c(e),l&&l.d(a)}}}function Le(i){let e,t,s;const o=i[22].headline,l=z(o,i,i[21],Re);return{c(){e=D("div"),l&&l.c(),this.h()},l(a){e=T(a,"DIV",{class:!0});var r=H(e);l&&l.l(r),r.forEach(c),this.h()},h(){n(e,"class",t="app-bar-row-headline "+i[5])},m(a,r){I(a,e,r),l&&l.m(e,null),s=!0},p(a,r){l&&l.p&&(!s||r&2097152)&&G(l,o,a,a[21],s?j(o,a[21],r,xe):Z(a[21]),Re),(!s||r&32&&t!==(t="app-bar-row-headline "+a[5]))&&n(e,"class",t)},i(a){s||(g(l,a),s=!0)},o(a){p(l,a),s=!1},d(a){a&&c(e),l&&l.d(a)}}}function ll(i){let e,t,s,o,l,a,r,f,d,S,w=i[8].lead&&Ae(i);const V=i[22].default,k=z(V,i,i[21],null);let P=i[8].trail&&Fe(i),b=i[8].headline&&Le(i);return{c(){e=D("div"),t=D("div"),w&&w.c(),s=N(),o=D("div"),k&&k.c(),a=N(),P&&P.c(),f=N(),b&&b.c(),this.h()},l(u){e=T(u,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var h=H(e);t=T(h,"DIV",{class:!0});var C=H(t);w&&w.l(C),s=O(C),o=T(C,"DIV",{class:!0});var B=H(o);k&&k.l(B),B.forEach(c),a=O(C),P&&P.l(C),C.forEach(c),f=O(h),b&&b.l(h),h.forEach(c),this.h()},h(){n(o,"class",l="app-bar-slot-default "+i[3]),n(t,"class",r="app-bar-row-main "+i[6]),n(e,"class",d="app-bar "+i[7]),n(e,"data-testid","app-bar"),n(e,"role","toolbar"),n(e,"aria-label",i[0]),n(e,"aria-labelledby",i[1])},m(u,h){I(u,e,h),R(e,t),w&&w.m(t,null),R(t,s),R(t,o),k&&k.m(o,null),R(t,a),P&&P.m(t,null),R(e,f),b&&b.m(e,null),S=!0},p(u,[h]){u[8].lead?w?(w.p(u,h),h&256&&g(w,1)):(w=Ae(u),w.c(),g(w,1),w.m(t,s)):w&&(K(),p(w,1,1,()=>{w=null}),Q()),k&&k.p&&(!S||h&2097152)&&G(k,V,u,u[21],S?j(V,u[21],h,null):Z(u[21]),null),(!S||h&8&&l!==(l="app-bar-slot-default "+u[3]))&&n(o,"class",l),u[8].trail?P?(P.p(u,h),h&256&&g(P,1)):(P=Fe(u),P.c(),g(P,1),P.m(t,null)):P&&(K(),p(P,1,1,()=>{P=null}),Q()),(!S||h&64&&r!==(r="app-bar-row-main "+u[6]))&&n(t,"class",r),u[8].headline?b?(b.p(u,h),h&256&&g(b,1)):(b=Le(u),b.c(),g(b,1),b.m(e,null)):b&&(K(),p(b,1,1,()=>{b=null}),Q()),(!S||h&128&&d!==(d="app-bar "+u[7]))&&n(e,"class",d),(!S||h&1)&&n(e,"aria-label",u[0]),(!S||h&2)&&n(e,"aria-labelledby",u[1])},i(u){S||(g(w),g(k,u),g(P),g(b),S=!0)},o(u){p(w),p(k,u),p(P),p(b),S=!1},d(u){u&&c(e),w&&w.d(),k&&k.d(u),P&&P.d(),b&&b.d()}}}const tl="flex flex-col",sl="grid items-center",al="",il="flex-none flex justify-between items-center",ol="flex-auto",rl="flex-none flex items-center space-x-4";function fl(i,e,t){let s,o,l,a,r,f,{$$slots:d={},$$scope:S}=e;const w=Je(d);let{background:V="bg-surface-100-800-token"}=e,{border:k=""}=e,{padding:P="p-4"}=e,{shadow:b=""}=e,{spacing:u="space-y-4"}=e,{gridColumns:h="grid-cols-[auto_1fr_auto]"}=e,{gap:C="gap-4"}=e,{regionRowMain:B=""}=e,{regionRowHeadline:M=""}=e,{slotLead:A=""}=e,{slotDefault:E=""}=e,{slotTrail:_=""}=e,{label:m=""}=e,{labelledby:F=""}=e;return i.$$set=v=>{t(23,e=J(J({},e),Y(v))),"background"in v&&t(9,V=v.background),"border"in v&&t(10,k=v.border),"padding"in v&&t(11,P=v.padding),"shadow"in v&&t(12,b=v.shadow),"spacing"in v&&t(13,u=v.spacing),"gridColumns"in v&&t(14,h=v.gridColumns),"gap"in v&&t(15,C=v.gap),"regionRowMain"in v&&t(16,B=v.regionRowMain),"regionRowHeadline"in v&&t(17,M=v.regionRowHeadline),"slotLead"in v&&t(18,A=v.slotLead),"slotDefault"in v&&t(19,E=v.slotDefault),"slotTrail"in v&&t(20,_=v.slotTrail),"label"in v&&t(0,m=v.label),"labelledby"in v&&t(1,F=v.labelledby),"$$scope"in v&&t(21,S=v.$$scope)},i.$$.update=()=>{t(7,s=`${tl} ${V} ${k} ${u} ${P} ${b} ${e.class??""}`),i.$$.dirty&114688&&t(6,o=`${sl} ${h} ${C} ${B}`),i.$$.dirty&131072&&t(5,l=`${al} ${M}`),i.$$.dirty&262144&&t(4,a=`${il} ${A}`),i.$$.dirty&524288&&t(3,r=`${ol} ${E}`),i.$$.dirty&1048576&&t(2,f=`${rl} ${_}`)},e=Y(e),[m,F,f,r,a,l,o,s,w,V,k,P,b,u,h,C,B,M,A,E,_,S,d]}class nl extends te{constructor(e){super(),se(this,e,fl,ll,ae,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const ul=i=>({}),De=i=>({}),cl=i=>({}),Te=i=>({}),dl=i=>({}),Ve=i=>({}),hl=i=>({}),Me=i=>({}),_l=i=>({}),Ie=i=>({}),gl=i=>({}),Be=i=>({});function Ne(i){let e,t,s;const o=i[18].header,l=z(o,i,i[17],Be);return{c(){e=D("header"),l&&l.c(),this.h()},l(a){e=T(a,"HEADER",{id:!0,class:!0});var r=H(e);l&&l.l(r),r.forEach(c),this.h()},h(){n(e,"id","shell-header"),n(e,"class",t="flex-none "+i[7])},m(a,r){I(a,e,r),l&&l.m(e,null),s=!0},p(a,r){l&&l.p&&(!s||r&131072)&&G(l,o,a,a[17],s?j(o,a[17],r,gl):Z(a[17]),Be),(!s||r&128&&t!==(t="flex-none "+a[7]))&&n(e,"class",t)},i(a){s||(g(l,a),s=!0)},o(a){p(l,a),s=!1},d(a){a&&c(e),l&&l.d(a)}}}function Oe(i){let e,t;const s=i[18].sidebarLeft,o=z(s,i,i[17],Ie);return{c(){e=D("aside"),o&&o.c(),this.h()},l(l){e=T(l,"ASIDE",{id:!0,class:!0});var a=H(e);o&&o.l(a),a.forEach(c),this.h()},h(){n(e,"id","sidebar-left"),n(e,"class",i[6])},m(l,a){I(l,e,a),o&&o.m(e,null),t=!0},p(l,a){o&&o.p&&(!t||a&131072)&&G(o,s,l,l[17],t?j(s,l[17],a,_l):Z(l[17]),Ie),(!t||a&64)&&n(e,"class",l[6])},i(l){t||(g(o,l),t=!0)},o(l){p(o,l),t=!1},d(l){l&&c(e),o&&o.d(l)}}}function ze(i){let e,t,s;const o=i[18].pageHeader,l=z(o,i,i[17],Me),a=l||ml();return{c(){e=D("header"),a&&a.c(),this.h()},l(r){e=T(r,"HEADER",{id:!0,class:!0});var f=H(e);a&&a.l(f),f.forEach(c),this.h()},h(){n(e,"id","page-header"),n(e,"class",t="flex-none "+i[4])},m(r,f){I(r,e,f),a&&a.m(e,null),s=!0},p(r,f){l&&l.p&&(!s||f&131072)&&G(l,o,r,r[17],s?j(o,r[17],f,hl):Z(r[17]),Me),(!s||f&16&&t!==(t="flex-none "+r[4]))&&n(e,"class",t)},i(r){s||(g(a,r),s=!0)},o(r){p(a,r),s=!1},d(r){r&&c(e),a&&a.d(r)}}}function ml(i){let e;return{c(){e=W("(slot:header)")},l(t){e=X(t,"(slot:header)")},m(t,s){I(t,e,s)},d(t){t&&c(e)}}}function Ge(i){let e,t,s;const o=i[18].pageFooter,l=z(o,i,i[17],Ve),a=l||bl();return{c(){e=D("footer"),a&&a.c(),this.h()},l(r){e=T(r,"FOOTER",{id:!0,class:!0});var f=H(e);a&&a.l(f),f.forEach(c),this.h()},h(){n(e,"id","page-footer"),n(e,"class",t="flex-none "+i[2])},m(r,f){I(r,e,f),a&&a.m(e,null),s=!0},p(r,f){l&&l.p&&(!s||f&131072)&&G(l,o,r,r[17],s?j(o,r[17],f,dl):Z(r[17]),Ve),(!s||f&4&&t!==(t="flex-none "+r[2]))&&n(e,"class",t)},i(r){s||(g(a,r),s=!0)},o(r){p(a,r),s=!1},d(r){r&&c(e),a&&a.d(r)}}}function bl(i){let e;return{c(){e=W("(slot:footer)")},l(t){e=X(t,"(slot:footer)")},m(t,s){I(t,e,s)},d(t){t&&c(e)}}}function Ze(i){let e,t;const s=i[18].sidebarRight,o=z(s,i,i[17],Te);return{c(){e=D("aside"),o&&o.c(),this.h()},l(l){e=T(l,"ASIDE",{id:!0,class:!0});var a=H(e);o&&o.l(a),a.forEach(c),this.h()},h(){n(e,"id","sidebar-right"),n(e,"class",i[5])},m(l,a){I(l,e,a),o&&o.m(e,null),t=!0},p(l,a){o&&o.p&&(!t||a&131072)&&G(o,s,l,l[17],t?j(s,l[17],a,cl):Z(l[17]),Te),(!t||a&32)&&n(e,"class",l[5])},i(l){t||(g(o,l),t=!0)},o(l){p(o,l),t=!1},d(l){l&&c(e),o&&o.d(l)}}}function je(i){let e,t,s;const o=i[18].footer,l=z(o,i,i[17],De);return{c(){e=D("footer"),l&&l.c(),this.h()},l(a){e=T(a,"FOOTER",{id:!0,class:!0});var r=H(e);l&&l.l(r),r.forEach(c),this.h()},h(){n(e,"id","shell-footer"),n(e,"class",t="flex-none "+i[1])},m(a,r){I(a,e,r),l&&l.m(e,null),s=!0},p(a,r){l&&l.p&&(!s||r&131072)&&G(l,o,a,a[17],s?j(o,a[17],r,ul):Z(a[17]),De),(!s||r&2&&t!==(t="flex-none "+a[1]))&&n(e,"class",t)},i(a){s||(g(l,a),s=!0)},o(a){p(l,a),s=!1},d(a){a&&c(e),l&&l.d(a)}}}function vl(i){let e,t,s,o,l,a,r,f,d,S,w,V,k,P,b,u=i[9].header&&Ne(i),h=i[9].sidebarLeft&&Oe(i),C=i[9].pageHeader&&ze(i);const B=i[18].default,M=z(B,i,i[17],null);let A=i[9].pageFooter&&Ge(i),E=i[9].sidebarRight&&Ze(i),_=i[9].footer&&je(i);return{c(){e=D("div"),u&&u.c(),t=N(),s=D("div"),h&&h.c(),o=N(),l=D("div"),C&&C.c(),a=N(),r=D("main"),M&&M.c(),d=N(),A&&A.c(),w=N(),E&&E.c(),V=N(),_&&_.c(),this.h()},l(m){e=T(m,"DIV",{id:!0,class:!0,"data-testid":!0});var F=H(e);u&&u.l(F),t=O(F),s=T(F,"DIV",{class:!0});var v=H(s);h&&h.l(v),o=O(v),l=T(v,"DIV",{id:!0,class:!0});var q=H(l);C&&C.l(q),a=O(q),r=T(q,"MAIN",{id:!0,class:!0});var y=H(r);M&&M.l(y),y.forEach(c),d=O(q),A&&A.l(q),q.forEach(c),w=O(v),E&&E.l(v),v.forEach(c),V=O(F),_&&_.l(F),F.forEach(c),this.h()},h(){n(r,"id","page-content"),n(r,"class",f="flex-auto "+i[3]),n(l,"id","page"),n(l,"class",S=i[0]+" "+qe),n(s,"class","flex-auto "+pl),n(e,"id","appShell"),n(e,"class",i[8]),n(e,"data-testid","app-shell")},m(m,F){I(m,e,F),u&&u.m(e,null),R(e,t),R(e,s),h&&h.m(s,null),R(s,o),R(s,l),C&&C.m(l,null),R(l,a),R(l,r),M&&M.m(r,null),R(l,d),A&&A.m(l,null),R(s,w),E&&E.m(s,null),R(e,V),_&&_.m(e,null),k=!0,P||(b=Qe(l,"scroll",i[19]),P=!0)},p(m,[F]){m[9].header?u?(u.p(m,F),F&512&&g(u,1)):(u=Ne(m),u.c(),g(u,1),u.m(e,t)):u&&(K(),p(u,1,1,()=>{u=null}),Q()),m[9].sidebarLeft?h?(h.p(m,F),F&512&&g(h,1)):(h=Oe(m),h.c(),g(h,1),h.m(s,o)):h&&(K(),p(h,1,1,()=>{h=null}),Q()),m[9].pageHeader?C?(C.p(m,F),F&512&&g(C,1)):(C=ze(m),C.c(),g(C,1),C.m(l,a)):C&&(K(),p(C,1,1,()=>{C=null}),Q()),M&&M.p&&(!k||F&131072)&&G(M,B,m,m[17],k?j(B,m[17],F,null):Z(m[17]),null),(!k||F&8&&f!==(f="flex-auto "+m[3]))&&n(r,"class",f),m[9].pageFooter?A?(A.p(m,F),F&512&&g(A,1)):(A=Ge(m),A.c(),g(A,1),A.m(l,null)):A&&(K(),p(A,1,1,()=>{A=null}),Q()),(!k||F&1&&S!==(S=m[0]+" "+qe))&&n(l,"class",S),m[9].sidebarRight?E?(E.p(m,F),F&512&&g(E,1)):(E=Ze(m),E.c(),g(E,1),E.m(s,null)):E&&(K(),p(E,1,1,()=>{E=null}),Q()),m[9].footer?_?(_.p(m,F),F&512&&g(_,1)):(_=je(m),_.c(),g(_,1),_.m(e,null)):_&&(K(),p(_,1,1,()=>{_=null}),Q()),(!k||F&256)&&n(e,"class",m[8])},i(m){k||(g(u),g(h),g(C),g(M,m),g(A),g(E),g(_),k=!0)},o(m){p(u),p(h),p(C),p(M,m),p(A),p(E),p(_),k=!1},d(m){m&&c(e),u&&u.d(),h&&h.d(),C&&C.d(),M&&M.d(m),A&&A.d(),E&&E.d(),_&&_.d(),P=!1,b()}}}const Cl="w-full h-full flex flex-col overflow-hidden",pl="w-full h-full flex overflow-hidden",qe="flex-1 overflow-x-hidden flex flex-col",El="flex-none overflow-x-hidden overflow-y-auto",Sl="flex-none overflow-x-hidden overflow-y-auto";function wl(i,e,t){let s,o,l,a,r,f,d,S,{$$slots:w={},$$scope:V}=e;const k=Je(w);let{regionPage:P=""}=e,{slotHeader:b="z-10"}=e,{slotSidebarLeft:u="w-auto"}=e,{slotSidebarRight:h="w-auto"}=e,{slotPageHeader:C=""}=e,{slotPageContent:B=""}=e,{slotPageFooter:M=""}=e,{slotFooter:A=""}=e;function E(_){We.call(this,i,_)}return i.$$set=_=>{t(20,e=J(J({},e),Y(_))),"regionPage"in _&&t(0,P=_.regionPage),"slotHeader"in _&&t(10,b=_.slotHeader),"slotSidebarLeft"in _&&t(11,u=_.slotSidebarLeft),"slotSidebarRight"in _&&t(12,h=_.slotSidebarRight),"slotPageHeader"in _&&t(13,C=_.slotPageHeader),"slotPageContent"in _&&t(14,B=_.slotPageContent),"slotPageFooter"in _&&t(15,M=_.slotPageFooter),"slotFooter"in _&&t(16,A=_.slotFooter),"$$scope"in _&&t(17,V=_.$$scope)},i.$$.update=()=>{t(8,s=`${Cl} ${e.class??""}`),i.$$.dirty&1024&&t(7,o=`${b}`),i.$$.dirty&2048&&t(6,l=`${El} ${u}`),i.$$.dirty&4096&&t(5,a=`${Sl} ${h}`),i.$$.dirty&8192&&t(4,r=`${C}`),i.$$.dirty&16384&&t(3,f=`${B}`),i.$$.dirty&32768&&t(2,d=`${M}`),i.$$.dirty&65536&&t(1,S=`${A}`)},e=Y(e),[P,S,d,f,r,a,l,o,s,k,b,u,h,C,B,M,A,V,w,E]}class Pl extends te{constructor(e){super(),se(this,e,wl,vl,ae,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function Rl(i){let e,t,s;const o=i[2].default,l=z(o,i,i[1],null);let a=[{width:"18"},{height:"18"},{viewBox:"0 0 18 18"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},i[0]],r={};for(let f=0;f<a.length;f+=1)r=J(r,a[f]);return{c(){e=x("svg"),l&&l.c(),t=x("path"),this.h()},l(f){e=$(f,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var d=H(e);l&&l.l(d),t=$(d,"path",{d:!0,fill:!0}),H(t).forEach(c),d.forEach(c),this.h()},h(){n(t,"d","M15.2378 3.13731C14.0905 2.6109 12.8602 2.22306 11.5739 2.00093C11.5505 1.99664 11.5271 2.00736 11.515 2.02879C11.3568 2.3102 11.1815 2.67732 11.0588 2.96588C9.6753 2.75875 8.29889 2.75875 6.94374 2.96588C6.82099 2.67091 6.63936 2.3102 6.48043 2.02879C6.46836 2.00807 6.44496 1.99736 6.42154 2.00093C5.13593 2.22235 3.90567 2.61019 2.7577 3.13731C2.74776 3.14159 2.73925 3.14874 2.73359 3.15802C0.400044 6.64429 -0.239213 10.0449 0.0743851 13.4033C0.075804 13.4197 0.0850274 13.4354 0.0977985 13.4454C1.63741 14.5761 3.12878 15.2625 4.59246 15.7175C4.61588 15.7246 4.6407 15.716 4.65561 15.6967C5.00184 15.2239 5.31048 14.7254 5.57511 14.2011C5.59072 14.1704 5.57582 14.134 5.5439 14.1218C5.05435 13.9361 4.5882 13.7097 4.1398 13.4526C4.10433 13.4319 4.10149 13.3811 4.13412 13.3568C4.22848 13.2861 4.32286 13.2126 4.41297 13.1383C4.42927 13.1247 4.45198 13.1219 4.47115 13.1304C7.41696 14.4754 10.6062 14.4754 13.5172 13.1304C13.5364 13.1211 13.5591 13.124 13.5761 13.1376C13.6662 13.2119 13.7606 13.2861 13.8557 13.3568C13.8883 13.3811 13.8862 13.4319 13.8507 13.4526C13.4023 13.7147 12.9361 13.9361 12.4459 14.1211C12.414 14.1333 12.3998 14.1704 12.4154 14.2011C12.6857 14.7246 12.9943 15.2232 13.3342 15.696C13.3484 15.716 13.3739 15.7246 13.3973 15.7175C14.8681 15.2625 16.3595 14.5761 17.8991 13.4454C17.9126 13.4354 17.9211 13.4204 17.9225 13.404C18.2978 9.5213 17.2939 6.14861 15.2612 3.15873C15.2562 3.14874 15.2477 3.14159 15.2378 3.13731ZM6.01502 11.3584C5.12812 11.3584 4.39735 10.5441 4.39735 9.54417C4.39735 8.54421 5.11395 7.72997 6.01502 7.72997C6.92315 7.72997 7.64686 8.55135 7.63266 9.54417C7.63266 10.5441 6.91606 11.3584 6.01502 11.3584ZM11.9961 11.3584C11.1092 11.3584 10.3784 10.5441 10.3784 9.54417C10.3784 8.54421 11.095 7.72997 11.9961 7.72997C12.9042 7.72997 13.6279 8.55135 13.6137 9.54417C13.6137 10.5441 12.9042 11.3584 11.9961 11.3584Z"),n(t,"fill","#5865F2"),ee(e,r)},m(f,d){I(f,e,d),l&&l.m(e,null),R(e,t),s=!0},p(f,[d]){l&&l.p&&(!s||d&2)&&G(l,o,f,f[1],s?j(o,f[1],d,null):Z(f[1]),null),ee(e,r=_e(a,[{width:"18"},{height:"18"},{viewBox:"0 0 18 18"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},d&1&&f[0]]))},i(f){s||(g(l,f),s=!0)},o(f){p(l,f),s=!1},d(f){f&&c(e),l&&l.d(f)}}}function Hl(i,e,t){const s=[];let o=le(e,s),{$$slots:l={},$$scope:a}=e;return i.$$set=r=>{e=J(J({},e),Y(r)),t(0,o=le(e,s)),"$$scope"in r&&t(1,a=r.$$scope)},[o,a,l]}class kl extends te{constructor(e){super(),se(this,e,Hl,Rl,ae,{})}}function Al(i){let e,t,s;const o=i[2].default,l=z(o,i,i[1],null);let a=[{width:"18"},{height:"18"},{viewBox:"0 0 18 18"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},i[0]],r={};for(let f=0;f<a.length;f+=1)r=J(r,a[f]);return{c(){e=x("svg"),l&&l.c(),t=x("path"),this.h()},l(f){e=$(f,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var d=H(e);l&&l.l(d),t=$(d,"path",{d:!0,fill:!0}),H(t).forEach(c),d.forEach(c),this.h()},h(){n(t,"d","M9 1C4.58 1 1 4.58 1 9C1 12.54 3.29 15.53 6.47 16.59C6.87 16.66 7.02 16.42 7.02 16.21C7.02 16.02 7.01 15.39 7.01 14.72C5 15.09 4.48 14.23 4.32 13.78C4.23 13.55 3.84 12.84 3.5 12.65C3.22 12.5 2.82 12.13 3.49 12.12C4.12 12.11 4.57 12.7 4.72 12.94C5.44 14.15 6.59 13.81 7.05 13.6C7.12 13.08 7.33 12.73 7.56 12.53C5.78 12.33 3.92 11.64 3.92 8.58C3.92 7.71 4.23 6.99 4.74 6.43C4.66 6.23 4.38 5.41 4.82 4.31C4.82 4.31 5.49 4.1 7.02 5.13C7.66 4.95 8.34 4.86 9.02 4.86C9.7 4.86 10.38 4.95 11.02 5.13C12.55 4.09 13.22 4.31 13.22 4.31C13.66 5.41 13.38 6.23 13.3 6.43C13.81 6.99 14.12 7.7 14.12 8.58C14.12 11.65 12.25 12.33 10.47 12.53C10.76 12.78 11.01 13.26 11.01 14.01C11.01 15.08 11 15.94 11 16.21C11 16.42 11.15 16.67 11.55 16.59C14.8064 15.4907 16.9991 12.437 17 9C17 4.58 13.42 1 9 1V1Z"),n(t,"fill","#010101"),ee(e,r)},m(f,d){I(f,e,d),l&&l.m(e,null),R(e,t),s=!0},p(f,[d]){l&&l.p&&(!s||d&2)&&G(l,o,f,f[1],s?j(o,f[1],d,null):Z(f[1]),null),ee(e,r=_e(a,[{width:"18"},{height:"18"},{viewBox:"0 0 18 18"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},d&1&&f[0]]))},i(f){s||(g(l,f),s=!0)},o(f){p(l,f),s=!1},d(f){f&&c(e),l&&l.d(f)}}}function Fl(i,e,t){const s=[];let o=le(e,s),{$$slots:l={},$$scope:a}=e;return i.$$set=r=>{e=J(J({},e),Y(r)),t(0,o=le(e,s)),"$$scope"in r&&t(1,a=r.$$scope)},[o,a,l]}class Ll extends te{constructor(e){super(),se(this,e,Fl,Al,ae,{})}}function Dl(i){let e,t,s;const o=i[2].default,l=z(o,i,i[1],null);let a=[{width:"18"},{height:"18"},{viewBox:"0 0 18 18"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},i[0]],r={};for(let f=0;f<a.length;f+=1)r=J(r,a[f]);return{c(){e=x("svg"),l&&l.c(),t=x("path"),this.h()},l(f){e=$(f,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var d=H(e);l&&l.l(d),t=$(d,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),H(t).forEach(c),d.forEach(c),this.h()},h(){n(t,"fill-rule","evenodd"),n(t,"clip-rule","evenodd"),n(t,"d","M17 4.03801C16.41 4.29801 15.78 4.47501 15.115 4.55501C15.792 4.14801 16.313 3.50501 16.558 2.73901C15.924 3.10901 15.221 3.37901 14.473 3.52901C13.875 2.88901 13.023 2.48901 12.077 2.48901C10.265 2.48901 8.795 3.95901 8.795 5.76901C8.795 6.02901 8.825 6.27901 8.88 6.51901C6.152 6.38901 3.733 5.07901 2.114 3.09901C1.83 3.58001 1.67 4.14001 1.67 4.75001C1.67 5.89001 2.25 6.89301 3.13 7.48201C2.592 7.46501 2.085 7.31701 1.643 7.07201V7.11201C1.643 8.70201 2.773 10.03 4.276 10.332C4 10.406 3.71 10.446 3.411 10.446C3.201 10.446 3.001 10.426 2.801 10.388C3.221 11.692 4.431 12.641 5.871 12.668C4.751 13.548 3.331 14.072 1.801 14.072C1.541 14.072 1.281 14.057 1.021 14.027C2.481 14.957 4.201 15.501 6.061 15.501C12.101 15.501 15.401 10.501 15.401 6.17101C15.401 6.03101 15.401 5.89101 15.391 5.75101C16.031 5.29101 16.591 4.71101 17.031 4.05101L17 4.03801Z"),n(t,"fill","#2AA3EF"),ee(e,r)},m(f,d){I(f,e,d),l&&l.m(e,null),R(e,t),s=!0},p(f,[d]){l&&l.p&&(!s||d&2)&&G(l,o,f,f[1],s?j(o,f[1],d,null):Z(f[1]),null),ee(e,r=_e(a,[{width:"18"},{height:"18"},{viewBox:"0 0 18 18"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},d&1&&f[0]]))},i(f){s||(g(l,f),s=!0)},o(f){p(l,f),s=!1},d(f){f&&c(e),l&&l.d(f)}}}function Tl(i,e,t){const s=[];let o=le(e,s),{$$slots:l={},$$scope:a}=e;return i.$$set=r=>{e=J(J({},e),Y(r)),t(0,o=le(e,s)),"$$scope"in r&&t(1,a=r.$$scope)},[o,a,l]}class Vl extends te{constructor(e){super(),se(this,e,Tl,Dl,ae,{})}}function Ml(i){let e;const t=i[0].default,s=z(t,i,i[1],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,l){s&&s.m(o,l),e=!0},p(o,l){s&&s.p&&(!e||l&2)&&G(s,t,o,o[1],e?j(t,o[1],l,null):Z(o[1]),null)},i(o){e||(g(s,o),e=!0)},o(o){p(s,o),e=!1},d(o){s&&s.d(o)}}}function Il(i){let e,t,s,o,l,a,r,f,d,S,w,V,k,P,b,u,h,C,B,M,A,E,_,m,F,v,q,y,ne;return s=new Vl({}),S=new kl({}),h=new Ll({}),{c(){e=D("a"),t=D("span"),ie(s.$$.fragment),o=N(),l=D("span"),a=W("Twitter"),r=N(),f=D("a"),d=D("span"),ie(S.$$.fragment),w=N(),V=D("span"),k=W("Discord"),P=N(),b=D("a"),u=D("span"),ie(h.$$.fragment),C=N(),B=D("span"),M=W("GitHub"),A=N(),E=D("a"),_=D("span"),m=D("img"),v=N(),q=D("span"),y=W("FoundryVTT"),this.h()},l(L){e=T(L,"A",{href:!0,class:!0});var U=H(e);t=T(U,"SPAN",{class:!0});var me=H(t);oe(s.$$.fragment,me),me.forEach(c),o=O(U),l=T(U,"SPAN",{class:!0});var be=H(l);a=X(be,"Twitter"),be.forEach(c),U.forEach(c),r=O(L),f=T(L,"A",{href:!0,class:!0});var ue=H(f);d=T(ue,"SPAN",{class:!0});var ve=H(d);oe(S.$$.fragment,ve),ve.forEach(c),w=O(ue),V=T(ue,"SPAN",{class:!0});var Ce=H(V);k=X(Ce,"Discord"),Ce.forEach(c),ue.forEach(c),P=O(L),b=T(L,"A",{href:!0,class:!0});var ce=H(b);u=T(ce,"SPAN",{class:!0});var pe=H(u);oe(h.$$.fragment,pe),pe.forEach(c),C=O(ce),B=T(ce,"SPAN",{class:!0});var Ee=H(B);M=X(Ee,"GitHub"),Ee.forEach(c),ce.forEach(c),A=O(L),E=T(L,"A",{href:!0,class:!0});var de=H(E);_=T(de,"SPAN",{class:!0});var Se=H(_);m=T(Se,"IMG",{src:!0,alt:!0}),Se.forEach(c),v=O(de),q=T(de,"SPAN",{class:!0});var we=H(q);y=X(we,"FoundryVTT"),we.forEach(c),de.forEach(c),this.h()},h(){n(t,"class","badge-icon"),n(l,"class","hidden sm:inline"),n(e,"href","https://twitter.com/ThatVauxs"),n(e,"class","chip variant-outline hover:variant-filled"),n(d,"class","badge-icon"),n(V,"class","hidden sm:inline"),n(f,"href","https://discordapp.com/users/231079402690052097"),n(f,"class","chip variant-outline hover:variant-filled"),n(u,"class","badge-icon"),n(B,"class","hidden sm:inline"),n(b,"href","https://github.com/MrVauxs"),n(b,"class","chip variant-outline hover:variant-filled"),Xe(m.src,F="fvtt-d20.png")||n(m,"src",F),n(m,"alt","FVTT Icon"),n(_,"class","badge-icon"),n(q,"class","hidden sm:inline"),n(E,"href","https://foundryvtt.com/community/mrvauxs"),n(E,"class","chip variant-outline hover:variant-filled")},m(L,U){I(L,e,U),R(e,t),re(s,t,null),R(e,o),R(e,l),R(l,a),I(L,r,U),I(L,f,U),R(f,d),re(S,d,null),R(f,w),R(f,V),R(V,k),I(L,P,U),I(L,b,U),R(b,u),re(h,u,null),R(b,C),R(b,B),R(B,M),I(L,A,U),I(L,E,U),R(E,_),R(_,m),R(E,v),R(E,q),R(q,y),ne=!0},p:Ue,i(L){ne||(g(s.$$.fragment,L),g(S.$$.fragment,L),g(h.$$.fragment,L),ne=!0)},o(L){p(s.$$.fragment,L),p(S.$$.fragment,L),p(h.$$.fragment,L),ne=!1},d(L){L&&c(e),fe(s),L&&c(r),L&&c(f),fe(S),L&&c(P),L&&c(b),fe(h),L&&c(A),L&&c(E)}}}function Bl(i){let e,t;return e=new nl({props:{slotTrail:"place-content-end",padding:"py-2",$$slots:{trail:[Il]},$$scope:{ctx:i}}}),{c(){ie(e.$$.fragment)},l(s){oe(e.$$.fragment,s)},m(s,o){re(e,s,o),t=!0},p(s,o){const l={};o&2&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(g(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function Nl(i){let e,t,s;return{c(){e=D("a"),t=D("span"),s=W("Source Code"),this.h()},l(o){e=T(o,"A",{href:!0,class:!0});var l=H(e);t=T(l,"SPAN",{});var a=H(t);s=X(a,"Source Code"),a.forEach(c),l.forEach(c),this.h()},h(){n(e,"href","https://github.com/MrVauxs/MrVauxs"),n(e,"class","chip variant-outline hover:variant-filled m-1")},m(o,l){I(o,e,l),R(e,t),R(t,s)},p:Ue,d(o){o&&c(e)}}}function Ol(i){let e,t;return e=new Pl({props:{$$slots:{footer:[Nl],header:[Bl],default:[Ml]},$$scope:{ctx:i}}}),{c(){ie(e.$$.fragment)},l(s){oe(e.$$.fragment,s)},m(s,o){re(e,s,o),t=!0},p(s,[o]){const l={};o&2&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(g(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){fe(e,s)}}}function zl(i,e,t){let{$$slots:s={},$$scope:o}=e;return i.$$set=l=>{"$$scope"in l&&t(1,o=l.$$scope)},[s,o]}class ql extends te{constructor(e){super(),se(this,e,zl,Ol,ae,{})}}export{ql as component,jl as universal};
