import React from "react";
import { FaGithub,FaShareSquare  } from "react-icons/fa";
// import Footer from "../components/Footer";
// import CurrentTime from "../components/CurrentTime";

function Home() {
  return (
    <div className="bg-[#05020b] h-full">
      <div className="max-w-screen-md mx-auto px-5  font-montserrat">
        <div className=" flex flex-col gap-y-1 ">
          <div className="flex justify-between mt-8">
            <h1 className="text-xl  text-white">MikeBytes</h1>
            <FaGithub size={28} color="fff" className="hover:animate-bounce" />
          </div>
          {/* about */}
          <div className="text-white mt-6">
            <p>
              Hello! I'm Chidiebere Michael, a frontend web and mobile
              developer with 2 years of experience. with passion for building
              sleek, efficient, and user-friendly applications.
            </p>
            <p className="my-2">
              Highly skilled at progressive enhancement, design systems & UI
              Engineering - performance and scalability are top objectives on my
              radar.
            </p>
            <p>
              You'll mostly find me working within the Typescript/JavaScript
              ecosystem, but I'm also interested in other languages python.
            </p>
            <p className="mt-4">
              I'm currently working on a new project -{" "}
              <span className="text-blue-600">BrainStorm</span>
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-extrabold text-2xl font-serif text-white">Projects</h2>
        </div>
        {/* project titles */}
        <div className="mt-8">
          <h2 className="text-white text-xl mt-1">Text 2 Speech</h2>
          <p className="text-base text-gray-400 pt-1">
            Converts the text input to an audio output
          </p>
          <div className="flex gap-x-4 mt-2">
            <a href="https://chieberemichael.github.io/mike.github.io/">
              <FaShareSquare size={20} className="text-white  hover:animate-pulse"/>
            </a>
            <a href="">
              <FaGithub size={20} color="#fff" className="hover:animate-pulse"/>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-white text-xl  mt-1">MovieFlix</h2>
          <p className="text-base text-gray-400 pt-1">
            A movie showing website
          </p>
          <div className="mt-2 flex gap-x-4">
          <a href="https://movieflix-virid.vercel.app/">
            <FaShareSquare size={20} className="text-white  hover:animate-pulse"/>
          </a>
          <a href="">
            <FaGithub size={20} color="#fff" className="hover:animate-pulse"/>
          </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-white text-xl  mt-1">MikePay</h2>
          <p className="text-base text-gray-400 pt-1">
            A modern crypto portfolio and payment app that enables users to
            track real-time prices
          </p>
          <div className=" mt-2 ">
          <a href="https://github.com/ChiebereMichael/Mike-Pay">
            <FaGithub size={20} color="#fff" className="hover:animate-pulse"/>
          </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-white text-xl  mt-1">BrainStorm</h2>
          <p className="text-base text-gray-400 pt-1">
          Welcome to BrainStorm , Where Ideas Find Teams
          </p>
          <div className="flex gap-x-4 mt-2">
            <a href="https://brainstorm-v1.vercel.app/">
              <FaShareSquare size={20} className="text-white  hover:animate-pulse"/>
            </a>
            <a href="">
              <FaGithub size={20} color="#fff" className="hover:animate-pulse"/>
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-white text-xl mt-1">Netflix Clone</h2>
          <p className="text-base text-gray-400 pt-1">
          Cloned NETFLIX for a school project defense , collaborated with classmates
          </p>
          <div className="mt-4">
          <a href="https://github.com/ChiebereMichael/Netflix-Clone">
            <FaGithub size={20} color="#fff" className="hover:animate-pulse"/>
          </a>    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
