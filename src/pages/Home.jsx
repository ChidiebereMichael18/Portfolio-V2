import React from "react";
import {
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="bg-[#05020b] h-full">
      <div className="max-w-screen-md mx-auto px-5 font-montserrat">
        {/* Header */}
        <div className="flex justify-between pt-4 items-center">
          <h1 className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">MikeBytes</h1>
          <a href="https://github.com/ChidiebereMichael18/" className="transition-transform hover:scale-110">
            <FaGithub size={28} color="fff" />
          </a>
        </div>

        {/* Intro */}
        <div className="text-white mt-6 space-y-2">
          <p>Hello! I'm Chidiebere Michael, a frontend web and mobile developer with over 2 years of experience. I build sleek, efficient, and user-friendly applications.</p>
          <p>Skilled in design systems, UI engineering, and scalable performance-driven solutions.</p>
          <p>My stack lives in the TypeScript/JavaScript ecosystem, but I enjoy Python as well.</p>
          <p className="my-2">I'm passionate about solving problems with code and turning ideas into real-world products. Let's build something amazing together! 🚀</p>
          <p className="mt-4">Currently working on: <span className="text-blue-600">BrainStorm</span></p>
        </div>

        {/* Companies Section */}
        <div className="mt-10">
          <h2 className="font-extrabold text-2xl font-serif text-white">Companies I've Worked With</h2>
          <p className="text-base text-gray-400 mb-6">Organizations where I've contributed and grown professionally.</p>
          <div className="space-y-4">
            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="text-white text-lg font-semibold">Devsentinel Innovations</h3>
              <p className="text-gray-400">Lead Frontend Developer • 2025 - Present</p>
              <p className="text-gray-500 mt-2">Building responsive web applications and implementing modern UI/UX designs.</p>
            </div>
            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="text-white text-lg font-semibold">Threndin (Intern)</h3>
              <p className="text-gray-400">React Native Developer • 2024 - 2025</p>
              <p className="text-gray-500 mt-2">Developed cross-platform mobile applications using React Native.</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <Projects />

        {/* View More */}
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

        {/* Footer */}
        <div className="border-t border-gray-400">
          <div className="flex space-x-6 pb-8 pt-6">
            <a href="https://x.com/IFearAids" target="_blank" rel="noreferrer">
              <FaXTwitter size={24} className="text-white hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/mike_bytes" target="_blank" rel="noreferrer">
              <FaInstagram size={24} className="text-white hover:text-pink-500" />
            </a>
            <a href="mailto:mikeyxofficial1234@gmail.com">
              <FaEnvelope size={24} className="text-white hover:text-red-500" />
            </a>
            <a href="https://github.com/ChidiebereMichael18" target="_blank" rel="noreferrer">
              <FaGithub size={24} className="text-white hover:text-gray-400" />
            </a>
          </div>
          <div className="text-sm text-gray-400 pb-4">Built with React & Tailwind CSS</div>
          <p className="text-base py-4 text-white">&copy;Michael 2025, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
      