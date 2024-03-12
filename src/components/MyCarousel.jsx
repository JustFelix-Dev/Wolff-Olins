import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselImage1 from '../assets/carousel-image1.jpg';
import carouselImage2 from '../assets/carousel-image2.jpg';
import carouselImage3 from '../assets/carousel-image3.jpg';
import carouselImage4 from '../assets/carousel-image4.jpg';
import carouselImage5 from '../assets/carousel-image5.png';
import carouselImage6 from '../assets/carousel-image6.jpg';
import carouselVid from "../assets/carousel-vid.mp4";

function MyCarousel() {
  return (
    <Carousel  className='my-carousel'>
      <Carousel.Item className='carousel-item'>
        <img src={carouselImage1} height={'220px'} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage2} height={'220px'} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage3} height={'720px'} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage4} height={'720px'} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage5}  alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carouselImage6} height={'720px'} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <div className="carousel-video">
        <video controls autoPlay loop playsInline src={carouselVid}></video>
    </div>
    <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;