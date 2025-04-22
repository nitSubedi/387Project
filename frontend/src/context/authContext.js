// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';


// API base URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (user && token) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Login function with API call
  const login = async (credentials) => {
    try {
      setError(null);
      
      const response = await fetch('http://turing2.cs.olemiss.edu:8121/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Assuming the API returns user data and token
      const { user, token } = data;
      
      // Store in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      
      // Update state
      setCurrentUser(user);
      return { success: true };
      
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
      return { success: false, error: err.message };
    }
  };

  // Register function with API call
  const register = async (userData) => {
    try {
      setError(null);
      
      const response = await fetch('http://turing2.cs.olemiss.edu:8121/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }
      
      // If registration automatically logs in the user
      if (data.user && data.token) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        setCurrentUser(data.user);
      }
      
      return { success: true };
      
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
      return { success: false, error: err.message };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  // Get the auth token
  const getToken = () => {
    return localStorage.getItem('token');
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading,
    error,
    getToken
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};