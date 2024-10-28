import React, { useContext } from 'react';
import styles from './Header.module.css';
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { GiFruitBowl } from "react-icons/gi";
import { MdFreeBreakfast, MdBreakfastDining } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { GrTechnology } from "react-icons/gr";
import Product from '../Product/Product';
import { TrendhubContext } from '../../ContextAPI/TrendhubContext';
import { retrieveAllProducts } from '../../TrendhubAPI/TrendhubApi';
import { CiLogin } from "react-icons/ci";


function Header() {
  const navigate = useNavigate();
  const {cartItems, isAuthenticated} = useContext(TrendhubContext);
  const cartItemCount = cartItems.length;

  const handleSearch=(event)=>{
    const keyword = event.target.value;
    navigate('/search', {state : {keyword}})
  }
  return (
    <>
      <div className={styles.box}>
        <div className={styles.box1}>
          <h1>TRENDHUB</h1>
          <div className="btn-group">
            <button className={`btn btn-lg dropdown-toggle ${styles.btn1}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Location
            </button>
            <ul className="dropdown-menu">
              <li><Link className='dropdown-item' to='#'>hello</Link></li>
            </ul>
          </div>
          <input onChange={handleSearch} type='text' placeholder='Search for products...' />
         
         {isAuthenticated ?
              <CgProfile onClick={()=>navigate('/profile')} className={styles.profile} />
          :
          <CiLogin onClick={()=>navigate('/login')} className={styles.profile} /> }
        
          <div className={styles.cartContainer}>
            <CiShoppingCart className={styles.cart} onClick={()=>navigate('/cart')} />
            <span className={styles.cartCount}>{cartItemCount}</span>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.ibox1}>
            <div className="btn-group">
              <button className={`btn btn-lg dropdown-toggle ${styles.btn2}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                All Collections
              </button>
              <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to='/fruits&vegetables'><GiFruitBowl /> Fruits & Vegetables</Link></li>
                <li><Link className='dropdown-item' to='/breakfast&dairy'><MdBreakfastDining /> Breakfast & Dairy</Link></li>
                <li><Link className='dropdown-item' to='/bread&bakery'><GiSlicedBread /> Breads & Bakery</Link></li>
                <li><Link className='dropdown-item' to='/meat&seafood'><IoFastFood />Meat & Seafood</Link></li>
                <li><Link className='dropdown-item' to='/beverages'><MdFreeBreakfast /> Beverages</Link></li>
                <li><Link className='dropdown-item' to='/electronics'><GrTechnology /> Electronics</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.ibox2}>
            <ul>
              <li onClick={() => navigate('/')}>HOME</li>
              <li onClick={() => navigate('/electronics')}>ELECTRONICS</li>
              <li onClick={() => navigate('/bread&bakery')}>BAKERY</li>
              <li onClick={() => navigate('/beverages')}>BEVERAGES</li>
              <li onClick={() => navigate('/about')}>BLOG</li>
              <li onClick={() => navigate('/contactus')}>CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
