"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8282],{82826:function(V,M,n){n.d(M,{Z:function(){return I}});var f=n(1413),d=n(67294),A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},g=A,x=n(84089),v=function(h,i){return d.createElement(x.Z,(0,f.Z)((0,f.Z)({},h),{},{ref:i,icon:g}))};v.displayName="ArrowLeftOutlined";var I=d.forwardRef(v)},11555:function(V,M,n){n.r(M);var f=n(97983),d=n.n(f),A=n(40794),g=n.n(A),x=n(12741),v=n.n(x),I=n(5200),U=n.n(I),h=n(98435),i=n(87806),_=n(82826),u=n(38402),c=n(30028),o=n(80737),W=n(14538),Z=n(71577),L=n(26713),D=n(58492),m=n(21802),O=n(27049),F=n(11382),T=n(71230),a=n(15746),j=n(69677),S=n(40038),s=n(67294),w=n(64593),e=n(85893),B=function(y){return new Promise(function(N,z){var P=new FileReader;P.readAsDataURL(y),P.onload=function(){return N(P.result)},P.onerror=function($){return z($)}})},K=function(y){U()(y);var N=o.Z.useForm(),z=v()(N,1),P=z[0],$=(0,c.useLocation)(),E=$.state,q=s.useState([]),G=v()(q,2),de=G[0],H=G[1],ee=(0,s.useState)(!1),k=v()(ee,2),_e=k[0],ne=k[1],re=s.useState(!1),J=v()(re,2),ae=J[0],Q=J[1],te=(0,s.useState)(""),X=v()(te,2),ue=X[0],se=X[1],le=(0,s.useState)(""),Y=v()(le,2),ce=Y[0],ie=Y[1],me=function(l){var r=l.fileList;return H(r)},he=function(){var t=g()(d()().mark(function l(r){return d()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(!(!r.url&&!r.preview)){p.next=4;break}return p.next=3,B(r.originFileObj);case 3:r.preview=p.sent;case 4:se(r.url||r.preview),ne(!0),ie(r.name||r.url.substring(r.url.lastIndexOf("/")+1));case 7:case"end":return p.stop()}},l)}));return function(r){return t.apply(this,arguments)}}();console.log(E.dataEdit),s.useEffect(function(){if(E.dataEdit){var t,l;P.setFields([{name:"name",value:E.dataEdit.name},{name:"email",value:E.dataEdit.email},{name:"email",value:E.dataEdit.email},{name:"phone",value:E.dataEdit.phone},{name:"role",value:E.dataEdit.role},{name:"area_id",value:(t=E.dataEdit)===null||t===void 0||(l=t.Nebula_Area)===null||l===void 0?void 0:l.id},{name:"address",value:E.dataEdit.address}]),H([{uid:"1",name:"default logo",status:"done",url:E.dataEdit.photo}])}else c.history.push("/users/company")},[E.dataEdit]);var oe=function(){var t=g()(d()().mark(function l(r){var C;return d()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return console.log(r),Q(!0),R.next=4,(0,i.L)({name:r.name,phone:r.phone,email:r.email,id:E.dataEdit.id,password:r.newPassword});case 4:C=R.sent,Q(!1),C.error?W.Z.error({content:C.message}):W.Z.success({content:C.message,onOk:function(){c.history.back()}});case 7:case"end":return R.stop()}},l)}));return function(r){return t.apply(this,arguments)}}();return(0,e.jsxs)(u._z,{breadcrumb:void 0,title:(0,e.jsx)(Z.Z,{type:"link",onClick:function(){return c.history.push("/users")},size:"large",children:(0,e.jsxs)(L.Z,{style:{cursor:"pointer"},align:"start",size:"large",children:[(0,e.jsx)(_.Z,{onClick:function(){return c.history.push("/users")},style:{marginTop:"12px",fontSize:"24px",color:"#000"}}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"left"},children:[(0,e.jsxs)(D.Z,{children:[(0,e.jsx)(D.Z.Item,{children:"User Management"}),(0,e.jsx)(D.Z.Item,{href:"#",children:"Edit User"})]}),(0,e.jsx)(m.Z.Title,{level:5,children:"Edit User"})]})]})}),style:{borderTop:"1px solid rgba(0, 0, 0, 0.06)"},children:[(0,e.jsxs)(w.q,{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("title",{children:"AAT IoT Platform | User Management"}),(0,e.jsx)("link",{rel:"icon",href:"/Sinar-mas.png",type:"image/x-icon"})]}),(0,e.jsx)(O.Z,{style:{paddingTop:0,marginTop:0}}),(0,e.jsx)(F.Z,{spinning:ae,children:(0,e.jsx)(o.Z,{form:P,name:"add-area",onFinish:oe,style:{width:500,margin:"0px auto",paddingTop:20},children:(0,e.jsxs)(T.Z,{gutter:16,children:[(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(m.Z,{children:"Full Name"})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(o.Z.Item,{name:"name",rules:[{required:!0,message:"Please input full name!"}],requiredMark:"optional",children:(0,e.jsx)(j.Z,{placeholder:"Full Name"})})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(m.Z,{children:"Email"})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(o.Z.Item,{name:"email",rules:[{required:!0,message:"Please input email!",type:"email"}],requiredMark:"optional",children:(0,e.jsx)(j.Z,{placeholder:"Email",disabled:!0})})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(m.Z,{children:"Phone"})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(o.Z.Item,{name:"phone",rules:[{required:!0,message:"Please input phone!"},{pattern:/^(\+62|62|0)8[1-9][0-9]{6,13}$/g,message:"Phone not valid!"}],requiredMark:"optional",children:(0,e.jsx)(j.Z,{placeholder:"Phone"})})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(m.Z,{children:"Role"})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(o.Z.Item,{name:"role",rules:[{required:!0,message:"Please select role!"}],requiredMark:"optional",children:(0,e.jsx)(S.Z,{placeholder:"Select Role",className:"not-rounded",disabled:!0,options:[{label:"Admin",value:"admin"},{label:"Area",value:"area"}],onChange:function(){P.setFieldsValue({area_id:void 0})}})})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(o.Z.Item,{noStyle:!0,shouldUpdate:function(l,r){return l.role_id!==r.role_id},children:function(){return P.getFieldValue("role")=="area"?(0,e.jsx)(m.Z,{children:"Area"}):null}})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(o.Z.Item,{noStyle:!0,shouldUpdate:function(l,r){return l.role_id!==r.role_id},children:function(){return P.getFieldValue("role")=="area"?(0,e.jsx)(o.Z.Item,{name:"area_id",rules:[{required:!0,message:"Please input Area!"}],requiredMark:"optional",children:(0,e.jsx)(h.U,{disabled:!0})}):null}})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(m.Z,{children:"Address"})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(o.Z.Item,{name:"address",requiredMark:"optional",children:(0,e.jsx)(j.Z.TextArea,{placeholder:"Address"})})}),(0,e.jsx)(a.Z,{span:24,children:(0,e.jsx)(O.Z,{})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(m.Z,{children:"New Password"})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(o.Z.Item,{name:"newPassword",rules:[{required:!0,message:"Please input password!"}],requiredMark:"optional",children:(0,e.jsx)(j.Z.Password,{placeholder:"Input Password"})})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(m.Z,{children:"Retype Password"})}),(0,e.jsx)(a.Z,{span:12,children:(0,e.jsx)(o.Z.Item,{name:"retypePassword",requiredMark:"optional",rules:[{required:!0,message:"Please input password!"},function(t){var l=t.getFieldValue;return{validator:function(C,p){return!p||l("newPassword")===p?Promise.resolve():Promise.reject(new Error("Passwords not match!"))}}}],children:(0,e.jsx)(j.Z.Password,{placeholder:"Retype Password"})})}),(0,e.jsx)(a.Z,{offset:16,children:(0,e.jsxs)(L.Z,{children:[(0,e.jsx)(o.Z.Item,{children:(0,e.jsx)(Z.Z,{type:"primary",htmlType:"submit",children:"Save"})}),(0,e.jsx)(o.Z.Item,{children:(0,e.jsx)(Z.Z,{type:"default",htmlType:"button",onClick:function(){return c.history.push("/users")},children:"Cancel"})})]})})]})})})]})};M.default=K},27049:function(V,M,n){var f=n(87462),d=n(4942),A=n(94184),g=n.n(A),x=n(67294),v=n(53124),I=function(h,i){var _={};for(var u in h)Object.prototype.hasOwnProperty.call(h,u)&&i.indexOf(u)<0&&(_[u]=h[u]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,u=Object.getOwnPropertySymbols(h);c<u.length;c++)i.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(h,u[c])&&(_[u[c]]=h[u[c]]);return _},U=function(i){var _,u=x.useContext(v.E_),c=u.getPrefixCls,o=u.direction,W=i.prefixCls,Z=i.type,L=Z===void 0?"horizontal":Z,D=i.orientation,m=D===void 0?"center":D,O=i.orientationMargin,F=i.className,T=i.children,a=i.dashed,j=i.plain,S=I(i,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),s=c("divider",W),w=m.length>0?"-".concat(m):m,e=!!T,B=m==="left"&&O!=null,K=m==="right"&&O!=null,b=g()(s,"".concat(s,"-").concat(L),(_={},(0,d.Z)(_,"".concat(s,"-with-text"),e),(0,d.Z)(_,"".concat(s,"-with-text").concat(w),e),(0,d.Z)(_,"".concat(s,"-dashed"),!!a),(0,d.Z)(_,"".concat(s,"-plain"),!!j),(0,d.Z)(_,"".concat(s,"-rtl"),o==="rtl"),(0,d.Z)(_,"".concat(s,"-no-default-orientation-margin-left"),B),(0,d.Z)(_,"".concat(s,"-no-default-orientation-margin-right"),K),_),F),y=(0,f.Z)((0,f.Z)({},B&&{marginLeft:O}),K&&{marginRight:O});return x.createElement("div",(0,f.Z)({className:b},S,{role:"separator"}),T&&L!=="vertical"&&x.createElement("span",{className:"".concat(s,"-inner-text"),style:y},T))};M.Z=U}}]);
