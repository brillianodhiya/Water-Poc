"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[983],{72923:function(Y,S,a){a.d(S,{Z:function(){return C}});var T=a(97983),m=a.n(T),x=a(40794),M=a.n(x),U=a(67294),A=a(37054),f=a(69677),L=a(21802),y=a(49288),P=a(20906),E=a(85893),D=f.Z.Search;function C(g){var d=g.center,p=d===void 0?{lat:-6.2,lng:106.816666}:d,n=g.onChange,v=n===void 0?function(s){}:n,j=(0,A.Db)({googleMapsApiKey:"AIzaSyAcli1qFFLWrhhlDhVUCWkAJqzEY6Cp9UI",libraries:["places"]}),t=j.isLoaded;return t?(0,E.jsx)(l,{c:p,onChange:v}):(0,E.jsx)("div",{children:"Loading..."})}function l(g){var d=g.c,p=d===void 0?{lat:-6.2,lng:106.816666}:d,n=g.onChange,v=n===void 0?function(t){}:n,j=(0,U.useMemo)(function(){return p},[p]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"12px",alignItems:"center",alignContent:"center"},children:[(0,E.jsx)(L.Z,{style:{fontSize:"14px",fontWeight:400,marginTop:"12px"},children:"Pin Location"}),(0,E.jsx)(h,{setSelected:v})]}),(0,E.jsx)(A.b6,{onRightClick:function(s){var r=s.latLng.lat(),c=s.latLng.lng();console.log(s,"E");try{v({lat:r,lng:c})}catch(_){}},zoom:16,center:j,mapContainerClassName:"map-container-gateway",children:(0,E.jsx)(A.Jx,{onDragEnd:function(s){var r=s.latLng.lat(),c=s.latLng.lng();try{v({lat:r,lng:c})}catch(_){}},draggable:!0,position:j})})]})}var h=function(d){var p=d.setSelected,n=(0,P.ZP)(),v=n.ready,j=n.value,t=n.setValue,s=n.suggestions,r=s.status,c=s.data,_=n.clearSuggestions,u=function(){var e=M()(m()().mark(function o(W){var k,G,V,N;return m()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return t(JSON.parse(W).description,!1),_(),Z.next=4,(0,P.LM)({address:W});case 4:return k=Z.sent,Z.next=7,(0,P.WV)(k[0]);case 7:G=Z.sent,V=G.lat,N=G.lng,p({lat:V,lng:N});case 11:case"end":return Z.stop()}},o)}));return function(W){return e.apply(this,arguments)}}(),i=c.map(function(e){var o=e.place_id,W=e.description;return{label:W,value:JSON.stringify({place_id:o,description:W})}});return(0,E.jsx)(y.Z,{options:i,style:{width:200},onSelect:u,value:j,children:(0,E.jsx)(D,{disabled:!v,value:j,onChange:function(o){return t(o.target.value)},placeholder:"Cari Lokasi",style:{width:200}})})}},89662:function(Y,S,a){a.r(S);var T=a(97983),m=a.n(T),x=a(40794),M=a.n(x),U=a(12741),A=a.n(U),f=a(72923),L=a(4745),y=a(95971),P=a(82826),E=a(24969),D=a(38402),C=a(30028),l=a(80737),h=a(14538),g=a(71577),d=a(26713),p=a(58492),n=a(21802),v=a(11382),j=a(71230),t=a(15746),s=a(78116),r=a(69677),c=a(40038),_=a(27049),u=a(67294),i=a(64593),e=a(85893),o=function(G){return new Promise(function(V,N){var z=new FileReader;z.readAsDataURL(G),z.onload=function(){return V(z.result)},z.onerror=function(Z){return N(Z)}})},W=function(){var G=l.Z.useForm(),V=A()(G,1),N=V[0],z=(0,C.useLocation)(),Z=z.state,J=[],ne=(0,u.useState)(!1),H=A()(ne,2),Q=H[0],q=H[1],te=(0,u.useState)(""),ee=A()(te,2),se=ee[0],b=ee[1],B=(0,u.useState)(""),K=A()(B,2),$=K[0],F=K[1],oe=u.useState({lat:-6.2,lng:106.816666}),ie=A()(oe,2),me=ie[0],pe=ie[1],ge=u.useState([]),ue=A()(ge,2),re=ue[0],le=ue[1],fe=function(R){var O=R.fileList;return le(O)},he=u.useState(!1),de=A()(he,2),ve=de[0],ce=de[1],Ee=function(){var I=M()(m()().mark(function R(O){return m()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(!(!O.url&&!O.preview)){w.next=4;break}return w.next=3,o(O.originFileObj);case 3:O.preview=w.sent;case 4:b(O.url||O.preview),q(!0),F(O.name||O.url.substring(O.url.lastIndexOf("/")+1));case 7:case"end":return w.stop()}},R)}));return function(O){return I.apply(this,arguments)}}(),Pe=(0,u.useState)([]),_e=A()(Pe,2),Ce=_e[0],Oe=_e[1],Me=function(){var I=M()(m()().mark(function R(){var O;return m()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,(0,L.bg)({});case 2:O=w.sent,O.error||Oe(O.data);case 4:case"end":return w.stop()}},R)}));return function(){return I.apply(this,arguments)}}();u.useEffect(function(){Me()},[]);var Ae=function(){var I=M()(m()().mark(function R(O){var X;return m()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return console.log(O),ce(!0),ae.next=4,(0,y.mZ)({name:O.name,image:re.length>0?re[0].originFileObj:void 0,phone:O.phone.join(","),email:O.email.join(","),address:O.address,latitude:O.latitude,longitude:O.longitude,area_name:O.area_name,pic_name:O.pic_name,area_id:Z.area_id,type:O.type,kode_unit:O.kode_unit,nama_unit:O.nama_unit,password:O.retypePassword,username:O.username});case 4:X=ae.sent,ce(!1),X.error?h.Z.error({content:X.message}):h.Z.success({content:X.message,onOk:function(){C.history.push("/area/info",{area_id:Z.area_id})}});case 7:case"end":return ae.stop()}},R)}));return function(O){return I.apply(this,arguments)}}();return(0,e.jsxs)(D._z,{title:(0,e.jsx)(g.Z,{type:"link",onClick:function(){return C.history.push("/area/info",{area_id:Z.area_id})},size:"large",children:(0,e.jsxs)(d.Z,{style:{cursor:"pointer"},align:"start",size:"large",children:[(0,e.jsx)(P.Z,{onClick:function(){return C.history.push("/area/info",{area_id:Z.area_id})},style:{marginTop:"12px",fontSize:"24px",color:"#000"}}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"left"},children:[(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(p.Z.Item,{children:"Area Management"}),(0,e.jsx)(p.Z.Item,{children:"Area"}),(0,e.jsx)(p.Z.Item,{href:"#",children:"Add Tenant"})]}),(0,e.jsx)(n.Z.Title,{level:5,children:"Add Tenant"})]})]})}),children:[(0,e.jsxs)(i.q,{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("title",{children:"IKI IoT Platform | Add Tenant"}),(0,e.jsx)("link",{rel:"icon",href:"/iki-logo-no-text.png",type:"image/x-icon"})]}),(0,e.jsx)(v.Z,{spinning:ve,children:(0,e.jsxs)(l.Z,{form:N,name:"add-area",onFinish:Ae,layout:"vertical",children:[(0,e.jsxs)(j.Z,{style:{borderTop:"1px solid rgba(0, 0, 0, 0.06)",borderBottom:"1px solid rgba(0, 0, 0, 0.06)"},gutter:16,children:[(0,e.jsx)(t.Z,{span:24,children:(0,e.jsx)(l.Z.Item,{style:{marginTop:"24px"},children:(0,e.jsxs)(d.Z,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(n.Z,{style:{fontSize:16},children:"Photo"}),(0,e.jsx)(n.Z,{style:{fontSize:12,color:"#8C8C8C"},children:"This wil be displayed on profile."})]}),(0,e.jsx)(s.Z,{listType:"picture-card",fileList:re,customRequest:function(R){var O=R.onSuccess;O&&setTimeout(function(){O("ok")},0)},maxCount:1,multiple:!1,accept:"image/*",onChange:fe,onPreview:Ee,children:re.length>0?null:(0,e.jsxs)("div",{children:[(0,e.jsx)(E.Z,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]})}),(0,e.jsx)(h.Z,{open:Q,title:$,footer:null,onCancel:function(){return q(!1)},children:(0,e.jsx)("img",{alt:"example",style:{width:"100%"},src:se})}),re.length>0?(0,e.jsx)(g.Z,{danger:!0,type:"text",onClick:function(){return le([])},children:"Delete"}):null]})})}),(0,e.jsxs)(t.Z,{xs:24,sm:24,md:12,lg:6,xl:8,xxl:8,children:[(0,e.jsx)(l.Z.Item,{label:"Tenant Name",name:"name",rules:[{required:!0,message:"Please input tenant name!"}],requiredMark:"optional",children:(0,e.jsx)(r.Z,{placeholder:"Tenant Name"})}),(0,e.jsx)(l.Z.Item,{style:{marginTop:"24px"},label:"Area Name",name:"area_name",rules:[{required:!0,message:"Please input area name!"}],requiredMark:"optional",children:(0,e.jsx)(c.Z,{placeholder:"Area Name",className:"not-rounded",children:Ce.map(function(I){return(0,e.jsx)(c.Z.Option,{value:I.area_name,children:I.area_name},I.id)})})}),(0,e.jsx)(l.Z.Item,{label:"PIC Name",name:"pic_name",rules:[{required:!0,message:"Please input pic name!"}],requiredMark:"optional",children:(0,e.jsx)(r.Z,{placeholder:"PIC Name"})}),(0,e.jsx)(l.Z.Item,{style:{marginTop:"24px"},label:"Email PIC",name:"email",rules:[{required:!0,message:"Please input email pic!"}],requiredMark:"optional",children:(0,e.jsx)(c.Z,{mode:"tags",style:{width:"100%"},tokenSeparators:[","],options:J,placeholder:"Email",className:"not-rounded"})}),(0,e.jsx)(l.Z.Item,{label:"Kode Unit",name:"kode_unit",rules:[{required:!0,message:"Please input Kode Unit!"}],requiredMark:"optional",children:(0,e.jsx)(r.Z,{placeholder:"Kode Unit"})}),(0,e.jsx)(l.Z.Item,{label:"Nama Unit",name:"nama_unit",rules:[{required:!0,message:"Please input Nama Unit!"}],requiredMark:"optional",children:(0,e.jsx)(r.Z,{placeholder:"Nama Unit"})})]}),(0,e.jsxs)(t.Z,{xs:24,sm:24,md:12,lg:6,xl:8,xxl:8,children:[(0,e.jsx)(l.Z.Item,{label:"Phone",name:"phone",rules:[{required:!0,message:"Please input phone!"}],requiredMark:"optional",children:(0,e.jsx)(c.Z,{mode:"tags",style:{width:"100%"},tokenSeparators:[","],options:J,placeholder:"Phone",className:"not-rounded"})}),(0,e.jsx)(l.Z.Item,{label:"Address",name:"address",rules:[{required:!0,message:"Please input Address!"}],requiredMark:"optional",children:(0,e.jsx)(r.Z.TextArea,{placeholder:"Address",rows:3})}),(0,e.jsx)(_.Z,{}),(0,e.jsx)(l.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input Username!"}],requiredMark:"optional",children:(0,e.jsx)(r.Z,{placeholder:"Username"})}),(0,e.jsx)(l.Z.Item,{label:"Password",name:"newPassword",rules:[{required:!0,message:"Please input password!"}],requiredMark:"optional",children:(0,e.jsx)(r.Z.Password,{placeholder:"Input Password"})}),(0,e.jsx)(l.Z.Item,{label:"Re-type Password",name:"retypePassword",requiredMark:"optional",rules:[{required:!0,message:"Please input password!"},function(I){var R=I.getFieldValue;return{validator:function(X,w){return!w||R("newPassword")===w?Promise.resolve():Promise.reject(new Error("Passwords not match!"))}}}],children:(0,e.jsx)(r.Z.Password,{placeholder:"Retype Password"})})]}),(0,e.jsxs)(t.Z,{xs:24,sm:24,md:24,lg:6,xl:8,xxl:8,children:[(0,e.jsx)(f.Z,{center:me,onChange:function(R){pe(R),N.setFields([{name:"latitude",value:R.lat},{name:"longitude",value:R.lng}])}}),(0,e.jsxs)(d.Z,{wrap:!0,size:"large",style:{marginTop:"16px"},children:[(0,e.jsx)(l.Z.Item,{requiredMark:"optional",name:"latitude",label:"Latitude",initialValue:"-6.290690",rules:[{required:!0,message:"Masukkan Latitude"}],children:(0,e.jsx)(r.Z,{placeholder:"Latitude"})}),(0,e.jsx)(l.Z.Item,{requiredMark:"optional",name:"longitude",label:"Longitude",initialValue:"107.141853",rules:[{required:!0,message:"Masukkan Longitude"}],children:(0,e.jsx)(r.Z,{placeholder:"Longitude"})})]})]})]}),(0,e.jsx)("div",{style:{marginTop:20,textAlign:"right"},children:(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(l.Z.Item,{children:(0,e.jsx)(g.Z,{type:"default",onClick:function(){return C.history.push("/area/info",{area_id:Z.area_id})},children:"Cancel"})}),(0,e.jsx)(l.Z.Item,{children:(0,e.jsx)(g.Z,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})})]})};S.default=W},4745:function(Y,S,a){a.d(S,{K7:function(){return j},OO:function(){return l},Ug:function(){return d},_J:function(){return h},bg:function(){return E},if:function(){return p},yz:function(){return C}});var T=a(11281),m=a.n(T),x=a(97983),M=a.n(x),U=a(40794),A=a.n(U),f=a(12461),L=a(9669),y=a.n(L),P=a(9212);function E(t){return D.apply(this,arguments)}function D(){return D=A()(M()().mark(function t(s){var r,c;return M()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,P.Z.get("/area",m()({method:"GET"},s||{}));case 3:return r=u.sent,c=r.data,u.abrupt("return",{data:c.data,error:!1,message:"Success Get",responseCode:c.responseCode});case 8:if(u.prev=8,u.t0=u.catch(0),!y().isAxiosError(u.t0)){u.next=16;break}return console.log("error message: ",u.t0.message),f.ZP.error(u.t0.message),u.abrupt("return",{data:null,error:!0,message:u.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",u.t0),f.ZP.error("An unexpected error occurred"),u.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return u.stop()}},t,null,[[0,8]])})),D.apply(this,arguments)}var C=function(){var t=A()(M()().mark(function s(r){var c,_;return M()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,P.Z.get("/area/detail/".concat(r),{method:"GET"});case 3:return c=i.sent,_=c.data,i.abrupt("return",{data:_.data,error:!1,message:"Success Get",responseCode:_.responseCode});case 8:if(i.prev=8,i.t0=i.catch(0),!y().isAxiosError(i.t0)){i.next=16;break}return console.log("error message: ",i.t0.message),f.ZP.error(i.t0.message),i.abrupt("return",{data:null,error:!0,message:i.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",i.t0),f.ZP.error("An unexpected error occurred"),i.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return i.stop()}},s,null,[[0,8]])}));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=A()(M()().mark(function s(r){var c,_,u;return M()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.Z.post("/area",{company_name:r.company_name,area_name:r.area_name,pic_name:r.pic_name,billing_address:r.billing_address,image:r.image,phone:r.phone,email_pic:r.email_pic,email_pic_admin:r.email_pic_admin,address:r.address,latitude:r.latitude,longitude:r.longitude},{headers:{"Content-Type":"multipart/form-data"}});case 3:return c=e.sent,_=c.data,e.abrupt("return",m()(m()({},_),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!y().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),u=e.t0.response,u.data.message?f.ZP.error(u.data.message):f.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),f.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},s,null,[[0,8]])}));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=A()(M()().mark(function s(r,c){var _,u,i;return M()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,P.Z.post("/area/setting/edit/"+c,m()({},r));case 3:return _=o.sent,u=_.data,o.abrupt("return",m()(m()({},u),{},{status:"ok",error:!1}));case 8:if(o.prev=8,o.t0=o.catch(0),!y().isAxiosError(o.t0)){o.next=17;break}return console.log("error message: ",o.t0.message),i=o.t0.response,i.data.message?f.ZP.error(i.data.message):f.ZP.error(o.t0.message),o.abrupt("return",{responseCode:400,message:o.t0.message,error:!0});case 17:return console.log("unexpected error: ",o.t0),f.ZP.error("An unexpected error occured"),o.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return o.stop()}},s,null,[[0,8]])}));return function(r,c){return t.apply(this,arguments)}}(),g=null,d=function(){var t=A()(M()().mark(function s(r,c){var _,u,i;return M()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,P.Z.put("/area/"+c,r);case 3:return _=o.sent,u=_.data,o.abrupt("return",m()(m()({},u),{},{status:"ok",error:!1}));case 8:if(o.prev=8,o.t0=o.catch(0),!y().isAxiosError(o.t0)){o.next=17;break}return console.log("error message: ",o.t0.message),i=o.t0.response,i.data.message?f.ZP.error(i.data.message):f.ZP.error(o.t0.message),o.abrupt("return",{responseCode:400,message:o.t0.message,error:!0});case 17:return console.log("unexpected error: ",o.t0),f.ZP.error("An unexpected error occured"),o.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return o.stop()}},s,null,[[0,8]])}));return function(r,c){return t.apply(this,arguments)}}(),p=function(){var t=A()(M()().mark(function s(r){var c,_,u;return M()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.Z.post("/area/create/member",{name:r.member_name,area_id:r.area_id});case 3:return c=e.sent,_=c.data,e.abrupt("return",m()(m()({},_),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!y().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),u=e.t0.response,u.data.message?f.ZP.error(u.data.message):f.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),f.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},s,null,[[0,8]])}));return function(r){return t.apply(this,arguments)}}();function n(t,s){return v.apply(this,arguments)}function v(){return v=_asyncToGenerator(_regeneratorRuntime().mark(function t(s,r){var c,_;return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,api.get("/area/member/"+r,_objectSpread({method:"GET"},s||{}));case 3:return c=i.sent,_=c.data,i.abrupt("return",{data:_.data,error:!1,message:"Success Get",responseCode:_.responseCode});case 8:if(i.prev=8,i.t0=i.catch(0),!axios.isAxiosError(i.t0)){i.next=16;break}return console.log("error message: ",i.t0.message),message.error(i.t0.message),i.abrupt("return",{data:null,error:!0,message:i.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",i.t0),message.error("An unexpected error occurred"),i.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return i.stop()}},t,null,[[0,8]])})),v.apply(this,arguments)}var j=function(){var t=A()(M()().mark(function s(r){var c,_,u;return M()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.Z.post("/area/pricing/member",r,{});case 3:return c=e.sent,_=c.data,e.abrupt("return",m()(m()({},_),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!y().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),u=e.t0.response,u.data.message?f.ZP.error(u.data.message):f.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),f.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},s,null,[[0,8]])}));return function(r){return t.apply(this,arguments)}}()},95971:function(Y,S,a){a.d(S,{GU:function(){return g},cH:function(){return E},mZ:function(){return l},rR:function(){return C}});var T=a(97983),m=a.n(T),x=a(11281),M=a.n(x),U=a(40794),A=a.n(U),f=a(12461),L=a(9669),y=a.n(L),P=a(9212);function E(d){return D.apply(this,arguments)}function D(){return D=A()(m()().mark(function d(p){var n,v;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.Z.get("/tenant",M()({method:"GET"},p||{}));case 3:return n=t.sent,v=n.data,t.abrupt("return",{data:v.data,error:!1,message:"Success Get",responseCode:v.responseCode});case 8:if(t.prev=8,t.t0=t.catch(0),!y().isAxiosError(t.t0)){t.next=16;break}return console.log("error message: ",t.t0.message),f.ZP.error(t.t0.message),t.abrupt("return",{data:null,error:!0,message:t.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",t.t0),f.ZP.error("An unexpected error occurred"),t.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return t.stop()}},d,null,[[0,8]])})),D.apply(this,arguments)}var C=function(){var d=A()(m()().mark(function p(n){var v,j,t;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,P.Z.put("/tenant/".concat(n.id),{image:n.image,area_id:n.area_id,name:n.name,pic_name:n.pic_name,address:n.address,latitude:n.latitude,longitude:n.longitude,member_id:n.member_id,type:n.type,area_name:n.area_name,phone:n.phone,email:n.email,username:n.username,password:n.password,nama_unit:n.nama_unit,kode_unit:n.kode_unit},{headers:{"Content-Type":"multipart/form-data"}});case 3:return v=r.sent,j=v.data,r.abrupt("return",M()(M()({},j),{},{status:"ok",error:!1}));case 8:if(r.prev=8,r.t0=r.catch(0),!y().isAxiosError(r.t0)){r.next=17;break}return console.log("error message: ",r.t0.message),t=r.t0.response,t.data.message?f.ZP.error(t.data.message):f.ZP.error(r.t0.message),r.abrupt("return",{responseCode:400,message:r.t0.message,error:!0});case 17:return console.log("unexpected error: ",r.t0),f.ZP.error("An unexpected error occured"),r.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return r.stop()}},p,null,[[0,8]])}));return function(n){return d.apply(this,arguments)}}(),l=function(){var d=A()(m()().mark(function p(n){var v,j,t;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,P.Z.post("/tenant",{image:n.image,area_id:n.area_id,name:n.name,pic_name:n.pic_name,address:n.address,latitude:n.latitude,longitude:n.longitude,type:n.type,area_name:n.area_name,phone:n.phone,email:n.email,username:n.username,password:n.password},{headers:{"Content-Type":"multipart/form-data"}});case 3:return v=r.sent,j=v.data,r.abrupt("return",M()(M()({},j),{},{status:"ok",error:!1}));case 8:if(r.prev=8,r.t0=r.catch(0),!y().isAxiosError(r.t0)){r.next=17;break}return console.log("error message: ",r.t0.message),t=r.t0.response,t.data.message?f.ZP.error(t.data.message):f.ZP.error(r.t0.message),r.abrupt("return",{responseCode:400,message:r.t0.message,error:!0});case 17:return console.log("unexpected error: ",r.t0),f.ZP.error("An unexpected error occured"),r.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return r.stop()}},p,null,[[0,8]])}));return function(n){return d.apply(this,arguments)}}(),h=null,g=function(){var d=A()(m()().mark(function p(n){var v,j;return m()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,P.Z.get("/tenant/detail/".concat(n),{method:"GET"});case 3:return v=s.sent,j=v.data,s.abrupt("return",{data:j.data,error:!1,message:"Success Get",responseCode:j.responseCode});case 8:if(s.prev=8,s.t0=s.catch(0),!y().isAxiosError(s.t0)){s.next=16;break}return console.log("error message: ",s.t0.message),f.ZP.error(s.t0.message),s.abrupt("return",{data:null,error:!0,message:s.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",s.t0),f.ZP.error("An unexpected error occurred"),s.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return s.stop()}},p,null,[[0,8]])}));return function(n){return d.apply(this,arguments)}}()},49288:function(Y,S,a){var T=a(87462),m=a(71002),x=a(97685),M=a(94184),U=a.n(M),A=a(50344),f=a(98423),L=a(67294),y=a(53124),P=a(40038),E=a(96159),D=P.Z.Option;function C(g){return g&&g.type&&(g.type.isSelectOption||g.type.isSelectOptGroup)}var l=function(d,p){var n=d.prefixCls,v=d.className,j=d.popupClassName,t=d.dropdownClassName,s=d.children,r=d.dataSource,c=(0,A.Z)(s),_;if(c.length===1&&(0,E.l$)(c[0])&&!C(c[0])){var u=(0,x.Z)(c,1);_=u[0]}var i=_?function(){return _}:void 0,e;return c.length&&C(c[0])?e=s:e=r?r.map(function(o){if((0,E.l$)(o))return o;switch((0,m.Z)(o)){case"string":return L.createElement(D,{key:o,value:o},o);case"object":{var W=o.value;return L.createElement(D,{key:W,value:W},o.text)}default:return}}):[],L.createElement(y.C,null,function(o){var W=o.getPrefixCls,k=W("select",n);return L.createElement(P.Z,(0,T.Z)({ref:p},(0,f.Z)(d,["dataSource"]),{prefixCls:k,popupClassName:j||t,className:U()("".concat(k,"-auto-complete"),v),mode:P.Z.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:i}),e)})},h=L.forwardRef(l);h.Option=D,S.Z=h},27049:function(Y,S,a){var T=a(87462),m=a(4942),x=a(94184),M=a.n(x),U=a(67294),A=a(53124),f=function(y,P){var E={};for(var D in y)Object.prototype.hasOwnProperty.call(y,D)&&P.indexOf(D)<0&&(E[D]=y[D]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,D=Object.getOwnPropertySymbols(y);C<D.length;C++)P.indexOf(D[C])<0&&Object.prototype.propertyIsEnumerable.call(y,D[C])&&(E[D[C]]=y[D[C]]);return E},L=function(P){var E,D=U.useContext(A.E_),C=D.getPrefixCls,l=D.direction,h=P.prefixCls,g=P.type,d=g===void 0?"horizontal":g,p=P.orientation,n=p===void 0?"center":p,v=P.orientationMargin,j=P.className,t=P.children,s=P.dashed,r=P.plain,c=f(P,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),_=C("divider",h),u=n.length>0?"-".concat(n):n,i=!!t,e=n==="left"&&v!=null,o=n==="right"&&v!=null,W=M()(_,"".concat(_,"-").concat(d),(E={},(0,m.Z)(E,"".concat(_,"-with-text"),i),(0,m.Z)(E,"".concat(_,"-with-text").concat(u),i),(0,m.Z)(E,"".concat(_,"-dashed"),!!s),(0,m.Z)(E,"".concat(_,"-plain"),!!r),(0,m.Z)(E,"".concat(_,"-rtl"),l==="rtl"),(0,m.Z)(E,"".concat(_,"-no-default-orientation-margin-left"),e),(0,m.Z)(E,"".concat(_,"-no-default-orientation-margin-right"),o),E),j),k=(0,T.Z)((0,T.Z)({},e&&{marginLeft:v}),o&&{marginRight:v});return U.createElement("div",(0,T.Z)({className:W},c,{role:"separator"}),t&&d!=="vertical"&&U.createElement("span",{className:"".concat(_,"-inner-text"),style:k},t))};S.Z=L},20906:function(Y,S,a){a.d(S,{LM:function(){return L},WV:function(){return y},ZP:function(){return A}});var T=a(67294);function m(){return m=Object.assign||function(C){for(var l=1;l<arguments.length;l++){var h=arguments[l];for(var g in h)Object.prototype.hasOwnProperty.call(h,g)&&(C[g]=h[g])}return C},m.apply(this,arguments)}var x=function(C){var l=(0,T.useRef)(C);return l.current=C,l},M=function(C,l){var h;return function(){for(var g=this,d=arguments.length,p=new Array(d),n=0;n<d;n++)p[n]=arguments[n];h!==null&&(clearTimeout(h),h=null),h=setTimeout(function(){return C.apply(g,p)},l)}},U="\u{1F4A1} use-places-autocomplete: Google Maps Places API library must be loaded. See: https://github.com/wellyshen/use-places-autocomplete#load-the-library",A=function(l){var h=l===void 0?{}:l,g=h.requestOptions,d=h.debounce,p=d===void 0?200:d,n=h.cache,v=n===void 0?24*60*60:n,j=h.cacheKey,t=j===void 0?"upa":j,s=h.googleMaps,r=h.callbackName,c=h.defaultValue,_=c===void 0?"":c,u=h.initOnMount,i=u===void 0?!0:u,e=(0,T.useState)(!1),o=e[0],W=e[1],k=(0,T.useState)(_),G=k[0],V=k[1],N=(0,T.useState)({loading:!1,status:"",data:[]}),z=N[0],Z=N[1],J=(0,T.useRef)(),ne=x(g),H=x(s),Q=(0,T.useCallback)(function(){var b;if(!J.current){var B=window,K=B.google,$=H.current,F=($==null?void 0:$.places)||(K==null||(b=K.maps)==null?void 0:b.places);if(!F){console.error(U);return}J.current=new F.AutocompleteService,W(!0)}},[H]),q=(0,T.useCallback)(function(){Z({loading:!1,status:"",data:[]})},[]),te=(0,T.useCallback)(function(b){b===void 0&&(b=t);try{sessionStorage.removeItem(b)}catch(B){}},[t]),ee=(0,T.useCallback)(M(function(b){var B;if(!b){q();return}Z(function($){return m({},$,{loading:!0})});var K={};try{K=JSON.parse(sessionStorage.getItem(t)||"{}")}catch($){}if(v&&(K=Object.keys(K).reduce(function($,F){return K[F].maxAge-Date.now()>=0&&($[F]=K[F]),$},{}),K[b])){Z({loading:!1,status:"OK",data:K[b].data});return}(B=J.current)==null||B.getPlacePredictions(m({},ne.current,{input:b}),function($,F){if(Z({loading:!1,status:F,data:$||[]}),v&&F==="OK"){K[b]={data:$,maxAge:Date.now()+v*1e3};try{sessionStorage.setItem(t,JSON.stringify(K))}catch(oe){}}})},p),[v,t,q,ne]),se=(0,T.useCallback)(function(b,B){B===void 0&&(B=!0),V(b),J.current&&B&&ee(b)},[ee]);return(0,T.useEffect)(function(){if(!i)return function(){return null};var b=window,B=b.google;return!H.current&&!(B!=null&&B.maps)&&r?window[r]=Q:Q(),function(){window[r]&&delete window[r]}},[r,H,Q,i]),{ready:o,value:G,suggestions:z,setValue:se,clearSuggestions:q,clearCache:te,init:Q}},f="\u{1F4A1} use-places-autocomplete: Please provide an address when using getGeocode() with the componentRestrictions.",L=function(l){var h=new window.google.maps.Geocoder;return new Promise(function(g,d){h.geocode(l,function(p,n){n!=="OK"&&d(n),!l.address&&l.componentRestrictions&&(console.error(f),g(p)),g(p)})})},y=function(l){var h=l.geometry.location,g=h.lat,d=h.lng;return{lat:g(),lng:d()}},P=function(l,h){var g=l.address_components.find(function(d){var p=d.types;return p.includes("postal_code")});if(!!g)return h?g.short_name:g.long_name},E="\u{1F4A1} use-places-autocomplete: Please provide a place Id when using getDetails() either as a string or as part of an Autocomplete Prediction.",D=function(l){var h=new window.google.maps.places.PlacesService(document.createElement("div"));return l.placeId?new Promise(function(g,d){h.getDetails(l,function(p,n){n!=="OK"&&d(n),g(p)})}):(console.error(E),Promise.reject(E))}}}]);
