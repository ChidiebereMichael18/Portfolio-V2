import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaRobot } from "react-icons/fa";

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  github, 
  live, 
  category,
  featured 
}) => (
  <div className="group border-b border-gray-800 hover:border-gray-600 py-6 transition-colors">
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-3">
        <h3 className="text-white font-medium group-hover:text-gray-200 transition-colors">
          {title}
        </h3>
        {featured && (
          <span className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded">
            Featured
          </span>
        )}
      </div>
      <div className="flex items-center gap-3">
        {live && (
          <a 
            href={live} 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Live demo"
          >
            <FaExternalLinkAlt size={16} />
          </a>
        )}
        {github && (
          <a 
            href={github} 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub repository"
          >
            <FaGithub size={16} />
          </a>
        )}
      </div>
    </div>
    <p className="text-gray-400 text-sm mb-3 leading-relaxed">
      {description}
    </p>
    <div className="flex items-center gap-4 text-xs text-gray-500">
      <span className="flex items-center gap-1">
        {category === 'web' && <FaCode size={12} />}
        {category === 'mobile' && <FaMobile size={12} />}
        {category === 'automation' && <FaRobot size={12} />}
        {category}
      </span>
      <span>{tech}</span>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "MovieFlix",
      description: "A modern streaming platform interface with TMDB integration, search, and responsive design.",
      tech: "React.js • Tailwind CSS • Context API",
      live: "https://movieflix-joel.vercel.app/",
      category: "web",
    },
    {
      title: "BrainStorm",
      description: "A collaboration tool for creatives with real-time team features and idea boards.",
      tech: "React.js • Tailwind CSS • Express.js • MongoDB",
      live: "https://brainstorm-v1.vercel.app/",
      category: "web"
    },
    {
      title: "MikePay",
      description: "A cryptocurrency portfolio tracker with real-time price updates and secure payment integration.",
      tech: "React Native • Crypto API • Redux",
      github: "https://github.com/ChidiebereMichael18/Mike-Pay",
      category: "mobile",
    },
    {
      title: "Netflix Clone",
      description: "A full-featured Netflix-style clone with auth, content browsing, and responsive design.",
      tech: "React Native • Redux",
      github: "https://github.com/ChidiebereMichael18/Netflix-Clone",
      category: "mobile"
    },
    {
      title: "HeavenPing",
      description: "A smart Telegram bot that sends a daily Bible verse or inspirational quote to users every morning.",
      tech: "Python • Telegram API • Uptime Monitoring",
      github: "https://github.com/ChidiebereMichael18/heaven-ping",
      category: "automation"
    },
    {
      title: "CoinNow",
      description: "Real-time crypto price alerts and updates via Telegram. Includes custom commands and tracking features.",
      tech: "Node.js • Crypto API • Telegram Bot",
      github: "https://github.com/ChidiebereMichael18/CoinNow",
      category: "automation"
    }
  ];

  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
        Selected Work
      </h2>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-800 text-center">
        <a
          href="https://github.com/ChidiebereMichael18?tab=repositories"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <span>View all projects</span>
          <FaExternalLinkAlt size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default Projects;