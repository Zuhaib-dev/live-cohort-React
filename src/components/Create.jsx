import { nanoid } from "nanoid";
import React, { useState } from "react";

const create = (props) => {
  const todos = props.Todos;
  const settodos = props.setTodos;
  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let newTodos = {
      id: nanoid(),
      title,
      isComplete: false,
    };
    let copyTodos = [...todos];
    copyTodos.push(newTodos);
    settodos(copyTodos);
  };
  return (
    <>
      <h1>Start your day with the Todos</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Todo tilte"
        />
        <br />
        <br />
        <br />
        <button>Create Todo</button>
        <hr />
      </form>
    </>
  );
};

export default create;
