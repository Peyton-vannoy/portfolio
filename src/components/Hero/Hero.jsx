import React from "react";
import { Container } from "react-bootstrap";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container className="text-center">
        <h1 className="display-4">Hi, I'm Peyton</h1>
        <p className="lead">Full Stack Developer</p>
      </Container>
    </section>
  );
}

export default Hero;
