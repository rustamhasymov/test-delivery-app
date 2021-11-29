(this["webpackJsonpreact-exercise"]=this["webpackJsonpreact-exercise"]||[]).push([[0],{122:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(43),r=a.n(i),s=(a(122),a(12)),o=a(57),l=a(18),d=a(17),j=a(197),b=a(193),O=a(96),h=a.n(O),u=a(199),x=a(203),p=a(202),f=a(198),_=a(200),m=a(201),g=a(196),v=a(97),N=a.n(v),k=a(98),y=a.n(k),I=a(14),E=a(1),w={data:{customers:[],packages:[],invoices:[]},loader:!0},C=Object(n.createContext)(),P=function(){return Object(n.useContext)(C)},D=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){var a=t.type,n=t.payload;switch(a){case"INITIAL":return Object(I.a)(Object(I.a)({},e),{},{data:n});case"SET_LOAD":return Object(I.a)(Object(I.a)({},e),{},{loader:n});case"ADD_PACKAGE":return Object(I.a)(Object(I.a)({},e),{},{data:Object(I.a)(Object(I.a)({},e.data),{},{packages:[].concat(Object(d.a)(e.data.packages),[n])})});case"ADD_INVOICES":return Object(I.a)(Object(I.a)({},e),{},{data:Object(I.a)(Object(I.a)({},e.data),{},{invoices:n})});case"DELETE_PACKAGE":return Object(I.a)(Object(I.a)({},e),{},{data:Object(I.a)(Object(I.a)({},e.data),{},{packages:e.data.packages.filter((function(e){return e.id!==n}))})});case"DELETE_CUSTOMER":return Object(I.a)(Object(I.a)({},e),{},{data:Object(I.a)(Object(I.a)({},e.data),{},{customers:e.data.customers.filter((function(e){return e.id!==n}))})});case"INCREMENT_ORDER_NUMBER":var c=e.data.packages.findIndex((function(e){return e.id===n})),i=Object(I.a)({},e.data.packages[c]),r=e.data.packages.findIndex((function(e){return e.shippingOrder===i.shippingOrder+1}));if(-1!==r){var s=Object(I.a)({},e.data.packages[r]);i.shippingOrder++,s.shippingOrder--;var o=Object(d.a)(e.data.packages);return o.splice(c,1,i),o.splice(r,1,s),Object(I.a)(Object(I.a)({},e),{},{data:Object(I.a)(Object(I.a)({},e.data),{},{packages:o})})}return e;case"DECREMENT_ORDER_NUMBER":var l=e.data.packages.findIndex((function(e){return e.id===n})),j=Object(I.a)({},e.data.packages[l]),b=e.data.packages.findIndex((function(e){return e.shippingOrder===j.shippingOrder-1}));if(-1!==b){var O=Object(I.a)({},e.data.packages[b]);j.shippingOrder--,O.shippingOrder++;var h=Object(d.a)(e.data.packages);return h.splice(l,1,j),h.splice(b,1,O),Object(I.a)(Object(I.a)({},e),{},{data:Object(I.a)(Object(I.a)({},e.data),{},{packages:h})})}return e;default:throw new Error("Wrong action type!")}}),w),c=Object(s.a)(a,2),i=c[0],r=c[1],o=Object(n.useMemo)((function(){return[i,r]}),[i]);return Object(n.useEffect)((function(){fetch("/data.json").then((function(e){return e.json()})).then((function(e){var t=e.customers.map((function(t){var a=e.packages.filter((function(e){return e.customerid===t.id}));return 0===a.length?null:a.reduce((function(e,t,a){return Object(I.a)(Object(I.a)({},e),{},{totalPrice:e.totalPrice+parseInt(t.price),totalWeight:e.totalWeight+parseInt(t.weight),createdAt:(new Date).toDateString(),invoiceNumber:Date.now(),index:a+1})}),{id:t.id,totalPrice:0,totalWeight:0,name:t.name})})).filter(Boolean);r({type:"INITIAL",payload:e}),r({type:"ADD_INVOICES",payload:t}),r({type:"SET_LOAD",payload:!1})}))}),[]),Object(E.jsx)(C.Provider,{value:o,children:t})},S=a(182),R=a(191),T=a(70),W=a(204),A=a(186),L=a(181),M=a(187),B=a(188),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function G(e){var t=e.open,a=e.setOpen,c=P(),i=Object(s.a)(c,2),r=i[0].data,o=i[1],l=Object(n.useState)(""),d=Object(s.a)(l,2),b=d[0],O=d[1],h=Object(n.useState)(""),u=Object(s.a)(h,2),x=u[0],p=u[1],f=Object(n.useState)(""),_=Object(s.a)(f,2),m=_[0],g=_[1],v=Object(n.useState)(!1),N=Object(s.a)(v,2),k=N[0],y=N[1];function I(e,t){return-1*(e.shippingOrder-t.shippingOrder)}Object(n.useEffect)((function(){!function(){var e=b&&!!b,t=x&&x>0;y(m&&m>0&&t&&e)}()}),[b,x,m]);var w=function(){return a(!1)};return Object(E.jsx)("div",{children:Object(E.jsx)(S.a,{open:t,onClose:w,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(E.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=r.packages.sort(I).map((function(e){return e.shippingOrder}))[0]+1,a={id:"pak".concat(t),customerid:b,weight:"".concat(x,"kg"),price:m,shippingOrder:t};o({type:"ADD_PACKAGE",payload:a}),O(""),p(""),g(""),w()},children:Object(E.jsxs)(R.a,{sx:F,children:[Object(E.jsx)(T.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Invoice"}),Object(E.jsxs)(W.a,{fullWidth:!0,sx:{mt:2},children:[Object(E.jsx)(A.a,{id:"demo-simple-select-label",children:"Customers"}),Object(E.jsx)(L.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:b,label:"Customers",onChange:function(e){return O(e.target.value)},children:r.customers.map((function(e){return Object(E.jsx)(M.a,{value:e.id,children:e.name},e.id)}))})]}),Object(E.jsx)(B.a,{fullWidth:!0,id:"outlined-read-only-input",label:"Weight",sx:{mt:2},type:"number",value:x,onChange:function(e){return p(e.target.value)}}),Object(E.jsx)(B.a,{fullWidth:!0,id:"outlined-read-only-input",label:"Price",sx:{mt:2},type:"number",value:m,onChange:function(e){return g(e.target.value)}}),Object(E.jsx)(j.a,{fullWidth:!0,variant:"contained",type:"submit",disabled:!k,sx:{mt:2},children:"Register an order"})]})})})})}var K=c.a.memo(G);function U(){var e=P(),t=Object(s.a)(e,2),a=t[0].data,c=t[1],i=Object(n.useState)(!1),r=Object(s.a)(i,2),o=r[0],l=r[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(K,{open:o,setOpen:l}),Object(E.jsx)(f.a,{component:g.a,children:Object(E.jsxs)(u.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(E.jsx)(_.a,{children:Object(E.jsxs)(m.a,{children:[Object(E.jsx)(p.a,{children:"id"}),Object(E.jsx)(p.a,{children:"Customer Name"}),Object(E.jsx)(p.a,{children:"Weight"}),Object(E.jsx)(p.a,{children:"Price"}),Object(E.jsx)(p.a,{children:Object(E.jsx)(b.a,{onClick:function(){return l(!0)},size:"large",edge:"start",color:"inherit","aria-label":"menu",children:Object(E.jsx)(h.a,{})})})]})}),Object(E.jsx)(x.a,{children:Object(d.a)(a.packages).sort((function(e,t){return e.shippingOrder-t.shippingOrder})).map((function(e){var t;return Object(E.jsxs)(m.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(E.jsx)(p.a,{component:"th",scope:"row",children:e.id}),Object(E.jsx)(p.a,{children:(null===(t=a.customers.find((function(t){return t.id===e.customerid})))||void 0===t?void 0:t.name)||"client was deleted from system"}),Object(E.jsx)(p.a,{children:e.weight.split("kg").join(" kg")}),Object(E.jsx)(p.a,{children:e.price}),Object(E.jsxs)(p.a,{children:[Object(E.jsx)(j.a,{variant:"contained",sx:{mr:2},onClick:function(){return c({type:"DELETE_PACKAGE",payload:e.id})},children:"Delete"}),Object(E.jsx)(b.a,{"aria-label":"up",size:"small",onClick:function(){return c({type:"DECREMENT_ORDER_NUMBER",payload:e.id})},children:Object(E.jsx)(N.a,{})}),Object(E.jsx)(b.a,{"aria-label":"down",size:"small",onClick:function(){return c({type:"INCREMENT_ORDER_NUMBER",payload:e.id})},children:Object(E.jsx)(y.a,{})})]})]},e.id)}))})]})})]})}var V=a(16),z=a.n(V);function H(e){var t,a=e.setOpen,n=e.id,c=P(),i=Object(s.a)(c,1)[0].data,r=i&&i.invoices.find((function(e){return e.id===n})),o=i&&i.customers.find((function(e){return e.id===n})),l=i&&i.packages.filter((function(e){return e.customerid===n}));return 0!==(null===(t=Object.keys(i))||void 0===t?void 0:t.length)||n?Object(E.jsx)("section",{className:z.a.container,onClick:function(){return a(!1)},children:Object(E.jsxs)("div",{className:z.a.wrapper,onClick:function(e){return e.stopPropagation()},children:[Object(E.jsxs)("header",{className:z.a.header,children:[Object(E.jsx)("time",{className:z.a.date,children:(new Date).toLocaleDateString()}),Object(E.jsx)("h2",{className:z.a["name-page"],children:"INVOICE"}),Object(E.jsx)("p",{className:z.a["client-name"],children:(null===o||void 0===o?void 0:o.name)||"not found"}),Object(E.jsxs)("p",{className:z.a["client-invoice"],children:[Object(E.jsx)("span",{children:"Invoice \u2116 :"}),Object(E.jsx)("span",{children:(null===r||void 0===r?void 0:r.invoiceNumber)||"not found"})]})]}),(null===l||void 0===l?void 0:l.length)>0&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("main",{className:z.a["general-info"],children:Object(E.jsxs)("table",{className:z.a["general-info__table"],children:[Object(E.jsx)("thead",{className:z.a["general-info__head"],children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:z.a["general-info__head"],children:"ID"}),Object(E.jsx)("th",{className:z.a["general-info__head"],children:"WEIGHT"}),Object(E.jsx)("th",{className:z.a["general-info__head"],children:"PRICE"})]})}),Object(E.jsx)("tbody",{className:z.a["general-info__body"],children:l.map((function(e){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:z.a["general-info__body-info_id"],children:e.id.split("k").join("k ")}),Object(E.jsx)("td",{className:z.a["general-info__body-info_weight"],children:e.weight.split("kg").join(" kg")}),Object(E.jsx)("td",{className:z.a["general-info__body-info_price"],children:e.price})]},e.id)}))}),Object(E.jsx)("tfoot",{className:z.a["general-info__foot"],children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{}),Object(E.jsxs)("td",{className:z.a["general-info__total-weight"],children:["Total weight: ",r.totalWeight]}),Object(E.jsxs)("td",{className:z.a["general-info__total-price"],children:["Total price: ",r.totalPrice]})]})})]})}),Object(E.jsxs)("footer",{className:z.a.footer,children:[Object(E.jsx)("div",{className:z.a["total-pack"],children:"You received ".concat(1===r.index?"".concat(r.index," package"):"".concat(r.index," packages"))}),Object(E.jsx)("div",{className:z.a["total-conclusion"],children:"Thank you for using our services"})]})]})]})}):Object(E.jsx)(E.Fragment,{})}function J(){var e=P(),t=Object(s.a)(e,2),a=t[0].data,c=t[1],i=Object(n.useState)(!1),r=Object(s.a)(i,2),o=r[0],l=r[1],d=Object(n.useState)(null),b=Object(s.a)(d,2),O=b[0],h=b[1];return Object(E.jsxs)(E.Fragment,{children:[o&&Object(E.jsx)(H,{setOpen:l,id:O}),Object(E.jsx)(f.a,{component:g.a,children:Object(E.jsxs)(u.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(E.jsx)(_.a,{children:Object(E.jsxs)(m.a,{children:[Object(E.jsx)(p.a,{children:"id"}),Object(E.jsx)(p.a,{children:"Name"}),Object(E.jsx)(p.a,{}),Object(E.jsx)(p.a,{})]})}),Object(E.jsx)(x.a,{children:a.customers.map((function(e){return Object(E.jsxs)(m.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(E.jsx)(p.a,{component:"th",scope:"row",children:e.id}),Object(E.jsx)(p.a,{children:e.name}),Object(E.jsx)(p.a,{children:Object(E.jsx)(j.a,{variant:"contained",onClick:function(){return t=e.id,l(!0),void h(t);var t},children:"Create Invoice"})}),Object(E.jsx)(p.a,{children:Object(E.jsx)(j.a,{variant:"contained",onClick:function(){return c({type:"DELETE_CUSTOMER",payload:e.id})},children:"Delete"})})]},e.id)}))})]})})]})}function q(){var e=P(),t=Object(s.a)(e,2),a=t[0].data,c=t[1];return Object(n.useEffect)((function(){var e=a.customers.map((function(e){var t=a.packages.filter((function(t){return t.customerid===e.id}));return 0===t.length?null:t.reduce((function(e,t,a){return Object(I.a)(Object(I.a)({},e),{},{totalPrice:e.totalPrice+parseInt(t.price),totalWeight:e.totalWeight+parseInt(t.weight),createdAt:(new Date).toDateString(),invoiceNumber:Date.now(),index:a+1})}),{id:e.id,totalPrice:0,totalWeight:0,name:e.name})})).filter(Boolean);c({type:"ADD_INVOICES",payload:e})}),[a.customers,a.packages,c]),Object(E.jsx)(f.a,{component:g.a,children:Object(E.jsxs)(u.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(E.jsx)(_.a,{children:Object(E.jsxs)(m.a,{children:[Object(E.jsx)(p.a,{children:"Customer Name"}),Object(E.jsx)(p.a,{children:"Total Weight"}),Object(E.jsx)(p.a,{children:"Total Price"})]})}),Object(E.jsx)(x.a,{children:a.invoices&&a.invoices.map((function(e){return Object(E.jsxs)(m.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(E.jsx)(p.a,{children:e.name}),Object(E.jsxs)(p.a,{children:[e.totalWeight," kg"]}),Object(E.jsx)(p.a,{children:e.totalPrice})]},e.id)}))})]})})}var Z=a(194),Q=a(195),Y=a(100),X=a.n(Y),$=a(189),ee=a(192),te=a(184),ae=a(180),ne=(a(129),a(130),a(44)),ce=a.n(ne);var ie=function(){return Object(E.jsx)("div",{className:ce.a.wrapper,children:Object(E.jsx)("div",{className:ce.a.box,children:Object(E.jsxs)("div",{className:ce.a["first-box"],children:[Object(E.jsx)("div",{className:ce.a["second-box"]}),Object(E.jsx)("div",{className:ce.a["third-box"],children:Object(E.jsx)("div",{className:ce.a["fourth-box"],children:Object(E.jsx)("div",{className:ce.a["fifth-box"]})})})]})})})};var re=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],i=P(),r=Object(s.a)(i,1)[0].loader;return Object(E.jsxs)(E.Fragment,{children:[r&&Object(E.jsx)(ie,{}),Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)(o.a,{children:[Object(E.jsx)(R.a,{sx:{flexGrow:1},children:Object(E.jsx)(Z.a,{position:"static",children:Object(E.jsxs)(Q.a,{children:[Object(E.jsx)(b.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){return c(!0)},children:Object(E.jsx)(X.a,{})}),Object(E.jsx)(T.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Mail Delivery Service"})]})})}),Object(E.jsx)($.a,{anchor:"left",open:a,onClose:function(){return c(!1)},children:Object(E.jsxs)(ee.a,{style:{width:"300px"},children:[Object(E.jsx)(te.a,{button:!0,children:Object(E.jsx)(o.b,{to:"/packages",children:Object(E.jsx)(ae.a,{primary:"Packages"})})}),Object(E.jsx)(te.a,{button:!0,children:Object(E.jsx)(o.b,{to:"/customers",children:Object(E.jsx)(ae.a,{primary:"Customers"})})}),Object(E.jsx)(te.a,{button:!0,children:Object(E.jsx)(o.b,{to:"/invoices",children:Object(E.jsx)(ae.a,{primary:"Invoices"})})})]})}),Object(E.jsxs)(l.c,{children:[Object(E.jsx)(l.a,{path:"/packages",children:Object(E.jsx)(U,{})}),Object(E.jsx)(l.a,{path:"/customers",children:Object(E.jsx)(J,{})}),Object(E.jsx)(l.a,{path:"/invoices",children:Object(E.jsx)(q,{})})]})]})})]})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,208)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(D,{children:Object(E.jsx)(re,{})})}),document.getElementById("root")),se()},16:function(e,t,a){e.exports={container:"PersonalInvoice_container__3y7RH",wrapper:"PersonalInvoice_wrapper__1xmL7",header:"PersonalInvoice_header__qwBKS","client-invoice":"PersonalInvoice_client-invoice__3w9gs","name-page":"PersonalInvoice_name-page__1PFIw","client-name":"PersonalInvoice_client-name__1Hs7v","general-info":"PersonalInvoice_general-info__3Vhjk","general-info__table":"PersonalInvoice_general-info__table__2OcsH","general-info__head":"PersonalInvoice_general-info__head__2i6N9","general-info__body-info_id":"PersonalInvoice_general-info__body-info_id__2acWh","general-info__body-info_weight":"PersonalInvoice_general-info__body-info_weight__2LrZ2","general-info__body-info_price":"PersonalInvoice_general-info__body-info_price__1mKJj","general-info__total-weight":"PersonalInvoice_general-info__total-weight__Rj7Ji","general-info__total-price":"PersonalInvoice_general-info__total-price__3en9K",footer:"PersonalInvoice_footer__iSBMM"}},44:function(e,t,a){e.exports={wrapper:"Load_wrapper__36P9m",box:"Load_box__39jZB","first-box":"Load_first-box__2dFC1","second-box":"Load_second-box__3GmO0",anim:"Load_anim__AqB1t","third-box":"Load_third-box__2QwMa","fourth-box":"Load_fourth-box__2yqhZ","fifth-box":"Load_fifth-box__2FWsB"}}},[[135,1,2]]]);
//# sourceMappingURL=main.76e148a6.chunk.js.map