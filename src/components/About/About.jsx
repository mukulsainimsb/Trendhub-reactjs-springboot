import React from 'react'
import styles from './About.module.css'
import Mission from './Mission/Mission'
function About() {
    return (
        <>
        <div className={styles.box}>
            <div className={styles.images}>
                <div className={styles.img1}>
                <img id={styles.img1} src='company1.jpg'></img>
                <img id={styles.img2} src='company2.jpg'></img>
                </div>
                <div className={styles.img2}>
                <img id={styles.img3} src='company3.jpg'></img>
                <img id={styles.img4} src='company4.jpg'></img>
                </div>
            </div>
            <div className={styles.text}>
                <h1 className={styles.wlcmheading}>Welcome to Trendhub</h1>
                <p className={styles.para}>"At TrendHub, we are dedicated to 
                    offering a secure and intuitive online shopping platform that
                     caters to all your needs. Our extensive product catalog features
                      a diverse range of high-quality items, meticulously curated to 
                      meet the highest standards. We prioritize exceptional customer
                       service, providing responsive support and personalized assistance
                        to ensure a smooth shopping experience. Leveraging the latest 
                        technology, we enhance every aspect of your journey, from 
                        seamless navigation and efficient checkout to reliable delivery
                         and hassle-free returns. Our goal is to make online shopping 
                         convenient, enjoyable, and satisfying for every customer."
                        </p>
                    <div className={styles.exp}>
                        <div>
                    <h1>15</h1>
                    <p>Years of<br/><span>EXPERIENCE</span></p>
                    </div>
                    <div>
                    <h1>50+</h1>
                    <p>Trusted<br/><span>PARTNERS</span></p>
                    </div>
                    </div>
            </div>
        </div>
        <Mission/>
        </>)
    }

export default About