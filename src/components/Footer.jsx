import footerlink from '../assets/link-arrow.svg';
import backToTop from "../assets/backToTop.svg";
import footerLogo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="h-[610px] bg-[#FFF84B] flex flex-col justify-between">
        <div className="pt-8 w-full max-w-[1225px] mx-auto flex justify-between">
          <div className='font-inter text-[14.38px]'> 2024 Wolff Olins</div>
          <div>
              <p className='font-medium text-[14.5px]'>Talk to us or ask us anything.</p>
              <p className="flex text-[14.88px] items-center gap-2"><img src={footerlink} alt="footer-arrow"/> <span>Contact Us</span></p>
              <p className="flex text-[14.88px] items-center gap-2"><img src={footerlink} alt="footer-arrow"/> <span>Cookie Policy</span></p>
              <p className="flex text-[14.88px] items-center gap-2"><img src={footerlink} alt="footer-arrow"/> <span>Private Notice</span></p>
          </div>
          <div className='flex gap-8' >
            <div>
            <p className="flex text-[14.88px] items-center gap-2"><img src={footerlink} alt="footer-arrow"/> <span>LinkedIn</span></p>
              <p className="flex text-[14.88px] items-center gap-2"><img src={footerlink} alt="footer-arrow"/> <span>Twitter</span></p>
              <p className="flex text-[14.88px] items-center gap-2"><img src={footerlink} alt="footer-arrow"/> <span>Instagram</span></p>
              <p className="flex text-[14.88px] items-center gap-2"><img src={footerlink} alt="footer-arrow"/> <span>Youtube</span></p>
              <p className="flex text-[14.88px] items-center gap-2"><img src={footerlink} alt="footer-arrow"/> <span>Archive</span></p>
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <img src={backToTop} alt="back-to-top"/>
                <p className='text-[14.5px] text-black'>Back to top</p>
            </div>
          </div>
        </div>
        <div className='pb-[3rem] flex  w-full max-w-[1225px] mx-auto '>
            <img src={footerLogo} className='w-full' alt="footer-logo"/>
        </div>
    </footer>
  )
}

export default Footer