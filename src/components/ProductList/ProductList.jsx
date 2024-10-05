import React, { useContext, useEffect } from 'react'
import styles from './ProductList.module.css'
import ProductCount from '../ProductCount/ProductCount'
import { TrendhubContext } from '../../ContextAPI/TrendhubContext'

function ProductList() {

    const {allProducts} = useContext(TrendhubContext);

    useEffect(()=>{
            if(allProducts!=='' && allProducts.length>0){
                console.log(allProducts[1])
            }
        },[allProducts]
    );

    const DisplayIndexesLeft = [8,22,44,67];
    const DisplayIndexesRight = [23,66,46,93,72,83];

  return (
    <>
    <div className={styles.box}>
        <div className={styles.boxleft}>
            {allProducts.length>0 ? DisplayIndexesLeft.map(
                (index)=>{
                    const Product = allProducts[index];
                    return (
                        <div key={index} className={styles.container}>
                <div className={styles.containerimg}>
                <img src={`http://localhost:8081/images/${Product.image}`}></img>
            </div>
            <div className={styles.containertext}>
                <h6>{Product.name}</h6>
                <p className={styles.oldprice}>${Product.price}</p>
                <p className={styles.newprice}>${Product.newPrice}</p>
            </div>
            </div> 
                    ) } ) : (<p>No Products Available</p> )
                }
            </div>
       
       
        <div className={styles.boxright}>  
            {allProducts.length> 0 ? DisplayIndexesRight.map((index)=>{
                const ProductRight = allProducts[index];
                return (
                    <div className={styles.card}>
    <div className={styles.discountLabel}>{ProductRight.discount}% OFF</div>
    <img src={`http://localhost:8081/images/${ProductRight.image}`} alt='image' />
    <div>
        <h6>{ProductRight.name}</h6>
        {ProductRight.stock ? <p style={{color: 'green'}}>IN STOCK</p> : <p style={{color: 'red'}}>OUT OF STOCK</p>}
        <div className={styles.price}>
            <p>${ProductRight.price}</p>
            <span>${ProductRight.newPrice}</span>
        </div>
    </div>
    <button className={styles.cartbtn}>Add to cart</button>
   </div> 
          )
            }) : <p>No Items Available</p>
            }
        </div>
    </div>
    <ProductCount/>
    </>
  )
}

export default ProductList