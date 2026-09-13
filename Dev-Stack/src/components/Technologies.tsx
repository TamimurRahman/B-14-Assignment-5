import  { use, useState } from "react";
import type { IPopularProduct } from "../types";
import { RxCross2 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";
interface IpopularProductsProps {
  usersPromise: Promise<IPopularProduct[]>;
}

const Technologies = ({ usersPromise }: IpopularProductsProps) => {
  const data = use(usersPromise);
  const [cart, setCart] = useState<IPopularProduct[]>([]);
  const handleAddToCart = (product: IPopularProduct) => {
    const alreadyAdded = cart.some((item) => item.title === product.title);

    if (alreadyAdded) {
      toast.warning(`${product.title} is already added!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.title} added to cart!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div className="container mx-auto flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">
          Explore the <span className="bg-gradient-to-b from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-xl text-[#64748bFF]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 w-full ">
          {/* card1, card2, card */}
          <div className="grid grid-cols-3 gap-5 ">
            {data.map((product, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-xl border border-gray-200 bg-white p-4 shadow-sm "
                >
                  <div className="flex items-start justify-between">
                    <div className="text-3xl">
                      <img src={product.productimg} alt={product.title} />
                    </div>

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
                    {product.description}
                  </p>

                  {/* Bottom info */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex gap-2">
                      <span className="bg-gray-50 px-2 py-1 text-xs text-gray-500">
                        {product.category}
                      </span>

                      <span className=" px-2 py-1 text-xs text-gray-500">
                        {product.level}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 w-full rounded-lg bg-[#080d1c] py-2.5 text-sm font-semibold text-white"
                  >
                    {cart.includes(product) ? "Added" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Your Stack</h2>

            <p className="mt-1 text-sm text-gray-400">
              {cart.length} Technology Selected
            </p>

            {cart.length === 0 ? (
              <div className="mt-6 rounded-xl border-2 border-dashed border-gray-200 py-12 text-center">
                <p className="text-gray-400">Your stack is empty.</p>
              </div>
            ) : (
              <div className="mt-6 space-y-3">
                {cart.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.productimg}
                        alt={product.title}
                        className="h-10 w-10 object-contain"
                      />

                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {product.title}
                        </h3>

                        <p className="text-xs text-gray-400">
                          {product.category}
                        </p>
                      </div>
                    </div>

                    {/* Remove single product and help from google complete this functionality*/}
                    <button
                      onClick={() => {
                        setCart(cart.filter((_, i) => i !== index));
                        toast.success("Product removed from cart!");
                      }}
                      className="text-2xl text-gray-400 hover:text-red-500"
                    >
                      <RxCross2 />
                    </button>
                  </div>
                ))}

                {/* Remove All */}
                <button
                  onClick={() => {
                    setCart([]);
                    toast.success("All product removed from cart!");
                  }}
                  className="mt-8 w-full rounded-xl border border-red-300 py-3 font-semibold text-red-500 hover:bg-red-50"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
