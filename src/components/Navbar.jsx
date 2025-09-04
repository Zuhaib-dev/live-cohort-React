import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-10 p-8'>
        <NavLink className={(e)=>e.isActive ? 'text-rose-500'  : ""} to={'/'}>Home</NavLink>
        <NavLink className={(e)=>e.isActive ? 'text-rose-500'  : ""} to={'/recipes'}>Recipes</NavLink>
        <NavLink className={(e)=>e.isActive ? 'text-rose-500'  : ""} to={'/about'}>About</NavLink>
        <NavLink className={(e)=>e.isActive ? 'text-rose-500'  : ""} to={'/createrecipes'}>CreateRecipes</NavLink>
    </div>
  )
}

export default Navbar