import React from "react";
import { FaGithub, FaShareSquare } from "react-icons/fa";
// import Footer from "../components/Footer";
// import CurrentTime from "../components/CurrentTime";
import { FaXTwitter, FaInstagram, FaGoogle } from "react-icons/fa6";

function Home() {
  return (
    <div className="bg-[#05020b] h-full">
      <div className="max-w-screen-md mx-auto px-5  font-montserrat">
        <div className=" flex flex-col gap-y-1 ">
          <div className="flex justify-between mt-6">
            <h1 className="text-xl  text-white">MikeBytes</h1>
            <a href="https://github.com/ChiebereMichael/">
              <FaGithub
                size={28}
                color="fff"
                className="hover:animate-bounce"
              />
            </a>
          </div>
          {/* about */}
          <div className="text-white mt-6">
            <p>
              Hello! I'm Chidiebere Michael, a frontend web and mobile developer
              with 2 years of experience. with passion for building sleek,
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
            <p className="mt-4">
              I'm currently working on a new project -{" "}
              <span className="text-blue-600">BrainStorm</span>
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-extrabold text-2xl font-serif text-white">
            Projects 
          </h2>
          <p className="text-base text-gray-400 ">
            Some of my personal projects i have worked on.
          </p>
        </div>
        {/* project titles */}
        <div className="mt-8">
          <h2 className="text-white text-xl mt-1">Text 2 Speech <span className="text-gray-300 text-sm">(web)</span></h2>
          <p className="text-base text-gray-400 pt-1">
            Converts the text input to an audio output
          </p>
          <div className="flex gap-x-4 mt-2">
            <a href="https://chieberemichael.github.io/mike.github.io/">
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
          <h2 className="text-white text-xl  mt-1">MovieFlix <span className="text-gray-300 text-sm">(web)</span></h2>
          <p className="text-base text-gray-400 pt-1">
            A movie showing website
          </p>
          <div className="mt-2 flex gap-x-4">
            <a href="https://movieflix-virid.vercel.app/">
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
          <h2 className="text-white text-xl  mt-1">MikePay <span className="text-gray-300 text-sm">(app)</span></h2>
          <p className="text-base text-gray-400 pt-1">
            A modern crypto portfolio and payment app that enables users to
            track real-time prices
          </p>
          <div className=" mt-2 ">
            <a href="https://github.com/ChiebereMichael/Mike-Pay">
              <FaGithub
                size={22}
                color="#fff"
                className="hover:animate-pulse"
              />
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-white text-xl  mt-1">BrainStorm <span className="text-gray-300 text-sm">(web)</span></h2>
          <p className="text-base text-gray-400 pt-1">
            Welcome to BrainStorm , Where Ideas Find Teams
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
          <h2 className="text-white text-xl  mt-1">Free Durk <span className="text-gray-300 text-sm">(web)</span></h2>
          <p className="text-base text-gray-400 pt-1">
            Built this why learning next js
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
        <div className="mt-6 mb-6">
          <h2 className="text-white text-xl mt-1">Netflix Clone <span className="text-gray-300 text-sm">(app)</span></h2>
          <p className="text-base text-gray-400 pt-1">
            Cloned NETFLIX for a school project defense , collaborated with
            classmates
          </p>
          <div className="mt-4">
            <a href="https://github.com/ChiebereMichael/Netflix-Clone">
              <FaGithub
                size={22}
                color="#fff"
                className="hover:animate-pulse"
              />
            </a>
          </div>
        </div>
        {/* footer */}
        <div className=" border-t  border-gray-400">
          <div>
          <p className="text-base pt-4 text-white">&copy;Michael 2023-2025, All Rights Reserved. </p>
          </div>
          <div className="flex space-x-4 pb-6 pt-4">
            <a
              href="https://x.com/ClassicMike17"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter
                size={24}
                color="#fff"
                className=" hover:animate-spin transition-transform duration-300 hover:scale-130"
              />
            </a>
            <a href="https://www.instagram.com/mike_bytes?igsh=Mjg3cjBpaXB5NW5o&utm_source=qr">
              <FaInstagram
                size={24}
                color="#fff"
                className="hover:text-red-600 hover:animate-bounce transition-transform duration-300 hover:scale-130"
              />
            </a>
            <a
              href="https://github.com/ChiebereMichael"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={24}
                color="#fff"
                className=" hover:animate-bounce transition-transform duration-300 hover:scale-130"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
