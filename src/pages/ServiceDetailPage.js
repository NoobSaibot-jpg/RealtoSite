import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data';
import AnimatedComponent from '../components/AnimatedComponent';
import Banner from '../components/Banner';
import { useTranslation } from 'react-i18next';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const { t } = useTranslation();

  if (!service) {
    return (
      <Container className="text-center mt-5" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <h2>{t('service_not_found')}</h2>
        <Link to="/services">{t('back_to_services')}</Link>
      </Container>
    );
  }

  return (
    <>
      <Banner title={t(service.titleKey)} bgImage={service.img} />
      <Container className="mt-5" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <Row>
          <Col md={8}>
            <AnimatedComponent>
              <p className="lead">{t(service.longDescriptionKey)}</p>
            </AnimatedComponent>
          </Col>
          <Col md={4}>
            <AnimatedComponent>
              {service.gallery && service.gallery.length > 1 ? (
                <Carousel>
                  {service.gallery.map((img, index) => (
                    <Carousel.Item key={index}>
                      <Image src={img} fluid rounded />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <Image src={service.img} fluid rounded />
              )}
            </AnimatedComponent>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceDetailPage;
