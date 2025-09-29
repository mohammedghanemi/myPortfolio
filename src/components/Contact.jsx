import React from 'react';

const Contact = () => {
  const containerStyle = {
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#E0E0E0',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px',
  };

  const leftColumnStyle = {
    flex: '1',
    minWidth: '300px',
  };

  const rightColumnStyle = {
    flex: '1',
    minWidth: '300px',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: '700',
    background: 'linear-gradient(to right, #EC4899, #8B5CF6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
  };

  const subheadingStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const sectionTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '15px',
  };

  const linkStyle = {
    color: '#00BFFF',
    textDecoration: 'none',
    fontSize: '16px',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '24px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const inputStyle = {
    backgroundColor: '#1E1E3A',
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '16px',
    color: '#E0E0E0',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '120px',
    resize: 'none',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(to right, #06B6D4, #EC4899)',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        <h2 style={headingStyle}>DO YOU HAVE A PROJECT TO DISCUSS?</h2>
        <h3 style={subheadingStyle}>GET IN TOUCH 💬</h3>
        <div style={{ marginBottom: '30px' }}>
          <h4 style={sectionTitleStyle}>CONTACT</h4>
          <a href="mailto:web.smm.zty@gmail.com" style={linkStyle}>web.smm.zty@gmail.com</a>
        </div>
        <div>
          <h4 style={sectionTitleStyle}>SOCIAL MEDIA</h4>
          <div style={socialIconsStyle}>
            <a href="#" style={{ color: 'inherit' }}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" style={{ color: 'inherit' }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" style={{ color: 'inherit' }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" style={{ color: 'inherit' }}>
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" style={{ color: 'inherit' }}>
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </div>
      <div style={rightColumnStyle}>
        <h3 style={sectionTitleStyle}>CONTACT FORM</h3>
        <form style={formStyle}>
          <input type="text" placeholder="Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <textarea placeholder="Message" style={textareaStyle}></textarea>
          <button type="submit" style={buttonStyle}>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;