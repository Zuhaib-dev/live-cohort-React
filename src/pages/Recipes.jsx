import React, { useContext } from 'react'
import { contextrecipe } from '../context/RecipeConetxt'

const Recipes = () => {
  const {data} = useContext(contextrecipe)
  const renderdata = data.map((recipe)=>(
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
    </div>
  ))
  return (
    <div>
      {renderdata}
    </div>
  )
}

export default Recipes