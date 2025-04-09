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
      setCounts((prev) =>
        prev.map((val, i) =>
          val < stats[i].target
            ? Math.min(val + Math.ceil(stats[i].target / 60), stats[i].target)
            : stats[i].target
        )
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
    >
      <section
        className="relative bg-cover bg-center text-white py-20 sm:py-24 md:py-28"
        style={{ backgroundImage: "url('https://maidwala.in/img/fun-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start sm:text-left"
                aria-label={stat.label}
              >
                <i className={`fas ${stat.icon} text-4xl sm:text-5xl`} aria-hidden="true"></i>
                <div>
                  <h3 className="text-3xl font-bold">
                    {counts[index]}<span className="text-primary">+</span>
                  </h3>
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
