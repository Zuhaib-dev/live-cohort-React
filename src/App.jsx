import { useState } from "react";
import Read from "./components/Read";
import Create from "./components/create";
const App = () => {
  return (
    <div className="flex text-white  p-10  w-screen h-screen bg-gray-700">
      <Create />
      <Read />
    </div>
  );
};

export default App;
