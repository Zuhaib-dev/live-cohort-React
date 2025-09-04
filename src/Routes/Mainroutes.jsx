import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Products from '../Components/Products'
import Services from '../Components/Services'
import About from '../Components/About'
import ProductDetail from '../Components/ProductsDetail'
import ServiceDetail from '../Components/ServiceDetail'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/detail/:name' element={<ProductDetail />} />
      <Route path='/services' element={<Services />} >
      <Route path='/services/detail' element={<ServiceDetail />} />
      </Route>
      
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default Mainroutes