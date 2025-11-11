import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import AnimatedComponent from '../components/AnimatedComponent';
import Banner from '../components/Banner';
import { useTranslation } from 'react-i18next';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const { t } = useTranslation();

  if (!project) {
    return (
      <Container className="text-center mt-5" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <h2>{t('project_not_found')}</h2>
        <Link to="/projects">{t('back_to_projects')}</Link>
      </Container>
    );
  }

  return (
    <>
      <Banner title={t(project.titleKey)} bgImage={project.img} />
      <Container className="mt-5" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <Row>
          <Col md={8}>
            <AnimatedComponent>
              <p className="lead">{t(project.longDescriptionKey)}</p>
            </AnimatedComponent>
          </Col>
          <Col md={4}>
            <AnimatedComponent>
              <Image src={project.img} fluid rounded />
            </AnimatedComponent>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectDetailPage;
