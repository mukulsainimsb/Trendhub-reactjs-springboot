import React from 'react';
import styles from './Team.module.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Footer from '../../Footer/Footer';

const Team = () => {
  return (
    <>
    <div className={styles.mainbox}>
    <div className={styles.teamContainer}>
      <h2 className={styles.heading}>Our Leaders</h2>
      <p className={styles.description}>
        Meet our incredible team of leaders, guiding us with their expertise and vision to achieve success.
      </p>
      <div className={styles.teamMembers}>

        <div className={styles.member}>
          <img src='leader2.jpg' alt="Leader 1" className={styles.image} />
          <div className={styles.text}>
            <h3 className={styles.name}>John Doe</h3>
            <p className={styles.position}>CEO</p>
            <p className={styles.bio}>
              John leads with passion and dedication, driving innovation and company success.
            </p>
          </div>
        </div>

        <div className={styles.member}>
          <div className={styles.text}>
            <h3 className={styles.name}>Jane Smith</h3>
            <p className={styles.position}>CTO</p>
            <p className={styles.bio}>
              Jane is at the helm of our tech vision, steering the company with groundbreaking ideas.
            </p>
          </div>
          <img src='leader3.jpg' alt="Leader 2" className={styles.image} />
        </div>

        <div className={styles.member}>
          <img src='leader1.jpg' alt="Leader 3" className={styles.image} />
          <div className={styles.text}>
            <h3 className={styles.name}>Michael Lee</h3>
            <p className={styles.position}>CFO</p>
            <p className={styles.bio}>
              Michael ensures financial excellence and operational stability within our team.
            </p>
          </div>
        </div>

      </div>
    </div>
    <div className={styles.box}>
        <div className={styles.heading}>
            <h1>Key Team Members</h1>
        </div>
        <div className={styles.images}>
            <div className={styles.image1}>
                <img src='member1.jpg'></img>
                <h4>Morgan Davis</h4>
                <p>Manager</p>
                <div className={styles.chefsocial}>
        <FaFacebookSquare className={styles.cheficons} />
        <FaTwitterSquare className={styles.cheficons} />
        <FaInstagramSquare className={styles.cheficons} />
        </div>
            </div>
            <div className={styles.image2}>
            <img src='member2.jpg'></img>
            <h4>Jamie Lee</h4>
            <p>Digital Marketing Specialist</p>
            <div className={styles.chefsocial}>
        <FaFacebookSquare className={styles.cheficons} />
        <FaTwitterSquare className={styles.cheficons} />
        <FaInstagramSquare className={styles.cheficons} />
        </div>
            </div>
            <div className={styles.image3}>
            <img src='member3.jpg'></img>
            <h4>Eva Williams</h4>
            <p>Customer Service Representative</p>
            <div className={styles.chefsocial}>
        <FaFacebookSquare className={styles.cheficons} />
        <FaTwitterSquare className={styles.cheficons} />
        <FaInstagramSquare className={styles.cheficons} />
        </div>
            </div>
            <div className={styles.image4}>
            <img src='member4.jpg'></img>
            <h4>Emeril Lagasse</h4>
            <p>Product Manager</p>
            <div className={styles.chefsocial}>
        <FaFacebookSquare className={styles.cheficons} />
        <FaTwitterSquare className={styles.cheficons} />
        <FaInstagramSquare className={styles.cheficons} />
        </div>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>);
};

export default Team;
