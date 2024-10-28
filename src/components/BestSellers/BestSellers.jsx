import React, { useContext } from 'react'
import styles from './BestSellers.module.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import Hero2 from '../HeroComponents/Hero2/Hero2';
import { TrendhubContext } from '../../ContextAPI/TrendhubContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function BestSellers() {
  const navigate = useNavigate();
    const {allProducts,addToCart} = useContext(TrendhubContext);
    const displayItems = [25,41,69];
    const handleProduct=(products)=>{
      navigate('/product', { state: { products } });
    }
    const handleError=()=>{
      navigate('/contactus')
    }
    const handleAddToCart=(product, event)=>{
      event.preventDefault();
      event.stopPropagation();
      addToCart(product);
    }

  return (
    <>
    <div className={styles.box}>
        <div className={styles.boxleft}>
            <div className={styles.boxleft1}>
            <h3>Organic<br/>Dry Fruits</h3>
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
            </div>
            <div className={styles.rightdown}>

        {allProducts && allProducts.length > 0 ? displayItems.map((index)=>{
          const Product = allProducts[index];
             return ( 
             <div onClick={()=>handleProduct(Product)} key={index} className={styles.card}>
             <div className={styles.discountLabel}>{Product.discount}% OFF</div>
              <img src={`http://localhost:8081/images/${Product.image}`} alt='image' />
              <div>
              <h6>{Product.name}</h6>
            {Product.stock ? <p style={{color:'green'}} className={styles.paragraph}>IN STOCK</p> 
              : <p style={{color:'red'}} className={styles.paragraph}>OUT OF STOCK</p> }
              <div className={styles.price}>
              <p>${Product.price}</p>
              <span>${Product.newPrice}</span>
              </div>
              </div>
           <button onClick={(event)=>handleAddToCart(Product, event)} className={styles.cartbtn}>Add to cart</button>
           </div> )
            }) 
            : 
            <div style={{padding:'10px'}} className={styles.card}>
            <div className={styles.discountLabel}>0% OFF</div>
             <img src='empty.png' alt='image' />
             <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
             <h6>No Item Available</h6>
          <button onClick={handleError} className={styles.cartbtn}>Contact to the Service Provider</button>
          </div>
          </div>
            }
            </div>
           </div>

    </div>
    <Hero2/>
    </>
  )
  
}

export default BestSellers