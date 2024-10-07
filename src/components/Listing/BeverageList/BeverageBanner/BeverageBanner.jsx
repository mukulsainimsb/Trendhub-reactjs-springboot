import React from 'react';
import styles from './BeverageBanner.module.css';
import List from '../../List'
function BeverageBanner() {
  const productCategory = 'beverages';
  return (
    <>
      <div className={styles.beverageBox}>
        <div className={styles.beverageMinibox1}>
          <h1 className={styles.beverageTitle}>SUMMER</h1>
          <h5 className={styles.beverageSubtitle}>FRESH DRINKS</h5>
          <p className={styles.beverageSavings}>SAVE UP TO</p>
          <big className={styles.beverageDiscount}>25%</big>
          <p className={styles.beverageOff}>OFF</p>
        </div>
        <div className={styles.beverageMinibox2}></div>
      </div>
      <List productCategory={productCategory}/>
    </>
  );
}

export default BeverageBanner;
