import React, { useContext } from 'react';
import styles from './AllProduct.module.css';
import List from '../Listing/List';
import { useLocation } from 'react-router-dom';
import { TrendhubContext } from '../../ContextAPI/TrendhubContext';

function AllProduct() {
  const { allProducts } = useContext(TrendhubContext);
  const location = useLocation();
  const keyword = location.state?.keyword;

  let filteredItems = [];
  if (keyword && allProducts.length > 0) {
    filteredItems = allProducts.filter((item) => {
      return item.name.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  return (
    <>
      <div className={styles.allProductBox}>
        <div className={styles.allProductTextContent}>
         
        </div>
        <div className={styles.allProductMiniBox}>
          <h1 className={styles.allProductHeading1}>GUARANTEED</h1>
          <h2 className={styles.allProductHeading2}>100%</h2>
          <h3 className={styles.allProductHeading3}>CASHBACK</h3>
          <h4 className={styles.allProductHeading4}>
            USE CODE: <span className={styles.allProductCode}>TRENDHUB50</span>
          </h4>
          <p className={styles.allProductParagraph}>Hurry up...</p>
        </div>
      </div>
      <List productCategory={filteredItems} />
    </>
  );
}

export default AllProduct;