import React, { useState } from "react";

const create = (props) => {
  const [fullname, setfullname] = useState("");
  const [age, setage] = useState(17);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let newUSer = { fullname, age };
          console.log(newUSer);
        }}
      >
        <h1>2-way Binding and Props Driling</h1>
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
    </div>
  );
};

export default create;
