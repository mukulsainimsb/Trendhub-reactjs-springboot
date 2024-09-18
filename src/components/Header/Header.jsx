import React from 'react'
import styles from './Header.module.css'
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { GiFruitBowl } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { MdBreakfastDining } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import Hero1 from '../HeroComponents/Hero1/Hero1';

function Header() {
  return (
    <>
    <div className={styles.box}>
         <div className={styles.box1}>
    <h1>TrendHub</h1>
               <div className="btn-group">
               <button className={`btn btn-lg dropdown-toggle ${styles.btn1}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Location
                 </button>
                 <ul className="dropdown-menu">
                 <li><a className='dropdown-item' href='#'>hello</a></li>
                 </ul>
                 </div>
                 <input type='text' placeholder='Search for products...'></input>
                 <CgProfile className={styles.profile}/>
                 <CiShoppingCart className={styles.cart}/>

        </div>
         <div className={styles.box2}>
            <div className={styles.ibox1}>
            <div className="btn-group">
            <button className={`btn btn-lg dropdown-toggle ${styles.btn2}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
               All Collections
                 </button>
                 <ul className="dropdown-menu">
                 <li><a className='dropdown-item' href='#'></a> <GiFruitBowl />   Fruits & Vegetables</li>
                 <li><a className='dropdown-item' href='#'></a> <MdBreakfastDining />   Breakfast & Dairy</li>
                 <li><a className='dropdown-item' href='#'></a> <GiSlicedBread />   Breads & Bakery</li>
                 <li><a className='dropdown-item' href='#'></a> <IoFastFood />   Biscuits & Snacks</li>
                 <li><a className='dropdown-item' href='#'></a> <MdFreeBreakfast/>   Beverages</li>
                 </ul>
                 </div>     
   </div>
   <div className={styles.ibox2}>
    <ul>
    <li>HOME</li>
    <li>SHOP</li>
    <li>BAKERY</li>
    <li>BEVERAGES</li>
    <li>BLOG</li>
    <li>CONTACT</li>
    </ul>
   </div>
        </div>
   </div>
   <Hero1></Hero1>
   </>
  )
}

export default Header