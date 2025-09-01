import { useState } from "react";
import Read from "./components/Read";
import Create from "./components/create";
const App = () => {
  const [Todos, setTodos] = useState([
    { id: 1, title: "Kuch to ker", isCompleted: false },
  ]);
  return (
    <div className="flex text-white  p-10  w-screen h-screen bg-gray-700">
      <Create Todos={Todos} setTodos={setTodos} />
      <Read Todos={Todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
