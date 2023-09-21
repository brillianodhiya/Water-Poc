"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1492],{10551:function(Ee,me,r){r.r(me),r.d(me,{default:function(){return dr}});var fe=r(97983),f=r.n(fe),he=r(40794),S=r.n(he),xe=r(12741),p=r.n(xe),j=r(99399),pe=r.n(j),G=r(13448),k=r(11382),w=r(71230),d=r(15746),q=r(59652),ge=r(29924),Z=r(21802),b=r(67294),Q=r(9212),C=r(80737),i=r(71577),P=r(79915),e=r(85893),l=function(h){var m=h.title,n=h.defaultData,z=h.typeId,N=h.is_member,U=h.member_id,g=h.getPricingPostpaid,T=h.disabled,W=h.area_id,I=h.loading,H=h.setLoading,x=b.useState(!1),B=p()(x,2),y=B[0],O=B[1],A=C.Z.useForm(),M=p()(A,1),$=M[0],te=function(v){console.log("Received values of form: ",v),y?(H(!0),(0,Q.Z)({url:"/area/setting/pricing",method:"POST",data:{is_member:N,type_id:z,parameter_1:v.parameter_1,price_1:v.price_1,parameter_2:v.parameter_2,price_2:v.price_2,parameter_3:v.parameter_3,price_3:v.price_3,member_id:U,area_id:W}}).then(function(L){g(),H(!1),O(!1)}).catch(function(L){G.Z.error({message:L.response.data.message})})):O(!0)},R=function(){$.setFields([{name:"parameter_1",value:n.parameter_1},{name:"parameter_2",value:n.parameter_2},{name:"parameter_3",value:n.parameter_3},{name:"price_1",value:n.price_1},{name:"price_2",value:n.price_2},{name:"price_3",value:n.price_3}])};return b.useEffect(function(){R()},[]),(0,e.jsx)(q.Z,{style:{borderRadius:"8px"},bodyStyle:{padding:"12px 16px"},children:(0,e.jsx)("div",{children:(0,e.jsx)(k.Z,{spinning:I,children:(0,e.jsx)(C.Z,{form:$,name:m,onFinish:te,layout:"vertical",children:(0,e.jsxs)(w.Z,{gutter:[16,16],children:[(0,e.jsx)(d.Z,{span:24,children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsx)(Z.Z,{style:{fontSize:"18px",fontWeight:"bold",marginTop:"4px"},children:m}),T?null:(0,e.jsx)(i.Z,{type:"link",size:"large",htmlType:"submit",children:y?"Save":"Edit"})]})}),(0,e.jsxs)(d.Z,{span:8,children:[(0,e.jsx)(C.Z.Item,{label:"Parameter 1",name:"parameter_1",required:!0,children:(0,e.jsx)(P.Z,{placeholder:"Input",style:{width:"100%"},className:y?"":"edit-to-text",disabled:!y,addOnBefore:"<",onChange:function(v){return $.setFields([{name:"parameter_2",value:v}])}})}),(0,e.jsx)(C.Z.Item,{label:"Price",name:"price_1",required:!0,children:(0,e.jsx)(P.Z,{className:y?"":"edit-to-text",disabled:!y,placeholder:"Input",style:{width:"100%"}})})]}),(0,e.jsxs)(d.Z,{span:8,style:{borderLeft:"1px solid #0000000F",borderRight:"1px solid #0000000F"},children:[(0,e.jsx)(C.Z.Item,{label:"Parameter 2",name:"parameter_2",required:!0,children:(0,e.jsx)(P.Z,{placeholder:"Input",style:{width:"100%"},className:y?"":"edit-to-text",disabled:!y,addOnBefore:">=",onChange:function(v){return $.setFields([{name:"parameter_1",value:v}])}})}),(0,e.jsx)(C.Z.Item,{label:"Price",name:"price_2",required:!0,children:(0,e.jsx)(P.Z,{className:y?"":"edit-to-text",disabled:!y,placeholder:"Input",style:{width:"100%"}})})]}),(0,e.jsxs)(d.Z,{span:8,children:[(0,e.jsx)(C.Z.Item,{label:"Parameter 3",name:"parameter_3",required:!0,children:(0,e.jsx)(P.Z,{className:y?"":"edit-to-text",disabled:!y,addOnBefore:">=",placeholder:"Input",style:{width:"100%"}})}),(0,e.jsx)(C.Z.Item,{label:"Price",name:"price_3",required:!0,children:(0,e.jsx)(P.Z,{placeholder:"Input",style:{width:"100%"},className:y?"":"edit-to-text",disabled:!y})})]})]})})})})})},o=l;function a(ie){var h={},m=pe()(ie),n;try{for(m.s();!(n=m.n()).done;){var z=n.value,N=z.type_id,U=z.type_name,g=pe()(z.price_member),T;try{for(g.s();!(T=g.n()).done;){var W=T.value,I=W.id,H=W.name,x=W.price;h[I]?h[I].types.push({type_id:N,type_name:U,price:x}):h[I]={id:I,name:H,types:[{type_id:N,type_name:U,price:x}]}}}catch(B){g.e(B)}finally{g.f()}}}catch(B){m.e(B)}finally{m.f()}return Object.values(h)}var _=function(h){var m=h.dataArea,n=h.getData,z=h.loadingArea,N=b.useState(),U=p()(N,2),g=U[0],T=U[1],W=b.useState([]),I=p()(W,2),H=I[0],x=I[1],B=b.useState(!1),y=p()(B,2),O=y[0],A=y[1],M=b.useState([]),$=p()(M,2),te=$[0],R=$[1];b.useEffect(function(){m.Nebula_Area_Pricing_tiers&&m.Nebula_Area_members&&(x(m==null?void 0:m.Nebula_Area_Pricing_tiers),R(a(m==null?void 0:m.Nebula_Area_Pricing_tiers)),T(m.pricing_type))},[m]),console.log(te);var X=function(L){A(!0),(0,Q.Z)({url:"/area/pricing/type/"+m.id,method:"PUT",data:{pricing_type:L}}).then(function(){A(!1),T(L),n()}).catch(function(ce){G.Z.error({message:ce.response.data.message})})};return(0,e.jsx)("div",{style:{paddingBottom:"8em"},children:(0,e.jsx)(k.Z,{spinning:O||z,children:(0,e.jsxs)(w.Z,{gutter:[16,16],style:{marginTop:"24px"},children:[(0,e.jsx)(d.Z,{xl:10,xxl:8,lg:12,md:24,sm:24,xs:24,children:(0,e.jsx)(q.Z,{style:{borderRadius:"8px",border:g=="all"?"1px solid #1890ff":void 0},headStyle:{backgroundColor:g=="all"?"#1890ff":"#F0F0F0",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"},title:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,e.jsx)(ge.ZP,{onChange:function(L){return X(L.target.checked?"all":"member")},checked:g=="all"}),(0,e.jsx)(Z.Z,{style:{color:g=="all"?"#fff":"#000"},children:"One Price For All Customer"})]}),bodyStyle:{background:"#F9F9F9",borderRadius:"8px"},children:(0,e.jsx)(w.Z,{gutter:[16,16],children:H.map(function(v){return(0,e.jsx)(d.Z,{xl:24,xxl:24,lg:24,md:24,sm:24,xs:24,children:(0,e.jsx)(o,{title:v.type_name,typeId:v.type_id,defaultData:v.price_all,is_member:g!="all",disabled:g!="all",getPricingPostpaid:n,area_id:m.id,loading:O,setLoading:A},v.type_name)},v.type_name)})})})}),(0,e.jsx)(d.Z,{xl:14,xxl:16,lg:12,md:24,sm:24,xs:24,children:(0,e.jsx)(q.Z,{style:{borderRadius:"8px",border:g=="member"?"1px solid #1890ff":void 0},headStyle:{backgroundColor:g=="member"?"#1890ff":"#F0F0F0",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"},title:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,e.jsx)(ge.ZP,{onChange:function(L){return X(L.target.checked?"member":"all")},checked:g!="all"}),(0,e.jsx)(Z.Z,{style:{color:g=="member"?"#fff":"#000"},children:"Setting Price Member Level"})]}),bodyStyle:{background:"#F9F9F9",borderRadius:"8px"},children:(0,e.jsx)(w.Z,{gutter:[16,16],children:te.map(function(v){return(0,e.jsx)(d.Z,{span:24,children:(0,e.jsx)(q.Z,{style:{borderRadius:"8px",border:g=="member"?"1px solid #1890ff":void 0},headStyle:{backgroundColor:g=="member"?"#1890ff":"#F0F0F0",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"},title:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:(0,e.jsx)(Z.Z,{style:{color:g=="member"?"#fff":"#000"},children:v.name})}),bodyStyle:{background:"#F9F9F9",borderRadius:"8px"},children:(0,e.jsx)(w.Z,{gutter:[16,16],children:v.types.map(function(L){return(0,e.jsx)(d.Z,{xl:12,xxl:12,lg:24,md:24,sm:24,xs:24,children:(0,e.jsx)(o,{title:L.type_name,typeId:L.type_id,defaultData:L.price,is_member:g!="all",disabled:g!="member",getPricingPostpaid:n,member_id:v.id,area_id:m.id,loading:O,setLoading:A},L.type_name)},L.type_name)})})})},v.id+v.name)})})})})]})})})},F=_,c=r(64129),s=r.n(c),t=r(11281),u=r.n(t),je=r(4745),Te=r(28530),Oe=r(91714),Pe=r(14538),de=r(40038),K=r(26713),Me=r(68351),Re=r(20550),Le=r(30381),Ce=r.n(Le),cr=r(29218);Ce().locale("en");var Ie=function(h){var m,n=h.dataArea,z=h.getData,N=h.loadingArea,U=b.useState(!1),g=p()(U,2),T=g[0],W=g[1],I=b.useState(n==null?void 0:n.cut_off_order),H=p()(I,2),x=H[0],B=H[1],y=b.useState(!1),O=p()(y,2),A=O[0],M=O[1],$=b.useState(n==null?void 0:n.Nebula_Areas_Cut_offs),te=p()($,2),R=te[0],X=te[1],v=C.Z.useForm(),L=p()(v,1),ce=L[0],Ze=b.useState(!1),be=p()(Ze,2),E=be[0],Y=be[1],ne=b.useState(!1),V=p()(ne,2),ee=V[0],Fe=V[1],le=Array.from({length:28});b.useEffect(function(){ce.setFields([{name:"ppn",value:n.ppn},{name:"min_charge_gas",value:n.min_charge_gas},{name:"min_charge_water",value:n.min_charge_water},{name:"min_charge_electrict_ct",value:n.min_charge_electrict_ct},{name:"min_charge_electrict_non_ct",value:n.min_charge_electrict_non_ct},{name:"stamp_number",value:n.stamp_number},{name:"stamp_date",value:n.stamp_date}]),X(n!=null&&n.Nebula_Areas_Cut_offs?n==null?void 0:n.Nebula_Areas_Cut_offs:[]),B(n!=null&&n.cut_off_order?n==null?void 0:n.cut_off_order:[])},[n]);var Ae=function(){var re=S()(f()().mark(function ae(oe){var D;return f()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return Fe(!0),J.next=3,(0,Te.sN)(n.id,oe);case 3:D=J.sent,Fe(!1),D.error||X(D.data);case 6:case"end":return J.stop()}},ae)}));return function(oe){return re.apply(this,arguments)}}(),ur=function(){var re=S()(f()().mark(function ae(oe){var D;return f()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return Y(!0),J.next=3,(0,je._J)(u()(u()({},oe),{},{cut_off:R,cut_off_order:x}),n.id);case 3:D=J.sent,Y(!1),D.error?Pe.Z.error({content:D.message}):Pe.Z.success({content:D.message,onOk:function(){M(!1),z()}});case 6:case"end":return J.stop()}},ae)}));return function(oe){return re.apply(this,arguments)}}();return(0,e.jsx)(q.Z,{style:{borderRadius:8,marginTop:"20px"},loading:E,children:(0,e.jsx)(C.Z,{name:"add-area",layout:"vertical",form:ce,onFinish:ur,children:(0,e.jsxs)(w.Z,{gutter:[16,16],justify:"space-between",children:[(0,e.jsxs)(d.Z,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,children:[(0,e.jsxs)(w.Z,{justify:"space-between",children:[(0,e.jsx)(d.Z,{children:(0,e.jsx)(Z.Z,{children:"Automatic Billing"})}),(0,e.jsx)(d.Z,{children:A?(0,e.jsxs)(de.Z,{value:x,onChange:function(ae){B(ae),Ae(ae)},className:"not-rounded",children:[(0,e.jsx)(de.Z.Option,{value:1,children:"Monthly 1"}),(0,e.jsx)(de.Z.Option,{value:2,children:"Monthly 2"}),(0,e.jsx)(de.Z.Option,{value:3,children:"Monthly 3"}),(0,e.jsx)(de.Z.Option,{value:4,children:"Monthly 4"})]}):(0,e.jsxs)(Z.Z,{children:["Monthly ",n==null||(m=n.Nebula_Areas_Cut_offs)===null||m===void 0?void 0:m.length,"x"]})})]}),(0,e.jsx)(q.Z,{style:{marginTop:10,borderRadius:8},children:(0,e.jsx)(k.Z,{spinning:ee,children:(0,e.jsx)(w.Z,{gutter:[16,16],justify:"space-between",children:R==null?void 0:R.map(function(re,ae){return(0,e.jsx)(d.Z,{xs:12,sm:12,md:12,lg:12,xxl:12,children:(0,e.jsxs)(K.Z,{direction:"vertical",children:[(0,e.jsxs)(Z.Z,{children:["Cutt Off Date ",ae+1,"x"]}),A?(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(de.Z,{showSearch:!0,optionFilterProp:"children",filterOption:function(D,se){var J;return((J=se==null?void 0:se.children)!==null&&J!==void 0?J:"").toLowerCase().includes(D.toLowerCase())},className:"not-rounded",value:re.day,style:{width:"80px"},onChange:function(D){var se=s()(R);se[ae].day=D,X(se)},children:le==null?void 0:le.map(function(oe,D){return D<9?(0,e.jsx)(de.Z.Option,{value:"0"+(D+1).toString(),children:"0"+(D+1).toString()},1):(0,e.jsx)(de.Z.Option,{value:(D+1).toString(),children:(D+1).toString()},1)})}),(0,e.jsx)(Me.Z,{className:"not-rounded",value:Ce()(re.time,"HH:mm:ss"),onChange:function(D){var se=s()(R);se[ae].time=D==null?void 0:D.format("HH:mm:ss"),X(se)},format:"HH:mm"})]}):(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(Re.Z,{color:"#E6F7FF",style:{borderRadius:6,color:"#1890FF",padding:"0px 10px 0px 10px"},children:re.day}),(0,e.jsx)(Re.Z,{icon:(0,e.jsx)(Oe.Z,{}),color:"#E6F7FF",style:{borderRadius:6,color:"#1890FF",padding:"0px 10px 0px 10px"},children:Ce()(re.time,"HH:mm:ss").format("HH:mm")})]})]})},re)})})})})]}),(0,e.jsx)(d.Z,{span:24,style:{textAlign:"right"},children:A?(0,e.jsx)(i.Z,{onClick:function(){ce.submit()},children:"Save"}):(0,e.jsx)(i.Z,{onClick:function(){return M(!0)},children:"Edit"})})]})})})},Be=Ie,ke=r(12461),Se=r(69677),we=r(62986),Ue=r(96486),ze=r.n(Ue),He=[{backgroundColor:"#E6F7FF",borderColor:"#91D5FF"},{backgroundColor:"#FFF1F0",borderColor:"#FFA39E"},{backgroundColor:"#F9F0FF",borderColor:"#D3ADF7"},{backgroundColor:"#E6FFFB",borderColor:"#87E8DE"},{backgroundColor:"#FFF7E6",borderColor:"#FFD591"},{backgroundColor:"#FCFFE6",borderColor:"#EAFF8F"},{backgroundColor:"#F6FFED",borderColor:"#B7EB8F"}],Ge=function(h){var m=h.dataArea,n=h.getData,z=h.loadingArea;console.log(m,"AREA");var N=b.useState(void 0),U=p()(N,2),g=U[0],T=U[1],W=b.useState(!1),I=p()(W,2),H=I[0],x=I[1],B=b.useState([]),y=p()(B,2),O=y[0],A=y[1],M=C.Z.useForm(),$=p()(M,1),te=$[0],R=b.useState([]),X=p()(R,2),v=X[0],L=X[1];console.log(m,"AREA");var ce=function(){var Y=[];m.Nebula_Area_members&&(m.Nebula_Area_members.map(function(ne){var V=ze().sample(He);Y.push(u()(u()({},ne),{},{backgroundColor:V==null?void 0:V.backgroundColor,borderColor:V==null?void 0:V.borderColor}))}),A(Y))};b.useEffect(function(){ce()},[m]);var Ze=function(){var E=S()(f()().mark(function Y(){var ne;return f()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(!(g!==""&&g!=null)){ee.next=7;break}return x(!0),ee.next=4,(0,je.if)({member_name:g,area_id:m.id});case 4:ne=ee.sent,x(!1),ne.error||(n(),T(""));case 7:case"end":return ee.stop()}},Y)}));return function(){return E.apply(this,arguments)}}(),be=function(){var E=S()(f()().mark(function Y(ne){var V,ee;return f()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return console.log(ne,"VALUES"),V=[],Object.keys(ne[v[0]]).map(function(Ae){V.push({id:parseInt(Ae),name:ne[v[0]][Ae]})}),console.log(V,"ARR"),x(!1),le.next=7,(0,je.K7)(V);case 7:ee=le.sent,ee.error||(ke.ZP.success(ee.message),n(),L([]));case 9:case"end":return le.stop()}},Y)}));return function(ne){return E.apply(this,arguments)}}();return(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsxs)(k.Z,{spinning:H||z,children:[(0,e.jsx)(Z.Z.Title,{level:5,style:{textAlign:"center"},children:"Create Member Level"}),(0,e.jsxs)(K.Z.Compact,{style:{maxWidth:550},size:"large",children:[(0,e.jsx)(Se.Z,{placeholder:"Create Member Level",size:"large",style:{borderTopLeftRadius:"24px",borderBottomLeftRadius:"24px"},value:g,onChange:function(Y){return T(Y.target.value)},onPressEnter:Ze}),(0,e.jsx)(i.Z,{type:"primary",className:"member-level-save",onClick:Ze,children:"Save"})]}),(0,e.jsx)(C.Z,{size:"middle",form:te,layout:"vertical",onFinish:be,children:(0,e.jsx)(w.Z,{gutter:[24,24],style:{marginTop:20},children:O.length>0?O.map(function(E){return(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:6,xl:6,xxl:6,style:{},children:(0,e.jsx)("div",{style:{borderRadius:"2px",padding:"12px 16px",border:"1px solid ".concat(E==null?void 0:E.borderColor),backgroundColor:"".concat(E==null?void 0:E.backgroundColor),textAlign:"left"},children:(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,e.jsx)(C.Z.Item,{name:[E.id.toString(),E.id.toString()],label:v.includes(E.id)?(0,e.jsx)(Z.Z.Text,{type:"secondary",children:E.name}):null,initialValue:E.name,noStyle:!0,children:v.includes(E.id)?(0,e.jsx)(Se.Z,{placeholder:"Input"}):(0,e.jsx)(Z.Z,{style:{marginTop:"6px"},children:E==null?void 0:E.name})},E.id.toString())})})},E)}):(0,e.jsx)(d.Z,{span:24,children:(0,e.jsx)(we.Z,{})})})})]})})},Ke=Ge,Ne=r(16165),We=function(){return(0,e.jsxs)("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("g",{clipPath:"url(#clip0_171292_29290)",children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 14.4219V1.97748C0 0.99704 0.797333 0.199707 1.77778 0.199707H14.2222C15.2027 0.199707 16 0.99704 16 1.97748V14.4219C16 15.4024 15.2027 16.1997 14.2222 16.1997H1.77778C0.797333 16.1997 0 15.4024 0 14.4219ZM1.33333 1.53304V14.8664H14.6667V1.53304H1.33333ZM12.4444 8.19971H11.1111V5.0886H8V3.75526H12.4444V8.19971ZM4.88889 11.3108H8V12.6442H3.55556V8.19971H4.88889V11.3108Z",fill:"#1890FF"})}),(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"clip0_171292_29290",children:(0,e.jsx)("rect",{width:"16",height:"16",fill:"white",transform:"translate(0 0.199707)"})})})]})},Ve=function(h){return(0,e.jsx)(Ne.Z,u()({component:We},h))},Je=r(95971),Qe=r(24969),Xe=r(68795),ve=r(87547),$e=r(28548),ue=r(30028),ye=r(24093),Ye=function(h){var m=h.area_id,n=b.useState([]),z=p()(n,2),N=z[0],U=z[1],g=b.useState([]),T=p()(g,2),W=T[0],I=T[1],H=b.useState(!1),x=p()(H,2),B=x[0],y=x[1],O=function(){var A=S()(f()().mark(function M(){var $;return f()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return y(!0),R.next=3,(0,Je.cH)({params:{area_id:m}});case 3:$=R.sent,console.log($,"data tenant"),y(!1),$.error||(U($.data),I($.data));case 7:case"end":return R.stop()}},M)}));return function(){return A.apply(this,arguments)}}();return b.useEffect(function(){O()},[]),(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(w.Z,{gutter:[8,20],children:[(0,e.jsx)(d.Z,{span:18,style:{paddingLeft:20,paddingTop:10},children:(0,e.jsxs)(Z.Z.Text,{strong:!0,style:{fontSize:16},children:["List Tenant (",N.length,")"]})}),(0,e.jsx)(d.Z,{span:6,children:(0,e.jsx)(i.Z,{icon:(0,e.jsx)(Qe.Z,{}),type:"primary",shape:"round",size:"large",onClick:function(){return ue.history.push("/tenant/create",{area_id:m})},children:"Add"})}),(0,e.jsx)(d.Z,{span:24,style:{paddingLeft:20},children:(0,e.jsx)(Se.Z,{suffix:(0,e.jsx)(Xe.Z,{}),size:"large",style:{borderRadius:"20px"},placeholder:"Search Tenant Name",onChange:function(M){U(W.filter(function($){return $.name.toLowerCase().includes(M.target.value.toLowerCase())}))}})}),(0,e.jsx)(d.Z,{span:24,style:{paddingLeft:20,maxHeight:"70vh",overflow:"scroll"},children:N.length>0&&!B?N.map(function(A){return(0,e.jsx)(q.Z,{loading:B,bordered:!1,style:{marginBottom:8},bodyStyle:{backgroundColor:"#FAFAFA",padding:12},children:(0,e.jsxs)("div",{style:{cursor:"pointer",display:"flex",flexDirection:"row",gap:"24px",overflow:"visible"},onClick:function(){return ue.history.push("/area/tenant",{tenant_id:A.id,area_id:m})},children:[(0,e.jsx)("div",{children:A.logo&&A.logo!==""?(0,e.jsx)(ye.C,{icon:(0,e.jsx)(ve.Z,{}),size:60,shape:"square",src:A.logo}):(0,e.jsx)(ye.C,{icon:(0,e.jsx)(ve.Z,{}),size:60,shape:"square"})}),(0,e.jsx)("div",{style:{width:"100%",overflow:"visible"},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",flexDirection:"column",gap:"14px"},children:[(0,e.jsx)("div",{children:(0,e.jsx)(Z.Z.Text,{style:{fontSize:16},children:A.name})}),(0,e.jsx)("div",{style:{width:"100%"},children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(ve.Z,{style:{color:"#1890FF"}}),(0,e.jsx)(Z.Z,{children:A.pic_name})]}),(0,e.jsxs)(K.Z,{style:{float:"right"},children:[(0,e.jsx)($e.Z,{style:{color:"#1890FF"}}),(0,e.jsx)(Z.Z,{children:A.phone})]})]})})]})})]})},A.id)}):null})]})})},qe=Ye,er=r(82826),rr=r(86548),ar=r(33862),De=r(88641),tr=r(25035),nr=r(38402),_e=r(58492),sr=r(84908),ir=r(95439),lr=r(64593),or=function(){var h=b.useState("Area Settings"),m=p()(h,2),n=m[0],z=m[1],N=(0,ue.useLocation)(),U=b.useState(!1),g=p()(U,2),T=g[0],W=g[1],I=b.useState([]),H=p()(I,2),x=H[0],B=H[1],y=N.state,O=function(){var A=S()(f()().mark(function M(){var $;return f()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return W(!0),R.next=3,(0,je.yz)(y==null?void 0:y.area_id);case 3:$=R.sent,W(!1),$.error||B($.data);case 6:case"end":return R.stop()}},M)}));return function(){return A.apply(this,arguments)}}();return b.useEffect(function(){y.area_id||ue.history.push("/area")},[y]),b.useEffect(function(){O()},[]),(0,e.jsxs)(nr._z,{childrenContentStyle:{minHeight:"70vh"},style:{backgroundColor:"white"},title:(0,e.jsx)(i.Z,{type:"link",onClick:function(){return ue.history.push("/area")},size:"large",children:(0,e.jsxs)(K.Z,{style:{cursor:"pointer"},align:"start",size:"large",children:[(0,e.jsx)(er.Z,{onClick:function(){return ue.history.push("/area")},style:{marginTop:"12px",fontSize:"24px",color:"#000"}}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"left"},children:[(0,e.jsxs)(_e.Z,{children:[(0,e.jsx)(_e.Z.Item,{children:"Area Management"}),(0,e.jsx)(_e.Z.Item,{href:"#",children:"Area"})]}),(0,e.jsx)(Z.Z.Title,{level:5,children:"Detail Area"})]})]})}),children:[(0,e.jsxs)(lr.q,{children:[(0,e.jsx)("meta",{charSet:"utf-8"}),(0,e.jsx)("title",{children:"AAT | Detail Area "}),(0,e.jsx)("link",{rel:"icon",href:"https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png",type:"image/x-icon"})]}),(0,e.jsxs)(w.Z,{gutter:[24,16],style:{borderTop:"1px solid rgba(0, 0, 0, 0.06)",paddingTop:20},children:[(0,e.jsxs)(d.Z,{xs:24,sm:24,md:24,lg:16,xl:18,xxl:18,children:[(0,e.jsx)(q.Z,{style:{borderRadius:8},loading:T,children:(0,e.jsxs)(w.Z,{gutter:[16,16],children:[(0,e.jsx)(d.Z,{xs:24,sm:24,md:24,lg:8,xl:6,xxl:4,children:x.photo&&x.photo!==""?(0,e.jsx)(ye.C,{shape:"square",src:x.photo,size:{xs:124,sm:124,md:144,lg:144,xl:144,xxl:144}}):(0,e.jsx)(ye.C,{shape:"square",icon:(0,e.jsx)(ve.Z,{}),size:{xs:124,sm:124,md:144,lg:144,xl:144,xxl:144}})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:24,lg:16,xl:18,xxl:18,children:(0,e.jsxs)("div",{children:[(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(Z.Z.Title,{level:4,children:x.area_name}),(0,e.jsx)(i.Z,{icon:(0,e.jsx)(rr.Z,{}),type:"link",onClick:function(){ue.history.push("/area/edit",{dataEdit:x})}})]}),(0,e.jsxs)(w.Z,{gutter:[24,16],children:[(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:6,xl:4,xxl:4,children:(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(Ve,{}),(0,e.jsx)(Z.Z,{children:"Area Name"})]})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:16,xl:18,xxl:18,children:(0,e.jsx)(Z.Z,{children:x.area_name})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:6,xl:4,xxl:4,children:(0,e.jsxs)(K.Z,{children:[(0,e.jsx)($e.Z,{style:{color:"#1890FF",fontSize:16}}),(0,e.jsx)(Z.Z,{children:"Phone"})]})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:16,xl:18,xxl:18,children:(0,e.jsx)(Z.Z,{children:x.phone})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:6,xl:4,xxl:4,children:(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(ar.Z,{style:{color:"#1890FF",fontSize:16}}),(0,e.jsx)(Z.Z,{children:"Address"})]})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:16,xl:18,xxl:18,children:(0,e.jsx)(Z.Z,{children:x.address})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:6,xl:4,xxl:4,children:(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(ve.Z,{style:{color:"#1890FF",fontSize:16}}),(0,e.jsx)(Z.Z,{children:"PIC"})]})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:16,xl:18,xxl:18,children:(0,e.jsx)(Z.Z,{children:x.pic_name})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:6,xl:4,xxl:4,children:(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(De.Z,{style:{color:"#1890FF",fontSize:16}}),(0,e.jsx)(Z.Z,{children:"Email PIC"})]})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:16,xl:18,xxl:18,children:(0,e.jsx)(Z.Z.Link,{children:x.email_pic})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:6,xl:4,xxl:4,children:(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(De.Z,{style:{color:"#1890FF",fontSize:16}}),(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(Z.Z,{children:"Email PIC Admin "}),(0,e.jsx)(sr.Z,{title:"Email PIC Admin",children:(0,e.jsx)(tr.Z,{style:{color:"#1890FF"}})})]})]})}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:12,lg:16,xl:18,xxl:18,children:(0,e.jsx)(Z.Z.Link,{children:x.email_pic_admin})})]})]})})]})}),(0,e.jsx)(ir.Z,{options:["Area Settings","Pricing","Member Level"],onResize:void 0,onResizeCapture:void 0,size:"large",block:!0,style:{maxWidth:450,marginTop:20,marginBottom:20,padding:6,backgroundImage:"radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)"},onChange:function(M){return z(M.toString())}}),x.id&&(n=="Area Settings"?(0,e.jsx)(Be,{getData:O,dataArea:x,loadingArea:T}):n=="Member Level"?(0,e.jsx)(Ke,{getData:O,dataArea:x,loadingArea:T}):null)]}),(0,e.jsx)(d.Z,{xs:24,sm:24,md:24,lg:8,xl:6,xxl:6,children:(0,e.jsx)(qe,{area_id:y.area_id})}),(0,e.jsx)(d.Z,{span:24,children:x.id&&n=="Pricing"?(0,e.jsx)(F,{getData:O,dataArea:x,loadingArea:T}):null})]})]})},dr=or},4745:function(Ee,me,r){r.d(me,{K7:function(){return e},OO:function(){return ge},Ug:function(){return Q},_J:function(){return Z},bg:function(){return w},if:function(){return C},yz:function(){return q}});var fe=r(11281),f=r.n(fe),he=r(97983),S=r.n(he),xe=r(40794),p=r.n(xe),j=r(12461),pe=r(9669),G=r.n(pe),k=r(9212);function w(l){return d.apply(this,arguments)}function d(){return d=p()(S()().mark(function l(o){var a,_;return S()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,k.Z.get("/area",f()({method:"GET"},o||{}));case 3:return a=c.sent,_=a.data,c.abrupt("return",{data:_.data,error:!1,message:"Success Get",responseCode:_.responseCode});case 8:if(c.prev=8,c.t0=c.catch(0),!G().isAxiosError(c.t0)){c.next=16;break}return console.log("error message: ",c.t0.message),j.ZP.error(c.t0.message),c.abrupt("return",{data:null,error:!0,message:c.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",c.t0),j.ZP.error("An unexpected error occurred"),c.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return c.stop()}},l,null,[[0,8]])})),d.apply(this,arguments)}var q=function(){var l=p()(S()().mark(function o(a){var _,F;return S()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,k.Z.get("/area/detail/".concat(a),{method:"GET"});case 3:return _=s.sent,F=_.data,s.abrupt("return",{data:F.data,error:!1,message:"Success Get",responseCode:F.responseCode});case 8:if(s.prev=8,s.t0=s.catch(0),!G().isAxiosError(s.t0)){s.next=16;break}return console.log("error message: ",s.t0.message),j.ZP.error(s.t0.message),s.abrupt("return",{data:null,error:!0,message:s.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",s.t0),j.ZP.error("An unexpected error occurred"),s.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return s.stop()}},o,null,[[0,8]])}));return function(a){return l.apply(this,arguments)}}(),ge=function(){var l=p()(S()().mark(function o(a){var _,F,c;return S()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.Z.post("/area",{company_name:a.company_name,area_name:a.area_name,pic_name:a.pic_name,billing_address:a.billing_address,image:a.image,phone:a.phone,email_pic:a.email_pic,email_pic_admin:a.email_pic_admin,address:a.address,latitude:a.latitude,longitude:a.longitude},{headers:{"Content-Type":"multipart/form-data"}});case 3:return _=t.sent,F=_.data,t.abrupt("return",f()(f()({},F),{},{status:"ok",error:!1}));case 8:if(t.prev=8,t.t0=t.catch(0),!G().isAxiosError(t.t0)){t.next=17;break}return console.log("error message: ",t.t0.message),c=t.t0.response,c.data.message?j.ZP.error(c.data.message):j.ZP.error(t.t0.message),t.abrupt("return",{responseCode:400,message:t.t0.message,error:!0});case 17:return console.log("unexpected error: ",t.t0),j.ZP.error("An unexpected error occured"),t.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return t.stop()}},o,null,[[0,8]])}));return function(a){return l.apply(this,arguments)}}(),Z=function(){var l=p()(S()().mark(function o(a,_){var F,c,s;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,k.Z.post("/area/setting/"+_,f()({},a));case 3:return F=u.sent,c=F.data,u.abrupt("return",f()(f()({},c),{},{status:"ok",error:!1}));case 8:if(u.prev=8,u.t0=u.catch(0),!G().isAxiosError(u.t0)){u.next=17;break}return console.log("error message: ",u.t0.message),s=u.t0.response,s.data.message?j.ZP.error(s.data.message):j.ZP.error(u.t0.message),u.abrupt("return",{responseCode:400,message:u.t0.message,error:!0});case 17:return console.log("unexpected error: ",u.t0),j.ZP.error("An unexpected error occured"),u.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return u.stop()}},o,null,[[0,8]])}));return function(a,_){return l.apply(this,arguments)}}(),b=null,Q=function(){var l=p()(S()().mark(function o(a,_){var F,c,s;return S()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,k.Z.put("/area/"+_,a);case 3:return F=u.sent,c=F.data,u.abrupt("return",f()(f()({},c),{},{status:"ok",error:!1}));case 8:if(u.prev=8,u.t0=u.catch(0),!G().isAxiosError(u.t0)){u.next=17;break}return console.log("error message: ",u.t0.message),s=u.t0.response,s.data.message?j.ZP.error(s.data.message):j.ZP.error(u.t0.message),u.abrupt("return",{responseCode:400,message:u.t0.message,error:!0});case 17:return console.log("unexpected error: ",u.t0),j.ZP.error("An unexpected error occured"),u.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return u.stop()}},o,null,[[0,8]])}));return function(a,_){return l.apply(this,arguments)}}(),C=function(){var l=p()(S()().mark(function o(a){var _,F,c;return S()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.Z.post("/area/create/member",{name:a.member_name,area_id:a.area_id});case 3:return _=t.sent,F=_.data,t.abrupt("return",f()(f()({},F),{},{status:"ok",error:!1}));case 8:if(t.prev=8,t.t0=t.catch(0),!G().isAxiosError(t.t0)){t.next=17;break}return console.log("error message: ",t.t0.message),c=t.t0.response,c.data.message?j.ZP.error(c.data.message):j.ZP.error(t.t0.message),t.abrupt("return",{responseCode:400,message:t.t0.message,error:!0});case 17:return console.log("unexpected error: ",t.t0),j.ZP.error("An unexpected error occured"),t.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return t.stop()}},o,null,[[0,8]])}));return function(a){return l.apply(this,arguments)}}();function i(l,o){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function l(o,a){var _,F;return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,api.get("/area/member/"+a,_objectSpread({method:"GET"},o||{}));case 3:return _=s.sent,F=_.data,s.abrupt("return",{data:F.data,error:!1,message:"Success Get",responseCode:F.responseCode});case 8:if(s.prev=8,s.t0=s.catch(0),!axios.isAxiosError(s.t0)){s.next=16;break}return console.log("error message: ",s.t0.message),message.error(s.t0.message),s.abrupt("return",{data:null,error:!0,message:s.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",s.t0),message.error("An unexpected error occurred"),s.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return s.stop()}},l,null,[[0,8]])})),P.apply(this,arguments)}var e=function(){var l=p()(S()().mark(function o(a){var _,F,c;return S()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.Z.post("/area/pricing/member",a,{});case 3:return _=t.sent,F=_.data,t.abrupt("return",f()(f()({},F),{},{status:"ok",error:!1}));case 8:if(t.prev=8,t.t0=t.catch(0),!G().isAxiosError(t.t0)){t.next=17;break}return console.log("error message: ",t.t0.message),c=t.t0.response,c.data.message?j.ZP.error(c.data.message):j.ZP.error(t.t0.message),t.abrupt("return",{responseCode:400,message:t.t0.message,error:!0});case 17:return console.log("unexpected error: ",t.t0),j.ZP.error("An unexpected error occured"),t.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return t.stop()}},o,null,[[0,8]])}));return function(a){return l.apply(this,arguments)}}()},95971:function(Ee,me,r){r.d(me,{GU:function(){return b},cH:function(){return w},mZ:function(){return ge},rR:function(){return q}});var fe=r(97983),f=r.n(fe),he=r(11281),S=r.n(he),xe=r(40794),p=r.n(xe),j=r(12461),pe=r(9669),G=r.n(pe),k=r(9212);function w(Q){return d.apply(this,arguments)}function d(){return d=p()(f()().mark(function Q(C){var i,P;return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,k.Z.get("/tenant",S()({method:"GET"},C||{}));case 3:return i=l.sent,P=i.data,l.abrupt("return",{data:P.data,error:!1,message:"Success Get",responseCode:P.responseCode});case 8:if(l.prev=8,l.t0=l.catch(0),!G().isAxiosError(l.t0)){l.next=16;break}return console.log("error message: ",l.t0.message),j.ZP.error(l.t0.message),l.abrupt("return",{data:null,error:!0,message:l.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",l.t0),j.ZP.error("An unexpected error occurred"),l.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return l.stop()}},Q,null,[[0,8]])})),d.apply(this,arguments)}var q=function(){var Q=p()(f()().mark(function C(i){var P,e,l;return f()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.Z.put("/tenant/".concat(i.id),{image:i.image,area_id:i.area_id,name:i.name,pic_name:i.pic_name,address:i.address,latitude:i.latitude,longitude:i.longitude,member_id:i.member_id,type:i.type,area_name:i.area_name,phone:i.phone,email:i.email,username:i.username,password:i.password,nama_unit:i.nama_unit,kode_unit:i.kode_unit},{headers:{"Content-Type":"multipart/form-data"}});case 3:return P=a.sent,e=P.data,a.abrupt("return",S()(S()({},e),{},{status:"ok",error:!1}));case 8:if(a.prev=8,a.t0=a.catch(0),!G().isAxiosError(a.t0)){a.next=17;break}return console.log("error message: ",a.t0.message),l=a.t0.response,l.data.message?j.ZP.error(l.data.message):j.ZP.error(a.t0.message),a.abrupt("return",{responseCode:400,message:a.t0.message,error:!0});case 17:return console.log("unexpected error: ",a.t0),j.ZP.error("An unexpected error occured"),a.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return a.stop()}},C,null,[[0,8]])}));return function(i){return Q.apply(this,arguments)}}(),ge=function(){var Q=p()(f()().mark(function C(i){var P,e,l;return f()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.Z.post("/tenant",{image:i.image,area_id:i.area_id,name:i.name,pic_name:i.pic_name,address:i.address,latitude:i.latitude,longitude:i.longitude,type:i.type,area_name:i.area_name,phone:i.phone,email:i.email,username:i.username,password:i.password},{headers:{"Content-Type":"multipart/form-data"}});case 3:return P=a.sent,e=P.data,a.abrupt("return",S()(S()({},e),{},{status:"ok",error:!1}));case 8:if(a.prev=8,a.t0=a.catch(0),!G().isAxiosError(a.t0)){a.next=17;break}return console.log("error message: ",a.t0.message),l=a.t0.response,l.data.message?j.ZP.error(l.data.message):j.ZP.error(a.t0.message),a.abrupt("return",{responseCode:400,message:a.t0.message,error:!0});case 17:return console.log("unexpected error: ",a.t0),j.ZP.error("An unexpected error occured"),a.abrupt("return",{responseCode:400,message:"An unexpected error occured",error:!0});case 20:case"end":return a.stop()}},C,null,[[0,8]])}));return function(i){return Q.apply(this,arguments)}}(),Z=null,b=function(){var Q=p()(f()().mark(function C(i){var P,e;return f()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,k.Z.get("/tenant/detail/".concat(i),{method:"GET"});case 3:return P=o.sent,e=P.data,o.abrupt("return",{data:e.data,error:!1,message:"Success Get",responseCode:e.responseCode});case 8:if(o.prev=8,o.t0=o.catch(0),!G().isAxiosError(o.t0)){o.next=16;break}return console.log("error message: ",o.t0.message),j.ZP.error(o.t0.message),o.abrupt("return",{data:null,error:!0,message:o.t0.message,responseCode:400});case 16:return console.log("unexpected error: ",o.t0),j.ZP.error("An unexpected error occurred"),o.abrupt("return",{data:null,error:!0,message:"An unexpected error occurred",responseCode:400});case 19:case"end":return o.stop()}},C,null,[[0,8]])}));return function(i){return Q.apply(this,arguments)}}()}}]);
