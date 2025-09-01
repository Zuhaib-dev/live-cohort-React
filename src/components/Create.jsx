import { nanoid } from "nanoid";
import React, { useState } from "react";

const create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let newtodos = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    let copytodos = [...todos];
    copytodos.push(newtodos);
    settodos(copytodos);
    settitle('')
  };
  return (
    <>
      <h1>Start Your day with the Todos</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Todo Title"
        />
        <br />
        <br />
        <br />
        <button>Create Todo</button>
      </form>
      <hr />
    </>
  );
};

export default create;
