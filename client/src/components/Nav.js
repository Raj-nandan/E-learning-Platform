import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';
import logo from '../images/logo.png';
import AuthModal from './Authmodal';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const authToken = false; // This should be replaced with actual authentication logic

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(false); // Set to false for login
  };

  return (
    <>
      <nav className="navbar sticky">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" style={{ height: '70px', marginRight: '10px', marginTop: '10px' }} />
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/lectures" className="nav-link" onClick={toggleMenu}>Lectures</Link>
            </li>
            <li className="nav-item">
              <Link to="/notes" className="nav-link" onClick={toggleMenu}>Notes</Link>
            </li>
            <li className="nav-item">
              <Link to="/assessments" className="nav-link" onClick={toggleMenu}>Assessments</Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link" onClick={toggleMenu}>Courses</Link>
            </li>
            <li className="nav-item">
              {!authToken && <button className="nav-btn" onClick={handleClick}>Log in</button>}
            </li>
          </ul>
        </div>
      </nav>
      {showModal && (
        <AuthModal 
          setShowModal={setShowModal} 
          isSignup={isSignUp}
          setIsSignup={setIsSignUp}
        />
      )}
    </>
  );
};

export default Nav;