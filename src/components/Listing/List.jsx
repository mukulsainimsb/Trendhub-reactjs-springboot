import React, { useContext, useEffect } from 'react';
import styles from './List.module.css';
import { TrendhubContext } from '../../ContextAPI/TrendhubContext';
import { useNavigate } from 'react-router-dom';

function List({productCategory}) {
  let filteredtems = [];
  const navigate = useNavigate();
  const {allProducts,addToCart} = useContext(TrendhubContext);
  if(Array.isArray(productCategory)){
    filteredtems = productCategory;
  }
  else{
   filteredtems = allProducts.filter((items)=>{
    return items.category=== productCategory;
  })
}
  const handleError=()=>{
    navigate('/contactus')
  }
  
  const handleAddToCart=(product,event)=>{
    event.preventDefault();
    event.stopPropagation();
    addToCart(product);
  }

  return (
    <div className={styles.listBox}>
      {filteredtems.length>0 ? filteredtems.map((items,index)=>{
        return (
        <div key={index} className={styles.listCard}>
          <div className={styles.listDiscountLabel}>{items.discount}% OFF</div>
          <img src={`http://localhost:8081/images/${items.image}`} alt='Beverage' className={styles.listImage} />
          <div className={styles.listText}>
            <h3 className={styles.listTitle}>{items.name}</h3>
           {items.stock ? <p style={{color:'green'}} className={styles.listStock}>IN STOCK</p> : <p style={{color:'red'}} className={styles.listStock}>OUT OF STOCK</p> } 
            <div className={styles.listPrice}>
              <p className={styles.listOriginalPrice}>${items.price}</p>
              <span className={styles.listDiscountedPrice}>${items.newPrice}</span>
            </div>
           </div>
          <button onClick={(event)=>handleAddToCart(items,event)} className={styles.listCartButton}>Add to cart</button>
        </div> )})
         : 
        <div className={styles.listCard}>
          <img src='empty.png' alt='Beverage' className={styles.listImage} />
          <div className={styles.listText}>
            <h3 className={styles.listTitle}>Not Found</h3>
           </div>
          <button onClick={handleError} className={styles.listCartButton}>Contact to Service Provider</button>
        </div>}
    </div>
  );
}

export default List;