import React from "react";
import bannerImg from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="flex justify-between container mx-auto items-center">
      <div className="max-w-[553px] flex flex-col gap-7">
        <h1 className="text-5xl font-bold">
          Build Your Ideal <span className=" text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Development Stack</span>
        </h1>
        <p className="text-xl">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-[20px]">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500  text-white font-semibold hover:text-white py-[18px] px-[11px]  text-[20px] rounded">Explore Technologies</button>
          <button className="px-15  text-[20px] border border-[#e5e7ebFF] rounded">Learn More</button>
        </div>
      </div>
      <img src={bannerImg} alt=""  />
    </div>
  );
};

export default Banner;
