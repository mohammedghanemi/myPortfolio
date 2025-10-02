import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';

const App = () => {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    minHeight: '100vh',
    backgroundColor: '#0f172a',
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    borderBottom: '1px solid #333',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#0f172a',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '30px',
  };

  const heroStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '100px 50px 50px 50px',
  };

  const textStyle = {
    maxWidth: '600px',
  };

  const titleStyle = {
    fontSize: '90px',
    background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 20px 0',
  };

  const descriptionStyle = {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#ccc',
  };

  const buttonStyle = {
    padding: '12px 30px',
    background: 'linear-gradient(to right, #06b6d4, #ec4899)',
    border: 'none',
    borderRadius: '25px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const imageStyle = {
    width: '300px',
    borderRadius: '10px',
  };

  // Refs for each section
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const technologiesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <div style={appStyle}>
    {/* Navbar */}
    <div style={navbarStyle}>
      <div>MOHAMMED GHANEMI</div>
      <div style={navLinksStyle}>
        <span style={{ cursor: 'pointer' }} onClick={() => scrollToSection(homeRef)}>HOME</span>
        <span style={{ cursor: 'pointer' }} onClick={() => scrollToSection(servicesRef)}>SERVICES</span>
        <span style={{ cursor: 'pointer' }} onClick={() => scrollToSection(technologiesRef)}>TECHNOLOGIES</span>
        <span style={{ cursor: 'pointer' }} onClick={() => scrollToSection(portfolioRef)}>PORTFOLIO</span>
        <span style={{ cursor: 'pointer' }} onClick={() => scrollToSection(contactRef)}>CONTACT</span>
      </div>
    </div>

    {/* Sections */}
    <div ref={homeRef} style={heroStyle}>
      <div style={textStyle}>
        <h1 style={titleStyle}>FRONTEND DEVELOPER</h1>
        <p style={descriptionStyle}>
          I am Mohammed Ghanemi – <span style={{ color: '#38bdf8' }}>web-developer</span> with a passion for creating beautiful and responsive websites.
        </p>
        <button style={buttonStyle}>VIEW MY WORK</button>
      </div>
      <img
        style={imageStyle}
        src="/reactapp.jpg"
        alt="Developer"
      />
    </div>

    <hr style={{ border: '1px solid #444', margin: '50px 0' }} />

    <div ref={servicesRef}><Services /></div>
    <hr style={{ border: '1px solid #444', margin: '50px 0' }} />

    <div ref={technologiesRef}><Technologies /></div>
    <hr style={{ border: '1px solid #444', margin: '50px 0' }} />

    <div ref={portfolioRef}><Portfolio /></div>
    <hr style={{ border: '1px solid #444', margin: '50px 0' }} />

    <div ref={contactRef}><Contact /></div>
  </div>  
);

};

export default App;