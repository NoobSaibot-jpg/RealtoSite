import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer 
      className="py-3" 
      style={{ 
        backgroundColor: 'var(--background-color)', 
        color: 'var(--text-color)',
        flexShrink: 0 // Ensure footer doesn't disappear
      }}
    >
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} {t('rialto_ukraine')}. {t('all_rights_reserved')}.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
