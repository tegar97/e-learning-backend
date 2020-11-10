(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[15],{174:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return l}));var r=e(6),i=e(7);function a(){var n=Object(r.a)(["\n    font-size: 1.3rem;\n    color: rgba(0,0,0,.5);\n    text-transform: capitalize;\n\n"]);return a=function(){return n},n}function c(){var n=Object(r.a)(["\n    font-size:  ",";\n    font-weight : ",";\n\n\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n    color: ","; ;\n    font-size:  ",";\n    font-weight : ",";\n\n    text-transform: uppercase;\n\n"]);return u=function(){return n},n}var o=i.b.h1(u(),(function(n){return n.color||"var(--color-primary)"}),(function(n){return n.size||"2.5rem"}),(function(n){return n.bold||400})),l=i.b.p(c(),(function(n){return n.size||"1.3rem"}),(function(n){return n.bold||400}));i.b.div(a())},175:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e(0),i=e(193);function a(n,t){return r.useMemo((function(){return null==n&&null==t?null:function(e){Object(i.a)(n,e),Object(i.a)(t,e)}}),[n,t])}},189:function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var r=e(0),i=e(79),a=!0,c=!1,u=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(n){n.metaKey||n.altKey||n.ctrlKey||(a=!0)}function d(){a=!1}function s(){"hidden"===this.visibilityState&&c&&(a=!0)}function f(n){var t=n.target;try{return t.matches(":focus-visible")}catch(e){}return a||function(n){var t=n.type,e=n.tagName;return!("INPUT"!==e||!o[t]||n.readOnly)||"TEXTAREA"===e&&!n.readOnly||!!n.isContentEditable}(t)}function m(){c=!0,window.clearTimeout(u),u=window.setTimeout((function(){c=!1}),100)}function b(){return{isFocusVisible:f,onBlurVisible:m,ref:r.useCallback((function(n){var t,e=i.findDOMNode(n);null!=e&&((t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",d,!0),t.addEventListener("pointerdown",d,!0),t.addEventListener("touchstart",d,!0),t.addEventListener("visibilitychange",s,!0))}),[])}}},193:function(n,t,e){"use strict";function r(n,t){"function"===typeof n?n(t):n&&(n.current=t)}e.d(t,"a",(function(){return r}))},251:function(n,t,e){"use strict";var r=e(0),i=e.n(r);t.a=i.a.createContext(null)},257:function(n,t,e){"use strict";var r=e(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e(0)),a=(0,r(e(38)).default)(i.default.createElement("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"}),"Class");t.default=a},321:function(n,t,e){"use strict";var r=e(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e(0)),a=(0,r(e(38)).default)(i.default.createElement("path",{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}),"HelpOutline");t.default=a},412:function(n,t,e){"use strict";e.r(t);var r=e(3),i=(e(0),e(321)),a=e.n(i),c=e(416),u=e(6),o=e(7);function l(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr ;\n    grid-gap: 15px;\n    padding: 1rem 0;\n    margin-top: 1rem;\n    @media screen and (max-width: 900px) {\n    display: grid;\n    grid-template-columns: 1fr ;\n    grid-gap: 1\n  }\n\n"]);return l=function(){return n},n}function d(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column ;\n"]);return d=function(){return n},n}var s=o.b.div(d()),f=o.b.div(l()),m=e(174);function b(){var n=Object(u.a)(["\n    margin-top: 1rem;\n    background-color: var(--color-primary);\n    padding: 1.5rem;\n"]);return b=function(){return n},n}function v(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    background-color: #fff;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.04);\n    padding: 1.5rem;\n    border-radius: 10px;\n    align-items: center;\n\n\n"]);return v=function(){return n},n}var p=o.b.div(v()),h=o.b.div(b()),j=e(257),g=e.n(j);var x=function(){return Object(r.jsxs)(p,{children:[Object(r.jsx)(m.a,{children:"Matematika"}),Object(r.jsx)(h,{children:Object(r.jsx)(g.a,{style:{fontSize:"3rem",color:"#Ffff"}})}),Object(r.jsx)("p",{children:"Tes"})]})};t.default=function(){return Object(r.jsxs)(s,{children:[Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(r.jsx)(m.a,{size:"1.3rem",children:"Kelas Anda"}),Object(r.jsx)(c.a,{title:"Anggota Yang Telah Mengirim Jawaban","aria-label":"add",style:{marginRight:"auto"},children:Object(r.jsx)(a.a,{fontSize:"medium",style:{marginLeft:"1rem"}})})]}),Object(r.jsx)(f,{children:Object(r.jsx)(x,{})})]})}}}]);
//# sourceMappingURL=15.19ffcba9.chunk.js.map