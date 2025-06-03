import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiOutlineClose,
  AiOutlineMenu,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#00df9a");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={`fixed w-full h-20 z-[100] transition-all duration-300 ${
        shadow
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-[#00df9a]/20"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link
          href="/"
          className="transform hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/assets/navLogo.png"
            alt="Mujahid Ali Logo"
            width="60"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {[
              { href: "/", label: "Home" },
              { href: "/#about", label: "About" },
              { href: "/#skills", label: "Skills" },
              { href: "/#experience", label: "Experience" },
              { href: "/#projects", label: "Projects" },
              { href: "/resume", label: "Resume", external: true },
              { href: "/#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                <li className="ml-10 text-sm uppercase text-white relative group">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00df9a] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
            ))}
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden cursor-pointer transform hover:scale-110 transition-transform duration-300"
          >
            <AiOutlineMenu size={25} className="text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 transition-opacity duration-300 ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1f2937] p-10 transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link
                href="/"
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/assets/navLogo.png"
                  width="60"
                  height="50"
                  alt="Mujahid Ali Logo"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-white hover:bg-gray-700 transition-colors duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-700 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-gray-300">
                Versatile Front-End Developer
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase text-white">
              {[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/#skills", label: "Skills" },
                { href: "/#experience", label: "Experience" },
                { href: "/#projects", label: "Projects" },
                { href: "/resume", label: "Resume", external: true },
                { href: "/#contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm hover:text-[#00df9a] transition-colors duration-300"
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#00df9a]">
                Let's Connect
              </p>

              <div className="flex items-center justify-between my-8 w-full sm:w-[80%]">
                {[
                  {
                    href: "https://www.linkedin.com/in/mujahid-ali-b852461b5/",
                    icon: <FaLinkedinIn />,
                    external: true,
                  },
                  {
                    href: "https://github.com/mujahidali4997",
                    icon: <FaGithub />,
                    external: true,
                  },
                  {
                    href: "/#contact",
                    icon: <AiOutlineMail />,
                    onClick: () => setNav(!nav),
                  },
                  {
                    href: "tel:+923264584330",
                    icon: <AiFillPhone />,
                    onClick: () => setNav(!nav),
                  },
                  {
                    href: "https://wa.me/923264584330",
                    icon: <AiOutlineWhatsApp />,
                    external: true,
                    onClick: () => setNav(!nav),
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <div
                      onClick={item.onClick}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 hover:bg-[#00df9a] hover:text-black transition-all duration-300 bg-gray-700 text-white"
                    >
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
