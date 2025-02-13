import { motion } from "framer-motion";

const ScrollAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and shifted down
      whileInView={{ opacity: 1, y: 0 }} // Animate when scrolled into view
      viewport={{ once: false, amount: 0.2 }} // Controls when animation triggers
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-4 bg-green-500 text-white text-center rounded-md shadow-lg m-4"
    >
      <h2>Appears when scrolling!</h2>
    </motion.div>
  );
};

export default ScrollAnimation;
