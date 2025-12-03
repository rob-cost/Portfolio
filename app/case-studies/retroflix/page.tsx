"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function RetroFlixCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[12%] py-10 mx-auto space-y-16 pt-36"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-Ovo font-bold">RetroFlix</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto dark:text-gray-300">
          A full-stack movie information app inspired by Netflix, built with the
          MERN stack. It allows users to view details about movies, manage their
          profile, and curate lists of favorites or movies to watch.
        </p>
      </div>

      {/* Section 0: Specs */}
      <div>
        <div className="text-center">
          <p>
            <strong>Role:</strong> Fullstack Developer
          </p>
          <p>
            <strong>Duration:</strong> 2 months
          </p>
          <p>
            <strong>Tech-Stack:</strong> React, JavaScript, Bootstrap, Node.js,
            Express, MongoDB
          </p>
        </div>
      </div>

      {/* Section 1: The Overview */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Overview</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            RetroFlix was designed to provide users with a seamless way to
            browse and store information about movies. The app is connected to a
            MongoDB database through a RESTful API built with Node.js and
            Express, delivering JSON-formatted data to the front end.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The goal was to create a functional full-stack application that
            could handle authentication, manage user data, and allow interaction
            with a database and server through a React-based interface.
          </p>
        </div>

        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/retroflix_1.png"
            alt="RetroFlix Overview"
            className="object-contain object-center rounded-lg mx-auto"
            fill
          />
        </div>
      </div>

      {/* Section 2: The Approach */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2 flex flex-col gap-4 justify-center items-center">
          {["/retroflix_2.png", "/retroflix_3.png"].map((src, i) => (
            <div key={i} className="relative flex-1 h-60 overflow-hidden">
              <Image
                src={src}
                alt={`RetroFlix Step ${i + 1}`}
                className="object-cover mx-auto"
                height={200}
                width={500}
              />
            </div>
          ))}
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Approach</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            I started by creating the MongoDB database and designing collections
            to store movies, users, and lists. I then built a RESTful API using
            Node.js and Express to interact with the database via standard HTTP
            methods (GET, POST, PUT, DELETE), returning JSON data for the
            frontend.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            After the API was functional, I created a React-based interface,
            including multiple views: a movie view, login and registration
            views, and a profile page where users can update their info and
            manage their favorites and to-watch lists. Security was implemented
            through JWT authentication, password hashing, and CORS handling. The
            app was deployed using Heroku and Netlify.
          </p>
        </div>
      </div>

      {/* Section 3: The Challenges */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            The Challenges
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The main challenge was connecting all parts of the MERN stack for
            the first time. Ensuring smooth communication between the React
            frontend, the Node/Express API, and the MongoDB database required
            planning and debugging. Handling authentication securely and
            managing state between different views also took significant effort.
          </p>
        </div>

        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/retroflix_challenges.png"
            alt="RetroFlix Challenges"
            className="object-contain object-center rounded-lg mx-auto"
            fill
          />
        </div>
      </div>

      {/* Section 4: The Outcome */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/retroflix_outcome.png"
            alt="RetroFlix Outcome"
            className="object-contain object-center rounded-lg mx-auto"
            fill
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Outcome</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            RetroFlix is now a fully functional, deployed application. Users can
            browse movie details, manage profiles, and store favorites or
            to-watch lists. Building this app significantly improved my
            understanding of full-stack development, API design, and React state
            management.
          </p>
          <p className="text-gray-500">View the app here:</p>
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://github.com/rob-cost/CF-RetroFlix_Client"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-500"
            >
              GitHub
            </a>
            <a
              href="https://retroflixvintage.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-500"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Section 5: Future Steps */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">Future Steps</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Future improvements:</strong> Possible next steps for
            RetroFlix include:
          </p>
          <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300">
            <li>Enhancing the UI/UX with more polished designs</li>
            <li>Implementing better error handling for API requests</li>
            <li>Adding search, filter, and sorting functionality for movies</li>
            <li>
              Integrating external movie APIs to enrich the database with more
              content
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/background-retroflix.png"
            alt="RetroFlix Future Steps"
            className="object-contain object-center rounded-lg mx-auto"
            fill
          />
        </div>
      </div>

      {/* Back to Works Button */}
      <div className="text-center mt-16">
        <Link
          href="/#works"
          className="inline-block px-8 py-3 bg-black text-white rounded-full font-Ovo hover:bg-gray-800 transition"
        >
          ← Back to Projects
        </Link>
      </div>
    </motion.div>
  );
}
