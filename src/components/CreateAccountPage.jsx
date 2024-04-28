import React , { useState } from 'react';
import '../css/CreateAccountPage.css';
import MainLayout from '../layout/MainLayout';
function CreateAccountPage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <MainLayout>
    <div className='body'>
    <div className="centered-container">
      <form onSubmit={handleSubmit} className="login-form">
      <h1>Create new<br/>Account</h1>
        <div className="form-group">
          <label>NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label>Mobile No</label>
            <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label>CONFIRM PASSWORD</label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">SIGN UP</button>
        </div>
      </form>
    </div>
    </div>
    </MainLayout>
  );
}


export default CreateAccountPage;