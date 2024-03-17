import { useState } from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";

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
            return ` w-full fixed z-[999] left-[20%] right-[20%] top-[15px] bg-[rgb(255,255,255,0.95)] px-3 py-[12px] rounded-full max-w-[860px] mx-auto flex items-center justify-between transition-all duration-[300ms]`
        }else{
            return ` w-full  max-w-[1241px] mx-auto flex  items-center justify-between transition-all duration-[300ms]`
        }
    }

  return (
    <nav className="min-h-[90px] border bg-white flex items-center">
        <div className={navClass(navbar)}>
        <div><img src={logo} alt="wolffolins-logo" /></div>
        <div className="flex items-center gap-8" >
        <ul className="flex gap-6 items-center font-medium text-[18px] text-textColor opacity-[0.8]">
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

export default Navbar
