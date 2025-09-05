import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import PageNotFound from '../pages/PageNotFound'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/createrecipes' element={<Create />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoutes