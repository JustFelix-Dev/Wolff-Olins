import logo from "../assets/logo.svg";
import search from "../assets/search.svg";

const Navbar = () => {
  return (
    <nav className="min-h-[90px] border bg-white flex items-center">
        <div className="w-full max-w-[1241px] mx-auto flex  items-center justify-between">
        <div><img src={logo} alt="wolffolins-logo" /></div>
        <div className="flex items-center gap-8" >
        <ul className="flex gap-6 items-center font-medium text-[19.06px] text-textColor opacity-[0.8]">
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
