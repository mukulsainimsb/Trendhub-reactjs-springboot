import React from 'react'
import styles from './BestSellers.module.css'
import { FaLongArrowAltRight } from "react-icons/fa";

function BestSellers() {
  return (
    <>
    <div className={styles.box}>
        <div className={styles.boxleft}>
            <div className={styles.boxleft1}>
            <h2>Organic<br/>Dry Fruits</h2>
            <p>UPTO</p>
            <h1>70%<span>OFF</span></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                elit. Corrupti, deserunt!</p>
                <button>SHOP NOW</button>
                </div>
        </div>
        <div className={styles.boxright}>
            <div className={styles.rightup}>
            <div className={styles.rightup1}>
                <h4>BEST SELLERS</h4>
                <p>Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit.</p>
            </div>
            <div className={styles.rightup2}>
                <button>View All <FaLongArrowAltRight /></button>
            </div>
            </div>
            <div className={styles.rightdown}>
            <div className={styles.card}>
    <div className={styles.discountLabel}>25% OFF</div>
    <img src='spices.jpg' alt='image' />
    <div>
        <h6>Lorem ipsum dolor sit.</h6>
        <p>IN STOCK</p>
        <div className={styles.price}>
            <p>$9.35</p>
            <span>$7.25</span>
        </div>
    </div>
    <button className={styles.cartbtn}>Add to cart</button>
</div>
<div className={styles.card}>
    <div className={styles.discountLabel}>25% OFF</div>
    <img src='spices.jpg' alt='image' />
    <div>
        <h6>Lorem ipsum dolor sit.</h6>
        <p>IN STOCK</p>
        <div className={styles.price}>
            <p>$9.35</p>
            <span>$7.25</span>
        </div>
    </div>
    <button className={styles.cartbtn}>Add to cart</button>
</div>
<div className={styles.card}>
    <div className={styles.discountLabel}>25% OFF</div>
    <img src='spices.jpg' alt='image' />
    <div>
        <h6>Lorem ipsum dolor sit.</h6>
        <p>IN STOCK</p>
        <div className={styles.price}>
            <p>$9.35</p>
            <span>$7.25</span>
        </div>
    </div>
    <button className={styles.cartbtn}>Add to cart</button>
</div>
        

            </div>
        </div>

    </div>
    </>
  )
}

export default BestSellers