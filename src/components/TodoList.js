import React from "react";
import TodoItem from "./TodoItem";
import {connect} from "react-redux";


const TodoList = props =>{

  const list = props.todos.map(todo =>
    <TodoItem
     key = {todo.id}
     id = {todo.id}
     caption={todo.caption}
     isCompleted={todo.isCompleted}
  />

  );

  return(
    <div style={{width:"50%", margin:"0 auto 10rem auto"}}>

      { props.todos.length
              ? list
              : <p style={{textAlign:"center", color:"#606060"}}>У вас нет заданий</p>}

    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos:state.todos
  }
}

export default connect(mapStateToProps, null)(TodoList);
