
import { Container, Row, Col } from "react-bootstrap";
import { BsLinkedin, BsInstagram, BsTiktok, BsDribbble } from "react-icons/bs";
import Image from "../assets/img/Footer.png";

function FooterEl() {
  return (
    <div className="footer-element-section">
      <Container>
        <Row>
          <Col xs="4">
            <div className="titel-heading">
              <img src={Image} alt="" />
              <h3>Have project in mind?</h3>
              <span>
                Let's connect over coffee or set up an e-meeting to discuss your
                vision and make it happen.
              </span>
              <h6 className="mt-4 text-center">dadifarisa08@gmail.com</h6>
            </div>
          </Col>
          <Col>
            <div className="heading-Qout-element">
              <p>
                "Never underestimate someone who is rich in time but poor, he
                can make whatever he wants"
              </p>
              <h6>Dadi Farisa</h6>
            </div>
            <Col>
              <div className="element-social-media d-flex">
                <div className="title-footer-element">
                  <h6>Follow Social Media</h6>
                </div>
                <div className="icons-items">
                  <a href="" className="mx-2">
                    <BsLinkedin />
                  </a>
                  <a href="" className="mx-2">
                    <BsInstagram />
                  </a>
                  <a href="" className="mx-2">
                    <BsTiktok />
                  </a>
                  <a href="" className="mx-2">
                    <BsDribbble />
                  </a>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterEl;
