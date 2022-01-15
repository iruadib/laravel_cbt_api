"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[347],{3347:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(7294),a=n(3379),i=n.n(a),o=n(3586),l={insert:"head",singleton:!1},s=(i()(o.Z,l),o.Z.locals||{}),c=n(9669),u=n.n(c),f=n(4332),d=n(2023),m=n(374),p=n(8151),g={insert:"head",singleton:!1},h=(i()(p.Z,g),p.Z.locals||{}),b=n(5893);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{type:"string",duration:.15,damping:35,stiffness:500}},exit:{y:"100vh",opacity:0}},y=function(e){var t=e.handleClose,n=e.open,a=e.handleImg,i=(0,r.useRef)(null),o=w((0,r.useState)(null),2),l=o[0],s=o[1],c=w((0,r.useState)(""),2),p=c[0],g=c[1],v=w((0,r.useState)(0),2),y=v[0],A=v[1],j=w((0,r.useState)(!1),2),k=j[0],C=j[1],S=w((0,r.useState)([]),2),I=S[0],N=S[1],q=w((0,r.useState)(""),2),O=q[0],P=q[1],E=function(e){e.preventDefault(),e.stopPropagation()};return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(f.M,{initial:!1,exitBeforeEnter:!0,onExitComplete:function(){return null},children:n&&(0,b.jsx)(m.Z,{onClick:t,children:(0,b.jsx)(d.E.div,{onClick:function(e){return e.stopPropagation()},className:h.modal,variants:x,initial:"hidden",animate:"visible",exit:"exit",children:(0,b.jsx)("div",{className:h.card,children:(0,b.jsx)("form",{action:"/".concat(String.fromCharCode(65+Math.floor(26*Math.random()))+Date.now()+901*Math.random()),method:"post",onSubmit:function(e){e.preventDefault(),C(!0);var t=new FormData;t.append("profile",l),u().post("/api/profile",t,{onUploadProgress:function(e){var t=e.loaded,n=e.total,r=Math.round(t/n*100);A(r<100?r:99)}}).then((function(e){A(100),P("Image saved!"),a(e.data.message)})).catch((function(e){return 400==e.response.status?(A(99),N(e.response.data.profile)):N(["Something went wrong, please try again!"])}))},children:(0,b.jsxs)("div",{className:h.card,children:[(0,b.jsx)("p",{className:h.title,children:"Upload Profile"}),(0,b.jsxs)("div",{className:h.drag,onDrop:function(e){if(E(e),C(!1),N([]),P(""),A(0),e.dataTransfer.files[0]){var t=new DataTransfer;t.items.add(e.dataTransfer.files[0]);var n=t.files[0].name;if(n!==p){var r=t.files[0];s(r),g(n)}else N(["File already selected!"])}else N(["Something went wrong, please try again"])},onDragEnter:E,onDragOver:E,children:[(0,b.jsx)("img",{src:"/img/upload_vector.svg",alt:"",className:h.img}),(0,b.jsx)("input",{type:"file",onChange:function(e){if(E(e),C(!1),N([]),P(""),A(0),e.currentTarget.value&&e.currentTarget.files[0]){var t=e.currentTarget.value.replace(/C:\\fakepath\\/i,"");if(t!==p){var n=e.currentTarget.files[0];s(n),g(t)}else N(["File already selected!"])}else N(["Something went wrong, please try again"])},ref:i,accept:"image/*"}),(0,b.jsx)("div",{children:(0,b.jsx)("p",{onClick:function(e){e.preventDefault(),i.current.click()},className:h.click,children:"select an image"})})]}),p&&(0,b.jsxs)("p",{className:h.desc,children:[p&&(0,b.jsx)("span",{className:h.val,children:p}),k&&(0,b.jsxs)(b.Fragment,{children:[" ",(0,b.jsxs)("span",{className:h.progress,children:["(",y,"%)"]})]})]}),(0,b.jsx)("button",{type:"submit",className:h.btn,children:"Submit"}),(0,b.jsx)("button",{type:"button",onClick:t,className:h.back,children:"close"}),O&&(0,b.jsx)("p",{className:h.msg,children:O}),I.length>0&&(0,b.jsx)("p",{className:h.error,children:I.map((function(e,t){return t+1===I.length?(0,b.jsx)("span",{children:e}):(0,b.jsxs)("span",{children:[e,", "]})}))})]})})})})})})})},A=n(9711),j=n(6974),k=n(3198),C={insert:"head",singleton:!1},S=(i()(k.Z,C),k.Z.locals||{}),I=n(3233);n(1955);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function(e){var t=e.handleOpen,n=e.img,a=e.handleImg,i=N((0,r.useState)(""),2),o=i[0],l=i[1],s=N((0,r.useState)([]),2),c=s[0],f=s[1],d=N((0,r.useState)(""),2),m=d[0],p=d[1];(0,j.s0)();(0,r.useEffect)((function(){o&&setTimeout((function(){l("")}),5e3),c.length>0&&setTimeout((function(){f([])}),5e3)}),[o,c]),(0,r.useEffect)((function(){var e=new AbortController;return u().get("/api/profile").then((function(e){return p(e.data.name),a(e.data.message)})).catch((function(e){if(404===e.response.status)return p(e.response.data.name),a("default.png")})),function(){e.abort()}}),[]);return(0,b.jsxs)("div",{className:S.parent,children:[(0,b.jsx)("div",{className:I.Z["col-12"],children:(0,b.jsxs)("div",{className:S.cont,children:[n&&m&&(0,b.jsx)("img",{alt:"".concat(m,"'s Profile"),src:"storage/profile/".concat(n),className:S.upload}),(0,b.jsx)("div",{onClick:t,className:S.edit,title:"Edit Your Photo",children:(0,b.jsx)("span",{children:"Edit Profile"})})]})}),(0,b.jsx)("div",{className:"".concat(I.Z["col-12"]," ").concat(S.name),children:(0,b.jsx)("span",{children:m})}),(0,b.jsx)("div",{className:"".concat(S.action," ").concat(I.Z["col-12"]),children:(0,b.jsx)(A.rU,{to:"/delete",className:S.btn,onClick:function(e){e.preventDefault(),f([]),l(""),u().delete("/api/profile").then((function(e){a("default.png"),l("Image has been deleted!")})).catch((function(e){f([e.response.data.message])}))},children:"Delete Profile"})}),o&&(0,b.jsx)("p",{className:S.msg,children:o}),c.length>0&&(0,b.jsx)("p",{className:S.error,children:c.map((function(e,t){return t+1===c.length?(0,b.jsx)("span",{children:e}):(0,b.jsxs)("span",{children:[e,", "]})}))})]})},P=n(6574);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=(0,r.lazy)((function(){return n.e(248).then(n.bind(n,3248))})),L=function(e){var t=e.id,n=E((0,r.useState)(!1),2),a=n[0],i=n[1],o=E((0,r.useState)(""),2),l=o[0],c=o[1],u=function(e){return c(e)};(0,r.useEffect)((function(){var e=!0;return e&&(document.title="Dashboard | React App"),function(){e=!1}}),[]);var f=function(){return i(!1)};return(0,b.jsxs)("div",{className:s.parent,children:[(0,b.jsx)(O,{handleOpen:a?f:function(){return i(!0)},handleImg:u,img:l}),(0,b.jsx)(y,{handleClose:f,open:a,handleImg:u}),(0,b.jsx)(r.Suspense,{fallback:(0,b.jsx)(P.Z,{}),children:(0,b.jsx)(z,{id:t})})]})}},8151:function(e,t,n){var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".zkCewKKS6NQiK\\+ul8pALOw\\=\\={word-wrap:break-word;background:#fff;background-clip:border-box;border:0;border-radius:.75rem;box-shadow:0 3px 3px -1px rgba(10,22,70,.1),0 0 1px 0 rgba(10,22,70,.06);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:clamp(50%,300px);margin:auto;padding:2rem;width:clamp(50%,700px,90%)}.EE2X3vXz7WbQtc4OpzSiBw\\=\\=,.zkCewKKS6NQiK\\+ul8pALOw\\=\\={-webkit-align-items:center;align-items:center;position:relative}.EE2X3vXz7WbQtc4OpzSiBw\\=\\={-webkit-justify-content:center;justify-content:center;width:100%}.KfIT-r\\+N4YIkKjXvaVPnPg\\=\\={-webkit-user-drag:none;height:auto;max-width:20rem;position:relative;width:100%}._1-6ZJk6Q-8GvcVBpQCZyhg\\=\\={margin-bottom:1.5rem;text-transform:lowercase}.bs1HaWqmC3stRj0wl-i5nA\\=\\=,._1-6ZJk6Q-8GvcVBpQCZyhg\\=\\={text-align:center!important}.bs1HaWqmC3stRj0wl-i5nA\\=\\={border:1px dashed #6b7280;border-radius:.5rem;display:block;margin-bottom:.5rem;padding:1rem;position:relative}.bs1HaWqmC3stRj0wl-i5nA\\=\\= input[type=file]{display:none}.A5qsjCV2nCvIinOsV360nQ\\=\\={color:#000;cursor:pointer;margin:0;transition:.2s ease}.A5qsjCV2nCvIinOsV360nQ\\=\\=:focus,.A5qsjCV2nCvIinOsV360nQ\\=\\=:focus-within{color:#a78bfa}.SIIWWHz\\+JnU8CIofvGtIAA\\=\\={display:block;margin-bottom:.5rem;position:relative;text-align:center!important}.atW5QAztKF4K85y5T13qgw\\=\\=,.Yi7WIjGJvrJtYz3Y5fwXhA\\=\\={display:inline-block}.zkCewKKS6NQiK\\+ul8pALOw\\=\\= a,.zkCewKKS6NQiK\\+ul8pALOw\\=\\= button{-webkit-align-items:center;align-items:center;background:transparent;border:.75px solid rgba(167,139,250,.3);border-radius:.4rem;color:#a78bfa;cursor:pointer;display:inline-block;font-family:inherit!important;font-size:1rem;font-weight:400;line-height:inherit;padding:.4rem .75rem;position:relative;text-align:center;text-decoration:none;text-transform:lowercase;transition:.2s ease;width:100%}.zkCewKKS6NQiK\\+ul8pALOw\\=\\= a:focus-within,.zkCewKKS6NQiK\\+ul8pALOw\\=\\= a:hover,.zkCewKKS6NQiK\\+ul8pALOw\\=\\= button:focus-within,.zkCewKKS6NQiK\\+ul8pALOw\\=\\= button:hover{background:rgba(167,139,250,.1);border:.75px solid rgba(167,139,250,.5)}.zkCewKKS6NQiK\\+ul8pALOw\\=\\= a:hover:focus,.zkCewKKS6NQiK\\+ul8pALOw\\=\\= button:focus{background:rgba(167,139,250,.2)}.ML1Ig6mzxquJshzdslPrFg\\=\\={margin-bottom:.25rem;margin-top:.5rem}.kTWPZvp25PO0BkByKSVgZA\\=\\={margin-top:.25rem}.wr6ayAfAFHh4\\+4RS-NetSw\\=\\={color:#a78bfa}.Lnx9IzJ3EIoP8tALbEeByw\\=\\=,.wr6ayAfAFHh4\\+4RS-NetSw\\=\\={margin:.5rem 0 0;text-align:center!important}.Lnx9IzJ3EIoP8tALbEeByw\\=\\={color:#ef4444}",""]),a.locals={modal:"zkCewKKS6NQiK+ul8pALOw==",card:"EE2X3vXz7WbQtc4OpzSiBw==",img:"KfIT-r+N4YIkKjXvaVPnPg==",title:"_1-6ZJk6Q-8GvcVBpQCZyhg==",drag:"bs1HaWqmC3stRj0wl-i5nA==",click:"A5qsjCV2nCvIinOsV360nQ==",desc:"SIIWWHz+JnU8CIofvGtIAA==",progress:"atW5QAztKF4K85y5T13qgw==",val:"Yi7WIjGJvrJtYz3Y5fwXhA==",btn:"ML1Ig6mzxquJshzdslPrFg==",back:"kTWPZvp25PO0BkByKSVgZA==",msg:"wr6ayAfAFHh4+4RS-NetSw==",error:"Lnx9IzJ3EIoP8tALbEeByw=="},t.Z=a},3198:function(e,t,n){var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".t\\+FNCq95VafzoYmbcg41dg\\=\\={word-wrap:break-word;background-clip:border-box;background-color:#fff;border:0;border-radius:.75rem;box-shadow:0 3px 3px -1px rgba(10,22,70,.1),0 0 1px 0 rgba(10,22,70,.06);display:block;-webkit-flex-direction:column;flex-direction:column;margin:.75rem 0;min-width:0;padding:2rem;position:relative;text-align:center!important}.OamRc3L6cimCfrgJqI7xPw\\=\\={overflow:hidden;vertical-align:top;width:-webkit-max-content;width:-moz-max-content;width:max-content}.OamRc3L6cimCfrgJqI7xPw\\=\\=,.OamRc3L6cimCfrgJqI7xPw\\=\\= .pz7FnRBHPElVKAXi4YtE4A\\=\\={background:#fff;border-radius:50%;display:-webkit-inline-flex;display:inline-flex;position:relative}.OamRc3L6cimCfrgJqI7xPw\\=\\= .pz7FnRBHPElVKAXi4YtE4A\\=\\={-webkit-align-items:center;align-items:center;border-radius:.375rem;font-size:1rem;font-weight:600;height:2.875rem;-webkit-justify-content:center;justify-content:center;-o-object-fit:cover;object-fit:cover;vertical-align:middle;width:2.875rem}.OamRc3L6cimCfrgJqI7xPw\\=\\= .q88AIx2iw5JiaJPqCvAfvQ\\=\\=,.OamRc3L6cimCfrgJqI7xPw\\=\\= .pz7FnRBHPElVKAXi4YtE4A\\=\\={-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OamRc3L6cimCfrgJqI7xPw\\=\\= .q88AIx2iw5JiaJPqCvAfvQ\\=\\={background:rgba(0,0,0,.4);color:#fff;cursor:pointer;font-size:.5rem;height:100%;left:0;opacity:0;position:absolute;text-transform:lowercase;top:0;transition:.2s ease;width:100%;z-index:50}.OamRc3L6cimCfrgJqI7xPw\\=\\= .q88AIx2iw5JiaJPqCvAfvQ\\=\\=:hover{opacity:1}.OamRc3L6cimCfrgJqI7xPw\\=\\= .q88AIx2iw5JiaJPqCvAfvQ\\=\\= span{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}._7vfiqLfE0248TPCnbEJ1wg\\=\\={padding:.25rem 0 .5rem}.NRkpAK\\+6YUE3ruS\\+0QfDhA\\=\\=,._7vfiqLfE0248TPCnbEJ1wg\\=\\={position:relative}.NRkpAK\\+6YUE3ruS\\+0QfDhA\\=\\={-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;margin-bottom:.5rem;text-align:center}.OT32o9RPfny5244ODLjGqA\\=\\={background:transparent;border:.75px solid rgba(139,92,246,.3);border-radius:.4rem;color:#a78bfa;padding:.4rem .75rem;position:relative;text-decoration:none;text-transform:lowercase;transition:.2s ease}.OT32o9RPfny5244ODLjGqA\\=\\=:first-of-type{margin-right:.5rem}.OT32o9RPfny5244ODLjGqA\\=\\=:last-of-type{margin-left:.5rem}.OT32o9RPfny5244ODLjGqA\\=\\=:focus-within,.OT32o9RPfny5244ODLjGqA\\=\\=:hover{background:rgba(139,92,246,.1);border:.75px solid rgba(139,92,246,.5)}.OT32o9RPfny5244ODLjGqA\\=\\=:focus{background:rgba(139,92,246,.2)}.QHu6rXaG4\\+3SpDfeYAdWyw\\=\\={color:#a78bfa}._5fWlUqvDtBNTGq\\+NLPIeEA\\=\\=,.QHu6rXaG4\\+3SpDfeYAdWyw\\=\\={margin:.5rem 0 0;text-align:center!important}._5fWlUqvDtBNTGq\\+NLPIeEA\\=\\={color:#ef4444}",""]),a.locals={parent:"t+FNCq95VafzoYmbcg41dg==",cont:"OamRc3L6cimCfrgJqI7xPw==",upload:"pz7FnRBHPElVKAXi4YtE4A==",edit:"q88AIx2iw5JiaJPqCvAfvQ==",name:"_7vfiqLfE0248TPCnbEJ1wg==",action:"NRkpAK+6YUE3ruS+0QfDhA==",btn:"OT32o9RPfny5244ODLjGqA==",msg:"QHu6rXaG4+3SpDfeYAdWyw==",error:"_5fWlUqvDtBNTGq+NLPIeEA=="},t.Z=a},3586:function(e,t,n){var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".EhsrIsp9NqN9p-r4caw4EA\\=\\={min-height:100vh;padding:1.25rem;position:relative}.EhsrIsp9NqN9p-r4caw4EA\\=\\= a{text-decoration:none}",""]),a.locals={parent:"EhsrIsp9NqN9p-r4caw4EA=="},t.Z=a}}]);