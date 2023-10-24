import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FooterEl() {
  return (
    <div className="footer-element-section">
      <Container>
        <Row>
          <Col xs="7">            
            <h5>© 2023 Dadi Farisa Indonesia</h5>
          </Col>
          <Col xs="2">
            <h5>Elsewhere</h5>
            <p>
              <a href="">Github</a>
            </p>
            <p>
              <a href="">Figma</a>
            </p>
            <p>
              <a href="">CV</a>
            </p>
            <p>
              <a href="">Linkedln</a>
            </p>
          </Col>
          <Col>
            <h5>Contact</h5>
            <p>
              <a href="">Whatshapp</a>
            </p>
            <p>
              <a href="">Telegram</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterEl;
