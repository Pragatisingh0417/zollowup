import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";


const stats = [
  { icon: "fa-calendar-alt", target: 3, label: "Years of Experience" },
  { icon: "fa-users", target: 150, label: "Domestic Clients" },
  { icon: "fa-user", target: 100, label: "Man Power" },
  { icon: "fa-smile", target: 98, label: "Positive Feedbacks" },
];

const CountingNumber = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          if (count < stats[index].target) {
            return Math.min(count + Math.ceil(stats[index].target / 50), stats[index].target);
          }
          return stats[index].target;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-auto mx-auto  py-20"
        >
    <section
      className="relative bg-cover bg-center text-white py-40"
      style={{ backgroundImage: "url('https://maidwala.in/img/fun-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              <i className={`fas ${stat.icon} text-5xl`}></i>
              <div className="flex flex-col text-left">
                <h3 className="text-3xl font-bold">{counts[index]}+</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
    </motion.div>

  );
};

export default CountingNumber;
