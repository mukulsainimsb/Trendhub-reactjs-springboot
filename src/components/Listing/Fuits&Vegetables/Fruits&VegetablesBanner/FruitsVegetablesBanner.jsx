import React from 'react';
import styles from './FruitsVegetablesBanner.module.css';
import BeverageBanner from '../../BeverageList/BeverageBanner/BeverageBanner';
import List from '../../List';

function FruitsVegetablesBanner() {
  const productCategory = 'fruits&vegetables';
  return (
    <>
      <div className={styles.fvBannerBox}>
        <div className={styles.fvMinibox1}>
          <h1 className={styles.fvTitle}>FRESH</h1>
          <h5 className={styles.fvSubtitle}>VEGETABLES</h5>
          <div className={styles.fvTexts}>
            <p className={styles.fvSaveText}>SAVE UP TO</p>
            <big className={styles.fvDiscount}>25%</big>
            <p className={styles.fvOffText}>OFF</p>
          </div>
        </div>
        <div className={styles.fvMinibox2}></div>
      </div>
      <List productCategory={productCategory}/>
    </>
  );
}

export default FruitsVegetablesBanner;