import React from "react";
import Image from "next/image";

function Works() {
  return (
    <div id="works" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5lg font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        debitis magni commodi sint autem odit voluptates ad id, totam nisi modi,
        placeat reiciendis? Nulla qui eligendi odio saepe nesciunt
        necessitatibus.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Left - Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/works-img/retroflix-mainpage.png"
            alt="Retroflix Project"
            width={800}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right - Description */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl font-semibold mb-4">Retroflix</h3>
          <p className="mb-4 text-gray-700">
            Retroflix is a movie database web app inspired by Netflix. Users can
            create accounts, browse movie info, and manage favorites. I focused
            on clean UI, responsive layout, and backend integration.
          </p>

          <h4 className="text-sm font-semibold mb-2 text-gray-500 uppercase tracking-wider">
            Tech Stack
          </h4>
          <ul className="flex flex-wrap gap-2 text-sm">
            <li className="bg-gray-100 px-3 py-1 rounded-md">Next.js</li>
            <li className="bg-gray-100 px-3 py-1 rounded-md">TypeScript</li>
            <li className="bg-gray-100 px-3 py-1 rounded-md">Tailwind CSS</li>
            <li className="bg-gray-100 px-3 py-1 rounded-md">MongoDB</li>
            <li className="bg-gray-100 px-3 py-1 rounded-md">Express.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Works;
