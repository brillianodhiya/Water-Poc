"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8441],{86873:function(ee,Z,e){e.d(Z,{B:function(){return v}});var R=e(97983),c=e.n(R),x=e(40794),y=e.n(x),d=e(52948),v=function(){var i=y()(c()().mark(function f(I,D){var _;return c()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return d.Z.setApiKey("AIzaSyAcli1qFFLWrhhlDhVUCWkAJqzEY6Cp9UI"),d.Z.setLanguage("en"),d.Z.setRegion("id"),j.next=5,d.Z.fromLatLng(I,D);case 5:return _=j.sent,j.next=8,_==null?void 0:_.results[0].formatted_address;case 8:return j.abrupt("return",j.sent);case 9:case"end":return j.stop()}},f)}));return function(I,D){return i.apply(this,arguments)}}()},72923:function(ee,Z,e){e.d(Z,{Z:function(){return j}});var R=e(97983),c=e.n(R),x=e(40794),y=e.n(x),d=e(67294),v=e(37054),i=e(69677),f=e(21802),I=e(49288),D=e(20906),_=e(85893),w=i.Z.Search;function j(l){var u=l.center,U=u===void 0?{lat:-6.2,lng:106.816666}:u,h=l.onChange,P=h===void 0?function(M){}:h,O=(0,v.Db)({googleMapsApiKey:"AIzaSyAcli1qFFLWrhhlDhVUCWkAJqzEY6Cp9UI",libraries:["places"]}),A=O.isLoaded;return A?(0,_.jsx)(W,{c:U,onChange:P}):(0,_.jsx)("div",{children:"Loading..."})}function W(l){var u=l.c,U=u===void 0?{lat:-6.2,lng:106.816666}:u,h=l.onChange,P=h===void 0?function(A){}:h,O=(0,d.useMemo)(function(){return U},[U]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"12px",alignItems:"center",alignContent:"center"},children:[(0,_.jsx)(f.Z,{style:{fontSize:"14px",fontWeight:400,marginTop:"12px"},children:"Pin Location"}),(0,_.jsx)(F,{setSelected:P})]}),(0,_.jsx)(v.b6,{onRightClick:function(M){var t=M.latLng.lat(),S=M.latLng.lng();console.log(M,"E");try{P({lat:t,lng:S})}catch(s){}},zoom:16,center:O,mapContainerClassName:"map-container-gateway",children:(0,_.jsx)(v.Jx,{onDragEnd:function(M){var t=M.latLng.lat(),S=M.latLng.lng();try{P({lat:t,lng:S})}catch(s){}},draggable:!0,position:O})})]})}var F=function(u){var U=u.setSelected,h=(0,D.ZP)(),P=h.ready,O=h.value,A=h.setValue,M=h.suggestions,t=M.status,S=M.data,s=h.clearSuggestions,z=function(){var a=y()(c()().mark(function E(g){var T,Y,n,K;return c()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return A(JSON.parse(g).description,!1),s(),B.next=4,(0,D.LM)({address:g});case 4:return T=B.sent,B.next=7,(0,D.WV)(T[0]);case 7:Y=B.sent,n=Y.lat,K=Y.lng,U({lat:n,lng:K});case 11:case"end":return B.stop()}},E)}));return function(g){return a.apply(this,arguments)}}(),p=S.map(function(a){var E=a.place_id,g=a.description;return{label:g,value:JSON.stringify({place_id:E,description:g})}});return(0,_.jsx)(I.Z,{options:p,style:{width:200},onSelect:z,value:O,children:(0,_.jsx)(w,{disabled:!P,value:O,onChange:function(E){return A(E.target.value)},placeholder:"Cari Lokasi",style:{width:200}})})}},75539:function(ee,Z,e){e.d(Z,{DT:function(){return c},et:function(){return d},qi:function(){return y}});var R=e(67294),c=function(i){return new Intl.NumberFormat("id-ID").format(i)},x=function(i){i=parseFloat(i),isNaN(i)&&(i=0);var f=new Intl.NumberFormat("id-ID").format(i);return f.split(",").length>1?f.split(",")[1].length<3?f.split(",")[0]+","+(f.split(",")[1]+"000").slice(0,3):f:f+",000"},y=function(i){return new Intl.NumberFormat("id-ID").format(i)},d=function(i){return i==null?void 0:i.toLocaleString("id-ID",{style:"currency",currency:"IDR"})}},45428:function(ee,Z,e){e.d(Z,{Y:function(){return u}});var R=e(11281),c=e.n(R),x=e(97983),y=e.n(x),d=e(40794),v=e.n(d),i=e(12741),f=e.n(i),I=e(28530),D=e(80737),_=e(14538),w=e(11382),j=e(79915),W=e(67294),F=e(85893),l={labelCol:{span:8},wrapperCol:{span:16}},u=function(h){var P=h.devEui,O=h.interval,A=h.onOk,M=h.onCancel,t=h.open,S=D.Z.useForm(),s=f()(S,1),z=s[0],p=W.useState(!1),a=f()(p,2),E=a[0],g=a[1];W.useEffect(function(){z.setFields([{name:"interval",value:parseInt(O)}])},[t,O]);var T=function(){var Y=v()(y()().mark(function n(K){var k;return y()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return console.log(K),g(!0),J.next=4,(0,I.fJ)({devEui:P,interval:K.interval});case 4:k=J.sent,k.error?g(!1):(g(!1),_.Z.success({content:"Success Edit Interval "+P+"to "+K.interval,onOk:function(){A()}}));case 6:case"end":return J.stop()}},n)}));return function(K){return Y.apply(this,arguments)}}();return(0,F.jsx)(_.Z,{title:"Edit Interval "+P,open:t,onOk:z.submit,onCancel:M,okText:"Save",children:(0,F.jsx)(w.Z,{spinning:E,children:(0,F.jsx)(D.Z,c()(c()({},l),{},{form:z,name:"control-hooks",onFinish:T,children:(0,F.jsx)(D.Z.Item,{name:"interval",label:"Interval",rules:[{required:!0},{min:5,message:"Min. 5",type:"number"}],children:(0,F.jsx)(j.Z,{placeholder:"interval",addonAfter:"Min"})})}))})})}},38405:function(ee,Z,e){e.d(Z,{Lv:function(){return F},QP:function(){return _},t3:function(){return W},wm:function(){return j},xT:function(){return w}});var R=e(11281),c=e.n(R),x=e(16165),y=e(67294),d=e(85893),v=function(){return(0,d.jsx)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 3.41671L3.5 12.1667C3.5 12.4761 3.62292 12.7729 3.84171 12.9917C4.0605 13.2105 4.35725 13.3334 4.66667 13.3334L9.33333 13.3334C9.64275 13.3334 9.9395 13.2105 10.1583 12.9917C10.3771 12.7729 10.5 12.4761 10.5 12.1667L10.5 3.41671C10.5 3.10729 10.3771 2.81054 10.1583 2.59175C9.9395 2.37296 9.64275 2.25004 9.33333 2.25004L8.75 2.25004C8.75 2.09533 8.68854 1.94696 8.57914 1.83756C8.46975 1.72817 8.32138 1.66671 8.16667 1.66671L5.83333 1.66671C5.67862 1.66671 5.53025 1.72817 5.42085 1.83756C5.31146 1.94696 5.25 2.09533 5.25 2.25004L4.66667 2.25004C4.35725 2.25004 4.0605 2.37296 3.84171 2.59175C3.62292 2.81054 3.5 3.10729 3.5 3.41671Z",fill:"#52C41A"})})},i=function(){return(0,d.jsx)("svg",{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M1.66667 7.66658L6.33333 7.66658L6.33333 2.41658L1.66667 2.41658L1.66667 7.66658ZM2.25 1.24992C2.25 1.09521 2.31146 0.946834 2.42085 0.837438C2.53025 0.728043 2.67862 0.666584 2.83333 0.666584L5.16667 0.666584C5.32138 0.666584 5.46975 0.728042 5.57914 0.837438C5.68854 0.946834 5.75 1.09521 5.75 1.24992L6.33333 1.24992C6.64275 1.24992 6.9395 1.37283 7.15829 1.59163C7.37708 1.81042 7.5 2.10717 7.5 2.41658L7.5 11.1666C7.5 11.476 7.37708 11.7728 7.15829 11.9915C6.9395 12.2103 6.64275 12.3333 6.33333 12.3333L1.66667 12.3333C1.35725 12.3333 1.0605 12.2103 0.841709 11.9915C0.622916 11.7728 0.5 11.476 0.5 11.1666L0.5 2.41658C0.5 2.10717 0.622916 1.81042 0.841708 1.59163C1.0605 1.37283 1.35725 1.24992 1.66667 1.24992L2.25 1.24992Z",fill:"#FF4D4F"})})},f=function(){return(0,d.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{y:"0.000976562",width:"32",height:"32",rx:"16",fill:"#FFF1F0"}),(0,d.jsx)("path",{d:"M13 17.501L19 17.501L19 10.751L13 10.751L13 17.501ZM13.75 9.25098C13.75 9.05206 13.829 8.8613 13.9697 8.72065C14.1103 8.57999 14.3011 8.50098 14.5 8.50098L17.5 8.50098C17.6989 8.50098 17.8897 8.57999 18.0303 8.72065C18.171 8.8613 18.25 9.05206 18.25 9.25098L19 9.25098C19.3978 9.25098 19.7794 9.40901 20.0607 9.69032C20.342 9.97162 20.5 10.3532 20.5 10.751L20.5 22.001C20.5 22.3988 20.342 22.7803 20.0607 23.0616C19.7794 23.3429 19.3978 23.501 19 23.501L13 23.501C12.6022 23.501 12.2206 23.3429 11.9393 23.0616C11.658 22.7803 11.5 22.3988 11.5 22.001L11.5 10.751C11.5 10.3532 11.658 9.97162 11.9393 9.69032C12.2206 9.40901 12.6022 9.25098 13 9.25098L13.75 9.25098Z",fill:"#FF4D4F"})]})},I=function(){return(0,d.jsx)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M4.66667 5.74992L9.33333 5.74992L9.33333 3.41658L4.66667 3.41658L4.66667 5.74992ZM5.25 2.24992C5.25 2.09521 5.31146 1.94683 5.42085 1.83744C5.53025 1.72804 5.67862 1.66658 5.83333 1.66658L8.16667 1.66658C8.32138 1.66658 8.46975 1.72804 8.57914 1.83744C8.68854 1.94683 8.75 2.09521 8.75 2.24992L9.33333 2.24992C9.64275 2.24992 9.9395 2.37283 10.1583 2.59163C10.3771 2.81042 10.5 3.10717 10.5 3.41658L10.5 12.1666C10.5 12.476 10.3771 12.7728 10.1583 12.9915C9.9395 13.2103 9.64275 13.3333 9.33333 13.3333L4.66667 13.3333C4.35725 13.3333 4.0605 13.2103 3.84171 12.9915C3.62292 12.7728 3.5 12.476 3.5 12.1666L3.5 3.41658C3.5 3.10717 3.62292 2.81042 3.84171 2.59163C4.0605 2.37283 4.35725 2.24992 4.66667 2.24992L5.25 2.24992Z",fill:"#FAAD14"})})},D=function(){return(0,d.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{y:"0.000976562",width:"32",height:"32",rx:"16",fill:"#FFF1F0"}),(0,d.jsx)("path",{d:"M13 17.501L19 17.501L19 10.751L13 10.751L13 17.501ZM13.75 9.25098C13.75 9.05206 13.829 8.8613 13.9697 8.72065C14.1103 8.57999 14.3011 8.50098 14.5 8.50098L17.5 8.50098C17.6989 8.50098 17.8897 8.57999 18.0303 8.72065C18.171 8.8613 18.25 9.05206 18.25 9.25098L19 9.25098C19.3978 9.25098 19.7794 9.40901 20.0607 9.69032C20.342 9.97162 20.5 10.3532 20.5 10.751L20.5 22.001C20.5 22.3988 20.342 22.7803 20.0607 23.0616C19.7794 23.3429 19.3978 23.501 19 23.501L13 23.501C12.6022 23.501 12.2206 23.3429 11.9393 23.0616C11.658 22.7803 11.5 22.3988 11.5 22.001L11.5 10.751C11.5 10.3532 11.658 9.97162 11.9393 9.69032C12.2206 9.40901 12.6022 9.25098 13 9.25098L13.75 9.25098Z",fill:"#FAAD14"})]})},_=function(u){return(0,d.jsx)(x.Z,c()({component:v},u))},w=function(u){return(0,d.jsx)(x.Z,c()({component:I},u))},j=function(u){return(0,d.jsx)(x.Z,c()({component:D},u))},W=function(u){return(0,d.jsx)(x.Z,c()({component:i},u))},F=function(u){return(0,d.jsx)(x.Z,c()({component:f},u))}},78120:function(ee,Z,e){e.d(Z,{T:function(){return de}});var R=e(97983),c=e.n(R),x=e(40794),y=e.n(x),d=e(12741),v=e.n(d),i=e(28530),f=e(87547),I=e(20841),D=e(94149),_=e(83456),w=e(83031),j=e(22844),W=e(28011),F=e(82099),l=e(69243),u=e(91714),U=e(47235),h=e(15360),P=e(33862),O=e(14538),A=e(11382),M=e(59652),t=e(26713),S=e(24093),s=e(21802),z=e(20550),p=e(71230),a=e(15746),E=e(67294),g=e(11281),T=e.n(g),Y=e(16165),n=e(85893),K=function(){return(0,n.jsx)("svg",{width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.42247 4.82181C3.37803 5.04403 3.24469 5.22181 3.02247 5.22181C2.80025 5.26625 2.57803 5.13292 2.53358 4.86625C2.53358 4.55514 2.53358 4.28848 2.57803 3.97737C2.66692 3.66625 2.84469 3.39959 3.20025 3.08848C3.86689 2.71072 4.54463 2.33296 5.22238 1.9552L5.22244 1.95516L5.22247 1.95515L5.22249 1.95513C5.90026 1.57736 6.57803 1.19958 7.24469 0.82181C7.30395 0.79218 7.40272 0.762551 7.50148 0.732921L7.5015 0.732917C7.55088 0.718103 7.60025 0.70329 7.64469 0.688477H7.9558C8.32247 0.788476 8.61414 0.963477 8.90581 1.13848C9.00303 1.19681 9.10025 1.25514 9.20025 1.3107C9.71136 1.59959 10.2336 1.88847 10.7558 2.17736C11.278 2.46625 11.8002 2.75514 12.3114 3.04403C12.8002 3.3107 13.0225 3.7107 13.0225 4.28848V6.15514C13.0225 6.37737 12.9336 6.5107 12.7558 6.59959C12.578 6.64403 12.4447 6.64403 12.3114 6.5107C12.2225 6.42181 12.178 6.28848 12.178 6.15514V4.33292V4.19959C12.178 4.06625 12.0891 3.93292 11.9558 3.84403C11.3114 3.46625 10.6558 3.09959 10.0002 2.73292C9.34469 2.36625 8.68914 1.99959 8.04469 1.62181C7.91136 1.53292 7.73358 1.53292 7.60025 1.62181C6.95581 1.99958 6.30027 2.36624 5.64472 2.7329L5.64471 2.73291L5.64469 2.73292L5.64468 2.73293C4.98913 3.09959 4.33358 3.46626 3.68914 3.84403C3.51136 3.97737 3.42247 4.1107 3.42247 4.28848V4.82181ZM7.55582 6.28848C8.07804 6.64403 8.60026 6.99959 9.11137 7.35514C9.46693 7.62181 9.6447 7.97736 9.6447 8.37736V11.6663C9.6447 12.4218 9.11137 12.9551 8.35582 12.9551H2.22248C1.55582 12.9551 1.06693 12.5996 0.933594 11.9329V11.8885V8.19959C0.948409 8.15514 0.958285 8.10576 0.968162 8.05638C0.987915 7.95761 1.00767 7.85885 1.06693 7.79959L1.11099 7.74045C1.22168 7.59141 1.30942 7.47328 1.46693 7.35514L1.46696 7.35512L1.46699 7.3551L1.467 7.35509C2.4892 6.644 3.5114 5.9329 4.57804 5.22181C5.02248 4.9107 5.51137 4.9107 6.00026 5.22181C6.51137 5.57737 7.0336 5.93292 7.55582 6.28848ZM3.42248 11.3107V12.1107H7.15582V11.3107H3.42248ZM3.37804 9.66625V10.4663H7.11137V9.66625H3.37804ZM8.4447 12.1107C8.66693 12.1107 8.80026 11.9329 8.80026 11.7107V8.46625C8.80026 8.33292 8.75582 8.19959 8.62248 8.1107C7.55585 7.39961 6.53366 6.68852 5.51148 5.97744L5.51143 5.9774L5.51137 5.97736C5.33359 5.84403 5.15582 5.84403 4.97804 5.97736C3.95584 6.64402 2.93364 7.35511 1.91144 8.0662L1.9114 8.06623L1.91138 8.06625L1.91137 8.06625C1.73359 8.15514 1.68915 8.28847 1.68915 8.46625V8.99959V11.6663C1.68915 11.8885 1.82248 12.0663 2.0447 12.1107H2.53359V11.9329V9.26625C2.53359 8.95514 2.66693 8.77736 3.02248 8.77736H7.46693C7.77804 8.77736 7.95582 8.95514 7.95582 9.26625V11.9329V12.1107H8.31137H8.4447ZM15.0669 8.77736C15.0669 8.06625 14.5336 7.53292 13.8225 7.53292H10.9336C10.6669 7.53292 10.4892 7.7107 10.4892 7.93292C10.4892 8.15514 10.6669 8.33292 10.9336 8.33292H12.3114H13.778C14.0447 8.33292 14.2225 8.46625 14.2225 8.68847V9.57736H14.0447H10.9781C10.6669 9.57736 10.4447 9.7107 10.4447 9.97736C10.4447 10.244 10.6225 10.4218 10.9781 10.4218H14.0447H14.2225V11.1774C14.2225 11.5329 14.0892 11.7107 13.6892 11.7107H10.8892C10.6225 11.7107 10.4447 11.8885 10.4447 12.1107C10.4447 12.3329 10.6225 12.5551 10.8892 12.5551H13.778C14.4892 12.5551 15.0225 12.0218 15.0225 11.3107C15.0669 10.4663 15.0669 9.62181 15.0669 8.77736ZM4.66693 7.13292H5.91137C6.13359 7.13292 6.31137 7.3107 6.31137 7.53292C6.31137 7.75514 6.13359 7.93292 5.91137 7.93292H5.28915H4.66693C4.44471 7.93292 4.26693 7.75514 4.26693 7.53292C4.26693 7.3107 4.44471 7.13292 4.66693 7.13292Z",fill:"#1890FF"})})},k=function($){return(0,n.jsx)(Y.Z,T()({component:K},$))},B=e(86873),J=e(72923),de=function($){var he,ne,ie,te,V,X,_e,ae,re,Q,ue,oe,fe=$.onOk,se=$.onCancel,le=$.open,q=$.devEui,Ee=$.typeName,o=$.dataModal,L=E.useState(!1),C=v()(L,2),m=C[0],N=C[1],b=E.useState(null),H=v()(b,2),r=H[0],G=H[1],Ce=function(){var je=y()(c()().mark(function ce(){var pe;return c()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return N(!0),ve.next=3,(0,i.xX)(q);case 3:pe=ve.sent,N(!1),pe.error||(console.log(pe.data,"W"),G(pe.data));case 6:case"end":return ve.stop()}},ce)}));return function(){return je.apply(this,arguments)}}();return console.log(r,"DATA"),E.useEffect(function(){N(!0),q&&le&&Ce()},[q,le]),E.useEffect(function(){q||G(null)},[q]),console.log(o),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(O.Z,{width:928,title:"Detail Device ",open:le,onOk:function(){G(null),fe()},onCancel:function(){G(null),se()},okText:"Save",cancelText:"Close",okButtonProps:{style:{display:"none"}},children:(0,n.jsxs)(A.Z,{spinning:m,children:[(0,n.jsxs)(M.Z,{style:{borderRadius:8},children:[(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(S.C,{src:o==null||(he=o.Device_Type)===null||he===void 0?void 0:he.icon,icon:(0,n.jsx)(f.Z,{})}),(0,n.jsxs)(t.Z,{direction:"vertical",children:[(0,n.jsx)(s.Z,{style:{color:"rgba(0, 0, 0, 0.45)"},children:"Device Type"}),(0,n.jsx)(s.Z.Title,{level:5,children:(o==null||(ne=o.Device_Type)===null||ne===void 0?void 0:ne.type_name)||"-"})]}),(r==null||(ie=r.data)===null||ie===void 0?void 0:ie.valve)=="open"?(0,n.jsx)(z.Z,{style:{backgroundColor:"#52C41A",color:"#fff",borderRadius:100,padding:"0px 8px"},children:"Online"}):(r==null||(te=r.data)===null||te===void 0?void 0:te.valve)=="close"?(0,n.jsx)(z.Z,{style:{backgroundColor:"red",color:"#fff",borderRadius:100,padding:"0px 8px"},children:"Offline"}):null]}),(0,n.jsxs)(p.Z,{gutter:[16,16],wrap:!0,children:[(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(p.Z,{gutter:[16,16],wrap:!0,children:[(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(I.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Dev Eui"})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsx)(s.Z,{children:(r==null||(V=r.data)===null||V===void 0?void 0:V.deveui)||"-"})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(D.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Application Key"})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsx)(s.Z,{children:(r==null||(X=r.data)===null||X===void 0?void 0:X.application_key)||"-"})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(_.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Application Eui"})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsx)(s.Z,{children:(r==null||(_e=r.data)===null||_e===void 0?void 0:_e.application_eui)||"-"})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(w.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Frekuensi"})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsx)(s.Z,{children:(r==null||(ae=r.data)===null||ae===void 0?void 0:ae.region)||"-"})})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(p.Z,{gutter:[16,16],wrap:!0,children:[(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(j.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Brand/Model"})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsx)(s.Z,{children:(r==null||(re=r.data)===null||re===void 0?void 0:re.brand)||"-"})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(W.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Profile"})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsx)(s.Z,{children:(r==null||(Q=r.data)===null||Q===void 0?void 0:Q.profile)||"-"})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(F.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Class"})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsx)(s.Z,{children:(r==null||(ue=r.data)===null||ue===void 0?void 0:ue.class)||"-"})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(l.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Lorawan MAC Version"})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsx)(s.Z,{children:(r==null||(oe=r.data)===null||oe===void 0?void 0:oe.lora_wan_max_version)||"-"})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(u.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Interval"})]})}),(0,n.jsx)(a.Z,{span:12,children:(0,n.jsx)(s.Z,{children:o!=null&&o.interval?(o==null?void 0:o.interval)+" Minute":"-"})})]})})]})]}),(0,n.jsxs)(p.Z,{gutter:[16,16],style:{padding:20},children:[(0,n.jsx)(a.Z,{span:6,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(k,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Area Name"})]})}),(0,n.jsx)(a.Z,{span:18,children:(0,n.jsx)(s.Z,{children:o==null?void 0:o.area_name})}),(0,n.jsx)(a.Z,{span:6,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(U.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Tenant Name"})]})}),(0,n.jsx)(a.Z,{span:18,children:(0,n.jsx)(s.Z,{children:o==null?void 0:o.tenant_name})}),(0,n.jsx)(a.Z,{span:6,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(h.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Description"})]})}),(0,n.jsx)(a.Z,{span:18,children:(0,n.jsx)(s.Z,{children:o==null?void 0:o.description})}),(0,n.jsx)(a.Z,{span:6,children:(0,n.jsxs)(t.Z,{size:"middle",children:[(0,n.jsx)(P.Z,{style:{color:"#1890FF"}}),(0,n.jsx)(s.Z,{children:"Location"})]})}),(0,n.jsx)(a.Z,{span:18,children:(0,n.jsx)(J.Z,{center:{lat:o==null?void 0:o.latitude,lng:o==null?void 0:o.longitude},onChange:function(ce){(0,B.B)(ce.lat,ce.lng)}})})]})]})})})}},5077:function(ee,Z,e){e.d(Z,{X:function(){return s}});var R=e(97983),c=e.n(R),x=e(40794),y=e.n(x),d=e(12741),v=e.n(d),i=e(67294),f=e(14538),I=e(21802),D=e(41232),_=e(26713),w=e(71577),j=e(23349),W=e(20550),F=e(30381),l=e.n(F),u=e(23430),U=e(61120),h=e.n(U),P=e(84730),O=e(28530),A=e(83461),M=e(75539),t=e(85893),S=function(p){return p.replace(/^_*(.)|_+(.)/g,function(a,E,g){return E?E.toUpperCase():" "+g.toUpperCase()})},s=function(p){var a=p.onOk,E=p.onCancel,g=p.open,T=p.device_id,Y=p.devEui,n=p.typeName,K=p.desc,k=i.useState(!1),B=v()(k,2),J=B[0],de=B[1],me=i.useState(!1),$=v()(me,2),he=$[0],ne=$[1],ie=i.useState([l()().startOf("month"),l()().endOf("month")]),te=v()(ie,2),V=te[0],X=te[1],_e=i.useState([]),ae=v()(_e,2),re=ae[0],Q=ae[1],ue=i.useState([]),oe=v()(ue,2),fe=oe[0],se=oe[1],le=i.useRef(null),q=function(){var o=y()(c()().mark(function L(){var C,m,N;return c()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return C={start_date:void 0,end_date:void 0},V&&(C.start_date=V[0].format("YYYY-MM-DD"),C.end_date=V[1].format("YYYY-MM-DD")),H.next=4,(0,O.kG)({params:{start:C.start_date,end:C.end_date}},T);case 4:m=H.sent,de(!1),m.error||(console.log(m.data,"DATA"),m.data&&m.data.length>0&&(N=[],m.data[0].map(function(r){N.push(r.name)}),m.data.map(function(r,G){r.map(function(Ce){m.data[G][Ce.name]=Ce.value})}),se(m.data),Q(N)));case 7:case"end":return H.stop()}},L)}));return function(){return o.apply(this,arguments)}}();i.useEffect(function(){de(!0),T&&g&&q()},[V,T,g]),i.useEffect(function(){T||(X([l()().startOf("month"),l()().endOf("month")]),Q([]),se([]))},[T]);var Ee=function(){le.current&&(ne(!0),h()(le.current,{scale:3}).then(function(L){var C=new P.ZP("p","mm","a4"),m=C.getImageProperties(L),N=C.internal.pageSize.getWidth(),b=m.height*N/m.width,H=C.internal.pageSize.getHeight(),r=b,G=0;for(C.addImage(L,"PNG",0,G,N,b),console.log(b,"PDF"),r-=H;r>=0;)G=r-b,C.addPage(),C.addImage(L,"PNG",0,G,N,b),r-=H;ne(!1),C.save("Export-Log-".concat(l()(V[0]).format("YYYY-MM-DD"),"-").concat(l()(V[1]).format("YYYY-MM-DD"),"-").concat(l()().unix(),".pdf"))}))};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(f.Z,{width:928,title:(0,t.jsxs)(I.Z,{style:{fontWeight:"bold"},children:["Log Device "+Y," ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{style:{fontWeight:"normal",opacity:"0.8"},children:K})]}),open:g,onOk:function(){X([l()().startOf("month"),l()().endOf("month")]),Q([]),se([]),a()},onCancel:function(){X([l()().startOf("month"),l()().endOf("month")]),Q([]),se([]),E()},okText:"Save",cancelButtonProps:{style:{display:"none"}},okButtonProps:{style:{display:"none"}},children:[(0,t.jsxs)("div",{style:{textAlign:"left"},children:[(0,t.jsx)(D.Z.RangePicker,{className:"rounded-picker",value:V,allowClear:!0,onChange:function(L){return X(L)}}),(0,t.jsx)(_.Z,{wrap:!0,style:{float:"right"},children:(0,t.jsx)(A.CSVLink,{data:fe.map(function(o){var L={};return re.map(function(C){L[C]=o[C]}),L}),filename:"Log Devices "+Y+" "+l()().unix(),target:"_blank",children:(0,t.jsx)(w.Z,{icon:(0,t.jsx)(u.Z,{}),children:"Download CSV"})})})]}),(0,t.jsx)("div",{children:(0,t.jsx)(j.Z,{dataSource:fe,loading:J,style:{marginTop:"16px"},children:re.map(function(o){var L=Math.random();return(0,t.jsx)(j.Z.Column,{align:"left",title:S(o),dataIndex:o,render:function(m){return m=="YES"?(0,t.jsx)(W.Z,{color:"red",children:m}):m=="NO"?(0,t.jsx)(W.Z,{color:"green",children:m}):typeof m=="number"?(0,M.qi)(m):m}},L)})})})]})})}}}]);
