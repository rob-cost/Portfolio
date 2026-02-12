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
          A custom web application built for a professional audio engineer to
          streamline their mixing workflow by providing instant, AI-powered
          technical analysis of audio tracks. MixScope extracts key audio
          metrics and translates them into actionable mixing feedback, with
          optional reference track comparison.
        </p>
      </div>

      {/* Section 0: Specs */}
      <div>
        <div className="text-center space-y-2">
          <p>
            <strong>Role:</strong> Lead Developer (Solo Development)
          </p>
          <p>
            <strong>Client:</strong> Professional Audio Engineer (Private
            Commission)
          </p>
          <p>
            <strong>Duration:</strong> 2 months
          </p>
          <p>
            <strong>Collaborators:</strong> Xochilt Cojal (UI/UX Design), Yuval
            Muller (Audio Engineering Consultation)
          </p>
          <p>
            <strong>Tech Stack:</strong> Python, FastAPI, Librosa, PyLoudnorm,
            Pydub, NumPy, TypeScript, React, Groq API (GPT-OSS-120B), SlowAPI
          </p>
        </div>
      </div>

      {/* Section 1: The Problem */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">The Problem</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            My client, a professional audio engineer, needed a tool to speed up
            their mixing analysis workflow. While commercial solutions exist,
            they either provide too much raw data without interpretation, or
            generate generic feedback that doesn`t align with professional
            mixing standards.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The client wanted a custom solution that could:
          </p>
          <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300 space-y-1">
            <li>Quickly analyze uploaded audio files (up to 120MB)</li>
            <li>
              Extract professional-grade metrics (LUFS, stereo width, spectral
              balance)
            </li>
            <li>Generate feedback with specific technical recommendations</li>
            <li>Compare tracks against reference mixes</li>
            <li>Process results fast (under 30 seconds for typical tracks)</li>
          </ul>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            The goal was to create an internal tool that would serve as a
            first-pass analysis assistant, helping identify mix issues faster
            than manual evaluation.
          </p>
        </div>

        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/works-img/mixScope/mixScope.png"
            alt="MixScope Interface"
            className="object-cover object-center rounded-lg"
            fill
          />
        </div>
      </div>

      {/* Section 2: The Solution */}
      <div className="pt-20">
        <h2 className="text-3xl font-semibold mb-8 font-Ovo text-center">
          The Solution
        </h2>

        <p className="text-gray-500 mb-12 dark:text-gray-300 text-center max-w-3xl mx-auto">
          I built MixScope as a full-stack web application with a Python backend
          for audio processing and a React frontend for visualization and
          interaction.
        </p>

        {/* Audio Processing Pipeline */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3">
              Audio Processing Pipeline
            </h3>
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              The backend accepts MP3, WAV, OGG, and FLAC files up to 120MB.
              Using Pydub, files are converted to WAV format in-memory to ensure
              consistent processing. The system then extracts key features using
              Librosa and PyLoudnorm:
            </p>
            <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300 space-y-1">
              <li>
                <strong>Tempo features:</strong> BPM detection, beat tracking,
                tempo stability
              </li>
              <li>
                <strong>Loudness metrics:</strong> Integrated LUFS, RMS, true
                peak, crest factor, dynamic range
              </li>
              <li>
                <strong>Frequency spectrum:</strong> Energy distribution across
                6 bands (Sub, Bass, Low-mids, Mids, High-mids, Air)
              </li>
              <li>
                <strong>Stereo imaging:</strong> Stereo width score, per-band
                correlation, L/R balance, mid/side analysis
              </li>
              <li>
                <strong>Transient analysis:</strong> Conditional extraction for
                heavily compressed material (DR &lt; 8dB)
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 relative rounded-lg overflow-hidden mt-12">
            <Image
              src="/works-img/mixScope/mixScope-analysis.png"
              alt="Audio Analysis Pipeline"
              className="w-full h-auto object-contain object-center rounded-lg"
              width={800}
              height={800}
            />
          </div>
        </div>

        {/* AI-Powered Feedback */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3">
              AI-Powered Feedback Generation
            </h3>
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              Raw audio metrics are sent to the Groq API (GPT-OSS-120B model)
              with a carefully engineered prompt developed in collaboration with
              the client. The prompt enforces structured JSON output,
              professional terminology, genre-aware interpretation, and specific
              processing recommendations.
            </p>
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              The LLM generates comprehensive reports covering loudness/dynamics
              analysis, spectral balance, stereo imaging, identified
              strengths/weaknesses, actionable suggestions, and detailed
              processing recommendations like EQ frequencies and compression
              ratios.
            </p>
          </div>
          <div className="md:w-1/2 relative rounded-lg overflow-hidden">
            <Image
              src="/works-img/mixScope/mixScope-AIReport.png"
              alt="AI Report Generation"
              className="w-full h-auto object-contain rounded-lg"
              width={800}
              height={800}
            />
          </div>
        </div>

        {/* Asynchronous Processing & Security */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3">
              Asynchronous Processing & Security
            </h3>
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              I implemented async/await patterns with FastAPI`s
              asyncio.to_thread to handle CPU-bound audio analysis without
              blocking the server. For reference comparisons, both tracks are
              analyzed in parallel using asyncio.gather.
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              The backend includes production-ready security: rate limiting (5
              requests/minute via SlowAPI), CORS configuration, file size
              validation, MIME type checking, and comprehensive security
              headers.
            </p>
          </div>
          <div className="md:w-1/2 relative rounded-lg overflow-hidden">
            <Image
              src="/works-img/mixScope/mixScope-asynch.png"
              alt="Asynchronous I/O Implementation"
              className="w-full h-80 object-contain rounded-lg"
              width={400}
              height={500}
            />
          </div>
        </div>

        {/* Interactive Frontend */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3">Interactive Frontend</h3>
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              Working with the UI/UX designer, I built a React interface with a
              3-step upload workflow, tabbed analysis sections (Overview,
              Loudness & Dynamics, Stereo/Spectral, Suggestions, Reference
              Comparison), interactive metric cards with hover tooltips, and
              frequency spectrum visualization using Recharts with logarithmic
              scaling and smooth interpolation.
            </p>
          </div>
          <div className="md:w-1/2 relative rounded-lg overflow-hidden mt-12">
            <Image
              src="/works-img/mixScope/mixScope-upload.png"
              alt="MixScope Frontend Interface"
              className="w-full h-auto object-contain rounded-lg"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* Section 3: Technical Challenges */}
      <div className="pt-20">
        <h2 className="text-3xl font-semibold mb-12 font-Ovo text-center ">
          Technical Challenges
        </h2>

        {/* Performance Optimization */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3">
              Performance Optimization
            </h3>
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              The initial implementation was loading and resampling audio files
              multiple times for different analysis stages, resulting in 60+
              second processing times. I refactored the pipeline to:
            </p>
            <ul className="list-disc ml-5 text-gray-500 mb-4 dark:text-gray-300 space-y-1">
              <li>
                Load stereo and mono versions once at the original sample rate
              </li>
              <li>
                Share the onset envelope calculation across tempo and transient
                analysis
              </li>
              <li>
                Compute STFT operations only when necessary for stereo imaging
              </li>
              <li>
                Analyze only the center 120 seconds of longer tracks for
                transient detection (characteristics remain consistent in
                compressed material)
              </li>
            </ul>
            <p className="text-gray-500 dark:text-gray-300">
              Combined with async processing via asyncio.to_thread, this reduced
              average analysis time by approximately 30%, bringing typical
              tracks under 30 seconds.
            </p>
          </div>
          <div className="md:w-1/2 relative rounded-lg overflow-hidden">
            <Image
              src={"/works-img/mixScope/mixScope-analysisTempo.png"}
              alt="MixScope Technical Architecture"
              className="w-full h-auto object-contain rounded-lg"
              width={900}
              height={600}
            />
          </div>
        </div>

        {/* LLM Consistency & Accuracy */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3">
              LLM Consistency & Accuracy
            </h3>
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              Early LLM outputs were inconsistent, sometimes missing key
              analysis sections or using markdown formatting that broke the JSON
              parser. I solved this through strict JSON schema definition,
              explicit anti-markdown instructions, response validation with
              fallbacks, and iterative prompt refinement based on the client`s
              feedback on real tracks.
            </p>
          </div>
          <div className="md:w-1/2 relative rounded-lg overflow-hidden">
            <Image
              src={"/works-img/mixScope/mixScope-AIanalysis.png"}
              alt="MixScope Technical Architecture"
              className="w-full h-auto object-contain rounded-lg"
              width={900}
              height={600}
            />
          </div>
        </div>

        {/* Cross-Domain Translation */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3">
              Cross-Domain Translation
            </h3>
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              Translating audio engineering concepts into code was challenging.
              For example, implementing perceptual stereo width analysis
              required understanding how different frequency bands contribute to
              perceived width, then weighting them accordingly (Sub: 0.05, Bass:
              0.1, Low-mids: 0.25, Mids: 0.4, High-mids: 0.7, Air: 0.9). This
              required constant collaboration with the client.
            </p>
          </div>
          <div className="md:w-1/2 relative rounded-lg overflow-hidden">
            <Image
              src={"/works-img/mixScope/mixScope-subBands.png"}
              alt="MixScope Technical Architecture"
              className="w-full h-auto object-contain rounded-lg"
              width={900}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* Section 4: Results & Impact */}
      <div className="pt-20">
        <h2 className="text-3xl font-semibold mb-4 font-Ovo text-center">
          Results & Impact
        </h2>
        <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-3">Final Result</h3>
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              The final system processes typical 3-4 minute tracks in 20-30
              seconds, with reference comparisons adding minimal overhead thanks
              to parallel processing. This met the client`s requirement for a
              tool usable during active mixing sessions.
            </p>

            <p className="text-gray-500 mb-4 dark:text-gray-300">
              MixScope now provides accurate loudness measurements (LUFS),
              detailed stereo imaging analysis with per-band correlation,
              frequency balance assessment across 6 bands, and dynamic range
              evaluation, all with specific processing recommendations.
            </p>

            <p className="text-gray-500 mb-4 dark:text-gray-300">
              The tool is now an active part of the client`s production
              workflow, providing a second opinion backed by objective
              measurements that helps catch issues early and validates mixing
              decisions.
            </p>

            <p className="text-gray-500 mt-6 italic">
              This was a private commission, so the codebase is not publicly
              available. Contact me for more details about the technical
              implementation.
            </p>
          </div>
          <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
            <NextVideo src={video} className="object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Section 5: Lessons Learned */}
      <div className="pt-20">
        <h2 className="text-3xl font-semibold mb-4 font-Ovo text-center">
          Lessons Learned
        </h2>
        <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-500 mb-4 dark:text-gray-300">
              <strong>Client collaboration is essential.</strong> Working
              closely with the audio engineer throughout development helped me
              understand which metrics actually matter in professional mixing.
              Regular testing with real projects ensured practical utility, not
              just technical accuracy.
            </p>

            <p className="text-gray-500 mb-4 dark:text-gray-300">
              <strong>Optimization requires trade-offs.</strong> Not every audio
              feature needs extraction. Focusing on metrics that genuinely
              inform mixing decisions significantly improved performance.
            </p>

            <p className="text-gray-500 mb-4 dark:text-gray-300">
              <strong>LLM prompt engineering is an art.</strong> Getting
              consistent, high-quality output required as much work as the audio
              pipeline itself. I learned to be extremely specific about format,
              use examples, and iteratively refine based on failure cases.
            </p>

            <p className="text-gray-500 mb-4 dark:text-gray-300">
              <strong>Async processing matters.</strong> Moving CPU-bound
              operations to separate threads with asyncio.to_thread kept the API
              responsive. For reference comparisons, parallel processing nearly
              halved total processing time.
            </p>
          </div>

          <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/works-img/mixScope/mixScope-futureSteps.png"
              alt="MixScope Development Process"
              className="object-cover object-center rounded-lg mx-auto"
              fill
            />
          </div>
        </div>
      </div>

      {/* Section 6: Future Enhancements */}
      <div className="pt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Potential Future Enhancements{" "}
          </h2>
          <p className="text-gray-500 dark:text-gray-300">
            While MixScope currently meets the client`s workflow needs,
            potential improvements discussed include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Fine-Tuned LLM</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Training a custom model on professionally mixed tracks could
              provide even more accurate genre-specific feedback and better
              understand the nuances of different mixing styles.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Genre Profiles</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Implementing preset analysis profiles for different genres
              (electronic, rock, classical) could adjust evaluation criteria and
              recommendations based on style-specific standards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Analysis History</h3>
            <p className="text-gray-500 dark:text-gray-300">
              Adding user accounts and project tracking would allow engineers to
              see mix evolution over revisions and compare different versions of
              the same track.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Enhanced Visualizations
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              Expanding beyond frequency spectrum charts to include stereo field
              plots, loudness evolution graphs, and dynamic range meters could
              improve data comprehension.
            </p>
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
