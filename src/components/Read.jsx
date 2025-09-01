import React from "react";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const deletehandeler = (id) => {
    const filtertodos = todos.filter((todo) => todo.id != id);
    settodos(filtertodos);
  };
  const claerHandler = (id) => {
    const clearTodos = todos.filter((todo) => todo.id != id);
    settodos([]);
  };
  const renderTodos = todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.title} |{" "}
        <span onClick={() => deletehandeler(todo.id)}>Delete</span>{" "}
        <span onClick={() => claerHandler(todo.id)}>Clear All</span>
      </li>
    );
  });

  return (
    <>
      <h1>Pendind Todos </h1>
      <ol>{renderTodos}</ol>
    </>
  );
};

export default Read;
