"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaMobile,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiExpo,
  SiAntdesign,
  SiMui,
  SiChakraui,
  SiMongodb,
  SiDocker,
  SiExpress,
} from "react-icons/si";

import { BsFillGridFill } from "react-icons/bs";


const skillsData = {
  0: [
    {
      icon: <FaReact className="text-4xl" />,
      title: "React.js",
      proficiency: 95,
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "React Native",
      proficiency: 90,
    },
    {
      icon: <SiExpo className="text-4xl" />,
      title: "React Native Expo",
      proficiency: 90,
    },
    {
      icon: <SiNextdotjs className="text-4xl" />,
      title: "Next.js",
      proficiency: 90,
    },
    { icon: <FaHtml5 className="text-4xl" />, title: "HTML5", proficiency: 95 },
    { icon: <FaCss3Alt className="text-4xl" />, title: "CSS", proficiency: 90 },
    {
      icon: <FaBootstrap className="text-4xl" />,
      title: "Bootstrap",
      proficiency: 95,
    },
    {
      icon: <SiTailwindcss className="text-4xl" />,
      title: "Tailwind CSS",
      proficiency: 95,
    },
    {
      icon:<FaReact className="text-4xl" />,
      title: "Material-UI (MUI)",
      proficiency: 90,
    },
    {
      icon: <SiAntdesign className="text-4xl" />,
      title: "Ant Design",
      proficiency: 85,
    },
    {
      icon: <SiChakraui className="text-4xl" />,
      title: "Chakra UI",
      proficiency: 90,
    },
    {
      icon: <BsFillGridFill className="text-4xl" />,
      title: "Shadcn UI",
      proficiency: 85,
    },
    { icon: <SiRedux className="text-4xl" />, title: "Redux", proficiency: 90 },
    {
      icon: <SiRedux className="text-4xl" />,
      title: "Context API",
      proficiency: 95,
    },
    {
      icon: <FaReact className="text-4xl" />,
      title: "React Query",
      proficiency: 90,
    },
    {
      icon: <FaReact className="text-4xl" />,
      title: "React DnD",
      proficiency: 85,
    },
  ],
  1: [
    {
      icon: <FaNodeJs className="text-4xl" />,
      title: "Node.js",
      proficiency: 60,
      isBeginner: true,
    },
    {
      icon: <SiExpress className="text-4xl" />,
      title: "Express.js",
      proficiency: 60,
      isBeginner: true,
    },
    {
      icon: <SiMongodb className="text-4xl" />,
      title: "MongoDB",
      proficiency: 60,
      isBeginner: true,
    },
    {
      icon: <SiSupabase className="text-4xl" />,
      title: "Supabase",
      proficiency: 85,
    },
    {
      icon: <SiFirebase className="text-4xl" />,
      title: "Firebase",
      proficiency: 90,
    },
  ],
  2: [
    { icon: <FaGitAlt className="text-4xl" />, title: "Git", proficiency: 90 },
    {
      icon: <FaGitAlt className="text-4xl" />,
      title: "GitHub",
      proficiency: 90,
    },
  ],
  3: [
    {
      icon: <SiDocker className="text-4xl" />,
      title: "Docker",
      proficiency: 80,
    },
  ],
  4: [
    {
      icon: <FaJs className="text-4xl" />,
      title: "Clean Code Practices",
      proficiency: 95,
    },
    { icon: <FaJs className="text-4xl" />, title: "English", proficiency: 95 },
    { icon: <FaJs className="text-4xl" />, title: "Urdu", proficiency: 100 },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

const sectionTitles = {
  0: "Frontend Development",
  1: "Backend Development",
  2: "Version Control",
  3: "Containerization",
  4: "Other Skills",
};

const SkillCard = ({ skill }) => {
  console.log('Skill data:', skill); // Debug log
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="p-6 shadow-xl shadow-[#00df9a]/20 rounded-xl bg-gray-900/50 backdrop-blur-sm flex flex-col items-center text-center group hover:shadow-[#00df9a]/40 transition-all duration-300"
    >
      <div className="text-[#00df9a] group-hover:scale-110 transition-transform duration-300 bg-gray-800 p-2 rounded-lg">
        {skill?.icon}
      </div>
      <h3 className="text-xl font-bold mt-4 text-white group-hover:text-[#00df9a] transition-colors duration-300">
        {skill?.title}
      </h3>
      <div className="w-full mt-4">
        {/* <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#00df9a] to-[#00c88a] rounded-full"
          />
        </div> */}
        <p className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1">
          {/* {skill.proficiency}% */}
          {skill?.isBeginner && (
            <span className="text-xs px-2 py-0.5 bg-[#00df9a]/20 text-[#00df9a] rounded-full">
              Beginner
            </span>
          )}
        </p>
      </div>
    </motion.div>
  );
};

const SkillSection = ({ skills, title }) => {
  console.log('Skills array:', skills); // Debug log
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-[#00df9a] flex items-center gap-2">
        <span className="w-2 h-8 bg-[#00df9a] rounded-full"></span>
        {title}
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills?.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </motion.section>
  );
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen py-16 px-3 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#00df9a] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xl tracking-widest uppercase text-[#00df9a] font-semibold">
            Skills
          </p>
          <h2 className="py-4 text-4xl font-bold text-white">What I Can Do</h2>
          <p className="py-4 text-gray-300 text-lg max-w-[700px] mx-auto">
            With 4+ years of experience, I have developed a strong skill set in
            various front-end and back-end technologies.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Array.from({ length: 5 }, (_, index) => (
            <SkillSection
              key={index}
              category={sectionTitles[index] || index}
              skills={skillsData[index] || []}
              title={sectionTitles[index] || index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
