import React from "react";

const Read = (props) => {
  const users = props.users;
  const renderUsers = users.map((user, index) => {
    return (
      <li key={index}>
        <span>Name: {user.name}</span> |<small> Age: {user.age}</small>
      </li>
    );
  });

  return (
    <div>
      <h1>USer Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default Read;
