import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="bg-black w-full lg:h-screen py-2 px-3">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#00df9a]">
          Skills
        </p>
        <h2 className="py-4 text-white">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: "/assets/skills/html.png",
              title: "HTML",
            },
            {
              img: "/assets/skills/css.png",
              title: "CSS",
            },
            {
              img: "/assets/skills/javascript.png",
              title: "JavaScript",
            },
            {
              img: "/assets/skills/react.png",
              title: "React",
            },
            {
              img: "/assets/skills/tailwind.png",
              title: "Tailwind",
            },
            {
              img: "/assets/skills/firebase.png",
              title: "Firebase",
            },
            {
              img: "/assets/skills/nextjs.png",
              title: "Nextjs",
            },
            {
              img: "/assets/skills/react.png",
              title: "React-Native",
            },
            {
              img: "/assets/skills/github1.png",
              title: "Github",
            },
            {
              img: "/assets/skills/antdesign.png",
              title: "AntDesign",
            },
          ].map(({ img, title }) => (
            <div
              key={title}
              className="m-2 p-6 shadow-lg shadow-[#00df9a] bg-black rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    style={{
                      background:
                        title === "Nextjs" || title === "Github" ? "white" : "",
                      borderRadius:
                        title === "Nextjs" || title === "Github" ? 100 : 0,
                    }}
                    src={img}
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex text-white flex-col items-center justify-center">
                  <h3>{title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
