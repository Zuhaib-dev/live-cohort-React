import React from 'react'
import Navbar from './Components/Navbar'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full px-6 sm:px-12 lg:px-20">
  <Navbar />
  <MainRoutes />
</div>
  )
}

export default App