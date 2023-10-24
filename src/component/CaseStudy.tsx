import { Row, Col, Container } from "react-bootstrap";

import image from '../assets/img/Image.png';

function CaseStudy() {
  return (
    <div className='case-study'>
      <Container>
        <div className='element-items-case-text'>
            <h1 className='text-center'>Case Studies</h1>
        </div>
        <div className='card-portofolio-elements'>
          <Row>
            <Col>
              <div className='card-element'>
                <img src={image}/>
              </div>
            </Col>
            <Col>
            <div className='card-element'>
                <img src={image}/>
              </div></Col>
          </Row>
        </div>
        </Container>
    </div>
  )
}

export default CaseStudy;