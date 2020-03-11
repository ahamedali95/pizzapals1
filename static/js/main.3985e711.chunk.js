(this["webpackJsonppizza-pals"]=this["webpackJsonppizza-pals"]||[]).push([[0],{174:function(e,t,a){e.exports=a.p+"static/media/pizza3.0ec0e62f.png"},205:function(e,t,a){e.exports=a(359)},216:function(e,t,a){},217:function(e,t,a){},23:function(e,t){e.exports={setPizzas:function(e){return{type:"SET_PIZZAS",payload:e}},addPizza:function(e){return{type:"ADD_PIZZA",payload:e}},setIsPizzaLoaderShown:function(e){return{type:"SET_IS_PIZZA_LOADER_SHOWN",payload:e}},addAlert:function(e){return{type:"ADD_ALERT",payload:e}},removeAlert:function(e){return{type:"REMOVE_ALERT",payload:e}}}},359:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(57),l=a.n(i),o=a(71),s=a(20),c=a(172),u=a(173),d=a.n(u),p=a(192),m=a(43),h=(a(214),a(215),a(216),a(217),a(26)),f=a.n(h),z=a(35),v=a(36),g=a(37),b=a(40),E=a(39),y=a(41),O=a(174),j=a.n(O),P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"app-name"},"Pizza Pals")))},A=a(58),w=a(44),S=a(38),k=a(369),L=a(373),C=a(59),N=a.n(C),I=a(23),U={id:"pizza-fetch-failure-alert",color:"red",header:"Unable to fetch pizzas. Please try again later.",list:[]},R={id:"pizza-submission-success-alert",color:"green",header:"Pizza created successfully.",list:[]},x={id:"pizza-submission-failure-alert",color:"red",header:"Unable to create pizza. Please try again later.",list:[]},D={id:"logout-success-alert",color:"green",header:"Logout successful. Goodbye!",list:[]},F=["Ahamed Abbas","Mcvvina Lin","Kathy Wong","Sahu Kumarsneh","Raji Indukuru","Surya Saripalli","Boris Doley","Anant Dubey","Alisha Sahu","Pushparaj Geravubana","Vikyanth Sudhakar"],T=a(89),_=a.n(T),Z=function(){var e=Object(z.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("http://localhost:8080/api/v1/pizzas",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),G=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={isLoaderShown:!1,pizza:{ingredient1:"",ingredient2:"",name:"",style:"",creator:"",imageURL:""},invalidFields:[]},N()(Object(S.a)(a)),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentWillUnmount",value:function(){this.props.addAlert(D)}},{key:"onClick",value:function(){this.props.history.push("logout")}},{key:"onChange",value:function(e,t){var a=t.name,n=t.value;this.setState((function(e){return{pizza:Object(w.a)({},e.pizza,Object(A.a)({},a,n))}}))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.performValidation();a.length?this.setState({invalidFields:a},(function(){t.props.removeAlert("pizza-form-invalid-fields-alert"),t.props.removeAlert("pizza-submission-success-alert"),t.props.removeAlert("pizza-submission-failure-alert"),t.props.addAlert(function(e){var t=["ingredient1","ingredient2","name","style","creator"];return{id:"pizza-form-invalid-fields-alert",color:"red",header:"There was some errors with your submission",list:e.map((function(e){return t.includes(e)?"".concat(e[0].toUpperCase()).concat(e.slice(1)," field should include at least one character and should not exceed 50 characters."):"".concat(e[0].toUpperCase()).concat(e.slice(1)," field should include at least one character and should not exceed 2083 characters.")}))}}(a))})):(this.props.removeAlert("pizza-form-invalid-fields-alert"),this.props.removeAlert("pizza-submission-success-alert"),this.props.removeAlert("pizza-submission-failure-alert"),this.prePizzaCreationProcess())}},{key:"performValidation",value:function(){var e=[],t=this.state.pizza,a=["ingredient1","ingredient2","name","style","creator"];for(var n in t){var r=t[n];(a.includes(n)&&(!r||r.length>50)||"imageURL"===n&&(!r||r.length>2083))&&e.push(n)}return e}},{key:"handleLoaderToggle",value:function(e,t){this.setState((function(e){return{isLoaderShown:!e.isLoaderShown}}),(function(){return e(t)}))}},{key:"prePizzaCreationProcess",value:function(){this.handleLoaderToggle(this.createPizza)}},{key:"createPizza",value:function(){var e=Object(z.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.pizza,a={name:t.name,style:t.style,creator:t.creator,imageURL:t.imageURL,ingredients:[{name:t.ingredient1},{name:t.ingredient2}]},e.next=4,Z(a);case 4:n=e.sent,this.handleLoaderToggle(this.postPizzaCreationProcess,n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"postPizzaCreationProcess",value:function(e){var t=this;e?(this.props.addAlert(R),this.props.addPizza(e),this.clearForm(),setTimeout((function(){return t.props.removeAlert("pizza-submission-success-alert")}),3e3)):this.props.addAlert(x)}},{key:"clearForm",value:function(){this.setState({pizza:{ingredient1:"",ingredient2:"",name:"",style:"",creator:"",imageURL:""},invalidFields:[]})}},{key:"render",value:function(){var e=this,a=this.state,n=a.isLoaderShown,i=a.pizza,l=a.invalidFields;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2 offset-10"},r.a.createElement(k.a.Button,{className:"logout-button",negative:!0,onClick:this.onClick},"Log out"))),r.a.createElement(L.a,{inverted:!0},r.a.createElement(k.a,{inverted:!0,loading:n,onSubmit:this.onSubmit},r.a.createElement(k.a.Group,{inline:!0},r.a.createElement("label",{className:"form-title"},r.a.createElement("strong",null,"Create a Pizza"))),r.a.createElement(k.a.Group,{widths:"equal"},r.a.createElement(k.a.Input,{error:l.includes("ingredient1"),fluid:!0,label:"Ingredient Name",name:"ingredient1",placeholder:"First Ingredient",onChange:this.onChange,value:i.ingredient1}),r.a.createElement(k.a.Input,{error:l.includes("ingredient2"),fluid:!0,label:"Ingredient Name",name:"ingredient2",placeholder:"Second Ingredient",onChange:this.onChange,value:i.ingredient2})),r.a.createElement(k.a.Group,{widths:"equal"},r.a.createElement(k.a.Input,{error:l.includes("name"),fluid:!0,label:"Name",name:"name",placeholder:"Name",onChange:this.onChange,value:i.name}),r.a.createElement(k.a.Input,{error:l.includes("style"),fluid:!0,label:"Style",name:"style",placeholder:"Style",onChange:this.onChange,value:i.style}),r.a.createElement(k.a.Field,{error:l.includes("creator"),fluid:!0,control:k.a.Select,label:"Creator",name:"creator",placeholder:"Creator",value:i.creator,options:t.generateOptions(),onChange:function(t,a){var n=a.name,r=a.value;return e.onChange(t,{name:n,value:r})}}),r.a.createElement(k.a.Input,{error:l.includes("imageURL"),fluid:!0,label:"image URL",name:"imageURL",placeholder:"Image URL",onChange:this.onChange,value:i.imageURL})),r.a.createElement(k.a.Button,{disabled:n,positive:!0},"Add Pizza"))))}}],[{key:"generateOptions",value:function(){return F.map((function(e,t){return{key:t,value:e,text:e}}))}}]),t}(r.a.Component),V=Object(s.b)(null,(function(e){return{addPizza:function(t){return e(Object(I.addPizza)(t))},addAlert:function(t){return e(Object(I.addAlert)(t))},removeAlert:function(t){return e(Object(I.removeAlert)(t))}}}))(G),B=a(368),W=a(370),M=a(194),H=a(191),q=a.n(H),J=function(e){var t=e.pizza,a=t.ingredients.map((function(e){return e.name})).join(" & ");return r.a.createElement(n.Fragment,null,r.a.createElement(W.a,{className:"column"},r.a.createElement(M.a,{src:t.imageURL,className:"image"}),r.a.createElement(W.a.Content,null,r.a.createElement(W.a.Header,null,t.name),r.a.createElement(W.a.Meta,null,r.a.createElement("span",null,t.creator)),r.a.createElement(W.a.Description,null,"You better get ".concat(t.creator.split(" ")[0],"'s pizza right!."))),r.a.createElement(W.a.Content,{extra:!0},"Ingredients are: ".concat(a)),r.a.createElement(W.a.Content,null,q()(t.createdTime).format("LLL"))))},K=Object(s.b)((function(e){return{pizzas:e.pizzas,isPizzaLoaderShown:e.isPizzaLoaderShown}}))((function(e){return console.log("pizzalist"),r.a.createElement("div",{className:"mt-3"},r.a.createElement(L.a,{inverted:!0},r.a.createElement(B.a,{active:e.isPizzaLoaderShown}),e.pizzas.length?r.a.createElement("div",{className:"ui three doubling stackable cards"},e.pizzas.map((function(e,t){return r.a.createElement(J,{key:t,pizza:e})}))):null))})),Y=function(){var e=Object(z.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("http://localhost:8080/api/v1/pizzas");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Q=a(371),X=a(372),$=Object(s.b)((function(e){return{alerts:e.alerts}}))((function(e){return e.alerts.map((function(e){return r.a.createElement(Q.a,{key:Object(X.a)(),color:e.color,header:e.header,list:e.list})}))})),ee=function(e){function t(){return Object(v.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.prePizzaFetchProcess()}},{key:"prePizzaFetchProcess",value:function(){this.props.setIsPizzaLoaderShown(!0),this.getPizzas()}},{key:"getPizzas",value:function(){var e=Object(z.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:t=e.sent,this.postPizzaFetchProcess(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"postPizzaFetchProcess",value:function(e){if(e){this.props.setIsPizzaLoaderShown(!1);var t=e.sort((function(e,t){return new Date(t.createdTime)-new Date(e.createdTime)}));this.props.setPizzas(t)}else this.props.setIsPizzaLoaderShown(!1),this.props.addAlert(U)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement(P,null),r.a.createElement($,null),r.a.createElement(V,{history:this.props.history}),r.a.createElement(K,null)))}}]),t}(n.Component),te=Object(s.b)(null,(function(e){return{setPizzas:function(t){return e(Object(I.setPizzas)(t))},setIsPizzaLoaderShown:function(t){return e(Object(I.setIsPizzaLoaderShown)(t))},addAlert:function(t){return e(Object(I.addAlert)(t))}}}))(ee),ae=a(121),ne=Object.freeze({pizzas:[],isPizzaLoaderShown:!1,alerts:[]}),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PIZZAS":return Object(w.a)({},e,{pizzas:t.payload});case"ADD_PIZZA":return Object(w.a)({},e,{pizzas:[t.payload].concat(Object(ae.a)(e.pizzas))});case"SET_IS_PIZZA_LOADER_SHOWN":return Object(w.a)({},e,{isPizzaLoaderShown:t.payload});case"ADD_ALERT":return Object(w.a)({},e,{alerts:[].concat(Object(ae.a)(e.alerts),[t.payload])});case"REMOVE_ALERT":return Object(w.a)({},e,{alerts:e.alerts.filter((function(e){return e.id!==t.payload}))});default:return e}},ie=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={userName:"",password:"",invalidFields:[]},N()(Object(S.a)(a)),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentWillUnmount",value:function(){this.props.removeAlert("login-form-invalid-fields-alert")}},{key:"onChange",value:function(e,t){var a=this,n=t.name,r=t.value;this.setState(Object(A.a)({},n,r),(function(){return console.log(a.state)}))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.performValidation();a.length?this.setState({invalidFields:a},(function(){t.props.removeAlert("login-form-invalid-fields-alert"),t.props.addAlert({id:"login-form-invalid-fields-alert",color:"red",header:"There was some errors with your submission",list:a.map((function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1)," field cannot be empty.")}))})})):this.props.history.push("pizzapals")}},{key:"performValidation",value:function(){var e=[];return!this.state.userName&&e.push("userName"),!this.state.password&&e.push("password"),e}},{key:"render",value:function(){var e=this.state,t=e.userName,a=e.password,n=e.invalidFields;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement(P,null),r.a.createElement($,null),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(L.a,{inverted:!0},r.a.createElement(k.a,{inverted:!0,onSubmit:this.onSubmit},r.a.createElement(k.a.Group,{inline:!0},r.a.createElement("label",{className:"form-title"},r.a.createElement("strong",null,"Login"))),r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Input,{error:n.includes("userName"),label:"Username",name:"userName",placeholder:"Username",onChange:this.onChange,size:"massive",value:t})),r.a.createElement(k.a.Group,null,r.a.createElement(k.a.Input,{error:n.includes("password"),label:"Password",name:"password",placeholder:"Password",type:"password",onChange:this.onChange,size:"massive",value:a})),r.a.createElement(k.a.Button,{className:"row justify-content-center",positive:!0},"Submit"))))))}}]),t}(n.Component),le=Object(s.b)(null,(function(e){return{addAlert:function(t){return e(Object(I.addAlert)(t))},removeAlert:function(t){return e(Object(I.removeAlert)(t))}}}))(ie),oe=function(e){function t(e){var a;return Object(v.a)(this,t),a=Object(b.a)(this,Object(E.a)(t).call(this,e)),N()(Object(S.a)(a)),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentWillUnmount",value:function(){this.props.removeAlert("logout-success-alert")}},{key:"onClick",value:function(){this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement(P,null),r.a.createElement($,null),r.a.createElement(k.a.Button,{content:"Login again",icon:"left arrow",onClick:this.onClick})))}}]),t}(n.Component),se=Object(s.b)(null,(function(e){return{removeAlert:function(t){return e(Object(I.removeAlert)(t))}}}))(oe),ce=Object(o.c)(re,Object(o.a)(c.a,d.a));l.a.render(r.a.createElement(s.a,{store:ce},r.a.createElement(p.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/login",exact:!0,render:function(e){var t=e.history;return r.a.createElement(le,{history:t})}}),r.a.createElement(m.a,{path:"/pizzapals",exact:!0,render:function(e){var t=e.history;return r.a.createElement(te,{history:t})}}),r.a.createElement(m.a,{path:"/logout",exact:!0,render:function(e){var t=e.history;return r.a.createElement(se,{history:t})}})))),document.getElementById("root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.3985e711.chunk.js.map