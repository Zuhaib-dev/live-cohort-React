import React, { createContext, useState } from "react";
export const contextrecipe = createContext(null);

const RecipeConetxt = (props) => {
  const [data, setdata] = useState([]);
  return (
    <contextrecipe.Provider value={{ data, setdata }}>
      {props.children}
    </contextrecipe.Provider>
  );
};

export default RecipeConetxt;
