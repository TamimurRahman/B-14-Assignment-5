
import Logo from "/assets/logo-text.png";
const Footer = () => {
  return (
    <div className="border-t-[1px] border-gray-100 p-[24px] sticky top-0 z-50 mt-20">
     
 <div className=" flex  flex-col container mx-auto  gap-[88px] p-10">
     
      <div className="grid grid-cols-4 text-1">
        <div className="flex flex-col gap-5">
          <img src={Logo} alt="" className="w-[150px]" />
          <p className="text-[#64748bFF] text-[15px] w-[378px]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-5 font-medium ">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-medium ">PRODUCT</h4>
          <ul className="flex flex-col gap-3 text-[#64748bFF]">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-medium">COMPANY</h4>
          <ul className="flex flex-col gap-3 text-[#64748bFF]">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-medium">LEGAL</h4>
          <ul className="flex flex-col gap-3 text-[#64748bFF]">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between text-[#64748bFF]">
        <p >&copy; 2026 Dev Stack. All rights reserved.</p>
        <div>
          <ul className="flex gap-5">
            <li>privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </div>
     </div>
   
  );
};

export default Footer;
