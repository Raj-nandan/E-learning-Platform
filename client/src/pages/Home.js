import React from 'react'
import Nav from '../components/Nav'
import '../css/home.css'

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <header className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing products and services</p>
      </header>
      
      <section className="features">
        <div className="feature">
          <img src="/path/to/feature1.jpg" alt="Feature 1" />
          <h2>Quality Products</h2>
          <p>We offer the best quality products in the market.</p>
        </div>
        <div className="feature">
          <img src="/path/to/feature2.jpg" alt="Feature 2" />
          <h2>Expert Service</h2>
          <p>Our team of experts is always ready to assist you.</p>
        </div>
        <div className="feature">
          <img src="/path/to/feature3.jpg" alt="Feature 3" />
          <h2>Fast Delivery</h2>
          <p>Get your orders delivered quickly and efficiently.</p>
        </div>
      </section>
      
      <section className="about">
        <h2>About Us</h2>
        <p>We are a company dedicated to providing top-notch products and services to our customers. With years of experience in the industry, we strive to exceed your expectations.</p>
        <img src="/path/to/about-image.jpg" alt="About Us" />
      </section>
    </div>
  )
}

export default Home
