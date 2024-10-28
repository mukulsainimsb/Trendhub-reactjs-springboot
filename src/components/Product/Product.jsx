import React, { useState } from 'react';
import styles from './Product.module.css';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const product = location.state?.products;
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
            src={`http://localhost:8081/images/${product.image}`}
            alt="Product"
            className={styles.productImage}
          />
        </div>

        
        <div className={styles.detailsSection}>
          <h1 className={styles.productName}>{product.name}</h1>
          <div className={styles.priceSection}>
            <p className={styles.price}>Price : ${product.price}</p>
            <div className={styles.rating}>
              <span>⭐⭐⭐⭐☆</span> (120 reviews)
            </div>
          </div>
          {product.stock ? <p style={{color:'green'}} className={styles.inStock}>IN STOCK</p>
           : <p style={{color:'red'}} className={styles.inStock}>OUT OF STOCK</p> }
          <p className={styles.productDescription}>
            Product Category : {product.category}
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
    </div>
  );
};

export default Product;
