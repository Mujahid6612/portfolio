import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Actual data from codebase
const PROJECTS_COMPLETED = 20; // Number of projects in Projects.jsx
const YEARS_EXPERIENCE = 4; // Based on Experience.jsx and About.jsx
const CLIENT_SATISFACTION = 100; // No data, but keep as 100%

const stats = [
  {
    value: PROJECTS_COMPLETED,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    value: YEARS_EXPERIENCE,
    label: "Years Experience",
    suffix: "+",
  },
  {
    value: CLIENT_SATISFACTION,
    label: "Client Satisfaction",
    suffix: "%",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px #00df9a33",
    transition: { duration: 0.2 },
  },
};

function CountUp({ end, suffix }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 3000;
    const increment = end / (duration / 16);
    let raf;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, [end, isInView]);
  return (
    <span ref={ref}>{count}{suffix}</span>
  );
}

const Stats = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-transparent">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center w-full max-w-4xl">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.5 }}
            className="p-8 shadow-xl shadow-[#00df9a]/20 rounded-2xl bg-gray-900/50 backdrop-blur-sm flex flex-col items-center min-w-[220px] group hover:shadow-[#00df9a]/40 transition-all duration-300"
          >
            <span className="text-4xl md:text-5xl font-bold text-[#00df9a] mb-2 group-hover:text-[#00c88a] transition-colors duration-300">
              <CountUp end={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-gray-300 text-lg font-medium text-center">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats; 