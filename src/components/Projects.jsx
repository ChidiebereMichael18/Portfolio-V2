import React from "react";
import { FaGithub, FaShareSquare } from "react-icons/fa";

// Reusable Project Card Component with Badge Support
const ProjectCard = ({ title, type, description, tech, github, live, badge }) => (
  <div className="border border-gray-800 rounded-lg p-4 mb-4">
    <div className="flex items-center gap-2">
      <h4 className="text-white text-lg font-semibold">
        {title} <span className="text-gray-400 text-sm">({type})</span>
      </h4>
      {badge && (
        <span className="px-2 py-0.5 text-xs font-medium bg-blue-600 text-white rounded-full">
          {badge}
        </span>
      )}
    </div>
    <p className="text-gray-400 pt-1">{description}</p>
    <p className="text-sm text-gray-500 mt-1">{tech}</p>
    <div className="flex gap-x-4 mt-2">
      {live && (
        <a href={live} target="_blank" rel="noreferrer">
          <FaShareSquare size={22} className="text-white hover:animate-pulse" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub size={22} color="#fff" className="hover:animate-pulse" />
        </a>
      )}
    </div>
  </div>
);

const Projects = () => (
  <div className="mt-12">
    <h2 className="font-extrabold text-3xl font-serif text-white mb-6">Projects</h2>
    <p className="text-gray-400 mb-6">
      Here are some of my projects showcasing my skills in web and mobile development, automation,
      and more.
    </p> 

    {/* 🌍 Web Projects */}
    <div className="mb-10">
      <h3 className="text-white text-xl mb-3">🌍 Web Projects</h3>
      <ProjectCard
        title="MovieFlix"
        type="Web App"
        description="A modern streaming platform interface with TMDB integration, search, and responsive design."
        tech="React.js • Tailwind CSS • Context API"
        live="https://movieflix-joel.vercel.app/"
      />
      <ProjectCard
        title="BrainStorm"
        type="Web App (In Development)"
        description="A collaboration tool for creatives with real-time team features and idea boards."
        tech="React.js • Tailwind CSS"
        live="https://brainstorm-v1.vercel.app/"
      />
      <ProjectCard
        title="Free Durk"
        type="Artist Showcase"
        description="A Next.js-powered music artist profile website."
        tech="Next.js • Tailwind CSS"
        live="https://lil-durk-gilt.vercel.app/"
      />
    </div>

    {/* 📱 Mobile Apps */}
    <div className="mb-10">
      <h3 className="text-white text-xl mb-3">📱 Mobile Apps</h3>
      <ProjectCard
        title="MikePay"
        type="Mobile App"
        description="A cryptocurrency portfolio tracker with real-time price updates and secure payment integration."
        tech="React Native • Crypto API • Redux"
        github="https://github.com/ChidiebereMichael18/Mike-Pay"
      />
      <ProjectCard
        title="Netflix Clone"
        type="Mobile App"
        description="A full-featured Netflix-style clone with auth, content browsing, and responsive design."
        tech="React Native • Redux"
        github="https://github.com/ChidiebereMichael18/Netflix-Clone"
      />
      <ProjectCard
        title="MikeDaily"
        type="Full-stack Mobile App"
        description="A full-stack news app built with React Native, Express, and MongoDB. Delivers live news feeds with custom backend."
        tech="React Native • Express.js • MongoDB"
        github="https://github.com/ChidiebereMichael18/MikeDaily"
      />
    </div>

    {/* 🤖 Bots & Automation */}
    <div className="mb-10">
      <h3 className="text-white text-xl mb-3">🤖 Bots & Automation</h3>
      <ProjectCard
        title="HeavenPing"
        type="Telegram Bot"
        description="A smart Telegram bot that monitors websites and sends alerts when they go down or become unreachable."
        tech="Python • Telegram API • Uptime Monitoring"
        github="https://github.com/ChidiebereMichael18/heaven-ping"
      />
      <ProjectCard
        title="CoinNow"
        type="Telegram Bot"
        description="Real-time crypto price alerts and updates via Telegram. Includes custom commands and tracking features."
        tech="Node.js • Crypto API • Telegram Bot"
        github="https://github.com/ChidiebereMichael18/CoinNow"
      />
    </div>
  </div>
);

export default Projects;
