import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        className="text-center max-w-2xl leading-6 mx-auto mt-5 mb-12 font-Ovo"
      >
        I’m always working on new projects and experimenting with ideas. Here
        are some of my latest works — you can find more on my{" "}
        <a href="https://github.com/rob-cost" target="_blank">
          GitHub
        </a>{" "}
        profile.
      </motion.p>
      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="grid md:grid-cols-2 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="rounded-lg shadow-lg overflow-hidden bg-white/5 backdrop-blur-sm p-4"
          >
            {/* Clickable Image */}
            <Link href={`/case-studies/${project.slug}`}>
              <div className="relative h-[200px] sm:h-[300px] md:h-[350px] w-full cursor-pointer overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={400}
                  width={800}
                  className="object-cover w-full h-full transform transition duration-300 hover:scale-105"
                />
              </div>
            </Link>

            {/* Project Info below image */}
            <div className="mt-4 px-1">
              <h3 className="text-xl font-semibold mb-2 font-Ovo">
                {project.title}
              </h3>
              <p className="text-sm text-black-400 font-Ovo mb-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-3">
                <h4 className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 mb-1">
                  Tech Stack
                </h4>
                <ul className="flex flex-wrap gap-1.5 text-[11px] text-gray-800">
                  {project.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-gray-100/80 px-2.5 py-0.5 rounded-full leading-tight shadow-sm backdrop-blur-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Links
              <div className="flex items-center gap-6 mt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-gray-300"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-gray-300"
                  >
                    Live Demo
                  </a>
                )}
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* GitHub Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="https://github.com/rob-cost"
          target="_blank"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          GitHub profile
          <Image
            src="/right-arrow-white.png"
            alt="arrow-icon"
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
