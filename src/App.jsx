import { nanoid } from "nanoid";
import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam ker ly", isCompleted: false },
  ]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let newTodo = {
            id: nanoid(),
            title,
            isCompleted: false,
          };
          console.log(newTodo);
          
        }}
      >
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
    </div>
  );
};

export default App;
