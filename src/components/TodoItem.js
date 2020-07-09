import React from "react";
import "./todoItem.css";
import {connect} from "react-redux";

const TodoItem = props => {
  const classNames = ["todo-caption"];

  if (props.isCompleted) classNames.push("completed");

  return(
     <div className="todo-item">
         <p
           className={classNames.join(" ")}
           onClick={() => props.toggleTodoItem(props.id)}
           >{props.caption}
         </p>

         <i
           className="fa fa-thumbs-up"
           aria-hidden="true"
           onClick={() => props.toggleTodoItem(props.id)}
           ></i>

         <div className="todo-cross" onClick = {() => props.removeTodoItem(props.id)}>
            <span className="todo-cross__span todo-cross__span1"></span>
            <span className="todo-cross__span todo-cross__span2"></span>
         </div>

     </div>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    toggleTodoItem: id => dispatch({type:"TOGGLE_TODO_ITEM", payload:id}),
    removeTodoItem: id => dispatch({type:"REMOVE_TODO_ITEM", payload:id})
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
