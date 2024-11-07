import React, { useContext, useEffect } from 'react'
import styles from './ProductList.module.css'
import ProductCount from '../ProductCount/ProductCount'
import { TrendhubContext } from '../../ContextAPI/TrendhubContext'
import { useNavigate } from 'react-router-dom'
import { toast, Zoom } from 'react-toastify';

function ProductList() {
    const navigate = useNavigate();

    const {allProducts,addToCart} = useContext(TrendhubContext);

    useEffect(()=>{
            if(allProducts && allProducts.length>0){
                console.log(allProducts[1])
            }
        },[allProducts]
    );

    const handleProduct=(products)=>{
        navigate('/product', { state: { products } });
      }

    const DisplayIndexesLeft = [8,22,44,67];
    const DisplayIndexesRight = [23,66,46,93,72,83];

    const handleAddToCart=(product,event)=>{
        event.preventDefault();
        event.stopPropagation();
        toast.success('item is added', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom
            });
        addToCart(product);
    }
  return (
    <>
    <div className={styles.box}>
        <div className={styles.boxleft}>
            {allProducts && allProducts.length>0 ? DisplayIndexesLeft.map(
                (index)=>{
                    const Product = allProducts[index];
                    return (
                        <div onClick={()=>handleProduct(Product)} key={index} className={styles.container}>
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
            {allProducts && allProducts.length> 0 ? DisplayIndexesRight.map((index)=>{
                const ProductRight = allProducts[index];
                return (
                    <div onClick={()=>handleProduct(ProductRight)} key={index} className={styles.card}>
    <div className={styles.discountLabel}>{ProductRight.discount}% OFF</div>
    <img src={`http://localhost:8081/images/${ProductRight.image}`} alt='image' />
    <div>
        <h6 className={styles.pdname}>{ProductRight.name}</h6>
        {ProductRight.stock ? <p style={{color: 'green', fontSize:'0.8em'}}>IN STOCK</p> : <p style={{color: 'red', fontSize:'0.8em'}}>OUT OF STOCK</p>}
        <div className={styles.price}>
            <p>${ProductRight.price}</p>
            <span>${ProductRight.newPrice}</span>
        </div>
    </div>
    <button onClick={(event)=>handleAddToCart(ProductRight,event)} className={styles.cartbtn}>Add to cart</button>
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