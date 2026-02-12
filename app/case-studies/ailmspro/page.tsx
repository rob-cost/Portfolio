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
          A full-stack educational platform leveraging AI to generate
          personalized learning paths with adaptive difficulty assessment and
          real-time content generation.
        </p>
      </div>

      {/* Section 0: Specs */}
      <div>
        <div className="text-center">
          <p>
            <strong>Role:</strong> Full-Stack Developer
          </p>
          <p>
            <strong>Duration:</strong> 3 months
          </p>
          <p>
            <strong>Credits:</strong> Renish Bhaskaran (Backend Mentor)
          </p>
          <p>
            <strong>Tech-Stack:</strong> Python, Django, Celery, Redis,
            PostgreSQL, Docker, GCP, Groq API
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
            Designed and deployed a full-stack AI-powered educational platform
            that delivers personalized learning experiences across 15 subject
            areas. The platform intelligently assesses user knowledge levels and
            generates customized curriculum paths with dynamically created
            educational content.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc ml-5 text-gray-500 space-y-2 dark:text-gray-300">
            <li>Adaptive difficulty assessment using AI-generated quizzes</li>
            <li>Dynamic generation of 30 topics and 120 lessons per subject</li>
            <li>Real-time progress tracking and completion analytics</li>
            <li>Responsive UI with background task processing</li>
            <li>Secure user authentication and profile management</li>
          </ul>
        </div>
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/works-img/ailmspro/ailmspro_1.png"
            alt="AI Learning Platform Dashboard"
            height={400}
            width={800}
            className="object-cover object-center rounded-lg"
          />
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="flex flex-col md:flex-row pt-20 gap-8">
        <div className="md:w-1/2 flex flex-col gap-4">
          {[
            "/works-img/ailmspro/ailmspro_3.png",
            "/works-img/ailmspro/ailmspro_4.png",
          ].map((src, i) => (
            <div
              key={i}
              className="relative flex-1 h-60 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Platform Feature ${i + 1}`}
                height={400}
                width={800}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Technical Implementation
          </h2>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Architecture & Backend
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Built with Django for robust ORM capabilities, built-in
            authentication, and rapid development. Implemented a PostgreSQL
            database with optimized schema design featuring three core models:
            LearningProfile, Topic, and Lesson, with UserProgress tracking
            completion states.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            AI Integration & Content Generation
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Integrated Groq`s LLM API with structured output validation using
            Pydantic schemas. Engineered prompts to generate consistent,
            educational content including 10 assessment questions per subject
            and 4 comprehensive lessons per topic. Implemented markdown-to-HTML
            conversion for rich content display.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Asynchronous Processing
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Deployed Celery with Redis as a message broker to handle
            resource-intensive AI content generation asynchronously. This
            architecture prevents blocking operations, enabling users to
            navigate the platform while content generates in the background.
            Implemented polling mechanisms for real-time status updates.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Deployment & DevOps
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            Containerized the application using Docker with multi-stage builds
            for optimized production images. Deployed on Google Cloud Platform
            (GCP) with separate containers for Django, Celery workers, and
            Redis. Configured Gunicorn with Uvicorn workers for ASGI support and
            implemented CI/CD pipelines using GitHub Actions.
          </p>
        </div>
      </div>

      {/* Problem Solving & Challenges */}
      <div className="flex flex-col md:flex-row pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Problem Solving & Challenges
          </h2>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            1. LLM Output Consistency
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Challenge:</strong> Initial LLM responses were inconsistent,
            with formatting issues and invalid JSON structures causing parsing
            failures.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Solution:</strong> Implemented a robust validation pipeline
            using Pydantic models with strict JSON schema enforcement. Refined
            system prompts with explicit formatting rules, including JSON escape
            handling and markdown syntax guidelines. Added retry logic with
            exponential backoff for failed generations.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            2. User Experience During Long Operations
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Challenge:</strong> Content generation for 30 topics took
            more than a minute, creating poor UX.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Solution:</strong> Architected an asynchronous task queue
            system using Celery and Redis. Implemented background workers that
            process content generation while users continue browsing. Created
            real-time status polling with visual feedback (spinners, progress
            indicators) and graceful error handling with retry mechanisms.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            3. Cloud Deployment Complexity
          </h3>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Challenge:</strong> Deploying a multi-container architecture
            (Django, Celery, Redis) on GCP with proper networking, service
            communication, and external database integration.
          </p>
          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Solution:</strong> Used Neon.tech for managed PostgreSQL
            hosting with built-in SSL connections. Created a Virtual Private
            Cloud (VPC) on GCP and provisioned a Memorystore Redis instance for
            secure inter-service communication. Deployed on a GCP Compute Engine
            VM where I built Docker images for Django and Celery services,
            configured docker-compose for container orchestration, and managed
            environment variables for production. Implemented proper CSRF/CORS
            configurations and secured the deployment with environment-based
            settings.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          {[
            "/works-img/ailmspro/ailmspro_2.png",
            "/works-img/ailmspro/ailmspro-code.png",
          ].map((src, i) => (
            <div
              key={i}
              className="relative flex-1 h-60 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Platform Feature ${i + 1}`}
                height={400}
                width={800}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Results & Impact */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/works-img/ailmspro/ailmspro_7.png"
            alt="Platform Results"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Results & Impact
          </h2>

          <p className="text-gray-500 mb-4 dark:text-gray-300">
            <strong>Technical Learnings:</strong>
          </p>
          <ul className="list-disc ml-5 text-gray-500 space-y-2 mb-4 dark:text-gray-300">
            <li>
              Deepened expertise in Django ORM, migrations, and admin interface
            </li>
            <li>
              Gained hands-on experience with distributed task queues
              (Celery/Redis)
            </li>
            <li>Developed skills in prompt engineering and LLM integration</li>
            <li>
              Enhanced DevOps capabilities with Docker and cloud deployment
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 mb-2 dark:text-gray-300">
              <strong>View the project:</strong>
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/rob-cost/Learning-Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition"
              >
                GitHub Repository
              </a>
              <a
                href="https://ailmspro.roberto-costantino.com/"
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

      {/* Future Roadmap */}
      <div className="flex flex-col md:flex-row md:items-center pt-20 gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4 font-Ovo">
            Future Roadmap
          </h2>

          <h3 className="text-xl font-semibold mb-2 mt-6">
            Planned Enhancements
          </h3>
          <ul className="list-disc ml-5 text-gray-500 space-y-2 mb-6 dark:text-gray-300">
            <li>
              <strong>Multi-Subject Support:</strong> Enable users to pursue
              multiple learning paths simultaneously with cross-subject progress
              tracking
            </li>
            <li>
              <strong>Interactive Learning:</strong> Implement end-of-lesson
              quizzes with immediate feedback and adaptive difficulty
            </li>
            <li>
              <strong>AI Chat Assistant:</strong> Integrate real-time AI
              tutoring for concept clarification and personalized help
            </li>
            <li>
              <strong>Social Features:</strong> Add discussion forums, peer
              learning groups, and achievement badges for gamification
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/works-img/ailmspro/ailmspro-banner.png"
            alt="Future Development Roadmap"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mt-20">
        <h2 className="text-3xl font-semibold mb-6 font-Ovo text-center">
          Key Takeaways
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">System Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learned to architect scalable full-stack applications with
              separation of concerns, asynchronous processing, and cloud
              deployment practices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">AI Integration</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Developed expertise in working with LLMs, including prompt
              engineering, output validation, and handling responses in
              production.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Problem Solving</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enhanced ability to identify performance bottlenecks, implement
              optimization strategies, and balance technical constraints with
              user experience.
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
