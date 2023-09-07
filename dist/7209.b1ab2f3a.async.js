"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7209],{98435:function(Z,b,s){s.d(b,{U:function(){return C}});var D=s(97983),i=s.n(D),j=s(40794),m=s.n(j),O=s(12741),f=s.n(O),d=s(4745),P=s(40038),c=s(67294),g=s(85893),C=function(p){var M=p.disabled,v=p.onChange,W=p.value,E=p.style,_=p.type,r=_===void 0?"not-rounded":_,t=p.useAll,u=p.defaultArea0,n=u===void 0?!1:u,a=(0,c.useState)([]),e=f()(a,2),l=e[0],o=e[1],L=c.useState(!1),U=f()(L,2),B=U[0],K=U[1],T=function(){var h=m()(i()().mark(function y(){var R;return i()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return K(!0),I.next=3,(0,d.bg)({});case 3:R=I.sent,K(!1),R.error||(o(R.data),n&&R.data.length>0&&v(R.data[0].id));case 6:case"end":return I.stop()}},y)}));return function(){return h.apply(this,arguments)}}();return c.useEffect(function(){T()},[]),(0,g.jsxs)(P.Z,{value:W,placeholder:"Area Name",loading:B,onChange:v,className:r,style:E,disabled:M,children:[t&&(0,g.jsx)(P.Z.Option,{value:0,children:"All Area"},0),l.map(function(h){return(0,g.jsx)(P.Z.Option,{value:h.id,children:h.area_name},h.id)})]})}},39173:function(Z,b,s){s.d(b,{w:function(){return C}});var D=s(97983),i=s.n(D),j=s(40794),m=s.n(j),O=s(12741),f=s.n(O),d=s(95971),P=s(40038),c=s(67294),g=s(85893),C=function(p){var M=p.onChange,v=p.areaId,W=p.value,E=p.style,_=p.type,r=_===void 0?"not-rounded":_,t=p.useAll,u=p.disabled,n=(0,c.useState)([]),a=f()(n,2),e=a[0],l=a[1],o=c.useState(!1),L=f()(o,2),U=L[0],B=L[1],K=function(){var T=m()(i()().mark(function h(){var y;return i()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return B(!0),$.next=3,(0,d.cH)({params:{area_id:v}});case 3:y=$.sent,console.log(y,"data tenant"),B(!1),y.error||l(y.data);case 7:case"end":return $.stop()}},h)}));return function(){return T.apply(this,arguments)}}();return c.useEffect(function(){return K(),function(){}},[v]),(0,g.jsxs)(P.Z,{value:W,placeholder:"Tenant Name",loading:U,onChange:M,className:r,style:E,disabled:u,children:[t&&(0,g.jsx)(P.Z.Option,{value:0,children:"All Tenant"},0),e.map(function(T){return(0,g.jsx)(P.Z.Option,{value:T.id,children:T.name},T.id)})]})}},4745:function(Z,b,s){s.d(b,{OO:function(){return M},Ug:function(){return E},_J:function(){return v},bg:function(){return C},yz:function(){return p}});var D=s(11281),i=s.n(D),j=s(97983),m=s.n(j),O=s(40794),f=s.n(O),d=s(12461),P=s(9669),c=s.n(P),g=s(9212);function C(_){return A.apply(this,arguments)}function A(){return A=f()(m()().mark(function _(r){var t,u;return m()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g.Z.get("/area",i()({method:"GET"},r||{}));case 3:return t=a.sent,u=t.data,a.abrupt("return",{data:u.data,error:!1,message:"Success Get",responseCode:u.responseCode});case 8:if(a.prev=8,a.t0=a.catch(0),!c().isAxiosError(a.t0)){a.next=16;break}return console.log("error message: ",a.t0.message),d.ZP.error(a.t0.message),a.abrupt("return",{data:null,error:!0,message:a.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",a.t0),d.ZP.error("An unexpected error occurred"),a.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return a.stop()}},_,null,[[0,8]])})),A.apply(this,arguments)}var p=function(){var _=f()(m()().mark(function r(t){var u,n;return m()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.get("/area/detail/".concat(t),{method:"GET"});case 3:return u=e.sent,n=u.data,e.abrupt("return",{data:n.data,error:!1,message:"Success Get",responseCode:n.responseCode});case 8:if(e.prev=8,e.t0=e.catch(0),!c().isAxiosError(e.t0)){e.next=16;break}return console.log("error message: ",e.t0.message),d.ZP.error(e.t0.message),e.abrupt("return",{data:null,error:!0,message:e.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",e.t0),d.ZP.error("An unexpected error occurred"),e.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return e.stop()}},r,null,[[0,8]])}));return function(t){return _.apply(this,arguments)}}(),M=function(){var _=f()(m()().mark(function r(t){var u,n,a;return m()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,g.Z.post("/area",{company_name:t.company_name,area_name:t.area_name,pic_name:t.pic_name,billing_address:t.billing_address,image:t.image,phone:t.phone,email_pic:t.email_pic,email_pic_admin:t.email_pic_admin,address:t.address,latitude:t.latitude,longitude:t.longitude},{headers:{"Content-Type":"multipart/form-data"}});case 3:return u=l.sent,n=u.data,l.abrupt("return",i()(i()({},n),{},{status:"ok",error:!1}));case 8:if(l.prev=8,l.t0=l.catch(0),!c().isAxiosError(l.t0)){l.next=17;break}return console.log("error message: ",l.t0.message),a=l.t0.response,a.data.message?d.ZP.error(a.data.message):d.ZP.error(l.t0.message),l.abrupt("return",{responseCode:400,message:l.t0.message,error:!0});case 17:return console.log("unexpected error: ",l.t0),d.ZP.error("An unexpected error occured"),l.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return l.stop()}},r,null,[[0,8]])}));return function(t){return _.apply(this,arguments)}}(),v=function(){var _=f()(m()().mark(function r(t,u){var n,a,e;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,g.Z.post("/area/setting/"+u,i()({},t));case 3:return n=o.sent,a=n.data,o.abrupt("return",i()(i()({},a),{},{status:"ok",error:!1}));case 8:if(o.prev=8,o.t0=o.catch(0),!c().isAxiosError(o.t0)){o.next=17;break}return console.log("error message: ",o.t0.message),e=o.t0.response,e.data.message?d.ZP.error(e.data.message):d.ZP.error(o.t0.message),o.abrupt("return",{responseCode:400,message:o.t0.message,error:!0});case 17:return console.log("unexpected error: ",o.t0),d.ZP.error("An unexpected error occured"),o.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return o.stop()}},r,null,[[0,8]])}));return function(t,u){return _.apply(this,arguments)}}(),W=null,E=function(){var _=f()(m()().mark(function r(t,u){var n,a,e;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,g.Z.put("/area/"+u,t);case 3:return n=o.sent,a=n.data,o.abrupt("return",i()(i()({},a),{},{status:"ok",error:!1}));case 8:if(o.prev=8,o.t0=o.catch(0),!c().isAxiosError(o.t0)){o.next=17;break}return console.log("error message: ",o.t0.message),e=o.t0.response,e.data.message?d.ZP.error(e.data.message):d.ZP.error(o.t0.message),o.abrupt("return",{responseCode:400,message:o.t0.message,error:!0});case 17:return console.log("unexpected error: ",o.t0),d.ZP.error("An unexpected error occured"),o.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return o.stop()}},r,null,[[0,8]])}));return function(t,u){return _.apply(this,arguments)}}()},95971:function(Z,b,s){s.d(b,{GU:function(){return W},cH:function(){return C},mZ:function(){return M},rR:function(){return p}});var D=s(97983),i=s.n(D),j=s(11281),m=s.n(j),O=s(40794),f=s.n(O),d=s(12461),P=s(9669),c=s.n(P),g=s(9212);function C(E){return A.apply(this,arguments)}function A(){return A=f()(i()().mark(function E(_){var r,t;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.Z.get("/tenant",m()({method:"GET"},_||{}));case 3:return r=n.sent,t=r.data,n.abrupt("return",{data:t.data,error:!1,message:"Success Get",responseCode:t.responseCode});case 8:if(n.prev=8,n.t0=n.catch(0),!c().isAxiosError(n.t0)){n.next=16;break}return console.log("error message: ",n.t0.message),d.ZP.error(n.t0.message),n.abrupt("return",{data:null,error:!0,message:n.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",n.t0),d.ZP.error("An unexpected error occurred"),n.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return n.stop()}},E,null,[[0,8]])})),A.apply(this,arguments)}var p=function(){var E=f()(i()().mark(function _(r){var t,u,n;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.put("/tenant/".concat(r.id),{image:r.image,area_id:r.area_id,name:r.name,pic_name:r.pic_name,address:r.address,latitude:r.latitude,longitude:r.longitude,type:r.type,area_name:r.area_name,phone:r.phone,email:r.email,username:r.username,password:r.password,nama_unit:r.nama_unit,kode_unit:r.kode_unit},{headers:{"Content-Type":"multipart/form-data"}});case 3:return t=e.sent,u=t.data,e.abrupt("return",m()(m()({},u),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!c().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),n=e.t0.response,n.data.message?d.ZP.error(n.data.message):d.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),d.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},_,null,[[0,8]])}));return function(r){return E.apply(this,arguments)}}(),M=function(){var E=f()(i()().mark(function _(r){var t,u,n;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.post("/tenant",{image:r.image,area_id:r.area_id,name:r.name,pic_name:r.pic_name,address:r.address,latitude:r.latitude,longitude:r.longitude,type:r.type,area_name:r.area_name,phone:r.phone,email:r.email,username:r.username,password:r.password},{headers:{"Content-Type":"multipart/form-data"}});case 3:return t=e.sent,u=t.data,e.abrupt("return",m()(m()({},u),{},{status:"ok",error:!1}));case 8:if(e.prev=8,e.t0=e.catch(0),!c().isAxiosError(e.t0)){e.next=17;break}return console.log("error message: ",e.t0.message),n=e.t0.response,n.data.message?d.ZP.error(n.data.message):d.ZP.error(e.t0.message),e.abrupt("return",{responseCode:400,message:e.t0.message,error:!0});case 17:return console.log("unexpected error: ",e.t0),d.ZP.error("An unexpected error occured"),e.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return e.stop()}},_,null,[[0,8]])}));return function(r){return E.apply(this,arguments)}}(),v=null,W=function(){var E=f()(i()().mark(function _(r){var t,u;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g.Z.get("/tenant/detail/".concat(r),{method:"GET"});case 3:return t=a.sent,u=t.data,a.abrupt("return",{data:u.data,error:!1,message:"Success Get",responseCode:u.responseCode});case 8:if(a.prev=8,a.t0=a.catch(0),!c().isAxiosError(a.t0)){a.next=16;break}return console.log("error message: ",a.t0.message),d.ZP.error(a.t0.message),a.abrupt("return",{data:null,error:!0,message:a.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",a.t0),d.ZP.error("An unexpected error occurred"),a.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return a.stop()}},_,null,[[0,8]])}));return function(r){return E.apply(this,arguments)}}()}}]);
