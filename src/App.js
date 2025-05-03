import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TypeAnimation } from "react-type-animation";
import { Container, Row, Col, Navbar, Nav, Button, Card, Badge, Form } from "react-bootstrap";
import { FaReact, FaBootstrap, FaGithub, FaLinkedin, FaGitAlt, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import "./App.css";

export default function Portfolio() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);
  const themeClass = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  const textMuted = darkMode ? "text-secondary" : "text-muted";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  })

  return (
    <div className={themeClass}>
      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" bg={darkMode ? "dark": "light"} variant={darkMode ? "dark" : "light"} fixed="top">
        <Container>
          <Navbar.Brand href="#home">Ondřej Beránek</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="respnsive-navbar-nav" className="justify-content-center gap-4">
            <Nav className="ms-auto me-3">
              <Nav.Link href="#home">Domů</Nav.Link>
              <Nav.Link href="#skills">Dovednosti</Nav.Link>
              <Nav.Link href="#projects">Projekty</Nav.Link>
              <Nav.Link href="#contact">Kontakty</Nav.Link>
            </Nav>
            <div className="ms-auto d-flex align-items-center">
              <div className="sky-toggle" onClick={toggleTheme}>
                <div className={`sky-thumb ${darkMode ? "dark" : "light"}`}>{darkMode ? "✨" : "☀️"}</div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero section */ }
      <section id="home" className="py-5 text-center hero-gradient" style={{ paddingTop: "100px" }} data-aos='fade-in'>
        <Container>
          <h1 className="display-4">Bio</h1>
          <TypeAnimation
          sequence={["Frontend Developer", 2000, "React Enthusiast", 2000, "UI Explorer", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          />
        </Container>
      </section>

      {/* SKills section */}
      <section id="skills" className="py-5 text-center" data-aos="fade-up">
        <Container>
          <h2 className="mb-4">Co používám</h2>
          <Row className="justify-content-center mb-5">
            <Col xs="auto" data-aos="zoom-in">
              <FaReact size={50} title="React.js" className="text-primary" />
            </Col>
            <Col xs="auto" data-aos="zoom-in" data-aos-delay="200">
              <FaBootstrap size={50} title="Bootstrap" className="text-primary" />
            </Col>
            <Col xs="auto">
              <FaSquareJs size={50} title="JS" className="text-primary" />
            </Col>
            <Col xs="auto">
              <FaGitAlt size={50} title="Git" className="text-primary" />
            </Col>
            <Col xs="auto">
              <FaHtml5 size={50} title="HTML" className="text-primary" />
            </Col>
            <Col xs="auto">
              <FaCss3 size={50} title="CSS" className="text-primary" />
            </Col>
          </Row>
          <h3 className="mb-4">Co se učím</h3>
          <Row className="justify-content-center">
            <Col xs="auto">
              <FaNodeJs size={45} title="Node.js" className="text-success" />
            </Col>
            <Col xs="auto">
              <SiMongodb size={45} title="MongoDB" className="text-success" />
            </Col>
            <Col xs="auto">
              <SiExpress size={45} title="Express" className="text-success" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects section */}
            {/* Projects section */}
            <section id="projects" className="py-5" data-aos="fade-up">
        <Container>
          <h2 className="text-center mb-4">Projekty</h2>
          <Row className="g-4">
            <Col md={6} data-aos="fade-up">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Kobudo App</Card.Title>
                  <Card.Text>Webová stránka pro klub japonských bojových umění v Ústí nad Labem</Card.Text>
                  <div className="mb-2">
                    <Badge bg="primary" className="me-1">React</Badge>
                    <Badge bg="secondary">Bootstrap</Badge>
                  </div>
                  <Button variant="outline-primary" href="https://github.com/I3lade02/kobudo-app" target="_blank">
                    Zobrazit na Githubu
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>File Storage</Card.Title>
                  <Card.Text>Jednoduchá webová aplikace s Node.js a Express. Jednoduché řízení download/upload</Card.Text>
                  <div className="mb-2">
                    <Badge bg="primary" className="me-1">Node.js</Badge>
                    <Badge bg="secondary">Express</Badge>
                  </div>
                  <Button variant="outline-primary" href="https://github.com/I3lade02/file-storage" target="_blank">
                    Zobrazit na Githubu
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} data-aos="fade-up">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Roguelike Dungeon</Card.Title>
                  <Card.Text>Jednoduchá hra v jazyce Python s použitím knihovny pygame. Jednoduché průchody náhodně tvořených dungeonů</Card.Text>
                  <div className="mb-2">
                    <Badge bg="dark" className="me-1">Python</Badge>
                    <Badge bg="secondary">CLI</Badge>
                  </div>
                  <Button variant="outline-primary" href="https://github.com/I3lade02/roguelike_dung" target="_blank">
                    Zobrazit na Githubu
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Base Defense</Card.Title>
                  <Card.Text>Minimalistická RTS hra s jednoduchým GUI (nedokončeno)</Card.Text>
                  <div className="mb-2">
                    <Badge bg="dark" className="me-1">Python</Badge>
                    <Badge bg="secondary">Game Logic</Badge>
                  </div>
                  <Button variant="outline-primary" href="https://github.com/I3lade02/base_def" target="_blank">
                    Zobrazit na Githubu
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CV download section */}
      <section id="cv" className="py-5 text-center" data-aos="zoom-in">
        <Container>
          <h2 className="mb-4">Moje CV</h2>
          <a href="#" download className="btn btn-outline-primary btn-lg">
            Stáhnout
          </a>
        </Container>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-5 text-center" data-aos="fade-up">
        <Container>
          <h2 className="mb-4">Kontaktujte mě</h2>
          <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
            <a href="https://www.linkedin.com/in/ond%C5%99ej-ber%C3%A1nek-149ba4295/" title="LinkedIn" className="text-primary" style={{ fontSize: '50px' }}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/I3lade02/" title="GitHub" className="text-primary" style={{ fontSize: '50px' }}>
              <FaGithub />
            </a>
          </div>
          <p className="mb-3"><strong>Nebo mě kontaktujte přímo zde</strong></p>
          <Form className="mx-auto" style={{ maxWidth: '500px'}}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control type="text" placeholder="Vaše jméno" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control type="email" placeholder="Váš E-mail" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control as="textarea" rows={4} placeholder="Vaše zpráva" />
            </Form.Group>
            <Button variant="primary" type="submit">Odeslat</Button>
          </Form>
        </Container>
      </section>

      <footer className={`text-center py-3 ${textMuted}`}>
        @ {new Date().getFullYear()} Ondřej Beránek
      </footer>
    </div>
  );
}
