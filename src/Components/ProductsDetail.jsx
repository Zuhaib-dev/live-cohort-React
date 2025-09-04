import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductsDetail = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Poche 911 GT3 RS</h1>
        <h2>A Super Car</h2>
        <img className='object-cover h-100 w-100 rounded-2xl mb-6' src="https://images.unsplash.com/photo-1750210955902-ce0e71765fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
        <button onClick={()=> navigate(-1)} className='bg-rose-400 px-4 py-2 rounded-xl active:scale-95'>Go Back</button>
    </div>
  )
}

export default ProductsDetail