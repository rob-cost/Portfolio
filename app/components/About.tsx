import React from "react";
import Image from "next/image";
import { toolsData } from "@/public/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src="/user-image.png"
            alt="user"
            width={50}
            height={50}
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ex
            nesciunt porro! Odit eius obcaecati tenetur dolorem corporis
            voluptates hic, libero culpa, amet corrupti vero pariatur delectus
            impedit. Voluptate, voluptatibus?
          </p>

          <ul>
            {/* {infoList.map(({ title, description }, index) => (
              <li key={index}>
                <h3>{title}</h3>
                <p>{description}</p> */}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">Tools I used</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li key={index}>
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
