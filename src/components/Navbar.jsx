import React from "react";
import { FaGithub } from "react-icons/fa";
// import { Link, NavLink } from "react-router-dom";
// import FaGithub from "react-icons/fa"

function Navbar() {
  return (
    <div>
      <header className="fixed z-50 top-0 bg-[#061417] w-full px-4 md:px-15 ">
        <nav className="flex items-center justify-between py-4 font-lato">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-white">
              MikeBytes🔥
            </h2>
          </div>
          <div className="flex space-x-1 ">
            <a href="https://github.com/ChiebereMichael" target="_blank">
              <FaGithub size={26} className="text-white mt-0.5 animate-bounce transition-transform duration-300 hover:scale-130"/>
            </a>
            <h2 className="text-base md:text-xl  text-white ">Github</h2>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
