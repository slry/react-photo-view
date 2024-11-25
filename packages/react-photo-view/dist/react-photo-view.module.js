import e,{useRef as n,useReducer as t,createContext as r,useEffect as i,useLayoutEffect as o,useMemo as a,useCallback as c,useState as u,useContext as l,useImperativeHandle as s,Children as d,cloneElement as v}from"react";import{createPortal as f}from"react-dom";function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(null,arguments)}function m(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}function g(e){var t=n({fn:e,curr:void 0}).current;if(t.fn=e,!t.curr){var r=Object.create(null);Object.keys(e).forEach(function(e){r[e]=function(){var n;return(n=t.fn[e]).call.apply(n,[t.fn].concat([].slice.call(arguments)))}}),t.curr=r}return t.curr}function p(e){return t(function(e,n){return h({},e,"function"==typeof n?n(e):n)},e)}var C=r(void 0),w="cubic-bezier(0.25, 0.8, 0.25, 1)",x=20,y="undefined"!=typeof window&&"ontouchstart"in window,b=function(e,n,t){return Math.max(Math.min(e,t),n)},E=function(e,n,t){return void 0===n&&(n=0),void 0===t&&(t=0),b(e,1*(1-t),Math.max(6,n)*(1+t))},k="undefined"==typeof window||/ServerSideRendering/.test(navigator&&navigator.userAgent)?i:o;function P(e,t,r){var o=n(t);o.current=t,i(function(){function n(e){o.current(e)}return e&&window.addEventListener(e,n,r),function(){e&&window.removeEventListener(e,n)}},[e])}var _=["container"];function M(n){var t=n.container,r=void 0===t?document.body:t,i=m(n,_);return f(e.createElement("div",h({},i)),r)}function Y(n){return e.createElement("svg",h({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e.createElement("path",{d:"M25.7081 24.2931C25.801 24.386 25.8747 24.4963 25.9249 24.6177C25.9752 24.7391 26.0011 24.8692 26.0011 25.0006C26.0011 25.132 25.9752 25.2621 25.9249 25.3835C25.8747 25.5048 25.801 25.6151 25.7081 25.7081C25.6151 25.801 25.5048 25.8747 25.3835 25.9249C25.2621 25.9752 25.132 26.0011 25.0006 26.0011C24.8692 26.0011 24.7391 25.9752 24.6177 25.9249C24.4963 25.8747 24.386 25.801 24.2931 25.7081L16.0006 17.4143L7.70806 25.7081C7.52042 25.8957 7.26592 26.0011 7.00056 26.0011C6.73519 26.0011 6.4807 25.8957 6.29306 25.7081C6.10542 25.5204 6 25.2659 6 25.0006C6 24.7352 6.10542 24.4807 6.29306 24.2931L14.5868 16.0006L6.29306 7.70806C6.10542 7.52042 6 7.26592 6 7.00056C6 6.73519 6.10542 6.4807 6.29306 6.29306C6.4807 6.10542 6.73519 6 7.00056 6C7.26592 6 7.52042 6.10542 7.70806 6.29306L16.0006 14.5868L24.2931 6.29306C24.4807 6.10542 24.7352 6 25.0006 6C25.2659 6 25.5204 6.10542 25.7081 6.29306C25.8957 6.4807 26.0011 6.73519 26.0011 7.00056C26.0011 7.26592 25.8957 7.52042 25.7081 7.70806L17.4143 16.0006L25.7081 24.2931Z",fill:"white"}))}function X(n){return e.createElement("svg",h({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e.createElement("path",{d:"M20.7083 25.2931C20.8012 25.386 20.8749 25.4963 20.9252 25.6177C20.9755 25.7391 21.0013 25.8692 21.0013 26.0006C21.0013 26.132 20.9755 26.2621 20.9252 26.3835C20.8749 26.5048 20.8012 26.6151 20.7083 26.7081C20.6154 26.801 20.5051 26.8747 20.3837 26.9249C20.2623 26.9752 20.1322 27.0011 20.0008 27.0011C19.8694 27.0011 19.7393 26.9752 19.6179 26.9249C19.4965 26.8747 19.3862 26.801 19.2933 26.7081L9.29329 16.7081C9.20031 16.6152 9.12655 16.5049 9.07623 16.3835C9.0259 16.2621 9 16.132 9 16.0006C9 15.8691 9.0259 15.739 9.07623 15.6176C9.12655 15.4962 9.20031 15.3859 9.29329 15.2931L19.2933 5.29306C19.4809 5.10542 19.7354 5 20.0008 5C20.2662 5 20.5206 5.10542 20.7083 5.29306C20.8959 5.4807 21.0013 5.73519 21.0013 6.00056C21.0013 6.26592 20.8959 6.52042 20.7083 6.70806L11.4145 16.0006L20.7083 25.2931Z",fill:"white"}))}function L(n){return e.createElement("svg",h({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e.createElement("path",{d:"M22.7081 15.2919L12.7081 5.29194C12.6151 5.19903 12.5048 5.12533 12.3835 5.07505C12.2621 5.02477 12.132 4.99889 12.0006 4.99889C11.8692 4.99889 11.7391 5.02477 11.6177 5.07505C11.4963 5.12533 11.386 5.19903 11.2931 5.29194C11.2001 5.38485 11.1264 5.49515 11.0762 5.61655C11.0259 5.73794 11 5.86805 11 5.99944C11 6.13084 11.0259 6.26095 11.0762 6.38234C11.1264 6.50373 11.2001 6.61403 11.2931 6.70694L20.5868 15.9994L11.2931 25.2919C11.1054 25.4796 11 25.7341 11 25.9994C11 26.2648 11.1054 26.5193 11.2931 26.7069C11.4807 26.8946 11.7352 27 12.0006 27C12.2659 27 12.5204 26.8946 12.7081 26.7069L22.7081 16.7069C22.801 16.6141 22.8748 16.5038 22.9251 16.3824C22.9754 16.261 23.0013 16.1309 23.0013 15.9994C23.0013 15.868 22.9754 15.7379 22.9251 15.6165C22.8748 15.4951 22.801 15.3848 22.7081 15.2919Z",fill:"white"}))}function N(){return i(function(){var e=document.body.style,n=e.overflow;return e.overflow="hidden",function(){e.overflow=n}},[]),null}function W(e){var n=e.touches[0],t=n.clientX,r=n.clientY;if(e.touches.length>=2){var i=e.touches[1],o=i.clientX,a=i.clientY;return[(t+o)/2,(r+a)/2,Math.sqrt(Math.pow(o-t,2)+Math.pow(a-r,2))]}return[t,r,0]}var S=function(e,n,t,r){var i,o=t*n,a=(o-r)/2,c=e;return o<=r?(i=1,c=0):e>0&&a-e<=0?(i=2,c=a):e<0&&a+e<=0&&(i=3,c=-a),[i,c]};function T(e,n,t,r,i,o,a,c,u,l){void 0===a&&(a=innerWidth/2),void 0===c&&(c=innerHeight/2),void 0===u&&(u=0),void 0===l&&(l=0);var s=S(e,o,t,innerWidth)[0],d=S(n,o,r,innerHeight),v=innerWidth/2,f=innerHeight/2;return{x:a-o/i*(a-(v+e))-v+(r/t>=3&&t*o===innerWidth?0:s?u/2:u),y:c-o/i*(c-(f+n))-f+(d[0]?l/2:l),lastCX:a,lastCY:c}}function V(e,n,t){var r=e%180!=0;return r?[t,n,r]:[n,t,r]}function R(e,n,t){var r=V(t,innerWidth,innerHeight),i=r[0],o=r[1],a=0,c=i,u=o,l=e/n*o,s=n/e*i;return e<i&&n<o?(c=e,u=n):e<i&&n>=o?c=l:e>=i&&n<o||e/n>i/o?u=s:n/e>=3&&!r[2]?a=((u=s)-o)/2:c=l,{width:c,height:u,x:0,y:a,pause:!0}}function A(e,t){var r=t.leading,i=void 0!==r&&r,o=t.maxWait,a=t.wait,u=void 0===a?o||0:a,l=n(e);l.current=e;var s=n(0),d=n(),v=function(){return d.current&&clearTimeout(d.current)},f=c(function(){var e=[].slice.call(arguments),n=Date.now();function t(){s.current=n,v(),l.current.apply(null,e)}var r=s.current,a=n-r;if(0===r&&(i&&t(),s.current=n),void 0!==o){if(a>o)return void t()}else a<u&&(s.current=n);v(),d.current=setTimeout(function(){t(),s.current=0},u)},[u,o,i]);return f.cancel=v,f}var I=function(e,n,t){return F(e,n,t,100,function(e){return e},function(){return F(n,e,t)})},H=function(e){return 1-Math.pow(1-e,4)};function F(e,n,t,r,i,o){void 0===r&&(r=400),void 0===i&&(i=H);var a=n-e;if(0!==a){var c=Date.now(),u=0,l=function(){var n=Math.min(1,(Date.now()-c)/r);t(e+i(n)*a)&&n<1?s():(cancelAnimationFrame(u),n>=1&&o&&o())};s()}function s(){u=requestAnimationFrame(l)}}var D={T:0,L:0,W:0,H:0,FIT:void 0},B=function(){var e=n(!1);return i(function(){return e.current=!0,function(){e.current=!1}},[]),e},O=["className"];function j(n){var t=n.className,r=void 0===t?"":t,i=m(n,O);return e.createElement("div",h({className:"PhotoView__Spinner "+r},i),e.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},e.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),e.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var q=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function z(n){var t=n.src,r=n.loaded,i=n.broken,o=n.className,a=n.onPhotoLoad,c=n.loadingElement,u=n.brokenElement,l=m(n,q),s=B();return t&&!i?e.createElement(e.Fragment,null,e.createElement("img",h({className:"PhotoView__Photo"+(o?" "+o:""),src:t,onLoad:function(e){var n=e.target;s.current&&a({loaded:!0,naturalWidth:n.naturalWidth,naturalHeight:n.naturalHeight})},onError:function(){s.current&&a({broken:!0})},alt:""},l)),!r&&(e.createElement("span",{className:"PhotoView__icon"},c)||e.createElement(j,{className:"PhotoView__icon"}))):u?e.createElement("span",{className:"PhotoView__icon"},"function"==typeof u?u({src:t}):u):null}var Z={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:!0,stopRaf:!0,reach:void 0};function K(t){var r=t.item,o=r.src,a=r.render,c=r.width,l=void 0===c?0:c,s=r.height,d=void 0===s?0:s,v=r.originRef,f=t.visible,m=t.speed,C=t.easing,w=t.wrapClassName,x=t.className,b=t.style,_=t.loadingElement,M=t.brokenElement,Y=t.onPhotoTap,X=t.onMaskTap,L=t.onReachMove,N=t.onReachUp,H=t.onPhotoResize,O=t.isActive,j=t.expose,q=p(Z),K=q[0],U=q[1],G=n(0),J=B(),Q=K.naturalWidth,$=void 0===Q?l:Q,ee=K.naturalHeight,ne=void 0===ee?d:ee,te=K.width,re=void 0===te?l:te,ie=K.height,oe=void 0===ie?d:ie,ae=K.loaded,ce=void 0===ae?!o:ae,ue=K.broken,le=K.x,se=K.y,de=K.touched,ve=K.stopRaf,fe=K.maskTouched,he=K.rotate,me=K.scale,ge=K.CX,pe=K.CY,Ce=K.lastX,we=K.lastY,xe=K.lastCX,ye=K.lastCY,be=K.lastScale,Ee=K.touchTime,ke=K.touchLength,Pe=K.pause,_e=K.reach,Me=g({onScale:function(e){return Ye(E(e))},onRotate:function(e){he!==e&&(j({rotate:e}),U(h({rotate:e},R($,ne,e))))}});function Ye(e,n,t){me!==e&&(j({scale:e}),U(h({scale:e},T(le,se,re,oe,me,e,n,t),e<=1&&{x:0,y:0})))}var Xe=A(function(e,n,t){if(void 0===t&&(t=0),(de||fe)&&O){var r=V(he,re,oe),i=r[0],o=r[1];if(0===t&&0===G.current){var a=Math.abs(e-ge)<=20,c=Math.abs(n-pe)<=20;if(a&&c)return void U({lastCX:e,lastCY:n});G.current=a?n>pe?3:2:1}var u,l=e-xe,s=n-ye;if(0===t){var d=S(l+Ce,me,i,innerWidth)[0],v=S(s+we,me,o,innerHeight);u=function(e,n,t,r){return n&&1===e||"x"===r?"x":t&&e>1||"y"===r?"y":void 0}(G.current,d,v[0],_e),void 0!==u&&L(u,e,n,me)}if("x"===u||fe)return void U({reach:"x"});var f=E(me+(t-ke)/100/2*me,$/re,.2);j({scale:f}),U(h({touchLength:t,reach:u,scale:f},T(le,se,re,oe,me,f,e,n,l,s)))}},{maxWait:8});function Le(e){return!ve&&!de&&(J.current&&U(h({},e,{pause:f})),J.current)}var Ne,We,Se,Te,Ve,Re,Ae,Ie,He=(Ve=function(e){return Le({x:e})},Re=function(e){return Le({y:e})},Ae=function(e){return J.current&&(j({scale:e}),U({scale:e})),!de&&J.current},Ie=g({X:function(e){return Ve(e)},Y:function(e){return Re(e)},S:function(e){return Ae(e)}}),function(e,n,t,r,i,o,a,c,u,l,s){var d=V(l,i,o),v=d[0],f=d[1],h=S(e,c,v,innerWidth),m=h[0],g=h[1],p=S(n,c,f,innerHeight),C=p[0],w=p[1],x=Date.now()-s;if(x>=200||c!==a||Math.abs(u-a)>1){var y=T(e,n,i,o,a,c),b=y.x,E=y.y,k=m?g:b!==e?b:null,P=C?w:E!==n?E:null;return null!==k&&F(e,k,Ie.X),null!==P&&F(n,P,Ie.Y),void(c!==a&&F(a,c,Ie.S))}var _=(e-t)/x,M=(n-r)/x,Y=Math.sqrt(Math.pow(_,2)+Math.pow(M,2)),X=!1,L=!1;!function(e,n){var t,r=e,i=0,o=0,a=function(o){t||(t=o);var a=o-t,l=Math.sign(e),s=-.001*l,d=Math.sign(-r)*Math.pow(r,2)*2e-4,v=r*a+(s+d)*Math.pow(a,2)/2;i+=v,t=o,l*(r+=(s+d)*a)<=0?u():n(i)?c():u()};function c(){o=requestAnimationFrame(a)}function u(){cancelAnimationFrame(o)}c()}(Y,function(t){var r=e+t*(_/Y),i=n+t*(M/Y),o=S(r,a,v,innerWidth),c=o[0],u=o[1],l=S(i,a,f,innerHeight),s=l[0],d=l[1];if(c&&!X&&(X=!0,m?F(r,u,Ie.X):I(u,r+(r-u),Ie.X)),s&&!L&&(L=!0,C?F(i,d,Ie.Y):I(d,i+(i-d),Ie.Y)),X&&L)return!1;var h=X||Ie.X(u),g=L||Ie.Y(d);return h&&g})}),Fe=(Ne=Y,We=function(e,n){_e||Ye(1!==me?1:Math.max(2,$/re),e,n)},Se=n(0),Te=A(function(){Se.current=0,Ne.apply(void 0,[].slice.call(arguments))},{wait:300}),function(){var e=[].slice.call(arguments);Se.current+=1,Te.apply(void 0,e),Se.current>=2&&(Te.cancel(),Se.current=0,We.apply(void 0,e))});function De(e,n){if(G.current=0,(de||fe)&&O){U({touched:!1,maskTouched:!1,pause:!1,stopRaf:!1,reach:void 0});var t=E(me,$/re);if(He(le,se,Ce,we,re,oe,me,t,be,he,Ee),N(e,n),ge===e&&pe===n){if(de)return void Fe(e,n);fe&&X(e,n)}}}function Be(e,n,t){void 0===t&&(t=0),U({touched:!0,CX:e,CY:n,lastCX:e,lastCY:n,lastX:le,lastY:se,lastScale:me,touchLength:t,touchTime:Date.now()})}function Oe(e){U({maskTouched:!0,CX:e.clientX,CY:e.clientY,lastX:le,lastY:se})}P(y?void 0:"mousemove",function(e){e.preventDefault(),Xe(e.clientX,e.clientY)}),P(y?void 0:"mouseup",function(e){De(e.clientX,e.clientY)}),P(y?"touchmove":void 0,function(e){e.preventDefault();var n=W(e);Xe.apply(void 0,n)},{passive:!1}),P(y?"touchend":void 0,function(e){var n=e.changedTouches[0];De(n.clientX,n.clientY)},{passive:!1}),P("resize",A(function(){ce&&!de&&(U(R($,ne,he)),H())},{maxWait:8})),k(function(){O&&j(h({scale:me,rotate:he},Me))},[O]);var je=function(e,t,r,o,a,c,l,s,d,v){var f=function(e,t,r,i,o){var a=n(!1),c=p({lead:!0,scale:r}),u=c[0],l=u.lead,s=u.scale,d=c[1],v=A(function(e){try{return o(!0),d({lead:!1,scale:e}),Promise.resolve()}catch(e){return Promise.reject(e)}},{wait:i});return k(function(){a.current?(o(!1),d({lead:!0}),v(r)):a.current=!0},[r]),l?[e*s,t*s,r/s]:[e*r,t*r,1]}(c,l,s,d,v),h=f[0],m=f[1],C=f[2],w=function(e,t,r,o,a){var c=u(D),l=c[0],s=c[1],d=u(0),v=d[0],f=d[1],h=n(),m=g({OK:function(){return e&&f(4)}});function p(e){a(!1),f(e)}return i(function(){if(h.current||(h.current=Date.now()),r){if(function(e,n){var t=e&&e.current;if(t&&1===t.nodeType){var r=t.getBoundingClientRect();n({T:r.top,L:r.left,W:r.width,H:r.height,FIT:"IMG"===t.tagName?getComputedStyle(t).objectFit:void 0})}}(t,s),e)return Date.now()-h.current<250?(f(1),requestAnimationFrame(function(){f(2),requestAnimationFrame(function(){return p(3)})}),void setTimeout(m.OK,o)):void f(4);p(5)}},[e,r]),[v,l]}(e,t,r,d,v),x=w[0],y=w[1],b=y.W,E=y.FIT,P=innerWidth/2,_=innerHeight/2,M=x<3||x>4;return[M?b?y.L:P:o+(P-c*s/2),M?b?y.T:_:a+(_-l*s/2),h,M&&E?h*(y.H/b):m,0===x?C:M?b/(c*s)||.01:C,M?E?1:0:1,x,E]}(f,v,ce,le,se,re,oe,me,m,function(e){return U({pause:e})}),qe=je[4],ze=je[6],Ze="transform "+m+"ms "+C,Ke={className:x,onMouseDown:y?void 0:function(e){e.stopPropagation(),0===e.button&&Be(e.clientX,e.clientY,0)},onTouchStart:y?function(e){e.stopPropagation(),Be.apply(void 0,W(e))}:void 0,onWheel:function(e){if(!_e){var n=E(me-e.deltaY/100/2,$/re);U({stopRaf:!0}),Ye(n,e.clientX,e.clientY)}},style:{width:je[2]+"px",height:je[3]+"px",opacity:je[5],objectFit:4===ze?void 0:je[7],transform:he?"rotate("+he+"deg)":void 0,transition:ze>2?Ze+", opacity "+m+"ms ease, height "+(ze<4?m/2:ze>4?m:0)+"ms "+C:void 0}};return e.createElement("div",{className:"PhotoView__PhotoWrap"+(w?" "+w:""),style:b,onMouseDown:!y&&O?Oe:void 0,onTouchStart:y&&O?function(e){return Oe(e.touches[0])}:void 0},e.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:"matrix("+qe+", 0, 0, "+qe+", "+je[0]+", "+je[1]+")",transition:de||Pe?void 0:Ze,willChange:O?"transform":void 0}},o?e.createElement(z,h({src:o,loaded:ce,broken:ue},Ke,{onPhotoLoad:function(e){U(h({},e,e.loaded&&R(e.naturalWidth||0,e.naturalHeight||0,he)))},loadingElement:_,brokenElement:M})):a&&a({attrs:Ke,scale:qe,rotate:he})))}var U={x:0,touched:!1,pause:!1,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:!0,minimal:!0,scale:1,rotate:0};function G(r){var i=r.loop,o=void 0===i?3:i,c=r.speed,l=r.easing,s=r.photoClosable,d=r.maskClosable,v=void 0===d||d,f=r.maskOpacity,h=void 0===f?1:f,m=r.pullClosable,C=void 0===m||m,E=r.bannerVisible,_=void 0===E||E,W=r.overlayRender,S=r.toolbarRender,T=r.className,V=r.maskClassName,R=r.photoClassName,A=r.photoWrapClassName,I=r.loadingElement,H=r.brokenElement,F=r.images,D=r.index,B=void 0===D?0:D,O=r.onIndexChange,j=r.visible,q=r.onClose,z=r.afterClose,Z=r.portalContainer,G=p(U),J=G[0],Q=G[1],$=u(0),ee=$[0],ne=$[1],te=J.x,re=J.touched,ie=J.pause,oe=J.lastCX,ae=J.lastCY,ce=J.bg,ue=void 0===ce?h:ce,le=J.lastBg,se=J.overlay,de=J.minimal,ve=J.scale,fe=J.rotate,he=J.onScale,me=J.onRotate,ge=r.hasOwnProperty("index"),pe=ge?B:ee,Ce=ge?O:ne,we=n(pe),xe=F.length,ye=F[pe],be="boolean"==typeof o?o:xe>o,Ee=function(e,r){var i=t(function(e){return!e},!1)[1],o=n(0),c=function(t){var r=n(t);function i(e){r.current=e}return a(function(){!function(n){e?(n(e),o.current=1):o.current=2}(i)},[t]),[r.current,i]}(e),u=c[1];return[c[0],o.current,function(){i(),2===o.current&&(u(!1),r&&r()),o.current=0}]}(j,z),ke=Ee[0],Pe=Ee[1],_e=Ee[2];k(function(){if(ke)return Q({pause:!0,x:pe*-(innerWidth+x)}),void(we.current=pe);Q(U)},[ke]);var Me=g({close:function(e){me&&me(0),Q({overlay:!0,lastBg:ue}),q(e)},changeIndex:function(e,n){void 0===n&&(n=!1);var t=be?we.current+(e-pe):e,r=xe-1,i=b(t,0,r),o=be?t:i,a=innerWidth+x;Q({touched:!1,lastCX:void 0,lastCY:void 0,x:-a*o,pause:n}),we.current=o,Ce&&Ce(be?e<0?r:e>r?0:e:i)}}),Ye=Me.close,Xe=Me.changeIndex;function Le(e){return e?Ye():Q({overlay:!se})}function Ne(){Q({x:-(innerWidth+x)*pe,lastCX:void 0,lastCY:void 0,pause:!0}),we.current=pe}function We(e,n,t,r){"x"===e?function(e){if(void 0!==oe){var n=e-oe,t=n;!be&&(0===pe&&n>0||pe===xe-1&&n<0)&&(t=n/2),Q({touched:!0,lastCX:oe,x:-(innerWidth+x)*we.current+t,pause:!1})}else Q({touched:!0,lastCX:e,x:te,pause:!1})}(n):"y"===e&&function(e,n){if(void 0!==ae){var t=null===h?null:b(h,.01,h-Math.abs(e-ae)/100/4);Q({touched:!0,lastCY:ae,bg:1===n?t:h,minimal:1===n})}else Q({touched:!0,lastCY:e,bg:ue,minimal:!0})}(t,r)}function Se(e,n){var t=e-(null!=oe?oe:e),r=n-(null!=ae?ae:n),i=!1;if(t<-40)Xe(pe+1);else if(t>40)Xe(pe-1);else{var o=-(innerWidth+x)*we.current;Math.abs(r)>100&&de&&C&&(i=!0,Ye()),Q({touched:!1,x:o,lastCX:void 0,lastCY:void 0,bg:h,overlay:!!i||se})}}P("keydown",function(e){if(j)switch(e.key){case"ArrowLeft":Xe(pe-1,!0);break;case"ArrowRight":Xe(pe+1,!0);break;case"Escape":Ye()}});var Te=function(e,n,t){return a(function(){var r=e.length;return t?e.concat(e).concat(e).slice(r+n-1,r+n+2):e.slice(Math.max(n-1,0),Math.min(n+2,r+1))},[e,n,t])}(F,pe,be);if(!ke)return null;var Ve=se&&!Pe,Re=j?ue:le,Ae=he&&me&&{images:F,index:pe,visible:j,onClose:Ye,onIndexChange:Xe,overlayVisible:Ve,overlay:ye&&ye.overlay,scale:ve,rotate:fe,onScale:he,onRotate:me},Ie=c?c(Pe):400,He=l?l(Pe):w,Fe=c?c(3):600,De=l?l(3):w;return e.createElement(M,{className:"PhotoView-Portal"+(Ve?"":" PhotoView-Slider__clean")+(j?"":" PhotoView-Slider__willClose")+(T?" "+T:""),role:"dialog",onClick:function(e){return e.stopPropagation()},container:Z},j&&e.createElement(N,null),e.createElement("div",{className:"PhotoView-Slider__Backdrop"+(V?" "+V:"")+(1===Pe?" PhotoView-Slider__fadeIn":2===Pe?" PhotoView-Slider__fadeOut":""),style:{background:Re?"rgba(45, 60, 78, "+Re+")":void 0,backdropFilter:"blur(2.5px)",transitionTimingFunction:He,transitionDuration:(re?0:Ie)+"ms",animationDuration:Ie+"ms"},onAnimationEnd:_e}),_&&e.createElement("div",{className:"PhotoView-Slider__BannerWrap"},e.createElement("div",{className:"PhotoView-Slider__Counter"},pe+1," / ",xe),e.createElement("div",{className:"PhotoView-Slider__BannerRight"},S&&Ae&&S(Ae),e.createElement(Y,{className:"PhotoView-Slider__toolbarIcon",onClick:Ye}))),Te.map(function(n,t){var r=be||0!==pe?we.current-1+t:pe+t;return e.createElement(K,{key:be?n.key+"/"+n.src+"/"+r:n.key,item:n,speed:Ie,easing:He,visible:j,onReachMove:We,onReachUp:Se,onPhotoTap:function(){return Le(s)},onMaskTap:function(){return Le(v)},wrapClassName:A,className:R,style:{left:(innerWidth+x)*r+"px",transform:"translate3d("+te+"px, 0px, 0)",transition:re||ie?void 0:"transform "+Fe+"ms "+De},loadingElement:I,brokenElement:H,onPhotoResize:Ne,isActive:we.current===r,expose:Q})}),!y&&_&&e.createElement(e.Fragment,null,(be||0!==pe)&&e.createElement("div",{className:"PhotoView-Slider__ArrowLeft",onClick:function(){return Xe(pe-1,!0)}},e.createElement(X,null)),(be||pe+1<xe)&&e.createElement("div",{className:"PhotoView-Slider__ArrowRight",onClick:function(){return Xe(pe+1,!0)}},e.createElement(L,null))),W&&Ae&&e.createElement("div",{className:"PhotoView-Slider__Overlay"},W(Ae)))}var J=["children","onIndexChange","onVisibleChange"],Q={images:[],visible:!1,index:0};function $(t){var r=t.children,i=t.onIndexChange,o=t.onVisibleChange,c=m(t,J),u=p(Q),l=u[0],s=u[1],d=n(0),v=l.images,f=l.visible,w=l.index,x=g({nextId:function(){return d.current+=1},update:function(e){var n=v.findIndex(function(n){return n.key===e.key});if(n>-1){var t=v.slice();return t.splice(n,1,e),void s({images:t})}s(function(n){return{images:n.images.concat(e)}})},remove:function(e){s(function(n){var t=n.images.filter(function(n){return n.key!==e});return{images:t,index:Math.min(t.length-1,w)}})},show:function(e){var n=v.findIndex(function(n){return n.key===e});s({visible:!0,index:n}),o&&o(!0,n,l)}}),y=g({close:function(){s({visible:!1}),o&&o(!1,w,l)},changeIndex:function(e){s({index:e}),i&&i(e,l)}}),b=a(function(){return h({},l,x)},[l,x]);return e.createElement(C.Provider,{value:b},r,e.createElement(G,h({images:v,visible:f,index:w,onIndexChange:y.changeIndex,onClose:y.close},c)))}var ee=function(e){var t,r,o=e.src,c=e.render,u=e.overlay,f=e.width,m=e.height,p=e.triggers,w=void 0===p?["onClick"]:p,x=e.children,y=l(C),b=(t=function(){return y.nextId()},(r=n({sign:!1,fn:void 0}).current).sign||(r.sign=!0,r.fn=t()),r.fn),E=n(null);s(null==x?void 0:x.ref,function(){return E.current}),i(function(){return function(){y.remove(b)}},[]);var k=g({render:function(e){return c&&c(e)},show:function(e,n){y.show(b),function(e,n){if(x){var t=x.props[e];t&&t(n)}}(e,n)}}),P=a(function(){var e={};return w.forEach(function(n){e[n]=k.show.bind(null,n)}),e},[]);return i(function(){y.update({key:b,src:o,originRef:E,render:k.render,overlay:u,width:f,height:m})},[o]),x?d.only(v(x,h({},P,{ref:E}))):null};export{$ as PhotoProvider,G as PhotoSlider,ee as PhotoView};
//# sourceMappingURL=react-photo-view.module.js.map