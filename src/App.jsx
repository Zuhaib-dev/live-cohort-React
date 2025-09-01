import React, { useState } from "react";
import Read from "./components/Read";
import Create from "./components/create";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Ker ly kuch", isCompleted: false },
  ]);
  return (
    <>
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </>
  );
};

export default App;
