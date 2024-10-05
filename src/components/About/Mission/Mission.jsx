import React from 'react';
import styles from './Mission.module.css';
import Team from '../Team/Team';

const Mission = () => {
  return (
    <>
    <div className={styles.missionContainer}>
      <section className={styles.missionSection}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Our Mission</h2>
          <p className={styles.description}>
            At TrendHub, we aim to revolutionize online shopping by providing a seamless, reliable, and customer-centric experience. Our mission is to offer a diverse selection of high-quality products, exceptional customer service, and innovative solutions that make every purchase feel personalized and secure.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src='mission.jpg' alt="Mission" className={styles.image} />
        </div>
      </section>
      <section className={styles.valuesSection}>
        <div className={styles.imageContainer}>
          <img src='corevalue.jpg' alt="Core Values" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Our Core Values</h2>
          <ul className={styles.valuesList}>
            <li><strong>Customer First:</strong> We prioritize our customers in everything we do.</li>
            <li><strong>Innovation:</strong> Continuously improving and leveraging cutting-edge technology.</li>
            <li><strong>Integrity:</strong> Building trust through transparency and honesty.</li>
            <li><strong>Excellence:</strong> Delivering the best quality in our products and services.</li>
          </ul>
        </div>
      </section>
      <section className={styles.customerSection}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Our Commitment to Customers</h2>
          <p className={styles.description}>
            Our customers are at the heart of everything we do. We are committed to offering a convenient, safe, and satisfying shopping experience, backed by responsive customer support, fast delivery, and hassle-free returns.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src='comit.jpg' alt="Customer Focus" className={styles.image} />
        </div>
      </section>
    </div>
    <Team/>
  </>);
};

export default Mission;
