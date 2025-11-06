"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AilmsProCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[12%] py-10 mx-auto space-y-16"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-Ovo font-bold">Learning Platform</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto dark:text-gray-300">
          An AI-powered learning platform that generates educational content and
          personalized study paths based on user-selected subjects.
        </p>
      </div>

      {/* Section 1: The Overview */}
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Overview</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            I wanted to build and deploy a fully functional educational platform
            powered by AI. Users should be able to choose a subject and receive
            a learning path divided into difficulty, topics, and lessons. At the
            same time, I wanted to improve my skills in <strong>Python</strong>,{" "}
            <strong>Django</strong>, <strong>GCP</strong> and explore new
            technologies.
          </p>
        </div>
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/ailmspro_1.png"
            alt="AilmsPro Overview"
            height={400}
            width={800}
            className="object-cover object-center rounded-lg"
          />
        </div>
      </div>

      {/* Section 2: The Approach */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Images */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {["/ailmspro_3.png", "/ailmspro_4.png"].map((src, i) => (
            <div
              key={i}
              className="relative flex-1 h-60 rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`AilmsPro Step ${i + 1}`}
                height={200}
                width={500}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Approach</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            To build the platform, I started by designing and implementing the
            database models, ensuring they could support the features I had
            planned. I then carefully researched and selected a Large Language
            Model (LLM) that I could use given a limited budget. I integrated
            the LLM to produce:
          </p>
          <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300">
            <li>Difficulty assessment</li>
            <li>Lessons</li>
            <li>Topics</li>
          </ul>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            I have then continuously refined the generated content to improve
            its accuracy. Once the backend logic was in place, I created a basic
            UI and focused on designing a smooth user experience, implementing
            login and signup forms as well as navigation between different
            pages. To enhance performance and responsiveness, I implemented
            asynchronous processing using Celery, allowing content generation
            and other tasks to run in the background without slowing down the
            user interface. Finally, I continuously refined the UI to make it
            more intuitive, visually appealing, and user-friendly.
          </p>
        </div>
      </div>

      {/* Section 3: The Challenges */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            The Challenges
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            This project was both my favorite and the most challenging one I
            have worked on. One of the main difficulties was obtaining valid
            responses from the Large Language Model (LLM). I used Pydantic to
            validate the returned JSON schema and experimented with several LLMs
            before finding the one that performed best for my use case. I have
            also carefully tuned the AI’s prompt to generate an accurate
            response. Another significant challenge was implementing
            asynchronous behavior to improve the user experience. Distributing
            tasks efficiently required careful setup, so I integrated Celery
            with Redis to handle background processing, ensuring that content
            generation and other operations ran smoothly without slowing down
            the platform.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/ailmspro_2.png"
            alt="AilmsPro Challenge"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 4: The Outcome */}
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/ailmspro_7.png"
            alt="AilmsPro Outcome"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Outcome</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The entire process, from development to deployment, took around
            three months. I deployed the platform using Google Cloud Platform
            (GCP), and it is now fully functional. Working on this project was
            an incredibly rewarding experience, as it allowed me to explore and
            apply technologies I had never used before.
          </p>
          <p className="text-gray-500">View the app here:</p>
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://github.com/rob-cost/Learning-Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-500"
            >
              GitHub
            </a>
            <a
              href="https://ailmspro.roberto-costantino.com/"
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
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">Future Steps</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>What didn’t go well:</strong> Time was a key constraint
            since I was working on other tasks alongside this project. As a
            result, I couldn’t dedicate as much time as I wanted to adding new
            features or refining the UI in greater detail.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Future improvements:</strong> I plan to expand the platform
            with new capabilities and a more engaging user experience:
          </p>
          <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300">
            <li>
              Allow users to pick any subject, including multiple per profile
            </li>
            <li>Generate longer and more detailed educational content</li>
            <li>
              Add more quizzes at the end of lessons to increase interactivity
            </li>
            <li>
              Enhance the overall UI/UX for a smoother learning experience
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/final_steps.png"
            alt="AilmsPro Future Steps"
            fill
            className="object-cover rounded-lg"
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
