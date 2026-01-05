"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import NextVideo from "next-video";
import video from "@/videos/mixScope-video.mp4";

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
        <h1 className="text-5xl font-Ovo font-bold">
          MixScope | Audio Mix Analyzer
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto dark:text-gray-300">
          MixScope is a web application designed to analyze audio tracks,
          optionally compared against a reference track, and provide technical
          feedback to support audio engineers during the mixing phase. The
          project was developed for a private individual and is currently used
          as an internal tool to deliver fast, reliable, and expert-level mix
          analysis.
        </p>
      </div>

      {/* Section 0: Specs */}
      <div>
        <div className="text-center">
          <p>
            <strong>Role:</strong> Lead Developer
          </p>
          <p>
            <strong>Duration:</strong> 2 months
          </p>
          <p>
            <strong>Team:</strong> Roberto Costantino (Lead Developer) Xochilt
            Cojal (Graphic Designer), Yuval Muller (Audio Engineer)
          </p>

          <p>
            <strong>Tech-Stack:</strong> Python, FastAPI, Librosa, TypeScript,
            React, Groq
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
            MixScope focuses on providing insights that are actually useful in a
            professional mixing context. The application processes uploaded
            audio files, extracts advanced audio features, and translates this
            data into structured, technical feedback using an LLM. This enables
            the client to quickly identify weaknesses in areas such as loudness,
            dynamics, stereo image, and spectral balance—either as a standalone
            analysis or in comparison with a reference track.
          </p>
        </div>

        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/works-img/mixScope/mixScope.png"
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
          {[
            "/works-img/mixScope/mixScope-analysisTempo.png",
            "/works-img/mixScope/mixScope-figma.png",
          ].map((src, i) => (
            <div
              key={i}
              className="relative flex-1 h-60 rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt="mixScope_pipeline"
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
            To build the application, I began by defining the core analysis
            objectives together with the client and the audio engineer,
            identifying which audio features the client expected to extract from
            the analysis. Based on these requirements, I designed the initial
            MVP architecture.
            <br />
            I developed the backend in Python, using NumPy, Librosa, and other
            audio-processing libraries to extract audio features from uploaded
            tracks. From the beginning, I focused on keeping the processing
            pipeline efficient by limiting computation to essential and
            meaningful features only. Throughout this phase, I worked in close
            collaboration with the audio engineer, continuously validating the
            extracted data and refining the analysis pipeline to ensure both
            technical accuracy and practical usefulness for mix evaluation.
            <br />
            Once reliable audio features were available, I integrated an LLM to
            convert the extracted data into structured, professional feedback.
            In this phase as well, I worked closely with the audio engineer to
            design and refine a prompt that enforced technical language, clear
            structure, and actionable processing recommendations, such as EQ,
            compression, and stereo adjustments.
            <br />
            In parallel, I collaborated closely with the graphic designer to
            improve the UI/UX, aligning the visual design and interaction
            patterns with the client’s expectations. This process ensured that
            the information was presented in a clear, intuitive, and efficient
            way.
            <br />
            After validating both analytical accuracy and usability, I focused
            on performance optimization, refining the audio analysis pipeline
            and improving overall system responsiveness to meet the client’s
            requirements for speed and reliability.
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
          <div className="relative flex-1 h-60 rounded-lg overflow-hidden">
            <Image
              src={"/works-img/mixScope/mixScope-challenges.png"}
              alt="meal-mind_approach"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        </div>
      </div>

      {/* Section 4: The Outcome */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <NextVideo src={video} className="object-cover rounded-lg" />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Outcome</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            To address performance issues, I redesigned the audio analysis
            pipeline to minimize redundant processing and limit computations to
            essential features only. I also implemented asynchronous processing,
            allowing multiple analysis tasks to run in parallel and improving
            overall system responsiveness. These optimizations reduced the
            average analysis time by approximately ~30%, while being accurate.
            <br />
            On the feedback side, refining the prompt in close collaboration
            with the audio engineer greatly improved the quality, consistency,
            and technical reliability of the generated responses. The final
            system provides detailed insights into stereo image, loudness,
            dynamics, and spectral balance, along with concrete suggestions on
            how to improve a mix.
            <br />
            MixScope is now a robust tool designed to simplify the daily
            workflow of music producers and audio engineers by delivering fast,
            reliable, and professional mix feedback.
          </p>
          <p className="text-gray-500">
            Contact me for more information about the App and code.
          </p>
        </div>
      </div>

      {/* Section 5: Future Steps */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">Future Steps</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Future improvements:</strong> Potential future improvements
            for the project include:
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
            src="/works-img/mixScope/mixScope-futureSteps.png"
            alt="MixScope Future Steps"
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
