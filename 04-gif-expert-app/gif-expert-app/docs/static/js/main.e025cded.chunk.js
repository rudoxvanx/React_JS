(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=(a(15),a(1)),l=a(9),o=a(7),m=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})))};m.prototype={setCategories:a.n(o).a.func.isRequired};var s=a(4),p=a.n(s),d=a(8),f=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=Bw9yA2U4QGXcdYIXEUkpgJu9OIRJMr4z&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function g(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))}function E(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){setTimeout((function(){console.log(e),c({data:e,loading:!1})}),3e3)}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))))}var v=function(){var e=Object(n.useState)(["One Punch"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"GifExportApp"),r.a.createElement(m,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement(E,{key:e,category:e})}))))};i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e025cded.chunk.js.map