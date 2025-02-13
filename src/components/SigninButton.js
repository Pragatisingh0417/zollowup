import { button } from "framer-motion/client";
import { useState } from "react";

const SigninButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={`relative overflow-hidden rounded-full px-8 py-3 text-white text-lg font-semibold transition-all duration-300 ease-in-out
        ${hover ? "shadow-[0_0_0_10px_rgb(218,103,68,0%)]" : "shadow-[0_0_0_0_#05bada66]"}
      `}
      style={{
        background: "linear-gradient(30deg, #0400ff, #4ce3f7)",
        backgroundSize: hover ? "200% auto" : "100% auto",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
Sign in    </button>
  );
};

export default SigninButton;
