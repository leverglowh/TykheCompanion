(this["webpackJsonptykhe-companion"]=this["webpackJsonptykhe-companion"]||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(17),c=n.n(r),o=(n(42),n(43),n(19)),l=n(7),s=n(18),d=n(14),u=(n(44),/(^:[1-5]star128:\W*-\W*(.+)\W*-\W*[0-9]{4}$)|(^[1-5](s|star)?[\s-]{1}(.+)[\s-]{1}[0-9]{4}$)/),j=function(e,t){return e.name===t.name?e.tier>t.tier?-1:e.tier>t.tier?1:0:e.name<t.name?-1:1},b=n(9),v=n(36),O=n(24),f=n(37),p=n(2),h=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),c=Object(d.a)(r,2),h=c[0],m=c[1],g=Object(a.useState)(0),x=Object(d.a)(g,2),y=x[0],N=x[1],S=Object(a.useState)(""),k=Object(d.a)(S,2),w=k[0],C=k[1],E=Object(a.useState)(null),I=Object(d.a)(E,2),H=I[0],B=I[1],J=Object(a.useState)([]),R=Object(d.a)(J,2),D=R[0],T=R[1],q=Object(a.useState)(!1),F=Object(d.a)(q,2),A=F[0],M=F[1],L=Object(a.useState)(!1),P=Object(d.a)(L,2),K=P[0],$=P[1],U=Object(a.useCallback)((function(e){var t=localStorage.getItem("binId");if(t){var n=new XMLHttpRequest;n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&console.log(JSON.parse(n.response))},n.open("PUT","https://api.jsonbin.io/v3/b/"+t,!0),n.setRequestHeader("Content-Type","application/json"),n.setRequestHeader("X-Master-Key","$2b$10$ckVgM1xPqSGsv8uaycGJNuOEQRN74Rq3HMCQLNpqmKFT37bAZprzC"),n.send(e?JSON.stringify(e):localStorage.getItem("inv"))}else{var a=new XMLHttpRequest;a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(localStorage.setItem("binId",JSON.parse(a.response).metadata.id),alert("Save this id so you can restore your inv in future: "+JSON.parse(a.response).metadata.id))},a.open("POST","https://api.jsonbin.io/v3/b",!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("X-BIN-PRIVATE","false"),a.setRequestHeader("X-Master-Key","$2b$10$ckVgM1xPqSGsv8uaycGJNuOEQRN74Rq3HMCQLNpqmKFT37bAZprzC"),a.send(e?JSON.stringify(e):localStorage.getItem("inv"))}}),[]);Object(a.useEffect)((function(){var e=localStorage.getItem("inv");e&&(i(JSON.parse(e)),U(JSON.parse(e)))}),[U]),Object(a.useEffect)((function(){document.onkeyup=function(e){var t;"Escape"===e.key&&(m(""),C(""),null===(t=document.getElementById(y+""))||void 0===t||t.style.setProperty("text-decoration","none"),N(0))}}),[y]),Object(a.useEffect)((function(){n&&localStorage.setItem("inv",JSON.stringify(n))}),[n]);var X=function(e,t,n){var a=n+"";return!(!e||!t||!n||e>5||e<1||t.length<=0||a.includes(".")||a.includes(",")||4!==a.length||n<1e3)},W=function(e){C(e.target.value)},G=function(e){var t;"Enter"===e.key&&(null===(t=document.getElementById("new-card-input-submit-button"))||void 0===t||t.click())},Q=function(e){var t,n;e.persist();var a=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat;m(a),C("")},V=function(e){var t=0,n=0,a="";if(":"===(null===e||void 0===e?void 0:e[0])){if(!/^:[0-5]star128:/.test(e))return null;t=Number(e[1]);var i=Object(s.a)(e.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0}));n=Number(i[i.length-1]),a=i.slice(1,i.length-1).join(" - ")}else{var r;if(!/^[1-5][^0-9]+/.test(e))return null;var c=[];c=Object(s.a)(e.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0}));t=Number(null===(r=c[0].match(/\d+/g))||void 0===r?void 0:r[0])||0,n=Number(c[c.length-1]),a=c.slice(1,c.length-1).join(" - "),X(t,a,n)||(c=Object(s.a)(e.split(" ").map((function(e){return e.trim()}))).filter((function(e){return e.length>0})),t=Number(e[0]),n=Number(c[c.length-1]),a=c.slice(1,c.length-1).join(" "))}return X(t,a,n)?{tier:t,name:a,uid:n}:null},z=function(e){var t,a=(w||"").replace(":lock:","").trim();if("JSON"===a)return null===(t=document.getElementById("downloadJSON"))||void 0===t||t.click(),m(""),N(0),C(""),void e.preventDefault();if("CLEAR"===a)return localStorage.clear(),void window.location.reload();if("CREATE CAT"===a)return $(!0),void e.preventDefault();if("DELETE CAT"===a)return B({cat:h,tier:0,name:"",uid:0}),void e.preventDefault();if(u.test(a)){var r=V(a);if(r){if(y){var c,d=n[h].find((function(e){return e.uid===y}));(null===r||void 0===r?void 0:r.name)!==(null===d||void 0===d?void 0:d.name)&&alert("Attention: you input a different card name, the old card will be replaced."),i(Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},h,[].concat(Object(s.a)(n[h].filter((function(e){return e.uid!==y}))),[Object(l.a)({},r)]).sort(j)))),null===(c=document.getElementById(y+""))||void 0===c||c.style.removeProperty("text-decoration")}else Object.keys(n).forEach((function(e){if(!!n[e].find((function(e){return e.uid===(null===r||void 0===r?void 0:r.uid)})))throw alert("Duplicate UID, please check your data."),"Duplicate UID, please check your data."})),i(Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},h,[].concat(Object(s.a)(n[h]),[Object(l.a)({},r)]).sort(j))));m(""),N(0),C(""),e.preventDefault()}else alert("Non valid input, abort! abort!")}else alert("Non valid input, abort! abort!")},Z=function(e){var t,a,i,r;if(e.persist(),"B"!==e.target.tagName){var c=null===(t=e.target)||void 0===t||null===(a=t.dataset)||void 0===a?void 0:a.cat,o=Number(null===(i=e.target)||void 0===i||null===(r=i.dataset)||void 0===r?void 0:r.uid);if(c&&o){var s=n[c].find((function(e){return e.uid===o}));B(Object(l.a)({cat:c},s))}}else e.target.parentElement.click()},Y=function(e){var t,n,a,i,r;if(e.persist(),"B"!==e.target.tagName){var c=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat,o=Number(null===(a=e.target)||void 0===a||null===(i=a.dataset)||void 0===i?void 0:i.uid);if(c&&o){var l=document.getElementById(o+"");null===l||void 0===l||l.style.setProperty("text-decoration","line-through"),m(c),N(o),C((null===l||void 0===l||null===(r=l.firstElementChild)||void 0===r?void 0:r.innerHTML)||"")}}else e.target.parentElement.click()};return Object(p.jsxs)("div",{className:"main-container",children:[n?Object.keys(n).sort().map((function(e){return Object(p.jsxs)("div",{className:"cat",children:[Object(p.jsxs)("div",{className:"cat-header",children:[Object(p.jsx)("b",{children:e}),Object(p.jsx)("span",{className:"abs-right-button",title:"Add a new card","data-cat":e,onClick:Q,children:"+"})]}),Object(p.jsxs)("div",{className:"cat-body",children:[h===e&&Object(p.jsxs)("div",{id:"new-card-form",children:[Object(p.jsxs)("div",{className:"card-format",children:["?",Object(p.jsxs)("span",{className:"card-format-info",children:["Copy from inv:",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:":2star128: - Hawkeye (Kate Bishop) - 2333"}),Object(p.jsx)("br",{}),"or manually insert",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"2s Hawkeye (Kate Bishop) 2333"})]})]}),Object(p.jsx)("input",{id:"new-card-input-box",className:"new-card-input-box",type:"text",autoFocus:!0,value:w,onChange:W,onKeyUp:G,placeholder:"2s Hawkeye (Kate Bishop) 2333"}),Object(p.jsx)("input",{type:"button",id:"new-card-input-submit-button",value:"\u2713",onClick:z})]}),Object(p.jsx)("div",{className:"hide-overflow",children:n[e].map((function(t,i){var r,c;return Object(p.jsxs)(a.Fragment,{children:[(null===(r=n[e])||void 0===r||null===(c=r[i-1])||void 0===c?void 0:c.name)!==t.name&&Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"card-line star"+t.tier,id:t.uid+"",children:[Object(p.jsx)("span",{children:"".concat(t.tier,"s - ").concat(t.name," - ").concat(t.uid)}),Object(p.jsx)("span",{className:"edit-card-button unselectable","data-cat":e,"data-uid":t.uid,onClick:Y,children:Object(p.jsx)("b",{children:"\u270e"})}),Object(p.jsx)("span",{className:"delete-card-button unselectable","data-cat":e,"data-uid":t.uid,onClick:Z,children:Object(p.jsx)("b",{children:"\xd7"})})]})]},t.uid)}))})]})]},e)})):Object(p.jsxs)("div",{className:"file-input-container",children:[Object(p.jsx)("label",{htmlFor:"initial-inv-input",children:"Hi, please upload inventory text file."}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"file",name:"initial-inv-input",id:"initial-inv-input",accept:"text/plain",onChange:function(e){var t,n,a=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n[0];if(console.log(a),a){var i=new FileReader;i.readAsText(a,"UTF-8"),i.onload=function(e){var t,n,a=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.result)||void 0===n?void 0:n.replace(":lock:",""),i={},r="",c=a.split("\n"),o=0,d=[];c.forEach((function(e){if(e.startsWith(":")||/^[0-9]/.test(e)){var t=V(e.trim());if(!r||!t)return o++,void d.push(e);i[r].push(Object(l.a)({},t))}else if(e.length>1){var n=e.trim();n!==r&&(i[n]||(i[n]=[])),r=n}}));var u={};Object(s.a)(Object.keys(i)).forEach((function(e){if(0===i[e].length)return delete i[e],void d.push(e);u[e]=i[e].sort(j)})),localStorage.setItem("inv",JSON.stringify(u)),o>0?(T(d),M(!0)):window.location.reload()},i.onerror=function(e){alert("error")}}}})]}),Object(p.jsx)("a",{id:"downloadJSON",href:"data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n)),download:"inv.json",style:{display:"none"},children:"DOWNLOAD JSON"}),H&&Object(p.jsxs)(b.a,{show:!0,backdrop:"static",keyboard:!1,children:[Object(p.jsx)(b.a.Header,{children:"Are you sure?"}),Object(p.jsx)(b.a.Body,{children:Object(p.jsxs)(v.a,{variant:"danger",children:["Are you sure you want to remove this?",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:H.tier?"".concat(H.tier,"s - ").concat(H.name," - ").concat(H.uid):"Category: ".concat(H.cat)})]})}),Object(p.jsxs)(b.a.Footer,{children:[Object(p.jsx)(O.a,{variant:"secondary",onClick:function(){B(null)},children:"Don't remove"}),Object(p.jsx)(O.a,{variant:"danger",onClick:function(){if(null===H||void 0===H?void 0:H.cat){if(!H.tier&&H.cat){var e=Object(l.a)({},n);return delete e[H.cat],i(e),void B(null)}H.uid&&(i(Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},H.cat,Object(s.a)(n[H.cat].filter((function(e){return e.uid!==H.uid})))))),B(null))}},children:"Yes, do it."})]})]}),A&&D.length>0&&Object(p.jsxs)(b.a,{show:!0,backdrop:"static",keyboard:!1,children:[Object(p.jsx)(b.a.Header,{children:"Error encountered"}),Object(p.jsxs)(b.a.Body,{children:[Object(p.jsxs)(v.a,{variant:"danger",children:[D.length," error(s) encountered in these lines:"]}),Object(p.jsx)("div",{className:"import-error-log-container",children:D.map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"error-log-index unselectable",children:[t+1,"\xa0"]}),e]})}))})]}),Object(p.jsx)(b.a.Footer,{children:Object(p.jsx)(O.a,{variant:"secondary",onClick:function(){window.location.reload()},children:"OK"})})]}),K&&Object(p.jsxs)(b.a,{show:!0,children:[Object(p.jsx)(b.a.Header,{closeButton:!0,children:"New sub category"}),Object(p.jsx)(b.a.Body,{children:Object(p.jsx)(f.a.Control,{id:"new-subcat-input",placeholder:"Marvel Cinematic Universe",autoFocus:!0})}),Object(p.jsx)(b.a.Footer,{children:Object(p.jsx)(O.a,{variant:"primary",onClick:function(){var e=document.getElementById("new-subcat-input").value;e?(i(Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},e,[]))),$(!1),m(""),N(0),C("")):alert("Invalid category name")},children:"ADD"})})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root")),m()}},[[49,1,2]]]);
//# sourceMappingURL=main.8874e8d7.chunk.js.map