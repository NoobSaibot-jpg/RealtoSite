import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedComponent from '../components/AnimatedComponent';
import { services } from '../data';
import Banner from '../components/Banner';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner 
        title={t('our_services')} 
        bgImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      />
      <Container className="mt-5">
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4 d-flex">
              <AnimatedComponent>
                <Card 
                as={Link} 
                to={`/service/${service.slug}`} 
                className="h-100 text-decoration-none"
                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-text)' }}
              >
                  <Card.Img variant="top" src={service.img} className="card-img-fixed" />
                  <Card.Body className="d-flex flex-column">
                                      <Card.Title>{t(service.titleKey)}</Card.Title>
                                      <Card.Text>{t(service.shortDescriptionKey)}</Card.Text>                    <div className="btn-details mt-auto align-self-start">{t('read_more')}</div>
                  </Card.Body>
                </Card>
              </AnimatedComponent>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ServicesPage;

