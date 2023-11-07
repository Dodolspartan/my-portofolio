import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import image from "../assets/img/dd.jpg";


function Herosection() {
  return (
    <div className="Herosection">
      <Container>
        <Row>
          <Col xs="7">
            <div className="title-heading-hero">
              <h1>
              Hi, I'm Dadi Farisa 👋🏻 I'm a Graphic Designer and Web Developer <strong>with experience
 2 years developing fun products</strong>{" "}
              </h1>
            </div>
            <Row>
              <Col>
              <div className="items-left-hero">
                <h3>Based in Tangerang, Indonesia</h3>
                <h3>GMT +7</h3>
                </div>
              </Col>
              <Col>
              <div className="items-right-hero">
                <h3>
                  Let's dive into the universe of tech, design, and business
                  together!
                </h3>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs="5">
          <div className="items-comp-right-hero">
            <img src={image} alt="" /> 
            </div>         
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Herosection;
