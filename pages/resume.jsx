import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import resumeImg from "../public/assets/CV.jpg";
import Image from "next/image";

const resume = () => {
  return (
    <>
      <Head>
        <title>Mujahid | Resume</title>
        <meta name="description" content="Front-End Developer" />
        <link rel="icon" href="/fav.jpg" />
      </Head>

      <div className="shadow-2xl shadow-[#00df9a] rounded-xl bg-black mx-auto xs:w-[343px] md:w-[900px] pt-[120px]">
        <h2 className="text-center text-[#00df9a]">Resume</h2>
        <div className="bg-[#00df9a] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-white">Mujahid Ali</h2>
          {/* <div className="flex text-white">
            <a
              // href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target="_blank"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              //  href='https://github.com/fireclint'
              target="_blank"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div> */}
        </div>

        <div className="text-center text-[#00df9a] py-4 text-xl font-bold uppercase tracking-wider">
          <p>
            App Development <span className="px-1">|</span> Web Development{" "}
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <p className="text-white px-2">
          I am a react/react-native developer with 2 years of experience
          specializing in Web and Mobile app development, And throughout those
          years i had the oppotunity to work mainly with React and React-native
          with amazing companies. I am a Professional computer programmer with
          the knowledge of different programming languages like, HTML, CSS,
          JAVASCRIPT, React, React-native, Tailwind CSS and Nextjs.
          {/* A graduated with a degree in Information Technology with Computer
          Skills in Web and App (Front-End) Development.Having experience more
          than 1 year Web and Mobile App development using advanced tools. */}
          {/* Looking to contribute my skills to the development team at any
          Software Company. 
          As a creative person, I truly enjoy working in a team. I am friendly,
          direct and good at motivating people.*/}
        </p>
        <p className="text-white px-2 pt-2">
          Looking to contribute my skills to the development team that suit my
          skills & and ability to grow further. I am a quick leaner and ready to
          take new challenges required to performe better.
        </p>
        {/* skills */}
        <div className="text-center py-4">
          <h5 className="text-center text-[#00df9a] underline text-[18px] py-2">
            Skills
          </h5>
          <p className="py-2 text-white">
            <span className="font-bold text-[#00df9a]">Technical Skills</span>
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span> CSS <span className="px-2">|</span>
            JavaScript <span className="px-2">|</span>Nextjs
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
          </p>

          <p className="py-2 text-white">
            <span className="font-bold text-[#00df9a]">
              Front-End Development
            </span>
            <span className="px-2">|</span>React
            <span className="px-2">|</span>React-Native
          </p>
        </div>

        {/* education */}
        <div className="text-center py-4">
          <h5 className="text-center text-[#00df9a] underline text-[18px] py-2">
            Education Attainment
          </h5>
          <p className="py-2 text-white">
            <span className="font-bold text-[#00df9a]">
              University of punjab
            </span>
            <span className="px-2">|</span>Bachelor in Information Technology
            <span className="px-2">|</span> 2018 - 2020
          </p>

          <p className="py-2 text-white">
            <span className="font-bold text-[#00df9a]">
              Degree College, Walton Lahore
            </span>
            <span className="px-2">|</span>intermediate in ICS
            <span className="px-2">|</span>2016 - 2018
          </p>

          <p className=" ml-14 py-2 text-white">
            <span className="font-bold text-[#00df9a]">
              High School, Model Town Lahore
            </span>
            <span className="px-2">|</span>Metric in Science
            <span className="px-2">|</span>2014 - 2016
          </p>
        </div>
        {/* Experience */}
        <div className="py-4 px-2 text-white">
          <h5 className="text-center text-[#00df9a] underline text-[18px] py-4">
            Professional Experience
          </h5>
          <p className="italic">
            <span className="font-bold text-[#00df9a]">Remotely Working</span>
            <span className="px-2">|</span>Lahore,Punjab pakistan
          </p>
          <p className="py-1 italic text-[#00df9a]">Freelancing (Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Working as a react developer with Tailwind css</li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4 px-2 text-white">
          <p className="italic">
            <span className="font-bold text-[#00df9a]">
              PIKES SOFT ( ideas to reality )
            </span>
            <span className="px-2">|</span>Joher Town, Lahore Pakistan
          </p>
          <a href="https://www.pikessoft.com/">
            <p className="py-2 text-[#00df9a] underline cursor-pointer">
              Visit company site for more info...
            </p>
          </a>
          <p className="py-1 italic text-[#00df9a]">
            React Native Developer (6 months )
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              The software solutions developed by this company are numerously
              recognized for usability and innovative features.
            </li>
            <li>Made using by redux-tookit and readux-saga</li>
            <li>
              This app named as Keyki was built using React Native and is hosted
              on specific sever
            </li>
            <li>
              Users are able to search Products based on the names, rating, or
              catagory to retrieve a list of active Products currently for sale.
            </li>
            <li>
              User authentication is available so you can signup & signin to
              your account with an Google, Facebook account in order to save
              your favorite products.
            </li>
          </ul>
          <a href="/#projects">
            <p className="py-2 text-[#00df9a] underline cursor-pointer">
              Click here for more project info...
            </p>
          </a>
        </div>
        {/* Experience */}
        <div className="py-4 px-2 text-white">
          <p className="italic">
            <span className="font-bold text-[#00df9a]">ASSENCO</span>
            <span className="px-2">|</span>Fayha Jeddah, Saudi Arabia
          </p>
          <a href="http://www.assnco-me.com//">
            <p className="py-2 text-[#00df9a] underline cursor-pointer">
              Visit company site for more info...
            </p>
          </a>
          <p className="py-1 italic text-[#00df9a]">
            React Native Developer (6 months )
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Made using by Custome Hooks and useContext with Firebase DB
              integration
            </li>
            <li>
              This app named as REfill was built using React Native and is
              hosted on specific sever
            </li>
            <li>
              Our service's reputation, evidenced by a list of successes &
              repeat clients is based upon high-quality construction,
              fabrication, IT Support in the shortest possible time, at very
              competitive prices.
            </li>
          </ul>
          <a href="/#projects">
            <p className="py-2 text-[#00df9a] underline cursor-pointer">
              Click here for more project info...
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default resume;
