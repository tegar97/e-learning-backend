(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{440:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"e",(function(){return h})),t.d(n,"c",(function(){return O})),t.d(n,"b",(function(){return m})),t.d(n,"d",(function(){return f})),t.d(n,"f",(function(){return p})),t.d(n,"g",(function(){return x})),t.d(n,"h",(function(){return g}));var a=t(3),i=t(5);function r(){var e=Object(a.a)(["\n    margin-top: 1.5rem;\n    display: flex;\n    flex-direction: column;\n"]);return r=function(){return e},e}function c(){var e=Object(a.a)(["\n    width: 30%;\n    height: 100%;\n    padding: 0 1rem;\n    @media only screen and (max-width:900px) {\n        width: 100%;\n\n        height: auto;\n        margin-top: 2rem;\n\n\n        \n        \n     \n\n    }\n"]);return c=function(){return e},e}function s(){var e=Object(a.a)(["\n    width: 70%;\n    border-right: 1px solid rgba(0,0,0,.15);;\n    margin-right: 2rem;\n    height: 100%;\n    padding: 0 1rem;\n    @media only screen and (max-width:900px) {\n        width: 100%;\n        height: auto;\n\n\n    \n    }\n"]);return s=function(){return e},e}function o(){var e=Object(a.a)(["\n    display : flex;\n    flex-direction: column;\n\n"]);return o=function(){return e},e}function d(){var e=Object(a.a)(["\n    width: 100px;\n    height: 100px;\n    margin-right: 1rem;\n    border : 1px solid rgba(0,0,0,.2);\n    display : flex;\n    justify-content: center;\n    align-items: center;\n"]);return d=function(){return e},e}function l(){var e=Object(a.a)(["\n    display : flex;\n    width: 100%;\n    margin-top: 4rem;\n    border:  1px solid rgba(0,0,0,.2);\n    border-radius: 10px;\n\n    \n"]);return l=function(){return e},e}function u(){var e=Object(a.a)(["\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    @media only screen and (max-width:900px) {\n        flex-direction: column;\n    }\n    \n\n"]);return u=function(){return e},e}function b(){var e=Object(a.a)(["\n  height: 100%;\n  margin-top: 2rem;\n    \n"]);return b=function(){return e},e}var j=i.b.div(b()),h=i.b.form(u()),O=i.b.div(l()),m=i.b.div(d()),f=i.b.div(o()),p=i.b.div(s()),x=i.b.div(c()),g=i.b.div(r())},447:function(e,n,t){"use strict";t.r(n);var a=t(13),i=t(14),r=t(16),c=t(6),s=t(1),o=t(0),d=t.n(o),l=t(9),u=t(404),b=t(406),j=t(418),h=t(419),O=t(420),m=t(402),f=t(80),p=t.n(f),x=t(72),g=t(415),v=t(10),y=t(440),w=t(3);function k(){var e=Object(w.a)(["\n    width: 100%;\n\n"]);return k=function(){return e},e}var z=t(5).b.form(k()),S=t(57),C=t.n(S),B=t(17),J=t(42),L=t(81),T=t(82),I=t.n(T),_=t(129),P=Object(l.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var n=e.children,t=e.classes,a=e.onClose,i=Object(c.a)(e,["children","classes","onClose"]);return Object(s.jsxs)(j.a,Object(r.a)(Object(r.a)({disableTypography:!0,className:t.root},i),{},{children:[Object(s.jsx)(x.a,{variant:"h6",children:n}),a?Object(s.jsx)(m.a,{"aria-label":"close",className:t.closeButton,onClick:a,children:Object(s.jsx)(p.a,{})}):null]}))})),N=Object(l.a)((function(e){return{root:{padding:e.spacing(2)}}}))(h.a),W=Object(l.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(O.a);n.default=function(e){var n,t,r,c=e.data,o=e.postId;console.log(o);var l=d.a.useState(!1),j=Object(i.a)(l,2),h=j[0],O=j[1],m=d.a.useState(c.point),f=Object(i.a)(m,2),p=f[0],w=f[1],k=d.a.useState(""),S=Object(i.a)(k,2),T=S[0],E=S[1],D=Object(B.useMutation)(_.b,{update:function(){O(!1)},variables:{timeLineId:o,userCollectionId:c.id,point:parseInt(p),feedBack:T},refetchQueries:[{query:J.d,variables:{id:o}}]}),F=Object(i.a)(D,1)[0],M=function(){O(!1)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(u.a,{variant:"text",color:"secondary",onClick:function(){O(!0)},children:"Lihat Jawaban"}),Object(s.jsxs)(b.a,{fullWidth:!0,maxWidth:"sm",onClose:M,"aria-labelledby":"customized-dialog-title",open:h,children:[Object(s.jsxs)(P,{id:"customized-dialog-title",onClose:M,children:["Jawaban ",c.user_name]}),Object(s.jsxs)(z,{onSubmit:function(e){e.preventDefault(),F()},children:[Object(s.jsxs)(N,{dividers:!0,style:{width:"100%"},children:[Object(s.jsxs)(y.h,{children:[Object(s.jsx)(v.a,{children:"Nama"}),Object(s.jsx)(g.a,(n={id:"content_title",disabled:!0,value:c.user_name,name:"name",style:{marginTop:"1rem"},size:"medium"},Object(a.a)(n,"id","standard-basic"),Object(a.a)(n,"variant","outlined"),Object(a.a)(n,"label","Judul"),Object(a.a)(n,"inputProps",{style:{fontSize:15}}),Object(a.a)(n,"InputLabelProps",{style:{fontSize:"1.3rem"}}),Object(a.a)(n,"fullWidth",!0),n))]}),Object(s.jsxs)(y.h,{children:[Object(s.jsx)(v.a,{children:"Email "}),Object(s.jsx)(g.a,(t={id:"content_title",disabled:!0,value:c.user_name,name:"name",style:{marginTop:"1rem"},size:"medium"},Object(a.a)(t,"id","standard-basic"),Object(a.a)(t,"variant","outlined"),Object(a.a)(t,"label","Judul"),Object(a.a)(t,"inputProps",{style:{fontSize:15}}),Object(a.a)(t,"InputLabelProps",{style:{fontSize:"1.3rem"}}),Object(a.a)(t,"fullWidth",!0),t))]}),Object(s.jsxs)(y.h,{children:[Object(s.jsx)(v.a,{children:"Telat Mengumpulkan ? "}),Object(s.jsx)(x.a,{children:!1===c.isLate?Object(s.jsx)("p",{style:{color:"green"},children:"Tidak"}):Object(s.jsx)("p",{style:{color:"red"},children:"TELAT"})})]}),Object(s.jsxs)(y.h,{children:[Object(s.jsx)(v.a,{children:"Jawaban "}),Object(s.jsx)(x.a,{children:C()(c.task_message_online)})]}),Object(s.jsxs)(y.h,{children:[Object(s.jsx)(v.a,{children:"Berkas "}),Object(s.jsx)("a",{download:!0,href:"https://e-learning-backend.tegar.me/images/".concat(c.file),children:c.file})]}),Object(s.jsxs)(y.h,{children:[Object(s.jsx)(v.a,{children:"Jawaban(Via Berkas) "}),Object(s.jsx)(x.a,{children:"-"})]}),Object(s.jsxs)(y.h,{children:[Object(s.jsx)(v.a,{children:"Nilai"}),Object(s.jsx)(g.a,(r={id:"score",maxLength:"100",value:p,onChange:function(e){return w(e.target.value)},name:"score",style:{marginTop:"1rem",marginBottom:"1rem"},size:"medium"},Object(a.a)(r,"id","standard-basic"),Object(a.a)(r,"variant","outlined"),Object(a.a)(r,"label","Nilai"),Object(a.a)(r,"type","number"),Object(a.a)(r,"inputProps",{style:{fontSize:15}}),Object(a.a)(r,"InputLabelProps",{style:{fontSize:"1.3rem"}}),Object(a.a)(r,"fullWidth",!0),r)),Object(s.jsx)(v.a,{children:"FeedBack"}),Object(s.jsx)(L.CKEditor,{name:"content",editor:I.a,data:T,id:"feedBack",onChange:function(e,n){var t=n.getData();E(t)}})]})]}),Object(s.jsx)(W,{children:Object(s.jsx)(u.a,{autoFocus:!0,type:"submit",color:"primary",children:"Save"})})]})]})]})}}}]);
//# sourceMappingURL=4.db660a94.chunk.js.map