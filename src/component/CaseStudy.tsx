import {  Container } from "react-bootstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Image Slider Assets
import Image1 from "../assets/img/Aplikasi Al-Quran.jpg";
import Image2 from "../assets/img/Childish.jpg";
import Image3 from "../assets/img/Izada.jpg";
import Image4 from "../assets/img/Landing Page School.jpg";
import Image5 from "../assets/img/Landing Page.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function CaseStudy() {
  return (
    <div className="case-study">
      <Container>
        <div className="title-heading-case">
          <div className="text-items">
          <h5>My Selected Works</h5>
          <span>Experince Work</span>
          </div>
          <div className="icons-items">
          </div>
        </div>
        <div className="slider-items">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default CaseStudy;
