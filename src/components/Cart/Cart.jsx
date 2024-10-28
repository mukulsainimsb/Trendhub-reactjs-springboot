import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { TrendhubContext } from '../../ContextAPI/TrendhubContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems,setCartItems} = useContext(TrendhubContext);
  const navigate = useNavigate();
  const handleQuantityChange=(item, change)=>{
    console.log(cartItems)
    setCartItems((prevItems)=>
      prevItems.map((items)=>{
        if(items.id===item){
          const newQuantity = items.quantity + change;
          return {...items, quantity:newQuantity > 0 ? newQuantity : 1}
        }
        return items;
      })
    )
  }
  const handleRemove=(itemId)=>{
    setCartItems((prevItems)=>{
     return prevItems.filter((item)=>{
        return item.id!=itemId;
      })
    })
  }

  const proceedButton=(totalItems,total,discount,subtotal)=>{
      navigate('/checkout', { state: { totalItems,total,discount,subtotal } });
  }

  const handleRemoveAll=()=>{
    setCartItems([]);
  }
  const totalItems = cartItems.reduce((total,item)=> item.quantity+total,0);
  const subtotal = cartItems.reduce((total,item)=> item.newPrice* item.quantity +total,0).toFixed(2);
  const total = cartItems.reduce((total,item)=> item.price* item.quantity +total,0).toFixed(2);
  const discount = cartItems.reduce((total, item) => {
    const itemDiscount = (item.price - item.newPrice) * item.quantity;
    return total + itemDiscount;
}, 0).toFixed(2);

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <div className={styles.cartItems}>
        {cartItems ? (
          cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={`http://localhost:8081/images/${item.image}`} alt={item.name} className={styles.productImage} />
              <div className={styles.itemDetails}>
                <h2 className={styles.cartitemName}>{item.name}</h2>
                <p className={styles.price}>Price : ${item.newPrice.toFixed(2)}</p>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleQuantityChange(item.id, -1)} className={styles.quantityButton}>-</button>
                  <span>Quantity : {item.quantity}</span>
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
        <p>Total Items: {totalItems} </p>
        <p>Price: {total}</p>
        <p>Discount: ${discount}</p>
        <p>Subtotal: ${subtotal}</p>
        <div className={styles.btn}>
        <button className={styles.proceedButton} onClick={()=>proceedButton(totalItems,total,discount,subtotal)}>Proceed to Buy</button>
        <button onClick={handleRemoveAll} className={styles.removeAllButton}>Remove All Items</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
