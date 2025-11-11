import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedComponent from '../components/AnimatedComponent';
import Banner from '../components/Banner';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner 
        title={t('about')} 
        bgImage="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      />
      <Container className="mt-5" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <AnimatedComponent animation="animate__fadeInUp">
              <p className="lead">
                {t('about_company_lead')}
              </p>
            </AnimatedComponent>

            <AnimatedComponent animation="animate__fadeInUp" >
              <p>
                {t('about_company_mission')}
              </p>
            </AnimatedComponent>

            <AnimatedComponent animation="animate__fadeInUp" >
              <p>
                {t('about_company_guarantee')}
              </p>
            </AnimatedComponent>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
