import Image from "next/image";
import React from "react";
import echoImg from "../../public/assets/projects/echo.png"; // Placeholder image
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";

const echo = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 object-cover"
          layout="fill"
          src={echoImg}
          alt="ECHO Website"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <motion.h2
            className="py-2 text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ECHO (Website/Online Learning Platform)
          </motion.h2>
          <motion.h3
            className="text-xl md:text-2xl text-[#00df9a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Next.js / TypeScript / i18n / Shadcn UI / React Hook Form / Zod /
            React DnD / Video Lessons / Audio Lessons / Image/Drawing Lessons /
            Podcast Lessons / REST APIs / Maintainable Code
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
          <p className="text-xl tracking-widest uppercase text-[#00df9a] font-semibold">
            Project
          </p>
          <h2 className="py-4 text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            ECHO is an online learning platform. I contributed
            to the development of the website for this platform. The website was
            built using Next.js and TypeScript, incorporating i18n for language
            translation support. My work involved integrating REST APIs and
            adding new features and pages based on the provided design. I also
            implemented React DnD for sorting functionality. Key features
            include video, audio, image/drawing lessons, and podcast lessons.
            Wrote maintainable code and integrated REST APIs.
          </p>
          {/* Add a link to the demo if available */}
          {/* <a
            target="_blank"
            href="https://echo.com.sa/"
            rel="noopener noreferrer"
          >
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
            <p className="text-center font-bold pb-4 text-[#00df9a]">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Next.js
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> TypeScript
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> i18n
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Zod
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Shadcn UI
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> React Hook Form
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> React DnD
              </p>
              <p className="flex items-center text-gray-300">
                <RiRadioButtonFill className="pr-1 text-[#00df9a]" /> Video Lessons
              </p>
            </div>
          </div>
        </motion.div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-[#00df9a] hover:text-[#00c88a] transition-colors">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default echo;
