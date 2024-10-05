import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Hero1 from './components/HeroComponents/Hero1/Hero1'
import ContactUs from './components/ContactUs/ContactUs'
import About from './components/About/About'
function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Hero1/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
