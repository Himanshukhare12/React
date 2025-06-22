import './App.css'
import Home from './Components/Home/Home.jsx'
import {createBrowserRouter, createRoutesFromElements, Route,Routes } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { githubLoader }  from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'


export const appRouter=createBrowserRouter(createRoutesFromElements(
      <Route path='/' element=<Layout /> >
      <Route path='' element=<Home /> ></Route>
      <Route path='About' element=<About /> ></Route>
      <Route path='Contact' element=<Contact /> ></Route>
      <Route path='User/:userId' element=<User />></Route>
      <Route loader= {githubLoader} path='Github' element={<Github />} ></Route>
      </Route>    
))
