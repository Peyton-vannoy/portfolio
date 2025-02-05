import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faBootstrap,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
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
        <Row className="align-items-center" fluid="true">
          <Col md={12}>
            <p>
              Hello! I'm Peyton, a software engineer with a passion for creating
              user-friendly and efficient web applications. With a strong
              foundation in both front-end and back-end development, I strive to
              deliver high-quality, scalable solutions that meet the needs of
              modern web development. I am a quick learner and always looking to
              expand my skills and knowledge.
            </p>
          </Col>
          <h3 className="text-center mb-4">Skills</h3>
          <Col
            md={12}
            className="d-flex justify-content-center flex-wrap gap-2"
          >
            <Card className="fluid">
              <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                <FontAwesomeIcon icon={faReact} size="2x" />
                <Card.Text>React</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                <FontAwesomeIcon icon={faJs} size="2x" />
                <Card.Text>JavaScript</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                <FontAwesomeIcon icon={faHtml5} size="2x" />
                <Card.Text>HTML</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                <FontAwesomeIcon icon={faCss3} size="2x" />
                <Card.Text>CSS</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                <FontAwesomeIcon icon={faNodeJs} size="2x" />
                <Card.Text>Node.js</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                <FontAwesomeIcon icon={faNodeJs} size="2x" />
                <Card.Text>Express</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                <FontAwesomeIcon icon={faBootstrap} size="2x" />
                <Card.Text>Bootstrap</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body className="d-flex align-items-center justify-content-center flex-column">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <Card.Text>GitHub</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
