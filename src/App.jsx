import React, { useState } from "react";

const App = () => {
  const [username, setusername] = useState("Sarthak",);
  const changeHandler = () => {
    setusername("Zuhaib",);
  };

  return (
    <div>
      <h1>Change Username</h1>
      <h2>{username}</h2>
      <button onClick={changeHandler}>click to Chnge Username</button>
    </div>
  );
};

export default App;
