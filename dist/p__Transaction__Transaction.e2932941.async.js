"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4843],{75539:function(le,Z,r){r.d(Z,{DT:function(){return i},et:function(){return k},qi:function(){return h}});var K=r(67294),i=function(n){return new Intl.NumberFormat("id-ID").format(n)},N=function(n){n=parseFloat(n),isNaN(n)&&(n=0);var j=new Intl.NumberFormat("id-ID").format(n);return j.split(",").length>1?j.split(",")[1].length<3?j.split(",")[0]+","+(j.split(",")[1]+"000").slice(0,3):j:j+",000"},h=function(n){return new Intl.NumberFormat("id-ID").format(n)},k=function(n){return n==null?void 0:n.toLocaleString("id-ID",{style:"currency",currency:"IDR"})}},39173:function(le,Z,r){r.d(Z,{w:function(){return F}});var K=r(97983),i=r.n(K),N=r(40794),h=r.n(N),k=r(12741),A=r.n(k),n=r(95971),j=r(40038),E=r(67294),P=r(85893),F=function(y){var S=y.onChange,I=y.areaId,v=y.value,c=y.style,u=y.type,t=u===void 0?"not-rounded":u,s=y.useAll,x=y.disabled,d=(0,E.useState)([]),m=A()(d,2),a=m[0],L=m[1],de=E.useState(!1),ae=A()(de,2),ye=ae[0],ne=ae[1],ge=function(e,_){var X;return((X=_==null?void 0:_.children)!==null&&X!==void 0?X:"").toLowerCase().includes(e.toLowerCase())},fe=function(){var U=h()(i()().mark(function e(){var _;return i()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return ne(!0),V.next=3,(0,n.cH)({params:{area_id:I}});case 3:_=V.sent,console.log(_,"data tenant"),ne(!1),_.error||L(_.data);case 7:case"end":return V.stop()}},e)}));return function(){return U.apply(this,arguments)}}();return E.useEffect(function(){return fe(),function(){}},[I]),(0,P.jsxs)(j.Z,{showSearch:!0,value:v,placeholder:"Tenant Name",loading:ye,onChange:S,className:t,optionFilterProp:"children",filterOption:ge,disabled:x,children:[s&&(0,P.jsx)(j.Z.Option,{value:0,children:"All Tenant"},0),a.map(function(U){return(0,P.jsx)(j.Z.Option,{value:U.id,children:U.name},U.id)})]})}},27282:function(le,Z,r){r.r(Z),r.d(Z,{default:function(){return Oe}});var K=r(12741),i=r.n(K),N=r(5200),h=r.n(N),k=r(38402),A=r(96619),n=r(67294),j=r(97983),E=r.n(j),P=r(40794),F=r.n(P),R=r(58638),y=r(23349),S=r(59652),I=r(71230),v=r(15746),c=r(26713),u=r(21802),t=r(40038),s=r(41232),x=r(71577),d=r(64593),m=r(30381),a=r.n(m),L=r(75539),de=r(98435),ae=r(39173),ye=function(){var w="data:application/vnd.ms-excel;base64,",O='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',b=function(g){return window.btoa(unescape(encodeURIComponent(g)))},W=function(g,T){return g.replace(/{(\w+)}/g,function(C,$){return T[$]})};return function(f,g,T){f.nodeType||(f=document.getElementById(f));var C={worksheet:g||"Worksheet",table:f.innerHTML};document.getElementById("dlink").href=w+b(W(O,C)),document.getElementById("dlink").download=T,document.getElementById("dlink").click()}},ne=function(){var w="data:application/vnd.ms-excel;base64,",O='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',b=function(g){return window.btoa(unescape(encodeURIComponent(g)))},W=function(g,T){return g.replace(/{(\w+)}/g,function(C,$){return T[$]})};return function(f,g,T){var C;f.nodeType||(f=(C=document.getElementById(f))===null||C===void 0?void 0:C.getElementsByTagName("table")[0]);var $={worksheet:g||"Worksheet",table:f.innerHTML};document.getElementById("dlink").href=w+b(W(O,$)),document.getElementById("dlink").download=T,document.getElementById("dlink").click()}},ge=r(69408),fe=r(39347),U=r(83461),e=r(85893),_=y.Z.Column;a().locale("en");var X=function(){var w=n.useState([]),O=i()(w,2),b=O[0],W=O[1],f=n.useState(!1),g=i()(f,2),T=g[0],C=g[1],$=n.useState(0),ue=i()($,2),Y=ue[0],z=ue[1],he=n.useState(0),ce=i()(he,2),H=ce[0],q=ce[1],ve=n.useState(a()()),me=i()(ve,2),ee=me[0],re=me[1],xe=n.useState([a()(),a()().add(1,"day")]),pe=i()(xe,2),Q=pe[0],te=pe[1],Ae=n.useState("periode"),_e=i()(Ae,2),B=_e[0],se=_e[1],Ce=function(){ne()("reports-log","Reports Log ","Reports Log "+a()().unix())},je=function(){var D=F()(E()().mark(function o(){var l;return E()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return C(!0),J.next=3,(0,ge.tq)({params:{area_id:Y||void 0,tenant_id:H||void 0,periode:B=="periode"?ee.format("YYYY-MM"):void 0,start_date:B!="periode"?Q[0].format("YYYY-MM-DD"):void 0,end_date:B!="periode"?Q[1].format("YYYY-MM-DD"):void 0,type:B}});case 3:l=J.sent,C(!1),l.error||W(l.data);case 6:case"end":return J.stop()}},o)}));return function(){return D.apply(this,arguments)}}();n.useEffect(function(){return je(),function(){}},[ee,Y,H,B,Q]);var De=function(){var o=[{A1:"",A2:"",A3:"Aetra Air Tangerang",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",A11:"",A12:"",A13:""},{A1:"",A2:"",A3:"",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",A11:"",A12:"",A13:""},{A1:"",A2:"",A3:"Usage List",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",A11:"",A12:"",A13:""},{A1:"",A2:"",A3:"",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",A11:"Meter",A12:"",A13:""},{A1:"#",A2:"Area Name",A3:"Kode Unit",A4:"Unit Name",A5:"DevEui.",A6:"Meter Id",A7:"Customer Name",A8:"Periode",A9:"Start Date",A10:"End Date",A11:"Start Totalizer",A12:"End Totalizer",A13:"Usage"}];return b.map(function(l,p){o.push({A1:(p+1).toString(),A2:l.area_name,A3:l.kode_unit,A4:l.unit_name,A5:"'".concat(l.deveui),A6:l.meter_id,A7:"'".concat(l.tenant_name),A8:l.periode,A9:a()(l.start_date).format("DD/MM/YYYY"),A10:a()(l.end_date).format("DD/MM/YYYY"),A11:l.start_totalizer.toString(),A12:l.end_totalizer.toString(),A13:l.usage.toString()})}),o},Ee=De();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(d.q,{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("link",{rel:"icon",href:"/iki-logo-no-text.png",type:"image/x-icon"}),(0,e.jsx)("title",{children:"IKI IoT Platform | Transaction"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(S.Z,{style:{borderRadius:8,marginBottom:20},bodyStyle:{background:" rgba(230, 247, 255, 0.5)"},children:(0,e.jsx)(I.Z,{gutter:[16,16],align:"bottom",children:(0,e.jsxs)(v.Z,{span:24,style:{textAlign:"left"},children:[(0,e.jsxs)(c.Z,{size:"large",wrap:!0,children:[(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{style:{opacity:0},children:"Filter Type"}),(0,e.jsxs)(t.Z,{style:{width:120},value:B,onChange:function(o){se(o)},children:[(0,e.jsx)(t.Z.Option,{value:"periode",children:"Periode"}),(0,e.jsx)(t.Z.Option,{value:"range",children:"Range"})]})]}),B=="periode"?(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{children:"Periode"}),(0,e.jsx)(s.Z.MonthPicker,{allowClear:!1,value:ee,onChange:function(o){return re(o)}})]}):(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{children:"Range"}),(0,e.jsx)(s.Z.RangePicker,{allowClear:!1,value:Q,onChange:function(o){return te(o)}})]}),(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{children:"Area Name"}),(0,e.jsx)(de.U,{onChange:function(o){z(o)},style:{width:"200px"},type:"rounded",useAll:!0,value:Y})]}),(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{children:"Tenant Name"}),(0,e.jsx)(ae.w,{onChange:function(o){q(o)},areaId:Y==0?void 0:Y,style:{width:"200px"},type:"rounded",useAll:!0,value:H})]})]}),(0,e.jsx)(U.CSVLink,{data:Ee,headers:[{label:"",key:"A1"},{label:"",key:"A2"},{label:"",key:"A3"},{label:"",key:"A4"},{label:"",key:"A5"},{label:"",key:"A6"},{label:"",key:"A7"},{label:"",key:"A8"},{label:"",key:"A9"},{label:"",key:"A10"},{label:"",key:"A11"},{label:"",key:"A12"},{label:"",key:"A13"}],filename:"Reports_Log_".concat(a()().format("YYYY-MM"),"_").concat(a()().unix(),".csv"),children:(0,e.jsx)(x.Z,{style:{float:"right",marginTop:"24px"},type:"primary",icon:(0,e.jsx)(R.Z,{}),children:"Export"})})]})})}),(0,e.jsxs)(y.Z,{dataSource:b,loading:T,style:{borderRadius:8,border:"1px solid #f0f0f0"},size:"small",bordered:!0,scroll:{x:!0},children:[(0,e.jsx)(_,{title:"Area Name",dataIndex:"area_name"},"area_name"),(0,e.jsx)(_,{title:"Kode Unit",dataIndex:"kode_unit"},"kode_unit"),(0,e.jsx)(_,{title:"Unit Name",dataIndex:"unit_name"},"unit_name"),(0,e.jsx)(_,{title:"DevEui",dataIndex:"deveui"},"deveui"),(0,e.jsx)(_,{title:"Meter Id",dataIndex:"meter_id"},"meter_id"),(0,e.jsx)(_,{title:"Customer Name",dataIndex:"tenant_name"},"tenant_name"),(0,e.jsx)(_,{title:"Periode",dataIndex:"periode"},"periode"),(0,e.jsx)(_,{title:"Start Date",dataIndex:"start_date",render:function(o){return a()(o).format("DD/MM/YYYY")}},"start_date"),(0,e.jsx)(_,{title:"End Date",dataIndex:"end_date",render:function(o){return a()(o).format("DD/MM/YYYY")}},"end_date"),(0,e.jsxs)(fe.Z,{title:"Meter",children:[(0,e.jsx)(_,{title:"Start Totalizer",dataIndex:"start_totalizer",render:function(o){return(0,L.DT)(o)}},"start_totalizer"),(0,e.jsx)(_,{title:"End Totalizer",dataIndex:"end_totalizer",render:function(o){return(0,L.DT)(o)}},"end_totalizer"),(0,e.jsx)(_,{title:"Usage",dataIndex:"usage",render:function(o){return(0,L.DT)(o)}},"usage")]})]})]})]})},V=X,Pe=r(41231),Te=r(99611),be=r(30028),Re=r(69677),M=r(63922),G=r(94217),Se=function(w){h()(w);var O=n.useState([]),b=i()(O,2),W=b[0],f=b[1],g=n.useState(!1),T=i()(g,2),C=T[0],$=T[1],ue=n.useState(0),Y=i()(ue,2),z=Y[0],he=Y[1],ce=n.useState(0),H=i()(ce,2),q=H[0],ve=H[1],me=n.useState(void 0),ee=i()(me,2),re=ee[0],xe=ee[1],pe=n.useState("all"),Q=i()(pe,2),te=Q[0],Ae=Q[1],_e=n.useState(""),B=i()(_e,2),se=B[0],Ce=B[1],je=function(){var o=F()(E()().mark(function l(){var p;return E()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return $(!0),oe.next=3,(0,Pe.t)({params:{area_id:z||void 0,tenant_id:q||void 0,periode:re?re.format("YYYY-MM"):void 0,status:te!=="all"?te:void 0,search:se||void 0}});case 3:p=oe.sent,$(!1),p.error||f(p.data);case 6:case"end":return oe.stop()}},l)}));return function(){return o.apply(this,arguments)}}();n.useEffect(function(){je()},[z,q,re,te,se]);var De=function(){ne()("billing","Billing ","Billing "+a()().unix())},Ee=function(){var l=[];return W.map(function(p){l.push({invoice:p.invoice,area_name:p.Nebula_Area.area_name,tenant_name:p.Nebula_Tenant.name,periode:p.periode,usage:(0,L.qi)(p.usage),status:p.status,grand_total:(0,L.et)(p.grand_total)})}),l},D=Ee();return(0,e.jsxs)("div",{children:[(0,e.jsxs)(S.Z,{style:{borderRadius:8,marginBottom:20},bodyStyle:{background:" rgba(230, 247, 255, 0.5)"},children:[(0,e.jsxs)(d.q,{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("title",{children:"IKI IoT Platform | Transaction"}),(0,e.jsx)("link",{rel:"icon",href:"/iki-logo-no-text.png",type:"image/x-icon"})]}),(0,e.jsxs)(I.Z,{gutter:[16,16],justify:"space-between",align:"bottom",children:[(0,e.jsx)(v.Z,{children:(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{children:"Search"}),(0,e.jsx)(Re.Z.Search,{onSearch:function(l){return Ce(l)},style:{borderRadius:"20px"},placeholder:"No Invoice"})]})}),(0,e.jsx)(v.Z,{children:(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{children:"Status"}),(0,e.jsx)(t.Z,{value:te,style:{width:150,borderRadius:100},onChange:function(l){Ae(l)},options:[{value:"all",label:(0,e.jsx)(M.Z,{color:"blue",text:"All"})},{value:"new",label:(0,e.jsx)(M.Z,{color:"cyan",text:"New"})},{value:"paid",label:(0,e.jsx)(M.Z,{color:"green",text:"Paid"})},{value:"unpaid",label:(0,e.jsx)(M.Z,{color:"orange",text:"Unpaid"})},{value:"cancel",label:(0,e.jsx)(M.Z,{color:"red",text:"Cancel"})}]})]})}),(0,e.jsx)(v.Z,{children:(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{children:"Area"}),(0,e.jsx)(de.U,{useAll:!0,defaultArea0:!1,value:z,onChange:function(l){return he(l)},type:"rounded",disabled:!1,style:{width:"200px"}})]})}),(0,e.jsx)(v.Z,{children:(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{children:"Tenant"}),(0,e.jsx)(ae.w,{useAll:!0,onChange:function(l){return ve(l)},style:{width:"200px"},type:"rounded",areaId:z==0?void 0:z,value:q,disabled:!1})]})}),(0,e.jsx)(v.Z,{children:(0,e.jsxs)(c.Z,{direction:"vertical",children:[(0,e.jsx)(u.Z,{children:"Priode"}),(0,e.jsx)(s.Z.MonthPicker,{value:re,onChange:function(l){return xe(l)}})]})}),(0,e.jsx)(v.Z,{style:{paddingTop:20},children:(0,e.jsx)(U.CSVLink,{data:D,headers:[{label:"No Invoice",key:"invoice"},{label:"Area Name",key:"area_name"},{label:"Tenant",key:"tenant_name"},{label:"Periode",key:"periode"},{label:"Usage",key:"usage"},{label:"Status",key:"status"},{label:"Amount",key:"grand_total"}],filename:"Billing_".concat(a()().format("YYYY-MM"),"_").concat(a()().unix(),".csv"),children:(0,e.jsx)(x.Z,{type:"primary",icon:(0,e.jsx)(R.Z,{}),children:"Export"})})})]})]}),(0,e.jsxs)(y.Z,{dataSource:W,loading:C,style:{borderRadius:8,border:"1px solid #f0f0f0"},children:[(0,e.jsx)(G.Z,{title:"No Invoice",dataIndex:"invoice"},"invoice"),(0,e.jsx)(G.Z,{title:"Area Name",dataIndex:["Nebula_Area","area_name"]},"area_name"),(0,e.jsx)(G.Z,{title:"Tenant",dataIndex:["Nebula_Tenant","name"]},"tenant_name"),(0,e.jsx)(G.Z,{title:"Periode",dataIndex:"periode"},"periode"),(0,e.jsx)(G.Z,{title:"Usage",dataIndex:"usage",render:function(l){return(0,L.qi)(l)}},"usage"),(0,e.jsx)(G.Z,{title:"Status",dataIndex:"status",render:function(l,p){return p.status==="new"?(0,e.jsx)(M.Z,{color:"cyan",text:"New"}):p.status==="paid"?(0,e.jsx)(M.Z,{color:"green",text:"Paid"}):p.status==="unpaid"?(0,e.jsx)(M.Z,{color:"orange",text:"Unpaid"}):p.status==="cancel"?(0,e.jsx)(M.Z,{color:"red",text:"Cancel"}):(0,e.jsx)(M.Z,{color:"cyan",text:"Paid"})}},"status"),(0,e.jsx)(G.Z,{title:"Amount",dataIndex:"grand_total",render:function(l){return(0,L.et)(l)}},"grand_total"),(0,e.jsx)(G.Z,{title:"Action",render:function(l,p){return(0,e.jsxs)(x.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){console.log(p),be.history.push("/billing/detail/"+p.id)},children:[(0,e.jsx)(Te.Z,{}),"View Detail"]})}},"action")]})]})},Ie=Se,Ze=r(18537),Me=function(w){h()(w);var O=n.useState("usage"),b=i()(O,2),W=b[0],f=b[1],g=Ze.Z.parse(window.location.search);return console.log(g,"QQ"),n.useEffect(function(){g.tab&&f(g.tab)},[g]),(0,e.jsx)(k._z,{childrenContentStyle:{minHeight:"70vh"},title:"Transaction",content:"Manage your Transaction",children:(0,e.jsx)(A.Z,{defaultActiveKey:"usage",items:[{label:"Usage",key:"usage",children:(0,e.jsx)(V,{})},{label:"Billing",key:"billing",children:(0,e.jsx)(Ie,{})}],activeKey:W,onChange:function(C){f(C),window.history.pushState(null,"","?tab=".concat(C))}})})},Oe=Me},41231:function(le,Z,r){r.d(Z,{W:function(){return y},t:function(){return F}});var K=r(11281),i=r.n(K),N=r(97983),h=r.n(N),k=r(40794),A=r.n(k),n=r(12461),j=r(9669),E=r.n(j),P=r(9212);function F(S){return R.apply(this,arguments)}function R(){return R=A()(h()().mark(function S(I){var v,c;return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.Z.get("/billing",i()({method:"GET"},I||{}));case 3:return v=t.sent,c=v.data,t.abrupt("return",{data:c.data,error:!1,message:"Success Get",responseCode:c.responseCode});case 8:if(t.prev=8,t.t0=t.catch(0),!E().isAxiosError(t.t0)){t.next=16;break}return console.log("error message: ",t.t0.message),n.ZP.error(t.t0.message),t.abrupt("return",{data:null,error:!0,message:t.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",t.t0),n.ZP.error("An unexpected error occurred"),t.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return t.stop()}},S,null,[[0,8]])})),R.apply(this,arguments)}var y=function(){var S=A()(h()().mark(function I(v){var c,u;return h()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,P.Z.get("/billing/"+v,{method:"GET"});case 3:return c=s.sent,u=c.data,s.abrupt("return",{data:u.data,error:!1,message:"Success Get",responseCode:u.responseCode});case 8:if(s.prev=8,s.t0=s.catch(0),!E().isAxiosError(s.t0)){s.next=16;break}return console.log("error message: ",s.t0.message),n.ZP.error(s.t0.message),s.abrupt("return",{data:null,error:!0,message:s.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",s.t0),n.ZP.error("An unexpected error occurred"),s.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return s.stop()}},I,null,[[0,8]])}));return function(v){return S.apply(this,arguments)}}()},95971:function(le,Z,r){r.d(Z,{GU:function(){return v},cH:function(){return F},mZ:function(){return S},rR:function(){return y}});var K=r(97983),i=r.n(K),N=r(11281),h=r.n(N),k=r(40794),A=r.n(k),n=r(12461),j=r(9669),E=r.n(j),P=r(9212);function F(c){return R.apply(this,arguments)}function R(){return R=A()(i()().mark(function c(u){var t,s;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,P.Z.get("/tenant",h()({method:"GET"},u||{}));case 3:return t=d.sent,s=t.data,d.abrupt("return",{data:s.data,error:!1,message:"Success Get",responseCode:s.responseCode});case 8:if(d.prev=8,d.t0=d.catch(0),!E().isAxiosError(d.t0)){d.next=16;break}return console.log("error message: ",d.t0.message),n.ZP.error(d.t0.message),d.abrupt("return",{data:null,error:!0,message:d.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",d.t0),n.ZP.error("An unexpected error occurred"),d.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return d.stop()}},c,null,[[0,8]])})),R.apply(this,arguments)}var y=function(){var c=A()(i()().mark(function u(t){var s,x,d;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P.Z.put("/tenant/".concat(t.id),{image:t.image,area_id:t.area_id,name:t.name,pic_name:t.pic_name,address:t.address,latitude:t.latitude,longitude:t.longitude,member_id:t.member_id,type:t.type,area_name:t.area_name,phone:t.phone,email:t.email,username:t.username,password:t.password,nama_unit:t.nama_unit,kode_unit:t.kode_unit},{headers:{"Content-Type":"multipart/form-data"}});case 3:return s=a.sent,x=s.data,a.abrupt("return",h()(h()({},x),{},{status:"ok",error:!1}));case 8:if(a.prev=8,a.t0=a.catch(0),!E().isAxiosError(a.t0)){a.next=17;break}return console.log("error message: ",a.t0.message),d=a.t0.response,d.data.message?n.ZP.error(d.data.message):n.ZP.error(a.t0.message),a.abrupt("return",{responseCode:400,message:a.t0.message,error:!0});case 17:return console.log("unexpected error: ",a.t0),n.ZP.error("An unexpected error occured"),a.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return a.stop()}},u,null,[[0,8]])}));return function(t){return c.apply(this,arguments)}}(),S=function(){var c=A()(i()().mark(function u(t){var s,x,d;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P.Z.post("/tenant",{image:t.image,area_id:t.area_id,name:t.name,pic_name:t.pic_name,address:t.address,latitude:t.latitude,longitude:t.longitude,type:t.type,area_name:t.area_name,phone:t.phone,email:t.email,username:t.username,password:t.password},{headers:{"Content-Type":"multipart/form-data"}});case 3:return s=a.sent,x=s.data,a.abrupt("return",h()(h()({},x),{},{status:"ok",error:!1}));case 8:if(a.prev=8,a.t0=a.catch(0),!E().isAxiosError(a.t0)){a.next=17;break}return console.log("error message: ",a.t0.message),d=a.t0.response,d.data.message?n.ZP.error(d.data.message):n.ZP.error(a.t0.message),a.abrupt("return",{responseCode:400,message:a.t0.message,error:!0});case 17:return console.log("unexpected error: ",a.t0),n.ZP.error("An unexpected error occured"),a.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return a.stop()}},u,null,[[0,8]])}));return function(t){return c.apply(this,arguments)}}(),I=null,v=function(){var c=A()(i()().mark(function u(t){var s,x;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,m.next=3,P.Z.get("/tenant/detail/".concat(t),{method:"GET"});case 3:return s=m.sent,x=s.data,m.abrupt("return",{data:x.data,error:!1,message:"Success Get",responseCode:x.responseCode});case 8:if(m.prev=8,m.t0=m.catch(0),!E().isAxiosError(m.t0)){m.next=16;break}return console.log("error message: ",m.t0.message),n.ZP.error(m.t0.message),m.abrupt("return",{data:null,error:!0,message:m.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",m.t0),n.ZP.error("An unexpected error occurred"),m.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return m.stop()}},u,null,[[0,8]])}));return function(t){return c.apply(this,arguments)}}()}}]);
