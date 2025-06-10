import Link from "next/link";
import React from "react";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillPhone,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn size={25} />,
      href: "https://www.linkedin.com/in/mujahid-ali-8a4a76369/",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub size={25} />,
      href: "https://github.com/Mujahid6612",
      label: "GitHub"
    },
    {
      icon: <AiOutlineMail size={25} />,
      href: "mailto:mujahidali6612@gmail.com",
      label: "Email"
    },
    {
      icon: <AiFillPhone size={25} />,
      href: "tel:+923114103274",
      label: "Phone"
    },
    {
      icon: <AiOutlineWhatsApp size={25} />,
      href: "https://wa.me/923114103274",
      label: "WhatsApp"
    }
  ];

  return (
    <div id="contact" className="w-full min-h-screen px-3 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#00df9a] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-[1240px] m-auto px-2 py-16 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xl tracking-widest uppercase text-[#00df9a] font-semibold">
            Contact
          </p>
          <h2 className="py-4 text-4xl font-bold text-white">Let's Connect</h2>
          <p className="py-4 text-gray-300 text-lg max-w-[700px] mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Profile Card */}
          <motion.div
            className="w-full h-full shadow-xl shadow-[#00df9a]/20 rounded-xl p-4 bg-gray-900/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:p-4 h-full flex flex-col justify-between">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl group flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00df9a]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  className="rounded-xl transform transition-transform duration-300 group-hover:scale-[1.02]"
                  src="/assets/navLogo.png"
                  alt="Contact Me"
                  width={250}
                  height={250}
                  objectFit="cover"
                />
              </motion.div>
              <div className="mt-8">
                <h2 className="py-2 text-white text-2xl font-bold">Mujahid Ali</h2>
                <p className="text-[#00df9a] text-xl font-semibold">Front-End Developer</p>
                <p className="py-4 text-gray-300">
                  I am available for freelance or full-time positions. Let's create something amazing together.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div 
            className="w-full h-full shadow-xl shadow-[#00df9a]/20 rounded-xl p-4 bg-gray-900/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-full flex flex-col justify-center p-4">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-[#00df9a]/10 transition-all duration-300"
                  >
                    <div className="text-[#00df9a]">{link.icon}</div>
                    <span className="text-white font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full shadow-lg shadow-[#00df9a]/20 p-4 cursor-pointer bg-gray-800/50 backdrop-blur-sm text-[#00df9a] hover:bg-[#00df9a] hover:text-white transition-all duration-300"
            >
              <HiOutlineChevronDoubleUp size={30} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
