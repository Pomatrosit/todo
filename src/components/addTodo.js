import React, {useState} from "react";
import "./addTodo.css";
import {connect} from "react-redux";

const AddTodo = props => {

  let [text, setText] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.addTodoItem(text);
    setText("");
  }

  const disabled = text.length>=2 ? false :true;

  return (
    <div className = "add-todo">
       <form className= "add-todo-inner" onSubmit= {submitFormHandler}>
         <input
           className="add-todo-input"
           type="text"
           onChange = {e => setText(e.target.value)}
           value = {text}
           />
         <button type="submit"
           className="btn btn-primary"
           disabled = {disabled}
           >Add todo</button>
       </form>
    </div>
  )
}

const mapDispatchToprops = dispatch => {
  return{
    addTodoItem:text => dispatch({type:"ADD_TODO_ITEM", payload:text})
  }
}

export default connect(null, mapDispatchToprops)(AddTodo);
