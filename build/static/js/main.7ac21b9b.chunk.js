(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(8),r=n.n(c),i=n(6),a=n(1),s=n(2),o=n(4),u=Object(o.b)({name:"ui",initialState:{isShowCart:!1,notification:null},reducers:{toggleShow:function(t,e){t.isShowCart=!t.isShowCart},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),d=u.actions,l=u,j=n(0),p=function(t){var e=t.title,n=Object(s.b)(),c=Object(a.useState)(!1),r=Object(i.a)(c,2),o=r[0],u=r[1],l=Object(s.c)((function(t){return t.cart}));return Object(a.useEffect)((function(){if(0!==l.items.length){u(!0);var t=setTimeout((function(){return u(!1)}),300);return function(){return clearTimeout(t)}}}),[l.items]),Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:e}),Object(j.jsxs)("div",{className:"cart ".concat(o?"bump":""),onClick:function(){n(d.toggleShow())},children:[Object(j.jsx)("span",{children:"My Cart"}),Object(j.jsx)("span",{children:l.totalQuantity})]})]})},b=Object(o.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1},reducers:{replaceCart:function(t,e){t.totalQuantity=e.payload.totalQuantity,t.items=e.payload.items},addItemToCart:function(t,e){var n=e.payload,c=t.items.find((function(t){return t.id===n.id}));t.changed=!0,t.totalQuantity++,c?(c.quantity++,c.totalPrice=c.totalPrice+c.price):t.items.push({name:n.name,id:n.id,description:n.description,price:n.price,quantity:1,totalPrice:n.price})},removeItemToCart:function(t,e){var n=t.items.find((function(t){return t.id===e.payload}));t.totalQuantity--,t.changed=!0,1===n.quantity?t.items=t.items.filter((function(t){return t.id!==e.payload})):(console.log(n.price),n.quantity--,n.totalPrice=n.totalPrice-n.price)}}}),f=b.actions,h=b,m=function(t){var e=t.name,n=t.price,c=t.description,r=t.id,i=Object(s.b)();return Object(j.jsxs)("li",{className:"menu-item",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e}),Object(j.jsxs)("span",{children:["$",n.toFixed(2)]})]}),Object(j.jsx)("strong",{className:"content",children:c}),Object(j.jsx)("button",{onClick:function(){i(f.addItemToCart({name:e,price:n,id:r,description:c}))},children:"Add to Cart"})]})},O=function(){return Object(j.jsxs)("section",{className:"product-menu",children:[Object(j.jsx)("h2",{children:"Buy Your Favorite Products"}),Object(j.jsx)("ul",{children:[{id:"b1",name:"My First Book",description:"The first book I ever wrote",price:6},{id:"b2",name:"My Second Book",description:"The Second book I ever wrote",price:8}].map((function(t){return Object(j.jsx)(m,{id:t.id,name:t.name,price:t.price,description:t.description},t.id)}))})]})},x=function(t){var e=t.status,n=t.message,c=t.title,r="";return"success"===e?r="success":"error"===e&&(r="error"),Object(j.jsxs)("section",{className:"notification ".concat(r),children:[Object(j.jsx)("p",{className:"title",children:c}),Object(j.jsx)("p",{className:"desc",children:n})]})},y=function(t){var e=t.id,n=t.name,c=t.price,r=t.totalPrice,i=t.quantity,a=Object(s.b)();return Object(j.jsxs)("li",{className:"product-item",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("h3",{children:n}),Object(j.jsxs)("div",{className:"price",children:[Object(j.jsxs)("span",{className:"total",children:["$",r.toFixed(2)]}),Object(j.jsxs)("span",{className:"price",children:["($",c.toFixed(2),"/ item)"]})]})]}),Object(j.jsxs)("div",{className:"bottom",children:[Object(j.jsxs)("span",{className:"quantity",children:["x",i]}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{onClick:function(){a(f.removeItemToCart(e))},children:"-"}),Object(j.jsx)("button",{onClick:function(){a(f.addItemToCart({id:e}))},children:"+"})]})]})]})},v=function(){var t=Object(s.c)((function(t){return t.cart.items}));return Object(j.jsxs)("section",{className:"product-list",children:[Object(j.jsx)("h2",{children:"Your Shopping Cart"}),Object(j.jsxs)("ul",{children:[!t.length&&Object(j.jsx)("p",{children:"Not found any product"}),t.map((function(t){return Object(j.jsx)(y,{id:t.id,price:t.price,name:t.name,totalPrice:t.totalPrice,quantity:t.quantity},t.id)}))]})]})},g=n(7),w=n(3),N=n.n(w),k=function(){var t=Object(s.c)((function(t){return t.ui.isShowCart})),e=Object(s.c)((function(t){return t.ui.notification})),n=Object(s.c)((function(t){return t.cart})),c=Object(s.b)();return Object(a.useLayoutEffect)((function(){c(function(){var t=Object(g.a)(N.a.mark((function t(e){var n,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){var t=Object(g.a)(N.a.mark((function t(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://redux-cart-87fd0-default-rtdb.europe-west1.firebasedatabase.app/cart.json");case 2:if((e=t.sent).ok){t.next=6;break}throw console.log(e),new Error("Could not fetch cart data!");case 6:return t.next=8,e.json();case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,n();case 4:c=t.sent,e(f.replaceCart({items:c.items||[],totalQuantity:c.totalQuantity||0})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(d.showNotification({status:"error",message:"Fetching cart data failed!",title:"Error!"}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[c]),Object(a.useEffect)((function(){n.changed&&c(function(t){return function(){var e=Object(g.a)(N.a.mark((function e(n){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(d.showNotification({status:"pending",message:"Please wait...",title:"pending"})),c=function(){var e=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://redux-cart-87fd0-default-rtdb.europe-west1.firebasedatabase.app/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,c();case 5:n(d.showNotification({status:"success",message:"Sent cart data successfully!",title:"Success!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n(d.showNotification({status:"error",message:"Sending cart data failed.",title:"Error!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(n))}),[n,c]),Object(j.jsxs)(j.Fragment,{children:[e&&Object(j.jsx)(x,{status:e.status,message:e.message,title:e.title}),Object(j.jsx)(p,{title:"ReduxCart"}),t&&Object(j.jsx)(v,{}),Object(j.jsx)(O,{})]})},C=(n(26),Object(o.a)({reducer:{ui:l.reducer,cart:h.reducer}}));r.a.render(Object(j.jsx)(s.a,{store:C,children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7ac21b9b.chunk.js.map