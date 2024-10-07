import React, { useContext, useEffect, useState } from 'react'
import styles from './ProductCount.module.css'
import FooterCard from '../FooterCard/FooterCard'
import { TrendhubContext } from '../../ContextAPI/TrendhubContext'

function ProductCount() {
    const {allProducts} = useContext(TrendhubContext);

    const beverage = allProducts.filter((items)=>{
        return items.category=== 'beverages';
    })
    const breadBakery = allProducts.filter((items)=>{
        return items.category=== 'breads&bakery';
    })
    const meatSeafood = allProducts.filter((items)=>{
        return items.category=== 'meat&seafood';
    })
    const fruitVegetable = allProducts.filter((items)=>{
        return items.category=== 'fruits&vegetables';
    })
    const electronics = allProducts.filter((items)=>{
        return items.category=== 'Electronics';
    })

    const brekfastDairy = allProducts.filter((items)=>{
        return items.category=== 'breakfast&dairy';
    })

  return (
    <>
    <div className={styles.box}>
        <div className={styles.boxleft}>
        <div className={styles.boxleftimage}>
        {breadBakery!=0 ? <img src={`http://localhost:8081/images/${breadBakery[4].image}`} alt='image'></img> : <img src='empty.jpg' alt='Error'></img> }
                </div>
                <div className={styles.boxleftdetails}>
                <h4>Breads & Bakery</h4>
                <p>{breadBakery.length}<span>Items</span></p>
                </div>
        </div>
        <div className={styles.boxright}>
            <div className={styles.card}>
                <div className={styles.cardimage}>
                  {beverage!=0 ? <img src={`http://localhost:8081/images/${beverage[3].image}`} alt='image'></img>
                   : <img src='empty.jpg' alt='Error'></img>}
                </div>
                <div className={styles.carddetails}>
                <h4>Beverages</h4>
                <p>{beverage.length}<span>Items</span></p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardimage}>
            { fruitVegetable!=0 ? <img src={`http://localhost:8081/images/${fruitVegetable[4].image}`} alt='image'></img>
             : <img src='empty.jpg' alt='Error'></img>}
                </div>
                <div className={styles.carddetails}>
                <h4>Fruits & Vegetable</h4>
                <p>{fruitVegetable.length}<span>Items</span></p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardimage}>
                  {electronics!=0 ? <img src={`http://localhost:8081/images/${electronics[8].image}`} alt='image'></img> 
                  : <img src='empty.jpg' alt='Error'></img> }
                </div>
                <div className={styles.carddetails}>
                <h4>Electronics</h4>
                <p>{electronics.length}<span>Items</span></p>
            </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardimage}>
                 { meatSeafood!=0 ? <img src={`http://localhost:8081/images/${meatSeafood[4].image}`} alt='image'></img> 
                 : <img src='empty.jpg' alt='Error'></img> }
                </div>
                <div className={styles.carddetails}>
                <h4>Meat & Seafood</h4>
                <p>{meatSeafood.length}<span>Items</span></p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardimage}>
                   {breadBakery!=0 ? <img src={`http://localhost:8081/images/${breadBakery[4].image}`} alt='image'></img> 
                   : <img src='empty.jpg' alt='Error'></img> }
                </div>
                <div className={styles.carddetails}>
                <h4>Breads & Bakery</h4>
                <p>{breadBakery.length}<span>Items</span></p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardimage}>
                   {breadBakery!=0 ? <img src={`http://localhost:8081/images/${brekfastDairy[9].image}`} alt='image'></img> 
                   : <img src='empty.jpg' alt='Error'></img> }
                </div>
                <div className={styles.carddetails}>
                <h4>Breakfast & Dairy</h4>
                <p>{breadBakery.length}<span>Items</span></p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardimage}>
                    <img src='spices.jpg' alt='image'></img>
                </div>
                <div className={styles.carddetails}>
                <h4>Biscuits & snacks</h4>
                <p>6<span>Items</span></p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardimage}>
                    <img src='spices.jpg' alt='image'></img>
                </div>
                <div className={styles.carddetails}>
                <h4>Biscuits & snacks</h4>
                <p>6<span>Items</span></p>
                </div>
            </div>

        </div>

    </div>
    <FooterCard/>
    </>)
}

export default ProductCount