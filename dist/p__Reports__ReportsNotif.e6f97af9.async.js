"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5583],{1166:function(Q,m,e){e.r(m);var R=e(97983),D=e.n(R),j=e(40794),g=e.n(j),C=e(12741),E=e.n(C),T=e(58638),p=e(38402),M=e(23349),A=e(27049),L=e(59652),U=e(71230),x=e(15746),c=e(26713),B=e(21802),I=e(41232),K=e(71577),l=e(67294),W=e(64593),y=e(30381),o=e.n(y),S=e(69408),Y=e(83461),a=e(85893),Z=M.Z.Column;o().locale("en");var $=function(){var z=l.useState([]),f=E()(z,2),i=f[0],F=f[1],N=l.useState(!1),P=E()(N,2),V=P[0],O=P[1],b=l.useState([o()().day(o()().day()-3),o()()]),v=E()(b,2),r=v[0],G=v[1],H=function(){var _=g()(D()().mark(function n(){var s;return D()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.next=3,(0,S.Z)({params:{start_date:r[0].format("YYYY-MM-DD"),end_date:r[1].format("YYYY-MM-DD")}});case 3:s=t.sent,O(!1),s.error||F(s.data);case 6:case"end":return t.stop()}},n)}));return function(){return _.apply(this,arguments)}}();l.useEffect(function(){return H(),function(){}},[r]);var J=function(){var n=[],s=[];return i.length>0&&(i[0].length>0&&i[0].map(function(d){s.push({label:d.name,key:d.name})}),i.map(function(d){var t={};d.map(function(h){t[h.name]=h.value}),n.push(t)})),{header:s,data:n}},u=J();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(W.q,{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("link",{rel:"icon",href:"https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png",type:"image/x-icon"})]}),(0,a.jsxs)(p._z,{childrenContentStyle:{minHeight:"70vh"},title:"Transaction Usage",content:"Usage Totalizer of device ",children:[(0,a.jsx)(A.Z,{}),(0,a.jsx)(L.Z,{style:{borderRadius:8,marginBottom:20},bodyStyle:{background:" rgba(230, 247, 255, 0.5)"},children:(0,a.jsx)(U.Z,{gutter:[16,16],align:"bottom",children:(0,a.jsxs)(x.Z,{span:24,style:{textAlign:"left"},children:[(0,a.jsx)(c.Z,{size:"large",wrap:!0,children:(0,a.jsxs)(c.Z,{direction:"vertical",children:[(0,a.jsx)(B.Z,{children:"Date"}),(0,a.jsx)(I.Z.RangePicker,{allowClear:!1,onChange:function(n){return G(n)},value:r})]})}),(0,a.jsx)(Y.CSVLink,{data:u.data,headers:u.header,filename:"Reports_Notification_".concat(r[0].format("YYYY-MM"),"-").concat(r[1].format("YYYY-MM"),"_").concat(o()().unix(),".csv"),children:(0,a.jsx)(K.Z,{style:{float:"right",marginTop:"24px"},type:"primary",icon:(0,a.jsx)(T.Z,{}),children:"Export"})})]})})}),(0,a.jsx)(M.Z,{dataSource:u.data,loading:V,style:{borderRadius:8,border:"1px solid #f0f0f0"},size:"small",bordered:!0,scroll:{x:!0},children:u.header.map(function(_){return(0,a.jsx)(Z,{title:_.label,dataIndex:_.key},_.key)})})]})]})};m.default=$}}]);
