import React from 'react';
import styles from './BreakfastdairyBanner.module.css';
import List from '../List';

function BreakfastdairyBanner() {

  const productCategory = 'breakfast&dairy';
  return (
    <>
      <div className={styles.breakfastDairyBannerBox}>
        <div className={styles.breakfastDairyMinibox1}>
          <h1 className={styles.breakfastDairyTitle}>BREAKFAST TIME</h1>
          <h5 className={styles.breakfastDairySubtitle}>ORDER NOW</h5>
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

export default BreakfastdairyBanner;
