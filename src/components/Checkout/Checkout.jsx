import React, { useState } from 'react';
import styles from './Checkout.module.css';
import { useLocation } from 'react-router-dom';

function Checkout() {
    const location = useLocation();
    const [error, setError] = useState('');
    const { totalItems, total, discount, subtotal } = location.state || {};
    const [flag, setFlag] = useState(true);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [userAddress, setUserAddress] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserAddress((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const validate = () => {
        let validationError = '';

        if (Object.values(userAddress).some(value => value.trim() === '')) {
            validationError = 'Please fill every detail';
        } else if (userAddress.name.length < 2) {
            validationError = 'Please enter a valid name';
        } else if (userAddress.address.length < 6) {
            validationError = 'Please provide a complete address';
        } else if (userAddress.city.length < 2) {
            validationError = 'Please provide a valid city';
        } else if (!emailPattern.test(userAddress.email)) {
            validationError = 'Please enter a valid email';
        } else if (userAddress.phone.length < 10) {
            validationError = 'Enter a valid phone number';
        } else if (userAddress.zip.length < 6) {
            validationError = 'Please enter a valid zip code';
        }

        setError(validationError);
        return validationError;
    };

    const handleClick = (event) => {
        event.preventDefault();
        const validationResult = validate();
        if (validationResult === '') {
            setFlag(false);
            console.log(userAddress);
        } else {
            setFlag(true);
        }
    };

    return (
        <div className={styles.checkoutMainbox}>
            {flag ? (
                <form className={styles.checkoutForm}>
                 <div className="form-row">
                 <div className="form-group col-md-6">
                  <label>Name</label>
                   <input type="text" name='name' className="form-control" value={userAddress.name}
                        onChange={handleInputChange} id="inputUsername" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input type="email" name='email' className="form-control" value={userAddress.email}
                                onChange={handleInputChange} id="inputEmail" />
                     </div>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" name='phone' className="form-control" value={userAddress.phone}
                            onChange={handleInputChange} id="inputPhone" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" name='address' className="form-control" value={userAddress.address}
                            onChange={handleInputChange} id="inputAddress2" placeholder="123 Main St. Apartment, floor" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>City</label>
                            <input type="text" name='city' className="form-control" value={userAddress.city}
                                onChange={handleInputChange} id="inputCity" />
                         </div>
                         <div className="form-group col-md-4">
                         <label>State</label>
                        <select id="inputState" name='state' className="form-control" value={userAddress.state}
                                onChange={handleInputChange}>
                                <option value="">Choose...</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                          </div>
                            <div className="form-group col-md-2">
                            <label>Zip</label>
                            <input type="text" name='zip' className="form-control" value={userAddress.zip}
                                onChange={handleInputChange} id="inputZip" />
                        </div>
                    </div>
                    <div style={{ height: '20px' }}>
                        {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}
                    </div>
                    <button style={{ margin: '5px' }} type="submit" onClick={handleClick} className="btn btn-primary">Deliver Here</button>
                </form>
            ) : (
                <div className={styles.addressDetails}>
                    <h1>SHIPPING ADDRESS</h1>
                    <b>{userAddress.name}</b>
                    <p>{userAddress.email}</p>
                    <p>{userAddress.phone}</p>
                    <p>{userAddress.address}</p>
                    <p>{userAddress.city}</p>
                    <p>{userAddress.state}</p>
                    <p>{userAddress.zip}</p>
                </div>
            )}
            {totalItems && total && discount && subtotal ? (
                <div className={styles.checkoutBox}>
                    <div className={styles.pricingDetail}>
                    <p>Price</p>
                    <p>${total}</p>
                    </div>
                    <div className={styles.pricingDetail}>
                    <p>Discount</p>
                    <p>{discount}</p>
                    </div>
                    <div className={styles.pricingDetail}>
                     <p>Delivery Charge</p>
                    <p>Free</p>
                    </div>
                    <div className={styles.pricingDetail}>
                        <p>No. of Items</p>
                        <p>{totalItems}</p>
                    </div>
                    <div className={styles.pricingDetail}>
                        <p style={{ fontWeight: 'bold' }}>Total Amount</p>
                        <p style={{ fontWeight: 'bold' }}>${subtotal}</p>
                    </div>
                    {!flag && (
                        <div className={styles.pricingDetail}>
                            <button className={styles.pricingbtn}>Checkout</button>
                        </div>
                    )}
                </div>
            ) : (
                <div className={styles.checkoutBox}>
                    <div className={styles.pricingDetail}>
                        <p>Price</p>
                        <p></p>
                    </div>
                    <div className={styles.pricingDetail}>
                        <p>Discount</p>
                        <p></p>
                    </div>
                    <div className={styles.pricingDetail}>
                        <p>Delivery Charge</p>
                        <p></p>
                    </div>
                    <div className={styles.pricingDetail}>
                        <p>No. of Items</p>
                        <p></p>
                    </div>
                    <div className={styles.pricingDetail}>
                        <p style={{ fontWeight: 'bold' }}>Total Amount</p>
                        <p></p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
