import React, { createContext, useEffect, useState } from "react";
export const contextrecipe = createContext(null);

const RecipeConetxt = (props) => {
  const [data, setdata] = useState([]);
  useEffect(()=>{
    setdata(JSON.parse(localStorage.getItem('recipes')) || [])
  },[])
  return (
    <contextrecipe.Provider value={{ data, setdata }}>
      {props.children}
    </contextrecipe.Provider>
  );
};

export default RecipeConetxt;