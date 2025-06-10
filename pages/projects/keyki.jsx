import Image from "next/image";
import React from "react";
import keykiImg from "../../public/assets/projects/keyki2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";

const keyki = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 object-cover"
          layout="fill"
          src={keykiImg}
          alt="Keyki App"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <motion.h2 
            className="py-2 text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            E-commerce Video Platform (Keyki)
          </motion.h2>
          <motion.h3 
            className="text-xl md:text-2xl text-[#00df9a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            React Native / Redux / Video Integration
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
            This app, known as Keyki, is an e-commerce platform similar to Daraz, with a strong focus on video content. I contributed to code reviews and team leadership for this project, which was built using React Native.
            Key features and technologies involved included React Hooks, Custom Hooks, Redux, Redux Toolkit, Redux-saga for state management, and integration of video player functionalities. I also focused on optimizing React Native code to improve app performance by minimizing unnecessary re-rendering. Additionally, I designed and implemented a carousel component to enhance user engagement through image display and integrated REST APIs for data communication.
            The app supports user authentication with Google and Facebook accounts, allowing users to save their favorite products.
          </p>
          <a target="_blank" href="https://www.facebook.com/keyki.pk/" rel="noopener noreferrer">
            <motion.button 
              className="px-8 py-2 mt-4 mr-8 bg-[#00df9a] text-black font-semibold rounded-md hover:bg-[#00c88a] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo
            </motion.button>
          </a>
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
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> React Native
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> React Hooks
              </p>
               <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Custom Hooks
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Redux
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Redux Toolkit
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Redux-saga
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Video Player Integration
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> REST APIs
              </p>
               <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Google API
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

export default keyki;
