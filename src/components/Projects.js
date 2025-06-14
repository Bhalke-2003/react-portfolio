import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    title: "Plant Identifier App",
    desc: "A React + Gemini API app that identifies plants from photos.",
    link: "https://plantid-akash.vercel.app",
    github: "https://github.com/Bhalke-2003/plant-identifier",
  },
  {
    title: "Real Estate Website",
    desc: "A complete React project for flat listing with filters and search.",
    link: "https://real-estate-dag.vercel.app",
    github: "https://github.com/Bhalke-2003/real-estate-app.git",
  },
];

function Projects() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col md={6} key={idx}>
            <Card className="mb-4 shadow">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.desc}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">Live</Button>{' '}
                <Button variant="outline-dark" href={project.github} target="_blank">GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
