import React, { useContext, useState } from 'react';
import styles from './LoginForm.module.css';
import { TrendhubContext } from '../../ContextAPI/TrendhubContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const {handleLogin,errorMessage} = useContext(TrendhubContext);
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    await handleLogin(username, password);
    setUsername('')
    setPassword('')
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome To Trendhub</h2>
      <img className={styles.loginLogo} src='loginlogo.png' alt='image'></img>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>Username</label>
          <input type="text" id="username" className={styles.input} value={username}
            onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" className={styles.input}
            value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <p style={{ color: 'red', height: '5px' }}>{errorMessage}</p>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
