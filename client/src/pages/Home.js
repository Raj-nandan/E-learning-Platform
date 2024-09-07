import React, { useState } from 'react'
import Nav from '../components/Nav'
import '../css/home.css'
import AuthModal from '../components/Authmodal';
import first from '../images/first.jpg'
import second from '../images/second.jpg'
import third from '../images/third.jpg'
import About from '../images/About.jpg'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [isSignup, setIsSignup] = useState(true)

  // This should be replaced with actual authentication logic
  const authToken = false;

  const handleClick = () => {
    console.log('Clicked')
    setShowModal(true)
    setIsSignup(true)  // Set to true to show signup page
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="home">
      <Nav />
      <header className="hero">
        <h1>Welcome to SkillSaga</h1>
        <p>Unlock Your Potential with Interactive Courses, Assessments, and Certifications</p>
        <button className="primary-btn" onClick={handleClick}>
          {authToken ? 'Signout' : 'Start Learning'}
        </button>
      </header>
      
      <section className="features">
        <div className="feature">
          <img src={first} alt="Feature 1" />
          <h2>Comprehensive Course Offerings</h2>
          <p>Skill Saga boasts an extensive library of courses covering a wide range of subjects—from technology and business to creative arts and personal development. Whether you're looking to advance your career, explore new hobbies, or acquire new skills, our diverse course catalog ensures there's something for everyone.</p>
        </div>
        <div className="feature">
          <img src={second} alt="Feature 2" />
          <h2>Expert Instructors</h2>
          <p>Our courses are crafted and delivered by industry experts who bring real-world experience and cutting-edge knowledge to the table. Each instructor is carefully selected for their expertise and ability to teach complex concepts in an engaging and understandable manner.</p>
        </div>
        <div className="feature">
          <img src={third} alt="Feature 3" />
          <h2>Interactive Learning Experience</h2>
          <p>We believe that learning should be engaging and interactive. Skill Saga incorporates a variety of multimedia elements, including videos, quizzes, and interactive exercises, to make learning not only effective but also enjoyable. Our platform supports different learning styles to ensure that every learner can thrive.</p>
        </div>
      </section>
      
      <section className="about">
        <h2>About Us</h2>
        <p>We are a company dedicated to providing top-notch products and services to our customers. With years of experience in the industry, we strive to exceed your expectations.</p>
        <img src={About} alt="About Us" />
      </section>

      {showModal && (
        <AuthModal 
          onClose={handleCloseModal}
          isSignup={isSignup}
        />
      )}
    </div>
  )
}

export default Home