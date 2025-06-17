import React, { useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

import plantImg from "../assets/plant.png";
import realEstateImg from "../assets/real-estate.png";

const projects = [
  {
    title: "Plant Identifier App",
    desc: "A React + Gemini API app that identifies plants from photos using AI.",
    link: "", // Live link temporarily disabled
    github: "https://github.com/Bhalke-2003/plant-identifier",
    image: plantImg,
  },
  {
    title: "Real Estate Website",
    desc: "A full-featured React project for property listing with filters and search.",
    github: "https://github.com/Bhalke-2003/real-estate-app",
    image: realEstateImg,
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-2 fw-bold display-5 text-gradient">
        🚀 Featured Projects
      </h2>
      <p className="text-center text-muted mb-5 fs-5">
        Real-world apps built with React, APIs, and modern tools.
      </p>

      <Row>
        {projects.map((project, idx) => (
          <Col xs={12} md={6} className="d-flex" key={idx}>
            <Card
              data-aos="fade-up"
              className="mb-4 shadow-lg w-100 project-card"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {project.image && (
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fw-semibold fs-4 text-primary">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="text-dark">{project.desc}</Card.Text>
                </div>
                <div className="mt-3">
                  {project.link ? (
                    <Button
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      className="me-2 rounded-pill px-4"
                    >
                      Live
                    </Button>
                  ) : (
                    <Button
                      variant="outline-secondary"
                      disabled
                      className="me-2 rounded-pill px-4"
                    >
                      Live (Coming Soon)
                    </Button>
                  )}
                  <Button
                    variant="dark"
                    href={project.github}
                    target="_blank"
                    className="rounded-pill px-4"
                  >
                    <FaGithub className="me-2" />
                    GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
