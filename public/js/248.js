"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[248],{3248:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(9669),a=n.n(r),o=n(7294),i=n(9711),l=n(3379),c=n.n(l),d=n(2441),s={insert:"head",singleton:!1},u=(c()(d.Z,s),d.Z.locals||{}),g=n(5893);function h(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){l=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var b=function(t){var e=t.id,n=f((0,o.useState)([]),2),r=n[0],l=n[1],c=f((0,o.useState)(0),2),d=c[0],s=c[1],m=f((0,o.useState)(!1),2),p=m[0],b=m[1],x=f((0,o.useState)(!0),2),w=x[0],v=x[1],D=f((0,o.useState)(!1),2),A=D[0],y=D[1],Q=f((0,o.useState)(""),2),I=Q[0],j=Q[1];return(0,o.useEffect)((function(){var t=a().CancelToken.source();return A&&(b(!0),a().get("/api/view?page=".concat(d,"&skip=3"),{cancelToken:t.token}).then((function(t){l((function(e){return[].concat(h(e),h(t.data))})),v(t.data.length>0&&!(t.data.length<3)),s((function(t){return t+1})),b(!1),y(!1)})).catch((function(t){var e;y(!1),b(!1),401===(null===(e=t.response)||void 0===e?void 0:e.status)&&j("Something went wrong, please refresh your tab!")}))),function(){t.cancel()}}),[A]),(0,o.useEffect)((function(){var t=a().CancelToken.source();return a().get("/api/view?page=".concat(d,"&skip=3"),{cancelToken:t.token}).then((function(t){l((function(e){return[].concat(h(e),h(t.data))})),v(t.data.length>0&&!(t.data.length<3)),b(!1),s((function(t){return t+1})),y(!1)})).catch((function(t){var e;y(!1),b(!1),401===(null===(e=t.response)||void 0===e?void 0:e.status)&&j("Something went wrong, please refresh your tab!")})),function(){return t.cancel()}}),[]),(0,g.jsxs)("div",{className:u.parent,children:[(0,g.jsx)("div",{className:u.cont,children:r.length>0?(0,g.jsxs)("table",{className:u.table,children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{scope:"col",children:"#"}),(0,g.jsx)("th",{scope:"col",children:"File Name"}),(0,g.jsx)("th",{scope:"col",children:"Owner"}),(0,g.jsx)("th",{scope:"col",children:"Uploaded At"}),(0,g.jsx)("th",{})]})}),(0,g.jsx)("tbody",{children:r.map((function(t,n){return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:n+1}),(0,g.jsx)("td",{children:(0,g.jsxs)("a",{className:u.preview,href:"/api/file/".concat(encodeURIComponent(t.title)),children:[t.name,".",t.ext]})}),(0,g.jsxs)("td",{children:[t.owner," (",t.owner_id===e?"saya":"bukan saya",")"]}),(0,g.jsx)("td",{children:(0,g.jsx)("span",{className:u.date,children:new Date(t.created_at).toLocaleString()})}),(0,g.jsx)("td",{children:t.owner_id===e&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.rU,{to:"rename?id=".concat(encodeURIComponent(t.name+"."+t.ext)),className:u.rename,children:"Rename"}),(0,g.jsx)(i.rU,{to:"delete?id=".concat(encodeURIComponent(t.name+"."+t.ext)),className:u.del,children:(0,g.jsx)("svg",{className:u.svg,viewBox:"0 0 24 24",children:(0,g.jsx)("path",{fill:"currentColor",d:"M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"})})})]})})]},t.title)}))})]}):(0,g.jsx)(g.Fragment,{children:"There's no file!"})}),p&&(0,g.jsx)("p",{className:u.loading,children:"Loading..."}),I&&(0,g.jsx)("p",{className:u.error,children:I}),w&&(0,g.jsx)("div",{className:u.loadcont,children:(0,g.jsx)("a",{href:"/loadmore",onClick:function(t){t.preventDefault(),p||y(!0)},className:u.more,children:"load more"})})]})}},2441:function(t,e,n){var r=n(3645),a=n.n(r)()((function(t){return t[1]}));a.push([t.id,".Df2sGejOZ4K3d5z9HwUw7w\\=\\={-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;border-radius:.75rem;box-shadow:0 3px 3px -1px rgba(10,22,70,.1),0 0 1px 0 rgba(10,22,70,.06);color:#212121;font-size:14px;font-weight:300;letter-spacing:.1px;line-height:20px;margin:.75rem 0;padding:2rem}.hvcwpgNqMIROQJlDVhQgbA\\=\\=,.Df2sGejOZ4K3d5z9HwUw7w\\=\\={background:#fff;font-style:inherit!important;position:relative;width:100%}.hvcwpgNqMIROQJlDVhQgbA\\=\\=,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\={overflow-x:auto;z-index:inherit!important}.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\={background:#fff;border-collapse:collapse;white-space:nowrap;width:100%}.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>tbody>tr,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>tfoot>tr,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>thead>tr{transition:all .3s ease}.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>tbody>tr>td,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>tbody>tr>th,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>tfoot>tr>td,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>tfoot>tr>th,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>thead>tr>td,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>thead>tr>th{border-top:0;padding:16px;text-align:left;transition:all .3s ease;vertical-align:middle}.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>thead>tr>th{border-bottom:1px solid rgba(0,0,0,.12);color:#757575;font-size:.7em;font-weight:400;margin:0;text-transform:uppercase;vertical-align:bottom}.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>tbody>tr:hover td{background-color:#f9fafb}.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>caption+thead>tr:first-child>td,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>caption+thead>tr:first-child>th,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>colgroup+thead>tr:first-child>td,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>colgroup+thead>tr:first-child>th,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>thead:first-child>tr:first-child>td,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>thead:first-child>tr:first-child>th{border-top:0}.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\=>tbody+tbody{border-top:1px solid rgba(0,0,0,.12)}.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= .lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\={background-color:#fff}.AiDEHa6SAcPI2mWXxTdBfg\\=\\=,.lOaPJ6Aa4K8LD1IDn2T-7Q\\=\\= .RQZryKMWz1\\+7LCBIh1-Mdw\\=\\={border:0}.AiDEHa6SAcPI2mWXxTdBfg\\=\\=>tbody>tr>td,.AiDEHa6SAcPI2mWXxTdBfg\\=\\=>tbody>tr>th,.AiDEHa6SAcPI2mWXxTdBfg\\=\\=>tfoot>tr>td,.AiDEHa6SAcPI2mWXxTdBfg\\=\\=>tfoot>tr>th,.AiDEHa6SAcPI2mWXxTdBfg\\=\\=>thead>tr>td,.AiDEHa6SAcPI2mWXxTdBfg\\=\\=>thead>tr>th{border:0;border-bottom:1px solid #e0e0e0}.AiDEHa6SAcPI2mWXxTdBfg\\=\\=>thead>tr>th{border-bottom-width:2px}.KCIgg4mHg\\+itQSO9\\+lrQGA\\=\\={color:#a78bfa;text-decoration:none}.KCIgg4mHg\\+itQSO9\\+lrQGA\\=\\=:focus-within,.KCIgg4mHg\\+itQSO9\\+lrQGA\\=\\=:hover{text-decoration:underline}.KCIgg4mHg\\+itQSO9\\+lrQGA\\=\\=:focus{color:#7c3aed;text-decoration:underline}.HkoN9Y-8-zv9x9mkakKzhA\\=\\={font-size:.85rem}.HkoN9Y-8-zv9x9mkakKzhA\\=\\=,._5BgQ5ucMzv\\+E6lniYhmluw\\=\\={position:relative}._5BgQ5ucMzv\\+E6lniYhmluw\\=\\={-webkit-align-items:flex-start;align-items:flex-start;background:transparent;border:.75px solid rgba(139,92,246,.3);border-radius:.4rem;color:#a78bfa;display:inline-block;-webkit-justify-content:center;justify-content:center;margin-right:.25rem;outline:none;padding:.4rem .75rem;text-align:center;text-transform:lowercase;transition:.2s ease;vertical-align:middle}._5BgQ5ucMzv\\+E6lniYhmluw\\=\\=:focus-within,._5BgQ5ucMzv\\+E6lniYhmluw\\=\\=:hover{background:rgba(139,92,246,.1);border:.75px solid rgba(139,92,246,.5)}._5BgQ5ucMzv\\+E6lniYhmluw\\=\\=:focus{background:rgba(139,92,246,.2)}.g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\={-webkit-align-items:flex-start;align-items:flex-start;background:transparent;border:none;border-radius:100rem;color:rgba(139,92,246,.7);display:inline-block;-webkit-justify-content:center;justify-content:center;margin-left:.25rem;outline:none;padding:.5rem;position:relative;text-align:center;transition:.2s ease;vertical-align:middle}.g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\= .rtoGMz7X0j\\+hdKaZSyrjvA\\=\\={display:block;height:24px;margin:auto;width:24px}.g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\=:focus-within,.g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\=:hover{background:#e5e7eb}.g3ny0-zu\\+J9Ia4-P-KnxUg\\=\\=:focus{background:#d1d5db}.jQXywVReU1NTcdmZ5Ne9Jw\\=\\={display:block}.jQXywVReU1NTcdmZ5Ne9Jw\\=\\=,.JErLTaW7wIHxlXBRz4pKPA\\=\\={text-align:center!important}.JErLTaW7wIHxlXBRz4pKPA\\=\\={margin:1rem 0 0}.qjZvPxCkfa-7juaouKu4ug\\=\\={color:#ef4444;margin:.5rem 0 0}.qjZvPxCkfa-7juaouKu4ug\\=\\=,.qDV9vg0m\\+OcQn9Ci56u5LQ\\=\\={text-align:center!important}.qDV9vg0m\\+OcQn9Ci56u5LQ\\=\\={background:transparent;border:0;border:.75px solid rgba(139,92,246,.3);border-radius:.4rem;color:#a78bfa;cursor:pointer;display:inline-block;font-family:inherit;font-size:1rem;line-height:inherit!important;margin-top:.5rem;outline:none;padding:.4rem .75rem;position:relative;text-transform:lowercase;transition:.2s ease;width:-webkit-max-content;width:-moz-max-content;width:max-content;z-index:inherit}.qDV9vg0m\\+OcQn9Ci56u5LQ\\=\\=:focus-within,.qDV9vg0m\\+OcQn9Ci56u5LQ\\=\\=:hover{background:rgba(139,92,246,.1);border:.75px solid rgba(139,92,246,.5)}.qDV9vg0m\\+OcQn9Ci56u5LQ\\=\\=:focus{background:rgba(139,92,246,.2)}",""]),a.locals={parent:"Df2sGejOZ4K3d5z9HwUw7w==",cont:"hvcwpgNqMIROQJlDVhQgbA==",table:"lOaPJ6Aa4K8LD1IDn2T-7Q==","table-bordered":"AiDEHa6SAcPI2mWXxTdBfg==","no-border":"RQZryKMWz1+7LCBIh1-Mdw==",preview:"KCIgg4mHg+itQSO9+lrQGA==",date:"HkoN9Y-8-zv9x9mkakKzhA==",rename:"_5BgQ5ucMzv+E6lniYhmluw==",del:"g3ny0-zu+J9Ia4-P-KnxUg==",svg:"rtoGMz7X0j+hdKaZSyrjvA==",loadcont:"jQXywVReU1NTcdmZ5Ne9Jw==",loading:"JErLTaW7wIHxlXBRz4pKPA==",error:"qjZvPxCkfa-7juaouKu4ug==",more:"qDV9vg0m+OcQn9Ci56u5LQ=="},e.Z=a}}]);