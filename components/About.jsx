import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaMobile,
  FaCode,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiFirebase, SiNextdotjs } from "react-icons/si";

const About = () => {
  const skills = [
    { icon: <FaReact className="text-2xl" />, name: "React Js" },
    { icon: <FaMobile className="text-2xl" />, name: "React Native" },
    { icon: <SiTypescript className="text-2xl" />, name: "TypeScript" },
    { icon: <SiNextdotjs className="text-2xl" />, name: "Next Js" },
    { icon: <SiFirebase className="text-2xl" />, name: "Firebase" },
    { icon: <FaCode className="text-2xl" />, name: "Clean Code" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      id="about"
      className="w-full min-h-screen px-3 flex items-center py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#00df9a] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 relative z-10">
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="uppercase text-xl tracking-widest text-[#00df9a] font-semibold">
              About Me
            </p>
            <h2 className="py-4 text-4xl font-bold text-white">Who I Am</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="py-4 text-gray-300 text-lg leading-relaxed"
            >
              I'm a Front-End Developer with 4+ years of professional experience
              building responsive, high-performance web and mobile applications.
              Currently working at Foreaims as a React/React Native Developer,
              where I contribute to the development of cross-platform apps with
              real-time features like chat, location tracking, and CMS tools.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="py-4 text-gray-300 text-lg leading-relaxed"
            >
              My expertise spans across React.js, Next.js, and React Native
              (Expo & CLI), with a strong focus on TypeScript, Redux Toolkit,
              and modern state management solutions. I'm passionate about
              creating scalable component architectures and optimizing app
              performance while maintaining clean code practices.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-[#00df9a] bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
              >
                {skill.icon}
                <span className="text-white">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-6"
          >
            <motion.a
              href="/#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-2 px-6 text-[#00df9a] border-2 border-[#00df9a] rounded-lg cursor-pointer hover:bg-[#00df9a] hover:text-white transition-all duration-300"
            >
              View Projects
            </motion.a>
            <motion.a
              href="https://github.com/Mujahid6612"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-2 px-6 text-white bg-[#00df9a] rounded-lg cursor-pointer hover:bg-[#00c88a] transition-colors"
            >
              <FaGithub className="inline-block mr-2" />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mujahid-ali-8a4a76369/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block py-2 px-6 text-white bg-[#00df9a] rounded-lg cursor-pointer hover:bg-[#00c88a] transition-colors"
            >
              <FaLinkedin className="inline-block mr-2" />
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full h-auto m-auto shadow-xl shadow-[#00df9a]/20 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 relative group"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00df9a]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          <img
            className="rounded-xl transform transition-transform duration-300 group-hover:scale-[1.02]"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="Developer workspace"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
