import React from 'react'
import styles from './ProductList.module.css'

function ProductList() {
  return (
    <div className={styles.box}>
        <div className={styles.boxleft}>
            <div className={styles.container}>
                <div className={styles.containerimg}>
                <img src='dryfruit.jpg'></img>
            </div>
            <div className={styles.containertext}>
                <h6>Lorem ipsum dolor sit</h6>
                <p className={styles.oldprice}>$5.75</p>
                <p className={styles.newprice}>$4.99</p>
            </div>
        </div>
        <div className={styles.container}>
                <div className={styles.containerimg}>
                <img src='dryfruit.jpg'></img>
            </div>
            <div className={styles.containertext}>
                <h6>Lorem ipsum dolor sit</h6>
                <p className={styles.oldprice}>$5.75</p>
                <p className={styles.newprice}>$4.99</p>
            </div>
        </div>
        <div className={styles.container}>
                <div className={styles.containerimg}>
                <img src='dryfruit.jpg'></img>
            </div>
            <div className={styles.containertext}>
                <h6>Lorem ipsum dolor sit</h6>
                <p className={styles.oldprice}>$5.75</p>
                <p className={styles.newprice}>$4.99</p>
            </div>
        </div>
        <div className={styles.container}>
                <div className={styles.containerimg}>
                <img src='dryfruit.jpg'></img>
            </div>
            <div className={styles.containertext}>
                <h6>Lorem ipsum dolor sit</h6>
                <p className={styles.oldprice}>$5.75</p>
                <p className={styles.newprice}>$4.99</p>
            </div>
        </div>
        </div>
        <div className={styles.boxright}>
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
  )
}

export default ProductList