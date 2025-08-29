import React, { useState } from "react";

const App = () => {
  const [users, setusers] = useState([
    { name: "Zuhaib", Age: 17 },
    { name: "Zuhaib", Age: 17 },
    { name: "Zuhaib", Age: 17 },
  ]);
  const renderUsers = users.map((user, index) => {
    return (
      <li key={index}>
        <span>{user.name}</span> |<small> {user.Age}</small>
      </li>
    );
  });
  const [fullname, setfullname] = useState("");
  const [age, setage] = useState(18);

  const formSubmit = (e) => {
    e.preventDefault();
    const newUser = { fullname, age };
    console.log(newUser);
  };

  return (
    <div>
      <h1>Register user</h1>
      <form onSubmit={formSubmit}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(e) => setage(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button>Submit</button>
      </form>
      <hr />
      <h2>USer Data</h2>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default App;
