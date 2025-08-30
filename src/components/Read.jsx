import React from "react";

const Read = (props) => {
  const users = props.users;
  const renderUsers = users.map((user, index) => {
    return (
      <li key={index}>
        <span> {user.name} </span> |
        <small>  {user.age}</small>
      </li>
    );
  });
  return (
    <div>
      <h1>UserData</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default Read;
