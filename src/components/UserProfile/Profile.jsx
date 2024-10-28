import React, { useContext } from 'react';
import styles from './profile.module.css';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { TrendhubContext } from '../../ContextAPI/TrendhubContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const {handleLogout,currentUser} = useContext(TrendhubContext);

    const handleLogoutClick = () => {
       handleLogout();
       navigate('/')
       
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <img src='empty.png' alt="User" className={styles.profilePhoto} />
                { Object.values(currentUser).every(value=>
                value!='') ?
                <h2 className={styles.Profileusername}>{currentUser.name}</h2> 
                :
                <h2 className={styles.Profileusername}>Anonymous</h2>
                }
            </div>
            { Object.values(currentUser).every(value=>
                value!='') ?
            <div className={styles.contactInfo}>
                <p><strong>Username:</strong> {currentUser.email}</p>
                <p><strong>Phone:</strong> {currentUser.phone}</p>
            </div> 
            : 
            <div className={styles.contactInfo}>
            <p>USER NOT FOUND</p>
        </div>
        }
            <div className={styles.socialLinks}>
                <FaFacebook  className={styles.socialLogo} />
                <IoLogoInstagram className={styles.socialLogo} />
                <IoLogoWhatsapp className={styles.socialLogo} />
            </div>
            <button onClick={handleLogoutClick} className={styles.editButton}>Logout</button>
        </div>
    );
}

export default Profile;