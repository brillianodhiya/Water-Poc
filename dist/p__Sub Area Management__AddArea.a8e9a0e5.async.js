"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1921],{82826:function(z,T,r){r.d(T,{Z:function(){return v}});var j=r(1413),f=r(67294),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},O=b,I=r(84089),h=function(L,y){return f.createElement(I.Z,(0,j.Z)((0,j.Z)({},L),{},{ref:y,icon:O}))};h.displayName="ArrowLeftOutlined";var v=f.forwardRef(h)},86873:function(z,T,r){r.d(T,{B:function(){return h}});var j=r(97983),f=r.n(j),b=r(40794),O=r.n(b),I=r(52948),h=function(){var v=O()(f()().mark(function D(L,y){var A;return f()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return I.Z.setApiKey("AIzaSyAcli1qFFLWrhhlDhVUCWkAJqzEY6Cp9UI"),I.Z.setLanguage("en"),I.Z.setRegion("id"),E.next=5,I.Z.fromLatLng(L,y);case 5:return A=E.sent,E.next=8,A==null?void 0:A.results[0].formatted_address;case 8:return E.abrupt("return",E.sent);case 9:case"end":return E.stop()}},D)}));return function(L,y){return v.apply(this,arguments)}}()},72923:function(z,T,r){r.d(T,{Z:function(){return E}});var j=r(97983),f=r.n(j),b=r(40794),O=r.n(b),I=r(67294),h=r(37054),v=r(11486),D=r(67669),L=r(49288),y=r(20906),A=r(85893),w=v.Z.Search;function E(l){var d=l.center,_=d===void 0?{lat:-6.2,lng:106.816666}:d,i=l.onChange,P=i===void 0?function(u){}:i,C=(0,h.Db)({googleMapsApiKey:"AIzaSyAcli1qFFLWrhhlDhVUCWkAJqzEY6Cp9UI",libraries:["places"]}),c=C.isLoaded;return c?(0,A.jsx)(p,{c:_,onChange:P}):(0,A.jsx)("div",{children:"Loading..."})}function p(l){var d=l.c,_=d===void 0?{lat:-6.2,lng:106.816666}:d,i=l.onChange,P=i===void 0?function(c){}:i,C=(0,I.useMemo)(function(){return _},[_]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"12px",alignItems:"center",alignContent:"center"},children:[(0,A.jsx)(D.Z,{style:{fontSize:"14px",fontWeight:400,marginTop:"12px"},children:"Pin Location"}),(0,A.jsx)(t,{setSelected:P})]}),(0,A.jsx)(h.b6,{onRightClick:function(u){var n=u.latLng.lat(),m=u.latLng.lng();console.log(u,"E");try{P({lat:n,lng:m})}catch{}},zoom:16,center:C,mapContainerClassName:"map-container-gateway",children:(0,A.jsx)(h.Jx,{onDragEnd:function(u){var n=u.latLng.lat(),m=u.latLng.lng();try{P({lat:n,lng:m})}catch{}},draggable:!0,position:C})})]})}var t=function(d){var _=d.setSelected,i=(0,y.ZP)(),P=i.ready,C=i.value,c=i.setValue,u=i.suggestions,n=u.status,m=u.data,g=i.clearSuggestions,e=function(){var a=O()(f()().mark(function s(Z){var k,G,W,F;return f()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return c(JSON.parse(Z).description,!1),g(),K.next=4,(0,y.LM)({address:Z});case 4:return k=K.sent,K.next=7,(0,y.WV)(k[0]);case 7:G=K.sent,W=G.lat,F=G.lng,_({lat:W,lng:F});case 11:case"end":return K.stop()}},s)}));return function(Z){return a.apply(this,arguments)}}(),o=m.map(function(a){var s=a.place_id,Z=a.description;return{label:Z,value:JSON.stringify({place_id:s,description:Z})}});return(0,A.jsx)(L.Z,{options:o,style:{width:200},onSelect:e,value:C,children:(0,A.jsx)(w,{disabled:!P,value:C,onChange:function(s){return c(s.target.value)},placeholder:"Cari Lokasi",style:{width:200}})})}},50639:function(z,T,r){r.r(T);var j=r(97983),f=r.n(j),b=r(40794),O=r.n(b),I=r(12741),h=r.n(I),v=r(86873),D=r(72923),L=r(4745),y=r(82826),A=r(24969),w=r(71063),E=r(14776),p=r(66490),t=r(422),l=r(71577),d=r(26713),_=r(58492),i=r(67669),P=r(11382),C=r(71230),c=r(15746),u=r(74565),n=r(11486),m=r(83652),g=r(67294),e=r(85893),o=function(Z){return new Promise(function(k,G){var W=new FileReader;W.readAsDataURL(Z),W.onload=function(){return k(W.result)},W.onerror=function(F){return G(F)}})},a=function(){var Z=p.Z.useForm(),k=h()(Z,1),G=k[0],W=[],F=(0,g.useState)(!1),X=h()(F,2),K=X[0],V=X[1],ne=(0,g.useState)(""),J=h()(ne,2),H=J[0],Q=J[1],te=(0,g.useState)(""),q=h()(te,2),se=q[0],R=q[1],B=g.useState({lat:-6.2,lng:106.816666}),U=h()(B,2),S=U[0],N=U[1],oe=g.useState([]),ue=h()(oe,2),ee=ue[0],ie=ue[1],ce=function($){var M=$.fileList;return ie(M)},_e=g.useState(!1),le=h()(_e,2),me=le[0],de=le[1],pe=function(){var x=O()(f()().mark(function $(M){return f()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(!(!M.url&&!M.preview)){Y.next=4;break}return Y.next=3,o(M.originFileObj);case 3:M.preview=Y.sent;case 4:Q(M.url||M.preview),V(!0),R(M.name||M.url.substring(M.url.lastIndexOf("/")+1));case 7:case"end":return Y.stop()}},$)}));return function(M){return x.apply(this,arguments)}}(),ge=function(){var x=O()(f()().mark(function $(M){var re;return f()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return de(!0),ae.next=3,(0,L.OO)({company_name:M.company_name,billing_address:M.billing_address,image:ee.length>0?ee[0].originFileObj:void 0,phone:M.phone.join(","),email_pic:M.email_pic.join(","),email_pic_admin:M.email_pic_admin.join(","),address:M.address,latitude:M.latitude,longitude:M.longitude,area_name:M.area_name,pic_name:M.pic_name});case 3:re=ae.sent,de(!1),re.error?t.Z.error({content:re.message}):t.Z.success({content:re.message,onOk:function(){E.history.push("/area")}});case 6:case"end":return ae.stop()}},$)}));return function(M){return x.apply(this,arguments)}}();return g.useEffect(function(){(0,v.B)(S.lat,S.lng).then(function(x){G.setFields([{name:"address",value:x}])})},[S]),(0,e.jsx)(w._zJ,{title:(0,e.jsx)(l.Z,{type:"link",onClick:function(){return E.history.push("/area")},size:"large",children:(0,e.jsxs)(d.Z,{style:{cursor:"pointer"},align:"start",size:"large",children:[(0,e.jsx)(y.Z,{onClick:function(){return E.history.push("/area")},style:{marginTop:"12px",fontSize:"24px",color:"#000"}}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"left"},children:[(0,e.jsxs)(_.Z,{children:[(0,e.jsx)(_.Z.Item,{children:"Area Management"}),(0,e.jsx)(_.Z.Item,{children:"Area"}),(0,e.jsx)(_.Z.Item,{href:"#",children:"Add Area"})]}),(0,e.jsx)(i.Z.Title,{level:5,children:"Add Area"})]})]})}),children:(0,e.jsx)(P.Z,{spinning:me,children:(0,e.jsxs)(p.Z,{form:G,name:"add-area",onFinish:ge,layout:"vertical",children:[(0,e.jsxs)(C.Z,{style:{borderTop:"1px solid rgba(0, 0, 0, 0.06)",borderBottom:"1px solid rgba(0, 0, 0, 0.06)"},gutter:16,children:[(0,e.jsx)(c.Z,{span:24,children:(0,e.jsx)(p.Z.Item,{style:{marginTop:"24px"},children:(0,e.jsxs)(d.Z,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(i.Z,{style:{fontSize:16},children:"Photo"}),(0,e.jsx)(i.Z,{style:{fontSize:12,color:"#8C8C8C"},children:"This wil be displayed on profile."})]}),(0,e.jsx)(u.Z,{listType:"picture-card",fileList:ee,customRequest:function($){var M=$.onSuccess;M&&setTimeout(function(){M("ok")},0)},maxCount:1,multiple:!1,accept:"image/*",onChange:ce,onPreview:pe,children:ee.length>0?null:(0,e.jsxs)("div",{children:[(0,e.jsx)(A.Z,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]})}),(0,e.jsx)(t.Z,{open:K,title:se,footer:null,onCancel:function(){return V(!1)},children:(0,e.jsx)("img",{alt:"example",style:{width:"100%"},src:H})}),ee.length>0?(0,e.jsx)(l.Z,{danger:!0,type:"text",onClick:function(){return ie([])},children:"Delete"}):null]})})}),(0,e.jsxs)(c.Z,{span:8,children:[(0,e.jsx)(p.Z.Item,{label:"Area Name",name:"area_name",rules:[{required:!0,message:"Please input area name!"}],requiredMark:"optional",children:(0,e.jsx)(n.Z,{placeholder:"Area Name"})}),(0,e.jsx)(p.Z.Item,{label:"PIC Name",name:"pic_name",rules:[{required:!0,message:"Please input pic name!"}],requiredMark:"optional",children:(0,e.jsx)(n.Z,{placeholder:"PIC Name"})}),(0,e.jsx)(p.Z.Item,{style:{marginTop:"24px"},label:"Phone",name:"phone",rules:[{required:!0,message:"Please input phone!"}],requiredMark:"optional",children:(0,e.jsx)(m.Z,{mode:"tags",style:{width:"100%"},tokenSeparators:[","],options:W,placeholder:"Phone",className:"not-rounded"})}),(0,e.jsx)(p.Z.Item,{style:{marginTop:"24px"},label:"Email",name:"email_pic",rules:[{required:!0,message:"Please input email!"}],requiredMark:"optional",children:(0,e.jsx)(m.Z,{className:"not-rounded",mode:"tags",style:{width:"100%"},tokenSeparators:[","],options:W,placeholder:"Email"})})]}),(0,e.jsxs)(c.Z,{span:8,children:[(0,e.jsx)(p.Z.Item,{label:"Email PIC Admin",name:"email_pic_admin",rules:[{required:!0,message:"Please input email pic admin!"}],requiredMark:"optional",children:(0,e.jsx)(m.Z,{mode:"tags",style:{width:"100%"},tokenSeparators:[","],options:W,placeholder:"Email PIC Admin",className:"not-rounded"})}),(0,e.jsx)(p.Z.Item,{style:{marginTop:"24px"},label:"Address",name:"address",rules:[{required:!0,message:"Please input Address!"}],requiredMark:"optional",children:(0,e.jsx)(n.Z.TextArea,{placeholder:"Address",rows:3})})]}),(0,e.jsxs)(c.Z,{span:8,children:[(0,e.jsx)(D.Z,{center:S,onChange:function($){N($),G.setFields([{name:"latitude",value:$.lat},{name:"longitude",value:$.lng}])}}),(0,e.jsxs)(d.Z,{wrap:!0,size:"large",style:{marginTop:"16px"},children:[(0,e.jsx)(p.Z.Item,{requiredMark:"optional",name:"latitude",label:"Latitude",initialValue:"-6.290690",hidden:!0,rules:[{required:!0,message:"Masukkan Latitude"}],children:(0,e.jsx)(n.Z,{placeholder:"Latitude"})}),(0,e.jsx)(p.Z.Item,{requiredMark:"optional",name:"longitude",label:"Longitude",hidden:!0,initialValue:"107.141853",rules:[{required:!0,message:"Masukkan Longitude"}],children:(0,e.jsx)(n.Z,{placeholder:"Longitude"})})]})]})]}),(0,e.jsx)("div",{style:{marginTop:20,textAlign:"right"},children:(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(p.Z.Item,{children:(0,e.jsx)(l.Z,{type:"default",onClick:function(){return E.history.push("/area")},children:"Cancel"})}),(0,e.jsx)(p.Z.Item,{children:(0,e.jsx)(l.Z,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})})})};T.default=a},4745:function(z,T,r){r.d(T,{K7:function(){return C},OO:function(){return p},Ug:function(){return d},_J:function(){return t},bg:function(){return A},if:function(){return _},yz:function(){return E}});var j=r(11281),f=r.n(j),b=r(97983),O=r.n(b),I=r(40794),h=r.n(I),v=r(12461),D=r(9669),L=r.n(D),y=r(9212);function A(c){return w.apply(this,arguments)}function w(){return w=h()(O()().mark(function c(u){var n,m;return O()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.Z.get("/area",f()({method:"GET"},u||{}));case 3:return n=e.sent,m=n.data,e.abrupt("return",{data:m.data,error:!1,message:"Success Get",responseCode:m.responseCode});case 8:if(e.prev=8,e.t0=e.catch(0),!L().isAxiosError(e.t0)){e.next=16;break}return console.log("error message: ",e.t0.message),v.ZP.error(e.t0.message),e.abrupt("return",{data:null,error:!0,message:e.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",e.t0),v.ZP.error("An unexpected error occurred"),e.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return e.stop()}},c,null,[[0,8]])})),w.apply(this,arguments)}var E=function(){var c=h()(O()().mark(function u(n){var m,g;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,y.Z.get("/area/detail/".concat(n),{method:"GET"});case 3:return m=o.sent,g=m.data,o.abrupt("return",{data:g.data,error:!1,message:"Success Get",responseCode:g.responseCode});case 8:if(o.prev=8,o.t0=o.catch(0),!L().isAxiosError(o.t0)){o.next=16;break}return console.log("error message: ",o.t0.message),v.ZP.error(o.t0.message),o.abrupt("return",{data:null,error:!0,message:o.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",o.t0),v.ZP.error("An unexpected error occurred"),o.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return o.stop()}},u,null,[[0,8]])}));return function(n){return c.apply(this,arguments)}}(),p=function(){var c=h()(O()().mark(function u(n){var m,g,e;return O()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.Z.post("/area",{company_name:n.company_name,area_name:n.area_name,pic_name:n.pic_name,billing_address:n.billing_address,image:n.image,phone:n.phone,email_pic:n.email_pic,email_pic_admin:n.email_pic_admin,address:n.address,latitude:n.latitude,longitude:n.longitude},{headers:{"Content-Type":"multipart/form-data"}});case 3:return m=a.sent,g=m.data,a.abrupt("return",f()(f()({},g),{},{status:"ok",error:!1}));case 8:if(a.prev=8,a.t0=a.catch(0),!L().isAxiosError(a.t0)){a.next=17;break}return console.log("error message: ",a.t0.message),e=a.t0.response,e.data.message?v.ZP.error(e.data.message):v.ZP.error(a.t0.message),a.abrupt("return",{responseCode:400,message:a.t0.message,error:!0});case 17:return console.log("unexpected error: ",a.t0),v.ZP.error("An unexpected error occured"),a.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return a.stop()}},u,null,[[0,8]])}));return function(n){return c.apply(this,arguments)}}(),t=function(){var c=h()(O()().mark(function u(n,m){var g,e,o;return O()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,y.Z.post("/area/setting/edit/"+m,f()({},n));case 3:return g=s.sent,e=g.data,s.abrupt("return",f()(f()({},e),{},{status:"ok",error:!1}));case 8:if(s.prev=8,s.t0=s.catch(0),!L().isAxiosError(s.t0)){s.next=17;break}return console.log("error message: ",s.t0.message),o=s.t0.response,o.data.message?v.ZP.error(o.data.message):v.ZP.error(s.t0.message),s.abrupt("return",{responseCode:400,message:s.t0.message,error:!0});case 17:return console.log("unexpected error: ",s.t0),v.ZP.error("An unexpected error occured"),s.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return s.stop()}},u,null,[[0,8]])}));return function(n,m){return c.apply(this,arguments)}}(),l=null,d=function(){var c=h()(O()().mark(function u(n,m){var g,e,o;return O()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,y.Z.put("/area/"+m,n);case 3:return g=s.sent,e=g.data,s.abrupt("return",f()(f()({},e),{},{status:"ok",error:!1}));case 8:if(s.prev=8,s.t0=s.catch(0),!L().isAxiosError(s.t0)){s.next=17;break}return console.log("error message: ",s.t0.message),o=s.t0.response,o.data.message?v.ZP.error(o.data.message):v.ZP.error(s.t0.message),s.abrupt("return",{responseCode:400,message:s.t0.message,error:!0});case 17:return console.log("unexpected error: ",s.t0),v.ZP.error("An unexpected error occured"),s.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return s.stop()}},u,null,[[0,8]])}));return function(n,m){return c.apply(this,arguments)}}(),_=function(){var c=h()(O()().mark(function u(n){var m,g,e;return O()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.Z.post("/area/create/member",{name:n.member_name,area_id:n.area_id});case 3:return m=a.sent,g=m.data,a.abrupt("return",f()(f()({},g),{},{status:"ok",error:!1}));case 8:if(a.prev=8,a.t0=a.catch(0),!L().isAxiosError(a.t0)){a.next=17;break}return console.log("error message: ",a.t0.message),e=a.t0.response,e.data.message?v.ZP.error(e.data.message):v.ZP.error(a.t0.message),a.abrupt("return",{responseCode:400,message:a.t0.message,error:!0});case 17:return console.log("unexpected error: ",a.t0),v.ZP.error("An unexpected error occured"),a.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return a.stop()}},u,null,[[0,8]])}));return function(n){return c.apply(this,arguments)}}();function i(c,u){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function c(u,n){var m,g;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,api.get("/area/member/"+n,_objectSpread({method:"GET"},u||{}));case 3:return m=o.sent,g=m.data,o.abrupt("return",{data:g.data,error:!1,message:"Success Get",responseCode:g.responseCode});case 8:if(o.prev=8,o.t0=o.catch(0),!axios.isAxiosError(o.t0)){o.next=16;break}return console.log("error message: ",o.t0.message),message.error(o.t0.message),o.abrupt("return",{data:null,error:!0,message:o.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",o.t0),message.error("An unexpected error occurred"),o.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return o.stop()}},c,null,[[0,8]])})),P.apply(this,arguments)}var C=function(){var c=h()(O()().mark(function u(n){var m,g,e;return O()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.Z.post("/area/pricing/member",n,{});case 3:return m=a.sent,g=m.data,a.abrupt("return",f()(f()({},g),{},{status:"ok",error:!1}));case 8:if(a.prev=8,a.t0=a.catch(0),!L().isAxiosError(a.t0)){a.next=17;break}return console.log("error message: ",a.t0.message),e=a.t0.response,e.data.message?v.ZP.error(e.data.message):v.ZP.error(a.t0.message),a.abrupt("return",{responseCode:400,message:a.t0.message,error:!0});case 17:return console.log("unexpected error: ",a.t0),v.ZP.error("An unexpected error occured"),a.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return a.stop()}},u,null,[[0,8]])}));return function(n){return c.apply(this,arguments)}}()},49288:function(z,T,r){var j=r(87462),f=r(71002),b=r(97685),O=r(94184),I=r.n(O),h=r(37419),v=r(10366),D=r(67294),L=r(53124),y=r(83652),A=r(96159),w=y.Z.Option;function E(l){return l&&l.type&&(l.type.isSelectOption||l.type.isSelectOptGroup)}var p=function(d,_){var i=d.prefixCls,P=d.className,C=d.popupClassName,c=d.dropdownClassName,u=d.children,n=d.dataSource,m=(0,h.Z)(u),g;if(m.length===1&&(0,A.l$)(m[0])&&!E(m[0])){var e=(0,b.Z)(m,1);g=e[0]}var o=g?function(){return g}:void 0,a;return m.length&&E(m[0])?a=u:a=n?n.map(function(s){if((0,A.l$)(s))return s;switch((0,f.Z)(s)){case"string":return D.createElement(w,{key:s,value:s},s);case"object":{var Z=s.value;return D.createElement(w,{key:Z,value:Z},s.text)}default:return}}):[],D.createElement(L.C,null,function(s){var Z=s.getPrefixCls,k=Z("select",i);return D.createElement(y.Z,(0,j.Z)({ref:_},(0,v.Z)(d,["dataSource"]),{prefixCls:k,popupClassName:C||c,className:I()("".concat(k,"-auto-complete"),P),mode:y.Z.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:o}),a)})},t=D.forwardRef(p);t.Option=w,T.Z=t},52948:function(z,T,r){var j,f=r(35666);function b(t,l,d,_,i,P,C){try{var c=t[P](C),u=c.value}catch(n){return void d(n)}c.done?l(u):Promise.resolve(u).then(_,i)}function O(t){return function(){var l=this,d=arguments;return new Promise(function(_,i){var P=t.apply(l,d);function C(u){b(P,_,i,C,c,"next",u)}function c(u){b(P,_,i,C,c,"throw",u)}C(void 0)})}}j={value:!0},T.Z=void 0;var I=!1,h=null,v="en",D=null,L=null,y="https://maps.googleapis.com/maps/api/geocode/json";function A(t){var l=arguments.length>1&&arguments[1]!==void 0&&arguments[1];I&&(l?console.warn(t):console.log(t))}function w(t){return E.apply(this,arguments)}function E(){return(E=O(f.mark(function t(l){var d,_;return f.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,fetch(l).catch(function(){return Promise.reject(new Error("Error fetching data"))});case 2:return d=i.sent,i.next=5,d.json().catch(function(){return A("Error parsing server response"),Promise.reject(new Error("Error parsing server response"))});case 5:if((_=i.sent).status!=="OK"){i.next=9;break}return A(_),i.abrupt("return",_);case 9:return A("".concat(_.error_message,`.
Server returned status code `).concat(_.status),!0),i.abrupt("return",Promise.reject(new Error("".concat(_.error_message,`.
Server returned status code `).concat(_.status))));case 11:case"end":return i.stop()}},t)}))).apply(this,arguments)}var p={setApiKey:function(t){h=t},setLanguage:function(t){v=t},setRegion:function(t){D=t},setLocationType:function(t){L=t},enableDebug:function(){var t=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];I=t},fromLatLng:function(t,l,d,_,i,P){return O(f.mark(function C(){var c,u;return f.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t&&l){n.next=3;break}return A("Provided coordinates are invalid",!0),n.abrupt("return",Promise.reject(new Error("Provided coordinates are invalid")));case 3:return c="".concat(t,",").concat(l),u="".concat(y,"?latlng=").concat(encodeURIComponent(c)),(d||h)&&(u+="&key=".concat(h=d||h)),(_||v)&&(u+="&language=".concat(v=_||v)),(i||D)&&(D=i||D,u+="&region=".concat(encodeURIComponent(D))),(P||L)&&(L=P||L,u+="&location_type=".concat(encodeURIComponent(L))),n.abrupt("return",w(u));case 9:case"end":return n.stop()}},C)}))()},fromAddress:function(t,l,d,_){return O(f.mark(function i(){var P;return f.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(t){C.next=3;break}return A("Provided address is invalid",!0),C.abrupt("return",Promise.reject(new Error("Provided address is invalid")));case 3:return P="".concat(y,"?address=").concat(encodeURIComponent(t)),(l||h)&&(P+="&key=".concat(h=l||h)),(d||v)&&(P+="&language=".concat(v=d||v)),(_||D)&&(D=_||D,P+="&region=".concat(encodeURIComponent(D))),C.abrupt("return",w(P));case 8:case"end":return C.stop()}},i)}))()}};T.Z=p},20906:function(z,T,r){r.d(T,{LM:function(){return D},WV:function(){return L},ZP:function(){return h}});var j=r(67294);function f(){return f=Object.assign||function(E){for(var p=1;p<arguments.length;p++){var t=arguments[p];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(E[l]=t[l])}return E},f.apply(this,arguments)}var b=function(E){var p=(0,j.useRef)(E);return p.current=E,p},O=function(E,p){var t;return function(){for(var l=this,d=arguments.length,_=new Array(d),i=0;i<d;i++)_[i]=arguments[i];t!==null&&(clearTimeout(t),t=null),t=setTimeout(function(){return E.apply(l,_)},p)}},I="\u{1F4A1} use-places-autocomplete: Google Maps Places API library must be loaded. See: https://github.com/wellyshen/use-places-autocomplete#load-the-library",h=function(p){var t=p===void 0?{}:p,l=t.requestOptions,d=t.debounce,_=d===void 0?200:d,i=t.cache,P=i===void 0?24*60*60:i,C=t.cacheKey,c=C===void 0?"upa":C,u=t.googleMaps,n=t.callbackName,m=t.defaultValue,g=m===void 0?"":m,e=t.initOnMount,o=e===void 0?!0:e,a=(0,j.useState)(!1),s=a[0],Z=a[1],k=(0,j.useState)(g),G=k[0],W=k[1],F=(0,j.useState)({loading:!1,status:"",data:[]}),X=F[0],K=F[1],V=(0,j.useRef)(),ne=b(l),J=b(u),H=(0,j.useCallback)(function(){var R;if(!V.current){var B=window,U=B.google,S=J.current,N=(S==null?void 0:S.places)||(U==null||(R=U.maps)==null?void 0:R.places);if(!N){console.error(I);return}V.current=new N.AutocompleteService,Z(!0)}},[J]),Q=(0,j.useCallback)(function(){K({loading:!1,status:"",data:[]})},[]),te=(0,j.useCallback)(function(R){R===void 0&&(R=c);try{sessionStorage.removeItem(R)}catch{}},[c]),q=(0,j.useCallback)(O(function(R){var B;if(!R){Q();return}K(function(S){return f({},S,{loading:!0})});var U={};try{U=JSON.parse(sessionStorage.getItem(c)||"{}")}catch{}if(P&&(U=Object.keys(U).reduce(function(S,N){return U[N].maxAge-Date.now()>=0&&(S[N]=U[N]),S},{}),U[R])){K({loading:!1,status:"OK",data:U[R].data});return}(B=V.current)==null||B.getPlacePredictions(f({},ne.current,{input:R}),function(S,N){if(K({loading:!1,status:N,data:S||[]}),P&&N==="OK"){U[R]={data:S,maxAge:Date.now()+P*1e3};try{sessionStorage.setItem(c,JSON.stringify(U))}catch{}}})},_),[P,c,Q,ne]),se=(0,j.useCallback)(function(R,B){B===void 0&&(B=!0),W(R),V.current&&B&&q(R)},[q]);return(0,j.useEffect)(function(){if(!o)return function(){return null};var R=window,B=R.google;return!J.current&&!(B!=null&&B.maps)&&n?window[n]=H:H(),function(){window[n]&&delete window[n]}},[n,J,H,o]),{ready:s,value:G,suggestions:X,setValue:se,clearSuggestions:Q,clearCache:te,init:H}},v="\u{1F4A1} use-places-autocomplete: Please provide an address when using getGeocode() with the componentRestrictions.",D=function(p){var t=new window.google.maps.Geocoder;return new Promise(function(l,d){t.geocode(p,function(_,i){i!=="OK"&&d(i),!p.address&&p.componentRestrictions&&(console.error(v),l(_)),l(_)})})},L=function(p){var t=p.geometry.location,l=t.lat,d=t.lng;return{lat:l(),lng:d()}},y=function(p,t){var l=p.address_components.find(function(d){var _=d.types;return _.includes("postal_code")});if(!!l)return t?l.short_name:l.long_name},A="\u{1F4A1} use-places-autocomplete: Please provide a place Id when using getDetails() either as a string or as part of an Autocomplete Prediction.",w=function(p){var t=new window.google.maps.places.PlacesService(document.createElement("div"));return p.placeId?new Promise(function(l,d){t.getDetails(p,function(_,i){i!=="OK"&&d(i),l(_)})}):(console.error(A),Promise.reject(A))}}}]);
