(this["webpackJsonptykhe-companion"]=this["webpackJsonptykhe-companion"]||[]).push([[0],{62:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a,i,r=n(0),c=n.n(r),o=n(24),l=n.n(o),s=(n(62),n(63),n(27)),d=n(15),u=n(9),b=n(13);n(64);!function(e){e.None="None",e.Tier5="Tier5",e.Tier4="Tier4",e.Tier3="Tier3",e.Tier2="Tier2",e.Tier1="Tier1"}(a||(a={})),function(e){e.NameFirst="sortCardByNameAscTierDiscUIDAsc",e.TierFirst="sortCardByTierDiscNameAscUIDAsc"}(i||(i={}));var j=/(^:[1-5](star128|_star):\W*-\W*(.+)\W*-\W*[0-9]{4}$)|(^[1-5](s|star)?[\s-]{1}(.+)[\s-]{1}[0-9]{4}$)/,v=function(e,t){return e.name===t.name?e.tier>t.tier?-1:e.tier<t.tier?1:e.uid-t.uid:e.name<t.name?-1:1},O=function(e){return function(t,n){switch(e){case i.TierFirst:return function(e,t){return e.tier===t.tier?e.name<t.name?-1:e.name>t.name?1:e.uid-t.uid:e.tier>t.tier?-1:1}(t,n);case i.NameFirst:default:return v(t,n)}}},f=function(e){console.log(e);var t=0,n=0,a="";if(":"===(null===e||void 0===e?void 0:e[0])){if(!/^:[0-5](star128|_star):/.test(e))return null;t=Number(e[1]);var i=Object(d.a)(e.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0}));n=Number(i[i.length-1]),"-"===(a=e.slice(e.indexOf(i[1]),e.indexOf(n+"")-1).trim())[a.length-1]&&(a=a.slice(0,a.length-2).trim())}else{var r;if(!/^[1-5][^0-9]+/.test(e))return null;var c=[];c=Object(d.a)(e.split("-").map((function(e){return e.trim()}))).filter((function(e){return e.length>0}));t=Number(null===(r=c[0].match(/\d+/g))||void 0===r?void 0:r[0])||0,n=Number(c[c.length-1]),"-"===(a=e.slice(e.indexOf(c[1]),e.indexOf(n+"")-1).trim())[a.length-1]&&(a=a.slice(0,a.length-2).trim()),m(t,a,n)||(c=Object(d.a)(e.split(" ").map((function(e){return e.trim()}))).filter((function(e){return e.length>0})),t=Number(e[0]),n=Number(c[c.length-1]),a=c.slice(1,c.length-1).join(" "))}return m(t,a,n)?{tier:t,name:a,uid:n}:null},m=function(e,t,n){var a=n+"";return!(!e||!t||!n||e>5||e<1||t.length<=0||a.includes(".")||a.includes(",")||4!==a.length||n<1e3)},p=function(e,t){var n;"Enter"===e.key&&(null===(n=document.getElementById(t))||void 0===n||n.click())},h=n(10),g=n(56),x=n(21),y=n(32),N=n(1),k=function(e){var t=e.category,n=e.invData,a=e.sort,i=e.editingUID,c=e.editingCategory,o=e.updateInvData,l=e.updateCreatingNewCat,m=e.updateEditingUID,h=e.updateRemoveInfo,g=e.updateEditingCategory,x=Object(r.useState)(""),y=Object(b.a)(x,2),k=y[0],I=y[1];Object(r.useEffect)((function(){document.onkeyup=function(e){var t;"Escape"===e.key&&(g(""),I(""),null===(t=document.getElementById(i+""))||void 0===t||t.style.setProperty("text-decoration","none"),m(0))}}),[i,m,g]);var S=function(e){var t,n,a,i,r;if(e.persist(),"B"!==e.target.tagName){var c=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat,o=Number(null===(a=e.target)||void 0===a||null===(i=a.dataset)||void 0===i?void 0:i.uid);if(c&&o){var l=document.getElementById(o+"");null===l||void 0===l||l.style.setProperty("text-decoration","line-through"),g(c),m(o),I((null===l||void 0===l||null===(r=l.firstElementChild)||void 0===r?void 0:r.innerHTML)||"")}}else e.target.parentElement.click()},C=function(e){var t,a,i,r;if(e.persist(),"B"!==e.target.tagName){var c=null===(t=e.target)||void 0===t||null===(a=t.dataset)||void 0===a?void 0:a.cat,o=Number(null===(i=e.target)||void 0===i||null===(r=i.dataset)||void 0===r?void 0:r.uid);if(c&&o){var l=n[c].find((function(e){return e.uid===o}));h(Object(u.a)({cat:c},l))}}else e.target.parentElement.click()};return Object(N.jsxs)("div",{className:"cat",children:[Object(N.jsxs)("div",{className:"cat-header",children:[Object(N.jsx)("b",{title:n[t].length,children:t}),Object(N.jsx)("span",{className:"abs-right-button",title:"Add a new card","data-cat":t,onClick:function(e){var t,n;e.persist();var a=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat;g(a),I("")},children:"+"})]}),Object(N.jsxs)("div",{className:"cat-body",children:[c===t&&Object(N.jsxs)("div",{id:"new-card-form",children:[Object(N.jsxs)("div",{className:"card-format",children:["?",Object(N.jsxs)("span",{className:"card-format-info",children:["Copy from inv:",Object(N.jsx)("br",{}),Object(N.jsx)("b",{children:":2star128: - Hawkeye (Kate Bishop) - 2333"}),Object(N.jsx)("br",{}),"or manually insert",Object(N.jsx)("br",{}),Object(N.jsx)("b",{children:"2s Hawkeye (Kate Bishop) 2333"})]})]}),Object(N.jsx)("input",{id:"new-card-input-box",className:"new-card-input-box",type:"text",autoFocus:!0,value:k,onChange:function(e){I(e.target.value)},onKeyUp:function(e){return p(e,"new-card-input-submit-button")},placeholder:"2s Hawkeye (Kate Bishop) 2333"}),Object(N.jsx)("input",{type:"button",id:"new-card-input-submit-button",value:"\u2713",onClick:function(e){var t,r=(k||"").replace(":lock:","").trim();if("JSON"===r)return null===(t=document.getElementById("downloadJSON"))||void 0===t||t.click(),g(""),m(0),I(""),void e.preventDefault();if("CLEAR"===r)return localStorage.clear(),void window.location.reload();if("CREATE CAT"===r)return l(!0),void e.preventDefault();if("DELETE CAT"===r)return h({cat:c,tier:0,name:"",uid:0}),void e.preventDefault();if(j.test(r)){var b=f(r);if(b){if(i){var p,x=n[c].find((function(e){return e.uid===i}));(null===b||void 0===b?void 0:b.name)!==(null===x||void 0===x?void 0:x.name)&&alert("Attention: you input a different card name, the old card will be replaced."),o(Object(u.a)(Object(u.a)({},n),{},Object(s.a)({},c,[].concat(Object(d.a)(n[c].filter((function(e){return e.uid!==i}))),[Object(u.a)({},b)]).sort(v)))),null===(p=document.getElementById(i+""))||void 0===p||p.style.removeProperty("text-decoration")}else{if(Object.keys(n).some((function(e){return n[e].some((function(e){return e.uid===(null===b||void 0===b?void 0:b.uid)}))})))return void alert("Duplicate UID, please check your data.");o(Object(u.a)(Object(u.a)({},n),{},Object(s.a)({},c,[].concat(Object(d.a)(n[c]),[Object(u.a)({},b)]).sort(O(a)))))}m(0),I(""),g(""),e.preventDefault()}else alert("Non valid input, abort! abort!")}else alert("Non valid input, abort! abort!")}})]}),Object(N.jsx)("div",{className:"hide-overflow",children:n[t].sort(O(a)).map((function(e,a){var i,c,o,l,s,d,u,b,j,v,O=(null===(i=n[t])||void 0===i||null===(c=i[a-1])||void 0===c?void 0:c.name)===e.name,f=(null===(o=n[t])||void 0===o||null===(l=o[a-1])||void 0===l?void 0:l.tier)===e.tier&&(null===(s=n[t])||void 0===s||null===(d=s[a-1])||void 0===d?void 0:d.name)===e.name||(null===(u=n[t])||void 0===u||null===(b=u[a+1])||void 0===b?void 0:b.name)===e.name&&(null===(j=n[t])||void 0===j||null===(v=j[a+1])||void 0===v?void 0:v.tier)===e.tier;return Object(N.jsxs)(r.Fragment,{children:[!O&&Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"card-line star".concat(e.tier," ").concat(f?"mergeable":"non-mergeable"),id:e.uid+"",children:[Object(N.jsx)("span",{children:"".concat(e.tier,"s - ").concat(e.name," - ").concat(e.uid)}),Object(N.jsx)("span",{className:"edit-card-button unselectable","data-cat":t,"data-uid":e.uid,onClick:S,children:Object(N.jsx)("b",{children:"\u270e"})}),Object(N.jsx)("span",{className:"delete-card-button unselectable","data-cat":t,"data-uid":e.uid,onClick:C,children:Object(N.jsx)("b",{children:"\xd7"})})]})]},e.uid)}))})]})]})},I=n(40),S=n(57),C=n(17),w=function(e){var t=Object(r.useState)({}),n=Object(b.a)(t,2),a=n[0],i=n[1];Object(r.useEffect)((function(){var t={},n=function(n){var a={},i=e.invData[n];i.forEach((function(e,t){if(0!==t){var n=i[t-1];if(e.name===n.name&&e.tier===n.tier){var r,c=(null===(r=a[e.name])||void 0===r?void 0:r.filter((function(e){return e.uid!==n.uid})))||[];a[e.name]=[].concat(Object(d.a)(c),[n,e])}}})),Object.keys(a).length>0&&(t[n]=a)};for(var a in e.invData)n(a);i(t)}),[e.invData]);var c=function(t){t.persist();var n=t.target.dataset,r=n.cat,c=n.name,o=n.pair,l=n.tier,s=o.split("-").map((function(e){return Number(e)}));e.handleMerge(r,s);var b=a[r][c].filter((function(e){return!s.includes(e.uid)}));b.length<2&&(b=[]);var j,O={tier:Number(l)+1,name:c,uid:s[0]},f=e.invData[r].find((function(e){return e.name===c&&e.tier===Number(l)+1}));f&&(j=b).unshift.apply(j,Object(d.a)([f,O].sort(v)));var m=Object(u.a)({},a);b.length?m[r][c]=b:(delete m[r][c],0===Object.keys(m[r]).length&&delete m[r]);var p=document.getElementById("merge-".concat(c));p&&(p.checked=!1),i(m)};return Object(N.jsxs)(h.a,{show:!0,onHide:e.closeModal,className:"mergeables-modal",children:[Object(N.jsx)(h.a.Header,{closeButton:!0,children:"Mergeable cards"}),Object(N.jsx)(h.a.Body,{children:Object(N.jsxs)("div",{children:[0===Object.keys(a).length&&Object(N.jsx)("div",{children:"No mergeable cards, well done!"}),Object.keys(a).map((function(e,t){return Object(N.jsxs)(r.Fragment,{children:[0!==t&&Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{style:{fontWeight:"bold",textDecoration:"underline"},children:e}),Object.keys(a[e]).map((function(t){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:Object(N.jsxs)(y.a.Check,{type:"checkbox",children:[Object(N.jsx)(y.a.Check.Input,{type:"checkbox",id:"merge-".concat(t),onChange:c,"data-cat":e,"data-tier":a[e][t][0].tier,"data-name":t,"data-pair":"".concat(a[e][t][0].uid,"-").concat(a[e][t][1].uid)}),Object(N.jsx)(y.a.Check.Label,{children:Object(N.jsxs)("i",{children:["!m m, ",a[e][t][0].uid,","," ",a[e][t][1].uid]})})]})}),Object(N.jsx)("div",{children:a[e][t].map((function(e){return Object(N.jsx)("div",{className:"card-line star".concat(e.tier),id:"mergeable-"+e.uid,children:Object(N.jsx)("span",{children:"".concat(e.tier,"s - ").concat(e.name," - ").concat(e.uid)})},"mergeable-".concat(e.uid))}))})]},"mergeable-".concat(e,"-").concat(t))}))]})]},"mergeable-"+e)}))]})}),Object(N.jsx)(h.a.Footer,{children:Object(N.jsx)(x.a,{variant:"primary",id:"new-subcat-input-button",onClick:e.closeModal,children:"Close"})})]})},E=function(){var e=Object(r.useState)(),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),l=Object(b.a)(o,2),j=l[0],v=l[1],E=Object(r.useState)(0),D=Object(b.a)(E,2),T=D[0],B=D[1],F=Object(r.useState)(null),H=Object(b.a)(F,2),R=H[0],J=H[1],M=Object(r.useState)([]),A=Object(b.a)(M,2),q=A[0],P=A[1],L=Object(r.useState)(!1),U=Object(b.a)(L,2),W=U[0],K=U[1],X=Object(r.useState)(!1),$=Object(b.a)(X,2),G=$[0],Q=$[1],V=Object(r.useState)(!1),z=Object(b.a)(V,2),Z=z[0],_=z[1],Y=Object(r.useState)(a.None),ee=Object(b.a)(Y,2),te=ee[0],ne=ee[1],ae=Object(r.useState)(i.NameFirst),ie=Object(b.a)(ae,2),re=ie[0],ce=ie[1],oe=Object(r.useCallback)((function(e){var t=localStorage.getItem("binId");if(t){var n=new XMLHttpRequest;n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(localStorage.setItem("last-fetch",(new Date).valueOf()+""),console.log(JSON.parse(n.response).metadata?"Sync success":"Sync error"))},n.open("PUT","https://api.jsonbin.io/v3/b/"+t,!0),n.setRequestHeader("Content-Type","application/json"),n.setRequestHeader("X-Master-Key","$2b$10$ckVgM1xPqSGsv8uaycGJNuOEQRN74Rq3HMCQLNpqmKFT37bAZprzC"),n.send(e?JSON.stringify(e):localStorage.getItem("inv"))}else{var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){var e=JSON.parse(a.response).metadata.id;if(!e)return;localStorage.setItem("binId",e),localStorage.setItem("last-fetch",(new Date).valueOf()+""),alert("Save this id so you can restore your inv in future: "+JSON.parse(a.response).metadata.id)}},a.open("POST","https://api.jsonbin.io/v3/b",!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("X-BIN-PRIVATE","false"),a.setRequestHeader("X-Bin-Versioning","false"),a.setRequestHeader("X-Master-Key","$2b$10$ckVgM1xPqSGsv8uaycGJNuOEQRN74Rq3HMCQLNpqmKFT37bAZprzC"),a.send(e?JSON.stringify(e):localStorage.getItem("inv"))}}),[]),le=Object(r.useCallback)((function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE){var n=JSON.parse(t.response).record;if("object"!==typeof n)return alert("Invalid data, please check your backup id or upload an inv file."),document.getElementById("backup-id-input").value="",void localStorage.clear();if(!Object.keys(n).every((function(e){return Array.isArray(n[e])&&n[e].every((function(e){return m(e.tier,e.name,e.uid)}))})))return alert("Invalid data, please check your backup id or upload an inv file."),document.getElementById("backup-id-input").value="",void localStorage.clear();var a=localStorage.getItem("inv");a?JSON.stringify(n)!==a&&(alert("Discrepancy remote vs local, keeping remote for now."),localStorage.setItem("inv",JSON.stringify(n))):localStorage.setItem("inv",JSON.stringify(n)),localStorage.setItem("last-fetch",(new Date).valueOf()+""),localStorage.setItem("binId",e),window.location.reload()}},t.open("GET","https://api.jsonbin.io/v3/b/".concat(e,"/latest"),!0),t.send()}),[]);Object(r.useEffect)((function(){var e=localStorage.getItem("inv"),t=localStorage.getItem("binId"),n=Number(localStorage.getItem("last-fetch"))||0,a=(new Date).valueOf()-n<6e4,i=null!==e,r=null!==t;if(r&&a&&i)c(JSON.parse(e));else if(i&&!r){var o=JSON.parse(e);c(o),oe(o)}else r&&le(t)}),[oe,le]),Object(r.useEffect)((function(){document.onkeyup=function(e){var t;"Escape"===e.key&&(null===(t=document.getElementById(T+""))||void 0===t||t.style.setProperty("text-decoration","none"),B(0))}}),[T]),Object(r.useEffect)((function(){n&&(localStorage.setItem("inv",JSON.stringify(n)),localStorage.getItem("binId")&&oe(n))}),[n,oe]);var se=function(e){e&&c(e)},de=function(e){v(e)},ue=function(e){B(e)},be=function(e){Q(e)},je=function(e){J(e)},ve=function(){_(!Z)},Oe=0,fe={tier1:0,tier2:0,tier3:0,tier4:0,tier5:0};for(var me in n){Oe+=n[me].length;for(var pe=0;pe<n[me].length;pe++)switch(n[me][pe].tier){case 1:fe.tier1++;break;case 2:fe.tier2++;break;case 3:fe.tier3++;break;case 4:fe.tier4++;break;case 5:fe.tier5++}}var he=function(e){var t,n;e.persist();var a=null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.sort;a!==re&&ce(a)};return Object(N.jsxs)(N.Fragment,{children:[n&&Object(N.jsxs)(I.a,{bg:"dark",variant:"dark",fixed:"top",collapseOnSelect:!0,id:"header",children:[Object(N.jsxs)(I.a.Brand,{children:["TC\xa0",Object(N.jsx)("span",{className:"cards-count",children:Oe})]}),Object(N.jsx)(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsxs)(I.a.Collapse,{id:"basic-navbar-nav",children:[Object(N.jsxs)(S.a,{className:"mr-auto",children:[Object(N.jsxs)(C.a,{title:"Sort",id:"sort-dropdown",children:[Object(N.jsx)(C.a.Item,{"data-sort":i.NameFirst,active:re===i.NameFirst,onClick:he,children:"by Name"}),Object(N.jsx)(C.a.Item,{"data-sort":i.TierFirst,active:re===i.TierFirst,onClick:he,children:"by Star"}),Object(N.jsx)(C.a.Item,{disabled:!0,children:"by UID (WIP)"})]}),Object(N.jsxs)(C.a,{title:"Filter",id:"filter-dropdown",children:[Object(N.jsx)(C.a.Item,{active:te===a.None,onClick:function(e){e.persist();var t=e.target.dataset.filter;t!==te&&ne(a.None)},children:"No Filter"}),Object(N.jsx)(C.a.Divider,{}),Object(N.jsxs)(C.a.Item,{disabled:!0,children:["5 star (",fe.tier5,") (WIP)"]}),Object(N.jsxs)(C.a.Item,{disabled:!0,children:["4 star (",fe.tier4,") (WIP)"]}),Object(N.jsxs)(C.a.Item,{disabled:!0,children:["3 star (",fe.tier3,") (WIP)"]}),Object(N.jsxs)(C.a.Item,{disabled:!0,children:["2 star (",fe.tier2,") (WIP)"]}),Object(N.jsxs)(C.a.Item,{disabled:!0,children:["1 star (",fe.tier1,") (WIP)"]})]})]}),Object(N.jsx)(x.a,{variant:"outline-warning",onClick:ve,children:"Show mergeables"})]})]}),Object(N.jsxs)("div",{className:"main-container",children:[n?Object.keys(n).sort().map((function(e){return Object(N.jsx)(k,{category:e,filter:te,invData:n,sort:re,editingCategory:j,editingUID:T,updateInvData:se,updateRemoveInfo:je,updateEditingUID:ue,updateCreatingNewCat:be,updateEditingCategory:de},e)})):Object(N.jsxs)("div",{className:"file-input-container",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"text-align-left",children:"Hi, please upload inventory text file."}),Object(N.jsx)("br",{}),Object(N.jsx)("input",{type:"file",name:"initial-inv-input",id:"initial-inv-input",accept:"text/plain",onChange:function(e){var t,n,a=null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n[0];if(console.log(a),a){var i=new FileReader;i.readAsText(a,"UTF-8"),i.onload=function(e){var t,n=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.result,a={},i="",r=n.split("\n").map((function(e){return e.replace(" :lock:","")})),c=0,o=[];r.forEach((function(e){if(e.startsWith(":")||/^[0-9]/.test(e)){var t=f(e.trim());if(!i||!t)return c++,void o.push(e);a[i].push(Object(u.a)({},t))}else if(e.length>1){var n=e.trim();n!==i&&(a[n]||(a[n]=[])),i=n}}));var l={},s=Object(d.a)(Object.keys(a));0===s.length?(c++,o.push("No lines found.")):(s.forEach((function(e){if(0===a[e].length)return delete a[e],void o.push(e);l[e]=a[e].sort(O(re))})),localStorage.setItem("inv",JSON.stringify(l))),c>0?(P(o),K(!0)):window.location.reload()},i.onerror=function(e){alert("error")}}}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"text-align-left",children:"Or input the backup id:"}),Object(N.jsxs)("div",{className:"backup-id-input-container",children:[Object(N.jsx)(y.a.Control,{placeholder:"607b400f0ed6f819beae5284",id:"backup-id-input",onKeyUp:function(e){return p(e,"backup-id-input-button")}}),"\xa0",Object(N.jsx)(x.a,{id:"backup-id-input-button",onClick:function(e){var t,n=null===(t=document.getElementById("backup-id-input"))||void 0===t?void 0:t.value;n?le(n):alert("Invalid input, please check your backup id or upload an inv file.")},children:"Enter"})]})]})]}),Object(N.jsx)("a",{id:"downloadJSON",href:"data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n)),download:"inv.json",style:{display:"none"},children:"DOWNLOAD JSON"}),R&&Object(N.jsxs)(h.a,{show:!0,backdrop:"static",keyboard:!1,children:[Object(N.jsx)(h.a.Header,{children:"Are you sure?"}),Object(N.jsx)(h.a.Body,{children:Object(N.jsxs)(g.a,{variant:"danger",children:["Are you sure you want to remove this?",Object(N.jsx)("br",{}),Object(N.jsx)("b",{children:R.tier?"".concat(R.tier,"s - ").concat(R.name," - ").concat(R.uid):"Category: ".concat(R.cat)})]})}),Object(N.jsxs)(h.a.Footer,{children:[Object(N.jsx)(x.a,{variant:"secondary",onClick:function(){J(null)},children:"Don't remove"}),Object(N.jsx)(x.a,{variant:"danger",onClick:function(){var e;if(null===R||void 0===R?void 0:R.cat){if(!R.tier&&R.cat){var t=Object(u.a)({},n);return delete t[R.cat],c(t),void J(null)}R.uid&&(c(Object(u.a)(Object(u.a)({},n),{},Object(s.a)({},R.cat,Object(d.a)((null===n||void 0===n||null===(e=n[R.cat])||void 0===e?void 0:e.filter((function(e){return e.uid!==R.uid})))||[])))),J(null))}},children:"Yes, do it."})]})]}),W&&q.length>0&&Object(N.jsxs)(h.a,{show:!0,backdrop:"static",keyboard:!1,children:[Object(N.jsx)(h.a.Header,{children:"Error encountered"}),Object(N.jsxs)(h.a.Body,{children:[Object(N.jsxs)(g.a,{variant:"danger",children:[q.length," error(s) encountered in these lines:"]}),Object(N.jsx)("div",{className:"import-error-log-container",children:q.map((function(e,t){return Object(N.jsxs)("div",{children:[Object(N.jsxs)("span",{className:"error-log-index unselectable",children:[t+1,"\xa0"]}),e]})}))})]}),Object(N.jsx)(h.a.Footer,{children:Object(N.jsx)(x.a,{variant:"secondary",onClick:function(){window.location.reload()},children:"OK"})})]}),G&&Object(N.jsxs)(h.a,{show:!0,children:[Object(N.jsx)(h.a.Header,{closeButton:!0,children:"New sub category"}),Object(N.jsx)(h.a.Body,{children:Object(N.jsx)(y.a.Control,{id:"new-subcat-input",placeholder:"Marvel Cinematic Universe",autoFocus:!0,onKeyUp:function(e){return p(e,"new-subcat-input-button")}})}),Object(N.jsx)(h.a.Footer,{children:Object(N.jsx)(x.a,{variant:"primary",id:"new-subcat-input-button",onClick:function(){var e=document.getElementById("new-subcat-input").value;e?(c(Object(u.a)(Object(u.a)({},n),{},Object(s.a)({},e,[]))),Q(!1),v(""),B(0)):alert("Invalid category name")},children:"ADD"})})]}),Z&&Object(N.jsx)(w,{invData:n,handleMerge:function(e,t){var a,i,r=null===n||void 0===n||null===(a=n[e])||void 0===a?void 0:a.find((function(e){return e.uid===t[0]}));if(r){var o=[].concat(Object(d.a)((null===n||void 0===n||null===(i=n[e])||void 0===i?void 0:i.filter((function(e){return!t.includes(e.uid)})))||[]),[Object(u.a)(Object(u.a)({},r),{},{tier:r.tier+1})]).sort(O(re));c(Object(u.a)(Object(u.a)({},n),{},Object(s.a)({},e,o)))}},closeModal:ve})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};l.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(E,{})}),document.getElementById("root")),D()}},[[70,1,2]]]);
//# sourceMappingURL=main.70ca7805.chunk.js.map