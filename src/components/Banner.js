import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Banner = ({ title, bgImage, height = '45vh', children }) => {
  const { t } = useTranslation();
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div style={bannerStyle}>
      <Container>
        {children ? children : <h1 className="display-4">{t(title)}</h1>}
      </Container>
    </div>
  );
};

export default Banner;

