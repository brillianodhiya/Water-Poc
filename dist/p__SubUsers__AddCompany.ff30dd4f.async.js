"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5721],{82826:function(N,p,n){n.d(p,{Z:function(){return D}});var j=n(1413),o=n(67294),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},E=O,P=n(84089),t=function(M,g){return o.createElement(P.Z,(0,j.Z)((0,j.Z)({},M),{},{ref:g,icon:E}))};t.displayName="ArrowLeftOutlined";var D=o.forwardRef(t)},84727:function(N,p,n){n.r(p);var j=n(97983),o=n.n(j),O=n(40794),E=n.n(O),P=n(12741),t=n.n(P),D=n(5200),B=n.n(D),M=n(87806),g=n(82826),G=n(24969),H=n(71063),Z=n(14776),a=n(66490),T=n(422),f=n(71577),C=n(26713),A=n(58492),_=n(67669),J=n(27049),k=n(11382),Q=n(71230),s=n(15746),L=n(11486),V=n(74565),v=n(83652),c=n(67294),X=n(64593),e=n(85893),Y=function(I){return new Promise(function(R,y){var u=new FileReader;u.readAsDataURL(I),u.onload=function(){return R(u.result)},u.onerror=function(U){return y(U)}})},q=function(I){B()(I);var R=a.Z.useForm(),y=t()(R,1),u=y[0],U=c.useState([]),K=t()(U,2),x=K[0],W=K[1],ne=(0,c.useState)(!1),S=t()(ne,2),re=S[0],F=S[1],se=c.useState(!1),w=t()(se,2),te=w[0],$=w[1],ae=(0,c.useState)(""),z=t()(ae,2),le=z[0],ie=z[1],_e=(0,c.useState)(""),b=t()(_e,2),oe=b[0],de=b[1],ue=function(i){var r=i.fileList;return W(r)},ce=function(){var l=E()(o()().mark(function i(r){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!(!r.url&&!r.preview)){d.next=4;break}return d.next=3,Y(r.originFileObj);case 3:r.preview=d.sent;case 4:ie(r.url||r.preview),F(!0),de(r.name||r.url.substring(r.url.lastIndexOf("/")+1));case 7:case"end":return d.stop()}},i)}));return function(r){return l.apply(this,arguments)}}(),me=function(){var l=E()(o()().mark(function i(r){var m;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log(r),$(!0),h.next=4,(0,M.Jj)({name:r.name,phone:r.phone,email:r.email,role_id:r.role_id,password:"12345",image:x[0].originFileObj});case 4:m=h.sent,$(!1),m.error?T.Z.error({content:m.message}):T.Z.success({content:m.message,onOk:function(){Z.history.push("/users/company")}});case 7:case"end":return h.stop()}},i)}));return function(r){return l.apply(this,arguments)}}();return(0,e.jsxs)(H._zJ,{breadcrumb:void 0,title:(0,e.jsx)(f.Z,{type:"link",onClick:function(){return Z.history.back()},size:"large",children:(0,e.jsxs)(C.Z,{style:{cursor:"pointer"},align:"start",size:"large",children:[(0,e.jsx)(g.Z,{onClick:function(){return Z.history.back()},style:{marginTop:"12px",fontSize:"24px",color:"#000"}}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"left"},children:[(0,e.jsxs)(A.Z,{children:[(0,e.jsx)(A.Z.Item,{children:"User"}),(0,e.jsx)(A.Z.Item,{href:"#",children:"Add User Company"})]}),(0,e.jsx)(_.Z.Title,{level:5,children:"Add User"})]})]})}),style:{borderTop:"1px solid rgba(0, 0, 0, 0.06)"},children:[(0,e.jsxs)(X.q,{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("title",{children:"AAT IoT Platform | User"}),(0,e.jsx)("link",{rel:"icon",href:"https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png",type:"image/x-icon"})]}),(0,e.jsx)(J.Z,{style:{paddingTop:0,marginTop:0}}),(0,e.jsx)(k.Z,{spinning:te,children:(0,e.jsx)(a.Z,{form:u,name:"add-area",onFinish:me,style:{width:500,margin:"0px auto",paddingTop:20},children:(0,e.jsxs)(Q.Z,{gutter:16,children:[(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(_.Z,{children:"Full Name"})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(a.Z.Item,{name:"name",rules:[{required:!0,message:"Please input full name!"}],requiredMark:"optional",children:(0,e.jsx)(L.Z,{placeholder:"Full Name"})})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(_.Z,{children:"Email"})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(a.Z.Item,{name:"email",rules:[{required:!0,message:"Please input email!",type:"email"}],requiredMark:"optional",children:(0,e.jsx)(L.Z,{placeholder:"Email"})})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(_.Z,{children:"Phone"})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(a.Z.Item,{name:"phone",rules:[{required:!0,message:"Please input phone!"},{pattern:/^(\+62|62|0)8[1-9][0-9]{6,13}$/g,message:"Phone not valid!"}],requiredMark:"optional",children:(0,e.jsx)(L.Z,{placeholder:"Phone"})})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(_.Z,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)(_.Z,{style:{fontSize:16},children:"Photo"}),(0,e.jsx)(_.Z,{style:{fontSize:12,color:"#8C8C8C"},children:"This wil be displayed on profile."})]})})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(a.Z.Item,{style:{marginTop:"24px"},children:(0,e.jsxs)(C.Z,{children:[(0,e.jsx)(V.Z,{listType:"picture-card",fileList:x,customRequest:function(i){var r=i.onSuccess;r&&setTimeout(function(){r("ok")},0)},maxCount:1,multiple:!1,accept:"image/*",onChange:ue,onPreview:ce,children:x.length>0?null:(0,e.jsxs)("div",{children:[(0,e.jsx)(G.Z,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]})}),(0,e.jsx)(T.Z,{open:re,title:oe,footer:null,onCancel:function(){return F(!1)},children:(0,e.jsx)("img",{alt:"example",style:{width:"100%"},src:le})}),x.length>0?(0,e.jsx)(f.Z,{danger:!0,type:"text",onClick:function(){return W([])},children:"Delete"}):null]})})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(_.Z,{children:"Role"})}),(0,e.jsx)(s.Z,{span:12,children:(0,e.jsx)(a.Z.Item,{name:"role_id",rules:[{required:!0,message:"Please select role!"}],requiredMark:"optional",children:(0,e.jsxs)(v.Z,{placeholder:"Select Role",className:"not-rounded",children:[(0,e.jsx)(v.Z.Option,{value:"1",children:"Admin"}),(0,e.jsx)(v.Z.Option,{value:"4",children:"Finance"}),(0,e.jsx)(v.Z.Option,{value:"5",children:"Technician"})]})})}),(0,e.jsx)(s.Z,{offset:16,children:(0,e.jsxs)(C.Z,{children:[(0,e.jsx)(a.Z.Item,{children:(0,e.jsx)(f.Z,{type:"primary",htmlType:"submit",children:"Save"})}),(0,e.jsx)(a.Z.Item,{children:(0,e.jsx)(f.Z,{type:"default",htmlType:"button",children:"Cancel"})})]})})]})})})]})};p.default=q}}]);
