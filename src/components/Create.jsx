import { nanoid } from "nanoid";
import React, { useState } from "react";

const create = (props) => {
  const todos = props.todos
  const settodos = props.settodos
  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let newTodo = {
      id: nanoid(),
      title,
      isComplete: false,
    };
    let copyTodos = [...todos];
    copyTodos.push(newTodo);
    settodos(copyTodos);
    settitle("")
  };
  return (
    <div>
      <h1>Start your Day With your todo's</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Todo tiltle"
        />
        <br />
        <br />
        <button>Create Todo</button>
      </form>
      <hr />
    </div>
  );
};

export default create;
