import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
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
  );
}

export default About;
