import React from "react";
import { FaXTwitter, FaInstagram, FaGoogle, FaGithub } from "react-icons/fa6";
import CurrentTime from "./CurrentTime";
// import { PiThreadsFill } from 'react-icons/pi';
function Footer() {
  return (
    <div>
      <div className="w-full  border-b-amber-50 border mt-10 "></div>
      <div className="flex flex-col justify-center md:flex-row md:justify-between xl:justify-between text-white mx-10 mt-10 pb-10">
        <div className="text-sm mb-3 font-montserrat text-center md:text-left xl:text-left">
          <p className="text-lg">&copy;Michael 2023-2025.</p>
          <p className="text-textGreen text-lg">Powered by MikeBytes Technologies</p>
          <CurrentTime/>
        </div>
        <div className="flex space-x-4  justify-center md:justify-end xl:justify-end">
          <a href="https://x.com/ClassicMike17" target="_blank" rel="noreferrer">
            <FaXTwitter size={24} className="hover:text-textGreen hover:animate-spin transition-transform duration-300 hover:scale-130" />
          </a>
          <a href="https://www.instagram.com/mike_bytes?igsh=Mjg3cjBpaXB5NW5o&utm_source=qr">
            <FaInstagram size={24} className="hover:text-red-600 hover:animate-bounce transition-transform duration-300 hover:scale-130" />
          </a>
          <a href="https://github.com/ChiebereMichael" target="_blank" rel="noreferrer">
            <FaGithub size={24} className="hover:text-textGreen hover:animate-bounce transition-transform duration-300 hover:scale-130" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
