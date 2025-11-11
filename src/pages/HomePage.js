import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import AnimatedComponent from '../components/AnimatedComponent';
import Banner from '../components/Banner';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Banner 
      height="100%" 
      bgImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <h1 className="display-3">{t('rialto_ukraine')}</h1>
      <TypeAnimation
        sequence={[
          t('hero_tagline_1'),
          2000,
          t('hero_tagline_2'),
          2000,
          t('hero_tagline_3'),
          2000,
          t('hero_tagline_4'),
          2000,
        ]}
        wrapper="p"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '1.5rem', display: 'inline-block' }}
      />
      <AnimatedComponent>
          <p className='mt-4'>
              <Button 
              as={Link} 
              to="/services" 
              size="lg" 
              className="m-2"
              style={{
                  background: `linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)`,
                  border: 'none'
              }}
              >
              {t('our_services')}
              </Button>
              <Button as={Link} to="/contact" variant="outline-light" size="lg" className="m-2">
                {t('consultation')}
              </Button>
          </p>
      </AnimatedComponent>
    </Banner>
  );
};

export default HomePage;