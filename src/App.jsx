import React from 'react'
import Navbar from './Components/Navbar'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className='bg-black text-white h-screen w-screen px-60'> 
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App