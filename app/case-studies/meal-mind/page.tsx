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
      className="w-full px-[12%] py-10 mx-auto space-y-16 pt-36"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-Ovo font-bold">MealMind</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto dark:text-gray-300">
          MealMind is a recipe collection platform where users can share,
          search, and explore recipes. The recipes are collcted in a database
          and shared with everyone.
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
            <strong>Tech-Stack:</strong> Python, Django, Pandas, Matplotlib,
            Heroku
          </p>
        </div>
      </div>

      {/* Section 1: The Overview */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Overview</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            MealMind is a full-stack web application developed using the Django
            framework. The project was conceived as a platform where users can
            both discover and add recipes, transforming the app into a
            collaborative database of dishes from around the world.
            <br />
            In addition to browsing recipes, users can create profiles and save
            their favorite dishes for easy access. The application features a
            well-structured recipe database, an intuitive and user-friendly
            interface, and a search system that enables users to filter recipes
            efficiently based on multiple criteria. The app also includes data
            visualizations that analyze trends across the recipe collection.
          </p>
        </div>

        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/meal-mind_overview.png"
            alt="MealMind Overview"
            className="object-cover object-center rounded-lg"
            fill
          />
        </div>
      </div>

      {/* Section 2: The Approach */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        {/* Image */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {["/meal-mind_approach_2.png", "/meal-mind_approach.png"].map(
            (src, i) => (
              <div
                key={i}
                className="relative flex-1 h-60 rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt="meal-mind_approach"
                  height={200}
                  width={500}
                  className="object-cover rounded-lg"
                />
              </div>
            )
          )}
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Approach</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The development of MealMind followed an agile approach. I began by
            defining user stories to identify user needs and translating them
            into small, manageable tasks. This structure allowed me to iterate
            consistently and maintain flexibility throughout the development
            process.
            <br /> As a first step, I started by designing the data models for
            recipes and users, then implemented user authentication to handle
            registration, login, and user-specific interactions, leveraging
            Django’s built-in authentication forms. For adding and searching
            recipes, I used Django Forms and ModelForms, which ensured secure
            handling of user input, built-in validation, and a cleaner approach.
            <br />
            With the backend foundation in place, I moved on to implementing the
            main application views, including the homepage, recipe cards, and a
            popular recipes section, ensuring that data was retrieved and
            displayed efficiently.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Next, I developed a search dashboard that allows users to filter
            recipes based on multiple criteria. I also integrated data
            visualization features using Pandas and Matplotlib, enabling the
            application to display charts that highlight trends within the
            recipe dataset. Once the core functionality was complete, I focused
            on refining the design and overall user experience, improving layout
            consistency, accessibility, and interaction flow to ensure the
            application was intuitive and engaging.
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
            One of the main challenges in developing MealMind was integrating
            data analysis and visualization features into the app. Using Pandas
            and Matplotlib required transforming Django querysets into suitable
            data structures for analysis, ensuring that the extracted data was
            accurate, efficient, and aligned with the visual insights I wanted
            to present.
            <br />
            Another challenge was designing the search dashboard. Implementing
            filtering across multiple criteria required to create querysets to
            ensure correct results while maintaining performance and
            readability. This process deepened my understanding of Django’s ORM,
            query optimization, and the importance of structuring data models to
            support various queries.
            <br />
            Through these challenges, I strengthened my ability to work with
            database querysets and with data visualization, building scalable,
            user-focused features based on structured queries.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          {["/meal-mind_challenges_2.png", "/meal-mind_challenges.png"].map(
            (src, i) => (
              <div
                key={i}
                className="relative flex-1 h-60 rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt="meal-mind_approach"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Section 4: The Outcome */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/meal-mind_outcome.png"
            alt="MealMind Outcome"
            className="object-cover rounded-lg"
            fill
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Outcome</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            MealMind is a fully functional web application that I deployed on
            Heroku.
            <br />
            Its goal is to help users discover new recipes in an easy and
            interactive way, making meal planning more simple, enjoyable, and
            engaging.
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
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">Future Steps</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Future improvements:</strong> I plan to enhance MealMind
            with additional features and refinements, including:
          </p>
          <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300">
            <li>
              Improving the UI/UX for a more visually appealing and fully
              responsive experience.
            </li>
            <li>
              Enhancing Recipe Cards to include detailed cooking steps and tips.
            </li>
            <li>
              Adding community features, such as comments, ratings, and recipe
              sharing.
            </li>
            <li>
              Integrating personalized recommendations based on user preferences
              and trends.
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/meal-mind_futuresteps.png"
            alt="MealMind Future Steps"
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
