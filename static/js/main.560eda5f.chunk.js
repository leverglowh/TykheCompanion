(this["webpackJsonptykhe-companion"]=this["webpackJsonptykhe-companion"]||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(18),c=n.n(r),o=(n(42),n(43),n(19)),l=n(14),s=n(7),u=n(15),d=(n(44),/(^:[1-5]star128:\W*-\W*(.+)\W*-\W*[0-9]{4}$)|(^[1-5](s|star)?[\s-]{1}(.+)[\s-]{1}[0-9]{4}$)/),b=function(e,t){return e.name===t.name?e.tier>t.tier?-1:e.tier>t.tier?1:0:e.name<t.name?-1:1},j=function(e){var t=0,n=0,a="";if(":"===(null===e||void 0===e?void 0:e[0])){if(!/^:[0-5]star128:/.test(e))return null;t=Number(e[1]);var i=Object(l.a)(e.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0}));n=Number(i[i.length-1]),a=i.slice(1,i.length-1).join(" - ")}else{var r;if(!/^[1-5][^0-9]+/.test(e))return null;var c=[];c=Object(l.a)(e.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0}));t=Number(null===(r=c[0].match(/\d+/g))||void 0===r?void 0:r[0])||0,n=Number(c[c.length-1]),a=c.slice(1,c.length-1).join(" - "),v(t,a,n)||(c=Object(l.a)(e.split(" ").map((function(e){return e.trim()}))).filter((function(e){return e.length>0})),t=Number(e[0]),n=Number(c[c.length-1]),a=c.slice(1,c.length-1).join(" "))}return v(t,a,n)?{tier:t,name:a,uid:n}:null},v=function(e,t,n){var a=n+"";return!(!e||!t||!n||e>5||e<1||t.length<=0||a.includes(".")||a.includes(",")||4!==a.length||n<1e3)},p=function(e,t){var n;"Enter"===e.key&&(null===(n=document.getElementById(t))||void 0===n||n.click())},f=n(9),O=n(37),m=n(22),g=n(36),h=n(1),y=function(e){var t=e.category,n=e.invData,i=e.editingUID,r=e.editingCategory,c=e.updateInvData,v=e.updateCreatingNewCat,f=e.updateEditingUID,O=e.updateRemoveInfo,m=e.updateEditingCategory,g=Object(a.useState)(""),y=Object(u.a)(g,2),x=y[0],N=y[1];Object(a.useEffect)((function(){document.onkeyup=function(e){var t;"Escape"===e.key&&(m(""),N(""),null===(t=document.getElementById(i+""))||void 0===t||t.style.setProperty("text-decoration","none"),f(0))}}),[i,f,m]);var S=function(e){var t,n,a,i,r;if(e.persist(),"B"!==e.target.tagName){var c=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat,o=Number(null===(a=e.target)||void 0===a||null===(i=a.dataset)||void 0===i?void 0:i.uid);if(c&&o){var l=document.getElementById(o+"");null===l||void 0===l||l.style.setProperty("text-decoration","line-through"),m(c),f(o),N((null===l||void 0===l||null===(r=l.firstElementChild)||void 0===r?void 0:r.innerHTML)||"")}}else e.target.parentElement.click()},k=function(e){var t,a,i,r;if(e.persist(),"B"!==e.target.tagName){var c=null===(t=e.target)||void 0===t||null===(a=t.dataset)||void 0===a?void 0:a.cat,o=Number(null===(i=e.target)||void 0===i||null===(r=i.dataset)||void 0===r?void 0:r.uid);if(c&&o){var l=n[c].find((function(e){return e.uid===o}));O(Object(s.a)({cat:c},l))}}else e.target.parentElement.click()};return Object(h.jsxs)("div",{className:"cat",children:[Object(h.jsxs)("div",{className:"cat-header",children:[Object(h.jsx)("b",{children:t}),Object(h.jsx)("span",{className:"abs-right-button",title:"Add a new card","data-cat":t,onClick:function(e){var t,n;e.persist();var a=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat;m(a),N("")},children:"+"})]}),Object(h.jsxs)("div",{className:"cat-body",children:[r===t&&Object(h.jsxs)("div",{id:"new-card-form",children:[Object(h.jsxs)("div",{className:"card-format",children:["?",Object(h.jsxs)("span",{className:"card-format-info",children:["Copy from inv:",Object(h.jsx)("br",{}),Object(h.jsx)("b",{children:":2star128: - Hawkeye (Kate Bishop) - 2333"}),Object(h.jsx)("br",{}),"or manually insert",Object(h.jsx)("br",{}),Object(h.jsx)("b",{children:"2s Hawkeye (Kate Bishop) 2333"})]})]}),Object(h.jsx)("input",{id:"new-card-input-box",className:"new-card-input-box",type:"text",autoFocus:!0,value:x,onChange:function(e){N(e.target.value)},onKeyUp:function(e){return p(e,"new-card-input-submit-button")},placeholder:"2s Hawkeye (Kate Bishop) 2333"}),Object(h.jsx)("input",{type:"button",id:"new-card-input-submit-button",value:"\u2713",onClick:function(e){var t,a=(x||"").replace(":lock:","").trim();if("JSON"===a)return null===(t=document.getElementById("downloadJSON"))||void 0===t||t.click(),m(""),f(0),N(""),void e.preventDefault();if("CLEAR"===a)return localStorage.clear(),void window.location.reload();if("CREATE CAT"===a)return v(!0),void e.preventDefault();if("DELETE CAT"===a)return O({cat:r,tier:0,name:"",uid:0}),void e.preventDefault();if(d.test(a)){var u=j(a);if(u){if(i){var p,g=n[r].find((function(e){return e.uid===i}));(null===u||void 0===u?void 0:u.name)!==(null===g||void 0===g?void 0:g.name)&&alert("Attention: you input a different card name, the old card will be replaced."),c(Object(s.a)(Object(s.a)({},n),{},Object(o.a)({},r,[].concat(Object(l.a)(n[r].filter((function(e){return e.uid!==i}))),[Object(s.a)({},u)]).sort(b)))),null===(p=document.getElementById(i+""))||void 0===p||p.style.removeProperty("text-decoration")}else{if(Object.keys(n).some((function(e){return n[e].some((function(e){return e.uid===(null===u||void 0===u?void 0:u.uid)}))})))return void alert("Duplicate UID, please check your data.");c(Object(s.a)(Object(s.a)({},n),{},Object(o.a)({},r,[].concat(Object(l.a)(n[r]),[Object(s.a)({},u)]).sort(b))))}f(0),N(""),m(""),e.preventDefault()}else alert("Non valid input, abort! abort!")}else alert("Non valid input, abort! abort!")}})]}),Object(h.jsx)("div",{className:"hide-overflow",children:n[t].map((function(e,i){var r,c;return Object(h.jsxs)(a.Fragment,{children:[(null===(r=n[t])||void 0===r||null===(c=r[i-1])||void 0===c?void 0:c.name)!==e.name&&Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"card-line star"+e.tier,id:e.uid+"",children:[Object(h.jsx)("span",{children:"".concat(e.tier,"s - ").concat(e.name," - ").concat(e.uid)}),Object(h.jsx)("span",{className:"edit-card-button unselectable","data-cat":t,"data-uid":e.uid,onClick:S,children:Object(h.jsx)("b",{children:"\u270e"})}),Object(h.jsx)("span",{className:"delete-card-button unselectable","data-cat":t,"data-uid":e.uid,onClick:k,children:Object(h.jsx)("b",{children:"\xd7"})})]})]},e.uid)}))})]})]})},x=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),c=Object(u.a)(r,2),d=c[0],x=c[1],N=Object(a.useState)(0),S=Object(u.a)(N,2),k=S[0],I=S[1],w=Object(a.useState)(null),E=Object(u.a)(w,2),C=E[0],D=E[1],B=Object(a.useState)([]),R=Object(u.a)(B,2),H=R[0],J=R[1],q=Object(a.useState)(!1),T=Object(u.a)(q,2),A=T[0],M=T[1],F=Object(a.useState)(!1),L=Object(u.a)(F,2),U=L[0],K=L[1],P=Object(a.useCallback)((function(e){var t=localStorage.getItem("binId");if(t){var n=new XMLHttpRequest;n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(localStorage.setItem("last-fetch",(new Date).valueOf()+""),console.log(JSON.parse(n.response).metadata?"Sync success":"Sync error"))},n.open("PUT","https://api.jsonbin.io/v3/b/"+t,!0),n.setRequestHeader("Content-Type","application/json"),n.setRequestHeader("X-Master-Key","$2b$10$ckVgM1xPqSGsv8uaycGJNuOEQRN74Rq3HMCQLNpqmKFT37bAZprzC"),n.send(e?JSON.stringify(e):localStorage.getItem("inv"))}else{var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){var e=JSON.parse(a.response).metadata.id;if(!e)return;localStorage.setItem("binId",e),localStorage.setItem("last-fetch",(new Date).valueOf()+""),alert("Save this id so you can restore your inv in future: "+JSON.parse(a.response).metadata.id)}},a.open("POST","https://api.jsonbin.io/v3/b",!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("X-BIN-PRIVATE","false"),a.setRequestHeader("X-Bin-Versioning","false"),a.setRequestHeader("X-Master-Key","$2b$10$ckVgM1xPqSGsv8uaycGJNuOEQRN74Rq3HMCQLNpqmKFT37bAZprzC"),a.send(e?JSON.stringify(e):localStorage.getItem("inv"))}}),[]),X=Object(a.useCallback)((function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE){var n=JSON.parse(t.response).record;if("object"!==typeof n)return alert("Invalid data, please check your backup id or upload an inv file."),document.getElementById("backup-id-input").value="",void localStorage.clear();if(!Object.keys(n).every((function(e){return Array.isArray(n[e])&&n[e].every((function(e){return v(e.tier,e.name,e.uid)}))})))return alert("Invalid data, please check your backup id or upload an inv file."),document.getElementById("backup-id-input").value="",void localStorage.clear();var a=localStorage.getItem("inv");a?JSON.stringify(n)!==a&&(alert("Discrepancy remote vs local, keeping remote for now."),localStorage.setItem("inv",JSON.stringify(n))):localStorage.setItem("inv",JSON.stringify(n)),localStorage.setItem("last-fetch",(new Date).valueOf()+""),localStorage.setItem("binId",e),window.location.reload()}},t.open("GET","https://api.jsonbin.io/v3/b/".concat(e,"/latest"),!0),t.send()}),[]);Object(a.useEffect)((function(){var e=localStorage.getItem("inv"),t=localStorage.getItem("binId"),n=Number(localStorage.getItem("last-fetch"))||0,a=(new Date).valueOf()-n<6e4,r=null!==e,c=null!==t;if(c&&a&&r)i(JSON.parse(e));else if(r&&!c){var o=JSON.parse(e);i(o),P(o)}else c&&X(t)}),[P,X]),Object(a.useEffect)((function(){document.onkeyup=function(e){var t;"Escape"===e.key&&(null===(t=document.getElementById(k+""))||void 0===t||t.style.setProperty("text-decoration","none"),I(0))}}),[k]),Object(a.useEffect)((function(){n&&(localStorage.setItem("inv",JSON.stringify(n)),localStorage.getItem("binId")&&P(n))}),[n,P]);var $=function(e){e&&i(e)},W=function(e){x(e)},G=function(e){I(e)},Q=function(e){K(e)},V=function(e){D(e)};return Object(h.jsxs)("div",{className:"main-container",children:[n?Object.keys(n).sort().map((function(e){return Object(h.jsx)(y,{category:e,invData:n,editingCategory:d,editingUID:k,updateInvData:$,updateRemoveInfo:V,updateEditingUID:G,updateCreatingNewCat:Q,updateEditingCategory:W},e)})):Object(h.jsxs)("div",{className:"file-input-container",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"text-align-left",children:"Hi, please upload inventory text file."}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"file",name:"initial-inv-input",id:"initial-inv-input",accept:"text/plain",onChange:function(e){var t,n,a=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n[0];if(console.log(a),a){var i=new FileReader;i.readAsText(a,"UTF-8"),i.onload=function(e){var t,n,a=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.result)||void 0===n?void 0:n.replace(":lock:",""),i={},r="",c=a.split("\n"),o=0,u=[];c.forEach((function(e){if(e.startsWith(":")||/^[0-9]/.test(e)){var t=j(e.trim());if(!r||!t)return o++,void u.push(e);i[r].push(Object(s.a)({},t))}else if(e.length>1){var n=e.trim();n!==r&&(i[n]||(i[n]=[])),r=n}}));var d={},v=Object(l.a)(Object.keys(i));0===v.length?(o++,u.push("No lines found.")):(v.forEach((function(e){if(0===i[e].length)return delete i[e],void u.push(e);d[e]=i[e].sort(b)})),localStorage.setItem("inv",JSON.stringify(d))),o>0?(J(u),M(!0)):window.location.reload()},i.onerror=function(e){alert("error")}}}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"text-align-left",children:"Or input the backup id:"}),Object(h.jsxs)("div",{className:"backup-id-input-container",children:[Object(h.jsx)(g.a.Control,{placeholder:"607b400f0ed6f819beae5284",id:"backup-id-input",onKeyUp:function(e){return p(e,"backup-id-input-button")}}),"\xa0",Object(h.jsx)(m.a,{id:"backup-id-input-button",onClick:function(e){var t,n=null===(t=document.getElementById("backup-id-input"))||void 0===t?void 0:t.value;n?X(n):alert("Invalid input, please check your backup id or upload an inv file.")},children:"Enter"})]})]})]}),Object(h.jsx)("a",{id:"downloadJSON",href:"data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n)),download:"inv.json",style:{display:"none"},children:"DOWNLOAD JSON"}),C&&Object(h.jsxs)(f.a,{show:!0,backdrop:"static",keyboard:!1,children:[Object(h.jsx)(f.a.Header,{children:"Are you sure?"}),Object(h.jsx)(f.a.Body,{children:Object(h.jsxs)(O.a,{variant:"danger",children:["Are you sure you want to remove this?",Object(h.jsx)("br",{}),Object(h.jsx)("b",{children:C.tier?"".concat(C.tier,"s - ").concat(C.name," - ").concat(C.uid):"Category: ".concat(C.cat)})]})}),Object(h.jsxs)(f.a.Footer,{children:[Object(h.jsx)(m.a,{variant:"secondary",onClick:function(){D(null)},children:"Don't remove"}),Object(h.jsx)(m.a,{variant:"danger",onClick:function(){if(null===C||void 0===C?void 0:C.cat){if(!C.tier&&C.cat){var e=Object(s.a)({},n);return delete e[C.cat],i(e),void D(null)}C.uid&&(i(Object(s.a)(Object(s.a)({},n),{},Object(o.a)({},C.cat,Object(l.a)(n[C.cat].filter((function(e){return e.uid!==C.uid})))))),D(null))}},children:"Yes, do it."})]})]}),A&&H.length>0&&Object(h.jsxs)(f.a,{show:!0,backdrop:"static",keyboard:!1,children:[Object(h.jsx)(f.a.Header,{children:"Error encountered"}),Object(h.jsxs)(f.a.Body,{children:[Object(h.jsxs)(O.a,{variant:"danger",children:[H.length," error(s) encountered in these lines:"]}),Object(h.jsx)("div",{className:"import-error-log-container",children:H.map((function(e,t){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{className:"error-log-index unselectable",children:[t+1,"\xa0"]}),e]})}))})]}),Object(h.jsx)(f.a.Footer,{children:Object(h.jsx)(m.a,{variant:"secondary",onClick:function(){window.location.reload()},children:"OK"})})]}),U&&Object(h.jsxs)(f.a,{show:!0,children:[Object(h.jsx)(f.a.Header,{closeButton:!0,children:"New sub category"}),Object(h.jsx)(f.a.Body,{children:Object(h.jsx)(g.a.Control,{id:"new-subcat-input",placeholder:"Marvel Cinematic Universe",autoFocus:!0,onKeyUp:function(e){return p(e,"new-subcat-input-button")}})}),Object(h.jsx)(f.a.Footer,{children:Object(h.jsx)(m.a,{variant:"primary",id:"new-subcat-input-button",onClick:function(){var e=document.getElementById("new-subcat-input").value;e?(i(Object(s.a)(Object(s.a)({},n),{},Object(o.a)({},e,[]))),K(!1),x(""),I(0)):alert("Invalid category name")},children:"ADD"})})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),N()}},[[49,1,2]]]);
//# sourceMappingURL=main.560eda5f.chunk.js.map