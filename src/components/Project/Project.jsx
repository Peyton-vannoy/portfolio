import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
function Project() {
  return (
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
  );
}

export default Project;
