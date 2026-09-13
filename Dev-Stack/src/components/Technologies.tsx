import React, { use, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import type { IPopularProduct } from "../types";
interface IpopularProductsProps {
  usersPromise: Promise<IPopularProduct[]>;
}

const Technologies = ({ usersPromise }: IpopularProductsProps) => {
  const data = use(usersPromise);
  console.log(data);
  const [cart, setCart] = useState<IPopularProduct[]>([]);
  const handleAddToCart = (product: IPopularProduct) => {
    console.log("clicked add to card", product);
    setCart([...cart, product]);
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Explore the Technologies</h1>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8 w-full ">
          {/* card1, card2, card */}
          <div className="grid grid-cols-3 gap-10">
            {data.map((product) => {
              return (
                <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="text-3xl"><img src={product.productimg} alt={product.title} /></div>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500">
                      {product.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-xl font-semibold text-gray-900">
                    {product.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    A declarative, component-based JavaScript library for
                    building modern user interfaces.
                  </p>

                  {/* Bottom info */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex gap-2">
                      <span className="bg-gray-50 px-2 py-1 text-xs text-gray-500">
                        Frontend
                      </span>

                      <span className="bg-gray-50 px-2 py-1 text-xs text-gray-500">
                        Beginner-Friendly
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium text-gray-700">4.9</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="mt-4 w-full rounded-lg bg-[#080d1c] py-2.5 text-sm font-semibold text-white">
                    Add to Stack
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-2 bg-yellow-100 h-[500px]"></div>
      </div>
    </div>
  );
};

export default Technologies;
