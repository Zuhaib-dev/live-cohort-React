import React from 'react'
import Navbar from './components/Navbar'
import Mainroutes from './Routes/Mainroutes'

const App = () => {
  return (
    <div className='w-screen h-screen bg-black text-white px-50'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App