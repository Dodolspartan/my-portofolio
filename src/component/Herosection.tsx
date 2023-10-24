import React from "react";
import { Container, Button } from "react-bootstrap";

function Herosection() {
  return (
    <div className="Herosection">
      <Container>
        <h1 className="text-center">Hi. I'm Dadi. Farisa Dev.</h1>
        <p className="text-center">I'm passionate about crafting experiences that are engaging, accessible, and user-centric.</p>
        <div className="d-flex justify-content-center mt-5">
            <Button className="mx-3 btn-element-1">Select Work</Button>
            <Button className="btn-element-2">Resume</Button>
        </div>
      </Container>
    </div>
  );
}

export default Herosection;
