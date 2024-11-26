import e,{useRef as t,useReducer as n,createContext as o,useEffect as r,useLayoutEffect as i,useMemo as a,useCallback as c,useState as l,useContext as s,useImperativeHandle as u,Children as d,cloneElement as h}from"react";import{createPortal as m}from"react-dom";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(null,arguments)}function v(e,t){if(null==e)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.includes(o))continue;n[o]=e[o]}return n}function g(e){const{current:n}=t({fn:e,curr:void 0});if(n.fn=e,!n.curr){const t=Object.create(null);Object.keys(e).forEach(e=>{t[e]=(...t)=>n.fn[e].call(n.fn,...t)}),n.curr=t}return n.curr}function C(e){return n((e,t)=>f({},e,"function"==typeof t?t(e):t),e)}var p=o(void 0);const w="cubic-bezier(0.25, 0.8, 0.25, 1)",x=20,b=1,y="undefined"!=typeof window&&"ontouchstart"in window,E=(e,t,n)=>Math.max(Math.min(e,n),t),k=(e,t=0,n=0)=>E(e,1*(1-n),Math.max(6,t)*(1+n));var P="undefined"==typeof window||/ServerSideRendering/.test(navigator&&navigator.userAgent)?r:i;function _(e,n,o){const i=t(n);i.current=n,r(()=>{function t(e){i.current(e)}return e&&window.addEventListener(e,t,o),()=>{e&&window.removeEventListener(e,t)}},[e])}const $=["container"];function Y(t){let{container:n=document.body}=t,o=v(t,$);return m(e.createElement("div",f({},o)),n)}function L(t){return e.createElement("svg",f({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M25.7081 24.2931C25.801 24.386 25.8747 24.4963 25.9249 24.6177C25.9752 24.7391 26.0011 24.8692 26.0011 25.0006C26.0011 25.132 25.9752 25.2621 25.9249 25.3835C25.8747 25.5048 25.801 25.6151 25.7081 25.7081C25.6151 25.801 25.5048 25.8747 25.3835 25.9249C25.2621 25.9752 25.132 26.0011 25.0006 26.0011C24.8692 26.0011 24.7391 25.9752 24.6177 25.9249C24.4963 25.8747 24.386 25.801 24.2931 25.7081L16.0006 17.4143L7.70806 25.7081C7.52042 25.8957 7.26592 26.0011 7.00056 26.0011C6.73519 26.0011 6.4807 25.8957 6.29306 25.7081C6.10542 25.5204 6 25.2659 6 25.0006C6 24.7352 6.10542 24.4807 6.29306 24.2931L14.5868 16.0006L6.29306 7.70806C6.10542 7.52042 6 7.26592 6 7.00056C6 6.73519 6.10542 6.4807 6.29306 6.29306C6.4807 6.10542 6.73519 6 7.00056 6C7.26592 6 7.52042 6.10542 7.70806 6.29306L16.0006 14.5868L24.2931 6.29306C24.4807 6.10542 24.7352 6 25.0006 6C25.2659 6 25.5204 6.10542 25.7081 6.29306C25.8957 6.4807 26.0011 6.73519 26.0011 7.00056C26.0011 7.26592 25.8957 7.52042 25.7081 7.70806L17.4143 16.0006L25.7081 24.2931Z",fill:"white"}))}function N(t){return e.createElement("svg",f({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M20.7083 25.2931C20.8012 25.386 20.8749 25.4963 20.9252 25.6177C20.9755 25.7391 21.0013 25.8692 21.0013 26.0006C21.0013 26.132 20.9755 26.2621 20.9252 26.3835C20.8749 26.5048 20.8012 26.6151 20.7083 26.7081C20.6154 26.801 20.5051 26.8747 20.3837 26.9249C20.2623 26.9752 20.1322 27.0011 20.0008 27.0011C19.8694 27.0011 19.7393 26.9752 19.6179 26.9249C19.4965 26.8747 19.3862 26.801 19.2933 26.7081L9.29329 16.7081C9.20031 16.6152 9.12655 16.5049 9.07623 16.3835C9.0259 16.2621 9 16.132 9 16.0006C9 15.8691 9.0259 15.739 9.07623 15.6176C9.12655 15.4962 9.20031 15.3859 9.29329 15.2931L19.2933 5.29306C19.4809 5.10542 19.7354 5 20.0008 5C20.2662 5 20.5206 5.10542 20.7083 5.29306C20.8959 5.4807 21.0013 5.73519 21.0013 6.00056C21.0013 6.26592 20.8959 6.52042 20.7083 6.70806L11.4145 16.0006L20.7083 25.2931Z",fill:"white"}))}function X(t){return e.createElement("svg",f({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M22.7081 15.2919L12.7081 5.29194C12.6151 5.19903 12.5048 5.12533 12.3835 5.07505C12.2621 5.02477 12.132 4.99889 12.0006 4.99889C11.8692 4.99889 11.7391 5.02477 11.6177 5.07505C11.4963 5.12533 11.386 5.19903 11.2931 5.29194C11.2001 5.38485 11.1264 5.49515 11.0762 5.61655C11.0259 5.73794 11 5.86805 11 5.99944C11 6.13084 11.0259 6.26095 11.0762 6.38234C11.1264 6.50373 11.2001 6.61403 11.2931 6.70694L20.5868 15.9994L11.2931 25.2919C11.1054 25.4796 11 25.7341 11 25.9994C11 26.2648 11.1054 26.5193 11.2931 26.7069C11.4807 26.8946 11.7352 27 12.0006 27C12.2659 27 12.5204 26.8946 12.7081 26.7069L22.7081 16.7069C22.801 16.6141 22.8748 16.5038 22.9251 16.3824C22.9754 16.261 23.0013 16.1309 23.0013 15.9994C23.0013 15.868 22.9754 15.7379 22.9251 15.6165C22.8748 15.4951 22.801 15.3848 22.7081 15.2919Z",fill:"white"}))}function M(){return r(()=>{const{style:e}=document.body,t=e.overflow;return e.overflow="hidden",()=>{e.overflow=t}},[]),null}function W(e){const{clientX:t,clientY:n}=e.touches[0];if(e.touches.length>=2){const{clientX:o,clientY:r}=e.touches[1];return[(t+o)/2,(n+r)/2,Math.sqrt((o-t)**2+(r-n)**2)]}return[t,n,0]}const S=(e,t,n,o)=>{const r=n*t,i=(r-o)/2;let a,c=e;return r<=o?(a=1,c=0):e>0&&i-e<=0?(a=2,c=i):e<0&&i+e<=0&&(a=3,c=-i),[a,c]};function T(e,t,n,o,r,i,a=innerWidth/2,c=innerHeight/2,l=0,s=0){const[u]=S(e,i,n,innerWidth),[d]=S(t,i,o,innerHeight),h=innerWidth/2,m=innerHeight/2;return{x:a-i/r*(a-(h+e))-h+(o/n>=3&&n*i===innerWidth?0:u?l/2:l),y:c-i/r*(c-(m+t))-m+(d?s/2:s),lastCX:a,lastCY:c}}function V(e,t,n){const o=e%180!=0;return o?[n,t,o]:[t,n,o]}function R(e,t,n){const[o,r,i]=V(n,innerWidth,innerHeight);let a=0,c=o,l=r;const s=e/t*r,u=t/e*o;return e<o&&t<r?(c=e,l=t):e<o&&t>=r?c=s:e>=o&&t<r||e/t>o/r?l=u:t/e>=3&&!i?(l=u,a=(l-r)/2):c=s,{width:c,height:l,x:0,y:a,pause:!0}}function A(e,{leading:n=!1,maxWait:o,wait:r=o||0}){const i=t(e);i.current=e;const a=t(0),l=t(),s=()=>l.current&&clearTimeout(l.current),u=c((...e)=>{const t=Date.now();function c(){a.current=t,s(),i.current.apply(null,e)}const u=a.current,d=t-u;if(0===u&&(n&&c(),a.current=t),void 0!==o){if(d>o)return void c()}else d<r&&(a.current=t);s(),l.current=setTimeout(()=>{c(),a.current=0},r)},[r,o,n]);return u.cancel=s,u}const I=(e,t,n)=>F(e,t,n,100,e=>e,()=>F(t,e,n)),H=e=>1-(1-e)**4;function F(e,t,n,o=400,r=H,i){const a=t-e;if(0===a)return;const c=Date.now();let l=0;const s=()=>{const t=Math.min(1,(Date.now()-c)/o);n(e+r(t)*a)&&t<1?u():(cancelAnimationFrame(l),t>=1&&i&&i())};function u(){l=requestAnimationFrame(s)}u()}const D={T:0,L:0,W:0,H:0,FIT:void 0},B=()=>{const e=t(!1);return r(()=>(e.current=!0,()=>{e.current=!1}),[]),e},O=["className"];function j(t){let{className:n=""}=t,o=v(t,O);return e.createElement("div",f({className:`PhotoView__Spinner ${n}`},o),e.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},e.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),e.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}const q=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function z(t){let{src:n,loaded:o,broken:r,className:i,onPhotoLoad:a,loadingElement:c,brokenElement:l}=t,s=v(t,q);const u=B();return n&&!r?e.createElement(e.Fragment,null,e.createElement("img",f({className:"PhotoView__Photo"+(i?` ${i}`:""),src:n,onLoad:function(e){const{naturalWidth:t,naturalHeight:n}=e.target;u.current&&a({loaded:!0,naturalWidth:t,naturalHeight:n})},onError:function(){u.current&&a({broken:!0})},alt:""},s)),!o&&(e.createElement("span",{className:"PhotoView__icon"},c)||e.createElement(j,{className:"PhotoView__icon"}))):l?e.createElement("span",{className:"PhotoView__icon"},"function"==typeof l?l({src:n}):l):null}const Z={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:!0,stopRaf:!0,reach:void 0};function K({item:{src:n,render:o,width:i=0,height:a=0,originRef:c},visible:s,speed:u,easing:d,wrapClassName:h,className:m,style:v,loadingElement:p,brokenElement:w,onPhotoTap:x,onMaskTap:b,onReachMove:E,onReachUp:$,onPhotoResize:Y,isActive:L,expose:N}){const[X,M]=C(Z),H=t(0),O=B(),{naturalWidth:j=i,naturalHeight:q=a,width:K=i,height:U=a,loaded:G=!n,broken:J,x:Q,y:ee,touched:te,stopRaf:ne,maskTouched:oe,rotate:re,scale:ie,CX:ae,CY:ce,lastX:le,lastY:se,lastCX:ue,lastCY:de,lastScale:he,touchTime:me,touchLength:fe,pause:ve,reach:ge}=X,Ce=g({onScale:e=>pe(k(e)),onRotate(e){re!==e&&(N({rotate:e}),M(f({rotate:e},R(j,q,e))))}});function pe(e,t,n){ie!==e&&(N({scale:e}),M(f({scale:e},T(Q,ee,K,U,ie,e,t,n),e<=1&&{x:0,y:0})))}const we=A((e,t,n=0)=>{if((te||oe)&&L){const[o,r]=V(re,K,U);if(0===n&&0===H.current){const n=Math.abs(e-ae)<=20,o=Math.abs(t-ce)<=20;if(n&&o)return void M({lastCX:e,lastCY:t});H.current=n?t>ce?3:2:1}const i=e-ue,a=t-de;let c;if(0===n){const[n]=S(i+le,ie,o,innerWidth),[l]=S(a+se,ie,r,innerHeight);c=((e,t,n,o)=>t&&1===e||"x"===o?"x":n&&e>1||"y"===o?"y":void 0)(H.current,n,l,ge),void 0!==c&&E(c,e,t,ie)}if("x"===c||oe)return void M({reach:"x"});const l=k(ie+(n-fe)/100/2*ie,j/K,.2);N({scale:l}),M(f({touchLength:n,reach:c,scale:l},T(Q,ee,K,U,ie,l,e,t,i,a)))}},{maxWait:8});function xe(e){return!ne&&!te&&(O.current&&M(f({},e,{pause:s})),O.current)}const be=function(){const e=g({X:e=>xe({x:e}),Y:e=>xe({y:e}),S:e=>{return t=e,O.current&&(N({scale:t}),M({scale:t})),!te&&O.current;var t}});return(t,n,o,r,i,a,c,l,s,u,d)=>{const[h,m]=V(u,i,a),[f,v]=S(t,l,h,innerWidth),[g,C]=S(n,l,m,innerHeight),p=Date.now()-d;if(p>=200||l!==c||Math.abs(s-c)>1){const{x:o,y:r}=T(t,n,i,a,c,l),s=f?v:o!==t?o:null,u=g?C:r!==n?r:null;return null!==s&&F(t,s,e.X),null!==u&&F(n,u,e.Y),void(l!==c&&F(c,l,e.S))}const w=(t-o)/p,x=(n-r)/p,b=Math.sqrt(w**2+x**2);let y=!1,E=!1;!function(e,t){let n,o=e,r=0,i=0;const a=i=>{n||(n=i);const a=i-n,s=Math.sign(e),u=-.001*s,d=Math.sign(-o)*o**2*2e-4,h=o*a+(u+d)*a**2/2;o+=(u+d)*a,r+=h,n=i,s*o<=0?l():t(r)?c():l()};function c(){i=requestAnimationFrame(a)}function l(){cancelAnimationFrame(i)}c()}(b,o=>{const r=t+o*(w/b),i=n+o*(x/b),[a,l]=S(r,c,h,innerWidth),[s,u]=S(i,c,m,innerHeight);if(a&&!y&&(y=!0,f?F(r,l,e.X):I(l,r+(r-l),e.X)),s&&!E&&(E=!0,g?F(i,u,e.Y):I(u,i+(i-u),e.Y)),y&&E)return!1;const d=y||e.X(l),v=E||e.Y(u);return d&&v})}}(),ye=function(e){const n=t(0),o=A((...t)=>{n.current=0,e(...t)},{wait:300});return function(...e){n.current+=1,o(...e),n.current>=2&&(o.cancel(),n.current=0,((e,t)=>{ge||pe(1!==ie?1:Math.max(2,j/K),e,t)})(...e))}}(x);function Ee(e,t){if(H.current=0,(te||oe)&&L){M({touched:!1,maskTouched:!1,pause:!1,stopRaf:!1,reach:void 0});const n=k(ie,j/K);if(be(Q,ee,le,se,K,U,ie,n,he,re,me),$(e,t),ae===e&&ce===t){if(te)return void ye(e,t);oe&&b(e,t)}}}function ke(e,t,n=0){M({touched:!0,CX:e,CY:t,lastCX:e,lastCY:t,lastX:Q,lastY:ee,lastScale:ie,touchLength:n,touchTime:Date.now()})}function Pe(e){M({maskTouched:!0,CX:e.clientX,CY:e.clientY,lastX:Q,lastY:ee})}_(y?void 0:"mousemove",e=>{e.preventDefault(),we(e.clientX,e.clientY)}),_(y?void 0:"mouseup",e=>{Ee(e.clientX,e.clientY)}),_(y?"touchmove":void 0,e=>{e.preventDefault();const t=W(e);we(...t)},{passive:!1}),_(y?"touchend":void 0,({changedTouches:e})=>{const t=e[0];Ee(t.clientX,t.clientY)},{passive:!1}),_("resize",A(()=>{G&&!te&&(M(R(j,q,re)),Y())},{maxWait:8})),P(()=>{L&&N(f({scale:ie,rotate:re},Ce))},[L]);const[_e,$e,Ye,Le,Ne,Xe,Me,We]=function(e,n,o,i,a,c,s,u,d,h){const[m,f,v]=function(e,n,o,r,i){const a=t(!1),[{lead:c,scale:l},s]=C({lead:!0,scale:o}),u=A(async e=>{i(!0),s({lead:!1,scale:e})},{wait:r});return P(()=>{a.current?(i(!1),s({lead:!0}),u(o)):a.current=!0},[o]),c?[e*l,n*l,o/l]:[e*o,n*o,1]}(c,s,u,d,h),[p,w]=function(e,n,o,i,a){const[c,s]=l(D),[u,d]=l(0),h=t(),m=g({OK:()=>e&&d(4)});function f(e){a(!1),d(e)}return r(()=>{if(h.current||(h.current=Date.now()),o){if(function(e,t){const n=e&&e.current;if(n&&1===n.nodeType){const{top:e,left:o,width:r,height:i}=n.getBoundingClientRect();t({T:e,L:o,W:r,H:i,FIT:"IMG"===n.tagName?getComputedStyle(n).objectFit:void 0})}}(n,s),e)return Date.now()-h.current<250?(d(1),requestAnimationFrame(()=>{d(2),requestAnimationFrame(()=>f(3))}),void setTimeout(m.OK,i)):void d(4);f(5)}},[e,o]),[u,c]}(e,n,o,d,h),{T:x,L:b,W:y,H:E,FIT:k}=w,_=innerWidth/2,$=innerHeight/2,Y=p<3||p>4;return[Y?y?b:_:i+(_-c*u/2),Y?y?x:$:a+($-s*u/2),m,Y&&k?m*(E/y):f,0===p?v:Y?y/(c*u)||.01:v,Y?k?1:0:1,p,k]}(s,c,G,Q,ee,K,U,ie,u,e=>M({pause:e})),Se=`transform ${u}ms ${d}`,Te={className:m,onMouseDown:y?void 0:function(e){e.stopPropagation(),0===e.button&&ke(e.clientX,e.clientY,0)},onTouchStart:y?function(e){e.stopPropagation(),ke(...W(e))}:void 0,onWheel:function(e){if(!ge){const t=k(ie-e.deltaY/100/2,j/K);M({stopRaf:!0}),pe(t,e.clientX,e.clientY)}},style:{width:`${Ye}px`,height:`${Le}px`,opacity:Xe,objectFit:4===Me?void 0:We,transform:re?`rotate(${re}deg)`:void 0,transition:Me>2?`${Se}, opacity ${u}ms ease, height ${Me<4?u/2:Me>4?u:0}ms ${d}`:void 0}};return e.createElement("div",{className:"PhotoView__PhotoWrap"+(h?` ${h}`:""),style:v,onMouseDown:!y&&L?Pe:void 0,onTouchStart:y&&L?e=>Pe(e.touches[0]):void 0},e.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:`matrix(${Ne}, 0, 0, ${Ne}, ${_e}, ${$e})`,transition:te||ve?void 0:Se,willChange:L?"transform":void 0}},n?e.createElement(z,f({src:n,loaded:G,broken:J},Te,{onPhotoLoad:function(e){M(f({},e,e.loaded&&R(e.naturalWidth||0,e.naturalHeight||0,re)))},loadingElement:p,brokenElement:w})):o&&o({attrs:Te,scale:Ne,rotate:re})))}const U={x:0,touched:!1,pause:!1,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:!0,minimal:!0,scale:1,rotate:0};function G(o){const{loop:r=3,speed:i,easing:c,photoClosable:s,maskClosable:u=!0,maskOpacity:d=b,pullClosable:h=!0,bannerVisible:m=!0,overlayRender:f,toolbarRender:v,className:p,maskClassName:k,photoClassName:$,photoWrapClassName:W,bannerClassName:S,arrowLeftClassName:T,arrowRightClassName:V,loadingElement:R,brokenElement:A,images:I,index:H=0,onIndexChange:F,visible:D,onClose:B,afterClose:O,portalContainer:j}=o,[q,z]=C(U),[Z,G]=l(0),{x:J,touched:Q,pause:ee,lastCX:te,lastCY:ne,bg:oe=d,lastBg:re,overlay:ie,minimal:ae,scale:ce,rotate:le,onScale:se,onRotate:ue}=q,de=o.hasOwnProperty("index"),he=de?H:Z,me=de?F:G,fe=t(he),ve=I.length,ge=I[he],Ce="boolean"==typeof r?r:ve>r,[pe,we,xe]=function(e,o){const[,r]=n(e=>!e,!1),i=t(0),[c,l]=function(n){const o=t(n);function r(e){o.current=e}return a(()=>{(t=>{e?(t(e),i.current=1):i.current=2})(r)},[n]),[o.current,r]}(e);return[c,i.current,function(){r(),2===i.current&&(l(!1),o&&o()),i.current=0}]}(D,O);P(()=>{if(pe)return z({pause:!0,x:he*-(innerWidth+x)}),void(fe.current=he);z(U)},[pe]);const{close:be,changeIndex:ye}=g({close(e){ue&&ue(0),z({overlay:!0,lastBg:oe}),B(e)},changeIndex(e,t=!1){const n=Ce?fe.current+(e-he):e,o=ve-1,r=E(n,0,o),i=Ce?n:r,a=innerWidth+x;z({touched:!1,lastCX:void 0,lastCY:void 0,x:-a*i,pause:t}),fe.current=i,me&&me(Ce?e<0?o:e>o?0:e:r)}});function Ee(e){return e?be():z({overlay:!ie})}function ke(){z({x:-(innerWidth+x)*he,lastCX:void 0,lastCY:void 0,pause:!0}),fe.current=he}function Pe(e,t,n,o){"x"===e?function(e){if(void 0===te)return void z({touched:!0,lastCX:e,x:J,pause:!1});const t=e-te;let n=t;!Ce&&(0===he&&t>0||he===ve-1&&t<0)&&(n=t/2),z({touched:!0,lastCX:te,x:-(innerWidth+x)*fe.current+n,pause:!1})}(t):"y"===e&&function(e,t){if(void 0===ne)return void z({touched:!0,lastCY:e,bg:oe,minimal:!0});const n=null===d?null:E(d,.01,d-Math.abs(e-ne)/100/4);z({touched:!0,lastCY:ne,bg:1===t?n:d,minimal:1===t})}(n,o)}function _e(e,t){const n=e-(null!=te?te:e),o=t-(null!=ne?ne:t);let r=!1;if(n<-40)return void ye(he+1);if(n>40)return void ye(he-1);const i=-(innerWidth+x)*fe.current;Math.abs(o)>100&&ae&&h&&(r=!0,be()),z({touched:!1,x:i,lastCX:void 0,lastCY:void 0,bg:d,overlay:!!r||ie})}_("keydown",e=>{if(D)switch(e.key){case"ArrowLeft":ye(he-1,!0);break;case"ArrowRight":ye(he+1,!0);break;case"Escape":be()}});const $e=function(e,t,n){return a(()=>{const o=e.length;return n?e.concat(e).concat(e).slice(o+t-1,o+t+2):e.slice(Math.max(t-1,0),Math.min(t+2,o+1))},[e,t,n])}(I,he,Ce);if(!pe)return null;const Ye=ie&&!we,Le=D?oe:re,Ne=se&&ue&&{images:I,index:he,visible:D,onClose:be,onIndexChange:ye,overlayVisible:Ye,overlay:ge&&ge.overlay,scale:ce,rotate:le,onScale:se,onRotate:ue},Xe=i?i(we):400,Me=c?c(we):w,We=i?i(3):600,Se=c?c(3):w;return e.createElement(Y,{className:`PhotoView-Portal${Ye?"":" PhotoView-Slider__clean"}${D?"":" PhotoView-Slider__willClose"}${p?` ${p}`:""}`,role:"dialog",onClick:e=>e.stopPropagation(),container:j},D&&e.createElement(M,null),e.createElement("div",{className:`PhotoView-Slider__Backdrop${k?` ${k}`:""}${1===we?" PhotoView-Slider__fadeIn":2===we?" PhotoView-Slider__fadeOut":""}`,style:{background:Le?`rgba(45, 60, 78, ${Le})`:void 0,backdropFilter:"blur(2.5px)",transitionTimingFunction:Me,transitionDuration:`${Q?0:Xe}ms`,animationDuration:`${Xe}ms`},onAnimationEnd:xe}),m&&e.createElement("div",{className:"PhotoView-Slider__BannerWrap"+(S?` ${S}`:"")},e.createElement("div",{className:"PhotoView-Slider__Counter"},he+1,"/",ve),e.createElement("div",{className:"PhotoView-Slider__BannerRight"},v&&Ne&&v(Ne),e.createElement(L,{className:"PhotoView-Slider__toolbarIcon",onClick:be}))),$e.map((t,n)=>{const o=Ce||0!==he?fe.current-1+n:he+n;return e.createElement(K,{key:Ce?`${t.key}/${t.src}/${o}`:t.key,item:t,speed:Xe,easing:Me,visible:D,onReachMove:Pe,onReachUp:_e,onPhotoTap:()=>Ee(s),onMaskTap:()=>Ee(u),wrapClassName:W,className:$,style:{left:(innerWidth+x)*o+"px",transform:`translate3d(${J}px, 0px, 0)`,transition:Q||ee?void 0:`transform ${We}ms ${Se}`},loadingElement:R,brokenElement:A,onPhotoResize:ke,isActive:fe.current===o,expose:z})}),!y&&m&&e.createElement(e.Fragment,null,(Ce||0!==he)&&e.createElement("div",{className:"PhotoView-Slider__ArrowLeft"+(T?` ${T}`:""),onClick:()=>ye(he-1,!0)},e.createElement(N,null)),(Ce||he+1<ve)&&e.createElement("div",{className:"PhotoView-Slider__ArrowRight"+(V?` ${V}`:""),onClick:()=>ye(he+1,!0)},e.createElement(X,null))),f&&Ne&&e.createElement("div",{className:"PhotoView-Slider__Overlay"},f(Ne)))}const J=["children","onIndexChange","onVisibleChange"],Q={images:[],visible:!1,index:0};function ee(n){let{children:o,onIndexChange:r,onVisibleChange:i}=n,c=v(n,J);const[l,s]=C(Q),u=t(0),{images:d,visible:h,index:m}=l,w=g({nextId:()=>u.current+=1,update(e){const t=d.findIndex(t=>t.key===e.key);if(t>-1){const n=d.slice();return n.splice(t,1,e),void s({images:n})}s(t=>({images:t.images.concat(e)}))},remove(e){s(t=>{const n=t.images.filter(t=>t.key!==e);return{images:n,index:Math.min(n.length-1,m)}})},show(e){const t=d.findIndex(t=>t.key===e);s({visible:!0,index:t}),i&&i(!0,t,l)}}),x=g({close(){s({visible:!1}),i&&i(!1,m,l)},changeIndex(e){s({index:e}),r&&r(e,l)}}),b=a(()=>f({},l,w),[l,w]);return e.createElement(p.Provider,{value:b},o,e.createElement(G,f({images:d,visible:h,index:m,onIndexChange:x.changeIndex,onClose:x.close},c)))}const te=({src:e,render:n,overlay:o,width:i,height:c,triggers:l=["onClick"],children:m})=>{const v=s(p),C=function(){const{current:e}=t({sign:!1,fn:void 0});return e.sign||(e.sign=!0,e.fn=v.nextId()),e.fn}(),w=t(null);u(null==m?void 0:m.ref,()=>w.current),r(()=>()=>{v.remove(C)},[]);const x=g({render:e=>n&&n(e),show(e,t){v.show(C),function(e,t){if(m){const n=m.props[e];n&&n(t)}}(e,t)}}),b=a(()=>{const e={};return l.forEach(t=>{e[t]=x.show.bind(null,t)}),e},[]);return r(()=>{v.update({key:C,src:e,originRef:w,render:x.render,overlay:o,width:i,height:c})},[e]),m?d.only(h(m,f({},b,{ref:w}))):null};export{ee as PhotoProvider,G as PhotoSlider,te as PhotoView};
//# sourceMappingURL=react-photo-view.modern.js.map