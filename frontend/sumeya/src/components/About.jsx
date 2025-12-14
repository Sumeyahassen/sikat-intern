import { motion } from 'framer-motion';
import about from '../assets/images/about.png';
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-white">
              I'm a passionate full-stack & mobile app developer with a love for creating clean, efficient, and beautiful web applications.
              I enjoy turning ideas into reality using modern technologies like React, Node.js, and Tailwind CSS.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-white">
              When I'm not coding, you can find me exploring new tech, contributing to open-source projects, reading books,
              or enjoying outdoor activities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed dark:text-white">
              I'm always excited to work on new challenges and collaborate with creative people.
              Let's build something amazing together!
            </p>
          </motion.div>

          {/* Right: Optional extra image or stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <img
              src={about}  // Optional: add a second photo (e.g., working at desk)
              alt="About Me"
              className="rounded-lg shadow-2xl mx-auto max-w-full h-auto"
            />
            {/* If you don't have a second image, you can comment out the img tag */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;