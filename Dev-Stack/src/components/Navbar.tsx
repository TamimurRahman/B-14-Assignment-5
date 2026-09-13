import { CiSearch, CiShoppingCart } from "react-icons/ci";
import Logo from "../assets/logo-text.png";
import "../index.css"
const Navbar = () => {
  return (
    <div className="border-b border-gray-300 p-[24px]">
    <nav className="flex justify-between container mx-auto">
      <img src={Logo} alt="" className="w-[120px] h-[32px]"/>
      <ul className="flex gap-4 items-center">
        <li>
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
        <button>SignUp</button>
      </div>
    </nav>
    </div>

  );
};

export default Navbar;
