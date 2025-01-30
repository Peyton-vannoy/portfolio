import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profile from "../../assets/profilePicture.jpg";

function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="justify-content-center" fluid="true">
          <Col md={6} className="text-center mb-4">
            <Image src={profile} alt="about" roundedCircle fluid="true" />
          </Col>
        </Row>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Hello! I'm Peyton, a software engineer with a passion for creating
              user-friendly and efficient web applications. With a strong
              foundation in both front-end and back-end development, I strive to
              deliver high-quality, scalable solutions that meet the needs of
              modern web development. I am a quick learner and always looking to
              expand my skills and knowledge.
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
