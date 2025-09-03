import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-10 p-10'>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Product</Link>
        <Link to={'/services'}>Service</Link>
        <Link to={'/about'}>About</Link>
    </div>
  )
}

export default Nav