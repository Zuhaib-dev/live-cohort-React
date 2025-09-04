import React, { useContext } from "react";
import { recipecontext } from "../Context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderRecipes = data.map((recipe) => (
    <li key={recipe.id}>
      <span>{recipe.title}</span>
    </li>
  ));

  return (
    <ul>
      {renderRecipes}
    </ul>
  );
};

export default Recipes;
