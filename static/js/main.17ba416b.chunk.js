(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(t,e,o){t.exports={container:"header_container__17jWP",h1:"header_h1__2BMK5"}},23:function(t,e,o){"use strict";o.r(e);o(0);var n=o(6),c=o.n(n),i=o(2),r=o(10),a=o(13),d=o(3),s=o(7),u=o.n(s),b=o(1);function l(t){var e=t.inputValue,o=t.addToDo,n=t.hendelChange;return Object(b.jsxs)("form",{className:u.a.form,children:[Object(b.jsx)("input",{onChange:function(t){return n(t)},className:u.a.input,value:e}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),o()},className:u.a.button,children:"Add ToDo"})]})}function j(){var t=Object(i.c)((function(t){return t.inputTodo})),e=Object(i.c)((function(t){return t.todoList})),o=Object(i.b)();return Object(b.jsx)(l,{inputValue:t,addToDo:function(){o({type:"UPDATE_TODO",todoList:[].concat(Object(d.a)(e),[{text:t,isCompleted:!1,todoId:Math.random().toString(36).substring(2,15)}])})},hendelChange:function(t){o({type:"INPUT_TODO",inputTodo:t.target.value})}})}var h=o(4),O=o.n(h);function x(t){var e=t.text,o=t.isCheck,n=t.idCheckbox,c=t.onChangeCheckbox,i=t.onDelet;return Object(b.jsxs)("div",{className:O.a.container,children:[Object(b.jsx)("input",{onChange:c,type:"checkbox",id:n,checked:o,className:O.a.checkbox}),Object(b.jsx)("label",{className:O.a.label,htmlFor:n}),Object(b.jsx)("label",{className:O.a.text,htmlFor:n,children:e}),Object(b.jsx)("button",{onClick:i,children:"Del"})]})}function p(t){var e=t.text,o=t.isCheck,n=t.idCheckbox,c=Object(i.c)((function(t){return t.todoList})),r=Object(i.b)();return Object(b.jsx)(x,{text:e,isCheck:o,idCheckbox:n,onChangeCheckbox:function(){return function(){var t=c.filter((function(t){return t.todoId===n}));t[0].isCompleted=!t[0].isCompleted,r({type:"UPDATE_TODO",todoList:Object(d.a)(c)})}()},onDelet:function(){return function(){var t=c.filter((function(t){return t.todoId!==n}));r({type:"UPDATE_TODO",todoList:Object(d.a)(t)})}()}})}var f=o(12),m=o.n(f);function _(){return Object(b.jsx)("div",{className:m.a.container,children:Object(b.jsx)("h1",{className:m.a.h1,children:"ToDo"})})}function C(){var t=Object(i.c)((function(t){return t.todoList}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{}),Object(b.jsx)(j,{}),t.map((function(t){return Object(b.jsx)(p,{text:t.text,isCheck:t.isCompleted,idCheckbox:t.todoId},t.todoId)}))]})}var T=o(5),v={inputTodo:"",todoList:[{text:"todo1",isCompleted:!1,todoId:"1"},{text:"todo2",isCompleted:!1,todoId:"2"},{text:"todo3",isCompleted:!1,todoId:"3"},{text:"todo4",isCompleted:!1,todoId:"4"}]},k=Object(r.createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_TODO":return Object(T.a)(Object(T.a)({},t),{},{inputTodo:"",todoList:e.todoList});case"INPUT_TODO":return Object(T.a)(Object(T.a)({},t),{},{inputTodo:e.inputTodo});default:return t}}),Object(a.composeWithDevTools)());c.a.render(Object(b.jsx)(i.a,{store:k,children:Object(b.jsx)(C,{})}),document.getElementById("root"))},4:function(t,e,o){t.exports={container:"item_container__sP-sP",text:"item_text__2-kJt",checkbox:"item_checkbox__2jZO5",label:"item_label__3_hqm"}},7:function(t,e,o){t.exports={form:"form_form__NqOqU",input:"form_input__3Lx6j",button:"form_button__151px"}}},[[23,1,2]]]);
//# sourceMappingURL=main.17ba416b.chunk.js.map