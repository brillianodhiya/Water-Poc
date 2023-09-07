"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4574],{82826:function(N,T,r){r.d(T,{Z:function(){return f}});var D=r(1413),i=r(67294),I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},v=I,Z=r(84089),g=function(c,u){return i.createElement(Z.Z,(0,D.Z)((0,D.Z)({},c),{},{ref:u,icon:v}))};g.displayName="ArrowLeftOutlined";var f=i.forwardRef(g)},98435:function(N,T,r){r.d(T,{U:function(){return j}});var D=r(97983),i=r.n(D),I=r(40794),v=r.n(I),Z=r(12741),g=r.n(Z),f=r(4745),y=r(40038),c=r(67294),u=r(85893),j=function(d){var P=d.disabled,R=d.onChange,b=d.value,W=d.style,h=d.type,o=h===void 0?"not-rounded":h,t=d.useAll,m=d.defaultArea0,p=m===void 0?!1:m,n=(0,c.useState)([]),s=g()(n,2),l=s[0],a=s[1],e=c.useState(!1),U=g()(e,2),F=U[0],B=U[1],K=function(){var C=v()(i()().mark(function S(){var A;return i()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return B(!0),L.next=3,(0,f.bg)({});case 3:A=L.sent,B(!1),A.error||(a(A.data),p&&A.data.length>0&&R(A.data[0].id));case 6:case"end":return L.stop()}},S)}));return function(){return C.apply(this,arguments)}}();return c.useEffect(function(){K()},[]),(0,u.jsxs)(y.Z,{value:b,placeholder:"Area Name",loading:F,onChange:R,className:o,style:W,disabled:P,children:[t&&(0,u.jsx)(y.Z.Option,{value:0,children:"All Area"},0),l.map(function(C){return(0,u.jsx)(y.Z.Option,{value:C.id,children:C.area_name},C.id)})]})}},47083:function(N,T,r){r.r(T);var D=r(97983),i=r.n(D),I=r(40794),v=r.n(I),Z=r(12741),g=r.n(Z),f=r(5200),y=r.n(f),c=r(98435),u=r(87806),j=r(82826),E=r(38402),d=r(30028),P=r(80737),R=r(14538),b=r(71577),W=r(26713),h=r(58492),o=r(21802),t=r(27049),m=r(11382),p=r(71230),n=r(15746),s=r(69677),l=r(40038),a=r(67294),e=r(85893),U=function(K){return new Promise(function(C,S){var A=new FileReader;A.readAsDataURL(K),A.onload=function(){return C(A.result)},A.onerror=function(k){return S(k)}})},F=function(K){y()(K);var C=P.Z.useForm(),S=g()(C,1),A=S[0],k=a.useState([]),L=g()(k,2),G=L[0],X=L[1],Y=(0,a.useState)(!1),z=g()(Y,2),le=z[0],q=z[1],ee=a.useState(!1),V=g()(ee,2),re=V[0],H=V[1],ae=(0,a.useState)(""),J=g()(ae,2),ie=J[0],ne=J[1],se=(0,a.useState)(""),Q=g()(se,2),_e=Q[0],te=Q[1],ue=function(M){var _=M.fileList;return X(_)},de=function(){var O=v()(i()().mark(function M(_){return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(!(!_.url&&!_.preview)){x.next=4;break}return x.next=3,U(_.originFileObj);case 3:_.preview=x.sent;case 4:ne(_.url||_.preview),q(!0),te(_.name||_.url.substring(_.url.lastIndexOf("/")+1));case 7:case"end":return x.stop()}},M)}));return function(_){return O.apply(this,arguments)}}(),oe=function(){var O=v()(i()().mark(function M(_){var $;return i()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log(_),H(!0),w.next=4,(0,u.FZ)({name:_.name,phone:_.phone,email:_.email,role:_.role,password:_.newPassword,photo:G.length>0?G[0].originFileObj:void 0,area_id:_.area_id,address:_.address});case 4:$=w.sent,H(!1),$.error?R.Z.error({content:$.message}):R.Z.success({content:$.message,onOk:function(){d.history.push("/users")}});case 7:case"end":return w.stop()}},M)}));return function(_){return O.apply(this,arguments)}}();return(0,e.jsxs)(E._z,{breadcrumb:void 0,title:(0,e.jsx)(b.Z,{type:"link",onClick:function(){return d.history.push("/users")},size:"large",children:(0,e.jsxs)(W.Z,{style:{cursor:"pointer"},align:"start",size:"large",children:[(0,e.jsx)(j.Z,{onClick:function(){return d.history.push("/users")},style:{marginTop:"12px",fontSize:"24px",color:"#000"}}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"left"},children:[(0,e.jsxs)(h.Z,{children:[(0,e.jsx)(h.Z.Item,{children:"User Management"}),(0,e.jsx)(h.Z.Item,{href:"#",children:"Add User"})]}),(0,e.jsx)(o.Z.Title,{level:5,children:"Add User"})]})]})}),style:{borderTop:"1px solid rgba(0, 0, 0, 0.06)"},children:[(0,e.jsxs)(d.Helmet,{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("title",{children:"BITA IoT Platform | User Management"}),(0,e.jsx)("link",{rel:"icon",href:"/Sinar-mas.png",type:"image/x-icon"})]}),(0,e.jsx)(t.Z,{style:{paddingTop:0,marginTop:0}}),(0,e.jsx)(m.Z,{spinning:re,children:(0,e.jsx)(P.Z,{form:A,name:"add-area",onFinish:oe,style:{width:500,margin:"0px auto",paddingTop:20},children:(0,e.jsxs)(p.Z,{gutter:16,children:[(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(o.Z,{children:"Full Name"})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(P.Z.Item,{name:"name",rules:[{required:!0,message:"Please input full name!"}],requiredMark:"optional",children:(0,e.jsx)(s.Z,{placeholder:"Full Name"})})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(o.Z,{children:"Email"})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(P.Z.Item,{name:"email",rules:[{required:!0,message:"Please input email!",type:"email"}],requiredMark:"optional",children:(0,e.jsx)(s.Z,{placeholder:"Email"})})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(o.Z,{children:"Phone"})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(P.Z.Item,{name:"phone",rules:[{required:!0,message:"Please input phone!"},{pattern:/^(\+62|62|0)8[1-9][0-9]{6,13}$/g,message:"Phone not valid!"}],requiredMark:"optional",children:(0,e.jsx)(s.Z,{placeholder:"Phone"})})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(o.Z,{children:"Role"})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(P.Z.Item,{name:"role",rules:[{required:!0,message:"Please select role!"}],requiredMark:"optional",children:(0,e.jsx)(l.Z,{placeholder:"Select Role",className:"not-rounded",options:[{label:"Admin",value:"admin"},{label:"Area",value:"area"},{label:"Technician",value:"teknisi"}],onChange:function(){A.setFieldsValue({area_id:void 0})}})})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(P.Z.Item,{noStyle:!0,shouldUpdate:function(M,_){return M.role_id!==_.role_id},children:function(){return A.getFieldValue("role")=="area"?(0,e.jsx)(o.Z,{children:"Area"}):null}})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(P.Z.Item,{noStyle:!0,shouldUpdate:function(M,_){return M.role_id!==_.role_id},children:function(){return A.getFieldValue("role")=="area"?(0,e.jsx)(P.Z.Item,{name:"area_id",rules:[{required:!0,message:"Please input Area!"}],requiredMark:"optional",children:(0,e.jsx)(c.U,{})}):null}})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(o.Z,{children:"Address"})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(P.Z.Item,{name:"address",requiredMark:"optional",children:(0,e.jsx)(s.Z.TextArea,{placeholder:"Address"})})}),(0,e.jsx)(n.Z,{span:24,children:(0,e.jsx)(t.Z,{})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(o.Z,{children:"New Password"})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(P.Z.Item,{name:"newPassword",rules:[{required:!0,message:"Please input password!"}],requiredMark:"optional",children:(0,e.jsx)(s.Z.Password,{placeholder:"Input Password"})})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(o.Z,{children:"Retype Password"})}),(0,e.jsx)(n.Z,{span:12,children:(0,e.jsx)(P.Z.Item,{name:"retypePassword",requiredMark:"optional",rules:[{required:!0,message:"Please input password!"},function(O){var M=O.getFieldValue;return{validator:function($,x){return!x||M("newPassword")===x?Promise.resolve():Promise.reject(new Error("Passwords not match!"))}}}],children:(0,e.jsx)(s.Z.Password,{placeholder:"Retype Password"})})}),(0,e.jsx)(n.Z,{offset:16,children:(0,e.jsxs)(W.Z,{children:[(0,e.jsx)(P.Z.Item,{children:(0,e.jsx)(b.Z,{type:"primary",htmlType:"submit",children:"Save"})}),(0,e.jsx)(P.Z.Item,{children:(0,e.jsx)(b.Z,{type:"default",htmlType:"button",onClick:function(){return d.history.push("/users")},children:"Cancel"})})]})})]})})})]})};T.default=F},4745:function(N,T,r){r.d(T,{OO:function(){return P},Ug:function(){return W},_J:function(){return R},bg:function(){return j},yz:function(){return d}});var D=r(11281),i=r.n(D),I=r(97983),v=r.n(I),Z=r(40794),g=r.n(Z),f=r(12461),y=r(9669),c=r.n(y),u=r(9212);function j(h){return E.apply(this,arguments)}function E(){return E=g()(v()().mark(function h(o){var t,m;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/area",i()({method:"GET"},o||{}));case 3:return t=n.sent,m=t.data,n.abrupt("return",{data:m.data,error:!1,message:"Success Get",responseCode:m.responseCode});case 8:if(n.prev=8,n.t0=n.catch(0),!c().isAxiosError(n.t0)){n.next=16;break}return console.log("error message: ",n.t0.message),f.ZP.error(n.t0.message),n.abrupt("return",{data:null,error:!0,message:n.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",n.t0),f.ZP.error("An unexpected error occurred"),n.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return n.stop()}},h,null,[[0,8]])})),E.apply(this,arguments)}var d=function(){var h=g()(v()().mark(function o(t){var m,p;return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,u.Z.get("/area/detail/".concat(t),{method:"GET"});case 3:return m=s.sent,p=m.data,s.abrupt("return",{data:p.data,error:!1,message:"Success Get",responseCode:p.responseCode});case 8:if(s.prev=8,s.t0=s.catch(0),!c().isAxiosError(s.t0)){s.next=16;break}return console.log("error message: ",s.t0.message),f.ZP.error(s.t0.message),s.abrupt("return",{data:null,error:!0,message:s.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",s.t0),f.ZP.error("An unexpected error occurred"),s.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return s.stop()}},o,null,[[0,8]])}));return function(t){return h.apply(this,arguments)}}(),P=function(){var h=g()(v()().mark(function o(t){var m,p,n;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,u.Z.post("/area",{company_name:t.company_name,area_name:t.area_name,pic_name:t.pic_name,billing_address:t.billing_address,image:t.image,phone:t.phone,email_pic:t.email_pic,email_pic_admin:t.email_pic_admin,address:t.address,latitude:t.latitude,longitude:t.longitude},{headers:{"Content-Type":"multipart/form-data"}});case 3:return m=l.sent,p=m.data,l.abrupt("return",i()(i()({},p),{},{status:"ok",error:!1}));case 8:if(l.prev=8,l.t0=l.catch(0),!c().isAxiosError(l.t0)){l.next=17;break}return console.log("error message: ",l.t0.message),n=l.t0.response,n.data.message?f.ZP.error(n.data.message):f.ZP.error(l.t0.message),l.abrupt("return",{responseCode:400,message:l.t0.message,error:!0});case 17:return console.log("unexpected error: ",l.t0),f.ZP.error("An unexpected error occured"),l.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return l.stop()}},o,null,[[0,8]])}));return function(t){return h.apply(this,arguments)}}(),R=function(){var h=g()(v()().mark(function o(t,m){var p,n,s;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.Z.post("/area/setting/"+m,i()({},t));case 3:return p=a.sent,n=p.data,a.abrupt("return",i()(i()({},n),{},{status:"ok",error:!1}));case 8:if(a.prev=8,a.t0=a.catch(0),!c().isAxiosError(a.t0)){a.next=17;break}return console.log("error message: ",a.t0.message),s=a.t0.response,s.data.message?f.ZP.error(s.data.message):f.ZP.error(a.t0.message),a.abrupt("return",{responseCode:400,message:a.t0.message,error:!0});case 17:return console.log("unexpected error: ",a.t0),f.ZP.error("An unexpected error occured"),a.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return a.stop()}},o,null,[[0,8]])}));return function(t,m){return h.apply(this,arguments)}}(),b=null,W=function(){var h=g()(v()().mark(function o(t,m){var p,n,s;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.Z.put("/area/"+m,t);case 3:return p=a.sent,n=p.data,a.abrupt("return",i()(i()({},n),{},{status:"ok",error:!1}));case 8:if(a.prev=8,a.t0=a.catch(0),!c().isAxiosError(a.t0)){a.next=17;break}return console.log("error message: ",a.t0.message),s=a.t0.response,s.data.message?f.ZP.error(s.data.message):f.ZP.error(a.t0.message),a.abrupt("return",{responseCode:400,message:a.t0.message,error:!0});case 17:return console.log("unexpected error: ",a.t0),f.ZP.error("An unexpected error occured"),a.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return a.stop()}},o,null,[[0,8]])}));return function(t,m){return h.apply(this,arguments)}}()},27049:function(N,T,r){var D=r(87462),i=r(4942),I=r(94184),v=r.n(I),Z=r(67294),g=r(53124),f=function(c,u){var j={};for(var E in c)Object.prototype.hasOwnProperty.call(c,E)&&u.indexOf(E)<0&&(j[E]=c[E]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,E=Object.getOwnPropertySymbols(c);d<E.length;d++)u.indexOf(E[d])<0&&Object.prototype.propertyIsEnumerable.call(c,E[d])&&(j[E[d]]=c[E[d]]);return j},y=function(u){var j,E=Z.useContext(g.E_),d=E.getPrefixCls,P=E.direction,R=u.prefixCls,b=u.type,W=b===void 0?"horizontal":b,h=u.orientation,o=h===void 0?"center":h,t=u.orientationMargin,m=u.className,p=u.children,n=u.dashed,s=u.plain,l=f(u,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),a=d("divider",R),e=o.length>0?"-".concat(o):o,U=!!p,F=o==="left"&&t!=null,B=o==="right"&&t!=null,K=v()(a,"".concat(a,"-").concat(W),(j={},(0,i.Z)(j,"".concat(a,"-with-text"),U),(0,i.Z)(j,"".concat(a,"-with-text").concat(e),U),(0,i.Z)(j,"".concat(a,"-dashed"),!!n),(0,i.Z)(j,"".concat(a,"-plain"),!!s),(0,i.Z)(j,"".concat(a,"-rtl"),P==="rtl"),(0,i.Z)(j,"".concat(a,"-no-default-orientation-margin-left"),F),(0,i.Z)(j,"".concat(a,"-no-default-orientation-margin-right"),B),j),m),C=(0,D.Z)((0,D.Z)({},F&&{marginLeft:t}),B&&{marginRight:t});return Z.createElement("div",(0,D.Z)({className:K},l,{role:"separator"}),p&&W!=="vertical"&&Z.createElement("span",{className:"".concat(a,"-inner-text"),style:C},p))};T.Z=y}}]);
