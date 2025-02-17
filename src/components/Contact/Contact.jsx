import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <section id="contact" className="py-3">
      <Container className="text-center">
        <h2 className="mb-4">Get In Touch</h2>
        <div className="contact-links">
          <Button
            variant="outline-dark"
            href="mailto:peyton.vannoy1999@gmail.com"
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
            href="https://github.com/Peyton-vannoy"
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
