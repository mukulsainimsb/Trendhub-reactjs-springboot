import React, { useState } from 'react';
import styles from './Cart.module.css';

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      image: 'https://via.placeholder.com/100',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      image: 'https://via.placeholder.com/100',
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
    ));
  };

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleRemoveAll = () => {
    setItems([]);
  };

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <div className={styles.cartItems}>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <div className={styles.itemDetails}>
                <h2 className={styles.itemName}>{item.name}</h2>
                <p className={styles.price}>${item.price.toFixed(2)}</p>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleQuantityChange(item.id, -1)} className={styles.quantityButton}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)} className={styles.quantityButton}>+</button>
                </div>
              </div>
              <button onClick={() => handleRemove(item.id)} className={styles.removeButton}>Remove</button>
            </div>
          ))
        ) : (
          <p className={styles.emptyCart}>Your cart is empty</p>
        )}
      </div>
      <div className={styles.subtotalCard}>
        <h3>Cart Summary</h3>
        <p>Total Items: {totalItems}</p>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <div className={styles.btn}>
        <button className={styles.proceedButton}>Proceed to Buy</button>
        <button onClick={handleRemoveAll} className={styles.removeAllButton}>Remove All Items</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
