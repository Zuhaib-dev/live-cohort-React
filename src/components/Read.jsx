import React, { useState } from "react";

const Read = (props) => {
  const users = props.users
  const setUSers = props.setUSers

  
 
  const renderUsers = users.map((user, index) => {
    return (
      <li key={index}>
        <span>Name: {user.name} </span> |<small> Age: {user.age}</small>
      </li>
    );
  });
  return (
    <div>
      <hr />
      <h1>User Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default Read;
