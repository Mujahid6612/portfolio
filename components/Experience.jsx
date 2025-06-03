import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const workExperience = [
    {
      company: "Foreaims",
      location: "Lahore, Pakistan",
      role: "React JS / Next JS / React Native Frontend Developer",
      duration: "Joined 09/2022 - Present",
      responsibilities: [
        "Contributed to the React Native app LoGo. This was an app like Ubar, implementing sockets, REST APIs, one-to-one chat, and real-time location tracking.",
        "Collaborated on code review and mentored peers in clean coding practices.",
      ],
    },
    {
      company: "Vision-X | Package X",
      location: "Islamabad",
      role: "React Frontend Developer",
      duration: "02/2022 - 08/2022",
      responsibilities: [
        "Contributed to building a Web application named Fabric, which is a CMS to manage the web app UI and different layouts",
        "I worked on React Hooks, Custom Hooks, MUI, Redux, and Vue.js.",
        "Enhanced UI/UX by fixing issues and aligning with Figma designs.",
        "Collaborated on bug fixes, feature additions, and code reviews, ensuring adherence to coding standards.",
      ],
    },
    {
      company: "ASSENCO-ME | Fayha",
      location: "Jeddah, Saudi Arabia (Remote)",
      role: "React-Native Frontend Developer",
      duration: "09/2021 - 01/2022",
      responsibilities: [
        "Developed a private medicine distribution/buying app called Refill using React Hooks, Custom Hooks, Firebase, and Google Maps APIs.",
        "Enhanced UI/UX by fixing issues and aligning with Figma designs.",
        "Collaborated on bug fixes, feature additions, and code reviews, ensuring adherence to coding standards.",
      ],
    },
    {
      company: "PIKES SOFT",
      location: "Lahore, Pakistan",
      role: "React-Native Frontend Developer",
      duration: "01/2021 - 08/2021",
      responsibilities: [
        "Developed React Native applications, KEYKI and Almana, focusing on React-hooks, Redux, Redux Toolkit, Redux-saga, and video player integration.",
        "Improved app performance by optimizing React Native code to minimize unnecessary re-rendering.",
        "Designed and implemented a carousel component for image display, enhancing user engagement.",
        "Contributed to code reviews and coding conventions, providing constructive feedback to team members.",
        "Integrate the REST APIs.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div id="experience" className="w-full min-h-screen py-16 px-3 relative overflow-hidden">
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
            Experience
          </p>
          <h2 className="py-4 text-4xl font-bold text-white">Work History</h2>
          <p className="py-4 text-gray-300 text-lg max-w-[700px] mx-auto">
            Here is a summary of my professional experience over the past 4+ years.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8 space-y-8"
        >
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
            >
              {/* Timeline connector */}
              {index !== workExperience.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-[#00df9a]/20 group-hover:bg-[#00df9a]/40 transition-colors duration-300"></div>
              )}
              
              <div className="p-6 shadow-xl shadow-[#00df9a]/20 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:shadow-[#00df9a]/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#00df9a]/10 rounded-lg">
                      <FaBriefcase className="text-[#00df9a] text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#00df9a] group-hover:text-white transition-colors duration-300">
                        {job.company}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaMapMarkerAlt />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaCalendarAlt />
                    <span>{job.duration}</span>
                  </div>
                </div>

                <p className="text-xl font-semibold mb-4 text-white group-hover:text-[#00df9a] transition-colors duration-300">
                  {job.role}
                </p>

                <ul className="space-y-3 text-gray-300">
                  {job.responsibilities.map((responsibility, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-[#00df9a] mt-1.5">•</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 