import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 text-center max-w-3xl mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/profile-img.png"
          alt=""
          width={200}
          height={200}
          className="rounded-full w-32"
        />
      </motion.div> */}
      <motion.h3
        initial={{ y: -16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi, I am Roberto
        {/* <Image
          src="/hand-icon.png"
          alt="hand-icon"
          width={20}
          height={20}
          className="w-6"
        /> */}
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] leading-normal font-Ovo"
      >
        a Web Developer with a curious mind
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-10 w-full max-w-2xl leading-6 font-Ovo"
      >
        I love exploring new technologies and constantly challenging myself to
        grow. Whether I’m writing code or making music, I’m always learning,
        evolving, and crafting something meaningful.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me
          <Image
            src="/right-arrow-white.png"
            alt="hand-icon"
            width={20}
            height={20}
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Roberto-Costantino-Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume
          <Image
            src="/download-icon.png"
            alt="hand-icon"
            width={20}
            height={20}
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
