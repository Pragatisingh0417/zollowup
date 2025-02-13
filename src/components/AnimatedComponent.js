import { motion } from "framer-motion";

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and moved down
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: false, amount: 0.2 }} // Controls when animation triggers
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
      className="p-4 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-bold">Hello, I appear on scroll!</h2>
    </motion.div>
  );
};

export default AnimatedComponent;
