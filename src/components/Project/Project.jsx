import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NewsExplorer from "../../assets/NewsExplorerScreenShot.png";
import TriplePeaksCoffee from "../../assets/TriplePeaksCoffee.png";

function Project() {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
                className="img-fluid"
                variant="top"
                src={NewsExplorer}
                alt="News Explorer"
              />
              <Card.Body>
                <Card.Title>News Explorer</Card.Title>

                <Card.Text>
                  News Explorer is a web application that allows users to search
                  for news articles and save them to their profile. It uses the
                  News API to fetch news articles and the user can save them to
                  their profile. Hosted through netlify.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    href="https://peytonvannoy-newsexplorer.netlify.app/"
                    target="_blank"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://github.com/Peyton-vannoy/NewsExplorer-frontend/tree/stage-react-api"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
                className="img-fluid"
                variant="top"
                src={TriplePeaksCoffee}
              />
              <Card.Body>
                <Card.Title>Triple Peaks Coffee</Card.Title>

                <Card.Text>
                  Triple Peaks Coffee is a web application that allows users to
                  view the menu watch a video about different french press
                  techniques. Book a table and view the menu. Hosted through
                  netlify.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    href="https://triplepeakscoffeeshop.netlify.app/"
                    target="_blank"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://github.com/Peyton-vannoy/se_project_coffeeshop"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
                className="img-fluid"
                variant="top"
                src={TriplePeaksCoffee}
              />
              <Card.Body>
                <Card.Title>Triple Peaks Coffee</Card.Title>

                <Card.Text>
                  Triple Peaks Coffee is a web application that allows users to
                  view the menu watch a video about different french press
                  techniques. Book a table and view the menu.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    href="https://triplepeakscoffeeshop.netlify.app/"
                    target="_blank"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://github.com/Peyton-vannoy/se_project_coffeeshop"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;
