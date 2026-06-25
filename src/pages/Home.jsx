import React from "react";
import { FaEnvelope, FaGithub, FaArrowRight } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="max-w-2xl mx-auto px-6 font-inter">
        {/* Header */}
        <div className="flex justify-between items-center py-8">
          <h1 className="text-xl font-medium text-white tracking-tight">
            mikebytes
          </h1>
          <nav className="flex items-center gap-6">
            <a
              href="https://github.com/ChidiebereMichael18/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:mikeyxofficial1234@gmail.com"
              className="text-sm text-gray-400 hover:text-white transition-colors border border-gray-800 hover:border-gray-600 px-4 py-2 rounded-full"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Hero */}
        <div className="py-16 border-b border-gray-800">
          <div className="space-y-6">
            <h1 className="text-4xl font-light text-white leading-tight">
              Full-Stack & Mobile Engineer
              <br />
              building scalable digital products
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              4+ years shipping production-ready applications across web and
              mobile. Focused on scalable architectures, real-time systems, and
              performance-driven user experiences.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
              >
                <span>View work</span>
                <FaArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="mailto:mikeyxofficial1234@gmail.com"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>Get in touch</span>
              </a>
            </div>
            <p className="text-sm text-gray-500">
               Building Verizen, an AI-powered customer agent for modern businesses
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="py-16 border-b border-gray-800">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            Experience
          </h2>

          <div className="space-y-8">
            {/* AafriRide */}
            <div className="group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-medium hover:text-gray-300 transition-colors">
                  <a
                    href="https://aafriride.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AAFRI Ride
                  </a>
                </h3>
                <span className="text-gray-500 text-sm">2025 — Present</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">Software Engineer</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Built and currently maintaining the AafriRide software
                application, implementing scalable features and improving
                performance across Android and iOS platforms.
              </p>
            </div>

            {/* DevSentinel */}
            <div className="group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-medium hover:text-gray-300 transition-colors">
                  <a
                    href="https://devsentinelinnovations.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DevSentinel Innovations
                  </a>
                </h3>
                <span className="text-gray-500 text-sm">2025</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">Frontend Developer</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Built responsive web applications and implemented modern UI/UX
                systems using React and Tailwind CSS, improving usability and
                performance.
              </p>
            </div>

            {/* Threndin Internship */}
            <div className="group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-medium hover:text-gray-300 transition-colors">
                  <a
                    href="https://www.threndin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Threndin
                  </a>
                </h3>
                <span className="text-gray-500 text-sm">2024 — 2025</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Software Engineering Intern
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Contributed to cross-platform mobile development using React
                Native, collaborating with the team to build and improve core
                application features.
              </p>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div id="projects" className="py-16">
          <Projects />
        </div>

        {/* CTA */}
        <div className="py-16 border-t border-gray-800">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-light text-white">
              Let's work together
            </h2>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              I'm currently available for freelance projects and full-time
              opportunities.
            </p>
            <a
              href="mailto:mikeyxofficial1234@gmail.com"
              className="inline-flex items-center gap-3 text-white border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-full transition-colors group"
            >
              <FaEnvelope size={16} />
              <span>Start a conversation</span>
              <FaArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-6">
              <a
                href="https://x.com/IFearAids"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/mike_bytes"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="mailto:mikeyxofficial1234@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href="https://github.com/ChidiebereMichael18"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={18} />
              </a>
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-500">
                Built with React & Tailwind CSS
              </p>
              <p className="text-sm text-gray-600">
                &copy; 2026 Michael. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
