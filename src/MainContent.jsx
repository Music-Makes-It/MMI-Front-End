import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import React from "react";

export default function Explore() {
  return (
    <>
      <Jumbotron fluid>
        <Container className="explore">
          <h1>EXPLORE !</h1>
          <Button variant="primary">Primary Button</Button>
        </Container>
      </Jumbotron>
    </>
  );
}
