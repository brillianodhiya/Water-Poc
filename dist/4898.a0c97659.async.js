"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4898],{78560:function(A,v,n){n.d(v,{x:function(){return l}});var b=function(){var p="data:application/vnd.ms-excel;base64,",i='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',u=function(s){return window.btoa(unescape(encodeURIComponent(s)))},d=function(s,_){return s.replace(/{(\w+)}/g,function(g,h){return _[h]})};return function(o,s,_){o.nodeType||(o=document.getElementById(o));var g={worksheet:s||"Worksheet",table:o.innerHTML};document.getElementById("dlink").href=p+u(d(i,g)),document.getElementById("dlink").download=_,document.getElementById("dlink").click()}},l=function(){var p="data:application/vnd.ms-excel;base64,",i='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',u=function(s){return window.btoa(unescape(encodeURIComponent(s)))},d=function(s,_){return s.replace(/{(\w+)}/g,function(g,h){return _[h]})};return function(o,s,_){var g;o.nodeType||(o=(g=document.getElementById(o))===null||g===void 0?void 0:g.getElementsByTagName("table")[0]);var h={worksheet:s||"Worksheet",table:o.innerHTML};document.getElementById("dlink").href=p+u(d(i,h)),document.getElementById("dlink").download=_,document.getElementById("dlink").click()}}},75539:function(A,v,n){n.d(v,{D:function(){return l},q:function(){return T}});var b=n(67294),l=function(i){i=parseFloat(i),isNaN(i)&&(i=0);var u=new Intl.NumberFormat("id-ID").format(i);return u.split(",").length>1?u.split(",")[1].length<3?u.split(",")[0]+","+(u.split(",")[1]+"000").slice(0,3):u:u+",000"},T=function(i){return new Intl.NumberFormat("id-ID").format(i)}},39173:function(A,v,n){n.d(v,{w:function(){return g}});var b=n(97983),l=n.n(b),T=n(40794),p=n.n(T),i=n(12741),u=n.n(i),d=n(95971),o=n(40038),s=n(67294),_=n(85893),g=function(D){var C=D.onChange,k=D.areaId,O=D.value,E=D.style,m=D.type,e=m===void 0?"not-rounded":m,c=D.useAll,f=D.disabled,a=(0,s.useState)([]),t=u()(a,2),r=t[0],W=t[1],R=s.useState(!1),M=u()(R,2),B=M[0],j=M[1],w=function(){var x=p()(l()().mark(function I(){var P;return l()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return j(!0),y.next=3,(0,d.cH)({params:{area_id:k}});case 3:P=y.sent,console.log(P,"data tenant"),j(!1),P.error||W(P.data);case 7:case"end":return y.stop()}},I)}));return function(){return x.apply(this,arguments)}}();return s.useEffect(function(){return w(),function(){}},[k]),(0,_.jsxs)(o.Z,{value:O,placeholder:"Tenant Name",loading:B,onChange:C,className:e,style:E,disabled:f,children:[c&&(0,_.jsx)(o.Z.Option,{value:0,children:"All Tenant"},0),r.map(function(x){return(0,_.jsx)(o.Z.Option,{value:x.id,children:x.name},x.id)})]})}},95971:function(A,v,n){n.d(v,{GU:function(){return O},cH:function(){return g},mZ:function(){return C},rR:function(){return D}});var b=n(97983),l=n.n(b),T=n(11281),p=n.n(T),i=n(40794),u=n.n(i),d=n(12461),o=n(9669),s=n.n(o),_=n(9212);function g(E){return h.apply(this,arguments)}function h(){return h=u()(l()().mark(function E(m){var e,c;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_.Z.get("/tenant",p()({method:"GET"},m||{}));case 3:return e=a.sent,c=e.data,a.abrupt("return",{data:c.data,error:!1,message:"Success Get",responseCode:c.responseCode});case 8:if(a.prev=8,a.t0=a.catch(0),!s().isAxiosError(a.t0)){a.next=16;break}return console.log("error message: ",a.t0.message),d.ZP.error(a.t0.message),a.abrupt("return",{data:null,error:!0,message:a.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",a.t0),d.ZP.error("An unexpected error occurred"),a.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return a.stop()}},E,null,[[0,8]])})),h.apply(this,arguments)}var D=function(){var E=u()(l()().mark(function m(e){var c,f,a;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,_.Z.put("/tenant/".concat(e.id),{image:e.image,area_id:e.area_id,name:e.name,pic_name:e.pic_name,address:e.address,latitude:e.latitude,longitude:e.longitude,type:e.type,area_name:e.area_name,phone:e.phone,email:e.email,username:e.username,password:e.password,nama_unit:e.nama_unit,kode_unit:e.kode_unit},{headers:{"Content-Type":"multipart/form-data"}});case 3:return c=r.sent,f=c.data,r.abrupt("return",p()(p()({},f),{},{status:"ok",error:!1}));case 8:if(r.prev=8,r.t0=r.catch(0),!s().isAxiosError(r.t0)){r.next=17;break}return console.log("error message: ",r.t0.message),a=r.t0.response,a.data.message?d.ZP.error(a.data.message):d.ZP.error(r.t0.message),r.abrupt("return",{responseCode:400,message:r.t0.message,error:!0});case 17:return console.log("unexpected error: ",r.t0),d.ZP.error("An unexpected error occured"),r.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return r.stop()}},m,null,[[0,8]])}));return function(e){return E.apply(this,arguments)}}(),C=function(){var E=u()(l()().mark(function m(e){var c,f,a;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,_.Z.post("/tenant",{image:e.image,area_id:e.area_id,name:e.name,pic_name:e.pic_name,address:e.address,latitude:e.latitude,longitude:e.longitude,type:e.type,area_name:e.area_name,phone:e.phone,email:e.email,username:e.username,password:e.password},{headers:{"Content-Type":"multipart/form-data"}});case 3:return c=r.sent,f=c.data,r.abrupt("return",p()(p()({},f),{},{status:"ok",error:!1}));case 8:if(r.prev=8,r.t0=r.catch(0),!s().isAxiosError(r.t0)){r.next=17;break}return console.log("error message: ",r.t0.message),a=r.t0.response,a.data.message?d.ZP.error(a.data.message):d.ZP.error(r.t0.message),r.abrupt("return",{responseCode:400,message:r.t0.message,error:!0});case 17:return console.log("unexpected error: ",r.t0),d.ZP.error("An unexpected error occured"),r.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return r.stop()}},m,null,[[0,8]])}));return function(e){return E.apply(this,arguments)}}(),k=null,O=function(){var E=u()(l()().mark(function m(e){var c,f;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.Z.get("/tenant/detail/".concat(e),{method:"GET"});case 3:return c=t.sent,f=c.data,t.abrupt("return",{data:f.data,error:!1,message:"Success Get",responseCode:f.responseCode});case 8:if(t.prev=8,t.t0=t.catch(0),!s().isAxiosError(t.t0)){t.next=16;break}return console.log("error message: ",t.t0.message),d.ZP.error(t.t0.message),t.abrupt("return",{data:null,error:!0,message:t.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",t.t0),d.ZP.error("An unexpected error occurred"),t.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return t.stop()}},m,null,[[0,8]])}));return function(e){return E.apply(this,arguments)}}()}}]);
