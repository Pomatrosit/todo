(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,o){e.exports=o(27)},18:function(e,t,o){},19:function(e,t,o){},26:function(e,t,o){},27:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(3),c=o.n(r),l=(o(18),o(19),o(1)),s=Object(l.b)(null,(function(e){return{toggleTodoItem:function(t){return e({type:"TOGGLE_TODO_ITEM",payload:t})},removeTodoItem:function(t){return e({type:"REMOVE_TODO_ITEM",payload:t})}}}))((function(e){var t=["todo-caption"];return e.isCompleted&&t.push("completed"),a.a.createElement("div",{className:"todo-item"},a.a.createElement("p",{className:t.join(" "),onClick:function(){return e.toggleTodoItem(e.id)}},e.caption),a.a.createElement("i",{className:"fa fa-thumbs-up","aria-hidden":"true",onClick:function(){return e.toggleTodoItem(e.id)}}),a.a.createElement("div",{className:"todo-cross",onClick:function(){return e.removeTodoItem(e.id)}},a.a.createElement("span",{className:"todo-cross__span todo-cross__span1"}),a.a.createElement("span",{className:"todo-cross__span todo-cross__span2"})))})),i=Object(l.b)((function(e){return{todos:e.todos}}),null)((function(e){var t=e.todos.map((function(e){return a.a.createElement(s,{key:e.id,id:e.id,caption:e.caption,isCompleted:e.isCompleted})}));return a.a.createElement("div",{style:{width:"50%",margin:"0 auto 10rem auto"}},e.todos.length?t:a.a.createElement("p",{style:{textAlign:"center",color:"#606060"}},"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u0438\u0439"))})),d=o(12),u=(o(26),Object(l.b)(null,(function(e){return{addTodoItem:function(t){return e({type:"ADD_TODO_ITEM",payload:t})}}}))((function(e){var t=Object(n.useState)(""),o=Object(d.a)(t,2),r=o[0],c=o[1],l=!(r.length>=2);return a.a.createElement("div",{className:"add-todo"},a.a.createElement("form",{className:"add-todo-inner",onSubmit:function(t){t.preventDefault(),e.addTodoItem(r),c("")}},a.a.createElement("input",{className:"add-todo-input",type:"text",onChange:function(e){return c(e.target.value)},value:r}),a.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:l},"Add todo")))})));var m=function(){return a.a.createElement("div",{className:"wrapper"},a.a.createElement("h1",{className:"title"},"Todos"),a.a.createElement("hr",null),a.a.createElement(i,null),a.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=o(4),f=o(11),E=function(e){localStorage.setItem("todos",JSON.stringify(e))},v={todos:JSON.parse(localStorage.getItem("todos")||"[]")};var O=Object(p.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TODO_ITEM":var o=t.payload,n=e.todos.map((function(e){return e.id===o&&(e.isCompleted=!e.isCompleted),e}));return E(n),{todos:n};case"REMOVE_TODO_ITEM":var a=t.payload,r=e.todos.filter((function(e){return e.id!==a}));return E(r),{todos:r};case"ADD_TODO_ITEM":var c=t.payload,l=Object(f.a)(e.todos);return l.push({id:Date.now(),caption:c,isCompleted:!1}),E(l),{todos:l};default:return e}}));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:O},a.a.createElement(m,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.62f4592c.chunk.js.map