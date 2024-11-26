var e=require("react"),n=require("react-dom");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=/*#__PURE__*/t(e);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(null,arguments)}function o(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t}function a(n){var t=e.useRef({fn:n,curr:void 0}).current;if(t.fn=n,!t.curr){var r=Object.create(null);Object.keys(n).forEach(function(e){r[e]=function(){var n;return(n=t.fn[e]).call.apply(n,[t.fn].concat([].slice.call(arguments)))}}),t.curr=r}return t.curr}function u(n){return e.useReducer(function(e,n){return i({},e,"function"==typeof n?n(e):n)},n)}var c=e.createContext(void 0),l="cubic-bezier(0.25, 0.8, 0.25, 1)",s=20,d="undefined"!=typeof window&&"ontouchstart"in window,f=function(e,n,t){return Math.max(Math.min(e,t),n)},v=function(e,n,t){return void 0===n&&(n=0),void 0===t&&(t=0),f(e,1*(1-t),Math.max(6,n)*(1+t))},h="undefined"==typeof window||/ServerSideRendering/.test(navigator&&navigator.userAgent)?e.useEffect:e.useLayoutEffect;function m(n,t,r){var i=e.useRef(t);i.current=t,e.useEffect(function(){function e(e){i.current(e)}return n&&window.addEventListener(n,e,r),function(){n&&window.removeEventListener(n,e)}},[n])}var g=["container"];function C(e){var t=e.container,a=void 0===t?document.body:t,u=o(e,g);return n.createPortal(r.default.createElement("div",i({},u)),a)}function p(e){return r.default.createElement("svg",i({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.default.createElement("path",{d:"M25.7081 24.2931C25.801 24.386 25.8747 24.4963 25.9249 24.6177C25.9752 24.7391 26.0011 24.8692 26.0011 25.0006C26.0011 25.132 25.9752 25.2621 25.9249 25.3835C25.8747 25.5048 25.801 25.6151 25.7081 25.7081C25.6151 25.801 25.5048 25.8747 25.3835 25.9249C25.2621 25.9752 25.132 26.0011 25.0006 26.0011C24.8692 26.0011 24.7391 25.9752 24.6177 25.9249C24.4963 25.8747 24.386 25.801 24.2931 25.7081L16.0006 17.4143L7.70806 25.7081C7.52042 25.8957 7.26592 26.0011 7.00056 26.0011C6.73519 26.0011 6.4807 25.8957 6.29306 25.7081C6.10542 25.5204 6 25.2659 6 25.0006C6 24.7352 6.10542 24.4807 6.29306 24.2931L14.5868 16.0006L6.29306 7.70806C6.10542 7.52042 6 7.26592 6 7.00056C6 6.73519 6.10542 6.4807 6.29306 6.29306C6.4807 6.10542 6.73519 6 7.00056 6C7.26592 6 7.52042 6.10542 7.70806 6.29306L16.0006 14.5868L24.2931 6.29306C24.4807 6.10542 24.7352 6 25.0006 6C25.2659 6 25.5204 6.10542 25.7081 6.29306C25.8957 6.4807 26.0011 6.73519 26.0011 7.00056C26.0011 7.26592 25.8957 7.52042 25.7081 7.70806L17.4143 16.0006L25.7081 24.2931Z",fill:"white"}))}function w(e){return r.default.createElement("svg",i({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.default.createElement("path",{d:"M20.7083 25.2931C20.8012 25.386 20.8749 25.4963 20.9252 25.6177C20.9755 25.7391 21.0013 25.8692 21.0013 26.0006C21.0013 26.132 20.9755 26.2621 20.9252 26.3835C20.8749 26.5048 20.8012 26.6151 20.7083 26.7081C20.6154 26.801 20.5051 26.8747 20.3837 26.9249C20.2623 26.9752 20.1322 27.0011 20.0008 27.0011C19.8694 27.0011 19.7393 26.9752 19.6179 26.9249C19.4965 26.8747 19.3862 26.801 19.2933 26.7081L9.29329 16.7081C9.20031 16.6152 9.12655 16.5049 9.07623 16.3835C9.0259 16.2621 9 16.132 9 16.0006C9 15.8691 9.0259 15.739 9.07623 15.6176C9.12655 15.4962 9.20031 15.3859 9.29329 15.2931L19.2933 5.29306C19.4809 5.10542 19.7354 5 20.0008 5C20.2662 5 20.5206 5.10542 20.7083 5.29306C20.8959 5.4807 21.0013 5.73519 21.0013 6.00056C21.0013 6.26592 20.8959 6.52042 20.7083 6.70806L11.4145 16.0006L20.7083 25.2931Z",fill:"white"}))}function x(e){return r.default.createElement("svg",i({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.default.createElement("path",{d:"M22.7081 15.2919L12.7081 5.29194C12.6151 5.19903 12.5048 5.12533 12.3835 5.07505C12.2621 5.02477 12.132 4.99889 12.0006 4.99889C11.8692 4.99889 11.7391 5.02477 11.6177 5.07505C11.4963 5.12533 11.386 5.19903 11.2931 5.29194C11.2001 5.38485 11.1264 5.49515 11.0762 5.61655C11.0259 5.73794 11 5.86805 11 5.99944C11 6.13084 11.0259 6.26095 11.0762 6.38234C11.1264 6.50373 11.2001 6.61403 11.2931 6.70694L20.5868 15.9994L11.2931 25.2919C11.1054 25.4796 11 25.7341 11 25.9994C11 26.2648 11.1054 26.5193 11.2931 26.7069C11.4807 26.8946 11.7352 27 12.0006 27C12.2659 27 12.5204 26.8946 12.7081 26.7069L22.7081 16.7069C22.801 16.6141 22.8748 16.5038 22.9251 16.3824C22.9754 16.261 23.0013 16.1309 23.0013 15.9994C23.0013 15.868 22.9754 15.7379 22.9251 15.6165C22.8748 15.4951 22.801 15.3848 22.7081 15.2919Z",fill:"white"}))}function y(){return e.useEffect(function(){var e=document.body.style,n=e.overflow;return e.overflow="hidden",function(){e.overflow=n}},[]),null}function b(e){var n=e.touches[0],t=n.clientX,r=n.clientY;if(e.touches.length>=2){var i=e.touches[1],o=i.clientX,a=i.clientY;return[(t+o)/2,(r+a)/2,Math.sqrt(Math.pow(o-t,2)+Math.pow(a-r,2))]}return[t,r,0]}var E=function(e,n,t,r){var i,o=t*n,a=(o-r)/2,u=e;return o<=r?(i=1,u=0):e>0&&a-e<=0?(i=2,u=a):e<0&&a+e<=0&&(i=3,u=-a),[i,u]};function P(e,n,t,r,i,o,a,u,c,l){void 0===a&&(a=innerWidth/2),void 0===u&&(u=innerHeight/2),void 0===c&&(c=0),void 0===l&&(l=0);var s=E(e,o,t,innerWidth)[0],d=E(n,o,r,innerHeight),f=innerWidth/2,v=innerHeight/2;return{x:a-o/i*(a-(f+e))-f+(r/t>=3&&t*o===innerWidth?0:s?c/2:c),y:u-o/i*(u-(v+n))-v+(d[0]?l/2:l),lastCX:a,lastCY:u}}function k(e,n,t){var r=e%180!=0;return r?[t,n,r]:[n,t,r]}function M(e,n,t){var r=k(t,innerWidth,innerHeight),i=r[0],o=r[1],a=0,u=i,c=o,l=e/n*o,s=n/e*i;return e<i&&n<o?(u=e,c=n):e<i&&n>=o?u=l:e>=i&&n<o||e/n>i/o?c=s:n/e>=3&&!r[2]?a=((c=s)-o)/2:u=l,{width:u,height:c,x:0,y:a,pause:!0}}function R(n,t){var r=t.leading,i=void 0!==r&&r,o=t.maxWait,a=t.wait,u=void 0===a?o||0:a,c=e.useRef(n);c.current=n;var l=e.useRef(0),s=e.useRef(),d=function(){return s.current&&clearTimeout(s.current)},f=e.useCallback(function(){var e=[].slice.call(arguments),n=Date.now();function t(){l.current=n,d(),c.current.apply(null,e)}var r=l.current,a=n-r;if(0===r&&(i&&t(),l.current=n),void 0!==o){if(a>o)return void t()}else a<u&&(l.current=n);d(),s.current=setTimeout(function(){t(),l.current=0},u)},[u,o,i]);return f.cancel=d,f}var _=function(e,n,t){return Y(e,n,t,100,function(e){return e},function(){return Y(n,e,t)})},L=function(e){return 1-Math.pow(1-e,4)};function Y(e,n,t,r,i,o){void 0===r&&(r=400),void 0===i&&(i=L);var a=n-e;if(0!==a){var u=Date.now(),c=0,l=function(){var n=Math.min(1,(Date.now()-u)/r);t(e+i(n)*a)&&n<1?s():(cancelAnimationFrame(c),n>=1&&o&&o())};s()}function s(){c=requestAnimationFrame(l)}}var N={T:0,L:0,W:0,H:0,FIT:void 0},X=function(){var n=e.useRef(!1);return e.useEffect(function(){return n.current=!0,function(){n.current=!1}},[]),n},S=["className"];function W(e){var n=e.className,t=void 0===n?"":n,a=o(e,S);return r.default.createElement("div",i({className:"PhotoView__Spinner "+t},a),r.default.createElement("svg",{viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},r.default.createElement("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.default.createElement("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})))}var T=["src","loaded","broken","className","onPhotoLoad","loadingElement","brokenElement"];function V(e){var n=e.src,t=e.loaded,a=e.broken,u=e.className,c=e.onPhotoLoad,l=e.loadingElement,s=e.brokenElement,d=o(e,T),f=X();return n&&!a?r.default.createElement(r.default.Fragment,null,r.default.createElement("img",i({className:"PhotoView__Photo"+(u?" "+u:""),src:n,onLoad:function(e){var n=e.target;f.current&&c({loaded:!0,naturalWidth:n.naturalWidth,naturalHeight:n.naturalHeight})},onError:function(){f.current&&c({broken:!0})},alt:""},d)),!t&&(r.default.createElement("span",{className:"PhotoView__icon"},l)||r.default.createElement(W,{className:"PhotoView__icon"}))):s?r.default.createElement("span",{className:"PhotoView__icon"},"function"==typeof s?s({src:n}):s):null}var A={naturalWidth:void 0,naturalHeight:void 0,width:void 0,height:void 0,loaded:void 0,broken:!1,x:0,y:0,touched:!1,maskTouched:!1,rotate:0,scale:1,CX:0,CY:0,lastX:0,lastY:0,lastCX:0,lastCY:0,lastScale:1,touchTime:0,touchLength:0,pause:!0,stopRaf:!0,reach:void 0};function I(n){var t=n.item,o=t.src,c=t.render,l=t.width,s=void 0===l?0:l,f=t.height,g=void 0===f?0:f,C=t.originRef,p=n.visible,w=n.speed,x=n.easing,y=n.wrapClassName,L=n.className,S=n.style,W=n.loadingElement,T=n.brokenElement,I=n.onPhotoTap,H=n.onMaskTap,F=n.onReachMove,D=n.onReachUp,B=n.onPhotoResize,O=n.isActive,j=n.expose,q=u(A),z=q[0],Z=q[1],K=e.useRef(0),U=X(),G=z.naturalWidth,J=void 0===G?s:G,Q=z.naturalHeight,$=void 0===Q?g:Q,ee=z.width,ne=void 0===ee?s:ee,te=z.height,re=void 0===te?g:te,ie=z.loaded,oe=void 0===ie?!o:ie,ae=z.broken,ue=z.x,ce=z.y,le=z.touched,se=z.stopRaf,de=z.maskTouched,fe=z.rotate,ve=z.scale,he=z.CX,me=z.CY,ge=z.lastX,Ce=z.lastY,pe=z.lastCX,we=z.lastCY,xe=z.lastScale,ye=z.touchTime,be=z.touchLength,Ee=z.pause,Pe=z.reach,ke=a({onScale:function(e){return Me(v(e))},onRotate:function(e){fe!==e&&(j({rotate:e}),Z(i({rotate:e},M(J,$,e))))}});function Me(e,n,t){ve!==e&&(j({scale:e}),Z(i({scale:e},P(ue,ce,ne,re,ve,e,n,t),e<=1&&{x:0,y:0})))}var Re=R(function(e,n,t){if(void 0===t&&(t=0),(le||de)&&O){var r=k(fe,ne,re),o=r[0],a=r[1];if(0===t&&0===K.current){var u=Math.abs(e-he)<=20,c=Math.abs(n-me)<=20;if(u&&c)return void Z({lastCX:e,lastCY:n});K.current=u?n>me?3:2:1}var l,s=e-pe,d=n-we;if(0===t){var f=E(s+ge,ve,o,innerWidth)[0],h=E(d+Ce,ve,a,innerHeight);l=function(e,n,t,r){return n&&1===e||"x"===r?"x":t&&e>1||"y"===r?"y":void 0}(K.current,f,h[0],Pe),void 0!==l&&F(l,e,n,ve)}if("x"===l||de)return void Z({reach:"x"});var m=v(ve+(t-be)/100/2*ve,J/ne,.2);j({scale:m}),Z(i({touchLength:t,reach:l,scale:m},P(ue,ce,ne,re,ve,m,e,n,s,d)))}},{maxWait:8});function _e(e){return!se&&!le&&(U.current&&Z(i({},e,{pause:p})),U.current)}var Le,Ye,Ne,Xe,Se,We,Te,Ve,Ae=(Se=function(e){return _e({x:e})},We=function(e){return _e({y:e})},Te=function(e){return U.current&&(j({scale:e}),Z({scale:e})),!le&&U.current},Ve=a({X:function(e){return Se(e)},Y:function(e){return We(e)},S:function(e){return Te(e)}}),function(e,n,t,r,i,o,a,u,c,l,s){var d=k(l,i,o),f=d[0],v=d[1],h=E(e,u,f,innerWidth),m=h[0],g=h[1],C=E(n,u,v,innerHeight),p=C[0],w=C[1],x=Date.now()-s;if(x>=200||u!==a||Math.abs(c-a)>1){var y=P(e,n,i,o,a,u),b=y.x,M=y.y,R=m?g:b!==e?b:null,L=p?w:M!==n?M:null;return null!==R&&Y(e,R,Ve.X),null!==L&&Y(n,L,Ve.Y),void(u!==a&&Y(a,u,Ve.S))}var N=(e-t)/x,X=(n-r)/x,S=Math.sqrt(Math.pow(N,2)+Math.pow(X,2)),W=!1,T=!1;!function(e,n){var t,r=e,i=0,o=0,a=function(o){t||(t=o);var a=o-t,l=Math.sign(e),s=-.001*l,d=Math.sign(-r)*Math.pow(r,2)*2e-4,f=r*a+(s+d)*Math.pow(a,2)/2;i+=f,t=o,l*(r+=(s+d)*a)<=0?c():n(i)?u():c()};function u(){o=requestAnimationFrame(a)}function c(){cancelAnimationFrame(o)}u()}(S,function(t){var r=e+t*(N/S),i=n+t*(X/S),o=E(r,a,f,innerWidth),u=o[0],c=o[1],l=E(i,a,v,innerHeight),s=l[0],d=l[1];if(u&&!W&&(W=!0,m?Y(r,c,Ve.X):_(c,r+(r-c),Ve.X)),s&&!T&&(T=!0,p?Y(i,d,Ve.Y):_(d,i+(i-d),Ve.Y)),W&&T)return!1;var h=W||Ve.X(c),g=T||Ve.Y(d);return h&&g})}),Ie=(Le=I,Ye=function(e,n){Pe||Me(1!==ve?1:Math.max(2,J/ne),e,n)},Ne=e.useRef(0),Xe=R(function(){Ne.current=0,Le.apply(void 0,[].slice.call(arguments))},{wait:300}),function(){var e=[].slice.call(arguments);Ne.current+=1,Xe.apply(void 0,e),Ne.current>=2&&(Xe.cancel(),Ne.current=0,Ye.apply(void 0,e))});function He(e,n){if(K.current=0,(le||de)&&O){Z({touched:!1,maskTouched:!1,pause:!1,stopRaf:!1,reach:void 0});var t=v(ve,J/ne);if(Ae(ue,ce,ge,Ce,ne,re,ve,t,xe,fe,ye),D(e,n),he===e&&me===n){if(le)return void Ie(e,n);de&&H(e,n)}}}function Fe(e,n,t){void 0===t&&(t=0),Z({touched:!0,CX:e,CY:n,lastCX:e,lastCY:n,lastX:ue,lastY:ce,lastScale:ve,touchLength:t,touchTime:Date.now()})}function De(e){Z({maskTouched:!0,CX:e.clientX,CY:e.clientY,lastX:ue,lastY:ce})}m(d?void 0:"mousemove",function(e){e.preventDefault(),Re(e.clientX,e.clientY)}),m(d?void 0:"mouseup",function(e){He(e.clientX,e.clientY)}),m(d?"touchmove":void 0,function(e){e.preventDefault();var n=b(e);Re.apply(void 0,n)},{passive:!1}),m(d?"touchend":void 0,function(e){var n=e.changedTouches[0];He(n.clientX,n.clientY)},{passive:!1}),m("resize",R(function(){oe&&!le&&(Z(M(J,$,fe)),B())},{maxWait:8})),h(function(){O&&j(i({scale:ve,rotate:fe},ke))},[O]);var Be=function(n,t,r,i,o,c,l,s,d,f){var v=function(n,t,r,i,o){var a=e.useRef(!1),c=u({lead:!0,scale:r}),l=c[0],s=l.lead,d=l.scale,f=c[1],v=R(function(e){try{return o(!0),f({lead:!1,scale:e}),Promise.resolve()}catch(e){return Promise.reject(e)}},{wait:i});return h(function(){a.current?(o(!1),f({lead:!0}),v(r)):a.current=!0},[r]),s?[n*d,t*d,r/d]:[n*r,t*r,1]}(c,l,s,d,f),m=v[0],g=v[1],C=v[2],p=function(n,t,r,i,o){var u=e.useState(N),c=u[0],l=u[1],s=e.useState(0),d=s[0],f=s[1],v=e.useRef(),h=a({OK:function(){return n&&f(4)}});function m(e){o(!1),f(e)}return e.useEffect(function(){if(v.current||(v.current=Date.now()),r){if(function(e,n){var t=e&&e.current;if(t&&1===t.nodeType){var r=t.getBoundingClientRect();n({T:r.top,L:r.left,W:r.width,H:r.height,FIT:"IMG"===t.tagName?getComputedStyle(t).objectFit:void 0})}}(t,l),n)return Date.now()-v.current<250?(f(1),requestAnimationFrame(function(){f(2),requestAnimationFrame(function(){return m(3)})}),void setTimeout(h.OK,i)):void f(4);m(5)}},[n,r]),[d,c]}(n,t,r,d,f),w=p[0],x=p[1],y=x.W,b=x.FIT,E=innerWidth/2,P=innerHeight/2,k=w<3||w>4;return[k?y?x.L:E:i+(E-c*s/2),k?y?x.T:P:o+(P-l*s/2),m,k&&b?m*(x.H/y):g,0===w?C:k?y/(c*s)||.01:C,k?b?1:0:1,w,b]}(p,C,oe,ue,ce,ne,re,ve,w,function(e){return Z({pause:e})}),Oe=Be[4],je=Be[6],qe="transform "+w+"ms "+x,ze={className:L,onMouseDown:d?void 0:function(e){e.stopPropagation(),0===e.button&&Fe(e.clientX,e.clientY,0)},onTouchStart:d?function(e){e.stopPropagation(),Fe.apply(void 0,b(e))}:void 0,onWheel:function(e){if(!Pe){var n=v(ve-e.deltaY/100/2,J/ne);Z({stopRaf:!0}),Me(n,e.clientX,e.clientY)}},style:{width:Be[2]+"px",height:Be[3]+"px",opacity:Be[5],objectFit:4===je?void 0:Be[7],transform:fe?"rotate("+fe+"deg)":void 0,transition:je>2?qe+", opacity "+w+"ms ease, height "+(je<4?w/2:je>4?w:0)+"ms "+x:void 0}};return r.default.createElement("div",{className:"PhotoView__PhotoWrap"+(y?" "+y:""),style:S,onMouseDown:!d&&O?De:void 0,onTouchStart:d&&O?function(e){return De(e.touches[0])}:void 0},r.default.createElement("div",{className:"PhotoView__PhotoBox",style:{transform:"matrix("+Oe+", 0, 0, "+Oe+", "+Be[0]+", "+Be[1]+")",transition:le||Ee?void 0:qe,willChange:O?"transform":void 0}},o?r.default.createElement(V,i({src:o,loaded:oe,broken:ae},ze,{onPhotoLoad:function(e){Z(i({},e,e.loaded&&M(e.naturalWidth||0,e.naturalHeight||0,fe)))},loadingElement:W,brokenElement:T})):c&&c({attrs:ze,scale:Oe,rotate:fe})))}var H={x:0,touched:!1,pause:!1,lastCX:void 0,lastCY:void 0,bg:void 0,lastBg:void 0,overlay:!0,minimal:!0,scale:1,rotate:0};function F(n){var t=n.loop,i=void 0===t?3:t,o=n.speed,c=n.easing,v=n.photoClosable,g=n.maskClosable,b=void 0===g||g,E=n.maskOpacity,P=void 0===E?1:E,k=n.pullClosable,M=void 0===k||k,R=n.bannerVisible,_=void 0===R||R,L=n.overlayRender,Y=n.toolbarRender,N=n.className,X=n.maskClassName,S=n.photoClassName,W=n.photoWrapClassName,T=n.bannerClassName,V=n.arrowLeftClassName,A=n.arrowRightClassName,F=n.loadingElement,D=n.brokenElement,B=n.images,O=n.index,j=void 0===O?0:O,q=n.onIndexChange,z=n.visible,Z=n.onClose,K=n.afterClose,U=n.portalContainer,G=u(H),J=G[0],Q=G[1],$=e.useState(0),ee=$[0],ne=$[1],te=J.x,re=J.touched,ie=J.pause,oe=J.lastCX,ae=J.lastCY,ue=J.bg,ce=void 0===ue?P:ue,le=J.lastBg,se=J.overlay,de=J.minimal,fe=J.scale,ve=J.rotate,he=J.onScale,me=J.onRotate,ge=n.hasOwnProperty("index"),Ce=ge?j:ee,pe=ge?q:ne,we=e.useRef(Ce),xe=B.length,ye=B[Ce],be="boolean"==typeof i?i:xe>i,Ee=function(n,t){var r=e.useReducer(function(e){return!e},!1)[1],i=e.useRef(0),o=function(t){var r=e.useRef(t);function o(e){r.current=e}return e.useMemo(function(){!function(e){n?(e(n),i.current=1):i.current=2}(o)},[t]),[r.current,o]}(n),a=o[1];return[o[0],i.current,function(){r(),2===i.current&&(a(!1),t&&t()),i.current=0}]}(z,K),Pe=Ee[0],ke=Ee[1],Me=Ee[2];h(function(){if(Pe)return Q({pause:!0,x:Ce*-(innerWidth+s)}),void(we.current=Ce);Q(H)},[Pe]);var Re=a({close:function(e){me&&me(0),Q({overlay:!0,lastBg:ce}),Z(e)},changeIndex:function(e,n){void 0===n&&(n=!1);var t=be?we.current+(e-Ce):e,r=xe-1,i=f(t,0,r),o=be?t:i,a=innerWidth+s;Q({touched:!1,lastCX:void 0,lastCY:void 0,x:-a*o,pause:n}),we.current=o,pe&&pe(be?e<0?r:e>r?0:e:i)}}),_e=Re.close,Le=Re.changeIndex;function Ye(e){return e?_e():Q({overlay:!se})}function Ne(){Q({x:-(innerWidth+s)*Ce,lastCX:void 0,lastCY:void 0,pause:!0}),we.current=Ce}function Xe(e,n,t,r){"x"===e?function(e){if(void 0!==oe){var n=e-oe,t=n;!be&&(0===Ce&&n>0||Ce===xe-1&&n<0)&&(t=n/2),Q({touched:!0,lastCX:oe,x:-(innerWidth+s)*we.current+t,pause:!1})}else Q({touched:!0,lastCX:e,x:te,pause:!1})}(n):"y"===e&&function(e,n){if(void 0!==ae){var t=null===P?null:f(P,.01,P-Math.abs(e-ae)/100/4);Q({touched:!0,lastCY:ae,bg:1===n?t:P,minimal:1===n})}else Q({touched:!0,lastCY:e,bg:ce,minimal:!0})}(t,r)}function Se(e,n){var t=e-(null!=oe?oe:e),r=n-(null!=ae?ae:n),i=!1;if(t<-40)Le(Ce+1);else if(t>40)Le(Ce-1);else{var o=-(innerWidth+s)*we.current;Math.abs(r)>100&&de&&M&&(i=!0,_e()),Q({touched:!1,x:o,lastCX:void 0,lastCY:void 0,bg:P,overlay:!!i||se})}}m("keydown",function(e){if(z)switch(e.key){case"ArrowLeft":Le(Ce-1,!0);break;case"ArrowRight":Le(Ce+1,!0);break;case"Escape":_e()}});var We=function(n,t,r){return e.useMemo(function(){var e=n.length;return r?n.concat(n).concat(n).slice(e+t-1,e+t+2):n.slice(Math.max(t-1,0),Math.min(t+2,e+1))},[n,t,r])}(B,Ce,be);if(!Pe)return null;var Te=se&&!ke,Ve=z?ce:le,Ae=he&&me&&{images:B,index:Ce,visible:z,onClose:_e,onIndexChange:Le,overlayVisible:Te,overlay:ye&&ye.overlay,scale:fe,rotate:ve,onScale:he,onRotate:me},Ie=o?o(ke):400,He=c?c(ke):l,Fe=o?o(3):600,De=c?c(3):l;return r.default.createElement(C,{className:"PhotoView-Portal"+(Te?"":" PhotoView-Slider__clean")+(z?"":" PhotoView-Slider__willClose")+(N?" "+N:""),role:"dialog",onClick:function(e){return e.stopPropagation()},container:U},z&&r.default.createElement(y,null),r.default.createElement("div",{className:"PhotoView-Slider__Backdrop"+(X?" "+X:"")+(1===ke?" PhotoView-Slider__fadeIn":2===ke?" PhotoView-Slider__fadeOut":""),style:{background:Ve?"rgba(45, 60, 78, "+Ve+")":void 0,backdropFilter:"blur(2.5px)",transitionTimingFunction:He,transitionDuration:(re?0:Ie)+"ms",animationDuration:Ie+"ms"},onAnimationEnd:Me}),_&&r.default.createElement("div",{className:"PhotoView-Slider__BannerWrap"+(T?" "+T:"")},r.default.createElement("div",{className:"PhotoView-Slider__Counter"},Ce+1,"/",xe),r.default.createElement("div",{className:"PhotoView-Slider__BannerRight"},Y&&Ae&&Y(Ae),r.default.createElement(p,{className:"PhotoView-Slider__toolbarIcon",onClick:_e}))),We.map(function(e,n){var t=be||0!==Ce?we.current-1+n:Ce+n;return r.default.createElement(I,{key:be?e.key+"/"+e.src+"/"+t:e.key,item:e,speed:Ie,easing:He,visible:z,onReachMove:Xe,onReachUp:Se,onPhotoTap:function(){return Ye(v)},onMaskTap:function(){return Ye(b)},wrapClassName:W,className:S,style:{left:(innerWidth+s)*t+"px",transform:"translate3d("+te+"px, 0px, 0)",transition:re||ie?void 0:"transform "+Fe+"ms "+De},loadingElement:F,brokenElement:D,onPhotoResize:Ne,isActive:we.current===t,expose:Q})}),!d&&_&&r.default.createElement(r.default.Fragment,null,(be||0!==Ce)&&r.default.createElement("div",{className:"PhotoView-Slider__ArrowLeft"+(V?" "+V:""),onClick:function(){return Le(Ce-1,!0)}},r.default.createElement(w,null)),(be||Ce+1<xe)&&r.default.createElement("div",{className:"PhotoView-Slider__ArrowRight"+(A?" "+A:""),onClick:function(){return Le(Ce+1,!0)}},r.default.createElement(x,null))),L&&Ae&&r.default.createElement("div",{className:"PhotoView-Slider__Overlay"},L(Ae)))}var D=["children","onIndexChange","onVisibleChange"],B={images:[],visible:!1,index:0};exports.PhotoProvider=function(n){var t=n.children,l=n.onIndexChange,s=n.onVisibleChange,d=o(n,D),f=u(B),v=f[0],h=f[1],m=e.useRef(0),g=v.images,C=v.visible,p=v.index,w=a({nextId:function(){return m.current+=1},update:function(e){var n=g.findIndex(function(n){return n.key===e.key});if(n>-1){var t=g.slice();return t.splice(n,1,e),void h({images:t})}h(function(n){return{images:n.images.concat(e)}})},remove:function(e){h(function(n){var t=n.images.filter(function(n){return n.key!==e});return{images:t,index:Math.min(t.length-1,p)}})},show:function(e){var n=g.findIndex(function(n){return n.key===e});h({visible:!0,index:n}),s&&s(!0,n,v)}}),x=a({close:function(){h({visible:!1}),s&&s(!1,p,v)},changeIndex:function(e){h({index:e}),l&&l(e,v)}}),y=e.useMemo(function(){return i({},v,w)},[v,w]);return r.default.createElement(c.Provider,{value:y},t,r.default.createElement(F,i({images:g,visible:C,index:p,onIndexChange:x.changeIndex,onClose:x.close},d)))},exports.PhotoSlider=F,exports.PhotoView=function(n){var t,r,o=n.src,u=n.render,l=n.overlay,s=n.width,d=n.height,f=n.triggers,v=void 0===f?["onClick"]:f,h=n.children,m=e.useContext(c),g=(t=function(){return m.nextId()},(r=e.useRef({sign:!1,fn:void 0}).current).sign||(r.sign=!0,r.fn=t()),r.fn),C=e.useRef(null);e.useImperativeHandle(null==h?void 0:h.ref,function(){return C.current}),e.useEffect(function(){return function(){m.remove(g)}},[]);var p=a({render:function(e){return u&&u(e)},show:function(e,n){m.show(g),function(e,n){if(h){var t=h.props[e];t&&t(n)}}(e,n)}}),w=e.useMemo(function(){var e={};return v.forEach(function(n){e[n]=p.show.bind(null,n)}),e},[]);return e.useEffect(function(){m.update({key:g,src:o,originRef:C,render:p.render,overlay:l,width:s,height:d})},[o]),h?e.Children.only(e.cloneElement(h,i({},w,{ref:C}))):null};
//# sourceMappingURL=react-photo-view.js.map
