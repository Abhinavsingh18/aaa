import React from 'react'
import '../app.css';
import { Link } from 'react-router-dom';


const Navbar = () => (
    <header className="navbar">
      <div className="logo">RangManch</div>
      <nav>
        <a href="#features">Features</a>
        <a href="#about">About Us</a>
        <a href="#community">Community</a>
        <a href="#contact">Contact</a>
        <Link to="/Signup" className="nav-link">Signup</Link>
        <Link to="/Login" className="nav-link">Login</Link>
      </nav>
      <a href="#" className="btn login-btn">Log In</a>
    </header>
  );
  
  // Hero Section Component
  const HeroSection = () => (
    <section className="hero">
      <h1>Welcome to RangManch</h1>
      <p>Where Creativity Meets AI</p>
      <a href="#" className="btn explore-btn">Explore Now</a>
    </section>
  );
  
  // Features Section Component
  const FeaturesSection = () => (
    <section id="features" className="features">
      <h2>Our Key Features</h2>
      <div className="feature-container">
        <Link to="/color-palette" className="feature-box" style={{ textDecoration: 'none' }}>
          <i className="feature-icon">🎨</i>
          <h3>Color Palette Generation</h3>
          <p>Discover AI-curated color schemes tailored to your creative themes.</p>
        </Link>
        <Link to="/artwork-analysis" className="feature-box" style={{ textDecoration: 'none' }}>
          <i className="feature-icon">🖌</i>
          <h3>Artwork Analysis</h3>
          <p>Analyze your art with AI and receive thematic, style, and color suggestions.</p>
        </Link>
        <Link to="/creative-collaboration" className="feature-box" style={{ textDecoration: 'none' }}>
          <i className="feature-icon">🤝</i>
          <h3>Creative Collaboration</h3>
          <p>Engage with a community of creators, share feedback, and collaborate.</p>
        </Link>
      </div>
    </section>
  );
  
  // About Section Component
  const AboutSection = () => (
    <section id="about" className="about">
      <h2>About RangManch</h2>
      <p>RangManch is an AI-powered platform that bridges the gap between technology and creativity, empowering artists, musicians, and writers to discover fresh inspiration.</p>
    </section>
  );
  
  // Footer Component
  const Footer = () => (
    <footer className="footer">
      <p>&copy; 2024 RangManch | Designed to inspire creators</p>
      <div className="footer-links">
        <a href="#contact">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );

const Index = () => {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <Footer />
  </div>
  )
}

export default Index