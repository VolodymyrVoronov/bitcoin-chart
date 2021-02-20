(this["webpackJsonpbitcoin-chart"]=this["webpackJsonpbitcoin-chart"]||[]).push([[0],{198:function(n,e,t){"use strict";t.r(e);var i,r,a,c,o,s,d,b,u,l,f,O,p,j,g,h,x,D,m,y,M,k,v,w,T,C,A,L,E,I,N,S=t(0),z=t.n(S),P=t(21),R=t.n(P),_=t(4),H=t(9),B=t(64),G=t(36),Y=t.n(G),Q=t(65),q=t(8),U="GET_CHART_DATA",W="LOADING_CHART_DATA",Z="IS_ERROR_OCCURED",J="TOGGLE_DARK_MODE",V=function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];return function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];var a={type:n};return t.forEach((function(n,e){a[t[e]]=i[e]})),a}},F=V(U,"chartData"),X=V(W,"isChartDataLoading"),K=V(Z,"isErrorOccured"),$=V(J,"isDarkModeOn"),nn=t(66),en=200,tn=[{id:1,timePeriod:"1W",numberOfDays:7},{id:2,timePeriod:"2W",numberOfDays:14},{id:3,timePeriod:"1M",numberOfDays:30},{id:4,timePeriod:"2M",numberOfDays:60},{id:5,timePeriod:"3M",numberOfDays:90},{id:6,timePeriod:"6M",numberOfDays:180},{id:7,timePeriod:"1Y",numberOfDays:365},{id:8,timePeriod:"2Y",numberOfDays:730},{id:9,timePeriod:"5Y",numberOfDays:1825}],rn=nn.create({baseURL:"https://api.coindesk.com/v1/"}),an=function(n,e){return rn.get("bpi/historical/close.json?start=".concat(n,"&end=").concat(e))},cn={chartData:[],isChartDataLoading:!1,startDate:1,isErrorOccured:!1,isDarkModeOn:!1},on=function(n,e){return function(){var t=Object(Q.a)(Y.a.mark((function t(i){var r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(X(!0)),t.next=4,an(n,e);case 4:(r=t.sent).status===en&&(i(F(r.data.bpi)),i(X(!1))),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),i(K(!0)),i(X(!1)),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}()},sn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U:return Object(q.a)(Object(q.a)({},n),{},{chartData:e.chartData});case W:return Object(q.a)(Object(q.a)({},n),{},{isChartDataLoading:e.isChartDataLoading});case Z:return Object(q.a)(Object(q.a)({},n),{},{isErrorOccured:e.isErrorOccured});case J:return Object(q.a)(Object(q.a)({},n),{},{isDarkModeOn:!e.isDarkModeOn});default:return n}},dn=Object(H.c)({app:sn}),bn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,un=Object(H.e)(dn,bn(Object(H.a)(B.a))),ln=t(37),fn=t(67),On=t.n(fn),pn=t(1),jn=function(){var n=Object(_.b)(),e=Object(_.c)((function(n){return n.app})).isDarkModeOn;return Object(pn.jsx)(On.a,{onChange:function(){n($(e))},checked:e,size:80,speed:1.5})},gn=t(73),hn=t(2),xn=t(3),Dn=xn.c.div(i||(i=Object(hn.a)(["\n  display: flex;\n"]))),mn=xn.c.button(r||(r=Object(hn.a)(["\n  display: flex;\n\n  margin: 0 2px;\n  padding: 8px 25px;\n\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: 500;\n\n  ","\n\n  ","    \n\n  border-radius: 25px;\n\n  transition: 0.3s ease;\n\n  outline: none;\n  border: none;\n\n  ","\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n"])),(function(n){return n.isDarkModeOn?Object(xn.b)(a||(a=Object(hn.a)(["\n          color: ",";\n        "])),(function(n){return n.activeTime?"#8c97ac":"#8c96ac"})):Object(xn.b)(c||(c=Object(hn.a)(["\n          color: ",";\n        "])),(function(n){return n.activeTime?"#ffffff":"#000000"}))}),(function(n){return n.isDarkModeOn?Object(xn.b)(o||(o=Object(hn.a)(["\n          background-color: ",";\n        "])),(function(n){return n.activeTime?"#0e1341":"transparent"})):Object(xn.b)(s||(s=Object(hn.a)(["\n          background-color: ",";\n        "])),(function(n){return n.activeTime?"#69c7ff":"transparent"}))}),(function(n){return n.isDarkModeOn?Object(xn.b)(d||(d=Object(hn.a)(["\n          ","\n        "])),(function(n){return n.isDisabled?null:Object(xn.b)(b||(b=Object(hn.a)(["\n                  &:hover {\n                    color: #8c97ac;\n\n                    cursor: pointer;\n\n                    background-color: #202449;\n\n                    transition: 0.3s ease;\n                  }\n                "])))})):Object(xn.b)(u||(u=Object(hn.a)(["\n          ","\n        "])),(function(n){return n.isDisabled?null:Object(xn.b)(l||(l=Object(hn.a)(["\n                  &:hover {\n                    color: #ffffff;\n\n                    cursor: pointer;\n\n                    background-color: #69c7ff;\n\n                    transition: 0.3s ease;\n                  }\n                "])))}))})),yn=function(){return(new Date).toISOString().slice(0,10)},Mn=function(n){var e=new Date,t=n;return e.setDate(e.getDate()-t),e.toISOString().slice(0,10)},kn=function(){var n=Object(_.b)(),e=Object(_.c)((function(n){return n.app})),t=e.isChartDataLoading,i=e.isDarkModeOn,r=z.a.useState(1),a=Object(gn.a)(r,2),c=a[0],o=a[1];return Object(pn.jsx)(Dn,{children:tn.map((function(e){var r=e.id,a=e.timePeriod,s=e.numberOfDays;return Object(pn.jsx)(mn,{onClick:function(){return function(e,t){o(e),n(on(Mn(t),yn().toString()))}(r,s)},activeTime:c===r,type:"button",disabled:t,isDisabled:t,isDarkModeOn:i,children:a},r)}))})},vn=xn.c.header(f||(f=Object(hn.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 1200px;\n\n  @media (min-width: 1440px) {\n    width: 1440px;\n  }\n\n  margin: 0 auto;\n  padding: 10px;\n"]))),wn=xn.c.section(O||(O=Object(hn.a)(["\n  display: flex;\n"]))),Tn=xn.c.section(p||(p=Object(hn.a)(["\n  display: flex;\n"]))),Cn=function(){return Object(pn.jsxs)(vn,{children:[Object(pn.jsx)(wn,{children:ln.MobileView&&ln.isMobile?null:Object(pn.jsx)(jn,{})}),Object(pn.jsx)(Tn,{children:Object(pn.jsx)(kn,{})})]})},An=t(72),Ln=xn.c.div(j||(j=Object(hn.a)(["\n  display: flex;\n\n  width: 1200px;\n\n  @media (min-width: 1440px) {\n    width: 1440px;\n  }\n\n  margin: 0 auto;\n  padding: 10px;\n"]))),En=function(){var n=Object(_.c)((function(n){return n.app})),e=n.chartData,t=n.isDarkModeOn,i={labels:Object.keys(e).map((function(n){return new Date(n).toLocaleDateString()})),datasets:[{label:"",fill:!0,lineTension:.1,backgroundColor:"".concat(t?"rgba(75,192,192,0.2)":"rgba(75,192,192,0.4)"),borderColor:"".concat(t?"#3181af":"#69c7ff"),borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"".concat(t?"#3181af":"#69c7ff"),pointBackgroundColor:"".concat(t?"#5d94b4":"#84d2ff"),pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"".concat(t?"#3181af":"#69c7ff"),pointHoverBorderColor:"".concat(t?"rgba(220,220,220,0.5)":"rgba(220,220,220,1)"),pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:10,data:Object.values(e)}]},r={legend:{display:!1},tooltips:{titleFontColor:"".concat(t?"#8c97ac":"#ffffff"),bodyFontColor:"".concat(t?"#8c97ac":"#ffffff")}};return Object(pn.jsx)(Ln,{children:Object(pn.jsx)(An.Line,{data:i,options:r})})},In=Object(xn.d)(g||(g=Object(hn.a)(["\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n"]))),Nn=xn.c.div(h||(h=Object(hn.a)(["\n  display: flex;\n  justify-content: center;\n\n  width: 1200px;\n\n  @media (min-width: 1440px) {\n    width: 1440px;\n  }\n\n  margin: 0 auto;\n  padding: 10px;\n"]))),Sn=xn.c.div(x||(x=Object(hn.a)(["\n  display: inline-block;\n  position: relative;\n\n  width: 80px;\n  height: 80px;\n\n  margin-top: 25px;\n"]))),zn=xn.c.div(D||(D=Object(hn.a)(["\n  position: absolute;\n  border: 4px solid ",";\n  opacity: 1;\n  border-radius: 50%;\n  animation: "," 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n"])),(function(n){return n.isDarkModeOn?"#304747":"#69c7ff"}),In),Pn=xn.c.div(m||(m=Object(hn.a)(["\n  position: absolute;\n  border: 4px solid ",";\n  opacity: 1;\n  border-radius: 50%;\n  animation: "," 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  animation-delay: -0.5s;\n"])),(function(n){return n.isDarkModeOn?"#304747":"#69c7ff"}),In),Rn=function(){var n=Object(_.c)((function(n){return n.app})).isDarkModeOn;return Object(pn.jsx)(Nn,{children:Object(pn.jsxs)(Sn,{children:[Object(pn.jsx)(zn,{isDarkModeOn:n}),Object(pn.jsx)(Pn,{isDarkModeOn:n})]})})},_n=xn.c.div(y||(y=Object(hn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  width: 1200px;\n  height: 100vh;\n\n  margin: 0 auto;\n  padding: 10px;\n"]))),Hn=xn.c.h1(M||(M=Object(hn.a)(["\n  display: flex;\n\n  font-size: 36px;\n  line-height: 40px;\n  font-weight: 700;\n\n  ","\n"])),(function(n){return n.isDarkModeOn?Object(xn.b)(k||(k=Object(hn.a)(["\n          color: #8c97ac;\n        "]))):Object(xn.b)(v||(v=Object(hn.a)(["\n          color: #000000;\n        "])))})),Bn=xn.c.span(w||(w=Object(hn.a)(['\n  display: flex;\n\n  width: 150px;\n  height: 150px;\n\n  margin: 25px 0;\n\n  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0OHY0OEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIyIDMwaDR2NGgtNHptMC0xNmg0djEyaC00em0xLjk5LTEwQzEyLjk0IDQgNCAxMi45NSA0IDI0czguOTQgMjAgMTkuOTkgMjBTNDQgMzUuMDUgNDQgMjQgMzUuMDQgNCAyMy45OSA0ek0yNCA0MGMtOC44NCAwLTE2LTcuMTYtMTYtMTZTMTUuMTYgOCAyNCA4czE2IDcuMTYgMTYgMTYtNy4xNiAxNi0xNiAxNnoiLz48L3N2Zz4=");\n  background-size: contain;\n\n  ',"\n"])),(function(n){return n.isDarkModeOn?Object(xn.b)(T||(T=Object(hn.a)(["\n          background-color: #8c97ac;\n          border-radius: 50%;\n        "]))):Object(xn.b)(C||(C=Object(hn.a)(["\n          background-color: none;\n          border-radius: none;\n        "])))})),Gn=xn.c.p(A||(A=Object(hn.a)(["\n  display: flex;\n\n  font-size: 26px;\n  line-height: 30px;\n  font-weight: 700;\n\n  ","\n\n  transition: 3s ease;\n"])),(function(n){return n.isDarkModeOn?Object(xn.b)(L||(L=Object(hn.a)(["\n          color: #8c97ac;\n        "]))):Object(xn.b)(E||(E=Object(hn.a)(["\n          color: #000000;\n        "])))})),Yn=function(){var n=Object(_.c)((function(n){return n.app})).isDarkModeOn;return Object(pn.jsxs)(_n,{children:[Object(pn.jsx)(Hn,{isDarkModeOn:n,children:"Something has gone wrong!"}),Object(pn.jsx)(Bn,{isDarkModeOn:n}),Object(pn.jsx)(Gn,{isDarkModeOn:n,children:"Please, refresh the site and try again."})]})},Qn=xn.c.div(I||(I=Object(hn.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  height: 100vh;\n\n  font-family: "Lato", "Roboto", "Arial", sans-serif;\n\n  background-color: ',";\n  transition: 3s ease;\n"])),(function(n){return n.isDarkModeOn?"#292929":"#ffffff"})),qn=function(){var n=Object(_.c)((function(n){return n.app})),e=n.isChartDataLoading,t=n.isErrorOccured,i=n.isDarkModeOn;return Object(pn.jsxs)(Qn,{isDarkModeOn:i,children:[t?null:Object(pn.jsx)(Cn,{}),t?Object(pn.jsx)(Yn,{}):Object(pn.jsx)(pn.Fragment,{children:e?Object(pn.jsx)(Rn,{}):Object(pn.jsx)(En,{})})]})},Un=Object(xn.a)(N||(N=Object(hn.a)(["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  ol,\n  ul {\n    list-style: none;\n  }\n\n  blockquote,\n  q {\n    quotes: none;\n  }\n\n  blockquote {\n\n    &:before,\n    &:after {\n      content: '';\n      content: none;\n    }\n  }\n\n  q {\n\n    &:before,\n    &:after {\n      content: '';\n      content: none;\n    }\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  html {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n\n    user-select: none;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n  }\n"])));un.dispatch(on(Mn(7),yn().toString())),R.a.render(Object(pn.jsxs)(z.a.StrictMode,{children:[Object(pn.jsx)(Un,{}),Object(pn.jsx)(_.a,{store:un,children:Object(pn.jsx)(qn,{})})]}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.150af3d0.chunk.js.map