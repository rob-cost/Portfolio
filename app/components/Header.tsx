import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 text-center max-w-3xl mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src="/profile-img.png"
          alt=""
          width={200}
          height={200}
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I am Roberto
        <Image
          src="/hand-icon.png"
          alt="hand-icon"
          width={20}
          height={20}
          className="w-6"
        />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        web developer in phase of learning
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am web developer who just finished his studies...
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me
          <Image
            src="/right-arrow-white.png"
            alt="hand-icon"
            width={20}
            height={20}
            className="w-4"
          />
        </a>
        <a
          href=""
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image
            src="/download-icon.png"
            alt="hand-icon"
            width={20}
            height={20}
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
