(this.webpackJsonpgiffy=this.webpackJsonpgiffy||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),i=n.n(a),s=n(17),l=(n(27),n(3)),o=(n(28),n(8)),u=(n(29),n(1));function d(e){var t=e.title,n=e.id,r=e.url;return Object(u.jsxs)(o.a,{href:"/gifdetail/".concat(n),className:"Gif",children:[Object(u.jsx)("h4",{children:t}),Object(u.jsxs)("p",{children:["Id:",Object(u.jsx)("small",{children:n})]}),Object(u.jsx)("img",{src:r,alt:t})]})}var j=n(11),b=n.n(j),h=n(14),p=localStorage.getItem("giphy_apikey")||"";function f(){return(f=Object(h.a)(b.a.mark((function e(){var t,n,r,c,a,i,s,l=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.length>0&&void 0!==l[0]?l[0]:{},n=t.keyword,r=void 0===n?"morty":n,c="https://api.giphy.com/v1/gifs/search?api_key=".concat(p,"&q=").concat(r,"&limit=5&offset=0&rating=g&lang=en"),e.prev=2,""===p){e.next=16;break}return e.next=6,fetch(c);case 6:return e.next=8,e.sent.json();case 8:if(a=e.sent,i=(a||{data:[]}).data,console.log("DATA:",i),void 0!==i){e.next=13;break}return e.abrupt("return",[]);case 13:return s=null===i||void 0===i?void 0:i.map((function(e){var t=e.images,n=e.title;return{id:e.id,title:n,url:t.downsized_medium.url}})),console.log(s),e.abrupt("return",s);case 16:return e.abrupt("return",[]);case 19:e.prev=19,e.t0=e.catch(2),console.log("ERROR:",e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})))).apply(this,arguments)}function g(e){var t=e.params.keyword,n=Object(r.useState)([]),c=Object(l.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(!1),o=Object(l.a)(s,2),j=o[0],b=o[1];return Object(r.useEffect)((function(){b(!0),function(){return f.apply(this,arguments)}({keyword:t}).then((function(e){b(!1),i(e)}))}),[t]),j?Object(u.jsx)("span",{children:"Cargando..."}):Object(u.jsx)("div",{children:a.map((function(e){var t=e.id,n=e.title,r=e.url;return Object(u.jsx)(d,{title:n,id:t,url:r},t)}))})}function O(){var e=Object(r.useState)(localStorage.getItem("giphy_apikey")||""),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Insert Apikey...",value:n,onChange:function(e){return c(e.target.value)}}),Object(u.jsxs)("button",{onClick:function(){return localStorage.setItem("giphy_apikey",n)},children:[""!==n?"Change":"Add"," Apikey"]})]})}var x=n(2);function v(e){var t=e.title,n=e.id,r=e.url,c=e.directUrl,a=e.rating;return Object(u.jsxs)("div",{children:["Detail gif",Object(u.jsxs)("div",{children:["Id: ",n]}),Object(u.jsxs)("div",{children:["Title: ",t]}),Object(u.jsxs)("div",{children:["DirectUrl: ",Object(u.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:c})]}),Object(u.jsxs)("div",{children:["Rating: ",a]}),Object(u.jsx)("img",{src:r,alt:t})]})}var m=localStorage.getItem("giphy_apikey")||"";function y(){return(y=Object(h.a)(b.a.mark((function e(){var t,n,r,c,a,i,s,l,o,u,d=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=d.length>0&&void 0!==d[0]?d[0]:"",n="https://api.giphy.com/v1/gifs/".concat(t,"?api_key=").concat(m),e.prev=2,""===m){e.next=16;break}return e.next=6,fetch(n);case 6:return e.next=8,e.sent.json();case 8:if(r=e.sent,c=(r||{data:[]}).data,console.log("DATA:",c),void 0!==c&&void 0!==c.title){e.next=13;break}return e.abrupt("return",null);case 13:return a=c.images,i=c.title,s=c.id,l=c.rating,o=c.embed_url,u=a.downsized_medium.url,e.abrupt("return",{id:s,title:i,url:u,directUrl:o,rating:l});case 16:return e.abrupt("return",null);case 19:e.prev=19,e.t0=e.catch(2),console.log("ERROR:",e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})))).apply(this,arguments)}function k(e){var t=e.params.id,n=Object(r.useState)({}),c=Object(l.a)(n,2),a=c[0],i=c[1];console.log("GifDetailPage:",t);var s=Object(r.useState)(!1),o=Object(l.a)(s,2),d=o[0],j=o[1];return Object(r.useEffect)((function(){j(!0),function(){return y.apply(this,arguments)}(t).then((function(e){j(!1),i(e),console.log(e)}))}),[t]),d?Object(u.jsx)("span",{children:"Cargando..."}):a?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Gif Detail"}),Object(u.jsx)(v,{title:a.title,id:a.id,url:a.url,directUrl:a.directUrl,rating:a.rating})]}):Object(u.jsx)("div",{children:"No data to display"})}var S=function(){var e=Object(r.useState)("Panda"),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(x.d)();return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("section",{className:"App-content",children:[Object(u.jsx)("h1",{children:"App"}),Object(u.jsx)("label",{children:"Search keyword"}),Object(u.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("button",{onClick:function(){return a.push("/gifsearch/".concat(n))},children:"Search"}),Object(u.jsx)(O,{}),Object(u.jsx)(o.a,{to:"/gifsearch/panda",children:"Gifs de pandas"}),Object(u.jsx)(o.a,{to:"/gifsearch/perro",children:"Gifs de perros"}),Object(u.jsx)(o.a,{to:"/gifsearch/gato",children:"Gifs de gatos"}),Object(u.jsx)(o.b,{component:g,path:"/gifsearch/:keyword"}),Object(u.jsx)(o.b,{component:k,path:"/gifdetail/:id"})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(S,{})})}),document.getElementById("root")),w()}},[[37,1,2]]]);
//# sourceMappingURL=main.1593682d.chunk.js.map