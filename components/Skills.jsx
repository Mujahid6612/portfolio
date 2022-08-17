import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="bg-black w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#00df9a]">
          Skills
        </p>
        <h2 className="py-4 text-white">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: "/../public/assets/skills/html.png",
              title: "HTML",
            },
            {
              img: "/../public/assets/skills/css.png",
              title: "CSS",
            },
            {
              img: "/../public/assets/skills/javascript.png",
              title: "JavaScript",
            },
            {
              img: "/../public/assets/skills/react.png",
              title: "React",
            },
            {
              img: "/../public/assets/skills/tailwind.png",
              title: "Tailwind",
            },
            {
              img: "/../public/assets/skills/firebase.png",
              title: "Firebase",
            },
            {
              img: "/../public/assets/skills/html.png",
              title: "Nextjs",
            },
            {
              img: "/../public/assets/skills/react.png",
              title: "React-Native",
            },
          ].map(({ img, title }) => (
            <div
              key={title}
              className="m-2 p-6 shadow-lg shadow-[#00df9a] bg-black rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={img} width="64px" height="64px" alt="/" />
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
