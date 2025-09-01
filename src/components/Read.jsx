import React from "react";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const renderTodos = todos.map((todo)=>{
    return <li key={todo.id}>
      {todo.title}
    </li>
  }
  )
  return (
    <div>
      <h1>Pending Todo's</h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default Read;
