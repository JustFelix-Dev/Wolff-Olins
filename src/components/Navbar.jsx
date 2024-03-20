import { useState } from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import menuOpen from "../assets/menuOpen.svg";

const Navbar = () => {
     const [navbar,setNavbar] = useState(false);

    const dynamicNav =()=>{
        if(window.scrollY > 50){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    
    window.addEventListener('scroll', dynamicNav);

    const navClass=(navbar)=>{
        if(navbar){
            return ` w-full fixed z-[999] left-[15%] md:left-[20%] right-[30%] sm:right-[20%] top-[15px] bg-[rgb(255,255,255,0.9)] px-3 py-[12px] rounded-full max-w-[350px] sm:max-w-[450px] md:max-w-[860px] mx-auto flex items-center justify-between transition-all duration-[300ms]`
        }else{
            return ` w-full  max-w-[1241px] mx-auto flex  items-center justify-between transition-all duration-[300ms]`
        }
    }

  return (
    <nav className="min-h-[90px] border bg-white flex items-center">
        <div className={navClass(navbar)}>
        <div><img src={logo} alt="wolffolins-logo" className="h-[18px] w-[100px] md:h-auto md:w-auto" /></div>
        <div className="flex items-center gap-3 md:gap-8" >
            <div className="md:hidden cursor-pointer" ><img src={menuOpen} alt="menu-open"/></div>
        <ul className="nav-list flex gap-6 items-center font-medium text-[18px] text-textColor opacity-[0.8]">
            <li className="cursor-pointer">Work</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">News</li>
            <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="cursor-pointer" ><img src={search} alt="search-icon"/></div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;
