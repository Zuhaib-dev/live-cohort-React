import React from "react";

const Read = (props) => {
  const todos = props.Todos;
  const settodos = props.setTodos;
  const deletehandeler = (id) => {
    let filterTodos = todos.filter((todo) => todo.id != id);
    settodos(filterTodos);
  };
  const clearAllHandler = (id)=>{
    let clearAll = todos.filter((todo)=> todo.id != id)
    settodos([])
  }
  const renderTodos = todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.title} |{" "}
        <span
          className="text-red-700 active:scale-95 cursor-pointer px-3"
          onClick={() => deletehandeler(todo.id)}
        >
          Delete
        </span>
        |
        <span
          className="text-red-700 active:scale-95 cursor-pointer px-3"
          onClick={() => clearAllHandler(todo.id)}
        >
           Clear All
        </span>
      </li>
    );
  });

  return (
    <div className="w-[40%]">
      <h1 className="text-5xl font-thin mb-10">Pending Todos </h1>
      <ol className="text-3xl font-thin mb-10">{renderTodos}</ol>
    </div>
  );
};

export default Read;
