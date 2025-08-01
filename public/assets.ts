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
};

export const projects: Project[] = [
  {
    title: "RetroFlix",
    image: "/works-img/retroflix-mainpage.png",
    description:
      "Retroflix is a movie database web app connected to an API developed by me. Users can create accounts, browse movie info, and manage favorites. I focused on clean UI, responsive layout, and backend integration",
    techStack: [
      "React",
      "JavaScript",
      "Bootstrap",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    githubUrl: "https://github.com/rob-cost/CF-RetroFlix_Client",
    liveDemoUrl: "https://retroflixvintage.netlify.app",
  },
  {
    title: "Meet-App",
    image: "/works-img/meetapp.png",
    description:
      "Meet App is a serverless, progressive web application (PWA) built with React that allows users to search for and discover upcoming events in cities around the world. The application leverages the Google Calendar API to fetch real-time event data and provides interactive data visualizations to help users analyze event trends and patterns. Built with a Test-Driven Development (TDD) approach, Meet App leverages AWS Lambda for serverless backend logic and Google OAuth2 for secure user authentication. ",
    techStack: ["React", "Bootstrap", "AWS Lambda", "Google OAuth2"],
    githubUrl: "https://github.com/rob-cost/CF-meet",
    liveDemoUrl: "https://cf-meet-blue.vercel.app/",
  },
  {
    title: "Pokedex",
    image: "/works-img/pokedex.png",
    description:
      "The Pokedex App is a small app that allows you to look up information about a specific Pokémon. It fetches data directly from the Poke API and includes a searching feature.",
    techStack: ["JavaScript", "HTML5", "Bootstrap", "CSS"],
    githubUrl: "https://github.com/rob-cost/pokedex",
    liveDemoUrl: "https://rob-cost.github.io/pokedex/",
  },
  {
    title: "Chat-App",
    image: "/works-img/chat-msg.png",
    description:
      "The Chat App is a cross-platform mobile application built using React Native and Expo. It allows users to chat in real-time room with additional multimedia functionality such as sharing images, taking photos, and sending location data. The app uses Firebase for authentication, cloud storage, and real-time database capabilities.",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "Gifted Chat",
      "Native Maps",
    ],
    githubUrl: "https://github.com/rob-cost/CF-ChatApp",
    liveDemoUrl: "https://github.com/rob-cost/CF-ChatApp",
  },
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
