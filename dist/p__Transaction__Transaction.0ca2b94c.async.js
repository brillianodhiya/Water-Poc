(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4843],{58638:function(w,f,r){"use strict";r.d(f,{Z:function(){return l}});var j=r(1413),p=r(67294),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"export",theme:"outlined"},x=y,D=r(84089),E=function(b,S){return p.createElement(D.Z,(0,j.Z)((0,j.Z)({},b),{},{ref:S,icon:x}))};E.displayName="ExportOutlined";var l=p.forwardRef(E)},75539:function(w,f,r){"use strict";r.d(f,{DT:function(){return p},et:function(){return D},qi:function(){return x}});var j=r(67294),p=function(l){return new Intl.NumberFormat("id-ID").format(l)},y=function(l){l=parseFloat(l),isNaN(l)&&(l=0);var C=new Intl.NumberFormat("id-ID").format(l);return C.split(",").length>1?C.split(",")[1].length<3?C.split(",")[0]+","+(C.split(",")[1]+"000").slice(0,3):C:C+",000"},x=function(l){return new Intl.NumberFormat("id-ID").format(l)},D=function(l){return l==null?void 0:l.toLocaleString("id-ID",{style:"currency",currency:"IDR"})}},39173:function(w,f,r){"use strict";r.d(f,{w:function(){return I}});var j=r(97983),p=r.n(j),y=r(40794),x=r.n(y),D=r(12741),E=r.n(D),l=r(95971),C=r(83652),b=r(67294),S=r(85893),I=function(s){var d=s.onChange,o=s.areaId,e=s.value,n=s.style,i=s.type,a=i===void 0?"not-rounded":i,c=s.useAll,A=s.disabled,m=(0,b.useState)([]),_=E()(m,2),u=_[0],M=_[1],G=b.useState(!1),J=E()(G,2),de=J[0],Q=J[1],ce=function(t,T){var te;return((te=T==null?void 0:T.children)!==null&&te!==void 0?te:"").toLowerCase().includes(t.toLowerCase())},ie=function(){var Y=x()(p()().mark(function t(){var T;return p()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return Q(!0),X.next=3,(0,l.cH)({params:{area_id:o}});case 3:T=X.sent,console.log(T,"data tenant"),Q(!1),T.error||M(T.data);case 7:case"end":return X.stop()}},t)}));return function(){return Y.apply(this,arguments)}}();return b.useEffect(function(){return ie(),function(){}},[o]),(0,S.jsxs)(C.Z,{showSearch:!0,value:e,placeholder:"Tenant Name",loading:de,onChange:d,className:a,optionFilterProp:"children",filterOption:ce,disabled:A,children:[c&&(0,S.jsx)(C.Z.Option,{value:0,children:"All Tenant"},0),u.map(function(Y){return(0,S.jsx)(C.Z.Option,{value:Y.id,children:Y.name},Y.id)})]})}},27282:function(w,f,r){"use strict";r.r(f),r.d(f,{default:function(){return Ze}});var j=r(12741),p=r.n(j),y=r(5200),x=r.n(y),D=r(71063),E=r(22982),l=r(67294),C=r(97983),b=r.n(C),S=r(40794),I=r.n(S),h=r(58638),s=r(36733),d=r(59652),o=r(71230),e=r(15746),n=r(26713),i=r(67669),a=r(83652),c=r(30478),A=r(71577),m=r(64593),_=r(30381),u=r.n(_),M=r(75539),G=r(98435),J=r(39173),de=function(){var K="data:application/vnd.ms-excel;base64,",$='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',L=function(O){return window.btoa(unescape(encodeURIComponent(O)))},W=function(O,B){return O.replace(/{(\w+)}/g,function(Z,F){return B[F]})};return function(P,O,B){P.nodeType||(P=document.getElementById(P));var Z={worksheet:O||"Worksheet",table:P.innerHTML};document.getElementById("dlink").href=K+L(W($,Z)),document.getElementById("dlink").download=B,document.getElementById("dlink").click()}},Q=function(){var K="data:application/vnd.ms-excel;base64,",$='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',L=function(O){return window.btoa(unescape(encodeURIComponent(O)))},W=function(O,B){return O.replace(/{(\w+)}/g,function(Z,F){return B[F]})};return function(P,O,B){var Z;P.nodeType||(P=(Z=document.getElementById(P))===null||Z===void 0?void 0:Z.getElementsByTagName("table")[0]);var F={worksheet:O||"Worksheet",table:P.innerHTML};document.getElementById("dlink").href=K+L(W($,F)),document.getElementById("dlink").download=B,document.getElementById("dlink").click()}},ce=r(69408),ie=r(39347),Y=r(83461),t=r(85893),T=s.Z.Column;u().locale("en");var te=function(){var K=l.useState([]),$=p()(K,2),L=$[0],W=$[1],P=l.useState(!1),O=p()(P,2),B=O[0],Z=O[1],F=l.useState(0),me=p()(F,2),V=me[0],H=me[1],he=l.useState(0),pe=p()(he,2),q=pe[0],ne=pe[1],ye=l.useState(u()()),_e=p()(ye,2),ae=_e[0],oe=_e[1],Ae=l.useState([u()(),u()().add(1,"day")]),ge=p()(Ae,2),ee=ge[0],se=ge[1],je=l.useState("periode"),ve=p()(je,2),N=ve[0],ue=ve[1],be=function(){Q()("reports-log","Reports Log ","Reports Log "+u()().unix())},xe=function(){var k=I()(b()().mark(function g(){var v;return b()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return Z(!0),re.next=3,(0,ce.tq)({params:{area_id:V||void 0,tenant_id:q||void 0,periode:N=="periode"?ae.format("YYYY-MM"):void 0,start_date:N!="periode"?ee[0].format("YYYY-MM-DD"):void 0,end_date:N!="periode"?ee[1].format("YYYY-MM-DD"):void 0,type:N}});case 3:v=re.sent,Z(!1),v.error||W(v.data);case 6:case"end":return re.stop()}},g)}));return function(){return k.apply(this,arguments)}}();l.useEffect(function(){return xe(),function(){}},[ae,V,q,N,ee]);var Ce=function(){var g=[{A1:"",A2:"",A3:"Aetra Air Tangerang",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",A11:"",A12:"",A13:""},{A1:"",A2:"",A3:"",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",A11:"",A12:"",A13:""},{A1:"",A2:"",A3:"Usage List",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",A11:"",A12:"",A13:""},{A1:"",A2:"",A3:"",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",A11:"Meter",A12:"",A13:""},{A1:"#",A2:"Area Name",A3:"Kode Unit",A4:"Unit Name",A5:"DevEui.",A6:"Meter Id",A7:"Customer Name",A8:"Periode",A9:"Start Date",A10:"End Date",A11:"Start Totalizer",A12:"End Totalizer",A13:"Usage"}];return L.map(function(v,R){g.push({A1:(R+1).toString(),A2:v.area_name,A3:v.kode_unit,A4:v.unit_name,A5:"'".concat(v.deveui),A6:v.meter_id,A7:"'".concat(v.tenant_name),A8:v.periode,A9:u()(v.start_date).format("DD/MM/YYYY"),A10:u()(v.end_date).format("DD/MM/YYYY"),A11:v.start_totalizer.toString(),A12:v.end_totalizer.toString(),A13:v.usage.toString()})}),g},Ee=Ce();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.q,{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("link",{rel:"icon",href:"https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png",type:"image/x-icon"}),(0,t.jsx)("title",{children:"AAT IoT Platform | Transaction"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{style:{borderRadius:8,marginBottom:20},bodyStyle:{background:" rgba(230, 247, 255, 0.5)"},children:(0,t.jsx)(o.Z,{gutter:[16,16],align:"bottom",children:(0,t.jsxs)(e.Z,{span:24,style:{textAlign:"left"},children:[(0,t.jsxs)(n.Z,{size:"large",wrap:!0,children:[(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{style:{opacity:0},children:"Filter Type"}),(0,t.jsxs)(a.Z,{style:{width:120},value:N,onChange:function(g){ue(g)},children:[(0,t.jsx)(a.Z.Option,{value:"periode",children:"Periode"}),(0,t.jsx)(a.Z.Option,{value:"range",children:"Range"})]})]}),N=="periode"?(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{children:"Periode"}),(0,t.jsx)(c.Z.MonthPicker,{allowClear:!1,value:ae,onChange:function(g){return oe(g)}})]}):(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{children:"Range"}),(0,t.jsx)(c.Z.RangePicker,{allowClear:!1,value:ee,onChange:function(g){return se(g)}})]}),(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{children:"Area Name"}),(0,t.jsx)(G.U,{onChange:function(g){H(g)},style:{width:"200px"},type:"rounded",useAll:!0,value:V})]}),(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{children:"Tenant Name"}),(0,t.jsx)(J.w,{onChange:function(g){ne(g)},areaId:V==0?void 0:V,style:{width:"200px"},type:"rounded",useAll:!0,value:q})]})]}),(0,t.jsx)(Y.CSVLink,{data:Ee,headers:[{label:"",key:"A1"},{label:"",key:"A2"},{label:"",key:"A3"},{label:"",key:"A4"},{label:"",key:"A5"},{label:"",key:"A6"},{label:"",key:"A7"},{label:"",key:"A8"},{label:"",key:"A9"},{label:"",key:"A10"},{label:"",key:"A11"},{label:"",key:"A12"},{label:"",key:"A13"}],filename:"Reports_Log_".concat(u()().format("YYYY-MM"),"_").concat(u()().unix(),".csv"),children:(0,t.jsx)(A.Z,{style:{float:"right",marginTop:"24px"},type:"primary",icon:(0,t.jsx)(h.Z,{}),children:"Export"})})]})})}),(0,t.jsxs)(s.Z,{dataSource:L,loading:B,style:{borderRadius:8,border:"1px solid #f0f0f0"},size:"small",bordered:!0,scroll:{x:!0},children:[(0,t.jsx)(T,{title:"Area Name",dataIndex:"area_name"},"area_name"),(0,t.jsx)(T,{title:"Kode Unit",dataIndex:"kode_unit"},"kode_unit"),(0,t.jsx)(T,{title:"Unit Name",dataIndex:"unit_name"},"unit_name"),(0,t.jsx)(T,{title:"DevEui",dataIndex:"deveui"},"deveui"),(0,t.jsx)(T,{title:"Meter Id",dataIndex:"meter_id"},"meter_id"),(0,t.jsx)(T,{title:"Customer Name",dataIndex:"tenant_name"},"tenant_name"),(0,t.jsx)(T,{title:"Periode",dataIndex:"periode"},"periode"),(0,t.jsx)(T,{title:"Start Date",dataIndex:"start_date",render:function(g){return u()(g).format("DD/MM/YYYY")}},"start_date"),(0,t.jsx)(T,{title:"End Date",dataIndex:"end_date",render:function(g){return u()(g).format("DD/MM/YYYY")}},"end_date"),(0,t.jsxs)(ie.Z,{title:"Meter",children:[(0,t.jsx)(T,{title:"Start Totalizer",dataIndex:"start_totalizer",render:function(g){return(0,M.DT)(g)}},"start_totalizer"),(0,t.jsx)(T,{title:"End Totalizer",dataIndex:"end_totalizer",render:function(g){return(0,M.DT)(g)}},"end_totalizer"),(0,t.jsx)(T,{title:"Usage",dataIndex:"usage",render:function(g){return(0,M.DT)(g)}},"usage")]})]})]})]})},X=te,De=r(41231),Re=r(99611),Se=r(14776),Te=r(11486),U=r(63922),z=r(94217),Oe=function(K){x()(K);var $=l.useState([]),L=p()($,2),W=L[0],P=L[1],O=l.useState(!1),B=p()(O,2),Z=B[0],F=B[1],me=l.useState(0),V=p()(me,2),H=V[0],he=V[1],pe=l.useState(0),q=p()(pe,2),ne=q[0],ye=q[1],_e=l.useState(void 0),ae=p()(_e,2),oe=ae[0],Ae=ae[1],ge=l.useState("all"),ee=p()(ge,2),se=ee[0],je=ee[1],ve=l.useState(""),N=p()(ve,2),ue=N[0],be=N[1],xe=function(){var g=I()(b()().mark(function v(){var R;return b()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return F(!0),le.next=3,(0,De.t)({params:{area_id:H||void 0,tenant_id:ne||void 0,periode:oe?oe.format("YYYY-MM"):void 0,status:se!=="all"?se:void 0,search:ue||void 0}});case 3:R=le.sent,F(!1),R.error||P(R.data);case 6:case"end":return le.stop()}},v)}));return function(){return g.apply(this,arguments)}}();l.useEffect(function(){xe()},[H,ne,oe,se,ue]);var Ce=function(){Q()("billing","Billing ","Billing "+u()().unix())},Ee=function(){var v=[];return W.map(function(R){v.push({invoice:R.invoice,area_name:R.Nebula_Area.area_name,tenant_name:R.Nebula_Tenant.name,periode:R.periode,usage:(0,M.qi)(R.usage),status:R.status,grand_total:(0,M.et)(R.grand_total)})}),v},k=Ee();return(0,t.jsxs)("div",{children:[(0,t.jsxs)(d.Z,{style:{borderRadius:8,marginBottom:20},bodyStyle:{background:" rgba(230, 247, 255, 0.5)"},children:[(0,t.jsxs)(m.q,{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("title",{children:"AAT IoT Platform | Transaction"}),(0,t.jsx)("link",{rel:"icon",href:"https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png",type:"image/x-icon"})]}),(0,t.jsxs)(o.Z,{gutter:[16,16],justify:"space-between",align:"bottom",children:[(0,t.jsx)(e.Z,{children:(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{children:"Search"}),(0,t.jsx)(Te.Z.Search,{onSearch:function(v){return be(v)},style:{borderRadius:"20px"},placeholder:"No Invoice"})]})}),(0,t.jsx)(e.Z,{children:(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{children:"Status"}),(0,t.jsx)(a.Z,{value:se,style:{width:150,borderRadius:100},onChange:function(v){je(v)},options:[{value:"all",label:(0,t.jsx)(U.Z,{color:"blue",text:"All"})},{value:"new",label:(0,t.jsx)(U.Z,{color:"cyan",text:"New"})},{value:"paid",label:(0,t.jsx)(U.Z,{color:"green",text:"Paid"})},{value:"unpaid",label:(0,t.jsx)(U.Z,{color:"orange",text:"Unpaid"})},{value:"cancel",label:(0,t.jsx)(U.Z,{color:"red",text:"Cancel"})}]})]})}),(0,t.jsx)(e.Z,{children:(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{children:"Area"}),(0,t.jsx)(G.U,{useAll:!0,defaultArea0:!1,value:H,onChange:function(v){return he(v)},type:"rounded",disabled:!1,style:{width:"200px"}})]})}),(0,t.jsx)(e.Z,{children:(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{children:"Tenant"}),(0,t.jsx)(J.w,{useAll:!0,onChange:function(v){return ye(v)},style:{width:"200px"},type:"rounded",areaId:H==0?void 0:H,value:ne,disabled:!1})]})}),(0,t.jsx)(e.Z,{children:(0,t.jsxs)(n.Z,{direction:"vertical",children:[(0,t.jsx)(i.Z,{children:"Priode"}),(0,t.jsx)(c.Z.MonthPicker,{value:oe,onChange:function(v){return Ae(v)}})]})}),(0,t.jsx)(e.Z,{style:{paddingTop:20},children:(0,t.jsx)(Y.CSVLink,{data:k,headers:[{label:"No Invoice",key:"invoice"},{label:"Area Name",key:"area_name"},{label:"Tenant",key:"tenant_name"},{label:"Periode",key:"periode"},{label:"Usage",key:"usage"},{label:"Status",key:"status"},{label:"Amount",key:"grand_total"}],filename:"Billing_".concat(u()().format("YYYY-MM"),"_").concat(u()().unix(),".csv"),children:(0,t.jsx)(A.Z,{type:"primary",icon:(0,t.jsx)(h.Z,{}),children:"Export"})})})]})]}),(0,t.jsxs)(s.Z,{dataSource:W,loading:Z,style:{borderRadius:8,border:"1px solid #f0f0f0"},children:[(0,t.jsx)(z.Z,{title:"No Invoice",dataIndex:"invoice"},"invoice"),(0,t.jsx)(z.Z,{title:"Area Name",dataIndex:["Nebula_Area","area_name"]},"area_name"),(0,t.jsx)(z.Z,{title:"Tenant",dataIndex:["Nebula_Tenant","name"]},"tenant_name"),(0,t.jsx)(z.Z,{title:"Periode",dataIndex:"periode"},"periode"),(0,t.jsx)(z.Z,{title:"Usage",dataIndex:"usage",render:function(v){return(0,M.qi)(v)}},"usage"),(0,t.jsx)(z.Z,{title:"Status",dataIndex:"status",render:function(v,R){return R.status==="new"?(0,t.jsx)(U.Z,{color:"cyan",text:"New"}):R.status==="paid"?(0,t.jsx)(U.Z,{color:"green",text:"Paid"}):R.status==="unpaid"?(0,t.jsx)(U.Z,{color:"orange",text:"Unpaid"}):R.status==="cancel"?(0,t.jsx)(U.Z,{color:"red",text:"Cancel"}):(0,t.jsx)(U.Z,{color:"cyan",text:"Paid"})}},"status"),(0,t.jsx)(z.Z,{title:"Amount",dataIndex:"grand_total",render:function(v){return(0,M.et)(v)}},"grand_total"),(0,t.jsx)(z.Z,{title:"Action",render:function(v,R){return(0,t.jsxs)(A.Z,{size:"small",type:"primary",ghost:!0,onClick:function(){console.log(R),Se.history.push("/billing/detail/"+R.id)},children:[(0,t.jsx)(Re.Z,{}),"View Detail"]})}},"action")]})]})},Pe=Oe,Ie=r(18537),Me=function(K){x()(K);var $=l.useState("usage"),L=p()($,2),W=L[0],P=L[1],O=Ie.Z.parse(window.location.search);return console.log(O,"QQ"),l.useEffect(function(){O.tab&&P(O.tab)},[O]),(0,t.jsx)(D._zJ,{childrenContentStyle:{minHeight:"70vh"},title:"Transaction",content:"Manage your Transaction",children:(0,t.jsx)(E.Z,{defaultActiveKey:"usage",items:[{label:"Usage",key:"usage",children:(0,t.jsx)(X,{})},{label:"Billing",key:"billing",children:(0,t.jsx)(Pe,{})}],activeKey:W,onChange:function(Z){P(Z),window.history.pushState(null,"","?tab=".concat(Z))}})})},Ze=Me},41231:function(w,f,r){"use strict";r.d(f,{W:function(){return s},t:function(){return I}});var j=r(11281),p=r.n(j),y=r(97983),x=r.n(y),D=r(40794),E=r.n(D),l=r(12461),C=r(9669),b=r.n(C),S=r(9212);function I(d){return h.apply(this,arguments)}function h(){return h=E()(x()().mark(function d(o){var e,n;return x()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S.Z.get("/billing",p()({method:"GET"},o||{}));case 3:return e=a.sent,n=e.data,a.abrupt("return",{data:n.data,error:!1,message:"Success Get",responseCode:n.responseCode});case 8:if(a.prev=8,a.t0=a.catch(0),!b().isAxiosError(a.t0)){a.next=16;break}return console.log("error message: ",a.t0.message),l.ZP.error(a.t0.message),a.abrupt("return",{data:null,error:!0,message:a.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",a.t0),l.ZP.error("An unexpected error occurred"),a.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return a.stop()}},d,null,[[0,8]])})),h.apply(this,arguments)}var s=function(){var d=E()(x()().mark(function o(e){var n,i;return x()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,S.Z.get("/billing/"+e,{method:"GET"});case 3:return n=c.sent,i=n.data,c.abrupt("return",{data:i.data,error:!1,message:"Success Get",responseCode:i.responseCode});case 8:if(c.prev=8,c.t0=c.catch(0),!b().isAxiosError(c.t0)){c.next=16;break}return console.log("error message: ",c.t0.message),l.ZP.error(c.t0.message),c.abrupt("return",{data:null,error:!0,message:c.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",c.t0),l.ZP.error("An unexpected error occurred"),c.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return c.stop()}},o,null,[[0,8]])}));return function(e){return d.apply(this,arguments)}}()},95971:function(w,f,r){"use strict";r.d(f,{GU:function(){return e},cH:function(){return I},mZ:function(){return d},rR:function(){return s}});var j=r(97983),p=r.n(j),y=r(11281),x=r.n(y),D=r(40794),E=r.n(D),l=r(12461),C=r(9669),b=r.n(C),S=r(9212);function I(n){return h.apply(this,arguments)}function h(){return h=E()(p()().mark(function n(i){var a,c;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,m.next=3,S.Z.get("/tenant",x()({method:"GET"},i||{}));case 3:return a=m.sent,c=a.data,m.abrupt("return",{data:c.data,error:!1,message:"Success Get",responseCode:c.responseCode});case 8:if(m.prev=8,m.t0=m.catch(0),!b().isAxiosError(m.t0)){m.next=16;break}return console.log("error message: ",m.t0.message),l.ZP.error(m.t0.message),m.abrupt("return",{data:null,error:!0,message:m.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",m.t0),l.ZP.error("An unexpected error occurred"),m.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return m.stop()}},n,null,[[0,8]])})),h.apply(this,arguments)}var s=function(){var n=E()(p()().mark(function i(a){var c,A,m;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,S.Z.put("/tenant/".concat(a.id),{image:a.image,area_id:a.area_id,name:a.name,pic_name:a.pic_name,address:a.address,latitude:a.latitude,longitude:a.longitude,member_id:a.member_id,type:a.type,area_name:a.area_name,phone:a.phone,email:a.email,username:a.username,password:a.password,nama_unit:a.nama_unit,kode_unit:a.kode_unit},{headers:{"Content-Type":"multipart/form-data"}});case 3:return c=u.sent,A=c.data,u.abrupt("return",x()(x()({},A),{},{status:"ok",error:!1}));case 8:if(u.prev=8,u.t0=u.catch(0),!b().isAxiosError(u.t0)){u.next=17;break}return console.log("error message: ",u.t0.message),m=u.t0.response,m.data.message?l.ZP.error(m.data.message):l.ZP.error(u.t0.message),u.abrupt("return",{responseCode:400,message:u.t0.message,error:!0});case 17:return console.log("unexpected error: ",u.t0),l.ZP.error("An unexpected error occured"),u.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return u.stop()}},i,null,[[0,8]])}));return function(a){return n.apply(this,arguments)}}(),d=function(){var n=E()(p()().mark(function i(a){var c,A,m;return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,S.Z.post("/tenant",{image:a.image,area_id:a.area_id,name:a.name,pic_name:a.pic_name,address:a.address,latitude:a.latitude,longitude:a.longitude,type:a.type,area_name:a.area_name,phone:a.phone,email:a.email,username:a.username,password:a.password},{headers:{"Content-Type":"multipart/form-data"}});case 3:return c=u.sent,A=c.data,u.abrupt("return",x()(x()({},A),{},{status:"ok",error:!1}));case 8:if(u.prev=8,u.t0=u.catch(0),!b().isAxiosError(u.t0)){u.next=17;break}return console.log("error message: ",u.t0.message),m=u.t0.response,m.data.message?l.ZP.error(m.data.message):l.ZP.error(u.t0.message),u.abrupt("return",{responseCode:400,message:u.t0.message,error:!0});case 17:return console.log("unexpected error: ",u.t0),l.ZP.error("An unexpected error occured"),u.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return u.stop()}},i,null,[[0,8]])}));return function(a){return n.apply(this,arguments)}}(),o=null,e=function(){var n=E()(p()().mark(function i(a){var c,A;return p()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,_.next=3,S.Z.get("/tenant/detail/".concat(a),{method:"GET"});case 3:return c=_.sent,A=c.data,_.abrupt("return",{data:A.data,error:!1,message:"Success Get",responseCode:A.responseCode});case 8:if(_.prev=8,_.t0=_.catch(0),!b().isAxiosError(_.t0)){_.next=16;break}return console.log("error message: ",_.t0.message),l.ZP.error(_.t0.message),_.abrupt("return",{data:null,error:!0,message:_.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",_.t0),l.ZP.error("An unexpected error occurred"),_.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return _.stop()}},i,null,[[0,8]])}));return function(a){return n.apply(this,arguments)}}()},94217:function(w,f){"use strict";var r;r={value:!0},f.Z=void 0;function j(y){return null}var p=f.Z=j},39347:function(w,f){"use strict";var r;r={value:!0},f.Z=void 0;function j(y){return null}var p=f.Z=j},83461:function(w,f,r){w.exports=r(5090)},89469:function(w,f,r){"use strict";Object.defineProperty(f,"__esModule",{value:!0});var j=function(){function h(s,d){for(var o=0;o<d.length;o++){var e=d[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}return function(s,d,o){return d&&h(s.prototype,d),o&&h(s,o),s}}(),p=r(67294),y=E(p),x=r(99182),D=r(69695);function E(h){return h&&h.__esModule?h:{default:h}}function l(h,s){if(!(h instanceof s))throw new TypeError("Cannot call a class as a function")}function C(h,s){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s&&(typeof s=="object"||typeof s=="function")?s:h}function b(h,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);h.prototype=Object.create(s&&s.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(h,s):h.__proto__=s)}var S={target:"_blank"},I=function(h){b(s,h);function s(d){l(this,s);var o=C(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,d));return o.state={},o}return j(s,[{key:"buildURI",value:function(){return x.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var o=this.props,e=o.data,n=o.headers,i=o.separator,a=o.enclosingCharacter,c=o.uFEFF,A=o.target,m=o.specs,_=o.replace;this.state.page=window.open(this.buildURI(e,c,n,i,a),A,m,_)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),s}(y.default.Component);I.defaultProps=Object.assign(D.defaultProps,S),I.propTypes=D.propTypes,f.default=I},26425:function(w,f,r){"use strict";Object.defineProperty(f,"__esModule",{value:!0});var j=Object.assign||function(s){for(var d=1;d<arguments.length;d++){var o=arguments[d];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(s[e]=o[e])}return s},p=function(){function s(d,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(d,n.key,n)}}return function(d,o,e){return o&&s(d.prototype,o),e&&s(d,e),d}}(),y=r(67294),x=l(y),D=r(99182),E=r(69695);function l(s){return s&&s.__esModule?s:{default:s}}function C(s,d){var o={};for(var e in s)d.indexOf(e)>=0||!Object.prototype.hasOwnProperty.call(s,e)||(o[e]=s[e]);return o}function b(s,d){if(!(s instanceof d))throw new TypeError("Cannot call a class as a function")}function S(s,d){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:s}function I(s,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);s.prototype=Object.create(d&&d.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(s,d):s.__proto__=d)}var h=function(s){I(d,s);function d(o){b(this,d);var e=S(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,o));return e.buildURI=e.buildURI.bind(e),e}return p(d,[{key:"buildURI",value:function(){return D.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var i=this.props,a=i.data,c=i.headers,A=i.separator,m=i.filename,_=i.enclosingCharacter,u=i.uFEFF,M=n&&typeof a=="function"?a():a,G=new Blob([u?"\uFEFF":"",(0,D.toCSV)(M,c,A,_)]);return window.navigator.msSaveBlob(G,m),!1}}},{key:"handleAsyncClick",value:function(e){var n=this,i=function(c){if(c===!1){e.preventDefault();return}n.handleLegacy(e,!0)};this.props.onClick(e,i)}},{key:"handleSyncClick",value:function(e){var n=this.props.onClick(e)===!1;if(n){e.preventDefault();return}this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(n){if(typeof e.props.onClick=="function")return e.props.asyncOnClick?e.handleAsyncClick(n):e.handleSyncClick(n);e.handleLegacy(n)}}},{key:"render",value:function(){var e=this,n=this.props,i=n.data,a=n.headers,c=n.separator,A=n.filename,m=n.uFEFF,_=n.children,u=n.onClick,M=n.asyncOnClick,G=n.enclosingCharacter,J=C(n,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),de=typeof window>"u",Q=de?"":this.buildURI(i,m,a,c,G);return x.default.createElement("a",j({download:A},J,{ref:function(ie){return e.link=ie},target:"_self",href:Q,onClick:this.handleClick()}),_)}}]),d}(x.default.Component);h.defaultProps=E.defaultProps,h.propTypes=E.propTypes,f.default=h},99182:function(w,f){"use strict";Object.defineProperty(f,"__esModule",{value:!0});var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};function j(o){if(Array.isArray(o)){for(var e=0,n=Array(o.length);e<o.length;e++)n[e]=o[e];return n}else return Array.from(o)}var p=f.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},y=f.isJsons=function(e){return Array.isArray(e)&&e.every(function(n){return(typeof n>"u"?"undefined":r(n))==="object"&&!(n instanceof Array)})},x=f.isArrays=function(e){return Array.isArray(e)&&e.every(function(n){return Array.isArray(n)})},D=f.jsonsHeaders=function(e){return Array.from(e.map(function(n){return Object.keys(n)}).reduce(function(n,i){return new Set([].concat(j(n),j(i)))},[]))},E=f.jsons2arrays=function(e,n){n=n||D(e);var i=n,a=n;y(n)&&(i=n.map(function(A){return A.label}),a=n.map(function(A){return A.key}));var c=e.map(function(A){return a.map(function(m){return l(m,A)})});return[i].concat(j(c))},l=f.getHeaderValue=function(e,n){var i=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce(function(a,c,A,m){var _=a[c];if(_==null)m.splice(1);else return _},n);return i===void 0?e in n?n[e]:"":i},C=f.elementOrEmpty=function(e){return typeof e>"u"||e===null?"":e},b=f.joiner=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:'"';return e.filter(function(a){return a}).map(function(a){return a.map(function(c){return C(c)}).map(function(c){return""+i+c+i}).join(n)}).join(`
`)},S=f.arrays2csv=function(e,n,i,a){return b(n?[n].concat(j(e)):e,i,a)},I=f.jsons2csv=function(e,n,i,a){return b(E(e,n),i,a)},h=f.string2csv=function(e,n,i,a){return n?n.join(i)+`
`+e:e.replace(/"/g,'""')},s=f.toCSV=function(e,n,i,a){if(y(e))return I(e,n,i,a);if(x(e))return S(e,n,i,a);if(typeof e=="string")return h(e,n,i);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')},d=f.buildURI=function(e,n,i,a,c){var A=s(e,i,a,c),m=p()?"application/csv":"text/csv",_=new Blob([n?"\uFEFF":"",A],{type:m}),u="data:"+m+";charset=utf-8,"+(n?"\uFEFF":"")+A,M=window.URL||window.webkitURL;return typeof M.createObjectURL>"u"?u:M.createObjectURL(_)}},5090:function(w,f,r){"use strict";var j;j={value:!0},f.CSVLink=j=void 0;var p=r(89469),y=E(p),x=r(26425),D=E(x);function E(b){return b&&b.__esModule?b:{default:b}}var l=j=y.default,C=f.CSVLink=D.default},69695:function(w,f,r){"use strict";Object.defineProperty(f,"__esModule",{value:!0}),f.PropsNotForwarded=f.defaultProps=f.propTypes=void 0;var j=r(67294),p=x(j),y=r(45697);function x(C){return C&&C.__esModule?C:{default:C}}var D=f.propTypes={data:(0,y.oneOfType)([y.string,y.array,y.func]).isRequired,headers:y.array,target:y.string,separator:y.string,filename:y.string,uFEFF:y.bool,onClick:y.func,asyncOnClick:y.bool,enclosingCharacter:y.string},E=f.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},l=f.PropsNotForwarded=["data","headers"]}}]);
