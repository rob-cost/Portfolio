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
      className="w-full px-[12%] py-10 mx-auto space-y-16 pt-36"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-Ovo font-bold">Learning Platform</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto dark:text-gray-300">
          An AI-powered learning platform that generates educational content and
          personalized study paths based on user-selected subjects.
        </p>
      </div>

      {/* Section 0: Specs */}
      <div>
        <div className="text-center">
          <p>
            <strong>Role:</strong> Fullstack Developer
          </p>
          <p>
            <strong>Duration:</strong> 5 months
          </p>
          <p>
            <strong>Credits:</strong> Renish Bhaskaran (Backend Developer)
          </p>
          <p>
            <strong>Tech-Stack:</strong> Python, Django, Celery, Redis, GCP,
            GitActions
          </p>
        </div>
      </div>

      {/* Section 1: The Overview */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Overview</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The goal of this project was to design and deploy a fully functional
            AI educational platform. Users select a subject, complete an initial
            evaluation test, and receive a learning path structured by
            difficulty, topics, and lessons, with progress tracking.
            <br />I used Django as full-stack framework due to its database
            integration and built-in authentication system.
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
      <div className="flex flex-col md:flex-row pt-20 gap-8">
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
            To build the platform, I broke the project into manageable tasks,
            created user stories, and prioritized features based on MVP. The MVP
            included user authentication, subject selection, difficulty
            assessment, and a dashboard listing the topics. Afterwards, I
            selected and integrated a large language model (LLM), and created
            content for lessons and topics. <br /> On the backend, I created the
            database models using Django and migrated them. Thanks to Django`s
            admin interface, it was straightforward to manage the data and
            ensure it was being saved correctly in the database. Once the core
            features were in place, I focused on refining the prompts to improve
            content accuracy, validating outputs with Pydantic to ensure
            consistency and reliability. <br /> To enhance performance and
            responsiveness, I implemented asynchronous behavior using Celery and
            Redis, which allowed tasks to run in the background and be managed
            efficiently via a task queue. <br /> Finally, after ensuring
            functionality and performance, I refined the UI, making it more
            intuitive and user-friendly, and enhancing the overall user
            experience.
          </p>
        </div>
      </div>

      {/* Section 3: The Challenges */}
      <div className="flex flex-col md:flex-row pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            The Challenges
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            I faced several challenges during this project. Initially, obtaining
            valid and consistent responses from the LLM was problematic. Even
            after validating outputs with Pydantic, some formats and content
            were not appropriate. To address this, I spent time refining the
            prompts and adding a layer of formatting rules before saving
            responses to ensure consistency. <br />
            Another significant challenge was implementing asynchronous behavior
            to improve the user experience. Therefore, I integrated Celery with
            Redis for background processing, ensuring that content generation
            and other operations ran smoothly without blocking the platform.
            <br />
            Finally, deploying the application on Google Cloud Platform (GCP)
            presented additional complexity. With the support of my mentor
            Renish, we configured a virtual machine, containerized the
            application using Docker, and successfully deployed it in the cloud,
            ensuring reliable hosting.
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
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
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
            The entire process took approximately three months. The platform is
            now fully functional and accessible to anyone, and I hope it will
            help users discover and learn new things every day.
            <br />
            This project was highly rewarding, as it allowed me to explore and
            strengthen my skills with the chosen tech stack, providing valuable
            real-world experience.
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
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
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
            with new capabilities and a more engaging user experience, for
            example:
          </p>
          <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300">
            <li>
              Allow users to pick any subject, including multiple per profile.
            </li>
            <li>
              Generate longer and more detailed educational content and provide
              live AI help chat.
            </li>
            <li>
              Add quizzes at the end of lessons to increase interactivity.
            </li>
            <li>
              Enhance the overall UI/UX for a smoother learning experience.
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
