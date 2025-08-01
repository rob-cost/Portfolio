import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/public/assets";

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
        Portfolio
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
        I’m always working on new projects and experimenting with ideas. Here
        are some of my latest works — you can find more on my{" "}
        <a href="https://github.com/rob-cost" target="_blank">
          GitHub
        </a>{" "}
        profile.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="grid md:grid-cols-3 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <div className="h-[350px] w-[460px] relative overflow-hidden">
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition duration-300">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
              </div>

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
              <div className="flex items-center gap-10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm underline hover:text-gray-300"
                >
                  View on GitHub
                </a>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm underline hover:text-gray-300"
                >
                  Live demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="https://github.com/rob-cost"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          GitHub profile
          <Image
            src="/right-arrow-white.png"
            alt="hand-icon"
            width={20}
            height={20}
            className="w-4"
          />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Works;
