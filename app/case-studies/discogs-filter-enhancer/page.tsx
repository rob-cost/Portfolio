"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import NextVideo from "next-video";
import video from "@/videos/discogsFilter-video.mp4";

export default function DiscogsFilterEnhancerCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[12%] py-10 mx-auto space-y-16 pt-36"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-Ovo font-bold">Discogs Filter Enhancer</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto dark:text-gray-300">
          A command-line tool that extends the Discogs API with advanced
          filtering capabilities for vinyl collectors. The application enables
          precision searches using custom validation logic, rarity metrics, and
          flexible style matching features not available in the standard Discogs
          interface.
        </p>
      </div>

      {/* Section 0: Specs */}
      <div>
        <div className="text-center space-y-2">
          <p>
            <strong>Role:</strong> Developer
          </p>
          <p>
            <strong>Duration:</strong> 1 week
          </p>
          <p>
            <strong>Tech Stack:</strong> Python, Discogs API,
            python3-discogs-client
          </p>
        </div>
      </div>

      {/* Section 1: The Challenge */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            The Challenge
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            While Discogs provides comprehensive music data, its search
            interface lacks granular filtering for specialized use cases. Vinyl
            collectors seeking undervalued releases face several limitations:
          </p>
          <ul className="text-gray-500 mb-4 dark:text-gray-300 space-y-2">
            <li>
              • No ability to filter by community engagement metrics (want/have
              ratios)
            </li>
            <li>
              • Limited style matching (cannot enforce exact style combinations)
            </li>
            <li>• Time-consuming manual filtering across multiple criteria</li>
          </ul>
          <p className="text-gray-500 dark:text-gray-300">
            The goal was to build a tool that leverages the Discogs API while
            adding a custom filtering layer to address these gaps.
          </p>
        </div>

        <div className="md:w-1/2 relative w-full h-auto rounded-lg overflow-hidden">
          <Image
            src="/works-img/discogsFilter/discogsFilterLogo.png"
            alt="Discogs Filter Enhancer Overview"
            className="object-contain rounded-lg"
            width={800}
            height={600}
          />
        </div>
      </div>

      {/* Section 2: Technical Implementation */}
      <div className="flex flex-col md:flex-row-reverse md:items-center pt-20 gap-8">
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Technical Implementation
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Architecture & Design Patterns:</strong>
          </p>
          <ul className="text-gray-500 mb-4 dark:text-gray-300 space-y-2">
            <li>
              • Modular separation of concerns (data, input validation,
              utilities)
            </li>
            <li>
              • Input validation layer with custom validators for strings,
              integers, years, and booleans
            </li>
            <li>
              • Dynamic query building using conditional parameter injection
            </li>
            <li>
              • Error handling with try-except blocks at critical API
              interaction points
            </li>
          </ul>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Key Technical Features:</strong>
          </p>
          <ul className="text-gray-500 mb-4 dark:text-gray-300 space-y-2">
            <li>
              • <strong>Input Validation:</strong> Custom validators ensure data
              integrity before API calls, with list-based validation against
              predefined country and style lists
            </li>
            <li>
              • <strong>Flexible Style Matching:</strong> Implemented both
              strict (exact match) and inclusive (subset) style filtering using
              set operations. Not possible through Discogs` native search
              parameters
            </li>
            <li>
              • <strong>Rarity Filtering:</strong> Post-API filtering based on
              community want/have thresholds to identify undervalued releases
            </li>
            <li>
              • <strong>Data Normalization:</strong> Consistent lowercase
              transformation and list handling for comparison operations
            </li>
            <li>
              • <strong>HTML Export:</strong> Automated generation of clickable
              HTML files with search parameters and results for easy reference
            </li>
          </ul>
        </div>
        {/* Image */}
        <div className="relative flex-1 w-full h-auto rounded-lg overflow-hidden">
          <Image
            src={"/works-img/discogsFilter/discogsFilter-filterList.png"}
            alt="discogs-filter-enhancer_filterList"
            className="object-contain rounded-lg"
            width={1000}
            height={800}
          />
        </div>
      </div>

      {/* Section 3: Problem-Solving Approach */}
      <div className="pt-20">
        <h2 className="text-3xl font-semibold mb-4 font-Ovo text-center">
          Problem-Solving & Decisions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold font-Ovo">
              Error Handling & API Efficiency
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              Implemented comprehensive error handling at all API interaction
              points to gracefully manage failures during release fetching.
              Optimized API usage by extracting release IDs first, then fetching
              detailed metadata only for filtered results.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold font-Ovo">Data Consistency</h3>
            <p className="text-gray-500 dark:text-gray-300">
              The Discogs API returns inconsistent data types (single values vs.
              lists). Solved this by normalizing all style data to lists before
              comparison, ensuring reliable filtering logic.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold font-Ovo">User Experience</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Created an interactive CLI with clear prompts and validation
              feedback. Invalid inputs trigger helpful error messages
              referencing valid options, reducing user frustration.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold font-Ovo">Scalability</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Structured the codebase with modular architecture, separating
              concerns into distinct modules for easier maintenance and future
              enhancements.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Results & Impact */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Results & Impact
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Outcomes:</strong>
          </p>
          <ul className="text-gray-500 mb-4 dark:text-gray-300 space-y-2">
            <li>
              • Reduced search time from ~30 minutes of manual filtering to ~5
              minutes (depending on result volume)
            </li>
            <li>
              • Enabled discovery of undervalued releases (low want/have counts)
              that don`t surface in standard searches
            </li>
            <li>
              • Generated reusable HTML exports for tracking searches over time
            </li>
          </ul>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Technical Learnings:</strong>
          </p>
          <ul className="text-gray-500 mb-4 dark:text-gray-300 space-y-2">
            <li>
              • Gained experience with REST API integration and authentication
              patterns
            </li>
            <li>
              • Practiced defensive programming through comprehensive input
              validation
            </li>
            <li>
              • Improved understanding of modular Python architecture and
              separation of concerns
            </li>
            <li>
              • Learned to handle inconsistent API responses with normalization
              strategies
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 mb-2 dark:text-gray-300">
              <strong>View the project:</strong>
            </p>
            <div className="flex items-center gap-6 mt-4">
              <a
                href="https://github.com/rob-cost/Discogs-Finder"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative w-full h-auto rounded-lg overflow-hidden">
          <NextVideo src={video} className="object-contain rounded-lg" />
        </div>
      </div>

      {/* Section 5: Future Enhancements */}
      <div className="pt-20 text-center">
        <h2 className="text-3xl font-semibold mb-4 font-Ovo text-center">
          Future Enhancements
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="text-gray-500 dark:text-gray-300 space-y-3">
            <li>
              • <strong>GUI Implementation:</strong> Build a web interface for
              broader accessibility
            </li>
            <li>
              • <strong>Automated Alerts:</strong> Implement email notifications
              when new releases match saved search criteria
            </li>
            <li>
              • <strong>Multi-Genre Support:</strong> Extend beyond electronic
              music to jazz, hip-hop, and other genres
            </li>
          </ul>
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
