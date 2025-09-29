import React from 'react';

const Technologies = () => {
  const containerStyle = {
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'left', // ← align left
    color: '#E0E0E0',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    background: 'linear-gradient(to right, #ec4899, #8b5cf6)', // same as FRONTEND DEVELOPER
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '18px',
    marginBottom: '60px',
    color: '#B0B0B0',
  };

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
    gap: '40px',
    justifyContent: 'start', // align grid to left
    alignItems: 'center',
  };

  const skillIconStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
  };

  const skills = [
    // Frontend
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',

    // Backend
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',

    // Design / Tools
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
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
          }}>TECHNOLOGIES</h2>
      <p style={subtitleStyle}>The skills, tools and technologies I use:</p>
      <div style={skillsGridStyle}>
        {skills.map((src, index) => (
          <img key={index} src={src} alt={`Skill icon ${index}`} style={skillIconStyle} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
