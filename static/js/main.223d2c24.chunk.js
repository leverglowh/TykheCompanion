(this["webpackJsonptykhe-companion"]=this["webpackJsonptykhe-companion"]||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(16),r=n.n(c),l=(n(39),n(40),n(19)),o=n(11),d=n(17),s=n(18),u=(n(41),/(^:[1-5]star128:\W*-\W*(.+)\W*-\W*[0-9]{4}$)|(^[1-5](s|star)?[\s-]{1}(.+)[\s-]{1}[0-9]{4}$)/),j=function(e,t){return e.name===t.name?e.tier>t.tier?-1:e.tier>t.tier?1:0:e.name<t.name?-1:1},b=n(13),v=n(34),O=n(31),f=n(1),h=function(){var e=Object(i.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(""),r=Object(s.a)(c,2),h=r[0],m=r[1],p=Object(i.useState)(0),x=Object(s.a)(p,2),g=x[0],y=x[1],N=Object(i.useState)(""),k=Object(s.a)(N,2),w=k[0],S=k[1],E=Object(i.useState)(null),C=Object(s.a)(E,2),B=C[0],I=C[1],F=Object(i.useState)([]),D=Object(s.a)(F,2),J=D[0],A=D[1],H=Object(i.useState)(!1),W=Object(s.a)(H,2),K=W[0],L=W[1];Object(i.useEffect)((function(){var e=localStorage.getItem("inv");e&&a(JSON.parse(e))}),[]),Object(i.useEffect)((function(){document.onkeyup=function(e){var t;"Escape"===e.key&&(m(""),S(""),null===(t=document.getElementById(g+""))||void 0===t||t.style.setProperty("text-decoration","none"),y(0))}}),[g]),Object(i.useEffect)((function(){n&&localStorage.setItem("inv",JSON.stringify(n))}),[n]);var P=function(e,t,n){var i=n+"";return!(!e||!t||!n||e>5||e<1||t.length<=0||i.includes(".")||i.includes(",")||4!==i.length||n<1e3)},T=function(e){S(e.target.value)},U=function(e){var t;"Enter"===e.key&&(null===(t=document.getElementById("new-card-input-submit-button"))||void 0===t||t.click())},R=function(e){var t,n;e.persist();var i=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat;m(i),S("")},M=function(e){var t=0,n=0,i="";if(":"===(null===e||void 0===e?void 0:e[0])){if(!/^:[0-5]star128:/.test(e))return null;t=Number(e[1]);var a=Object(d.a)(e.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0}));n=Number(a[a.length-1]),i=a.slice(1,a.length-1).join(" - ")}else{var c;if(!/^[1-5][^0-9]+/.test(e))return null;var r=[];r=Object(d.a)(e.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0}));t=Number(null===(c=r[0].match(/\d+/g))||void 0===c?void 0:c[0])||0,n=Number(r[r.length-1]),i=r.slice(1,r.length-1).join(" - "),P(t,i,n)||(r=Object(d.a)(e.split(" ").map((function(e){return e.trim()}))).filter((function(e){return e.length>0})),t=Number(e[0]),n=Number(r[r.length-1]),i=r.slice(1,r.length-1).join(" "))}return P(t,i,n)?{tier:t,name:i,uid:n}:null},$=function(e){var t,i=(w||"").replace(":lock:","").trim();if("JSON"===i)return null===(t=document.getElementById("downloadJSON"))||void 0===t||t.click(),m(""),y(0),S(""),void e.preventDefault();if("CLEAR"===i)return localStorage.clear(),void window.location.reload();if(u.test(i)){var c=M(i);if(c){if(g){var r,s=n[h].find((function(e){return e.uid===g}));(null===c||void 0===c?void 0:c.name)!==(null===s||void 0===s?void 0:s.name)&&alert("Attention: you input a different card name, the old card will be replaced."),a(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},h,[].concat(Object(d.a)(n[h].filter((function(e){return e.uid!==g}))),[Object(o.a)({},c)]).sort(j)))),null===(r=document.getElementById(g+""))||void 0===r||r.style.removeProperty("text-decoration")}else Object.keys(n).forEach((function(e){if(!!n[e].find((function(e){return e.uid===(null===c||void 0===c?void 0:c.uid)})))throw alert("Duplicate UID, please check your data."),"Duplicate UID, please check your data."})),a(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},h,[].concat(Object(d.a)(n[h]),[Object(o.a)({},c)]).sort(j))));m(""),y(0),S(""),e.preventDefault()}else alert("Non valid input, abort! abort!")}else alert("Non valid input, abort! abort!")},Y=function(e){var t,i,a,c;if(e.persist(),"B"!==e.target.tagName){var r=null===(t=e.target)||void 0===t||null===(i=t.dataset)||void 0===i?void 0:i.cat,l=Number(null===(a=e.target)||void 0===a||null===(c=a.dataset)||void 0===c?void 0:c.uid);if(r&&l){var d=n[r].find((function(e){return e.uid===l}));I(Object(o.a)({cat:r},d))}}else e.target.parentElement.click()},q=function(e){var t,n,i,a,c;if(e.persist(),"B"!==e.target.tagName){var r=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat,l=Number(null===(i=e.target)||void 0===i||null===(a=i.dataset)||void 0===a?void 0:a.uid);if(r&&l){var o=document.getElementById(l+"");null===o||void 0===o||o.style.setProperty("text-decoration","line-through"),m(r),y(l),S((null===o||void 0===o||null===(c=o.firstElementChild)||void 0===c?void 0:c.innerHTML)||"")}}else e.target.parentElement.click()};return Object(f.jsxs)("div",{className:"main-container",children:[n?Object.keys(n).map((function(e){return Object(f.jsxs)("div",{className:"cat",children:[Object(f.jsxs)("div",{className:"cat-header",children:[Object(f.jsx)("b",{children:e}),Object(f.jsx)("span",{className:"abs-right-button",title:"Add a new card","data-cat":e,onClick:R,children:"+"})]}),Object(f.jsxs)("div",{className:"cat-body",children:[h===e&&Object(f.jsxs)("div",{id:"new-card-form",children:[Object(f.jsxs)("div",{className:"card-format",children:["?",Object(f.jsxs)("span",{className:"card-format-info",children:["Copy from inv:",Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:":2star128: - Hawkeye (Kate Bishop) - 2333"}),Object(f.jsx)("br",{}),"or manually insert",Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"2s Hawkeye (Kate Bishop) 2333"})]})]}),Object(f.jsx)("input",{id:"new-card-input-box",className:"new-card-input-box",type:"text",autoFocus:!0,value:w,onChange:T,onKeyUp:U,placeholder:"2s Hawkeye (Kate Bishop) 2333"}),Object(f.jsx)("input",{type:"button",id:"new-card-input-submit-button",value:"\u2713",onClick:$})]}),Object(f.jsx)("div",{className:"hide-overflow",children:n[e].map((function(t,a){var c,r;return Object(f.jsxs)(i.Fragment,{children:[(null===(c=n[e])||void 0===c||null===(r=c[a-1])||void 0===r?void 0:r.name)!==t.name&&Object(f.jsx)("hr",{}),Object(f.jsxs)("div",{className:"card-line star"+t.tier,id:t.uid+"",children:[Object(f.jsx)("span",{children:"".concat(t.tier,"s - ").concat(t.name," - ").concat(t.uid)}),Object(f.jsx)("span",{className:"edit-card-button unselectable","data-cat":e,"data-uid":t.uid,onClick:q,children:Object(f.jsx)("b",{children:"\u270e"})}),Object(f.jsx)("span",{className:"delete-card-button unselectable","data-cat":e,"data-uid":t.uid,onClick:Y,children:Object(f.jsx)("b",{children:"\xd7"})})]})]},t.uid)}))})]})]},e)})):Object(f.jsxs)("div",{className:"file-input-container",children:[Object(f.jsx)("label",{htmlFor:"initial-inv-input",children:"Hi, please upload inventory text file."}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"file",name:"initial-inv-input",id:"initial-inv-input",accept:"text/plain",onChange:function(e){var t,n,i=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n[0];if(console.log(i),i){var a=new FileReader;a.readAsText(i,"UTF-8"),a.onload=function(e){var t,n,i=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.result)||void 0===n?void 0:n.replace(":lock:",""),a={},c="",r=i.split("\n"),l=0,s=[];r.forEach((function(e){if(e.startsWith(":")||/^[0-9]/.test(e)){var t=M(e.trim());if(!c||!t)return l++,void s.push(e);a[c].push(Object(o.a)({},t))}else if(e.length>1){var n=e.trim();n!==c&&(a[n]||(a[n]=[])),c=n}}));var u={};Object(d.a)(Object.keys(a)).sort().forEach((function(e){if(0===a[e].length)return delete a[e],void s.push(e);u[e]=a[e].sort(j)})),localStorage.setItem("inv",JSON.stringify(u)),l>0&&(A(s),L(!0))},a.onerror=function(e){alert("error")}}}})]}),Object(f.jsx)("a",{id:"downloadJSON",href:"data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n)),download:"inv.json",style:{display:"none"},children:"DOWNLOAD JSON"}),B&&Object(f.jsxs)(b.a,{show:!0,backdrop:"static",keyboard:!1,children:[Object(f.jsx)(b.a.Header,{children:"Are you sure?"}),Object(f.jsx)(b.a.Body,{children:Object(f.jsxs)(v.a,{variant:"danger",children:["Are you sure you want to remove this card?",Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"".concat(B.tier,"s - ").concat(B.name," - ").concat(B.uid)})]})}),Object(f.jsxs)(b.a.Footer,{children:[Object(f.jsx)(O.a,{variant:"secondary",onClick:function(){I(null)},children:"Don't remove"}),Object(f.jsx)(O.a,{variant:"danger",onClick:function(){(null===B||void 0===B?void 0:B.cat)&&(null===B||void 0===B?void 0:B.uid)&&(a(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},B.cat,Object(d.a)(n[B.cat].filter((function(e){return e.uid!==B.uid})))))),I(null))},children:"Yes, do it."})]})]}),K&&J.length>0&&Object(f.jsxs)(b.a,{show:!0,backdrop:"static",keyboard:!1,children:[Object(f.jsx)(b.a.Header,{children:"Error encountered"}),Object(f.jsxs)(b.a.Body,{children:[Object(f.jsxs)(v.a,{variant:"danger",children:[J.length," error(s) encountered in these lines:"]}),Object(f.jsx)("div",{className:"import-error-log-container",children:J.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{className:"error-log-index unselectable",children:[t+1,"\xa0"]}),e]})}))})]}),Object(f.jsx)(b.a.Footer,{children:Object(f.jsx)(O.a,{variant:"secondary",onClick:function(){window.location.reload()},children:"OK"})})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root")),m()}},[[46,1,2]]]);
//# sourceMappingURL=main.223d2c24.chunk.js.map