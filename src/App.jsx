import { nanoid } from "nanoid";
import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [todos, settodos] = useState([
    { id: 1, title: "Kam ker ly", isCompleted: false },
  ]);
  const submitHandler = (e) => {
    e.preventDefault();
    let newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    let copyTodos = [...todos];
    copyTodos.push(newTodo);
    settodos(copyTodos);
  };
  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });
  return (
    <div>
      <h1>TOdos </h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="TOdo Title"
        />
        <br />
        <br />
        <button>Create Todo </button>
      </form>
      <hr />
      <h1>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default App;
