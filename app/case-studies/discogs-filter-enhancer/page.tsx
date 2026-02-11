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
          A Python application that extends the Discogs API by adding advanced
          filtering capabilities for electronic music releases. Users can search
          vinyl records and refine results using custom rules such as strict
          style matching, rarity thresholds (have/want counts), country, and
          year ranges. The tool normalizes API data, validates user input, and
          exports results into HTML files. This project demonstrates API
          integration, data validation and modular architecture.
        </p>
      </div>

      {/* Section 0: Specs */}
      <div>
        <div className="text-center">
          <p>
            <strong>Role:</strong> Fullstack Developer
          </p>
          <p>
            <strong>Duration:</strong> 1 week
          </p>
          <p>
            <strong>Tech-Stack:</strong> Python, Discogs API
          </p>
        </div>
      </div>

      {/* Section 1: The Overview */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Overview</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            As an electronic music enthusiast, I often use Discogs to discover
            new releases. While the platform is powerful, advanced searches can
            require a lot of manual filtering, and some combinations of criteria
            are not supported by the built-in tools. To solve this, I built a
            command-line application that adds an extra layer of filtering on
            top of the Discogs REST API using the python3-discogs-client
            library.
            <br />
            The tool allows users to search for vinyl releases by style,
            country, and year, and then apply additional constraints such as
            community demand (“want”), ownership (“have”), and strict or
            flexible style matching. The resulting releases are automatically
            exported to an HTML file, where each URL can be opened directly in
            the browser.
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

      {/* Section 2: The Problem & The Solution */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        {/* Image */}
        <div className="relative flex-1 rounded-lg overflow-hidden">
          <Image
            src={"/works-img/discogsFilter/discogsFilter-filterList.png"}
            alt="discogs-filter-enhancer_filterList"
            className="object-contain rounded-lg"
            width={800}
            height={600}
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            The Problem & The Solution
          </h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Discogs provides a large database but makes it difficult to:
            <br />
            - Find releases with very specific style combinations and so apply
            the search to only a specific style within a genre.
            <br />
            - Discover records that are not heavily owned or wanted by the
            community, which can be an indicator of rarity.
            <br />- Apply multiple constraints at once.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            I developed a CLI application that:
            <br /> - Collects user input.
            <br /> - Validates it against known Discogs values.
            <br /> - Performs API searches.
            <br /> - Fetches additional release data.
            <br /> - Applies custom filtering logic.
            <br /> - Outputs URLs both in terminal and in a reusable file.
          </p>
        </div>
      </div>

      {/* Section 3: The Outcome */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Outcome</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The tool significantly reduces discovery time and allows collectors
            to quickly identify rare or niche releases. It transformed a manual
            browsing process into an automated workflow.
          </p>
          <p className="text-gray-500">View the app here:</p>
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://github.com/rob-cost/Discogs-Finder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-500"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <NextVideo src={video} className="object-cover rounded-lg" />
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
