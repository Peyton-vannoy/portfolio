import React from "react";
import { Container, Button } from "react-bootstrap";

function Contact() {
  return (
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
            href="https://www.linkedin.com/in/peyton-vannoy"
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
  );
}

export default Contact;
