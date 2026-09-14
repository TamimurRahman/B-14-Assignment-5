import Logo from "/assets/logo-text.png";
import "../index.css";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="border-b border-gray-100 p-[24px] sticky top-0 z-50 bg-white">
      <nav className="container mx-auto flex items-center justify-between">
        <button className="md:hidden text-2xl">
          <FiMenu />
        </button>

        <img src={Logo} alt="Dev Stack" className="w-[120px] md:w-[150px]" />

        <ul className="hidden md:flex gap-4 items-center">
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

        <div className="flex gap-2  items-center">
          <button className="text-sm">Sign In</button>

          <button className="bg-[#db2777FF] text-white py-2 px-3  rounded-full text-sm ">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
