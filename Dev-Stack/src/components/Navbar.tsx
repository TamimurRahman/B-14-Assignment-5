import { CiSearch, CiShoppingCart } from "react-icons/ci";
import Logo from "../assets/logo-text.png";
import "../index.css"
const Navbar = () => {
  return (
    <div className="border-b border-gray-300 p-[24px] sticky top-0 z-50 bg-white">
    <nav className="flex justify-between container mx-auto ">
      <img src={Logo} alt="" className="w-[150px] "/>
      <ul className="flex gap-4 items-center ">
        <li className="text-[#db2777FF]">
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Technologies</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
                <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <button>Sign In</button>
        <button className="bg-[#db2777FF] text-white  py-2 px-4 rounded-full">Sign Up</button>
      </div>
    </nav>
    </div>

  );
};

export default Navbar;
