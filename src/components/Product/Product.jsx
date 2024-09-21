import React, { useState } from 'react';
import styles from './Product.module.css';

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.productCard}>
    
        <div className={styles.imageSection}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Product"
            className={styles.productImage}
          />
        </div>

        
        <div className={styles.detailsSection}>
          <h1 className={styles.productName}>Stylish Colorful Product</h1>
          <div className={styles.priceSection}>
            <p className={styles.price}>$49.99</p>
            <div className={styles.rating}>
              <span>⭐⭐⭐⭐☆</span> (120 reviews)
            </div>
          </div>
          <p className={styles.inStock}>In Stock</p>
          <p className={styles.productDescription}>
            This colorful product is perfect for your modern lifestyle. Made from premium materials, it’s designed to be durable, stylish, and comfortable.
          </p>

          
          <div className={styles.actions}>
            <div className={styles.quantityContainer}>
              <button onClick={decreaseQuantity} className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>{quantity}</span>
              <button onClick={increaseQuantity} className={styles.quantityButton}>+</button>
            </div>
            <button onClick={addToCart} className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className={styles.additionalInfo}>
        <h2>Product Information</h2>
        <p><strong>Expiry Date:</strong> December 31, 2025</p>
        <p><strong>MFG Date:</strong> January 01, 2023</p>
        <p><strong>Brand:</strong> Stylish Brand</p>
        <p>Known for innovation and quality, Stylish Brand delivers premium products designed for everyday life.</p>
      </div>
    </div>
  );
};

export default Product;
