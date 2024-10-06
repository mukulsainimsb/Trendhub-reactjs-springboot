import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Hero1 from './components/HeroComponents/Hero1/Hero1'
import ContactUs from './components/ContactUs/ContactUs'
import About from './components/About/About'
import FruitsVegetablesBanner from './components/Listing/Fuits&Vegetables/Fruits&VegetablesBanner/FruitsVegetablesBanner'
import BeverageBanner from './components/Listing/BeverageList/BeverageBanner/BeverageBanner'
import List from './components/Listing/List'
import MeatSeafoodBanner from './components/Listing/Meat&Seafood/MeatSeafoodBanner'
import BreadsBakeryBanner from './components/Listing/Breads&Bakery/BreadsBakeryBanner/BreadsBakeryBanner'
import BreakfastdairyBanner from './components/Listing/Breakfast&dairy/BreakfastdairyBanner'
import ElectronicsBanner from './components/Listing/Electronics/ElectronicsBanner'
function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Hero1/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/beverages' element={<BeverageBanner/>}/>
      <Route path='/fruits&vegetables' element={<FruitsVegetablesBanner/>}/>
      <Route path='/meat&seafood' element={<MeatSeafoodBanner/>}/>
      <Route path='/bread&bakery' element={<BreadsBakeryBanner/>}/>
      <Route path='/breakfast&dairy' element={<BreakfastdairyBanner/>}/>
      <Route path='/electronics' element={<ElectronicsBanner/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
