import React from 'react';
import styles from './profile.module.css';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const Profile = () => {
    const user = {
        photo: 'https://via.placeholder.com/150',
        username: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890'
        }

    const handleEditClick = () => {
        alert("Edit Info button clicked!");
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <img src='empty.png' alt="User" className={styles.profilePhoto} />
                <h2 className={styles.Profileusername}>{user.username}</h2>
            </div>
            <div className={styles.contactInfo}>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
            </div>
            <div className={styles.socialLinks}>
                <FaFacebook  className={styles.socialLogo} />
                <IoLogoInstagram className={styles.socialLogo} />
                <IoLogoWhatsapp className={styles.socialLogo} />
            </div>
            <button onClick={handleEditClick} className={styles.editButton}>Edit Info</button>
        </div>
    );
}

export default Profile;