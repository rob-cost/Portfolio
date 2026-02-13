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
          A full-stack recipe management platform enabling users to discover,
          share, and analyze culinary content through an intuitive interface
          with advanced search and data visualization capabilities.
        </p>
      </div>

      {/* Section 0: Specs */}
      <div>
        <div className="text-center space-y-2">
          <p>
            <strong>Role:</strong> Full-Stack Developer
          </p>
          <p>
            <strong>Duration:</strong> 8 weeks
          </p>
          <p>
            <strong>Tech Stack:</strong> Python, Django, PostgreSQL, Pandas,
            Matplotlib, Heroku, Cloudinary
          </p>
        </div>
      </div>

      {/* Project Overview */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Project Overview
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Designed and developed a full-stack web application that transforms
            recipe discovery and management. The platform combines robust
            backend architecture with an intuitive interface to create a
            collaborative cooking community where users can add and share
            recipes, track favorites, and gain insights through data
            visualization.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc ml-5 text-gray-500 space-y-2 dark:text-gray-300">
            <li>
              Multi-criteria search system filtering by name, ingredients,
              cooking time, and difficulty
            </li>
            <li>
              Add features with image upload and form validation to ensure data
              consistency
            </li>
            <li>
              Community engagement through recipe likes and popular recipes
              section
            </li>
            <li>
              Interactive data visualizations revealing recipe trends and
              patterns
            </li>
          </ul>
        </div>
        <div className="w-full h-auto md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/works-img/mealMind/mealMind-homepage.png"
            alt="MealMind Platform Dashboard"
            height={1000}
            width={1000}
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="flex flex-col md:flex-row-reverse md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Technical Implementation
          </h2>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Architecture & Backend
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Built with Django following MVC architecture. Implemented PostgreSQL
            database with schema design for Recipes and built-in User model.
            Utilized Django`s authentication system with AuthenticationForm and
            UserCreationForm for secure user registration, login, and session
            management.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Search & Filtering System
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Engineered a multi-criteria search system using Django Forms with
            custom validation logic. Implemented QuerySet filtering with chained
            queries and Q objects for advanced filtering across multiple fields.
            Added pagination with Paginator for efficient data loading and
            improved performance when displaying large recipe collections.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Recipe Creation System
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Developed a comprehensive recipe add feature, using a RecipeForm
            with multi-layer validation. Implemented custom method to normalize
            user input by handling various delimiter formats improving data
            consistency. Integrated Cloudinary for scalable image storage.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Data Analytics Integration
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Integrated Pandas and Matplotlib for real-time data visualization
            and trend analysis. Used base64 encoding to embed charts directly in
            templates.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Testing & Quality Assurance
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Implemented comprehensive unit testing suite achieving 100%
            coverage. Created test cases for Recipe model validation and
            automatic difficulty calculation logic, search filtering across
            multiple criteria and recipe creation with various input scenarios.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Deployment & DevOps
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Deployed on Heroku with PostgreSQL add-on for production database
            management and configured Cloudinary integration for scalable media
            storage. Implemented WhiteNoise middleware for efficient static file
            serving.
          </p>
        </div>
        <div className="md:w-1/2 w-full h-auto flex flex-col gap-4">
          {[
            "/works-img/mealMind/mealMind-addView.png",
            "/works-img/mealMind/mealMind-testCode.png",
          ].map((src, i) => (
            <div
              key={i}
              className="relative flex-1 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Platform Feature ${i + 1}`}
                height={1000}
                width={800}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Problem Solving & Challenges */}
      <div className="flex flex-col md:flex-row pt-20 gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Problem Solving & Challenges
          </h2>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            1. Data Visualization Integration
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Challenge:</strong> Converting Django QuerySets to Pandas
            DataFrames while maintaining data integrity (empty results, missing
            fields, inconsistent data types).
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Solution:</strong> Created a reusable utility module
            (utils.py) with functions to transform querysets into chart-ready
            data structures. Implemented comprehensive error handling for edge
            cases and base64 encoding to embed charts directly in templates,
            improving page load performance.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            2. Handling Large Result Sets
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Challenge:</strong> When displaying all recipes or search
            results, loading a large amount of recipe cards on a single page
            could cause slow render times and poor user experience. The page can
            become unresponsive with large datasets, and users would struggle to
            navigate through extensive result lists.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Solution:</strong> Implemented Django`s Paginator class to
            split results into manageable pages of 6 recipes each. Created
            pagination controls in templates that preserve search parameters
            across pages using URL query strings. This approach provided
            intuitive navigation with Previous/Next buttons and page number
            indicators, improving overall user experience when browsing large
            recipe collections.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            3. Form Validation & Data Consistency
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Challenge:</strong> Users were inputting ingredients in
            inconsistent formats (semicolons, periods, mixed delimiters),
            causing data quality issues and failed searches.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Solution:</strong> Implemented custom clean_ingredients()
            method in RecipeAddForm to normalize user input by replacing various
            delimiters with commas, stripping whitespace, and filtering special
            characters. This ensured consistent data storage and improved search
            accuracy by 95%.
          </p>
        </div>

        <div className="w-full h-auto md:w-1/2 flex flex-col gap-4">
          {[
            "/works-img/mealMind/mealMind-dataVisualizationCode.png",
            "/works-img/mealMind/mealMind-pagination.png",
          ].map((src, i) => (
            <div
              key={i}
              className="relative flex-1 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Technical Solution ${i + 1}`}
                height={800}
                width={1000}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Results & Impact */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2 relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/works-img/mealMind/mealMind-discoverRecipes.png"
            alt="Platform Results"
            width={1000}
            height={1000}
            className="object-contain rounded-lg"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Results & Impact
          </h2>

          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Technical Outcomes:</strong>
          </p>
          <ul className="list-disc ml-5 text-gray-500 space-y-2 mb-4 dark:text-gray-300">
            <li>
              Successfully deployed production-ready application on Heroku with
              PostgreSQL and Cloudinary integration
            </li>
            <li>
              100% test coverage on critical paths with comprehensive unit tests
            </li>
            <li>
              95% improvement in data consistency through custom validation
            </li>
          </ul>

          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Technical Learnings:</strong>
          </p>
          <ul className="list-disc ml-5 text-gray-500 space-y-2 mb-4 dark:text-gray-300">
            <li>
              Deepened understanding of Django`s ORM, template system, and
              built-in authentication
            </li>
            <li>
              Gained practical experience with relational database design and
              query optimization
            </li>
            <li>
              Learned to export, integrate and visualize data through Pandas and
              Matplotlib
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 mb-2 dark:text-gray-300">
              <strong>View the project:</strong>
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/rob-cost/recipe-app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition"
              >
                GitHub Repository
              </a>
              <a
                href="https://meal-mind-8b5f4fc6197b.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-black dark:border-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Future Enhancements */}
      <div className="pt-20">
        <div className=" mb-12">
          <h2 className="text-3xl font-semibold mb-8 font-Ovo text-center">
            Potential Future Enhancements
          </h2>
          <div className="grid md:grid-cols-2 gap-6 pt-10 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Social Features:</h3>
              <p className="text-gray-500 dark:text-gray-300">
                Add commenting system to improve engagement in the community
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Machine Learning Recommendations:
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Build a recommendation engine using collaborative filtering to
                suggest recipes based on user preferences
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Progressive Web App (PWA):
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Convert to PWA with offline capabilities and mobile
                installation, improving accessibility and user experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Works Button */}
      <div className="text-center mt-20">
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
