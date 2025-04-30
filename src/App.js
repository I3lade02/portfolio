import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaBootstrap, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <Container>
          <h1 className="display-4">Ondřej Beránek</h1>
          <p className="lead">Your short bio goes here.</p>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="mb-4">Technologies I Use</h2>
          <Row className="justify-content-center">
            <Col xs="auto">
              <FaReact size={50} title="React.js" className="text-primary" />
            </Col>
            <Col xs="auto">
              <FaBootstrap size={50} title="Bootstrap" className="text-primary" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Projects</h2>
          <p className="text-center text-muted">Projects will be added here.</p>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="mb-4">Contact Me</h2>
          <div className="d-flex justify-content-center gap-4">
            <a href="#" title="Email"><FaEnvelope size={30} /></a>
            <a href="#" title="LinkedIn"><FaLinkedin size={30} /></a>
            <a href="#" title="GitHub"><FaGithub size={30} /></a>
          </div>
        </Container>
      </section>

      <footer className="bg-light text-center py-3 text-muted">
        © {new Date().getFullYear()} Ondřej Beránek
      </footer>
    </div>
  );
}
