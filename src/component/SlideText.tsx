import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function SlideText() {
  return (
    <div className="skill-element">
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>UI Design</Card.Title>
                <Card.Text>
                The tools I use to create UI designs are Figma and Photoshop adobe xd and other plugins.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Graphic Designer</Card.Title>
                <Card.Text>
                The tools I use to create designs are Adobe Photoshop, Adobe Illustrator and Corel Draw.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Front End</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>WordPress </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SlideText;
