(this["webpackJsonptykhe-companion"]=this["webpackJsonptykhe-companion"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(9),c=n.n(r),l=(n(14),n(4)),o=n(3),u=n(2),d=n(6),s=(n(15),/(^:[1-5]star128:\W*-\W*(.+)\W*-\W*[0-9]{4}$)|(^[1-5](s|star)?[\s-]{1}(.+)[\s-]{1}[0-9]{4}$)/g),b=function(e,t){return e.name===t.name?e.tier>t.tier?-1:e.tier>t.tier?1:0:e.name<t.name?-1:1},j=n(0),v=function(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),c=Object(d.a)(r,2),v=c[0],f=c[1],m=Object(i.useState)(0),p=Object(d.a)(m,2),O=p[0],h=p[1],g=Object(i.useState)(""),x=Object(d.a)(g,2),y=x[0],N=x[1];Object(i.useEffect)((function(){var e=localStorage.getItem("inv");e&&a(JSON.parse(e))}),[]),Object(i.useEffect)((function(){document.onkeyup=function(e){var t;"Escape"===e.key&&(f(""),N(""),null===(t=document.getElementById(O+""))||void 0===t||t.style.setProperty("text-decoration","none"),h(0))}}),[O]),Object(i.useEffect)((function(){n&&localStorage.setItem("inv",JSON.stringify(n))}),[n]);var k=function(e,t,n){var i=n+"";return!(!e||!t||!n||e>5||e<1||t.length<=0||i.includes(".")||i.includes(",")||4!==i.length||n<1e3)},w=function(e){N(e.target.value)},E=function(e){var t;"Enter"===e.key&&(null===(t=document.getElementById("new-card-input-submit-button"))||void 0===t||t.click())},S=function(e){var t,n;e.persist();var i=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat;f(i),N("")},I=function(e){var t,i=(y||"").replace(":lock:","").trim();if("JSON"===i)return null===(t=document.getElementById("downloadJSON"))||void 0===t||t.click(),f(""),h(0),N(""),void e.preventDefault();if(s.test(i)){var r=0,c=0,d="";if(":"===(null===i||void 0===i?void 0:i[0])){r=Number(i[1]);var j=Object(u.a)(i.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0}));c=Number(j[j.length-1]),d=j.slice(1,j.length-1).join(" - ")}else{var m=[];m=Object(u.a)(i.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0})),r=Number(i[0]),c=Number(m[m.length-1]),d=m.slice(1,m.length-1).join(" - "),k(r,d,c)||(m=Object(u.a)(i.split(" ").map((function(e){return e.trim()}))).filter((function(e){return e.length>0})),r=Number(i[0]),c=Number(m[m.length-1]),d=m.slice(1,m.length-1).join(" "))}if(k(r,d,c)){if(O){var p,g=n[v].find((function(e){return e.uid===O}));d!==(null===g||void 0===g?void 0:g.name)&&alert("Attention: you input a different card name, the old card will be replaced."),a(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},v,[].concat(Object(u.a)(n[v].filter((function(e){return e.uid!==O}))),[{tier:r,name:d,uid:c}]).sort(b)))),null===(p=document.getElementById(O+""))||void 0===p||p.style.removeProperty("text-decoration")}else Object.keys(n).forEach((function(e){if(!!n[e].find((function(e){return e.uid===c})))throw alert("Duplicate UID, please check your data."),"Duplicate UID, please check your data."})),a(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},v,[].concat(Object(u.a)(n[v]),[{tier:r,name:d,uid:c}]).sort(b))));f(""),h(0),N(""),e.preventDefault()}else alert("Non valid input, abort! abort!")}else alert("Non valid input, abort! abort!")},B=function(e){var t,i,r,c;if(e.persist(),"B"!==e.target.tagName){var d=null===(t=e.target)||void 0===t||null===(i=t.dataset)||void 0===i?void 0:i.cat,s=Number(null===(r=e.target)||void 0===r||null===(c=r.dataset)||void 0===c?void 0:c.uid);d&&s&&a(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},d,Object(u.a)(n[d].filter((function(e){return e.uid!==s}))))))}else e.target.parentElement.click()},C=function(e){var t,n,i,a,r;if(e.persist(),"B"!==e.target.tagName){var c=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat,l=Number(null===(i=e.target)||void 0===i||null===(a=i.dataset)||void 0===a?void 0:a.uid);if(c&&l){var o=document.getElementById(l+"");null===o||void 0===o||o.style.setProperty("text-decoration","line-through"),f(c),h(l),N((null===o||void 0===o||null===(r=o.firstElementChild)||void 0===r?void 0:r.innerHTML)||"")}}else e.target.parentElement.click()};return Object(j.jsxs)("div",{className:"container",children:[n?Object.keys(n).map((function(e){return Object(j.jsxs)("div",{className:"cat",children:[Object(j.jsxs)("div",{className:"cat-header",children:[Object(j.jsx)("b",{children:e}),Object(j.jsx)("span",{className:"abs-right-button",title:"Add a new card","data-cat":e,onClick:S,children:"+"})]}),Object(j.jsxs)("div",{className:"cat-body",children:[v===e&&Object(j.jsxs)("div",{id:"new-card-form",children:[Object(j.jsxs)("div",{className:"card-format",children:["?",Object(j.jsxs)("span",{className:"card-format-info",children:["Copy from inv:",Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:":2star128: - Hawkeye (Kate Bishop) - 2333"}),Object(j.jsx)("br",{}),"or manually insert",Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"2s Hawkeye (Kate Bishop) 2333"})]})]}),Object(j.jsx)("input",{id:"new-card-input-box",className:"new-card-input-box",type:"text",autoFocus:!0,value:y,onChange:w,onKeyUp:E,placeholder:"2s Hawkeye (Kate Bishop) 2333"}),Object(j.jsx)("input",{type:"button",id:"new-card-input-submit-button",value:"\u2713",onClick:I})]}),Object(j.jsx)("div",{className:"hide-overflow",children:n[e].map((function(t,a){var r,c;return Object(j.jsxs)(i.Fragment,{children:[(null===(r=n[e])||void 0===r||null===(c=r[a-1])||void 0===c?void 0:c.name)!==t.name&&Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"card star"+t.tier,id:t.uid+"",children:[Object(j.jsx)("span",{children:"".concat(t.tier,"s - ").concat(t.name," - ").concat(t.uid)}),Object(j.jsx)("span",{className:"edit-card-button unselectable","data-cat":e,"data-uid":t.uid,onClick:C,children:Object(j.jsx)("b",{children:"\u270e"})}),Object(j.jsx)("span",{className:"delete-card-button unselectable","data-cat":e,"data-uid":t.uid,onClick:B,children:Object(j.jsx)("b",{children:"\xd7"})})]})]},t.uid)}))})]})]},e)})):Object(j.jsxs)("div",{className:"file-input-container",children:[Object(j.jsx)("label",{htmlFor:"initial-inv-input",children:"Hi, please upload inventory text file."}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"file",name:"initial-inv-input",id:"initial-inv-input",accept:"text/plain",onChange:function(e){var t,n,i=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n[0];if(console.log(i),i){var a=new FileReader;a.readAsText(i,"UTF-8"),a.onload=function(e){var t,n,i=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.result)||void 0===n?void 0:n.replace(":lock:",""),a={},r="";i.split("\n").forEach((function(e){if(e.startsWith(":")){var t=Number(e[1]),n=Object(u.a)(e.split("-").map((function(e){return e.trim()}))),i=Number(n[n.length-1]),c=n.slice(1,n.length-1).join(" - ");if(!r||!k(t,c,i)){alert("Non valid input, abort! abort!");var l=document.getElementById("initial-inv-input");throw l&&(l.value=""),"error, bye"}a[r].push({tier:t,name:c,uid:i})}else if(e.length>1){var o=e.trim();o!==r&&(a[o]||(a[o]=[])),r=o}}));var c={};Object(u.a)(Object.keys(a)).sort().forEach((function(e){c[e]=a[e].sort(b)})),localStorage.setItem("inv",JSON.stringify(c)),window.location.reload()},a.onerror=function(e){alert("error")}}}})]}),Object(j.jsx)("a",{id:"downloadJSON",href:"data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n)),download:"inv.json",style:{display:"none"},children:"DOWNLOAD JSON"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.b7086292.chunk.js.map