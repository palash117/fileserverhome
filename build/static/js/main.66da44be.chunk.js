(this.webpackJsonpfileserverhome=this.webpackJsonpfileserverhome||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(18),a=c.n(i),l=(c(50),c(51),c(10)),r=c(13),o=c(41),d=c(42),j=c(45),u=c(15),h="SET_FILES",b="SET_HEALTH",O={parentId:-1,files:[]},f={healthy:!0},p=Object(r.combineReducers)({files:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case h:return Object(u.a)(Object(u.a)({},e),{},{parentId:n.parentId,files:Object(j.a)(n.files)});default:return e}},healthCheck:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case b:return Object(u.a)(Object(u.a)({},e),{},{healthy:n});default:return e}}}),v=[d.a],x=Object(r.createStore)(p,{},Object(o.composeWithDevTools)(r.applyMiddleware.apply(void 0,v))),g=c(12),m=c(3),y=c(27),E=c(14),I=c.n(E),S=c(21),_=c(11),k=c.n(_),C=function(e,t,c){return function(){var c=Object(S.a)(I.a.mark((function c(n){var s,i,a;return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s="",t||!e?(s="/fs/getPaginated?pageNo=1&pageSize=100",e=0):s="fs/getFilesByParentId?parentID=".concat(e),c.prev=2,c.next=5,k.a.get(s);case 5:i=c.sent,console.log("resp ",i),a=i.data,console.log(),n({type:h,payload:{parentId:e,files:a}}),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(2),console.error(c.t0);case 15:case"end":return c.stop()}}),c,null,[[2,12]])})));return function(e){return c.apply(this,arguments)}}()},F=c(1),w="192.168.1.27",R={getFiles:C},T=Object(l.b)((function(e){return{}}),R)((function(e){var t=e.file,c=e.getFiles,n=e.openDeleteModal;if(!t)return"Empty File";console.log("getFiles is",c);var s=t.DisplayName,i=t.FileName,a=t.CreatedAt,l=t.Id,r=t.IsDir,o=new Date(a).toDateString();return Object(F.jsxs)("div",{class:"ui card",children:[Object(F.jsx)("div",{class:"content",children:Object(F.jsxs)("div",{className:"header",style:{"word-break":"break-all"},"data-tooltip":i,children:[r&&Object(F.jsx)("i",{class:"folder icon"}),s," "]})}),Object(F.jsx)("div",{class:"content",children:Object(F.jsx)("div",{class:"ui small feed",children:Object(F.jsx)("div",{class:"event",children:Object(F.jsx)("div",{class:"content",children:Object(F.jsxs)("div",{class:"summary",children:[Object(F.jsx)("i",{class:"calendar alternate outline icon"}),o]})})})})}),Object(F.jsxs)("div",{class:"extra content ",children:[r?Object(F.jsx)(g.b,{to:"/?id="+l,children:Object(F.jsx)("i",{class:"folder icon open big",onClick:function(){c(l)}})}):Object(F.jsx)("a",{href:"http://".concat(w,":9010/fs/downloadFileById?id=").concat(l),children:Object(F.jsx)("i",{class:"cloud download icon big"})}),Object(F.jsx)("div",{class:"right floated author",children:Object(F.jsx)("i",{class:"trash alternate outline icon big",onClick:function(){n(l)}})})]})]})})),D=c(43),N=c.n(D),P={getFiles:C},L=Object(l.b)((function(e){return{fileItems:e.files.files}}),P)((function(e){var t=N.a.parse(e.location.search).id;console.log("token",t);var c=e.getFiles,s=e.fileItems,i=Object(n.useState)(!1),a=Object(y.a)(i,2),l=a[0],r=a[1],o=Object(n.useState)(0),d=Object(y.a)(o,2),j=d[0],u=d[1];Object(n.useEffect)((function(){t?c(t):c(null,!0)}),[t]);var h=function(e){console.log("show delete modal"),u(e),r(!0)};return Object(F.jsxs)("div",{className:"ui three column grid",children:[s&&s.length>0?s.map((function(e){return Object(F.jsx)("div",{className:"column",children:Object(F.jsx)(T,{file:e,openDeleteModal:h},e.Id)},e.Id)})):"No files found",l&&Object(F.jsxs)("div",{class:"ui basic modal",children:[Object(F.jsx)("div",{class:"ui icon header",children:Object(F.jsx)("i",{class:"trash alternate outline icon"})}),Object(F.jsx)("div",{class:"content",children:Object(F.jsx)("p",{children:"Delete file?"})}),Object(F.jsxs)("div",{class:"actions",children:[Object(F.jsxs)("div",{class:"ui red basic cancel inverted button",children:[Object(F.jsx)("i",{class:"remove icon",onClick:function(){r(!1)}}),"No"]}),Object(F.jsxs)("div",{class:"ui green ok inverted button",children:[Object(F.jsx)("i",{class:"checkmark icon",onClick:function(){console.log("delete file ",j),r(!1)}}),"Yes"]})]})]})]})})),A=function(e,t,c){return function(){var e=Object(S.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/fs/health",e.prev=1,e.next=4,k.a.get("/fs/health");case 4:e.sent,t({type:b,payload:!0}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("err is ",e.t0),t({type:b,payload:!1});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},H={checkHealth:A},B=Object(l.b)((function(e){return console.log("state: ",e),{healthy:e.healthCheck.healthy}}),H)((function(e){var t=e.healthy;return console.log("healthy is ",t),Object(F.jsxs)("div",{className:"ui inverted menu",children:[Object(F.jsx)(g.b,{to:"/",children:Object(F.jsxs)("div",{className:"header item",children:[Object(F.jsx)("i",{className:"cloud upload icon"}),"FILE SERVER"]})}),Object(F.jsx)("div",{class:"right menu",children:Object(F.jsx)("div",{class:"item",children:t?Object(F.jsx)("i",{class:"green wifi icon big"}):Object(F.jsx)("i",{class:"red exclamation circle icon big"})})})]})})),K=c(44),W=c.n(K),M=function(){return Object(F.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:Object(F.jsx)(W.a,{value:"http://192.168.1.22"})})};var V=function(){return Object(F.jsx)(l.a,{store:x,children:Object(F.jsx)("div",{className:"ui container",children:Object(F.jsxs)(g.a,{children:[Object(F.jsx)(B,{}),Object(F.jsxs)(m.c,{children:[Object(F.jsx)(m.a,{path:"/cast",component:M}),Object(F.jsx)(m.a,{path:"/:id",component:L}),Object(F.jsx)(m.a,{path:"/",component:L})]})]})})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))},J=c(100),z=function(){var e=Object(J.a)(),t="HEALTH_CHECK_WORKER_ID";localStorage.setItem(t,e);setInterval((function(){localStorage.getItem(t)==e&&x.dispatch(A())}),1e3)},Y="http://192.168.1.27:9010";console.log("base url is ",Y),console.log("process env is ",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FILESERVER_IP:"192.168.1.27",REACT_APP_FILESERVER_PORT:"9010"})),k.a.defaults.baseURL=Y,z(),a.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(V,{})}),document.getElementById("root")),U()}},[[98,1,2]]]);
//# sourceMappingURL=main.66da44be.chunk.js.map