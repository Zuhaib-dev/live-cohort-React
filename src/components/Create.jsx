import React, { useState } from "react";

const create = (props) => {
  const [fullname, setfullname] = useState("");
  const [age, setage] = useState("17");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let newUser = { fullname, age };
          console.log(newUser);
        }}
      >
        <h1>Props driling, usesate and 2 way binding</h1>
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
        <hr />
      </form>
    </div>
  );
};

export default create;
