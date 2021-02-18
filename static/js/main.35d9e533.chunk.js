(this["webpackJsonpbitcoin-chart"]=this["webpackJsonpbitcoin-chart"]||[]).push([[0],{196:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,s,d,b,l,u,f,p,h,j=t(0),O=t.n(j),g=t(21),m=t.n(g),x=t(7),y=t(8),v=t(64),D=t(37),w=t.n(D),k=t(65),C=t(14),S="GET_CHART_DATA",L="LOADING_CHART_DATA",T=function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];return function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];var a={type:n};return t.forEach((function(n,e){a[t[e]]=i[e]})),a}},_=T(S,"chartData"),A=T(L,"isChartDataLoading"),P=t(66),E=200,H=[{id:1,timePeriod:"1w",numberOfDays:7},{id:2,timePeriod:"2w",numberOfDays:14},{id:3,timePeriod:"1m",numberOfDays:30},{id:4,timePeriod:"2m",numberOfDays:60},{id:5,timePeriod:"3m",numberOfDays:90},{id:6,timePeriod:"6m",numberOfDays:180},{id:7,timePeriod:"1y",numberOfDays:365},{id:8,timePeriod:"2y",numberOfDays:730}],R=P.create({baseURL:"https://api.coindesk.com/v1/"}),q=function(n,e){return R.get("bpi/historical/close.json?start=".concat(n,"&end=").concat(e))},z={chartData:[],isChartDataLoading:!1,startDate:1},B=function(n,e){return function(){var t=Object(k.a)(w.a.mark((function t(i){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(A(!0)),t.next=4,q(n,e);case 4:(r=t.sent).status===E&&(i(_(r.data.bpi)),i(A(!1))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}()},I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return Object(C.a)(Object(C.a)({},n),{},{chartData:e.chartData});case L:return Object(C.a)(Object(C.a)({},n),{},{isChartDataLoading:e.isChartDataLoading});default:return n}},J=Object(y.c)({app:I}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d,N=Object(y.e)(J,M(Object(y.a)(v.a))),G=t(23),U=t(67),W=t.n(U),X=t(1),V=function(){var n=O.a.useState((function(){return!1})),e=Object(G.a)(n,2),t=e[0],i=e[1];return console.log(t),Object(X.jsx)(W.a,{onChange:i,checked:t,size:80,speed:1.5})},F=t(2),K=t(3),Q=K.b.div(i||(i=Object(F.a)(["\n  display: flex;\n"]))),Y=K.b.button(r||(r=Object(F.a)(["\n  display: flex;\n\n  margin: 0 2px;\n  padding: 8px 25px;\n\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: 500;\n  color: ",";\n\n  background-color: ",";\n\n  border-radius: 25px;\n\n  transition: 0.3s ease;\n\n  outline: none;\n  border: none;\n\n  &:hover {\n    color: #ffffff;\n\n    cursor: pointer;\n\n    background-color: #69c7ff;\n\n    transition: 0.3s ease;\n  }\n"])),(function(n){return n.activeTime?"#ffffff":"#000000"}),(function(n){return n.activeTime?"#69c7ff":"transparent"})),Z=function(){return(new Date).toISOString().slice(0,10)},$=function(n){var e=new Date,t=n;return e.setDate(e.getDate()-t),e.toISOString().slice(0,10)},nn=function(){var n=Object(x.b)(),e=O.a.useState(1),t=Object(G.a)(e,2),i=t[0],r=t[1];return Object(X.jsx)(Q,{children:H.map((function(e){var t=e.id,a=e.timePeriod,o=e.numberOfDays;return Object(X.jsx)(Y,{onClick:function(){return function(e,t){r(e),n(B($(t),Z().toString()))}(t,o)},activeTime:i===t,children:a},t)}))})},en=K.b.header(a||(a=Object(F.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 1200px;\n\n  margin: 0 auto;\n  padding: 10px;\n"]))),tn=K.b.section(o||(o=Object(F.a)(["\n  display: flex;\n"]))),rn=K.b.section(c||(c=Object(F.a)(["\n  display: flex;\n"]))),an=function(){return Object(X.jsxs)(en,{children:[Object(X.jsx)(tn,{children:Object(X.jsx)(V,{})}),Object(X.jsx)(rn,{children:Object(X.jsx)(nn,{})})]})},on=t(72),cn=K.b.div(s||(s=Object(F.a)(["\n  display: flex;\n\n  width: 1200px;\n\n  margin: 0 auto;\n  padding: 10px;\n"]))),sn=function(){var n=Object(x.c)((function(n){return n.app})).chartData,e={labels:Object.keys(n).map((function(n){return new Date(n).toLocaleDateString()})),datasets:[{label:"",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"#69c7ff",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#69c7ff",pointBackgroundColor:"#84d2ff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#69c7ff",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:10,data:Object.values(n)}]};return Object(X.jsx)(cn,{children:Object(X.jsx)(on.Line,{data:e,options:{legend:{display:!1}}})})},dn=Object(K.c)(d||(d=Object(F.a)(["\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n"]))),bn=K.b.div(b||(b=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n\n  width: 1200px;\n\n  margin: 0 auto;\n  padding: 10px;\n"]))),ln=K.b.div(l||(l=Object(F.a)(["\n  display: inline-block;\n  position: relative;\n\n  width: 80px;\n  height: 80px;\n\n  margin-top: 25px;\n"]))),un=K.b.div(u||(u=Object(F.a)(["\n  position: absolute;\n  border: 4px solid #69c7ff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: "," 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n"])),dn),fn=K.b.div(f||(f=Object(F.a)(["\n  position: absolute;\n  border: 4px solid #69c7ff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: "," 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  animation-delay: -0.5s;\n"])),dn),pn=function(){return Object(X.jsx)(bn,{children:Object(X.jsxs)(ln,{children:[Object(X.jsx)(un,{}),Object(X.jsx)(fn,{})]})})},hn=K.b.div(p||(p=Object(F.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  font-family: "Lato", "Roboto", "Arial", sans-serif;\n']))),jn=function(){var n=Object(x.c)((function(n){return n.app})).isChartDataLoading;return Object(X.jsxs)(hn,{children:[Object(X.jsx)(an,{}),n?Object(X.jsx)(pn,{}):Object(X.jsx)(sn,{})]})},On=Object(K.a)(h||(h=Object(F.a)(["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  ol,\n  ul {\n    list-style: none;\n  }\n\n  blockquote,\n  q {\n    quotes: none;\n  }\n\n  blockquote {\n\n    &:before,\n    &:after {\n      content: '';\n      content: none;\n    }\n  }\n\n  q {\n\n    &:before,\n    &:after {\n      content: '';\n      content: none;\n    }\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  html {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n\n    user-select: none;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n  }\n"])));N.dispatch(B($(7),Z().toString())),m.a.render(Object(X.jsxs)(O.a.StrictMode,{children:[Object(X.jsx)(On,{}),Object(X.jsx)(x.a,{store:N,children:Object(X.jsx)(jn,{})})]}),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.35d9e533.chunk.js.map