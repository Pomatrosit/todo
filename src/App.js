import React from 'react';
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/addTodo";


function App() {
  return (
    <div className="wrapper">
      <h1 className="title">Todos</h1>
      <hr/>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
