import { Container, Row, Col } from "react-bootstrap";
import Image from "../assets/img/dadi.jpg";


function AboutPages() {
  return (
    <div className='about-pages-element'>
        <div className='heading-text'>
            <h1 className='text-center'>Im Dadi Farisa.</h1>
        </div>
        <div className='content-element'>
            <Container>
            <Row className="text-center justify-content-center">
                    <img src={Image} alt="" />
            </Row>
            <div className="text-about-element mt-5">
                <h3 className="heading-title">About</h3>
                <p>Greetings, I am Dadi Farisa, a professional in the world of web design and development. My journey started as a Graphic Designer, but as time went by, my interests and skills developed, bringing me into the world of UI Design and, ultimately, Web Development.</p>
                <p>As a Graphic Designer, I initially focused on creating visual works of art that were engaging and communicated well. I love playing with colors, typography, and other design elements to create powerful messages. This was my foundation that allowed me to understand the importance of good design in communicating with an audience.</p>
                <p>However, the more I got into UI design, the more I began to explore how users interact with design. This opened the door for me to understand the importance of good user experience and how design can influence the way a person interacts with a product or service.</p>
                <p>Later, the desire to engage more deeply in web development pushed me to deepen my knowledge in this area. I started learning programming languages ​​like HTML, CSS, and JavaScript, as well as understanding the principles of good web development. This allows me to design and develop responsive and functional websites.</p>
                <p>Currently, I am a Web Developer committed to creating beautiful, high-performing websites. I combine graphic design and UI Design knowledge with web development skills to create enjoyable and efficient online experiences for users.</p>
                <p>Throughout this journey, I have continued to improve my skills through courses, personal projects, and work experiences. I believe that learning is a continuous process, and I am always eager to keep up with the latest developments in the web design and development industry.</p>
                <p>I hope that the experience and knowledge I have can make a positive contribution in creating meaningful solutions in the digital world. I'm always open to collaborations and new challenges, and I love sharing my insights with others. Thank you for following my journey, and let's continue to innovate together.</p>
            </div>
            </Container>
        </div>
    </div>
  )
}

export default AboutPages;