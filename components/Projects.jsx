import React from "react";
import { motion } from "framer-motion";
import keykiImg from "../public/assets/projects/keyki2.png";
import refillImg from "../public/assets/projects/refill.png";
import placeholderImg from "../public/assets/projects/placeholder.png";
import normandyImg from "../public/assets/projects/normandy.png";
import dmkAdvisorImg from "../public/assets/projects/dmk.png";
import fifaGuessImg from "../public/assets/projects/fifa.png";
import almanaImg from "../public/assets/projects/almana.png";
import blockleteGamesCmsImg from "../public/assets/projects/blocklete-cms.png";
import blockleteGamesWebsiteImg from "../public/assets/projects/blocklete-web.png";
import positiveFocusImg from "../public/assets/projects/positiveFocus.png";
import logoAppImg from "../public/assets/projects/logo.png";
import adactusLiliCmsImg from "../public/assets/projects/lili-cms.png";
import adactusLiliWebsiteImg from "../public/assets/projects/lili-website.png";
import munasebWebsiteImg from "../public/assets/projects/munaseb-website.png";
import munasebCmsImg from "../public/assets/projects/munaseb-cms.png";
import ludunImg from "../public/assets/projects/ludun.png";
import echoImg from "../public/assets/projects/echo.png";
import eliteImg from "../public/assets/projects/elite.png";
import ushersImg from "../public/assets/projects/ushers.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Video Platform (Keyki)",
      description:
        "An e-commerce app similar to Daraz, video-based, contributed to code review and team leadership. Focused on React-hooks, Redux, Redux Toolkit, Redux-saga, and video player integration.",
      backgroundImg: keykiImg,
      projectUrl: "/projects/keyki",
      technologies: [
        "React Native",
        "React Hooks",
        "Custom Hooks",
        "Redux",
        "Redux Toolkit",
        "Redux-saga",
        "Video Player Integration",
      ],
    },
    {
      title: "Medical E-commerce App (Refill)",
      description:
        "A private medicine distribution/buying app for medical supplies and healthcare products. Developed using React Hooks, Custom Hooks, Firebase, and Google Maps APIs. Enhanced UI/UX and collaborated on bug fixes and code reviews.",
      backgroundImg: refillImg,
      projectUrl: "/projects/refill",
      technologies: [
        "React Native",
        "React Hooks",
        "Custom Hooks",
        "Firebase",
        "Google Maps APIs",
      ],
    },
    {
      title: "Normandy (CMS)",
      description:
        "An insurance platform with admin and user-side apps. Built a React-based admin panel (CMS) with Ant Design, streamlining data management. Improved website UI, ensured maintainability, and integrated REST APIs.",
      backgroundImg: normandyImg,
      projectUrl: "/projects/normandy",
      technologies: ["React", "Ant Design", "REST APIs", "CMS"],
    },
    {
      title: "FIFA Winner Guess (Web Application)",
      description:
        "Collaborated on a web application for FIFA match predictions, focusing on responsive design and a countdown timer. Enhanced UI/UX and participated in bug fixes and code reviews. Integrated REST APIs.",
      backgroundImg: fifaGuessImg,
      projectUrl: "/projects/fifa-guess",
      technologies: [
        "React",
        "Responsive Design",
        "Countdown Timer",
        "REST APIs",
        "Bug Fixing",
        "Code Reviews",
      ],
    },
    {
      title: "DMK-Advisor Group, Inc. (CMS)",
      description:
        "Developed a React-based admin panel (CMS) with useSWR, useDebounce, and Ant Design for efficient data management. Designed and implemented client/server-side pagination and search functionalities. Achieved data migration and integrated REST APIs.",
      backgroundImg: dmkAdvisorImg,
      projectUrl: "/projects/dmk-advisor",
      technologies: [
        "React",
        "Ant Design",
        "useSWR",
        "useDebounce",
        "REST APIs",
        "Pagination",
        "Search Functionality",
        "Data Migration",
        "CMS",
      ],
    },
    {
      title: "Almana (Desktop + Mobile App)",
      description:
        "A medical app for a hospital in Saudi Arabia. Included both Admin panel in ReactJS and Mobile app in React Native. Contributed to code review. Worked with React Hooks, Custom Hooks, ReactJS, and React-Native CLI setup. Integrated remote and local notifications and participated in bug fixes and code reviews.",
      backgroundImg: almanaImg,
      projectUrl: "/projects/almana",
      technologies: [
        "ReactJS",
        "React Native CLI",
        "React Hooks",
        "Custom Hooks",
        "Remote Notifications",
        "Local Notifications",
        "Bug Fixing",
        "Code Reviews",
      ],
    },
    {
      title: "Positive Focus (Mobile App)",
      description:
        "A quotes app with Firebase-backed backend. Contributed to code review and team leadership. Worked with React Hooks, Custom Hooks, Firebase, and React-Native CLI setup. Integrated remote and local notifications and participated in bug fixes and code reviews.",
      backgroundImg: positiveFocusImg,
      projectUrl: "/projects/positive-focus",
      technologies: [
        "React Native CLI",
        "React Hooks",
        "Custom Hooks",
        "Firebase",
        "Remote Notifications",
        "Local Notifications",
        "Bug Fixing",
        "Code Reviews",
      ],
    },
    {
      title: "LoGo (Mobile App)",
      description:
        "A React Native app like Ubar, implementing sockets, REST APIs, one-to-one chat, and real-time location tracking. Contributed to code review, team leadership, and Firebase-backed backend. Worked with React Hooks, Custom Hooks, Firebase, Google Maps APIs, and Expo CLI setup.",
      backgroundImg: logoAppImg,
      projectUrl: "/projects/logo-app",
      technologies: [
        "React Native Expo",
        "React Hooks",
        "Custom Hooks",
        "Firebase",
        "Google Maps APIs",
        "Sockets",
        "REST APIs",
        "Chat",
        "Location Tracking",
      ],
    },
    {
      title: "Blocklete Games (CMS)",
      description:
        "Built an admin panel (CMS) from scratch with React, JavaScript, and Ant Design for internal team data management. Fixed website UI issues and wrote maintainable code.",
      backgroundImg: blockleteGamesCmsImg,
      projectUrl: "/projects/blocklete-games-cms",
      technologies: [
        "React",
        "JavaScript",
        "Ant Design",
        "CMS",
        "Maintainable Code",
      ],
    },
    {
      title: "Blocklete Games (Website)",
      description:
        "Contributed to a website with Next.js, TypeScript, and Storybook. Fixed website UI issues and wrote maintainable code. Fixed bugs, added features and pages, contributed to code reviews, and defined code conventions. Integrated REST APIs.",
      backgroundImg: blockleteGamesWebsiteImg,
      projectUrl: "/projects/blocklete-games-website",
      technologies: [
        "Next.js",
        "TypeScript",
        "Storybook",
        "REST APIs",
        "Code Reviews",
        "Code Conventions",
      ],
    },
    {
      title: "Adactus-Lili (LikeItLoveIt) (CMS)",
      description:
        "A platform to book tickets online for a specific music event. Contributed to an admin panel (CMS) with Next.js, TypeScript, React Hook form, Yup as Schema validations, and i18n for language translation. Integrated CRUD operations and handled form validations.",
      backgroundImg: adactusLiliCmsImg,
      projectUrl: "/projects/adactus-lili-cms",
      technologies: [
        "Next.js",
        "TypeScript",
        "React Hook Form",
        "Yup",
        "i18n",
        "CRUD Operations",
        "Form Validations",
        "CMS",
      ],
    },
    {
      title: "Adactus-Lili (LikeItLoveIt) (Website)",
      description:
        "A platform to book tickets online for a specific music event. Contributed to a website with Next.js, TypeScript, and i18n for language translation. Wrote maintainable code, fixed bugs, added features and pages, contributed to code reviews, and defined code conventions. Integrated REST APIs.",
      backgroundImg: adactusLiliWebsiteImg,
      projectUrl: "/projects/adactus-lili-website",
      technologies: [
        "Next.js",
        "TypeScript",
        "i18n",
        "REST APIs",
        "Code Reviews",
        "Code Conventions",
      ],
    },
    {
      title: "Munaseb (CMS)",
      description:
        "The main app for Saudi people to buy, sell, and search for property online. Contributed to an admin panel (CMS) with Next.js, TypeScript, and i18n for language translation. Integrated CRUD operations and handled form validations.",
      backgroundImg: munasebCmsImg,
      projectUrl: "/projects/munaseb-cms",
      technologies: [
        "Next.js",
        "TypeScript",
        "i18n",
        "CRUD Operations",
        "Form Validations",
        "CMS",
      ],
    },
    {
      title: "Munaseb (Website)",
      description:
        "The main app for Saudi people to buy, sell, and search for property online. Developed a website with Next.js, TypeScript, Shadcn UI, React Hook form, Zod as Schema validations, Context API, and i18n. Wrote maintainable code, fixed bugs, added features and pages, contributed to code reviews, and defined code conventions. Integrated REST APIs.",
      backgroundImg: munasebWebsiteImg,
      projectUrl: "/projects/munaseb-website",
      technologies: [
        "Next.js",
        "TypeScript",
        "Shadcn UI",
        "React Hook Form",
        "Zod",
        "Context API",
        "i18n",
        "REST APIs",
        "Code Reviews",
        "Code Conventions",
      ],
    },
    {
      title: "LUDUN (Website)",
      description:
        "An e-commerce platform for Saudi people. Contributed to fixing UI and functionality bugs. A website with Next.js, TypeScript, MUI, Tailwind CSS, Redux, and i18n for language translation. Wrote maintainable code and components.",
      backgroundImg: ludunImg,
      projectUrl: "/projects/ludun",
      technologies: [
        "Next.js",
        "TypeScript",
        "MUI",
        "Tailwind CSS",
        "Redux",
        "i18n",
        "Maintainable Code",
      ],
    },
    {
      title: "ECHO (Website/Online Learning Platform)",
      description:
        "A platform for online learning about politics. Developed from scratch using Next.js, TypeScript, Shadcn UI, React Hook Form, Zod for schema validations, and i18n. Implemented React DnD for sorting functionality. Key features include video, audio, image/drawing lessons, and podcast lessons. Wrote maintainable code and integrated REST APIs.",
      backgroundImg: echoImg,
      projectUrl: "/projects/echo",
      technologies: [
        "Next.js",
        "TypeScript",
        "Shadcn UI",
        "React Hook Form",
        "Zod",
        "i18n",
        "React DnD",
        "Video Lessons",
        "Audio Lessons",
        "Image/Drawing Lessons",
        "Podcast Lessons",
        "REST APIs",
        "Maintainable Code",
      ],
    },
    {
      title: "Elite (Mobile App)",
      description:
        "A React Native app like Ubar, implementing REST APIs and real-time location tracking. Contributed to code review, team leadership. Worked with React Hooks, Custom Hooks, Google Maps APIs, and the React Native CLI setup. Wrote maintainable code and integrated REST APIs. I have integrate the notifications system and fixed the bugs.",
      backgroundImg: eliteImg,
      projectUrl: "/projects/elite",
      technologies: [
        "React Native CLI",
        "React Hooks",
        "Custom Hooks",
        "Google Maps APIs",
        "REST APIs",
        "Notifications",
        "Bug Fixes",
        "Code Reviews",
      ],
    },
    {
      title: "Ushers (CMS)",
      description:
        "A platform that includes both admin and user-side applications. I contributed to building a React-based admin panel (CMS) using Ant Design. This CMS was designed to streamline data management and saving time. I was involved in improving the website UI, ensuring maintainability of the codebase, and integrating REST APIs for data communication. This project allowed me to work on both the administrative and user interfaces of a complex application.",
      backgroundImg: ushersImg,
      projectUrl: "/projects/ushers",
      technologies: [
        "React",
        "Ant Design",
        "REST APIs",
        "CMS",
        "Bug Fixes",
      ],
    },
  ];

  return (
    <div
      id="projects"
      className="w-full min-h-screen px-3 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl tracking-widest uppercase text-[#00df9a] font-semibold">
            Projects
          </p>
          <h2 className="py-4 text-4xl font-bold text-white">
            What I've Built
          </h2>
          <p className="py-4 text-gray-300 text-lg max-w-[700px]">
            Here are some of my recent projects that showcase my expertise in
            building responsive and performant web and mobile applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 py-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectItem
                title={project.title}
                description={project.description}
                backgroundImg={project.backgroundImg}
                projectUrl={project.projectUrl}
                technologies={project.technologies}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
