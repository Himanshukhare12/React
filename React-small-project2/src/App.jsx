import { useState ,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const[length,setLength]=useState(8)
  const[numberAllowed, setNumberAllowed]=useState(false)
  const[characterAllowed,setCharacterAllowed]=useState(false);
  const[password,setPassword]=useState("");
  
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)
    str+="0123456789"
    if(characterAllowed)
    str+="!@#$%^&*-_+=[]{}~`"  
    for(let i=0;i<length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }  
    setPassword(pass);


  },[length,numberAllowed,characterAllowed,setPassword])
  const copyToCLipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5) Read about this also in documentation
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  const passwordRef=useRef(null);
  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder="Password"
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyToCLipboard} 
          className='hover:bg-gray-800 outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} />
            <label> Length: {length}</label>
          </div>
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }} />
          <label htmlFor='numberInput'>Numbers</label>
          <input type="checkbox" defaultChecked={characterAllowed} id="characterInput" onChange={()=>{
            setCharacterAllowed((prev)=>!prev);
          }} />
          <label htmlFor='characterInput'>Characters</label>
        </div>
        </div>
        
    </>
  )
}

export default App
