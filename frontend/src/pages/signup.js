
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import '../styles/signup.css'

function Register() {
    const [userData, setUserData] = useState({
        Username: '',
        Email: '',
        Password: '',
        confirmPassword: '',
        RoleID:2,
        OptinVolunt: ' 0' // default
      });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!userData.Username.trim()) {
      newErrors.Username = 'Name is required';
    }
    
    if (!userData.Email.trim()) {
      newErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userData.Email)) {
      newErrors.Email = 'Email is invalid';
    }
    
    if (!userData.Password) {
      newErrors.Password = 'Password is required';
    } else if (userData.Password.length < 6) {
      newErrors.Password = 'Password must be at least 6 characters';
    }
    
    if (userData.Password !== userData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setServerError('');
    
    try {
      // Remove confirmPassword as it's not needed for API
      const { confirmPassword, ...registrationData } = userData;
      
      const result = await register(registrationData);
      
      if (result.success) {
        // Redirect to dashboard on successful registration
        navigate('/dashboard');
      } else {
        setServerError(result.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setServerError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="register-container">
  <div className="signup-box">
    <h2>Create an EventEase Account</h2>

    {serverError && (
      <div className="error-message">{serverError}</div>
    )}

    <form className="register-form" onSubmit={handleSubmit}>
      {/* Repeat for all inputs */}
      <div className="form-group">
  <label htmlFor="Username">Full Name</label>
  <input
    type="text"
    id="Username"
    name="Username"
    value={userData.Username}
    onChange={handleChange}
    placeholder="Enter your full name"
    disabled={isLoading}
  />
  {formErrors.Username && <span className="error">{formErrors.Username}</span>}
</div>

<div className="form-group">
  <label htmlFor="Email">Email</label>
  <input
    type="email"
    id="Email"
    name="Email"
    value={userData.Email}
    onChange={handleChange}
    placeholder="Enter your email"
    disabled={isLoading}
  />
  {formErrors.Email && <span className="error">{formErrors.Email}</span>}
</div>

<div className="form-group">
  <label htmlFor="Password">Password</label>
  <input
    type="password"
    id="Password"
    name="Password"
    value={userData.Password}
    onChange={handleChange}
    placeholder="Create a password"
    disabled={isLoading}
  />
  {formErrors.Password && <span className="error">{formErrors.Password}</span>}
</div>

<div className="form-group">
  <label htmlFor="confirmPassword">Confirm Password</label>
  <input
    type="password"
    id="confirmPassword"
    name="confirmPassword"
    value={userData.confirmPassword}
    onChange={handleChange}
    placeholder="Confirm your password"
    disabled={isLoading}
  />
  {formErrors.confirmPassword && (
    <span className="error">{formErrors.confirmPassword}</span>
  )}
</div>

<div className="form-group">
  <label>Would you like to volunteer?</label>
  <div className="radio-group">
    <label>
      <input
        type="radio"
        name="OptinVolunt"
        value="1"
        checked={userData.OptinVolunt === '1'}
        onChange={handleChange}
        disabled={isLoading}
      />
      Yes, I’d like to volunteer
    </label>
    <label>
      <input
        type="radio"
        name="OptinVolunt"
        value="0"
        checked={userData.OptinVolunt === '0'}
        onChange={handleChange}
        disabled={isLoading}
      />
      No, not right now
    </label>
  </div>
</div>
      <button type="submit" className="register-btn" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
    </form>

    <div className="auth-links">
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  </div>
</div>
  );
}

export default Register;