(this.webpackJsonpadmin_panel=this.webpackJsonpadmin_panel||[]).push([[0],{31:function(e,t,r){},32:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),s=r(25),a=r.n(s),d=(r(31),r.p,r(32),r(13),r(4));var i=function(e){return Object(d.jsxs)("header",{className:"display-3 bg-info rounded m-2",children:["Welcome ",e.name]})},l=r(15),o=r(16),b=r(18),j=r(17),m=r(26).a.initializeApp({apiKey:"AIzaSyDtbGGpNRCKCNNXn023MxmlFyxBcvDBtCg",authDomain:"adminpanel-f4a1c.firebaseapp.com",databaseURL:"https://adminpanel-f4a1c-default-rtdb.firebaseio.com",projectId:"adminpanel-f4a1c",storageBucket:"adminpanel-f4a1c.appspot.com",messagingSenderId:"947117022843",appId:"1:947117022843:web:48e30869aec7b6b6f70cde",measurementId:"G-H4KF045QVB"});function u(e){m.database().ref("Orders").child(e+"").remove();var t=document.getElementById(e);t.parentNode.removeChild(t)}var h=function(e){return Object(d.jsx)("div",{className:"order-list section",id:e.ItemKey,children:Object(d.jsx)("div",{className:"card z-depth-0 order-summary m-3",children:Object(d.jsx)("div",{className:"container m-3",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{class:"col-sm-3",children:Object(d.jsxs)("span",{className:"card-title bg-black",children:["Order Name : ",e.pName," "]})}),Object(d.jsx)("div",{class:"col-sm-3",children:Object(d.jsxs)("p",{children:["Address : ",e.adr," "]})}),Object(d.jsx)("div",{class:"col-sm-3",children:Object(d.jsxs)("p",{children:["Total Bill : ",e.pr," "]})}),Object(d.jsx)("div",{class:"col-sm-3",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:u.bind(this,e.ItemKey),children:"Delete"})})]})})})})};var O=function(e){var t=[];return t.push(Object(d.jsx)("h1",{children:"Orders"})),m.database().ref("Orders").on("value",(function(e){e.forEach((function(e){var r=e.val();console.log(e.key);var n=r.OrderName,c=r.FullAddress,s=r.Price;t.push(Object(d.jsx)(h,{ItemKey:e.key,pName:n,adr:c,pr:s}))}))})),t};var p=function(e){var t=[];t.push(Object(d.jsx)("h1",{children:"Orders Done"}));for(var r=0;r<15;r++)t.push(Object(d.jsx)(h,{ItemKey:r,pName:"",adr:"",pr:""}));return t};var x=function(e){var t=[];t.push(Object(d.jsx)("h1",{children:"Orders Pending"}));for(var r=0;r<15;r++)t.push(Object(d.jsx)(h,{ItemKey:r,pName:"",adr:"",pr:""}));return t},f=r(42),v=r(43);function N(){var e=document.getElementById("NewOrderName").value,t=document.getElementById("NewUserAddress").value,r=document.getElementById("NewOrderPrice").value;m.database().ref("Orders").orderByKey().limitToLast(100);m.database().ref("Orders").push({OrderName:e,FullAddress:t,Price:r}),alert("Item has been added")}var y=function(){return Object(d.jsxs)(f.a,{children:[Object(d.jsxs)(f.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(f.a.Label,{className:"m-4",children:"New Order"}),Object(d.jsx)(f.a.Control,{id:"NewOrderName",type:"text",placeholder:"Enter Product Name"})]}),Object(d.jsx)(f.a.Group,{controlId:"formBasicEmail",children:Object(d.jsx)(f.a.Control,{id:"NewUserAddress",type:"text",placeholder:"Enter Your Address"})}),Object(d.jsx)(f.a.Group,{controlId:"formBasicEmail",children:Object(d.jsx)(f.a.Control,{id:"NewOrderPrice",type:"text",placeholder:"Enter Product Price"})}),Object(d.jsx)(v.a,{onClick:N,variant:"primary",children:"Submit"})]})},g=function(e){Object(b.a)(r,e);var t=Object(j.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return"AddOrder"==this.props.selector?Object(d.jsx)(y,{}):"Orders"==this.props.selector?Object(d.jsx)(O,{}):"Done"==this.props.selector?Object(d.jsx)(p,{}):"Pending"==this.props.selector?Object(d.jsx)(x,{}):Object(d.jsx)("h1",{children:"Dashboard"})}}]),r}(n.Component),C=function(e){Object(b.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).state={CurrentState:""},e}return Object(o.a)(r,[{key:"updateState",value:function(e){this.setState({CurrentState:e})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"container-fluid h-100",children:Object(d.jsxs)("div",{class:"row m-4",children:[Object(d.jsx)("div",{class:"col-sm-3",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("button",{onClick:this.updateState.bind(this,"AddOrder"),className:"btn btn-primary btn-lg btn-block text-left w-100 mb-3",children:"AddOrder"}),Object(d.jsx)("button",{onClick:this.updateState.bind(this,"Orders"),className:"btn btn-primary btn-lg btn-block text-left w-100 mb-3",children:"Orders"}),Object(d.jsx)("button",{onClick:this.updateState.bind(this,"Done"),className:"btn btn-success btn-lg btn-block text-left w-100 mb-3",children:"Orders Done"}),Object(d.jsx)("button",{onClick:this.updateState.bind(this,"Pending"),className:"btn btn-danger  btn-lg btn-block text-left w-100 mb-4",children:"Orders Pending"})]})}),Object(d.jsx)("div",{class:"col-sm-9 bg-light",children:Object(d.jsx)(g,{selector:""+this.state.CurrentState})})]})})}}]),r}(n.Component);var I=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(i,{name:"Admin"}),Object(d.jsx)(C,{})]})},k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.74339164.chunk.js.map