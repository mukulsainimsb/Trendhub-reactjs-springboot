import React from 'react';
import styles from './BreadsBakeryBanner.module.css';

function BreadsBakeryBanner() {
  return (
    <>
      <div className={styles.bakeryBannerBox}>
        <div className={styles.bakeryMinibox1}>
          <h1 className={styles.bakeryTitle}>QUALITY</h1>
          <h5 className={styles.bakerySubtitle}>FRESH BREADS</h5>
          <p className={styles.bakerySavings}>DISCOUNT UP TO</p>
          <big className={styles.bakeryDiscount}>30%</big>
          <p className={styles.bakeryOff}>OFF</p>
        </div>
        <div className={styles.bakeryMinibox2}></div>
      </div>
    </>
  );
}

export default BreadsBakeryBanner;