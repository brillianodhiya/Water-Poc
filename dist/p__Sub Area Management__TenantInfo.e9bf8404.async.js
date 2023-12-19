"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8835],{38497:function(ze,w,t){t.r(w),t.d(w,{default:function(){return mt}});var oe=t(11281),f=t.n(oe),le=t(97983),v=t.n(le),de=t(40794),$=t.n(de),D=t(12741),p=t.n(D),F=t(28530),I=t(80737),Q=t(14538),z=t(11382),X=t(69677),c=t(67294),e=t(85893),ue={labelCol:{span:8},wrapperCol:{span:16}},E=function(T){var q=T.devEui,G=T.description,m=T.onOk,me=T.onCancel,_=T.open,ee=T.device_id,pe=I.Z.useForm(),fe=p()(pe,1),Y=fe[0],te=c.useState(!1),H=p()(te,2),B=H[0],N=H[1];c.useEffect(function(){Y.setFields([{name:"description",value:G}])},[_,G]);var R=function(){var he=$()(v()().mark(function V(x){var K;return v()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return console.log(x),N(!0),k.next=4,(0,F.ur)({device_id:ee,description:x.description});case 4:K=k.sent,K.error?N(!1):(N(!1),Q.Z.success({content:"Success Edit Description "+q+"to "+x.description,onOk:function(){m()}}));case 6:case"end":return k.stop()}},V)}));return function(x){return he.apply(this,arguments)}}();return(0,e.jsx)(Q.Z,{title:"Edit Description "+q,open:_,onOk:Y.submit,onCancel:me,okText:"Save",children:(0,e.jsx)(z.Z,{spinning:B,children:(0,e.jsx)(I.Z,f()(f()({},ue),{},{form:Y,name:"control-hooks",onFinish:R,children:(0,e.jsx)(I.Z.Item,{name:"description",label:"Description",children:(0,e.jsx)(X.Z.TextArea,{placeholder:"Description"})})}))})})},j=t(45428),r=t(38405),h=t(78120),Z=t(5077),o=t(95971),u=t(91321),i=t(68795),We=t(82826),Ze=t(87547),Ge=t(87603),Ce=t(86548),Ye=t(28548),He=t(88641),Ne=t(24969),De=t(91714),Ve=t(99611),we=t(53971),Qe=t(48689),Xe=t(37446),Je=t(62816),qe=t(38402),b=t(30028),Ee=t(23349),_e=t(75302),g=t(26713),P=t(71577),J=t(58492),S=t(21802),Se=t(59652),ce=t(71230),C=t(15746),et=t(24093),tt=t(20550),nt=t(95439),rt=t(27049),at=t(13013),W=t(66516),st=t(30381),L=t.n(st),Lt=t(29218),it=t(64593),ot=t(42054),lt=t.n(ot);L().locale("en");var dt=(0,u.Z)({scriptUrl:"//at.alicdn.com/t/c/font_3875475_w5k22iyjel.js"}),A=Ee.Z.Column,ut=_e.ZP.useBreakpoint,ct=function(){var T,q=c.useState({node_type:[]}),G=p()(q,2),m=G[0],me=G[1],_=c.useState([]),ee=p()(_,2),pe=ee[0],fe=ee[1],Y=c.useState(!1),te=p()(Y,2),H=te[0],B=te[1],N=(0,b.useLocation)(),R=N.state,he=c.useState(0),V=p()(he,2),x=V[0],K=V[1],Te=c.useState(""),k=p()(Te,2),ne=k[0],ft=k[1],ht=c.useState(""),Re=p()(ht,2),gt=Re[0],ge=Re[1],xt=c.useState(""),$e=p()(xt,2),vt=$e[0],Ae=$e[1],Oe=c.useRef(null),jt=c.useState(!1),Me=p()(jt,2),yt=Me[0],xe=Me[1],Zt=c.useState({}),Fe=p()(Zt,2),O=Fe[0],re=Fe[1],Ct=c.useState([]),Ie=p()(Ct,2),Dt=Ie[0],Et=Ie[1],St=c.useState(!1),Pe=p()(St,2),Tt=Pe[0],ae=Pe[1],Rt=c.useState(!1),Le=p()(Rt,2),$t=Le[0],ve=Le[1],At=c.useState(!1),Be=p()(At,2),Ot=Be[0],ke=Be[1],Mt=ut(),Ft=function(){var s=$()(v()().mark(function n(){var a;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return B(!0),l.next=3,(0,F.We)({},x);case 3:a=l.sent,B(!1),a.error||Et(a.data);case 6:case"end":return l.stop()}},n)}));return function(){return s.apply(this,arguments)}}();c.useEffect(function(){x&&Ft()},[x]);var je=function(){var s=$()(v()().mark(function n(){var a;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return B(!0),l.next=3,(0,o.GU)(R==null?void 0:R.tenant_id);case 3:a=l.sent,B(!1),a.error||(me(a.data),a.data.node_type.length>0&&K(a.data.node_type[0].id));case 6:case"end":return l.stop()}},n)}));return function(){return s.apply(this,arguments)}}();c.useEffect(function(){je()},[]);var be=m?m.node_type.length>0?m.node_type.map(function(s){return{label:s.name,value:s.id}}):[]:[],ye=function(){var s=$()(v()().mark(function n(){var a;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return B(!0),l.next=3,(0,F._v)({params:{type:x,tenant_id:R==null?void 0:R.tenant_id}});case 3:a=l.sent,B(!1),a.error||(a.data.map(function(y,M){a.data[M].area_name=y.Nebula_Area.area_name,a.data[M].tenant_name=y.Nebula_Tenant.name}),fe(a.data));case 6:case"end":return l.stop()}},n)}));return function(){return s.apply(this,arguments)}}();c.useEffect(function(){x&&ye()},[x]),console.log(x,"DATA DEVICE");var Ke=function(n,a,d){a(),ge(n[0]),Ae(d)},It=function(n){n(),ge("")},se=function(n){return{filterDropdown:function(d){var l=d.setSelectedKeys,y=d.selectedKeys,M=d.confirm,Ue=d.clearFilters,Pt=d.close;return(0,e.jsxs)("div",{style:{padding:8},onKeyDown:function(ie){return ie.stopPropagation()},children:[(0,e.jsx)(X.Z,{ref:Oe,placeholder:"Search ".concat(n),value:y[0],onChange:function(ie){return l(ie.target.value?[ie.target.value]:[])},onPressEnter:function(){return Ke(y,M,n)},style:{marginBottom:8,display:"block"}}),(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(P.Z,{type:"primary",onClick:function(){return Ke(y,M,n)},icon:(0,e.jsx)(i.Z,{}),size:"small",style:{width:90},children:"Search"}),(0,e.jsx)(P.Z,{onClick:function(){return Ue&&It(Ue)},size:"small",style:{width:90},children:"Reset"}),(0,e.jsx)(P.Z,{type:"link",size:"small",onClick:function(){M({closeDropdown:!1}),ge(y[0]),Ae(n)},children:"Filter"}),(0,e.jsx)(P.Z,{type:"link",size:"small",onClick:function(){Pt()},children:"close"})]})]})},filterIcon:function(d){return(0,e.jsx)(i.Z,{style:{color:d?"#1890ff":void 0}})},onFilter:function(d,l){var y;return((y=l[n])!==null&&y!==void 0?y:"").toString().toLowerCase().includes(d.toLowerCase())},onFilterDropdownOpenChange:function(d){d&&setTimeout(function(){var l;return(l=Oe.current)===null||l===void 0?void 0:l.select()},100)},render:function(d){return vt===n?(0,e.jsx)(lt(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[gt],autoEscape:!0,textToHighlight:d?d.toString():""}):d}}};return(0,e.jsxs)(qe._z,{breadcrumb:void 0,title:(0,e.jsx)(P.Z,{type:"link",onClick:function(){return b.history.push("/area/info",{area_id:R.area_id})},size:"large",children:(0,e.jsxs)(g.Z,{style:{cursor:"pointer"},align:"start",size:"large",children:[(0,e.jsx)(We.Z,{onClick:function(){return b.history.push("/area/info",{area_id:R.area_id})},style:{marginTop:"12px",fontSize:"24px",color:"#000"}}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"left"},children:[(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(J.Z.Item,{children:"Area Management"}),(0,e.jsx)(J.Z.Item,{children:"Area"}),(0,e.jsx)(J.Z.Item,{href:"#",children:"Tenant"})]}),(0,e.jsx)(S.Z.Title,{level:5,children:"Detail Tenant"})]})]})}),childrenContentStyle:{minHeight:"80vh"},children:[(0,e.jsxs)(it.q,{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("title",{children:"AAT IoT Platform | Detail Tenant "}),(0,e.jsx)("link",{rel:"icon",href:"https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png",type:"image/x-icon"})]}),(0,e.jsx)(Z.X,{device_id:O.id,open:yt,onCancel:function(){return xe(!1)},onOk:function(){xe(!1)},typeName:ne,devEui:O.devEui,desc:O.description}),(0,e.jsx)(j.Y,{devEui:O.devEui,open:Tt,interval:O.interval,onCancel:function(){ae(!1)},onOk:function(){ae(!1),je(),ye()}}),(0,e.jsx)(E,{devEui:O.devEui,open:$t,description:O.description,device_id:O.id,onCancel:function(){ve(!1)},onOk:function(){ve(!1),je(),ye()}}),(0,e.jsx)(h.T,{devEui:O.devEui,open:Ot,onCancel:function(){ke(!1)},onOk:function(){ke(!1)},typeName:ne}),(0,e.jsx)(Se.Z,{loading:H,style:{borderRadius:8},children:(0,e.jsxs)(ce.Z,{gutter:[16,16],children:[(0,e.jsx)(C.Z,{xs:24,sm:8,md:6,lg:6,xl:6,xxl:4,children:(0,e.jsx)(et.C,{shape:"square",style:{border:"1px solid rgba(0, 0, 0, 0.06)",borderRadius:8},icon:(0,e.jsx)(Ze.Z,{}),size:{xs:124,sm:124,md:144,lg:144,xl:190,xxl:200},src:m.logo})}),(0,e.jsx)(C.Z,{xs:24,sm:16,md:18,lg:18,xl:18,xxl:20,children:(0,e.jsxs)(ce.Z,{gutter:[8,8],children:[(0,e.jsx)(C.Z,{span:24,children:(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(S.Z.Text,{type:"secondary",children:"Area"}),(0,e.jsx)(Ge.Z,{style:{color:"#BEBEBE"}}),(0,e.jsx)(S.Z.Text,{type:"secondary",children:m==null||(T=m.Nebula_Area)===null||T===void 0?void 0:T.area_name})]})}),(0,e.jsx)(C.Z,{span:24,children:(0,e.jsxs)(tt.Z,{color:"processing",style:{borderRadius:100},children:["Member since ",L()(m.cretedAt).format("MMMM YYYY")]})}),(0,e.jsx)(C.Z,{span:24,children:(0,e.jsxs)(g.Z,{align:"center",children:[(0,e.jsx)(S.Z.Title,{level:2,style:{marginBottom:"0px"},children:m.name}),(0,e.jsx)(P.Z,{icon:(0,e.jsx)(Ce.Z,{}),type:"link",style:{marginBottom:"12px"},onClick:function(){return b.history.push("/tenant/edit",{dataEdit:m})}})]})}),(0,e.jsx)(C.Z,{span:24,children:(0,e.jsx)(S.Z,{children:m.address})}),(0,e.jsx)(C.Z,{xs:12,sm:12,md:6,lg:4,xxl:3,children:(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(Ze.Z,{style:{color:"#1890FF"}}),(0,e.jsx)(S.Z,{children:m.pic_name})]})}),(0,e.jsx)(C.Z,{xs:12,sm:12,md:6,lg:4,xxl:3,children:(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(Ye.Z,{style:{color:"#1890FF"}}),(0,e.jsx)(S.Z,{children:m.phone})]})}),(0,e.jsx)(C.Z,{xs:12,sm:12,md:6,lg:4,xxl:3,children:(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(He.Z,{style:{color:"#1890FF"}}),(0,e.jsx)(S.Z,{children:m.email})]})})]})})]})}),Mt.xs&&(0,e.jsx)(nt.Z,{options:be,onResize:void 0,onResizeCapture:void 0,size:"large",block:!0,style:{maxWidth:300,marginTop:20,marginBottom:20,padding:6,backgroundImage:"radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)"},onChange:function(n){K(n),ft(be.find(function(a){return a.value===n}).label)},value:x}),(0,e.jsxs)(ce.Z,{justify:"space-between",style:{border:"1px solid rgba(0, 0, 0, 0.06)",borderRadius:8,marginTop:20},children:[(0,e.jsx)(C.Z,{style:{padding:"24px 20px 15px 20px",fontSize:16},children:"List Device"}),(0,e.jsx)(C.Z,{style:{padding:"24px 20px 15px"},children:(0,e.jsx)(P.Z,{icon:(0,e.jsx)(Ne.Z,{}),onClick:function(){return b.history.push("/device/create?area_id=".concat(m.area_id,"&tenant_id=").concat(m.id),{area_id:m.area_id,tenant_id:m.id})},children:"Add Device"})}),(0,e.jsx)(rt.Z,{style:{margin:0,padding:0}}),(0,e.jsx)(C.Z,{xxl:3,xl:3,md:5,sm:6,xs:0,children:m.node_type.map(function(s){return(0,e.jsxs)(g.Z,{style:{background:s.id==x?"#E6F7FF":"#fff",width:"100%",padding:"5px 12px"},children:[(0,e.jsx)("img",{src:s.icon,alt:s.name,style:{width:"20px",height:"20px",marginBottom:"2px"}}),(0,e.jsx)(S.Z,{style:{cursor:"pointer",fontWeight:s.id==x?"bold":"normal"},onClick:function(){K(s.id),ne(s.name)},children:s.name})]},s.id)})}),(0,e.jsx)(C.Z,{xxl:21,xl:21,md:19,sm:18,xs:24,style:{padding:10,background:"#E6F7FF"},children:(0,e.jsx)(Se.Z,{bodyStyle:{padding:0,margin:0},children:(0,e.jsxs)(Ee.Z,{dataSource:pe,loading:H,scroll:{x:1300},children:[(0,e.jsx)(A,{width:200,title:"Installation Date",dataIndex:"instalation_date",render:function(n){return L()(n).format("MMM DD YYYY HH:mm:ss")},sorter:function(n,a){return L()(n.instalation_date).unix()-L()(a.instalation_date).unix()}},"instalation_date"),(0,e.jsx)(A,f()({width:200,title:"Dev Eui",dataIndex:"devEui"},se("devEui")),"devEui"),(0,e.jsx)(A,f()({width:200,title:"Meter Id",dataIndex:"meter_id"},se("meter_id")),"meter_id"),(0,e.jsx)(A,f()({width:200,title:"Model / Brand",dataIndex:"model",sorter:function(n,a){return n.model.length-a.model.length}},se("model")),"model"),(0,e.jsx)(A,{width:200,title:"Last Update",dataIndex:"lastUpdate",render:function(n){if(n)return L()(n).format("MMM DD YYYY HH:mm:ss")},sorter:function(n,a){return L()(n.lastUpdate).unix()-L()(a.lastUpdate).unix()}},"lastUpdate"),(0,e.jsx)(A,{width:130,title:"Interval",dataIndex:"interval",sorter:function(n,a){return n.interval-a.interval},render:function(n){return(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(De.Z,{style:{color:"gray"}}),(0,e.jsxs)(S.Z,{children:[n," min"]})]})}},"interval"),(0,e.jsx)(A,{width:150,title:"Battery Level",dataIndex:"battery",sorter:function(n,a){return n.battery-a.battery},filters:[{text:(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(r.QP,{}),"50 - 100"]}),value:"50-100"},{text:(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(r.xT,{}),"20 - 50"]}),value:"20-50"},{text:(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(r.t3,{style:{marginLeft:"3px"}})," ","0 - 20"]}),value:"0-20"}],onFilter:function(n,a){return n==="50-100"?a.battery>50:n==="20-50"?a.battery>20&&a.battery<=50:n==="0-20"?a.battery<=20:!0},render:function(n){return(0,e.jsx)(e.Fragment,{children:n>20&&n<=50?(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(r.xT,{}),n]}):n<=20?(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(r.t3,{}),n]}):n>50?(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(r.QP,{}),n]}):null})}},"battery"),(0,e.jsx)(A,f()({width:200,title:"Description",dataIndex:"description"},se("description")),"description"),(0,e.jsx)(A,{dataIndex:"id",title:"Action",fixed:"right",width:80,render:function(n,a){return(0,e.jsx)(at.Z,{trigger:["click"],overlay:(0,e.jsxs)(W.Z,{children:[(0,e.jsxs)(W.Z.Item,{onClick:function(){xe(!0),re(a)},children:[(0,e.jsx)(Ve.Z,{}),"  ","View Log"]},"1"),Dt.map(function(d){if(d=="interval"){var l=(0,e.jsx)(Ce.Z,{}),y=function(){ae(!0),re(a)};switch(d){case"interval":l=(0,e.jsx)(De.Z,{}),y=function(){ae(!0),re(a)};break;case"meter reading":l=(0,e.jsx)(we.Z,{});break;case"valve":l=(0,e.jsx)(dt,{type:"icon-valve"});break;default:break}return(0,e.jsxs)(W.Z.Item,{onClick:function(){y()},style:{textTransform:"capitalize"},children:[l," ",d]},d)}}),(0,e.jsxs)(W.Z.Item,{onClick:function(){ve(!0),re(a)},style:{textTransform:"capitalize"},children:[(0,e.jsx)(Je.iFj,{})," Edit Descripton"]},"description"),(0,e.jsxs)(W.Z.Item,{onClick:function(){b.history.push("/device/".concat(a.id,"/delete"))},style:{color:"red"},children:[(0,e.jsx)(Qe.Z,{})," Unsign"]},"3")]}),placement:"bottomRight",children:(0,e.jsx)(P.Z,{type:"text",children:(0,e.jsx)(Xe.Z,{})})})}},"id")]})})})]})]})},mt=ct},95971:function(ze,w,t){t.d(w,{GU:function(){return ue},cH:function(){return Q},mZ:function(){return c},rR:function(){return X}});var oe=t(97983),f=t.n(oe),le=t(11281),v=t.n(le),de=t(40794),$=t.n(de),D=t(12461),p=t(9669),F=t.n(p),I=t(9212);function Q(E){return z.apply(this,arguments)}function z(){return z=$()(f()().mark(function E(j){var r,h;return f()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,I.Z.get("/tenant",v()({method:"GET"},j||{}));case 3:return r=o.sent,h=r.data,o.abrupt("return",{data:h.data,error:!1,message:"Success Get",responseCode:h.responseCode});case 8:if(o.prev=8,o.t0=o.catch(0),!F().isAxiosError(o.t0)){o.next=16;break}return console.log("error message: ",o.t0.message),D.ZP.error(o.t0.message),o.abrupt("return",{data:null,error:!0,message:o.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",o.t0),D.ZP.error("An unexpected error occurred"),o.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return o.stop()}},E,null,[[0,8]])})),z.apply(this,arguments)}var X=function(){var E=$()(f()().mark(function j(r){var h,Z,o;return f()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,I.Z.put("/tenant/".concat(r.id),{image:r.image,area_id:r.area_id,name:r.name,pic_name:r.pic_name,address:r.address,latitude:r.latitude,longitude:r.longitude,member_id:r.member_id,type:r.type,area_name:r.area_name,phone:r.phone,email:r.email,username:r.username,password:r.password,nama_unit:r.nama_unit,kode_unit:r.kode_unit},{headers:{"Content-Type":"multipart/form-data"}});case 3:return h=i.sent,Z=h.data,i.abrupt("return",v()(v()({},Z),{},{status:"ok",error:!1}));case 8:if(i.prev=8,i.t0=i.catch(0),!F().isAxiosError(i.t0)){i.next=17;break}return console.log("error message: ",i.t0.message),o=i.t0.response,o.data.message?D.ZP.error(o.data.message):D.ZP.error(i.t0.message),i.abrupt("return",{responseCode:400,message:i.t0.message,error:!0});case 17:return console.log("unexpected error: ",i.t0),D.ZP.error("An unexpected error occured"),i.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return i.stop()}},j,null,[[0,8]])}));return function(r){return E.apply(this,arguments)}}(),c=function(){var E=$()(f()().mark(function j(r){var h,Z,o;return f()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,I.Z.post("/tenant",{image:r.image,area_id:r.area_id,name:r.name,pic_name:r.pic_name,address:r.address,latitude:r.latitude,longitude:r.longitude,type:r.type,area_name:r.area_name,phone:r.phone,email:r.email,username:r.username,password:r.password},{headers:{"Content-Type":"multipart/form-data"}});case 3:return h=i.sent,Z=h.data,i.abrupt("return",v()(v()({},Z),{},{status:"ok",error:!1}));case 8:if(i.prev=8,i.t0=i.catch(0),!F().isAxiosError(i.t0)){i.next=17;break}return console.log("error message: ",i.t0.message),o=i.t0.response,o.data.message?D.ZP.error(o.data.message):D.ZP.error(i.t0.message),i.abrupt("return",{responseCode:400,message:i.t0.message,error:!0});case 17:return console.log("unexpected error: ",i.t0),D.ZP.error("An unexpected error occured"),i.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return i.stop()}},j,null,[[0,8]])}));return function(r){return E.apply(this,arguments)}}(),e=null,ue=function(){var E=$()(f()().mark(function j(r){var h,Z;return f()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,I.Z.get("/tenant/detail/".concat(r),{method:"GET"});case 3:return h=u.sent,Z=h.data,u.abrupt("return",{data:Z.data,error:!1,message:"Success Get",responseCode:Z.responseCode});case 8:if(u.prev=8,u.t0=u.catch(0),!F().isAxiosError(u.t0)){u.next=16;break}return console.log("error message: ",u.t0.message),D.ZP.error(u.t0.message),u.abrupt("return",{data:null,error:!0,message:u.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",u.t0),D.ZP.error("An unexpected error occurred"),u.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return u.stop()}},j,null,[[0,8]])}));return function(r){return E.apply(this,arguments)}}()}}]);
