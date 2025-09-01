import React from "react";

const Read = (props) => {
  const todos = props.Todos;
  const settodos = props.setTodos;
  const deletehandeler = (id)=>{
    let filterTodos = todos.filter((todo)=> todo.id != id)
    settodos(filterTodos)
  }
  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title} | <span onClick={()=>deletehandeler(todo.id)}>Delete</span>
     
    </li> 
  });

  return (
    <>
      <h1>Pending Todos </h1>
      <ol>{renderTodos}</ol>
    </>
  );
};

export default Read;
