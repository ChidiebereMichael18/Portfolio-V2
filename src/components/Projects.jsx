import React from "react";
import { FaShare, FaShareAlt, FaShareSquare } from "react-icons/fa";
function Projects() {
  return (
    <div>
      <div className="md:mx-20 mx-4 mt-20 font-montserrat">
        <h2 className="text-white xl:text-left text-4xl sm:text-4xl md:text-6xl font-600">
          Projects<span className="animate-ping">👨‍🍳</span>
        </h2>
        <p className="pt-4 gradientText text-[18px] text-[#FFFFFF99]">
          some of my fun and real projects I've worked on...brinnnnng mooooore!
        </p>
      </div>
      <div className="md:mx-20 mx-4 mt-15 font-montserrat ">
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 font-montserrat grid-cols-1">
          <div className="px-12 py-12 w-full rounded-xl bg-[#061417] mb-4 hover:border-b-amber-100 active:border-b-amber-100  border hover:opacity-50 hover:shadow-2xl active:opacity-50 active:shadow-xl shadow-textGreen/50">
            <h1 className="text-white text-2xl text-center pb-4">
              Text2Speech
            </h1>
            <h3 className="text-white text-xl pt-4  text-center">
              HTML+CSS+JS
            </h3>
            <p className="text-[#FFFFFF99] text-xl text-center pt-4">
              Converts the text input to an audio output
            </p>
            <h3 className="text-white text-xl pt-4 pb-2">
              status:<span className="text-textGreen">completed</span>
            </h3>
            <a
              href="https://chieberemichael.github.io/mike.github.io/"
              target="_blank"
              className="text-red-600 align-center"
            >
              <FaShareSquare size={30}  className="text-white mt-4 hover:animate-pulse"/>
            </a>
          </div>
          <div className="px-12 py-12 w-full rounded-xl bg-[#061417] mb-4 hover:border-b-amber-100 active:border-b-amber-50  border hover:opacity-50 hover:shadow-2xl active:opacity-50 active:shadow-xl shadow-textGreen/50">
            <h1 className="text-white text-2xl text-center pb-4">MovieFlix</h1>
            <h3 className="text-white text-xl pt-4  text-center">
              React+ Tailwind + Bootstrap + API{" "}
            </h3>
            <p className="text-[#FFFFFF99] text-xl text-center pt-4">
              A movie showing website
            </p>
            <h3 className="text-white text-xl pt-4 pb-2">
              status:<span className="text-textGreen">completed</span>
            </h3>
            <a href="https://movieflix-virid.vercel.app/">
              <FaShareSquare size={30}  className="text-white mt-4 hover:animate-pulse"/>
            </a>
          </div>
          <div className="px-12 py-12 w-full rounded-xl bg-[#061417] mb-4 hover:border-b-amber-100 active:border-b-amber-50  border hover:opacity-50 hover:shadow-2xl active:opacity-50 active:shadow-xl shadow-textGreen/50">
            <h1 className="text-white text-2xl text-center pb-4">
              Netflix Clone
            </h1>
            <h3 className="text-white text-xl pt-4  text-center">
              ReactNative + API
            </h3>
            <p className="text-[#FFFFFF99] text-xl text-center pt-4">
              Cloned NETFLIX for a school project defense , collaborated with
              classmates
            </p>
            <h3 className="text-white text-xl pt-4 pb-2">
              status:<span className="text-textGreen">completed</span>
            </h3>
            <a
              href="https://github.com/ChiebereMichael/Netflix-Clone"
              target="_blank"><FaShareSquare size={30}  className="text-white mt-4 hover:animate-pulse"/></a>
          </div>
          <div className="px-12 py-12 w-full rounded-xl bg-[#061417] mb-4 hover:border-b-amber-100 active:border-b-amber-50  border hover:opacity-50 hover:shadow-2xl active:opacity-50 active:shadow-xl shadow-textGreen/50">
            <h1 className="text-white text-2xl text-center pb-4">MikePay</h1>
            <h3 className="text-white text-xl pt-4 text-center">
              ReactNative and API
            </h3>
            <p className="text-[#FFFFFF99] text-xl text-center pt-4">
              {" "}
              A modern crypto portfolio and payment app that enables users to
              track real-time prices
            </p>
            <h3 className="text-white text-xl pt-4 pb-2">
              status:<span className="text-amber-500">paused</span>
            </h3>
            <a
              href="https://github.com/ChiebereMichael/Mike-Pay"
              target="_blank"
            >
             <FaShareSquare size={30}  className="text-white mt-4 hover:animate-pulse"/>
            </a>
          </div>
          <div className="px-12 py-12 w-full rounded-xl bg-[#061417] mb-4 hover:border-b-amber-100 active:border-b-amber-50  border hover:opacity-50 hover:shadow-2xl active:opacity-50 active:shadow-xl shadow-textGreen/50">
            <h1 className="text-white text-2xl text-center pb-4">BrainStorm</h1>
            <h3 className="text-white text-xl pt-4 text-center">
              React + Tailwind + Firebase
            </h3>
            <p className="text-[#FFFFFF99] text-xl text-center pt-4">
              Welcome to BrainStorm , Where Ideas Find Teams
            </p>
            <h3 className="text-white text-xl pt-4 pb-2">
              status:<span className="text-blue-700">in progress</span>
            </h3>
            <a
              href="https://brainstorm-v1.vercel.app/"
              className="text-red-600 align-center"
            >
              <FaShareSquare size={30}  className="text-white mt-4 hover:animate-pulse"/>
            </a>
          </div>
          <div className="px-12 py-12 w-full rounded-xl bg-[#061417] mb-4 hover:border-b-amber-100 active:border-b-amber-50  border hover:opacity-50 hover:shadow-2xl active:opacity-50 active:shadow-xl shadow-textGreen/50">
            <h1 className="text-white md:text-2xl text-xl text-center pb-9">
              I can help you design, improve or build the product experience for
              your new or existing products. Feel free to get in touch with me.
            </h1>
            <h1 className="text-white text-2xl text-center ">
              Do You Have Any Ideas?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
