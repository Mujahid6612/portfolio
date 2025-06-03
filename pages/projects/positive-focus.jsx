import Image from "next/image";
import React from "react";
import positiveFocusImg from "../../public/assets/projects/placeholder.png"; // Placeholder image
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";

const positiveFocus = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 object-cover"
          layout="fill"
          src={positiveFocusImg}
          alt="Positive Focus App"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <motion.h2 
            className="py-2 text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Positive Focus (Mobile App)
          </motion.h2>
          <motion.h3 
            className="text-xl md:text-2xl text-[#00df9a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            React Native / Firebase / Notifications
          </motion.h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <motion.div 
          className="col-span-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl tracking-widest uppercase text-[#00df9a] font-semibold">Project</p>
          <h2 className="py-4 text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Positive Focus is a mobile application centered around quotes, featuring a Firebase-backed backend. I contributed to code review and team leadership for this project. I worked with React Hooks, Custom Hooks, Firebase, and the React-Native CLI setup. I was responsible for integrating remote and local notifications and participated in bug fixes and code reviews to ensure the application's stability and performance.
          </p>
          {/* Add a link to the demo if available */}
          {/* <a target="_blank" href="YOUR_DEMO_LINK_HERE" rel="noopener noreferrer">
            <motion.button 
              className="px-8 py-2 mt-4 mr-8 bg-[#00df9a] text-black font-semibold rounded-md hover:bg-[#00c88a] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo
            </motion.button>
          </a> */}
           {/* Add a link to the code if available */}
          {/* <a target="_blank" href="YOUR_CODE_LINK_HERE" rel="noopener noreferrer">
            <motion.button 
              className="px-8 py-2 mt-4 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Code
            </motion.button>
          </a> */}
        </motion.div>

        <motion.div 
          className="col-span-4 md:col-span-1 shadow-xl shadow-[#00df9a]/20 rounded-xl p-4 bg-gray-900/50"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-2">
            <p className="text-center font-bold pb-4 text-[#00df9a]">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> React Native CLI
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> React Hooks
              </p>
               <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Custom Hooks
              </p>
               <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Firebase
              </p>
               <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Remote Notifications
              </p>
               <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Local Notifications
              </p>
               <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Bug Fixing
              </p>
               <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Code Reviews
              </p>
            </div>
          </div>
        </motion.div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-[#00df9a] hover:text-[#00c88a] transition-colors">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default positiveFocus; 