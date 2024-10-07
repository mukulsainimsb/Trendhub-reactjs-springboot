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

function Header() {
  const navigate = useNavigate();
  const {cartItems} = useContext(TrendhubContext);
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
              <li><a className='dropdown-item' href='#'>hello</a></li>
            </ul>
          </div>
          <input onChange={handleSearch} type='text' placeholder='Search for products...' />
          <CgProfile onClick={()=>navigate('/profile')} className={styles.profile} />
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
                <li><a className='dropdown-item' href='/fruits&vegetables'><GiFruitBowl /> Fruits & Vegetables</a></li>
                <li><a className='dropdown-item' href='/breakfast&dairy'><MdBreakfastDining /> Breakfast & Dairy</a></li>
                <li><a className='dropdown-item' href='/bread&bakery'><GiSlicedBread /> Breads & Bakery</a></li>
                <li><a className='dropdown-item' href='/meat&seafood'><IoFastFood />Meat & Seafood</a></li>
                <li><a className='dropdown-item' href='/beverages'><MdFreeBreakfast /> Beverages</a></li>
                <li><a className='dropdown-item' href='/electronics'><GrTechnology /> Electronics</a></li>
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
