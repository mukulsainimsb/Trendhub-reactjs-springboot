import React from 'react';
import styles from './Hero2.module.css';
import { GiShoppingBag } from "react-icons/gi";
import { IoDownloadSharp } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import ProductList from '../../ProductList/ProductList';

function Hero2() {
  return (
    <>
    <div className={styles.box}>
        <div className={styles.mainbox}>
      <div className={styles.boxleft}>
        <div className={styles.demo}>
        <h4>Best Bakery Product</h4>
        <h1>Fresh Products</h1>
        <h2>Every Hour</h2>
        <p>$24.99</p>
        <button className={styles.buybtn}>Shop Now</button>
        </div>
        </div>
        <div className={styles.boxleft1}>
            <div className={styles.boxleft1o}>
        <IoDownloadSharp className={styles.downloadbtn} />
        <h5><a href='#'>Download </a> The Trendhub App To Your Phone</h5>
        <hr></hr>
        <FaShippingFast className={styles.downloadbtn} />
        <h5>Order Now And Grab The Offers Within Time</h5>
        <hr></hr>
        <IoTimerSharp className={styles.downloadbtn} />
        <h5>Your Order Will Arrive At Your Door in 15 Minutes</h5>
        </div>
        </div>
      </div>
      <div className={styles.boxright}>
        <div className={styles.boxright1}>
          <GiShoppingBag className={styles.icon} />
          <h1>Shop Now</h1>
          <p>All the makeup, clothes & stuff you've been loving</p>
        </div>
        <div className={styles.boxright2}>
          <h1>HOT PRODUCT FOR THIS WEEK</h1>
          <p>Discover This Week's Hottest Picks, Handpicked Just For You</p>
        </div>
        <div className={styles.boxright3}>
          <div className={styles.boxright3img}>
            <img src='watch.jpg' alt='watch' />
          </div>
          <div className={styles.details}>
            <p className={styles.oldprice}>$9.65</p>
            <p className={styles.newprice}>$5.99</p>
            <h2>X-Pro Fitness Smartwatch</h2>
            <p className={styles.description}>Stay Connected and Fit with Our New Branding Smartwatch</p>
            <p className={styles.stock}>IN STOCK</p>
            <hr />
            <p>10:54:12</p>
          </div>
        </div>
      </div>
    </div>
    <ProductList/>
    </>
  );
}

export default Hero2;