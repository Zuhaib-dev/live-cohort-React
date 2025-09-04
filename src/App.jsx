import React from 'react'

import Nav from './Nav'
import MainRouts from './routes/MainRouts'

const App = () => {
  return (
    <div className='w-screen h-screen px-10 bg-gray-800 text-white'> 
    <Nav />
    <MainRouts />
   

    </div>
  )
}

export default App