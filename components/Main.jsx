import Link from "next/link";
import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaCode,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { BsArrowDown } from "react-icons/bs";

const Main = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const icons = [
    { Icon: FaCode, size: 32 },
    { Icon: FaReact, size: 36 },
    { Icon: FaJs, size: 32 },
    { Icon: FaHtml5, size: 34 },
    { Icon: FaCss3, size: 34 },
    { Icon: FaNodeJs, size: 36 },
    { Icon: SiTypescript, size: 32 },
    { Icon: SiNextdotjs, size: 34 },
    { Icon: SiTailwindcss, size: 32 },
  ];

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="home"
      className="w-full h-screen text-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Animated background icons */}
      <div className="absolute inset-0 overflow-hidden">
        {dimensions.width > 0 &&
          [...Array(30)].map((_, i) => {
            const { Icon, size } =
              icons[Math.floor(Math.random() * icons.length)];
            return (
              <motion.div
                key={i}
                className="absolute text-[#00df9a]/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{
                  scale: Math.random() * 0.5 + 0.5,
                  rotate: Math.random() * 360,
                }}
                animate={{
                  y: [0, -dimensions.height],
                  x: [0, Math.random() * 100 - 50],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Icon className="w-auto h-auto" size={size} />
              </motion.div>
            );
          })}
      </div>

      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // className="backdrop-blur-md bg-black/40 p-8 rounded-2xl shadow-2xl border border-[#00df9a]/20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="uppercase text-sm tracking-widest text-[#00df9a] font-semibold">
              Welcome to my portfolio
            </p>
            <h1 className="py-4 md:text-7xl sm:text-5xl text-white font-bold">
              Hi, I'm{" "}
              <span className="text-[#00df9a]">
                <Typed
                  className="md:text-6xl sm:text-5xl text-2xl font-bold md:pl-4 pl-2"
                  strings={["Mujahid Ali"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </span>
            </h1>
            <h2 className="py-2 md:text-4xl sm:text-3xl text-gray-300 font-medium">
              Front-End Developer
            </h2>
            <p className="py-6 text-gray-300 max-w-[700px] m-auto text-lg leading-relaxed">
              Versatile Front-End Developer with 4+ years of experience building
              responsive, high-performance web and mobile applications using
              React.js, Next.js, and React Native. Specializing in TypeScript,
              Redux Toolkit, and real-time features.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[330px] m-auto py-4">
              <Link href={"/resume"}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 223, 154, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#00df9a] w-full sm:w-[200px] rounded-md font-medium my-2 mx-auto py-3 text-black hover:bg-[#00c88a] transition-all duration-300"
                >
                  View Resume
                </motion.button>
              </Link>
              <Link href={"/#projects"}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 223, 154, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-[#00df9a] w-full sm:w-[200px] rounded-md font-medium my-2 mx-auto py-3 text-black hover:bg-[#00df9a] hover:text-black transition-all duration-300"
                >
                  View Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <BsArrowDown className="text-[#00df9a] text-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
