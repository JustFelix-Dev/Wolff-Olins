import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselImage1 from '../assets/carousel-image1.jpg';
import carouselImage2 from '../assets/carousel-image2.jpg';
import carouselImage3 from '../assets/carousel-image3.jpg';
import carouselImage4 from '../assets/carousel-image4.jpg';
import carouselImage5 from '../assets/carousel-image5.png';
import carouselImage6 from '../assets/carousel-image6.jpg';
import carouselVid from "../assets/carousel-vid.mp4";
import { useState } from 'react';

function MyCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setActiveIndex(selectedIndex);
    };
  return (
    <Carousel 
    activeIndex={activeIndex}
    onSelect={handleSelect}
    indicators={false} 
    controls={true} 
    className='my-carousel'>
      <Carousel.Item className='carousel-item'>
        <img src={carouselImage1} height={'220px'} alt=""/>
        <Carousel.Caption className=' carousel-caption'>
          <h3 className='text-[20px]'>Decathlon</h3>
          <p className='text-[28px] font-medium  max-w-[28ch]' >Rewriting sport&apos;s playbook for billions of athletes</p>
    <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage2} height={'220px'} alt="" />
        <Carousel.Caption className='carousel-caption' >
          <h3 className='text-[20px]' >LG Electronics</h3>
          <p className='text-[28px] font-medium  max-w-[28ch]' >Bringing a smile back to tech</p>
          <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage3} height={'720px'} alt="" />
        <Carousel.Caption>
          <h3 className='text-[20px]' >NYBG</h3>
          <p className='text-[28px] font-medium  max-w-[28ch]' >
           Renewing a New York institution
          </p>
          <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage4} height={'720px'} alt="" />
        <Carousel.Caption>
          <h3 className='text-[20px]'>Instacart</h3>
          <p className='text-[28px] font-medium  max-w-[28ch]'>
            From grocery app to deliver leader
          </p>
          <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage5}  alt="" />
        <Carousel.Caption>
          <h3 className='text-[20px]'>Uber</h3>
          <p className='text-[28px] font-medium  max-w-[28ch]'>
           Changing how the world moves
          </p>
          <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage6} height={'720px'} alt="" />
        <Carousel.Caption>
          <h3 className='text-[20px]'>The Met</h3>
          <p className='text-[28px] font-medium  max-w-[28ch]' >
           Bringing art to everyone
          </p>
          <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <div className="carousel-video">
        <video muted autoPlay loop playsInline src={carouselVid}></video>
    </div>
    <Carousel.Caption>
        <h3 className='text-[20px]'>GSK</h3>
        <p className='text-[28px] font-medium  max-w-[28ch]' >Redefining an ambitious health brand</p>
        <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;