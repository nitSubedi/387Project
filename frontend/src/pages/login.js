// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import '../styles/login.css'

function Login() {
  const [credentials, setCredentials] = useState({
    Email: '',
    Password: ''
  });
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };
  
  const validateForm = () => {
    if (!credentials.Email.trim()) {
      setFormError('Email is required');
      return false;
    }
    if (!credentials.Password) {
      setFormError('Password is required');
      return false;
    }
    return true;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setFormError('');
    
    try {
      const result = await login(credentials);
      
      if (result.success) {
        // Redirect to dashboard on successful login
        navigate('/dashboard');
      } else {
        setFormError(result.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      setFormError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Login to EventEase</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="Email" value={credentials.email}
  onChange={handleChange} placeholder="Enter your email" />
  
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="Password" value={credentials.password}
  onChange={handleChange} placeholder="Enter your password" />
  
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  </div>
  );
}

export default Login;