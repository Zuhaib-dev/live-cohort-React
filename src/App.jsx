import React, { useState } from "react";
import Create from "./components/create";
import Read from "./components/Read";

const App = () => {
  const [users, setusers] = useState([
    { name: "Zuhaib", age: 17 },
    { name: "Zuhaib", age: 17 },
    { name: "Zuhaib", age: 17 },
  ]);
  return (
    <div>
      <Create />
      <Read users={users} setusers={setusers} />
    </div>
  );
};

export default App;
