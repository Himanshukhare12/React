import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
   
  return (
    <>
    <h1 className="text-3xl font-bold underline bg-black">
      Hello world!
    </h1>
    <h2 className='bg-slate-700 border-spacing-2 bg-blend-color-burn'>Hello Himanshu</h2>
    <div className='flex'>
    <Card name="Steve" location="London" link="https://images.pexels.com/photos/30974951/pexels-photo-30974951.jpeg"/>
    <Card name="Rock" location="paris" link="https://images.pexels.com/photos/32535458/pexels-photo-32535458.jpeg"/>
    <Card name="Stephen" location="Japan" link="https://images.pexels.com/photos/32244002/pexels-photo-32244002.jpeg"/>
    <Card name="Mark" location="Egypt" link="https://images.pexels.com/photos/30173732/pexels-photo-30173732.jpeg"/>
    </div>
    
    
    </>
  )
}

export default App
