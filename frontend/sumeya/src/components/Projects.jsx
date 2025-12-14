import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import lider from '../assets/images/ethiopian-leaders.png';
const mobileProjects = [
  {
    title: "Ethiopian Leaders App",
    description: "A beautiful Flutter mobile app showcasing Ethiopian leaders with detailed biographies, images, and achievements.",
    techStack: ["Flutter", "Dart", "SQLite"],
    image: {lider},  // Replace with your screenshot
    liveLink: "",  // e.g., Play Store link or APK
    githubLink: "https://github.com/yourusername/ethiopian-leaders",
  },
  {
    title: "Ramadan Nasheeds Player",
    description: "Flutter app for playing Islamic nasheeds and anasheed during Ramadan with offline support and beautiful UI.",
    techStack: ["Flutter", "Provider", "Audio Players"],
    image: "/images/ramadan-nasheeds.jpg",
    liveLink: "",
    githubLink: "https://github.com/yourusername/ramadan-nasheeds",
  },
  {
    title: "Personal Diary App",
    description: "Secure and private diary mobile application built with Flutter and local encrypted storage.",
    techStack: ["Flutter", "SQLite", "Hive"],
    image: "/images/diary-app.jpg",
    liveLink: "",
    githubLink: "https://github.com/yourusername/diary-app",
  },
  // Add more Flutter/mobile projects here
];

const webBackendProjects = [
  {
    title: "Todo REST API",
    description: "Full-featured RESTful backend API for task management using Node.js, Express, and database integration.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "SQLite", "JWT"],
    image: "/images/todo-api.jpg",
    liveLink: "",  // If deployed (e.g., Render, Vercel)
    githubLink: "https://github.com/yourusername/todo-api",
  },
  {
    title: "This Portfolio Website",
    description: "Modern responsive portfolio built with React, Vite, Tailwind CSS, and smooth animations.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "/images/portfolio.jpg",  // Screenshot of your own site!
    liveLink: "https://your-portfolio-link.com",  // The live URL after deployment
    githubLink: "https://github.com/yourusername/portfolio",
  },
   {
    title: "This Portfolio Website",
    description: "Modern responsive portfolio built with React, Vite, Tailwind CSS, and smooth animations.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "/images/portfolio.jpg",  // Screenshot of your own site!
    liveLink: "https://your-portfolio-link.com",  // The live URL after deployment
    githubLink: "https://github.com/yourusername/portfolio",
  },
  // Add more web/backend projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Mobile Apps Section */}
        <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center dark:text-white">
          Mobile Applications (Flutter)
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {mobileProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>

        {/* Web & Backend Section */}
        <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center dark:text-white">
          Web & Backend Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {webBackendProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;