(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__12mKX",filterInput:"Filter_filterInput__g84wg"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__2Azg0",label:"ContactForm_label__ipjNk",input:"ContactForm_input__nPx-T",button:"ContactForm_button__2jtbV"}},28:function(t,e,n){},3:function(t,e,n){t.exports={list:"ContactList_list__1pVIM",listItem:"ContactList_listItem__a_Y2o",listItemText:"ContactList_listItemText__3IDGK",button:"ContactList_button__3Tdyl"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(12),i=n.n(s),r=(n(19),n(14)),o=n(6),l=n(7),u=n(9),m=n(8),b=n(4),d=n.n(b),h=(n(28),n(13)),f=n(2),j=n.n(f),p=n(0),v=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onSubmit(a,c),t.reset()},t}return Object(l.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,htmlFor:this.nameInputId,children:["Name",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(p.jsxs)("label",{className:j.a.label,htmlFor:this.numberInputId,children:["Number",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(p.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(3),x=n.n(O),C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:x.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:x.a.listItem,children:[Object(p.jsxs)("span",{className:x.a.listItemText,children:[a,":"]}),Object(p.jsx)("span",{className:x.a.listItemText,children:c}),Object(p.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},g=n(11),_=n.n(g),I=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:_.a.filterLabel,children:["Find contacts by name",Object(p.jsx)("input",{className:_.a.filterInput,type:"text",value:e,onChange:n})]})},y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a=t.state.contacts;if(""!==e)if(""!==n)if(a.find((function(t){return t.name===e})))alert("".concat(e," is already in contacts."));else{var c={id:d.a.generate(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(r.a)(e))}}))}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430.");else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430.")},t.changeFilter=function(e){var n=e.target;t.setState({filter:n.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&(console.log("contacts updated"),localStorage.setItem("contacts",JSON.stringify(e)))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(v,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(I,{value:t,onChange:this.changeFilter}),Object(p.jsx)(C,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a93a1d8a.chunk.js.map