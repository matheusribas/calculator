(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{75:function(e,c,n){},80:function(e,c,n){},89:function(e,c){},92:function(e,c,n){},93:function(e,c,n){},94:function(e,c,n){"use strict";n.r(c);var t=n(8),r=n(43),i=n.n(r),o=n(33),s=n(16),a=n(30),l=n(2),d=n(96),b=n(52),j=n(69),u=(n(75),n(10)),h=["children","col","color","bg"];function O(e){var c=e.children,n=e.col,t=void 0===n?1:n,r=e.color,i=e.bg,o=Object(j.a)(e,h);return Object(u.jsx)("button",Object(b.a)(Object(b.a)({className:"button-calculator text-".concat(r," bg-").concat(i," col-").concat(t)},o),{},{children:c}))}var f=n(40),x=n(53),k=n.n(x),y=0;n(80);function g(){var e,c=Object(f.b)(),n=["/","x","*","-","+"],r=Object(t.useState)("0"),i=Object(a.a)(r,2),s=i[0],b=i[1],j=Object(t.useState)(!1),h=Object(a.a)(j,2),x=h[0],g=h[1],C=Object(t.useState)("3rem"),v=Object(a.a)(C,2),m=v[0],p=v[1];function w(){b("0"),g(!1)}function N(){b((function(c){var n=Number(c.toString().replaceAll(",","."));return e=n?(n/100).toString().replace(".",","):c}))}function A(c){b((function(t){if("Erro"===t)e=c,g(!1);else if("0"===t&&"0"!==c)e=c;else if("0"===t&&"0"===c)e=t;else if("0"===c){var r;n.map((function(e){return-1!==t.substr(-2).indexOf("".concat(e,"0"))?r=!0:null})),e=r?t:t.concat(c)}else e=t.concat(c);return e}))}function K(){b((function(c){if(-1!==n.indexOf(c.substr(-1)))e=c;else if(-1!==c.indexOf(",")){var t=[];n.map((function(e){return-1!==c.indexOf(e)?t.push(c.indexOf(e)):null}));var r=c.substr(t).replace(",","").concat(",");e=c.substr(0,t).concat(r)}else e=","===c.substr(-1)?c:c.concat(",");return e}))}function S(c){b((function(t){return e=t.substr(-1)===c?t:-1!==n.indexOf(t.substr(-1))?t.substr(0,t.length-1).concat(c):t.concat(c)}))}function D(){b((function(t){var r,i=t.replaceAll("x","*").replaceAll(",",".");return-1!==n.indexOf(i.substr(-1))||"0"===t?e=t:(e=Object(l.pe)(Object(d.a)(i),3).toString().replaceAll(".",","),c((r="".concat(t,"=").concat(e),{type:"ADD_EQUATION",payload:{id:++y,equation:r,created_at:k()().format("DD/MM/YYYY HH:mm:ss")}}))),e=e.includes("NaN")||e.includes("Infinity")?"Erro":e})),g("Erro"===e)}return Object(t.useEffect)((function(){s.length>=10?p("2rem"):p("3rem")}),[s]),Object(u.jsxs)("div",{className:"container",onKeyDown:function(e){e.keyCode>=96&&e.keyCode<=105||e.keyCode>=48&&e.keyCode<=57&&!e.shiftKey?A(e.key):46===e.keyCode?w():53===e.keyCode&&e.shiftKey&&!x?N():110!==e.keyCode&&188!==e.keyCode||x?13!==e.keyCode&&(187!==e.keyCode||e.shiftKey)||x?(106===e.keyCode||189===e.keyCode&&!e.shiftKey||107===e.keyCode||187===e.keyCode&&e.shiftKey||109===e.keyCode||56===e.keyCode&&e.shiftKey||111===e.keyCode||193===e.keyCode&&!e.shiftKey)&&!x&&S("*"===e.key?"x":e.key):D():K()},tabIndex:"0",children:[Object(u.jsx)("div",{className:"nav-menu",children:Object(u.jsx)(o.b,{to:"/history",children:"Hist\xf3rico"})}),Object(u.jsxs)("div",{className:"calculator",children:[Object(u.jsx)("div",{className:"calculator-header",style:{fontSize:m},children:s}),Object(u.jsxs)("div",{className:"calculator-body",children:[Object(u.jsxs)("div",{className:"row-ac",children:[Object(u.jsx)(O,{onClick:w,color:"dark",bg:"gray",children:"AC"}),Object(u.jsx)(O,{onClick:function(){b((function(c){return e="-"===c[0]?c.substr(1):"0"===c?c:"-".concat(c)}))},color:"dark",bg:"gray",disabled:x,children:"+/-"}),Object(u.jsx)(O,{onClick:N,color:"dark",bg:"gray",disabled:x,children:"%"})]}),Object(u.jsxs)("div",{className:"grid-numbers",children:[Object(u.jsx)(O,{onClick:function(e){return A("7")},color:"white",bg:"dark",children:"7"}),Object(u.jsx)(O,{onClick:function(e){return A("8")},color:"white",bg:"dark",children:"8"}),Object(u.jsx)(O,{onClick:function(e){return A("9")},color:"white",bg:"dark",children:"9"}),Object(u.jsx)(O,{onClick:function(e){return A("4")},color:"white",bg:"dark",children:"4"}),Object(u.jsx)(O,{onClick:function(e){return A("5")},color:"white",bg:"dark",children:"5"}),Object(u.jsx)(O,{onClick:function(e){return A("6")},color:"white",bg:"dark",children:"6"}),Object(u.jsx)(O,{onClick:function(e){return A("1")},color:"white",bg:"dark",children:"1"}),Object(u.jsx)(O,{onClick:function(e){return A("2")},color:"white",bg:"dark",children:"2"}),Object(u.jsx)(O,{onClick:function(e){return A("3")},color:"white",bg:"dark",children:"3"}),Object(u.jsx)(O,{onClick:function(e){return A("0")},color:"white",bg:"dark",col:2,children:"0"}),Object(u.jsx)(O,{onClick:K,color:"white",bg:"dark",disabled:x,children:","})]}),Object(u.jsxs)("div",{className:"col-operators",children:[Object(u.jsx)(O,{onClick:function(e){return S("/")},color:"dark",bg:"warning",disabled:x,children:"/"}),Object(u.jsx)(O,{onClick:function(e){return S("x")},color:"dark",bg:"warning",disabled:x,children:"x"}),Object(u.jsx)(O,{onClick:function(e){return S("-")},color:"dark",bg:"warning",disabled:x,children:"-"}),Object(u.jsx)(O,{onClick:function(e){return S("+")},color:"dark",bg:"warning",disabled:x,children:"+"}),Object(u.jsx)(O,{onClick:D,color:"dark",bg:"warning",disabled:x,children:"="})]})]})]})]})}n(92);function C(){var e=Object(f.c)((function(e){return e.history}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"nav-menu",children:Object(u.jsx)(o.b,{to:"/",children:"Calculadora"})}),Object(u.jsxs)("div",{className:"history",children:[Object(u.jsx)("div",{className:"history-header",children:"Hist\xf3rico"}),Object(u.jsx)("div",{className:"history-body",children:e.length?e.map((function(e){return Object(u.jsxs)("div",{className:"history-equation",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("div",{children:e.created_at.split(" ")[0]}),Object(u.jsx)("div",{children:e.created_at.split(" ")[1]})]}),Object(u.jsx)("span",{children:e.equation})]},e.id)})):Object(u.jsx)("h1",{children:"Sem hist\xf3rico"})})]})]})}function v(){return Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/",exact:!0,component:g}),Object(u.jsx)(s.a,{path:"/history",component:C})]})}n(93);var m=function(){return Object(u.jsx)(v,{})},p=n(51),w=n(19);var N=Object(p.a)({history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;return"ADD_EQUATION"===c.type?[].concat(Object(w.a)(e),[c.payload]):e}}),A=Object(p.b)(N);i.a.render(Object(u.jsx)(o.a,{children:Object(u.jsx)(f.a,{store:A,children:Object(u.jsx)(m,{})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.2df4a477.chunk.js.map