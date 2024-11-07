import React, { useState } from 'react';
import axios from 'axios';
import { getRecommendationApi } from '../../TrendhubAPI/TrendhubApi';
import styles from './ConditionForm.module.css';

const ConditionForm = () => {
    const [condition, setCondition] = useState('');
    const [fabricType, setFabricType] = useState('');
    const [recyclable, setRecyclable] = useState(false);
    const [stains, setStains] = useState(false);
    const [tears, setTears] = useState(false);
    const [age, setAge] = useState('');
    const [brand, setBrand] = useState('');
    const [sentimentalValue, setSentimentalValue] = useState(false);
    const [recommendation, setRecommendation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const clothingCondition = {
            condition,
            fabricType,
            recyclable,
            stains,
            tears,
            age,
            brand,
            sentimentalValue
        };
        try {
            const response = await getRecommendationApi(clothingCondition);
            setRecommendation(response.data);
        } catch (error) {
            console.error("Error fetching recommendation:", error);
        }
    };

    return (<>
        <div className={styles.featureDetail}>
            <b>GarmentGuide is a simple tool that helps 
            you decide what to do with your old clothes. 
            Just provide some details about the fabric and 
            condition, and we’ll tell you whether it’s best to
             donate, recycle, or dispose of them. It’s an easy
              way to make more sustainable choices and keep your 
              wardrobe in good shape without wasting anything.</b>
        </div>
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Condition:</label>
                      <select 
                        className={styles.select}
                        value={condition} 
                        onChange={(e) => setCondition(e.target.value)}>
                        <option value="">Select Condition</option>
                        <option value="Like New">Like New</option>
                        <option value="Gently Used">Gently Used</option>
                        <option value="Damaged">Damaged</option>
                        </select>
                     </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Fabric Type:</label>
                    <input
                        type="text"
                        value={fabricType}
                        onChange={(e) => setFabricType(e.target.value)}
                        placeholder="e.g Cotton, Polyester"
                        className={styles.input}/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" checked={recyclable}
                         onChange={(e) => setRecyclable(e.target.checked)}
                         className={styles.checkbox}/>
                        Recyclable  </label>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={stains}
                            onChange={(e) => setStains(e.target.checked)}
                            className={styles.checkbox}/>
                        Stains </label>
                           </div>
                <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={tears}
                            onChange={(e) => setTears(e.target.checked)}
                            className={styles.checkbox}/>
                        Tears
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Age (in months):</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => {
                            const value = e.target.value === "" ? 0 : parseInt(e.target.value);
                            setAge(value);
                        }}
                        className={styles.input}/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Brand:</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className={styles.input}/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" checked={sentimentalValue}
                        onChange={(e) => setSentimentalValue(e.target.checked)}
                        className={styles.checkbox}/>
                        Sentimental Value </label>
                </div>
                <button type="submit" className={styles.button}>Get Recommendation</button>
            </form>
            {recommendation && (
                <div className={styles.recommendation}>
                    <h3>Recommended Action: {recommendation}</h3>
                </div>
            )}
        </div>
        </>
    );
};

export default ConditionForm;