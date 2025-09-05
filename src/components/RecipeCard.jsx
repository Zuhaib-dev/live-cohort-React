import React, { useContext } from "react";
import { contextrecipe } from "../context/RecipeConetxt";

const RecipeCard = () => {
  const { data } = useContext(contextrecipe);

  return (
    <div className="card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-bold text-gray-900">
                {recipe.title}
              </h2>
              <p className="text-sm text-gray-700">{recipe.description}</p>

              <div>
                <h3 className="font-semibold text-gray-800">Ingredients:</h3>
                <p className="text-sm text-gray-600">{recipe.ingredients}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Instructions:</h3>
                <p className="text-sm text-gray-600">{recipe.instructions}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full shadow-sm">
                  {recipe.category}
                </span>
                <span className="text-sm font-medium text-gray-800">
                  👨‍🍳 {recipe.chef}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
