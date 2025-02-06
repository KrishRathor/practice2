import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import axios from 'axios'
import GetData from './components/GetData'
import {Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Profile from './components/Profile'
import Home from './pages/Home'
import Details from './pages/Details'
import Personal from './pages/Personal'
import Sign from './pages/Sign'

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/personal_info' element={<Personal/>} />
        <Route path='/sign_in' element={<Sign/>} />
      </Routes>
      
    </>
  )
}
export default App;