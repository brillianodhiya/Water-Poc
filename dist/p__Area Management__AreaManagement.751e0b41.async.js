"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9308],{32676:function(w,v,t){t.r(v);var O=t(97983),p=t.n(O),j=t(40794),_=t.n(j),T=t(12741),m=t.n(T),l=t(4745),b=t(68795),f=t(24969),g=t(87547),R=t(38402),E=t(30028),y=t(69677),C=t(71577),W=t(27049),$=t(11382),Z=t(71230),L=t(59652),I=t(26713),h=t(21802),M=t(24093),d=t(67294),u=t(64593),r=t(85893),o=y.Z.Search,i=function(){var a=d.useState([]),e=m()(a,2),s=e[0],F=e[1],G=d.useState(!1),U=m()(G,2),z=U[0],K=U[1],H=d.useState(!1),B=m()(H,2),S=B[0],k=B[1],N=(0,E.useModel)("@@initialState"),J=N.initialState,Q=J.currentUser,V=function(P){P||K(!1)},X=function(){var c=_()(p()().mark(function P(){var D;return p()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return k(!0),A.next=3,(0,l.bg)({});case 3:D=A.sent,console.log(D),k(!1),D.error||F(D.data);case 7:case"end":return A.stop()}},P)}));return function(){return c.apply(this,arguments)}}();return d.useEffect(function(){X()},[]),(0,r.jsxs)(R._z,{childrenContentStyle:{minHeight:"70vh"},title:"Area Management",content:"Management area setting, device and more.",extra:(0,r.jsxs)(r.Fragment,{children:[z?(0,r.jsx)(o,{onSearch:V,style:{width:200},className:"search-rounded",allowClear:!0}):(0,r.jsx)(C.Z,{shape:"circle",icon:(0,r.jsx)(b.Z,{}),onClick:function(){K(!0)}}),Q.role!="area"?(0,r.jsxs)(C.Z,{shape:"round",onClick:function(){E.history.push("/area/create")},children:[(0,r.jsx)(f.Z,{})," Create Area"]}):(0,r.jsx)(r.Fragment,{})]}),children:[(0,r.jsxs)(u.q,{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:"IKI IoT Platform | Area"}),(0,r.jsx)("link",{rel:"icon",href:"/iki-logo-no-text.png",type:"image/x-icon"})]}),(0,r.jsx)(W.Z,{}),(0,r.jsx)($.Z,{spinning:S,children:(0,r.jsx)(Z.Z,{children:s.map(function(c){return(0,r.jsxs)(L.Z,{loading:S,className:"ant-col ant-col-xs-24\r ant-col-sm-12 ant-col-md-12 ant-col-lg-8 ant-col-xl-8 ant-col-xxl-8 card-hover",onClick:function(){return E.history.push("/area/info",{area_id:c.id})},style:{cursor:"pointer"},actions:[(0,r.jsxs)(I.Z,{style:{cursor:"pointer",float:"left",paddingLeft:20},onClick:function(){return E.history.push("/area/info",{area_id:c.id})},children:[(0,r.jsx)(g.Z,{color:"#8C8C8C"}),(0,r.jsx)(h.Z.Text,{children:c.pic_name})]},c.id)],children:[(0,r.jsxs)(I.Z,{align:"center",children:[c.photo&&c.photo!==""?(0,r.jsx)(M.C,{src:c.photo,size:48}):(0,r.jsx)(M.C,{icon:(0,r.jsx)(g.Z,{}),size:48}),(0,r.jsx)(h.Z.Text,{strong:!0,children:c.area_name})]}),(0,r.jsx)(h.Z.Paragraph,{type:"secondary",style:{paddingTop:15,minHeight:70},children:c.address})]},c.id)})})})]})};v.default=i},4745:function(w,v,t){t.d(v,{K7:function(){return M},OO:function(){return C},Ug:function(){return Z},_J:function(){return W},bg:function(){return R},if:function(){return L},yz:function(){return y}});var O=t(11281),p=t.n(O),j=t(97983),_=t.n(j),T=t(40794),m=t.n(T),l=t(12461),b=t(9669),f=t.n(b),g=t(9212);function R(d){return E.apply(this,arguments)}function E(){return E=m()(_()().mark(function d(u){var r,o;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.Z.get("/area",p()({method:"GET"},u||{}));case 3:return r=n.sent,o=r.data,n.abrupt("return",{data:o.data,error:!1,message:"Success Get",responseCode:o.responseCode});case 8:if(n.prev=8,n.t0=n.catch(0),!f().isAxiosError(n.t0)){n.next=16;break}return console.log("error message: ",n.t0.message),l.ZP.error(n.t0.message),n.abrupt("return",{data:null,error:!0,message:n.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",n.t0),l.ZP.error("An unexpected error occurred"),n.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return n.stop()}},d,null,[[0,8]])})),E.apply(this,arguments)}var y=function(){var d=m()(_()().mark(function u(r){var o,i;return _()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g.Z.get("/area/detail/".concat(r),{method:"GET"});case 3:return o=a.sent,i=o.data,a.abrupt("return",{data:i.data,error:!1,message:"Success Get",responseCode:i.responseCode});case 8:if(a.prev=8,a.t0=a.catch(0),!f().isAxiosError(a.t0)){a.next=16;break}return console.log("error message: ",a.t0.message),l.ZP.error(a.t0.message),a.abrupt("return",{data:null,error:!0,message:a.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",a.t0),l.ZP.error("An unexpected error occurred"),a.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return a.stop()}},u,null,[[0,8]])}));return function(r){return d.apply(this,arguments)}}(),C=function(){var d=m()(_()().mark(function u(r){var o,i,n;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.post("/area",{company_name:r.company_name,area_name:r.area_name,pic_name:r.pic_name,billing_address:r.billing_address,image:r.image,phone:r.phone,email_pic:r.email_pic,email_pic_admin:r.email_pic_admin,address:r.address,latitude:r.latitude,longitude:r.longitude},{headers:{"Content-Type":"multipart/form-data"}});case 3:return o=e.sent,i=o.data,e.abrupt("return",p()(p()({},i),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!f().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),n=e.t0.response,n.data.message?l.ZP.error(n.data.message):l.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),l.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},u,null,[[0,8]])}));return function(r){return d.apply(this,arguments)}}(),W=function(){var d=m()(_()().mark(function u(r,o){var i,n,a;return _()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,g.Z.post("/area/setting/edit/"+o,p()({},r));case 3:return i=s.sent,n=i.data,s.abrupt("return",p()(p()({},n),{},{status:"ok",error:!1}));case 8:if(s.prev=8,s.t0=s.catch(0),!f().isAxiosError(s.t0)){s.next=17;break}return console.log("error message: ",s.t0.message),a=s.t0.response,a.data.message?l.ZP.error(a.data.message):l.ZP.error(s.t0.message),s.abrupt("return",{responseCode:400,message:s.t0.message,error:!0});case 17:return console.log("unexpected error: ",s.t0),l.ZP.error("An unexpected error occured"),s.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return s.stop()}},u,null,[[0,8]])}));return function(r,o){return d.apply(this,arguments)}}(),$=null,Z=function(){var d=m()(_()().mark(function u(r,o){var i,n,a;return _()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,g.Z.put("/area/"+o,r);case 3:return i=s.sent,n=i.data,s.abrupt("return",p()(p()({},n),{},{status:"ok",error:!1}));case 8:if(s.prev=8,s.t0=s.catch(0),!f().isAxiosError(s.t0)){s.next=17;break}return console.log("error message: ",s.t0.message),a=s.t0.response,a.data.message?l.ZP.error(a.data.message):l.ZP.error(s.t0.message),s.abrupt("return",{responseCode:400,message:s.t0.message,error:!0});case 17:return console.log("unexpected error: ",s.t0),l.ZP.error("An unexpected error occured"),s.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return s.stop()}},u,null,[[0,8]])}));return function(r,o){return d.apply(this,arguments)}}(),L=function(){var d=m()(_()().mark(function u(r){var o,i,n;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.post("/area/create/member",{name:r.member_name,area_id:r.area_id});case 3:return o=e.sent,i=o.data,e.abrupt("return",p()(p()({},i),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!f().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),n=e.t0.response,n.data.message?l.ZP.error(n.data.message):l.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),l.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},u,null,[[0,8]])}));return function(r){return d.apply(this,arguments)}}();function I(d,u){return h.apply(this,arguments)}function h(){return h=_asyncToGenerator(_regeneratorRuntime().mark(function d(u,r){var o,i;return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,api.get("/area/member/"+r,_objectSpread({method:"GET"},u||{}));case 3:return o=a.sent,i=o.data,a.abrupt("return",{data:i.data,error:!1,message:"Success Get",responseCode:i.responseCode});case 8:if(a.prev=8,a.t0=a.catch(0),!axios.isAxiosError(a.t0)){a.next=16;break}return console.log("error message: ",a.t0.message),message.error(a.t0.message),a.abrupt("return",{data:null,error:!0,message:a.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",a.t0),message.error("An unexpected error occurred"),a.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return a.stop()}},d,null,[[0,8]])})),h.apply(this,arguments)}var M=function(){var d=m()(_()().mark(function u(r){var o,i,n;return _()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.post("/area/pricing/member",r,{});case 3:return o=e.sent,i=o.data,e.abrupt("return",p()(p()({},i),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!f().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),n=e.t0.response,n.data.message?l.ZP.error(n.data.message):l.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),l.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},u,null,[[0,8]])}));return function(r){return d.apply(this,arguments)}}()}}]);
