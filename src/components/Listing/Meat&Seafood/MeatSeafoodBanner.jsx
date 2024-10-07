import React from 'react';
import styles from './MeatSeafoodBanner.module.css';
import List from '../List';

function MeatSeafoodBanner() {
  const productCategory = 'meat&seafood';
  return (
    <>
      <div className={styles.meatSeafoodBannerBox}>
        <div className={styles.meatSeafoodMinibox1}>
          <h1 className={styles.meatSeafoodTitle}>FRESH MEAT</h1>
          <h5 className={styles.meatSeafoodSubtitle}>PREMIUM QUALITY</h5>
          <div className={styles.meatSeafoodTexts}>
            <p className={styles.meatSeafoodSaveText}>SAVE UP TO</p>
            <big className={styles.meatSeafoodDiscount}>60%</big>
            <p className={styles.meatSeafoodOffText}>OFF</p>
          </div>
        </div>
        <div className={styles.meatSeafoodMinibox2}></div>
      </div>
      <List productCategory={productCategory}/>
    </>
  );
}

export default MeatSeafoodBanner;