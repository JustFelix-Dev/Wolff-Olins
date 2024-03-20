import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselImage1 from '../assets/carousel-image1.jpg';
import carouselImage2 from '../assets/carousel-image2.jpg';
import carouselImage3 from '../assets/carousel-image3.jpg';
import carouselImage4 from '../assets/carousel-image4.jpg';
import carouselImage5 from '../assets/carousel-image5.png';
import carouselImage6 from '../assets/carousel-image6.jpg';
import carouselVid from "../assets/carousel-vid.mp4";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

function MyCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setActiveIndex(selectedIndex);
    };

    const [ cursorPresence,setCursorPresence] = useState(false);
    const [ cursorVariant,setCursorVariant] = useState('default');
    const [ mousePosition,setMousePosition] = useState({
        x:0,
        y:0
    })
  
    useEffect(()=>{
        const mouseMove = (e)=>{
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
  
        window.addEventListener('mousemove',mouseMove)
  
        return ()=>{
            window.removeEventListener('mousemove',mouseMove)
        }
    },[])
  
  
  
  const variants = {
    default: {
        x: mousePosition.x -30,
        y: mousePosition.y - 70,
        transition: { duration: 0},
       
    },
    none:{}
  }
  
  const mouseEnter =()=> {setCursorVariant('mainArea');setCursorPresence(true)}
  const mouseLeave =()=> {setCursorVariant('none');setCursorPresence(false)}
  
  const prevMouseEnter=()=>{ setCursorVariant('Prev');console.log(cursorVariant)}
  const prevMouseLeave=()=>{ setCursorVariant('mainArea')}

  const nextMouseEnter=()=>{ setCursorVariant('Next')}
  const nextMouseLeave=()=>{ setCursorVariant('mainArea')}
  
  const carouselLength = 7;

  const handlePrevIndex = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselLength) % carouselLength);
  };
  
  const handleNextIndex = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselLength);
  };
  return (
    <div  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="carousel-container relative ">
      <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      indicators={false} 
      controls={false} 
      className='my-carousel cursor-none'>
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
          <Carousel.Caption className='carousel-caption' >
            <h3 className='text-[20px]' >NYBG</h3>
            <p className='text-[28px] font-medium  max-w-[28ch]' >
             Renewing a New York institution
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={carouselImage4} height={'720px'} alt="" />
          <Carousel.Caption className='carousel-caption'>
            <h3 className='text-[20px]'>Instacart</h3>
            <p className='text-[28px] font-medium  max-w-[28ch]'>
              From grocery app to deliver leader
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={carouselImage5}  alt="" />
          <Carousel.Caption className='carousel-caption'>
            <h3 className='text-[20px]'>Uber</h3>
            <p className='text-[28px] font-medium  max-w-[28ch]'>
             Changing how the world moves
            </p>
            <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={carouselImage6} height={'720px'} alt="" />
          <Carousel.Caption className='carousel-caption'>
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
      <Carousel.Caption className='carousel-caption'>
          <h3 className='text-[20px]'>GSK</h3>
          <p className='text-[28px] font-medium  max-w-[28ch]' >Redefining an ambitious health brand</p>
          <div className="carousel-counter absolute bottom-[2rem] -right-[8rem] text-[28px]">0{activeIndex + 1}/0{7}</div>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  
      <div onClick={handlePrevIndex} onMouseEnter={prevMouseEnter} onMouseLeave={prevMouseLeave} className="carousel-prev cursor-none w-[300px] h-full hidden md:block absolute top-0 ">
      </div>
      <div onClick={handleNextIndex} onMouseEnter={nextMouseEnter} onMouseLeave={nextMouseLeave} className="carousel-next cursor-none w-[300px] top-0 h-full hidden md:block absolute right-0 ">
      </div>
     { cursorPresence && <motion.div className=" fixed top-0 left-0 h-32 w-32 pointer-events-none z-50" variants={variants} animate='default'>
        { cursorVariant === 'mainArea' && <svg className ='custom-arrow' width="30" height="50" viewBox="0 0 29 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.8057 38.6348H12.2343V8.92212L0.805725 20.3501V13.4933L12.2343 2.06535L13.3772 0.922558H15.6629L16.8057 2.06535L28.2343 13.4933V20.3501L16.8057 8.92212V38.6348Z" fill="#FFF84B"/>
      </svg>}
      { cursorVariant === 'Prev' && <span className='text-[#FFF84B] text-[3.4rem] font-regular'>Prev</span>}
      { cursorVariant === 'Next' && <span className='text-[#FFF84B] text-[4rem] font-regular'>Next</span>}
      </motion.div>}
    </div>
  );
}

export default MyCarousel;