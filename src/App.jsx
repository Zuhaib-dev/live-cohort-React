import React from 'react'
const parameterHandler = (msg)=> alert(msg)
const App = () => {
  return (
    <button onClick={()=>parameterHandler("Ly tera autoCall")}> 
      With Paramter
    </button>
  )
}

export default App