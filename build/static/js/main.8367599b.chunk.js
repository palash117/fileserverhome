(this.webpackJsonpfileserverhome=this.webpackJsonpfileserverhome||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(18),i=c.n(a),l=(c(50),c(51),c(10)),r=c(13),o=c(41),d=c(42),j=c(45),u=c(15),h="SET_FILES",b="SET_HEALTH",f={parentId:-1,files:[]},O={healthy:!0},p=Object(r.combineReducers)({files:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case h:return Object(u.a)(Object(u.a)({},e),{},{parentId:n.parentId,files:Object(j.a)(n.files)});default:return e}},healthCheck:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case b:return Object(u.a)(Object(u.a)({},e),{},{healthy:n});default:return e}}}),v=[d.a],x=Object(r.createStore)(p,{},Object(o.composeWithDevTools)(r.applyMiddleware.apply(void 0,v))),g=c(12),m=c(3),y=c(27),I=c(14),k=c.n(I),w=c(21),F=c(11),C=c.n(F),E=function(e,t,c){return function(){var c=Object(w.a)(k.a.mark((function c(n){var s,a,i;return k.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s="",t||!e?(s="/fs/getPaginated?pageNo=1&pageSize=100",e=0):s="fs/getFilesByParentId?parentID=".concat(e),c.prev=2,c.next=5,C.a.get(s);case 5:a=c.sent,console.log("resp ",a),i=a.data,console.log(),n({type:h,payload:{parentId:e,files:i}}),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(2),console.error(c.t0);case 15:case"end":return c.stop()}}),c,null,[[2,12]])})));return function(e){return c.apply(this,arguments)}}()},S=c(1),D="192.168.1.27:9010",N={getFiles:E},L=Object(l.b)((function(e){return{}}),N)((function(e){var t=e.file,c=e.getFiles,n=e.openDeleteModal;if(!t)return"Empty File";console.log("getFiles is",c);var s=t.DisplayName,a=t.FileName,i=t.CreatedAt,l=t.Id,r=t.IsDir,o=new Date(i).toDateString();return Object(S.jsxs)("div",{class:"ui card",children:[Object(S.jsx)("div",{class:"content",children:Object(S.jsxs)("div",{className:"header",style:{"word-break":"break-all"},"data-tooltip":a,children:[r&&Object(S.jsx)("i",{class:"folder icon"}),s," "]})}),Object(S.jsx)("div",{class:"content",children:Object(S.jsx)("div",{class:"ui small feed",children:Object(S.jsx)("div",{class:"event",children:Object(S.jsx)("div",{class:"content",children:Object(S.jsxs)("div",{class:"summary",children:[Object(S.jsx)("i",{class:"calendar alternate outline icon"}),o]})})})})}),Object(S.jsxs)("div",{class:"extra content ",children:[r?Object(S.jsx)(g.b,{to:"/?id="+l,children:Object(S.jsx)("i",{class:"folder icon open big",onClick:function(){c(l)}})}):Object(S.jsx)("a",{href:"http://".concat(D,":9010/fs/downloadFileById?id=").concat(l),children:Object(S.jsx)("i",{class:"cloud download icon big"})}),Object(S.jsx)("div",{class:"right floated author",children:Object(S.jsx)("i",{class:"trash alternate outline icon big",onClick:function(){n(l)}})})]})]})})),T=c(43),H=c.n(T),R={getFiles:E},_=Object(l.b)((function(e){return{fileItems:e.files.files}}),R)((function(e){var t=H.a.parse(e.location.search).id;console.log("token",t);var c=e.getFiles,s=e.fileItems,a=Object(n.useState)(!1),i=Object(y.a)(a,2),l=i[0],r=i[1],o=Object(n.useState)(0),d=Object(y.a)(o,2),j=d[0],u=d[1];Object(n.useEffect)((function(){t?c(t):c(null,!0)}),[t]);var h=function(e){console.log("show delete modal"),u(e),r(!0)};return Object(S.jsxs)("div",{className:"ui three column grid",children:[s&&s.length>0?s.map((function(e){return Object(S.jsx)("div",{className:"column",children:Object(S.jsx)(L,{file:e,openDeleteModal:h},e.Id)},e.Id)})):"No files found",l&&Object(S.jsxs)("div",{class:"ui basic modal",children:[Object(S.jsx)("div",{class:"ui icon header",children:Object(S.jsx)("i",{class:"trash alternate outline icon"})}),Object(S.jsx)("div",{class:"content",children:Object(S.jsx)("p",{children:"Delete file?"})}),Object(S.jsxs)("div",{class:"actions",children:[Object(S.jsxs)("div",{class:"ui red basic cancel inverted button",children:[Object(S.jsx)("i",{class:"remove icon",onClick:function(){r(!1)}}),"No"]}),Object(S.jsxs)("div",{class:"ui green ok inverted button",children:[Object(S.jsx)("i",{class:"checkmark icon",onClick:function(){console.log("delete file ",j),r(!1)}}),"Yes"]})]})]})]})})),B=function(e,t,c){return function(){var e=Object(w.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/fs/health",e.prev=1,e.next=4,C.a.get("/fs/health");case 4:e.sent,t({type:b,payload:!0}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("err is ",e.t0),t({type:b,payload:!1});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},M={checkHealth:B},P=Object(l.b)((function(e){return console.log("state: ",e),{healthy:e.healthCheck.healthy}}),M)((function(e){var t=e.healthy;return console.log("healthy is ",t),Object(S.jsxs)("div",{className:"ui inverted menu",children:[Object(S.jsx)(g.b,{to:"/",children:Object(S.jsxs)("div",{className:"header item",children:[Object(S.jsx)("i",{className:"cloud upload icon"}),"FILE SERVER"]})}),Object(S.jsx)("div",{class:"right menu",children:Object(S.jsx)("div",{class:"item",children:t?Object(S.jsx)("i",{class:"green wifi icon big"}):Object(S.jsx)("i",{class:"red exclamation circle icon big"})})})]})})),A=c(44),J=c.n(A),K=function(){return Object(S.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:Object(S.jsx)(J.a,{value:"http://".concat("192.168.1.27:9010")})})};var W=function(){return Object(S.jsx)(l.a,{store:x,children:Object(S.jsx)("div",{className:"ui container",children:Object(S.jsxs)(g.a,{children:[Object(S.jsx)(P,{}),Object(S.jsxs)(m.c,{children:[Object(S.jsx)(m.a,{path:"/cast",component:K}),Object(S.jsx)(m.a,{path:"/:id",component:_}),Object(S.jsx)(m.a,{path:"/",component:_})]})]})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))},U=c(100),V=function(){var e=Object(U.a)(),t="HEALTH_CHECK_WORKER_ID";localStorage.setItem(t,e);setInterval((function(){localStorage.getItem(t)==e&&x.dispatch(B())}),1e3)};C.a.defaults.baseURL="http://192.168.1.27:9010",console.log("base url is ","192.168.1.27:9010"),V(),i.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(W,{})}),document.getElementById("root")),z()}},[[98,1,2]]]);
//# sourceMappingURL=main.8367599b.chunk.js.map