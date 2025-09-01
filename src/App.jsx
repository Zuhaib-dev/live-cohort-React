import { useState } from "react";
import Read from "./components/Read";
import Create from "./components/create";

const App = () => {
  const [Todos, setTodos] = useState([
    { id: 1, title: "Kuch to ker", isCompleted: false },
  ]);
  return (
    <>
      <Create Todos={Todos} setTodos={setTodos} />
      <Read Todos={Todos} setTodos={setTodos} />
    </>
  );
};

export default App;
