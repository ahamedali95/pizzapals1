(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){e.exports=a.p+"static/media/pizza.1ca2ef69.png"},180:function(e,t,a){e.exports=a(318)},185:function(e,t,a){},189:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(40),l=a.n(i),c=(a(185),a(106),a(64)),o=a(65),s=a(72),u=a(66),m=a(73),d=(a(189),a(148)),p=a.n(d),h=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Pizza Pals")))},g=a(67),z=a(48),E=a(325),b=a(149),f=a.n(b),v=a(68),y=a(28),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={ingredient1:"",ingredient2:"",name:"",style:"",creator:"",URL:""},f()(Object(z.a)(Object(z.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onChange",value:function(e){var t=this;this.setState(Object(g.a)({},e.target.name,e.target.value),function(){return console.log(t.state)})}},{key:"onSubmit",value:function(e){var t={name:this.state.name,style:this.state.style,creator:this.state.creator,URL:this.state.URL,ingredients:[this.state.ingredient1,this.state.ingredient2]};this.props.addPizza(t),window.data=t,this.clearForm()}},{key:"clearForm",value:function(){this.setState({ingredient1:"",ingredient2:"",name:"",style:"",creator:"",URL:""})}},{key:"render",value:function(){return r.a.createElement(E.a,{id:"form",onSubmit:this.onSubmit},r.a.createElement(E.a.Group,{inline:!0},r.a.createElement("label",{id:"form-title"},r.a.createElement("strong",null,"Create a Pizza"))),r.a.createElement(E.a.Group,{widths:"equal"},r.a.createElement(E.a.Input,{fluid:!0,label:"Ingredient Name",placeholder:"First Ingredient",name:"ingredient1",value:this.state.ingredient1,onChange:this.onChange}),r.a.createElement(E.a.Input,{fluid:!0,label:"Ingredient Name",placeholder:"Second Ingredient",name:"ingredient2",value:this.state.ingredient2,onChange:this.onChange})),r.a.createElement(E.a.Group,{widths:"equal"},r.a.createElement(E.a.Input,{placeholder:"Name",name:"name",value:this.state.name,onChange:this.onChange}),r.a.createElement(E.a.Input,{placeholder:"Style",name:"style",value:this.state.style,onChange:this.onChange}),r.a.createElement(E.a.Input,{placeholder:"Creator",name:"creator",value:this.state.creator,onChange:this.onChange}),r.a.createElement(E.a.Input,{placeholder:"Image URL",name:"URL",value:this.state.URL,onChange:this.onChange})),r.a.createElement(E.a.Button,{positive:!0,id:"form-button"},"Add Pizza"))}}]),t}(r.a.Component),O=Object(y.b)(null,function(e){return{addPizza:function(t){return e(Object(v.addPizza)(t))}}})(j),C=a(326),I=a(317),P=a(327),w=function(e){console.log("props",e);var t=e.pizza;return r.a.createElement(n.Fragment,null,r.a.createElement(C.a,{className:"column"},r.a.createElement(I.a,{src:t.URL,id:"image"}),r.a.createElement(C.a.Content,null,r.a.createElement(C.a.Header,null,t.name),r.a.createElement(C.a.Meta,null,r.a.createElement("span",null,t.creator)),r.a.createElement(C.a.Description,null,"This is some super tasty pizza, especially since ".concat(t.creator," made it."))),r.a.createElement(C.a.Content,{extra:!0},"Ingredients are: ".concat(t.ingredients[0],", ").concat(t.ingredients[1])),r.a.createElement(C.a.Content,null,r.a.createElement(P.a,{id:"edit-button",color:"red"},"Edit"))))},S=Object(y.b)(function(e){return{pizzas:e.pizzas}})(function(e){return r.a.createElement("div",{id:"pizza-list",className:"ui three doubling stackable cards"},e.pizzas.map(function(e,t){return r.a.createElement(w,{key:t,pizza:e})}))}),k=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.setPizzas([])}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(S,null))}}]),t}(n.Component),A=Object(y.b)(null,function(e){return{setPizzas:function(t){return e(Object(v.setPizzas)(t))}}})(k),L=a(167),N=a(99),R=Object.freeze({pizzas:[]}),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PIZZAS":return Object(N.a)({},e,{pizzas:t.payload});case"ADD_PIZZA":return Object(N.a)({},e,{pizzas:[].concat(Object(L.a)(e.pizzas),[t.payload])});default:return e}},Z=a(69),D=Object(Z.b)(U);l.a.render(r.a.createElement(y.a,{store:D},r.a.createElement(A,null)),document.getElementById("root"))},68:function(e,t){e.exports={setPizzas:function(e){return{type:"SET_PIZZAS",payload:e}},addPizza:function(e){return{type:"ADD_PIZZA",payload:e}}}}},[[180,2,1]]]);
//# sourceMappingURL=main.8c194b93.chunk.js.map