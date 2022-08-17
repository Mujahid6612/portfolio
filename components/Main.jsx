import Link from "next/link";
import React from "react";
import Typed from "react-typed";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center bg-black">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#00df9a]">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-white">
            Hi, I'm{" "}
            <span className="text-[#00df9a]">
              <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                strings={["Mujahid Ali"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </span>
          </h1>
          <h1 className="py-2 text-white">A Front-End Developer</h1>
          <p className="py-4 text-white max-w-[70%] m-auto">
            I’m a front-end react/react-native developer specializing in
            building android and web applications. Currently, I’m focused on
            building responsive front-end applications while learning andvanced
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              <Link href={"/resume"}>View Resume</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
