import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

type Project = {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "RetroFlix",
    image: "/works-img/retroflix-mainpage.png",
    description:
      "Retroflix is a movie database web app connected to an API developed by me. Users can create accounts, browse movie info, and manage favorites. I focused on clean UI, responsive layout, and backend integration",
    techStack: [
      "React",
      "JavaScript",
      "Bootstrap",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    githubUrl: "https://github.com/rob-cost/CF-RetroFlix_Client",
  },
  {
    title: "Meet-App",
    image: "/works-img/meetapp.png",
    description:
      "Meet App is a serverless, progressive web application (PWA) built with React that allows users to search for and discover upcoming events in cities around the world. The application leverages the Google Calendar API to fetch real-time event data and provides interactive data visualizations to help users analyze event trends and patterns. Built with a Test-Driven Development (TDD) approach, Meet App leverages AWS Lambda for serverless backend logic and Google OAuth2 for secure user authentication. ",
    techStack: ["React", "Bootstrap", "AWS Lambda", "Google OAuth2"],
    githubUrl: "https://github.com/rob-cost/CF-meet",
  },
  {
    title: "Pokedex",
    image: "/works-img/pokedex.png",
    description:
      "The Pokedex App is a small app that allows you to look up information about a specific Pokémon. It fetches data directly from the Poke API and includes a searching feature.",
    techStack: ["JavaScript", "HTML5", "Bootstrap", "CSS"],
    githubUrl: "https://github.com/rob-cost/pokedex",
  },
  {
    title: "Chat-App",
    image: "/works-img/chat-msg.png",
    description:
      "The Chat App is a cross-platform mobile application built using React Native and Expo. It allows users to chat in real-time room with additional multimedia functionality such as sharing images, taking photos, and sending location data. The app uses Firebase for authentication, cloud storage, and real-time database capabilities.",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "Gifted Chat",
      "Native Maps",
    ],
    githubUrl: "https://github.com/rob-cost/CF-ChatApp",
  },
];

function Works() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="works"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        debitis magni commodi sint autem odit voluptates ad id, totam nisi modi,
        placeat reiciendis? Nulla qui eligendi odio saepe nesciunt
        necessitatibus.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="grid md:grid-cols-2 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <div className="h-[410px] w-full relative overflow-hidden">
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-bold mb-1 uppercase text-gray-300">
                  Tech Stack
                </h4>
                <ul className="flex flex-wrap gap-2 text-xs">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="bg-gray-700 px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 text-sm underline hover:text-gray-300"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Works;
