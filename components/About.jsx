import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen px-3 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#00df9a]">
            About
          </p>
          <h2 className="py-4 text-white">Who I Am</h2>
          <p className="py-2 text-[#00df9a]">
            I am react/react-native developer
          </p>
          <p className="py-2 text-white">
            I have spent the last 2 years in the app development, working as a
            professional react & react-native developer. In 2019 I started
            working with HTML , CSS and wordPress to make some small demo
            websites that I was working. What I thought was just a few small
            effort turned into a love for web and mobile application
            development.
            {/* I have always had a
            knack for technology and working with computers. */}
          </p>
          <p className="py-2 text-white">
            Fascinated with how intricate programming can be, I was quickly
            drawn to learn more.Then i started learning javascript, python,
            react & react-native and was even more enthused with making mobile
            apps and websites interactive. I then started working for different
            companies on the react/react-native platform. Now i am spending my
            time building projects in React with Tailwind and learning new
            technologies.
          </p>
          <a href="/#projects">
            <p className="py-2 text-[#00df9a] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-[#00df9a] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
