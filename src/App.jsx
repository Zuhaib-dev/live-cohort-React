import { useState } from "react";
import Create from "./components/create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kam ker ly", isCompleted: false },
  ]);
  return (
    <div>
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
