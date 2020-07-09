const setTodosToLocalStorage = (todos) =>{
  localStorage.setItem("todos", JSON.stringify(todos));
}

const getTodosFromLocalStorage = () =>{
  return JSON.parse(localStorage.getItem("todos") || "[]");
}

const initialState = {
  todos:getTodosFromLocalStorage()
}


export default function rootReducer(state = initialState, action){

  switch (action.type) {
    case "TOGGLE_TODO_ITEM":{
      const id = action.payload;
      const newTodos = state.todos.map(todo => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        return todo;
      });
      setTodosToLocalStorage(newTodos);
      return {todos: newTodos};
    }

    case "REMOVE_TODO_ITEM":{
      const id = action.payload;
      const newTodos = state.todos.filter(todo => {
        return todo.id !== id;
      });
      setTodosToLocalStorage(newTodos);
      return {todos: newTodos};
    }

    case "ADD_TODO_ITEM":{
      const text = action.payload;
      const newTodos = [...state.todos];
      newTodos.push({id:Date.now(), caption:text, isCompleted:false});
      setTodosToLocalStorage(newTodos);
      return {todos: newTodos};
    }


    default: return state
  }

}
