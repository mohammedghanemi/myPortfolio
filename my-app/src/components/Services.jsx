import React from 'react';

const Services = () => {
  const containerStyle = {
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#E0E0E0',
    textAlign: 'left',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    background: 'linear-gradient(to right, #06b6d4, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '60px',
  };

  const servicesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
    position: 'relative',
  };

  const lineStyle = {
    position: 'absolute',
    left: '50%',
    width: '2px',
    height: '100%',
    backgroundColor: '#444',
    top: 0,
    transform: 'translateX(-50%)',
    zIndex: 0,
  };

  const serviceBoxStyle = (align = 'left') => ({
    width: '45%', // fixed width for all boxes
    padding: '30px',
    backgroundColor: '#1E1E3A',
    borderRadius: '15px',
    border: '1px solid #333',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    alignSelf: align === 'left' ? 'flex-start' : 'flex-end',
    position: 'relative',
    zIndex: 1,
  });

  const serviceTitleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const serviceDescriptionStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#B0B0B0',
  };

  const services = [
    {
      title: 'Website Development',
      icon: '💻',
      description:
        "I create websites from ready-made designs. Landing pages, business websites – I make them look great and work smoothly on any device.",
      align: 'left',
      isMain: true,
    },
    {
      title: 'Web Design',
      icon: '✍️',
      description:
        "I design modern, simple, and user-friendly websites from scratch that match your brand and goals.",
      align: 'right',
    },
    {
      title: 'Frontend Developer',
      icon: '🖥️',
      description:
        "I specialize in creating interactive and responsive user interfaces using React, Next.js, and modern frontend technologies.",
      align: 'left',
    },
    {
      title: 'Backend Developer',
      icon: '⚙️',
      description:
        "I build reliable backend systems with Node.js, Express, and databases like MongoDB and PostgreSQL.",
      align: 'right',
    },
    // New Data Engineer boxes
    {
      title: 'Data Engineer',
      icon: '🗄️',
      description:
        "Build and maintain data pipelines, ETL processes, and ensure data integrity across systems.",
      align: 'left',
    },
    {
      title: 'Data Engineer',
      icon: '💾',
      description:
        "Work with cloud data warehouses, optimize databases, and enable scalable data storage solutions.",
      align: 'right',
    },
    // New Data Science / AI box
    {
      title: 'Data Science / AI',
      icon: '🤖',
      description:
        "Analyze data, build predictive models, and apply machine learning/AI solutions to solve complex problems.",
      align: 'left',
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '36px', fontWeight: '700', background: 'linear-gradient(to left, #06b6d4, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '60px', }}>MY SERVICES</h2>
      <div style={servicesContainerStyle}>
        <div style={lineStyle}></div>
        {services.map((service, index) => (
          <div
            key={index}
            style={serviceBoxStyle(service.align, service.isMain)}
          >
            <h3 style={serviceTitleStyle}>
              <span role="img" aria-label={service.title} style={{ fontSize: '24px' }}>
                {service.icon}
              </span>
              <span
                style={{
                  background: 'linear-gradient(to right, #06b6d4, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {service.title}
              </span>
            </h3>
            <p style={serviceDescriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
