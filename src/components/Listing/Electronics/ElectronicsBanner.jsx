import React from 'react';
import styles from './ElectronicsBanner.module.css';
import List from '../List';

function ElectronicsBanner() {
  const productCategory = 'Electronics';
  return (
    <>
      <div className={styles.breakfastDairyBannerBox}>
        <div className={styles.breakfastDairyMinibox1}>
          <h1 className={styles.breakfastDairyTitle}>MEGA TECH</h1>
          <h5 className={styles.breakfastDairySubtitle}>SALE</h5>
          <div className={styles.breakfastDairyTexts}>
            <p className={styles.breakfastDairySaveText}>GET UP TO</p>
            <big className={styles.breakfastDairyDiscount}>60%</big>
            <p className={styles.breakfastDairyOffText}>OFF</p>
          </div>
        </div>
        <div className={styles.breakfastDairyMinibox2}></div>
      </div>
      <List productCategory={productCategory}/>
    </>
  );
}

export default ElectronicsBanner;
