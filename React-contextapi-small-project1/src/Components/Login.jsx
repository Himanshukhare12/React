import React from 'react'
import UserContext from '../Context/UserContext'
import { useState,useContext } from 'react'

function Login() {
    const[Username,setUsername]=useState('');
    const [Password, setPassword] = useState('');
  const{setUser}=useContext(UserContext)
  const handleSubmit=(e)=>{
         e.preventDefault()
         setUser({Username,Password})
  }
  return (
    <div>
     <h2>Login</h2>
     <input type='text' placeholder='Username' value={Username}
     onChange={(e)=>setUsername(e.target.value)}></input>
     <input type='password' placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)}></input>
     <button onClick={handleSubmit}>Submit</button>   
    </div>
  )
}

export default Login