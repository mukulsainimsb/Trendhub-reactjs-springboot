import React from 'react'
import styles from './Hero1.module.css'
import BestSellers from '../../BestSellers/BestSellers'
function Hero1() {
  return (
    <>
    <div className={styles.mainbox}>
    <div className={styles.box}>
      <div className={styles.ibox}>
        <p>GET 20% DISCOUNT IN EVERY BASKET</p>
        <h1>SUPER FRUIT SALE</h1>
        <p>This Sunday@7pm<br/> Don't miss...</p>
        <p>from<span>$7.99</span></p>
        </div>
        <div>
        </div>
    </div>
    </div>
    <BestSellers/>
    </>
  )
}

export default Hero1