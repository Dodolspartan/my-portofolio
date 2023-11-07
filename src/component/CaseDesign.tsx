import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function CaseDesign() {
  return (
    <div className="case-design">
      <Container fluid>
        <Row>
          <Col xs="5" className="items-left">
            <div className="title-heading">
              <h4>E-commerce</h4>
              <span>childishindonesia.com</span>
            </div>
            <img src="https://www.seanhalpin.xyz/hp/ai.png" alt="" />
          </Col>
          <Col xs="7" className="items-right">
            <div className="title-heading">
              <h4>E-commerce</h4>
              <span>childishindonesia.com</span>
            </div>
            <img src="https://www.seanhalpin.xyz/hp/ai.png" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CaseDesign;
