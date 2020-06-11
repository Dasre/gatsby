import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project, index) => {
            const { time, title, info, url, img, youtube } = project;

            // input picture || video || iframe
            const SUB = () => {
              if (youtube === true) {
                return (
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="game"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/LD9bSVSOgoQ"
                    />
                  </div>
                );
              }
              if (img === '') {
                return (
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="game"
                      className="embed-responsive-item"
                      src="https://dasre.github.io/maskMap/"
                    />
                  </div>
                );
              }
              return (
                <div data-tilt className="thumbnail rounded">
                  <ProjectImg alt={title} filename={img} />
                </div>
              );
            };

            // See Live button be see or not
            const LIVE = () => {
              if (url !== '') {
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href={url}
                  >
                    See Live
                  </a>
                );
              }
              return <></>;
            };

            return (
              <Row key={index}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">
                        {time}
                        {'-'}
                        {title}
                      </h3>
                      <div>
                        <p>{info}</p>
                      </div>
                      <LIVE />
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <SUB />
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
