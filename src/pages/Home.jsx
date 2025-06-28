import React from "react";
import { FaEnvelope, FaGithub, FaMailBulk, FaShareSquare } from "react-icons/fa";
// import Footer from "../components/Footer";
// import CurrentTime from "../components/CurrentTime";
import { FaXTwitter, FaInstagram, FaGoogle } from "react-icons/fa6";

function Home() {
  return (
    <div className="bg-[#05020b] h-full">
      <div className="max-w-screen-md mx-auto px-5  font-montserrat">
        <div className=" flex flex-col gap-y-1 ">
          <div className="flex justify-between mt-6 items-center">
            <h1 className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">MikeBytes</h1>
            <a href="https://github.com/ChidiebereMichael18/" className="transition-transform hover:scale-110">
              <FaGithub size={28} color="fff" />
            </a>
          </div>
          {/* about */}
          <div className="text-white mt-6">
            <p>
              Hello! I'm Chidiebere Michael, a frontend web and mobile developer
              with over 2 years of experience. with passion for building sleek,
              efficient, and user-friendly applications.
            </p>
            <p className="my-2">
              Highly skilled at progressive enhancement, design systems & UI
              Engineering - performance and scalability are top objectives on my
              radar.
            </p>
            <p>
              You'll mostly find me working within the Typescript/JavaScript
              ecosystem, but I'm also interested in other languages like python.
            </p>
            <p className="my-2">
              I love turning ideas into real, working projects, and I’m always
              up for a challenge—whether its a tricky bug, or
              something unexpected. If you'd like to talk, don't hesitate to
              reach out. Let’s build something amazing together! 🚀
            </p>
            <p className="mt-4">
              I'm currently working on a new project -{" "}
              <span className="text-blue-600">BrainStorm</span>
            </p>
          </div>
        </div>

        {/* Companies Section */}
        <div className="mt-8">
          <h2 className="font-extrabold text-2xl font-serif text-white">
            Companies I've Worked With
          </h2>
          <p className="text-base text-gray-400 mb-6">
            Organizations where I've contributed and grown professionally.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="text-white text-lg font-semibold">Devsentinel Innovations</h3>
              <p className="text-gray-400">Lead Frontend Developer • 2025 - Present</p>
              <p className="text-gray-500 mt-2">
                Building responsive web applications and implementing modern UI/UX designs.
              </p>
            </div>
            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="text-white text-lg font-semibold">Threndin (intern)</h3>
              <p className="text-gray-400">React Native Developer • 2024 - 2025</p>
              <p className="text-gray-500 mt-2">
                Developed cross-platform mobile applications using React Native.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-extrabold text-2xl font-serif text-white">
            Personal Projects
          </h2>
          <p className="text-base text-gray-400 mb-8">
            A collection of side projects I've built to explore new technologies and solve real-world problems.
          </p>
        </div>
        {/* project titles */}
        <div className="mt-8">
          <h2 className="text-white text-xl mt-1">
            Text 2 Speech <span className="text-gray-300 text-sm">(web)</span>
          </h2>
          <p className="text-base text-gray-400 pt-1">
            A text-to-speech converter application with support for multiple languages and voice options.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            HTML • CSS • JavaScript
          </p>
          <div className="flex gap-x-4 mt-2">
            <a href="https://chidieberemichael.github.io/mike.github.io/">
              <FaShareSquare
                size={22}
                className="text-white  hover:animate-pulse"
              />
            </a>
            <a href="">
              <FaGithub
                size={22}
                color="#fff"
                className="hover:animate-pulse"
              />
            </a>
          </div>
        </div>

            <div className="mt-8">
          <h2 className="text-white text-xl mt-1">
            FlameGame<span className="text-gray-300 text-sm">(web)</span>
          </h2>
          <p className="text-base text-gray-400 pt-1">
            Computerized version of kid's matchmaking game made with HTML,CSS and Javascript
          </p>
          <p className="text-sm text-gray-500 mt-1">
            HTML • CSS • JavaScript
          </p>
          <div className="flex gap-x-4 mt-2">
            <a href="https://flames-six-ruby.vercel.app/">
              <FaShareSquare
                size={22}
                className="text-white  hover:animate-pulse"
              />
            </a>
            <a href="https://github.com/ChidiebereMichael18/Flames">
              <FaGithub
                size={22}
                color="#fff"
                className="hover:animate-pulse"
              />
            </a>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-white text-xl  mt-1">
            MovieFlix <span className="text-gray-300 text-sm">(web)</span>
          </h2>
          <p className="text-base text-gray-400 pt-1">
            A modern streaming platform interface with real-time movie data, search functionality, and responsive design.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            React.js • TMDB API • Tailwind CSS • Context API
          </p>
          <div className="mt-2 flex gap-x-4">
            <a href="https://movieflix-joel.vercel.app/">
              <FaShareSquare
                size={22}
                className="text-white  hover:animate-pulse"
              />
            </a>
            <a href="">
              <FaGithub
                size={22}
                color="#fff"
                className="hover:animate-pulse"
              />
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-white text-xl  mt-1">
            MikePay <span className="text-gray-300 text-sm">(app)</span>
          </h2>
          <p className="text-base text-gray-400 pt-1">
            A sophisticated cryptocurrency portfolio tracker with real-time price updates and secure payment integration.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            React Native • Crypto API • Redux
          </p>
          <div className=" mt-2 ">
            <a href="https://github.com/ChidiebereMichael18/Mike-Pay">
              <FaGithub
                size={22}
                color="#fff"
                className="hover:animate-pulse"
              />
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-white text-xl  mt-1">
            BrainStorm <span className="text-gray-300 text-sm">(web)</span>
          </h2>
          <p className="text-base text-gray-400 pt-1">
            An innovative platform connecting creative minds with professional teams, featuring real-time collaboration tools.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            React.js • Tailwind CSS • (In Development)
          </p>
          <div className="flex gap-x-4 mt-2">
            <a href="https://brainstorm-v1.vercel.app/">
              <FaShareSquare
                size={22}
                className="text-white  hover:animate-pulse"
              />
            </a>
            <a href="">
              <FaGithub
                size={22}
                color="#fff"
                className="hover:animate-pulse"
              />
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-white text-xl  mt-1">
            Free Durk <span className="text-gray-300 text-sm">(web)</span>
          </h2>
          <p className="text-base text-gray-400 pt-1">
            A Next.js-powered music artist showcase website.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Next.js • Tailwind CSS
          </p>
          <div className="flex gap-x-4 mt-2">
            <a href="https://lil-durk-gilt.vercel.app/">
              <FaShareSquare
                size={22}
                className="text-white  hover:animate-pulse"
              />
            </a>
            <a href="">
              <FaGithub
                size={22}
                color="#fff"
                className="hover:animate-pulse"
              />
            </a>
          </div>
        </div>
        <div className="mt-6 mb-6">
          <h2 className="text-white text-xl mt-1">
            Netflix Clone <span className="text-gray-300 text-sm">(app)</span>
          </h2>
          <p className="text-base text-gray-400 pt-1">
            A full-featured streaming service clone with user authentication, content recommendation, and responsive design.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            React Native • Redux
          </p>
          <div className="mt-4">
            <a href="https://github.com/ChidiebereMichael18/Netflix-Clone">
              <FaGithub
                size={22}
                color="#fff"
                className="hover:animate-pulse"
              />
            </a>
          </div>
        </div>
        
        {/* View More Projects Link */}
        <div className="mt-12 mb-8 text-center">
          <a 
            href="https://github.com/ChidiebereMichael18?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <span className="text-lg">View More Projects</span>
            <FaGithub size={24} />
          </a>
        </div>

        {/* Freelance Section */}
        <div className="mt-12 mb-12 border border-gray-800 rounded-lg p-6 bg-opacity-30 bg-gray-900">
          <h2 className="font-extrabold text-2xl font-serif text-white mb-3">
            Available for Freelance
          </h2>
          <p className="text-gray-400 mb-4">
            I'm currently accepting new projects and freelance opportunities. If you have a project that needs expert frontend development, let's discuss how I can help bring your vision to life.
          </p>
          <a 
            href="mailto:mikeyxofficial1234@gmail.com"
            className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
          >
            <FaEnvelope size={18} />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* footer */}
        <div className=" border-t  border-gray-400">
          <div className="flex space-x-6 pb-8 pt-6">
            <a
              href="https://x.com/IFearAids"
              target="_blank"
              rel="noreferrer"
              className="group transition-all duration-300 ease-in-out"
            >
              <FaXTwitter
                size={24}
                className="text-white group-hover:text-blue-400 transition-all"
              />
            </a>
            <a
              href="https://www.instagram.com/mike_bytes"
              target="_blank"
              rel="noreferrer"
              className="group transition-all duration-300 ease-in-out"
            >
              <FaInstagram
                size={24}
                className="text-white group-hover:text-pink-500 transition-all"
              />
            </a>
            <a
              href="mailto:mikeyxofficial1234@gmail.com"
              className="group transition-all duration-300 ease-in-out"
            >
              <FaEnvelope
                size={24}
                className="text-white group-hover:text-red-500 transition-all"
              />
            </a>
            <a
              href="https://github.com/ChiebereMichael"
              target="_blank"
              rel="noreferrer"
              className="group transition-all duration-300 ease-in-out"
            >
              <FaGithub
                size={24}
                className="text-white group-hover:text-gray-400 transition-all"
              />
            </a>
          </div>
          <div className="text-sm text-gray-400 pb-4">
            Built with React & Tailwind CSS
          </div>
          <div>
            <p className="text-base py-4 text-white">
              &copy;Michael 2025, All Rights Reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
