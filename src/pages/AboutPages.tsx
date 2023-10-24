import { Container, Row, Col } from "react-bootstrap";
import Image from "../assets/img/dadi.jpg";


function AboutPages() {
  return (
    <div className='about-pages-element'>
        <div className='heading-text'>
            <h1 className='text-center'>Im Dadi.</h1>
        </div>
        <div className='content-element'>
            <Container>
            <Row>
                <Col xs="6">
                    <img src={Image} alt="" />
                </Col>
                <Col>
                <div className="element-text">
                    <h3>I'm a Product Designer working remotely from 15°C Dublin, Ireland.</h3>
                    <p>Over the past 12+ years, I've worked in various areas of digital design, including front-end development, email, marketing, and app UI/UX. I'm proud to have worn many hats.</p>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    </div>
  )
}

export default AboutPages;