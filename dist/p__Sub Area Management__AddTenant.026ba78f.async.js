"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[983],{72923:function(Y,S,a){a.d(S,{Z:function(){return h}});var A=a(97983),m=a.n(A),B=a(40794),C=a.n(B),U=a(67294),D=a(37054),v=a(69677),R=a(21802),M=a(49288),P=a(20906),f=a(85893),O=v.Z.Search;function h(p){var d=p.center,l=d===void 0?{lat:-6.2,lng:106.816666}:d,r=p.onChange,o=r===void 0?function(t){}:r,_=(0,D.Db)({googleMapsApiKey:"AIzaSyAcli1qFFLWrhhlDhVUCWkAJqzEY6Cp9UI",libraries:["places"]}),s=_.isLoaded;return s?(0,f.jsx)(u,{c:l,onChange:o}):(0,f.jsx)("div",{children:"Loading..."})}function u(p){var d=p.c,l=d===void 0?{lat:-6.2,lng:106.816666}:d,r=p.onChange,o=r===void 0?function(s){}:r,_=(0,U.useMemo)(function(){return l},[l]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"12px",alignItems:"center",alignContent:"center"},children:[(0,f.jsx)(R.Z,{style:{fontSize:"14px",fontWeight:400,marginTop:"12px"},children:"Pin Location"}),(0,f.jsx)(g,{setSelected:o})]}),(0,f.jsx)(D.b6,{onRightClick:function(t){var e=t.latLng.lat(),c=t.latLng.lng();console.log(t,"E");try{o({lat:e,lng:c})}catch(i){}},zoom:16,center:_,mapContainerClassName:"map-container-gateway",children:(0,f.jsx)(D.Jx,{onDragEnd:function(t){var e=t.latLng.lat(),c=t.latLng.lng();try{o({lat:e,lng:c})}catch(i){}},draggable:!0,position:_})})]})}var g=function(d){var l=d.setSelected,r=(0,P.ZP)(),o=r.ready,_=r.value,s=r.setValue,t=r.suggestions,e=t.status,c=t.data,i=r.clearSuggestions,L=function(){var n=C()(m()().mark(function j(x){var w,F,V,G;return m()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return s(JSON.parse(x).description,!1),i(),y.next=4,(0,P.LM)({address:x});case 4:return w=y.sent,y.next=7,(0,P.WV)(w[0]);case 7:F=y.sent,V=F.lat,G=F.lng,l({lat:V,lng:G});case 11:case"end":return y.stop()}},j)}));return function(x){return n.apply(this,arguments)}}(),N=c.map(function(n){var j=n.place_id,x=n.description;return{label:x,value:JSON.stringify({place_id:j,description:x})}});return(0,f.jsx)(M.Z,{options:N,style:{width:200},onSelect:L,value:_,children:(0,f.jsx)(O,{disabled:!o,value:_,onChange:function(j){return s(j.target.value)},placeholder:"Cari Lokasi",style:{width:200}})})}},89662:function(Y,S,a){a.r(S);var A=a(97983),m=a.n(A),B=a(40794),C=a.n(B),U=a(12741),D=a.n(U),v=a(72923),R=a(4745),M=a(95971),P=a(82826),f=a(24969),O=a(38402),h=a(30028),u=a(80737),g=a(14538),p=a(71577),d=a(26713),l=a(58492),r=a(21802),o=a(11382),_=a(71230),s=a(15746),t=a(78116),e=a(69677),c=a(40038),i=a(27049),L=a(67294),N=a(64593),n=a(85893),j=function(F){return new Promise(function(V,G){var z=new FileReader;z.readAsDataURL(F),z.onload=function(){return V(z.result)},z.onerror=function(y){return G(y)}})},x=function(){var F=u.Z.useForm(),V=D()(F,1),G=V[0],z=(0,h.useLocation)(),y=z.state,J=[],ne=(0,L.useState)(!1),H=D()(ne,2),Q=H[0],q=H[1],te=(0,L.useState)(""),ee=D()(te,2),se=ee[0],T=ee[1],W=(0,L.useState)(""),K=D()(W,2),$=K[0],k=K[1],oe=L.useState({lat:-6.2,lng:106.816666}),ie=D()(oe,2),me=ie[0],pe=ie[1],ge=L.useState([]),le=D()(ge,2),re=le[0],ue=le[1],fe=function(I){var E=I.fileList;return ue(E)},he=L.useState(!1),de=D()(he,2),Ee=de[0],_e=de[1],ve=function(){var Z=C()(m()().mark(function I(E){return m()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!(!E.url&&!E.preview)){b.next=4;break}return b.next=3,j(E.originFileObj);case 3:E.preview=b.sent;case 4:T(E.url||E.preview),q(!0),k(E.name||E.url.substring(E.url.lastIndexOf("/")+1));case 7:case"end":return b.stop()}},I)}));return function(E){return Z.apply(this,arguments)}}(),Pe=(0,L.useState)([]),ce=D()(Pe,2),Oe=ce[0],De=ce[1],Ce=function(){var Z=C()(m()().mark(function I(){var E;return m()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,(0,R.bg)({});case 2:E=b.sent,E.error||De(E.data);case 4:case"end":return b.stop()}},I)}));return function(){return Z.apply(this,arguments)}}();L.useEffect(function(){Ce()},[]);var Me=function(){var Z=C()(m()().mark(function I(E){var X;return m()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return console.log(E),_e(!0),ae.next=4,(0,M.mZ)({name:E.name,image:re.length>0?re[0].originFileObj:void 0,phone:E.phone.join(","),email:E.email.join(","),address:E.address,latitude:E.latitude,longitude:E.longitude,area_name:E.area_name,pic_name:E.pic_name,area_id:y.area_id,type:E.type,kode_unit:E.kode_unit,nama_unit:E.nama_unit,password:E.retypePassword,username:E.username});case 4:X=ae.sent,_e(!1),X.error?g.Z.error({content:X.message}):g.Z.success({content:X.message,onOk:function(){h.history.push("/area/info",{area_id:y.area_id})}});case 7:case"end":return ae.stop()}},I)}));return function(E){return Z.apply(this,arguments)}}();return(0,n.jsxs)(O._z,{title:(0,n.jsx)(p.Z,{type:"link",onClick:function(){return h.history.push("/area/info",{area_id:y.area_id})},size:"large",children:(0,n.jsxs)(d.Z,{style:{cursor:"pointer"},align:"start",size:"large",children:[(0,n.jsx)(P.Z,{onClick:function(){return h.history.push("/area/info",{area_id:y.area_id})},style:{marginTop:"12px",fontSize:"24px",color:"#000"}}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"left"},children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(l.Z.Item,{children:"Area Management"}),(0,n.jsx)(l.Z.Item,{children:"Area"}),(0,n.jsx)(l.Z.Item,{href:"#",children:"Add Tenant"})]}),(0,n.jsx)(r.Z.Title,{level:5,children:"Add Tenant"})]})]})}),children:[(0,n.jsxs)(N.q,{children:[(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:"BITA IoT Platform | Add Tenant"}),(0,n.jsx)("link",{rel:"icon",href:"/logoaat.png",type:"image/x-icon"})]}),(0,n.jsx)(o.Z,{spinning:Ee,children:(0,n.jsxs)(u.Z,{form:G,name:"add-area",onFinish:Me,layout:"vertical",children:[(0,n.jsxs)(_.Z,{style:{borderTop:"1px solid rgba(0, 0, 0, 0.06)",borderBottom:"1px solid rgba(0, 0, 0, 0.06)"},gutter:16,children:[(0,n.jsx)(s.Z,{span:24,children:(0,n.jsx)(u.Z.Item,{style:{marginTop:"24px"},children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(r.Z,{style:{fontSize:16},children:"Photo"}),(0,n.jsx)(r.Z,{style:{fontSize:12,color:"#8C8C8C"},children:"This wil be displayed on profile."})]}),(0,n.jsx)(t.Z,{listType:"picture-card",fileList:re,customRequest:function(I){var E=I.onSuccess;E&&setTimeout(function(){E("ok")},0)},maxCount:1,multiple:!1,accept:"image/*",onChange:fe,onPreview:ve,children:re.length>0?null:(0,n.jsxs)("div",{children:[(0,n.jsx)(f.Z,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Upload"})]})}),(0,n.jsx)(g.Z,{open:Q,title:$,footer:null,onCancel:function(){return q(!1)},children:(0,n.jsx)("img",{alt:"example",style:{width:"100%"},src:se})}),re.length>0?(0,n.jsx)(p.Z,{danger:!0,type:"text",onClick:function(){return ue([])},children:"Delete"}):null]})})}),(0,n.jsxs)(s.Z,{xs:24,sm:24,md:12,lg:6,xl:8,xxl:8,children:[(0,n.jsx)(u.Z.Item,{label:"Tenant Name",name:"name",rules:[{required:!0,message:"Please input tenant name!"}],requiredMark:"optional",children:(0,n.jsx)(e.Z,{placeholder:"Tenant Name"})}),(0,n.jsx)(u.Z.Item,{style:{marginTop:"24px"},label:"Area Name",name:"area_name",rules:[{required:!0,message:"Please input area name!"}],requiredMark:"optional",children:(0,n.jsx)(c.Z,{placeholder:"Area Name",className:"not-rounded",children:Oe.map(function(Z){return(0,n.jsx)(c.Z.Option,{value:Z.area_name,children:Z.area_name},Z.id)})})}),(0,n.jsx)(u.Z.Item,{label:"PIC Name",name:"pic_name",rules:[{required:!0,message:"Please input pic name!"}],requiredMark:"optional",children:(0,n.jsx)(e.Z,{placeholder:"PIC Name"})}),(0,n.jsx)(u.Z.Item,{style:{marginTop:"24px"},label:"Email PIC",name:"email",rules:[{required:!0,message:"Please input email pic!"}],requiredMark:"optional",children:(0,n.jsx)(c.Z,{mode:"tags",style:{width:"100%"},tokenSeparators:[","],options:J,placeholder:"Email",className:"not-rounded"})}),(0,n.jsx)(u.Z.Item,{label:"Kode Unit",name:"kode_unit",rules:[{required:!0,message:"Please input Kode Unit!"}],requiredMark:"optional",children:(0,n.jsx)(e.Z,{placeholder:"Kode Unit"})}),(0,n.jsx)(u.Z.Item,{label:"Nama Unit",name:"nama_unit",rules:[{required:!0,message:"Please input Nama Unit!"}],requiredMark:"optional",children:(0,n.jsx)(e.Z,{placeholder:"Nama Unit"})})]}),(0,n.jsxs)(s.Z,{xs:24,sm:24,md:12,lg:6,xl:8,xxl:8,children:[(0,n.jsx)(u.Z.Item,{label:"Phone",name:"phone",rules:[{required:!0,message:"Please input phone!"}],requiredMark:"optional",children:(0,n.jsx)(c.Z,{mode:"tags",style:{width:"100%"},tokenSeparators:[","],options:J,placeholder:"Phone",className:"not-rounded"})}),(0,n.jsx)(u.Z.Item,{label:"Address",name:"address",rules:[{required:!0,message:"Please input Address!"}],requiredMark:"optional",children:(0,n.jsx)(e.Z.TextArea,{placeholder:"Address",rows:3})}),(0,n.jsx)(i.Z,{}),(0,n.jsx)(u.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input Username!"}],requiredMark:"optional",children:(0,n.jsx)(e.Z,{placeholder:"Username"})}),(0,n.jsx)(u.Z.Item,{label:"Password",name:"newPassword",rules:[{required:!0,message:"Please input password!"}],requiredMark:"optional",children:(0,n.jsx)(e.Z.Password,{placeholder:"Input Password"})}),(0,n.jsx)(u.Z.Item,{label:"Re-type Password",name:"retypePassword",requiredMark:"optional",rules:[{required:!0,message:"Please input password!"},function(Z){var I=Z.getFieldValue;return{validator:function(X,b){return!b||I("newPassword")===b?Promise.resolve():Promise.reject(new Error("Passwords not match!"))}}}],children:(0,n.jsx)(e.Z.Password,{placeholder:"Retype Password"})})]}),(0,n.jsxs)(s.Z,{xs:24,sm:24,md:24,lg:6,xl:8,xxl:8,children:[(0,n.jsx)(v.Z,{center:me,onChange:function(I){pe(I),G.setFields([{name:"latitude",value:I.lat},{name:"longitude",value:I.lng}])}}),(0,n.jsxs)(d.Z,{wrap:!0,size:"large",style:{marginTop:"16px"},children:[(0,n.jsx)(u.Z.Item,{requiredMark:"optional",name:"latitude",label:"Latitude",initialValue:"-6.290690",rules:[{required:!0,message:"Masukkan Latitude"}],children:(0,n.jsx)(e.Z,{placeholder:"Latitude"})}),(0,n.jsx)(u.Z.Item,{requiredMark:"optional",name:"longitude",label:"Longitude",initialValue:"107.141853",rules:[{required:!0,message:"Masukkan Longitude"}],children:(0,n.jsx)(e.Z,{placeholder:"Longitude"})})]})]})]}),(0,n.jsx)("div",{style:{marginTop:20,textAlign:"right"},children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(u.Z.Item,{children:(0,n.jsx)(p.Z,{type:"default",onClick:function(){return h.history.push("/area/info",{area_id:y.area_id})},children:"Cancel"})}),(0,n.jsx)(u.Z.Item,{children:(0,n.jsx)(p.Z,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})})]})};S.default=x},4745:function(Y,S,a){a.d(S,{OO:function(){return u},Ug:function(){return d},_J:function(){return g},bg:function(){return f},yz:function(){return h}});var A=a(11281),m=a.n(A),B=a(97983),C=a.n(B),U=a(40794),D=a.n(U),v=a(12461),R=a(9669),M=a.n(R),P=a(9212);function f(l){return O.apply(this,arguments)}function O(){return O=D()(C()().mark(function l(r){var o,_;return C()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.Z.get("/area",m()({method:"GET"},r||{}));case 3:return o=t.sent,_=o.data,t.abrupt("return",{data:_.data,error:!1,message:"Success Get",responseCode:_.responseCode});case 8:if(t.prev=8,t.t0=t.catch(0),!M().isAxiosError(t.t0)){t.next=16;break}return console.log("error message: ",t.t0.message),v.ZP.error(t.t0.message),t.abrupt("return",{data:null,error:!0,message:t.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",t.t0),v.ZP.error("An unexpected error occurred"),t.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return t.stop()}},l,null,[[0,8]])})),O.apply(this,arguments)}var h=function(){var l=D()(C()().mark(function r(o){var _,s;return C()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.Z.get("/area/detail/".concat(o),{method:"GET"});case 3:return _=e.sent,s=_.data,e.abrupt("return",{data:s.data,error:!1,message:"Success Get",responseCode:s.responseCode});case 8:if(e.prev=8,e.t0=e.catch(0),!M().isAxiosError(e.t0)){e.next=16;break}return console.log("error message: ",e.t0.message),v.ZP.error(e.t0.message),e.abrupt("return",{data:null,error:!0,message:e.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",e.t0),v.ZP.error("An unexpected error occurred"),e.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return e.stop()}},r,null,[[0,8]])}));return function(o){return l.apply(this,arguments)}}(),u=function(){var l=D()(C()().mark(function r(o){var _,s,t;return C()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,P.Z.post("/area",{company_name:o.company_name,area_name:o.area_name,pic_name:o.pic_name,billing_address:o.billing_address,image:o.image,phone:o.phone,email_pic:o.email_pic,email_pic_admin:o.email_pic_admin,address:o.address,latitude:o.latitude,longitude:o.longitude},{headers:{"Content-Type":"multipart/form-data"}});case 3:return _=c.sent,s=_.data,c.abrupt("return",m()(m()({},s),{},{status:"ok",error:!1}));case 8:if(c.prev=8,c.t0=c.catch(0),!M().isAxiosError(c.t0)){c.next=17;break}return console.log("error message: ",c.t0.message),t=c.t0.response,t.data.message?v.ZP.error(t.data.message):v.ZP.error(c.t0.message),c.abrupt("return",{responseCode:400,message:c.t0.message,error:!0});case 17:return console.log("unexpected error: ",c.t0),v.ZP.error("An unexpected error occured"),c.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return c.stop()}},r,null,[[0,8]])}));return function(o){return l.apply(this,arguments)}}(),g=function(){var l=D()(C()().mark(function r(o,_){var s,t,e;return C()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,P.Z.post("/area/setting/"+_,m()({},o));case 3:return s=i.sent,t=s.data,i.abrupt("return",m()(m()({},t),{},{status:"ok",error:!1}));case 8:if(i.prev=8,i.t0=i.catch(0),!M().isAxiosError(i.t0)){i.next=17;break}return console.log("error message: ",i.t0.message),e=i.t0.response,e.data.message?v.ZP.error(e.data.message):v.ZP.error(i.t0.message),i.abrupt("return",{responseCode:400,message:i.t0.message,error:!0});case 17:return console.log("unexpected error: ",i.t0),v.ZP.error("An unexpected error occured"),i.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return i.stop()}},r,null,[[0,8]])}));return function(o,_){return l.apply(this,arguments)}}(),p=null,d=function(){var l=D()(C()().mark(function r(o,_){var s,t,e;return C()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,P.Z.put("/area/"+_,o);case 3:return s=i.sent,t=s.data,i.abrupt("return",m()(m()({},t),{},{status:"ok",error:!1}));case 8:if(i.prev=8,i.t0=i.catch(0),!M().isAxiosError(i.t0)){i.next=17;break}return console.log("error message: ",i.t0.message),e=i.t0.response,e.data.message?v.ZP.error(e.data.message):v.ZP.error(i.t0.message),i.abrupt("return",{responseCode:400,message:i.t0.message,error:!0});case 17:return console.log("unexpected error: ",i.t0),v.ZP.error("An unexpected error occured"),i.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return i.stop()}},r,null,[[0,8]])}));return function(o,_){return l.apply(this,arguments)}}()},95971:function(Y,S,a){a.d(S,{GU:function(){return p},cH:function(){return f},mZ:function(){return u},rR:function(){return h}});var A=a(97983),m=a.n(A),B=a(11281),C=a.n(B),U=a(40794),D=a.n(U),v=a(12461),R=a(9669),M=a.n(R),P=a(9212);function f(d){return O.apply(this,arguments)}function O(){return O=D()(m()().mark(function d(l){var r,o;return m()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,P.Z.get("/tenant",C()({method:"GET"},l||{}));case 3:return r=s.sent,o=r.data,s.abrupt("return",{data:o.data,error:!1,message:"Success Get",responseCode:o.responseCode});case 8:if(s.prev=8,s.t0=s.catch(0),!M().isAxiosError(s.t0)){s.next=16;break}return console.log("error message: ",s.t0.message),v.ZP.error(s.t0.message),s.abrupt("return",{data:null,error:!0,message:s.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",s.t0),v.ZP.error("An unexpected error occurred"),s.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return s.stop()}},d,null,[[0,8]])})),O.apply(this,arguments)}var h=function(){var d=D()(m()().mark(function l(r){var o,_,s;return m()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.Z.put("/tenant/".concat(r.id),{image:r.image,area_id:r.area_id,name:r.name,pic_name:r.pic_name,address:r.address,latitude:r.latitude,longitude:r.longitude,type:r.type,area_name:r.area_name,phone:r.phone,email:r.email,username:r.username,password:r.password,nama_unit:r.nama_unit,kode_unit:r.kode_unit},{headers:{"Content-Type":"multipart/form-data"}});case 3:return o=e.sent,_=o.data,e.abrupt("return",C()(C()({},_),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!M().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),s=e.t0.response,s.data.message?v.ZP.error(s.data.message):v.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),v.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},l,null,[[0,8]])}));return function(r){return d.apply(this,arguments)}}(),u=function(){var d=D()(m()().mark(function l(r){var o,_,s;return m()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.Z.post("/tenant",{image:r.image,area_id:r.area_id,name:r.name,pic_name:r.pic_name,address:r.address,latitude:r.latitude,longitude:r.longitude,type:r.type,area_name:r.area_name,phone:r.phone,email:r.email,username:r.username,password:r.password},{headers:{"Content-Type":"multipart/form-data"}});case 3:return o=e.sent,_=o.data,e.abrupt("return",C()(C()({},_),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!M().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),s=e.t0.response,s.data.message?v.ZP.error(s.data.message):v.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),v.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},l,null,[[0,8]])}));return function(r){return d.apply(this,arguments)}}(),g=null,p=function(){var d=D()(m()().mark(function l(r){var o,_;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.Z.get("/tenant/detail/".concat(r),{method:"GET"});case 3:return o=t.sent,_=o.data,t.abrupt("return",{data:_.data,error:!1,message:"Success Get",responseCode:_.responseCode});case 8:if(t.prev=8,t.t0=t.catch(0),!M().isAxiosError(t.t0)){t.next=16;break}return console.log("error message: ",t.t0.message),v.ZP.error(t.t0.message),t.abrupt("return",{data:null,error:!0,message:t.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",t.t0),v.ZP.error("An unexpected error occurred"),t.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return t.stop()}},l,null,[[0,8]])}));return function(r){return d.apply(this,arguments)}}()},49288:function(Y,S,a){var A=a(87462),m=a(71002),B=a(97685),C=a(94184),U=a.n(C),D=a(50344),v=a(98423),R=a(67294),M=a(53124),P=a(40038),f=a(96159),O=P.Z.Option;function h(p){return p&&p.type&&(p.type.isSelectOption||p.type.isSelectOptGroup)}var u=function(d,l){var r=d.prefixCls,o=d.className,_=d.popupClassName,s=d.dropdownClassName,t=d.children,e=d.dataSource,c=(0,D.Z)(t),i;if(c.length===1&&(0,f.l$)(c[0])&&!h(c[0])){var L=(0,B.Z)(c,1);i=L[0]}var N=i?function(){return i}:void 0,n;return c.length&&h(c[0])?n=t:n=e?e.map(function(j){if((0,f.l$)(j))return j;switch((0,m.Z)(j)){case"string":return R.createElement(O,{key:j,value:j},j);case"object":{var x=j.value;return R.createElement(O,{key:x,value:x},j.text)}default:return}}):[],R.createElement(M.C,null,function(j){var x=j.getPrefixCls,w=x("select",r);return R.createElement(P.Z,(0,A.Z)({ref:l},(0,v.Z)(d,["dataSource"]),{prefixCls:w,popupClassName:_||s,className:U()("".concat(w,"-auto-complete"),o),mode:P.Z.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:N}),n)})},g=R.forwardRef(u);g.Option=O,S.Z=g},27049:function(Y,S,a){var A=a(87462),m=a(4942),B=a(94184),C=a.n(B),U=a(67294),D=a(53124),v=function(M,P){var f={};for(var O in M)Object.prototype.hasOwnProperty.call(M,O)&&P.indexOf(O)<0&&(f[O]=M[O]);if(M!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,O=Object.getOwnPropertySymbols(M);h<O.length;h++)P.indexOf(O[h])<0&&Object.prototype.propertyIsEnumerable.call(M,O[h])&&(f[O[h]]=M[O[h]]);return f},R=function(P){var f,O=U.useContext(D.E_),h=O.getPrefixCls,u=O.direction,g=P.prefixCls,p=P.type,d=p===void 0?"horizontal":p,l=P.orientation,r=l===void 0?"center":l,o=P.orientationMargin,_=P.className,s=P.children,t=P.dashed,e=P.plain,c=v(P,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),i=h("divider",g),L=r.length>0?"-".concat(r):r,N=!!s,n=r==="left"&&o!=null,j=r==="right"&&o!=null,x=C()(i,"".concat(i,"-").concat(d),(f={},(0,m.Z)(f,"".concat(i,"-with-text"),N),(0,m.Z)(f,"".concat(i,"-with-text").concat(L),N),(0,m.Z)(f,"".concat(i,"-dashed"),!!t),(0,m.Z)(f,"".concat(i,"-plain"),!!e),(0,m.Z)(f,"".concat(i,"-rtl"),u==="rtl"),(0,m.Z)(f,"".concat(i,"-no-default-orientation-margin-left"),n),(0,m.Z)(f,"".concat(i,"-no-default-orientation-margin-right"),j),f),_),w=(0,A.Z)((0,A.Z)({},n&&{marginLeft:o}),j&&{marginRight:o});return U.createElement("div",(0,A.Z)({className:x},c,{role:"separator"}),s&&d!=="vertical"&&U.createElement("span",{className:"".concat(i,"-inner-text"),style:w},s))};S.Z=R},20906:function(Y,S,a){a.d(S,{LM:function(){return R},WV:function(){return M},ZP:function(){return D}});var A=a(67294);function m(){return m=Object.assign||function(h){for(var u=1;u<arguments.length;u++){var g=arguments[u];for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&(h[p]=g[p])}return h},m.apply(this,arguments)}var B=function(h){var u=(0,A.useRef)(h);return u.current=h,u},C=function(h,u){var g;return function(){for(var p=this,d=arguments.length,l=new Array(d),r=0;r<d;r++)l[r]=arguments[r];g!==null&&(clearTimeout(g),g=null),g=setTimeout(function(){return h.apply(p,l)},u)}},U="\u{1F4A1} use-places-autocomplete: Google Maps Places API library must be loaded. See: https://github.com/wellyshen/use-places-autocomplete#load-the-library",D=function(u){var g=u===void 0?{}:u,p=g.requestOptions,d=g.debounce,l=d===void 0?200:d,r=g.cache,o=r===void 0?24*60*60:r,_=g.cacheKey,s=_===void 0?"upa":_,t=g.googleMaps,e=g.callbackName,c=g.defaultValue,i=c===void 0?"":c,L=g.initOnMount,N=L===void 0?!0:L,n=(0,A.useState)(!1),j=n[0],x=n[1],w=(0,A.useState)(i),F=w[0],V=w[1],G=(0,A.useState)({loading:!1,status:"",data:[]}),z=G[0],y=G[1],J=(0,A.useRef)(),ne=B(p),H=B(t),Q=(0,A.useCallback)(function(){var T;if(!J.current){var W=window,K=W.google,$=H.current,k=($==null?void 0:$.places)||(K==null||(T=K.maps)==null?void 0:T.places);if(!k){console.error(U);return}J.current=new k.AutocompleteService,x(!0)}},[H]),q=(0,A.useCallback)(function(){y({loading:!1,status:"",data:[]})},[]),te=(0,A.useCallback)(function(T){T===void 0&&(T=s);try{sessionStorage.removeItem(T)}catch(W){}},[s]),ee=(0,A.useCallback)(C(function(T){var W;if(!T){q();return}y(function($){return m({},$,{loading:!0})});var K={};try{K=JSON.parse(sessionStorage.getItem(s)||"{}")}catch($){}if(o&&(K=Object.keys(K).reduce(function($,k){return K[k].maxAge-Date.now()>=0&&($[k]=K[k]),$},{}),K[T])){y({loading:!1,status:"OK",data:K[T].data});return}(W=J.current)==null||W.getPlacePredictions(m({},ne.current,{input:T}),function($,k){if(y({loading:!1,status:k,data:$||[]}),o&&k==="OK"){K[T]={data:$,maxAge:Date.now()+o*1e3};try{sessionStorage.setItem(s,JSON.stringify(K))}catch(oe){}}})},l),[o,s,q,ne]),se=(0,A.useCallback)(function(T,W){W===void 0&&(W=!0),V(T),J.current&&W&&ee(T)},[ee]);return(0,A.useEffect)(function(){if(!N)return function(){return null};var T=window,W=T.google;return!H.current&&!(W!=null&&W.maps)&&e?window[e]=Q:Q(),function(){window[e]&&delete window[e]}},[e,H,Q,N]),{ready:j,value:F,suggestions:z,setValue:se,clearSuggestions:q,clearCache:te,init:Q}},v="\u{1F4A1} use-places-autocomplete: Please provide an address when using getGeocode() with the componentRestrictions.",R=function(u){var g=new window.google.maps.Geocoder;return new Promise(function(p,d){g.geocode(u,function(l,r){r!=="OK"&&d(r),!u.address&&u.componentRestrictions&&(console.error(v),p(l)),p(l)})})},M=function(u){var g=u.geometry.location,p=g.lat,d=g.lng;return{lat:p(),lng:d()}},P=function(u,g){var p=u.address_components.find(function(d){var l=d.types;return l.includes("postal_code")});if(!!p)return g?p.short_name:p.long_name},f="\u{1F4A1} use-places-autocomplete: Please provide a place Id when using getDetails() either as a string or as part of an Autocomplete Prediction.",O=function(u){var g=new window.google.maps.places.PlacesService(document.createElement("div"));return u.placeId?new Promise(function(p,d){g.getDetails(u,function(l,r){r!=="OK"&&d(r),p(l)})}):(console.error(f),Promise.reject(f))}}}]);
