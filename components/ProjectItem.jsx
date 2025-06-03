import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem = ({ title, description, backgroundImg, projectUrl, technologies, githubUrl }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#00df9a]/20 rounded-xl p-4 group bg-gray-900/50 backdrop-blur-sm"
    >
      <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          src={backgroundImg}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00df9a] transition-colors duration-300">
            {title}
          </h3>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {technologies.map((tech, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-3 py-1 text-sm bg-[#00df9a]/20 text-[#00df9a] rounded-full hover:bg-[#00df9a]/30 transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link href={projectUrl} className="flex-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-[#00df9a] text-black font-semibold hover:bg-[#00c88a] transition-colors flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt />
              View Project
            </motion.button>
          </Link>
          {githubUrl && (
            <Link href={githubUrl} className="flex-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaGithub />
                View Code
              </motion.button>
            </Link>
          )}
        </motion.div>
      </div>

      {/* Hover indicator */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-2 h-2 bg-[#00df9a] rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ProjectItem;
