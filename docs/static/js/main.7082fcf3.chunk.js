(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),i=n(2),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],u=r[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(s.a)(e))})),u(""))},children:Object(o.jsx)("input",{type:"text",placeholder:"Enter a category and press ENTER",value:a,onChange:function(e){u(e.target.value)}})})},j=n(10);function d(e){var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})}var l=n(6),p=n.n(l),f=n(8),b=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,c,r,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"oPf76Uc47Nw1mXeWeSb31WvHf207InNz","https://api.giphy.com/v1/gifs/search",n="".concat("https://api.giphy.com/v1/gifs/search","?api_key=").concat("oPf76Uc47Nw1mXeWeSb31WvHf207InNz","&q=").concat(encodeURI(t),"&limit=10"),e.next=5,fetch(n);case 5:return c=e.sent,console.log(n),e.next=9,c.json();case 9:return r=e.sent,a=r.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){a({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,a=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:t}),a&&Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(o.jsx)(d,Object(j.a)({},e),e.id)}))})]})},O=function(){var e=Object(c.useState)(["Dragon Ball"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(h,{category:e},e)}))})]})};n(17);a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7082fcf3.chunk.js.map