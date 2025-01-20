import {
  Container,
  Navbar,
  Nav,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Peyton</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container className="text-center">
          <h1 className="display-4">Hi, I'm Peyton</h1>
          <p className="lead">Full Stack Developer</p>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mb-4">About Me</h2>
          <Row className="align-items-center">
            <Col md={6}>
              <p>
                [Your introduction here] Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Col>
            <Col md={6}>
              <h3>Skills</h3>
              <div className="skills-list">
                <span className="badge bg-primary m-1">React</span>
                <span className="badge bg-primary m-1">JavaScript</span>
                <span className="badge bg-primary m-1">Node.js</span>
                <span className="badge bg-primary m-1">HTML/CSS</span>
                <span className="badge bg-primary m-1">Express</span>
                <span className="badge bg-primary m-1">MongoDB</span>
                {/* Add more skills */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">My Projects</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="project-image.jpg" />
                <Card.Body>
                  <Card.Title>Project Name</Card.Title>
                  <Card.Text>
                    Project description goes here. Brief overview of what you
                    built.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" href="#" target="_blank">
                      Demo
                    </Button>
                    <Button variant="secondary" href="#" target="_blank">
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="project-image.jpg" />
                <Card.Body>
                  <Card.Title>Project Name</Card.Title>
                  <Card.Text>
                    Project description goes here. Brief overview of what you
                    built.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" href="#" target="_blank">
                      Demo
                    </Button>
                    <Button variant="secondary" href="#" target="_blank">
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="project-image.jpg" />
                <Card.Body>
                  <Card.Title>Project Name</Card.Title>
                  <Card.Text>
                    Project description goes here. Brief overview of what you
                    built.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" href="#" target="_blank">
                      Demo
                    </Button>
                    <Button variant="secondary" href="#" target="_blank">
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="project-image.jpg" />
                <Card.Body>
                  <Card.Title>Project Name</Card.Title>
                  <Card.Text>
                    Project description goes here. Brief overview of what you
                    built.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" href="#" target="_blank">
                      Demo
                    </Button>
                    <Button variant="secondary" href="#" target="_blank">
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="project-image.jpg" />
                <Card.Body>
                  <Card.Title>Project Name</Card.Title>
                  <Card.Text>
                    Project description goes here. Brief overview of what you
                    built.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" href="#" target="_blank">
                      Demo
                    </Button>
                    <Button variant="secondary" href="#" target="_blank">
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more project cards */}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <Container className="text-center">
          <h2 className="mb-4">Get In Touch</h2>
          <div className="contact-links">
            <Button
              variant="outline-dark"
              href="mailto:your@email.com"
              className="mx-2"
            >
              Email
            </Button>
            <Button
              variant="outline-dark"
              href="#"
              target="_blank"
              className="mx-2"
            >
              LinkedIn
            </Button>
            <Button
              variant="outline-dark"
              href="#"
              target="_blank"
              className="mx-2"
            >
              GitHub
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default App;
