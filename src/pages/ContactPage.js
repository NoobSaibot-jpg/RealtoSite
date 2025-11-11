import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import AnimatedComponent from '../components/AnimatedComponent';
import { useTranslation } from 'react-i18next';
// import Banner from '../components/Banner'; // Removed Banner import

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <Container className="mt-4" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <AnimatedComponent animation="animate__fadeInDown">
            <h1 className="mb-4 text-center">{t('contact_us')}</h1>
          </AnimatedComponent>
          <Form>
            <AnimatedComponent >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>{t('your_name')}</Form.Label>
                <Form.Control type="text" placeholder={t('your_name')} />
              </Form.Group>
            </AnimatedComponent>

            <AnimatedComponent >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{t('your_email')}</Form.Label>
                <Form.Control type="email" placeholder={t('your_email')} />
                <Form.Text className="text-muted">
                  {t('email_privacy')}
                </Form.Text>
              </Form.Group>
            </AnimatedComponent>

            <AnimatedComponent >
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>{t('message')}</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder={t('message')} />
              </Form.Group>
            </AnimatedComponent>

            <AnimatedComponent >
              <Button 
                type="submit"
                style={{
                    background: `linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)`,
                    border: 'none'
                }}
              >
                {t('send')}
              </Button>
            </AnimatedComponent>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
