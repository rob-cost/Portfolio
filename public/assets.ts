import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import react_icon from "./react_icon.png";
import angular_icon from "./angular_icon.png";
import javascript from "./javascript_icon.png";
import typescript from "./typescript_icon.png";
import tailwind from "./tailwind_icon.png";
import html from "./html_icon.png";
import aws from "./aws_icon.png";

export const assets = {
  html,
  aws,
  javascript,
  tailwind,
  typescript,
  react_icon,
  angular_icon,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

type Project = {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  slug: string;
};

export const projects: Project[] = [
  {
    title: "MixScope Audio Mix Analyzer",
    image: "/works-img/mixScope/mixScope.png",
    description:
      "A web application designed to analyze audio tracks, optionally compared against a reference track, and provide technical feedback to support audio engineers during the mixing phase.",
    techStack: ["Python", "FastAPI", "Groq", "Librosa", "TypeScript", "React"],
    githubUrl: "",
    liveDemoUrl: "",
    slug: "audio-mix-analyzer",
  },

  {
    title: "AI Learning Platform",
    image: "/works-img/ailearningplatform.png",
    description:
      "An intelligent, adaptive learning platform that generates personalized educational content using Large Language Models (LLMs)",
    techStack: ["Django", "Python", "Groq", "PostgreSQL", "Pydantic"],
    githubUrl: "https://github.com/rob-cost/Learning-Platform",
    liveDemoUrl: "https://ailmspro.roberto-costantino.com/",
    slug: "ailmspro",
  },
  {
    title: "Discogs Filter Enhancer",
    image: "/works-img/discogsFilter/discogsFilter.png",
    description:
      "A modular CLI application that extends Discogs' API with additional filtering logic not available in the platform, including single-style matching, rarity filtering, and automated result exporting.",
    techStack: ["Python", "Discogs API"],
    githubUrl: "",
    liveDemoUrl: "",
    slug: "discogs-filter-enhancer",
  },
  {
    title: "MealMind",
    image: "/meal-mind_outcome.png",
    description:
      "A recipes collection platform to search, add, and explore new recipes from around the world",
    techStack: [
      "Django",
      "Python",
      "SQLite",
      "Pandas",
      "Matplotlib",
      "Paginator",
    ],
    githubUrl: "https://github.com/rob-cost/recipe-app",
    liveDemoUrl: "https://recipes-discover-app-7480a557fb61.herokuapp.com/",
    slug: "meal-mind",
  },
  // {
  //   title: "RetroFlix",
  //   image: "/background-retroflix.png",
  //   description:
  //     "Retroflix is a full-stack movie app built with MERN stack that allows users to browse and manage movies with a responsive layout and backend integration",
  //   techStack: [
  //     "React",
  //     "JavaScript",
  //     "Bootstrap",
  //     "MongoDB",
  //     "Node.js",
  //     "Express.js",
  //   ],
  //   githubUrl: "https://github.com/rob-cost/CF-RetroFlix_Client",
  //   liveDemoUrl: "https://retroflixvintage.netlify.app",
  //   slug: "retroflix",
  // },

  // {
  //   title: "Meet-App",
  //   image: "/works-img/meetapp.png",
  //   description:
  //     "Meet App is a serverless, progressive web application (PWA) built with React that allows users to search for and discover upcoming events in cities around the world.",
  //   techStack: ["React", "Bootstrap", "AWS Lambda", "Google OAuth2"],
  //   githubUrl: "https://github.com/rob-cost/CF-meet",
  //   liveDemoUrl: "https://cf-meet-blue.vercel.app/",
  //   slug: "ailmspro",
  // },
  // {
  //   title: "Chat-App",
  //   image: "/works-img/chat-msg.png",
  //   description:
  //     "The Chat App is a cross-platform mobile application built using React Native and Expo. It allows users to chat in real-time room with additional multimedia functionality such as sharing images, taking photos, and sending location data. The app uses Firebase for authentication, cloud storage, and real-time database capabilities.",
  //   techStack: [
  //     "React Native",
  //     "Expo",
  //     "Firebase",
  //     "Gifted Chat",
  //     "Native Maps",
  //   ],
  //   githubUrl: "https://github.com/rob-cost/CF-ChatApp",
  //   liveDemoUrl: "https://github.com/rob-cost/CF-ChatApp",
  // },
  // {
  //   title: "Angular-RetroFlix",
  //   image: "/works-img/retroflix-angular.png",
  //   description:
  //     "RetroFlix_Angular is a single-page Angular application built with TypeScript and Angular Material. It connects to a custom-built Movie API that provides data on classic retro films.",
  //   techStack: ["Angular", "TypeScript", "Amgular-Material", "RxJS", "SCSS"],
  //   githubUrl: "https://github.com/rob-cost/CF-RetroFlix_Client_Angular",
  //   liveDemoUrl:
  //     "https://rob-cost.github.io/CF-RetroFlix_Client_Angular/welcome",
  // },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  {
    img: assets.react_icon,
    name: "React",
  },
  {
    img: assets.angular_icon,
    name: "Angular",
  },
  {
    img: assets.vscode,
    name: "VSCode",
  },
  {
    img: assets.javascript,
    name: "JavaScript",
  },
  {
    img: assets.html,
    name: "HTML5",
  },
  {
    img: assets.typescript,
    name: "TypeScript",
  },
  {
    img: assets.tailwind,
    name: "Tailwind",
  },
  {
    img: assets.firebase,
    name: "Firebase",
  },
  {
    img: assets.mongodb,
    name: "MongoDB",
  },
  {
    img: assets.aws,
    name: "AWS",
  },
];

export const toolsBadges = [
  {
    name: "Python",
    className:
      "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20",
  },
  {
    name: "JavaScript",
    className:
      "inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30",
  },
  {
    name: "TypeScript",
    className:
      "inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-sm font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20",
  },
  {
    name: "React",
    className:
      "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30",
  },
  {
    name: "Django",
    className:
      "inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/10 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/20",
  },
  {
    name: "FastAPI",
    className:
      "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-500 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-500/20",
  },
  {
    name: "NodeJS",
    className:
      "inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-500/20",
  },
  {
    name: "GCP",
    className:
      "inline-flex items-center rounded-md bg-cyan-50 px-2 py-1 text-sm font-medium text-cyan-700 ring-1 ring-inset ring-cyan-600/10 dark:bg-cyan-400/10 dark:text-cyan-400 dark:ring-cyan-400/20",
  },
  // {
  //   name: "AWS",
  //   className:
  //     "inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20",
  // },

  // {
  //   name: "Flask",
  //   className:
  //     "inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20",
  // },

  // {
  //   name: "NextJS",
  //   className:
  //     "inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30",
  // },
];
