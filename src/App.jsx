import { nanoid } from "nanoid";
import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam ker ly", isCompleted: false },
  ]);
  const submitHandler = (e) => {
    e.preventDefault();
    let newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    let copytodos = [...todos];
    copytodos.push(newTodo);
    settodos(copytodos)
     
    settitle("")
    
  };

  const renderTodos = todos.map(todo => {
    return <li key={todo.id}> {todo.title}</li>
  })
  


  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>To-Do</h1>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Todo Title"
        />
        <br /> <br />
        <button>Create Todo</button>
      </form>
      <ol>
        {renderTodos}
      </ol>
    </div>
  );
};

export default App;
