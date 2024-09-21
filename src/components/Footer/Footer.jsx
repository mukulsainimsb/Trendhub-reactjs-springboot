import React from 'react';
import styles from './Footer.module.css'; // CSS Module
import { TbPhoneCalling } from "react-icons/tb";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiApple } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.leftSide}>
          <TbPhoneCalling className={styles.logo} />
          <p className={styles.contactInfo}>Call Us: +123-456-7890</p>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.appDownload}>
            <p className={styles.downloadText}>Download Our App</p>
            <div className={styles.storeLogos}>
              <IoLogoGooglePlaystore className={styles.storeLogo} />
              <SiApple className={styles.storeLogo} />
            </div>
          </div>

          <div className={styles.socialMedia}>
            <FaFacebook className={styles.socialIcon} />
            <FaTwitter className={styles.socialIcon} />
            <RiInstagramFill className={styles.socialIcon} />
            <FaLinkedin className={styles.socialIcon} />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2008 Your Company. All Rights Reserved.</p>
        <div className={styles.links}>
          <a href="/privacy-policy" className={styles.privacyPolicy}>Privacy Policy</a>
          <a href="/more" className={styles.more}>More</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
