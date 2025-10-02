import React from 'react';

const Portfolio = () => {
  const containerStyle = {
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#E0E0E0',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    color: '#00BFFF',
    marginBottom: '60px',
  };

  const portfolioGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  };

  const cardStyle = {
    backgroundColor: '#1E1E3A',
    borderRadius: '15px',
    overflow: 'hidden',
    border: '1px solid #333',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  const imageContainerStyle = {
    position: 'relative',
    paddingTop: '56.25%', // 16:9 Aspect Ratio
  };

  const cardImageStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const cardContentStyle = {
    padding: '20px',
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '5px',
  };

  const cardDescriptionStyle = {
    fontSize: '14px',
    color: '#B0B0B0',
  };

  const iconStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    color: '#fff',
    fontSize: '24px',
    zIndex: 10,
    cursor: 'pointer',
  };

  const portfolioItems = [
    {
      image: 'https://i.ibb.co/3Wf4Q7s/portfolio1.jpg',
      title: 'Miss Symetria',
      description: 'Website Coding (HTML, CSS, JS)',
    },
    {
      image: 'https://i.ibb.co/3Wf4Q7s/portfolio1.jpg',
      title: 'Miss Symetria',
      description: 'Website Coding (HTML, CSS, JS)',
    },
    {
      image: 'https://i.ibb.co/3Wf4Q7s/portfolio1.jpg',
      title: 'Miss Symetria',
      description: 'Website Coding (HTML, CSS, JS)',
    },
    {
      image: 'https://i.ibb.co/sK9k7d7/portfolio2.jpg',
      title: 'MAKING BRANDS STAND OUT',
      description: 'Website Coding (HTML, CSS, JS)',
    },
    {
      image: 'https://i.ibb.co/3Wf4Q7s/portfolio1.jpg',
      title: 'Miss Symetria',
      description: 'Website Coding (HTML, CSS, JS)',
    },
    {
      image: 'https://i.ibb.co/sK9k7d7/portfolio2.jpg',
      title: 'MAKING BRANDS STAND OUT',
      description: 'Website Coding (HTML, CSS, JS)',
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          background: 'linear-gradient(to left, #06b6d4, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '60px',
          }}>PORTFOLIO</h2>
      <div style={portfolioGridStyle}>
        {portfolioItems.map((item, index) => (
          <div key={index} style={cardStyle}>
            <div style={imageContainerStyle}>
              <img src={item.image} alt={item.title} style={cardImageStyle} />
              <a href="#" style={iconStyle}>↗</a>
            </div>
            <div style={cardContentStyle}>
              <h3 style={cardTitleStyle}>{item.title}</h3>
              <p style={cardDescriptionStyle}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;