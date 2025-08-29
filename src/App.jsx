import React, { useState } from "react";

const App = () => {
  const [username, setusername] = useState("Sarthak");
  return (
    <div>
      <h1>Changing userName using useStat Hook</h1>
      <h2>{username}</h2>
      <button onClick={() => setusername("Zuhaib")}>Click to Change </button>
    </div>
  );
};

export default App;
