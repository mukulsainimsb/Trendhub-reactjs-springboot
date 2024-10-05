import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'; // Import FaPhone
import styles from './ContactUs.module.css';
import Footer from '../Footer/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Clear form fields after submission
    setFormData({
      fullName: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.card}>
          <div className={styles.contactInfo}>
            <h2>Contact Us</h2>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <p>123 Street, City, Country</p>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <p>info@trendhub.com</p>
            </div>
            <div className={styles.infoItem}> {/* Phone number info item */}
              <FaPhone className={styles.icon} />
              <p>+1 234 567 890</p>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputField}>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.inputField}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className={styles.inputField}>
              <label>Type Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message here..."
              />
            </div>

            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
