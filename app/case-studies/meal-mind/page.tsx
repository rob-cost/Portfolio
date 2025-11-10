"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MealMindCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[12%] py-10 mx-auto space-y-16"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-Ovo font-bold">MealMind</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto dark:text-gray-300">
          MealMind is a recipe platform that helps users organize their meals
          and discover new dishes. It’s an open and community-driven space where
          everyone can share, search, and explore recipes from a global
          database.
        </p>
      </div>

      {/* Section 1: The Overview */}
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Overview</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            MealMind was developed as a full-stack project focused on meal
            organization and recipe discovery. The idea was to create a
            centralized platform where users can both find and contribute
            recipes, fostering a sense of shared culinary exploration.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The app features a structured recipe database, a user-friendly
            interface, and powerful search functionality that allows filtering
            recipes quickly based on different criterias.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative h-72 md:h-96 w-full max-w-xl rounded-lg overflow-hidden">
            <Image
              src="/meal-mind_overview.png"
              alt="MealMind Overview"
              className="object-contain object-center rounded-lg mx-auto"
              fill
            />
          </div>
        </div>
      </div>

      {/* Section 2: The Approach */}
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative h-72 md:h-96 w-full max-w-xl rounded-lg overflow-hidden">
            <Image
              src="/meal-mind_approach.png"
              alt="MealMind Approach"
              className="object-contain object-center rounded-lg mx-auto"
              fill
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Approach</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            I started by designing the database models to efficiently store and
            relate recipe information. Once the data structure was solid, I
            moved on to refining the user experience, ensuring intuitive
            navigation and fast interactions.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            I then implemented a robust search feature, allowing users to find
            recipes quickly by applying specific filters. Using libraries like
            <strong>matplotlib</strong> and <strong>pandas</strong>, I created
            data visualizations that show recipe insights and trends, giving
            users an overview of their choices. Pagination was also added to
            maintain a clean and efficient UI.
          </p>
        </div>
      </div>

      {/* Section 3: The Challenges */}
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            The Challenges
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The most significant challenge was learning how to properly use and
            integrate data visualization libraries like matplotlib and pandas.
            Understanding the different chart types, their parameters, and how
            to represent recipe data effectively.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative h-72 md:h-96 w-full max-w-xl rounded-lg overflow-hidden">
            <Image
              src="/meal-mind_challenges.png"
              alt="MealMind Challenges"
              className="object-contain object-center rounded-lg mx-auto"
              fill
            />
          </div>
        </div>
      </div>

      {/* Section 4: The Outcome */}
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative h-72 md:h-96 w-full max-w-xl rounded-lg overflow-hidden">
            <Image
              src="/meal-mind_outcome.png"
              alt="MealMind Outcome"
              className="object-contain object-center rounded-lg mx-auto"
              fill
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Outcome</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The final version of MealMind is a fully functional, deployed
            application hosted on Heroku. Users can browse, search, and share
            recipes within a growing community. The visual analytics provide
            users with insights into popular recipe trends and ingredient
            combinations.
          </p>
          <p className="text-gray-500">View the app here:</p>
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://github.com/rob-cost/recipe-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-500"
            >
              GitHub
            </a>
            <a
              href="https://meal-mind-8b5f4fc6197b.herokuapp.com/"
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
            <strong>Future improvements:</strong> I plan to enhance MealMind
            with additional features and refinements, including:
          </p>
          <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300">
            <li>A more visually appealing and responsive UI/UX</li>
            <li>User profile pages with saved recipes and personal info</li>
            <li>Community features like comments and ratings</li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative h-72 md:h-96 w-full max-w-xl rounded-lg overflow-hidden">
            <Image
              src="/meal-mind_futuresteps.png"
              alt="MealMind Future Steps"
              className="object-contain object-center rounded-lg mx-auto"
              fill
            />
          </div>
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
