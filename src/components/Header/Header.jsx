import React from 'react';
import styles from './Header.module.css';
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { GiFruitBowl } from "react-icons/gi";
import { MdFreeBreakfast, MdBreakfastDining } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Header() {
  const cartItemCount = 3;
  const navigate = useNavigate();

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
          <input type='text' placeholder='Search for products...' />
          <CgProfile className={styles.profile} />
          <div className={styles.cartContainer}>
            <CiShoppingCart className={styles.cart} />
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
                <li><a className='dropdown-item' href='#'><GiFruitBowl /> Fruits & Vegetables</a></li>
                <li><a className='dropdown-item' href='#'><MdBreakfastDining /> Breakfast & Dairy</a></li>
                <li><a className='dropdown-item' href='#'><GiSlicedBread /> Breads & Bakery</a></li>
                <li><a className='dropdown-item' href='#'><IoFastFood /> Biscuits & Snacks</a></li>
                <li><a className='dropdown-item' href='#'><MdFreeBreakfast /> Beverages</a></li>
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
