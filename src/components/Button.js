import { button } from "framer-motion/client";
import { useState } from "react";

const Button = () => {
  const [hover, setHover] = useState(false);

  return (
    //     <button
    //       className={`relative overflow-hidden rounded-full px-8 py-3 text-white text-lg font-semibold transition-all duration-300 ease-in-out
    //         ${hover ? "shadow-[0_0_0_10px_rgb(218,103,68,0%)]" : "shadow-[0_0_0_0_#05bada66]"}
    //       `}
    //       style={{
    //         background: "linear-gradient(30deg, #0400ff, #4ce3f7)",
    //         backgroundSize: hover ? "200% auto" : "100% auto",
    //       }}
    //       onMouseEnter={() => setHover(true)}
    //       onMouseLeave={() => setHover(false)}
    //     >
    // Sign up    </button>
    <button class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
      <p class="z-10 absolute bottom-2 left-2">See more</p>
    </button>
  );
};

export default Button;
