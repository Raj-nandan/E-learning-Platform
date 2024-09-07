import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/authmodal.css';

const AuthModal = ({ onClose, isSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  // Close the modal when 'X' is clicked
  const handleClick = () => {
    if (onClose) {
      onClose(); // Triggers the parent's onClose function to close the modal
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (isSignup && password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const endpoint = isSignup ? '/signup' : '/login';
      //const response = await axios.post(`http://localhost:8000${endpoint}`, { email, password });
      const response = fetch('http://localhost:8000/',{email,password})
      //const { token, userId } = response.data;
      console.log(response);
      // Store the token and userId in localStorage
      //localStorage.setItem('token', token);
      //localStorage.setItem('userId', userId);

      if (onClose) onClose();  // Close the modal on successful signup/login
      navigate('/');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="auth-modal">
      {/* Close Button */}
      <div className="close-btn" onClick={handleClick}>X</div>

      <h2>{isSignup ? 'Create Account' : 'Log In'}</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        <input className="submit-btn" type="submit" />
        {error && <p className="error-message">{error}</p>}
      </form>

      <hr />
    </div>
  );
};

export default AuthModal;
