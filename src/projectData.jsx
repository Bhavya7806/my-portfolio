// src/projectData.js

// Import images
import blogMain from './assets/blog-main.jpg';
import blogDash from './assets/blog-dash.png';
import tripMain from './assets/trip-main.jpg';
import tripPlan from './assets/trip-plan.jpg';
import tripAdventures from './assets/trip-adventures.jpg';
import guruMain from './assets/guru-main.png';
import guruDash from './assets/guru-dash.jpg';
import guruBudget from './assets/guru-budget.jpg';
import sortMain from './assets/sort-main.jpg';
import sortVisualizer from './assets/sort-visualizer.png';
import sortExplanation from './assets/sort-explanation.png';

// Import icons (we'll use these in the detail page)
import { 
  FaReact, FaNodeJs, FaCss3Alt, FaGithub,FaBolt,FaChartBar,FaRoute, FaCode
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiVercel, 
  SiAxios, SiRender, SiFirebase, SiPython, SiFlask, 
  SiPandas ,SiThreedotjs
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export const projectData = [
  {
    id: 'personal-blog',
    mainImage: blogMain,
    title: 'Personal Blog Website',
    brief: 'A personal blogging platform with AI-powered blog writing, allowing users to create, publish, and filter posts.',
    techSimple: 'MongoDB, React.js, Node.js',
    liveLink: 'https://personal-blog-olive-one-70.vercel.app/',
    githubLink: 'https://github.com/Bhavya7806/Personal-Blog',
    overview: 'A full-stack personal blogging platform where users can write, edit, and publish their thoughts. This project features AI-powered content generation to assist with writing, and blogs can be filtered by category. It demonstrates a complete MERN stack application with secure user authentication.',
    techStack: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Vercel', icon: <SiVercel /> },
    ],
    features: [
      'User-friendly website with full CRUD functionality for posts.',
      'AI-powered blog generation to assist writers.',
      'Dynamic filtering of blogs based on categories.',
    ],
    gallery: [blogDash],
  },
  {
    id: 'trip-planner',
    mainImage: tripMain,
    title: 'AI-Powered Itinerary Planner',
    brief: 'Instantly create detailed travel itineraries based on your destination, budget, and dates. Our smart planner finds real attractions, suggests transport, and saves your trips.',
    techSimple: 'React.js, Node.js, MongoDB, Geoapify API',
    liveLink: 'https://trip-planner-v2-theta.vercel.app',
    githubLink: 'https://github.com/Bhavya7806/trip-planner-v2',
    overview: "TripPlanner is a full-stack MERN application that simplifies vacation planning. Users provide a destination, budget, and travel dates, and the app's Node.js backend uses the Geoapify API to generate a detailed, day-by-day itinerary filled with real-world attractions. The app features a complete, secure authentication system using JWT for email/password and Passport.js for Google Sign-in. Once logged in, users can view all their saved trips on a 'My Trips' page, with features to filter by destination, sort by price or date, and delete plans. The React frontend is deployed on Vercel and the backend on Render.",
    techStack: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Axios', icon: <SiAxios /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Geoapify API', icon: <TbApi /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Render', icon: <SiRender /> },
    ],
    features: [
      'Smart Itinerary Generation: Instantly creates daily plans from your destination, dates, and budget.',
      'Full User Authentication: Secure login with either Email/Password or Google Sign-in.',
      'Personal Trip Dashboard: A "My Trips" page to view, filter, sort, and delete all your saved plans.',
    ],
    gallery: [tripPlan, tripAdventures],
  },
  {
    id: 'financial-guru',
    mainImage: guruMain,
    title: 'Financial-Guru',
    brief: 'Your personal finance dashboard. Track expenses, manage budgets, and achieve your financial goals with smart, AI-powered insights and recommendations.',
    techSimple: 'React.js, Node.js, Firebase, Python/Flask',
    liveLink: 'https://financial-guru-app.vercel.app/',
    githubLink: 'https://github.com/Bhavya7806/financial-guru-app',
    overview: "Take control of your finances with Financial Guru, your personal AI-powered dashboard. After a simple onboarding flow, you can track daily expenses, manage dynamic budgets based on your real income, and set personal goals with AI-driven recommendations. The app features a sleek, animated dark-violet theme with interactive charts (Recharts) and animations (GSAP) to visualize your spending. A 'Spending Timeline' analyzes your habits, while a full-stack backend (Node.js, Python, Firebase) ensures all your data is secure and isolated. This project is fully deployed on Vercel and Render, demonstrating a complete, production-ready MERN application with a separate ML microservice.",
    techStack: [
      { name: 'React', icon: <FaReact /> },
      { name: 'GSAP', icon: <FaBolt /> },
      { name: 'Recharts', icon: <FaChartBar /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Render', icon: <SiRender /> },
    ],
    features: [
      'Full-stack MERN app using React, Node.js, and Firebase for secure, user-specific financial tracking.',
      'Dynamic dashboard where users manage budgets, track expenses, and set goals based on personalized onboarding data.',
      'AI microservice (Python/Flask) analyzes spending data to provide real-time insights, like the "Spending Timeline."',
    ],
    gallery: [guruDash, guruBudget],
  },
  // Add more projects here in the future
  {
    id: 'sort-learner',
    mainImage: sortMain,
    title: 'SortLearner',
    brief: 'Master sorting algorithms visually with SortLearner. Our site provides interactive bar charts, step-by-step explanations, and Java code for Bubble, Quick, Heap, and Merge Sort.',
    techSimple: 'React.js, Recharts, Prism React Renderer',
    liveLink: 'https://sort-learner.vercel.app/',
    githubLink: 'https://github.com/Bhavya7806/SortLearner',
    overview: "SortLearner is an interactive web platform built with React and Vite, designed to help you master fundamental computer science algorithms. Dive into Bubble, Insertion, Selection, Merge, Quick, and Heap Sort with dynamic bar chart visualizations powered by Recharts. Input your own numbers, choose an order, and watch the sort happen in real-time. Use the play, pause, and speed controls to follow the step-by-step explanation log that breaks down every comparison and swap. Alongside the animation, you'll find clean, ready-to-use Java code for each algorithm, making this the perfect tool for students and developers.",
    techStack: [
      { name: 'React', icon: <FaReact /> },
      { name: 'React Router', icon: <FaRoute /> },
      { name: 'Recharts', icon: <FaChartBar /> },
      { name: 'Prism Renderer', icon: <FaCode /> },
      { name: 'Three.js', icon: <SiThreedotjs /> },
      { name: 'Vercel', icon: <SiVercel /> },
    ],
    features: [
      'Watch sorting algorithms animate in real-time with interactive bar charts.',
      'Follow a detailed, step-by-step log explaining every comparison and swap.',
      'Get clean, ready-to-use Java code for every algorithm, complete with syntax highlighting.',
    ],
    gallery: [sortVisualizer, sortExplanation],
  }
];