import React from "react";
import { assets } from "../assets/assets";
import { FaInstagram, FaTiktok,  FaTwitter,  FaWhatsapp } from "react-icons/fa";
// import { PiThreadsFill } from 'react-icons/pi';

function About() {
  return (
    <div className="md:mx-20 mx-10 mt-10 font-lato">
      <div className="flex md:flex-col xl:flex-row flex-col justify-between">
          <div className="text-white mt-10 ">
            <div>
              <h1 className="text-white xl:text-left text-4xl mt-10 sm:text-4xl md:text-7xl font-700">
                Creative Frontend <br />
                Developer.
              </h1>
              <p className="pt-10 gradientText text-[20px] text-[#FFFFFF99]">
                I like to craft solid and scalable frontend products with great user
                experiences.
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-x-8 space-y-8 text-white mt-10">
              <p className=" w-80 text-base text-[#FFFFFF99] ">
                Hey there! I'm Chidiebere Michael, a frontend web and mobile
                developer with 2 years of experience. with passion for building sleek, efficient, and
                user-friendly applications.
              </p>
              <p className="  w-80 text-[#FFFFFF99]">
              Highly skilled at progressive enhancement, 
              design systems & UI Engineering - 
              performance and scalability are top objectives on my radar.
              </p>
            </div>
            <div className="flex space-x-8 mt-5">
                <a href="https://x.com/ClassicMike17" target="_blank">
                    <FaTwitter size={26} className="hover:text-blue-600 hover:animate-bounce transition-transform duration-300 hover:scale-130"/>
                </a>
                <a href="https://www.tiktok.com/@mikebytes01?_t=ZS-8uSMsxmY7n8&_r=1" target="_blank">
                    <FaTiktok size={26} className="hover:text-orange-600 hover:animate-bounce transition-transform duration-300 hover:scale-130"/>
                </a>
                <a href="https://www.instagram.com/mike_bytes?igsh=Mjg3cjBpaXB5NW5o&utm_source=qr" target="_blank">
                    <FaInstagram size={26} className="hover:text-red-600 hover:animate-bounce transition-transform duration-300 hover:scale-130"/>
                </a>
                <a href="https://wa.link/1fzjf3" target="_blank">
                    <FaWhatsapp size={26} className="hover:text-textGreen hover:animate-bounce transition-transform duration-300 hover:scale-130"/>
                </a>
            </div>
          </div>
          <img src={assets.avatar} alt="" className="mt-6 w-100 " />
      </div>
    </div>
  );
}

export default About;
