import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const resume = () => {
  const resumePages = [
    "/assets/My-Resume/Mujahid_Ali_Resume_page-0001.jpg",
    "/assets/My-Resume/Mujahid_Ali_Resume_page-0002.jpg",
    "/assets/My-Resume/Mujahid_Ali_Resume_page-0003.jpg",
    "/assets/My-Resume/Mujahid_Ali_Resume_page-0004.jpg",
    "/assets/My-Resume/Mujahid_Ali_Resume_page-0005.jpg",
  ];

  return (
    <>
      <Head>
        <title>Mujahid Ali | Resume</title>
        <meta name="description" content="Mujahid Ali's professional resume." />
        <link rel="icon" href="/fav.png" /> {/* Assuming fav.png exists */}
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[#00df9a] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative w-full px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[1240px] mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-5xl font-bold text-[#00df9a] py-8 mb-12"
            >
              Resume
            </motion.h2>
            
            <div className="flex flex-col items-center gap-12">
              {resumePages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="w-full max-w-screen-md group"
                >
                  <div className="relative shadow-2xl shadow-[#00df9a]/20 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-[#00df9a]/40">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00df9a]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src={page}
                      alt={`Resume Page ${index + 1}`}
                      layout="responsive"
                      width={800}
                      height={1000}
                      objectFit="contain"
                      className="transform transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default resume;
