import React from 'react'
import styles from './AllCategoryList.module.css'
import Footer from '../Footer/Footer'

function AllCategoryList() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.box1}>
        <h2 className={styles.heading}>Fruits & Vegetables</h2>
        <ul>
          <li>Fresh Vegetables</li>
          <li>Herbs & Seasonings</li>
          <li>Fresh Fruits</li>
          <li>Cuts & Sprouts</li>
          <li>Exotic Fruits & Veggies</li>
          <li>Packaged Produce</li>
          <li>Party Trays</li>
        </ul>
      </div>
      <div className={styles.box2}>
        <h2 className={styles.heading}>BREAKFAST & DAIRY</h2>
        <ul>
          <li>Milk & Flavoured Milk</li>
          <li>Butter and Margarine</li>
          <li>Cheese</li>
          <li>Eggs Substitutes</li>
          <li>Honey</li>
          <li>Marmalades</li>
          <li>Sour Cream and Dips</li>
          <li>Yogurt</li>
        </ul>
      </div>
      <div className={styles.box3}>
        <h2 className={styles.heading}>MEAT & SEAFOOD</h2>
        <ul>
          <li>Breakfast Sausage</li>
          <li>Dinner Sausage</li>
          <li>Chicken</li>
          <li>Sliced Deli Meat</li>
          <li>Shrimp</li>
          <li>Wild Caught Fillets</li>
          <li>Crab and Shellfish</li>
          <li>Farm Raised Fillets</li>
        </ul>
      </div>
      <div className={styles.box4}>
        <h2 className={styles.heading}>BEVERAGES</h2>
        <ul>
          <li>Water</li>
          <li>Sparkling Water</li>
          <li>Soda & Pop</li>
          <li>Coffee</li>
          <li>Milk & Plant-Based Milk</li>
          <li>Tea & Kombucha</li>
          <li>Drink Boxes & Pouches</li>
          <li>Craft Beer</li>
          <li>Wine</li>
        </ul>
      </div>
      <div className={styles.box5}>
        <h2 className={styles.heading}>BREADS & BAKERY</h2>
        <ul>
          <li>Bread</li>
          <li>Rolls</li>
          <li>Baguettes</li>
          <li>Croissants</li>
          <li>Bagels</li>
          <li>Muffins</li>
          <li>Cakes & Pastries</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>)
}

export default AllCategoryList