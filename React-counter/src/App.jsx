import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[value,setValue]=useState(5)
  const addValue=()=>{
    if(value==20)
    return
    setValue(value+1)
  }
  const removeValue=()=>{
    if(value==0)
      return
    setValue(value-1)
  }
  return (
    <>
      <h1>Counter {value}</h1>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
