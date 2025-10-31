import React from "react";
import Image from "next/image";
import { toolsBadges } from "@/public/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/profile.jpg"
            alt="user"
            width={500}
            height={500}
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="flex-1 w-full max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="mb-10 w-full max-w-3xl leading-6 font-Ovo">
            I’m a curious and driven person with a strong passion for technology
            and digital creation. I recently completed my studies in web
            development, and I’m excited to grow in an industry that constantly
            evolves and inspires me. I’m fascinated by how ideas come to life
            through code, and I’m eager to keep learning, building, and taking
            on new challenges. I bring a loyal mindset, strong work ethic, and a
            creative spirit, especially through my love for music production,
            which keeps me inspired both inside and outside of tech.
          </p>

          <ul>
            {/* {infoList.map(({ title, description }, index) => (
              <li key={index}>
                <h3>{title}</h3>
                <p>{description}</p> */}
          </ul>
          <motion.h4
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Skills:
          </motion.h4>
          <motion.ul
            className="flex items-center gap-3 sm:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {/* {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="group relative flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 
                rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool.img} alt="tool" className="w-5 sm:w-7" />
                <span className="absolute bottom-[-2rem] text-sm sm:text-sm text-gray-500 font-Ovo opacity-0 group-hover:opacity-100 transition-opacity duration-300  dark:text-white/80">
                  {tool.name}
                </span>
              </motion.li>
            ))} */}
            {toolsBadges.map((tool, index) => (
              <motion.li key={index}>
                <span className={tool.className}>{tool.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
