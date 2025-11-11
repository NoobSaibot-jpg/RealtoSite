import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedComponent from '../components/AnimatedComponent';
import { projects } from '../data';
import Banner from '../components/Banner';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner 
        title={t('projects')} 
        bgImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      />
      <Container className="mt-5">
        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4 d-flex">
              <AnimatedComponent>
                <Card 
                as={Link} 
                to={`/project/${project.slug}`} 
                className="h-100 text-decoration-none"
                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-text)' }}
              >
                  <Card.Img variant="top" src={project.img} className="card-img-fixed" />
                  <Card.Body>
                                      <Card.Title>{t(project.titleKey)}</Card.Title>
                                      <Card.Text>{t(project.shortDescriptionKey)}</Card.Text>                    <div className="btn-details mt-auto align-self-start">{t('read_more')}</div>
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

export default ProjectsPage;

