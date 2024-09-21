import React from 'react';
import styles from './FooterCard.module.css';
import AllCategoryList from '../CategoryListing/AllCategoryList';

function FooterCard() {
  return (
    <>
    <div className={styles.box}>
        <div className={styles.ibox}>
      <h6 className={styles.discount}>Upto 60% Discount On Your First Order</h6>
      <h1 className={styles.title}>Join Our Newsletter And Get...</h1>
      <p className={styles.description}>
        Join Our Email Subscription Now To Get Updates On Promotion And Coupon
      </p>
      <div className={styles.inputContainer}>
        <input type='text' placeholder='Enter Your Email...' className={styles.input} />
        <button className={styles.btn}>Subscribe</button>
      </div>
      </div>
    </div>
    <AllCategoryList/>
    </>
    );
}

export default FooterCard;