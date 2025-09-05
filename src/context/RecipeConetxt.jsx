import React, { createContext, useState } from "react";
export const contextrecipe = createContext(null);

const RecipeConetxt = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      chef: "Chef Antonio", // ✅ changed to string
      description:
        "A simple yet delicious pizza with fresh mozzarella, basil, and tomato sauce.",
      ingredients:
        "Pizza dough, Tomato sauce, Fresh mozzarella, Fresh basil leaves, Olive oil, Salt, Pepper", // ✅ textarea-friendly
      instructions:
        "Preheat oven to 475°F (245°C). Roll dough, spread sauce, add mozzarella and basil, drizzle oil, bake 12-15 mins until golden brown, then serve hot.", // ✅ merged array into single string
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      category: "Dinner", // ✅ single string value
    },
  ]);
  return (
    <contextrecipe.Provider value={{ data, setdata }}>
      {props.children}
    </contextrecipe.Provider>
  );
};

export default RecipeConetxt;
