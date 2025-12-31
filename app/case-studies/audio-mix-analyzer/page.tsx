"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AudioMixAnalyserCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[12%] py-10 mx-auto space-y-16 pt-36"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-Ovo font-bold">Audio Mix Analyser</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto dark:text-gray-300">
          Audio Mix Analyzer is a web application designed to analyze music
          tracks, optionally compared against a reference track, and provide
          technical feedback to support audio engineers during the mixing phase.
          Originally developed as a freelance project, it evolved into an open
          web application accessible to a whoever needs an expert-level mixing
          guidance.
        </p>
      </div>

      {/* Section 0: Specs */}
      <div>
        <div className="text-center">
          <p>
            <strong>Role:</strong> Lead Developer
          </p>
          <p>
            <strong>Duration:</strong> 3 months
          </p>
          <p>
            <strong>Team:</strong> Xochilt Cojal (Graphic Designer), Yuval
            Miller (Audio Engineer)
          </p>

          <p>
            <strong>Tech-Stack:</strong> Python, Librosa, TypeScript, React,
            Groq
          </p>
        </div>
      </div>

      {/* Section 1: The Overview */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Overview</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The goal of the project was to create a tool that goes beyond basic
            audio metrics and delivers actionable, engineer-oriented feedback.
            Audio Mix Analyzer focuses on providing insights that are actually
            useful in a professional mixing context. The application processes
            uploaded audio files, extracts advanced audio features, and
            translates this data into structured, technical feedback using a
            LLM. This allows users to quickly identify weaknesses in areas such
            as loudness, dynamics, stereo image, frequency spectrum, either
            standalone or relative to a reference track.
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
            To build the application, I first focused on defining the core
            analysis goals and identifying which audio features would be
            genuinely useful in a professional mixing context. Based on this, I
            designed an initial MVP centered on single-track analysis, with
            optional reference-track comparison.
            <br />
            I started by developing the backend in Python, using NumPy, Librosa
            and other audio libraries, to extract relevant audio features from
            uploaded tracks. The initial implementation focused on analyzing
            stereo imaging, loudness, dynamics, and spectral balance across
            different frequency ranges.
            <br />
            Once reliable audio features were available, I integrated an LLM to
            convert the extracted data into structured, human-readable feedback.
            I worked closely with a professional audio engineer to design a
            prompt that enforced technical language, clear structure, and
            practical processing recommendations (e.g. EQ, compression, stereo
            adjustments). After validating the analytical accuracy, I focused on
            performance, refining the audio analysis pipeline and improving
            overall responsiveness.
            <br />
            Finally, I ensured that the system consistently returned clear,
            technically relevant feedback suitable for real-world mixing
            workflows.
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
            One of the main challenges was backend performance. The initial
            audio analysis process required multiple sampling of the same audio
            track, resulting in long and heavy CPU processing often exceeding
            one minute per track.
            <br />
            Another challenge was balancing speed and accuracy. Reducing
            computation time without compromising the quality of extracted audio
            features required reconstruct the audio pipeline and a deeper
            evaluation of which data was strictly necessary for meaningful
            feedback.
            <br />
            Also generating reliable LLM output was quiet challenging. Early
            iterations produced feedback that was sometimes too generic or
            inconsistent. This required prompt refinement and tighter
            constraints on how the model interpreted the extracted audio
            features.
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
            src="/meal-mind_outcome_2.png"
            alt="MealMind Outcome"
            className="object-cover object-center rounded-lg"
            fill
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Outcome</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            To address performance issues, I redesigned the audio analysis
            pipeline to minimize redundant processing and limit computations to
            essential features only. I also implemented asynchronous processing,
            allowing multiple analysis tasks to run in parallel and improving
            overall system responsiveness. These optimizations reduced the
            average analysis time by approximately 50%, while maintaining
            analytical accuracy.
            <br />
            On the feedback side, refining the prompt in collaboration with an
            audio engineer significantly improved the quality and consistency of
            the generated responses.
            <br />
            The final system provides detailed insights into stereo image,
            loudness, dynamics, and spectral balance, along with concrete
            suggestions on how to improve the mix.
            <br />
            The Audio Mix Analyzer is now a powerful tool available to anyone
            who needs it, with the goal of simplifying the daily workflow of
            music producers and audio engineers.
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
            <strong>Future improvements:</strong> I plan to enhance this project
            with additional features, including:
          </p>
          <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300">
            <li>
              Training or fine-tuning an LLM on a broader collection of
              professionally mixed and mastered tracks, in order to provide more
              realistic and context-aware feedback.
            </li>
            <li>
              Implementing genre-specific audio analysis, allowing the system to
              adapt feedback based on musical style.
            </li>
            <li>Introducing user profiles to store and track past analyses.</li>
            <li>
              Adding visual representations of the frequency spectrum, improving
              clarity and interpretability of the analysis.
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/meal-mind_futuresteps.png"
            alt="MealMind Future Steps"
            className="object-cover object-center rounded-lg mx-auto"
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
