import React, { useState } from 'react';
import { userRegisterApiCall } from '../../TrendhubAPI/TrendhubApi';

function RegisterForm() {
  const [message, setMessage] = useState('');
  const [registrationData, setRegistrationData] = useState({
    name: '',
    password: '',
    email: '',
    phone: ''
  });

  const handleChange =(event)=>{
    const { value, name } = event.target;
    setRegistrationData((prevData) => (
      {...prevData, [name]: value}
    ));
  };

  const validateForm=()=>{
    const {name,password,email,phone}=registrationData;
    if(!name) return 'Name is Required'
    if(!email) return 'Email is Required'
    if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid';
    if(!password) return 'Password is required'
    if(password.length<6) 'Password should be atleast 6 characters'
    if(!phone) return 'Phone number is required'
    if (!/^\d{10}$/.test(phone)) return 'Phone number should be 10 digits.';
    return '';
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();
    const validation = validateForm();
    if(validation){
      setMessage(validation);
      return;
    }
    try {
      const response = await userRegisterApiCall(registrationData);
      if (response && response.status === 201) {
        setMessage('Successfully Registered');
        setRegistrationData({
          name: '',
          password: '',
          email: '',
          phone: ''
        });
      } else {
        setMessage('Registration failed');
      }
    } catch (error) {
      console.error('Error from server', error);
      setMessage('Registration failed');
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-10">
              <div className="card text-black">
                <div className="card-body p-md-4"> 
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">Sign up</p>
                      <div 
                        className="container-fluid d-flex justify-content-center align-items-center text-info" 
                        style={{ minHeight: '50px' }}>
                        {message ? (
                          <p className={`text-center h4 ${message === 'Successfully Registered' ? 'text-success' : 'text-danger'} bold`}>
                            {message}
                          </p>
                        ) : null}
                      </div>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label">Name</label>
                            <input onChange={handleChange} name="name" type="text" value={registrationData.name} className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label">Password</label>
                            <input onChange={handleChange} name="password" type="password" value={registrationData.password} className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3"> 
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label">Email</label>
                            <input onChange={handleChange} name="email" type="email" value={registrationData.email} className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label">Phone</label>
                            <input onChange={handleChange} name="phone" type="number" value={registrationData.phone} className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                           className="img-fluid" alt="Sample image"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}

export default RegisterForm;
