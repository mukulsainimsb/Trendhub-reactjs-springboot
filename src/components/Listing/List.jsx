import React from 'react';
import styles from './List.module.css';

function List() {
  return (
    <div className={styles.listBox}>
      {Array(5).fill().map((_, index) => (
        <div key={index} className={styles.listCard}>
          <div className={styles.listDiscountLabel}>25% OFF</div>
          <img src='beverage.jpg' alt='Beverage' className={styles.listImage} />
          <div className={styles.listText}>
            <h3 className={styles.listTitle}>Coffee</h3>
            <p className={styles.listStock}>IN STOCK</p>
            <div className={styles.listPrice}>
              <p className={styles.listOriginalPrice}>$7.99</p>
              <span className={styles.listDiscountedPrice}>$4.99</span>
            </div>
           </div>
          <button className={styles.listCartButton}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default List;