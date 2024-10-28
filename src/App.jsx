import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hero1 from './components/HeroComponents/Hero1/Hero1'
import ContactUs from './components/ContactUs/ContactUs'
import About from './components/About/About'
import FruitsVegetablesBanner from './components/Listing/Fuits&Vegetables/Fruits&VegetablesBanner/FruitsVegetablesBanner'
import BeverageBanner from './components/Listing/BeverageList/BeverageBanner/BeverageBanner'
import MeatSeafoodBanner from './components/Listing/Meat&Seafood/MeatSeafoodBanner'
import BreadsBakeryBanner from './components/Listing/Breads&Bakery/BreadsBakeryBanner/BreadsBakeryBanner'
import BreakfastdairyBanner from './components/Listing/Breakfast&dairy/BreakfastdairyBanner'
import ElectronicsBanner from './components/Listing/Electronics/ElectronicsBanner'
import Product from './components/Product/Product'
import ScrollComponent from './components/ScrollComponent/ScrollComponent'
import AllProduct from './components/AllProductList/AllProduct'
import Cart from './components/Cart/Cart'
import Profile from './components/UserProfile/Profile'
import LoginForm from './components/Login/LoginForm'
import RegisterForm from './components/Register/RegisterForm'
import Checkout from './components/Checkout/Checkout'
function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollComponent/>
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
      <Route path='/product' element={<Product/>}/>
      <Route path='/search' element={<AllProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/login' element={<LoginForm/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
