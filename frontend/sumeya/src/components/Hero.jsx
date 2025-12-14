import { motion } from 'framer-motion';
import sumeya from '../assets/images/sumeya.png';
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm Sumeya Hassen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8"
        >
          Full Stack Developer | Mobile App Developer | IOT Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src={sumeya}
            alt="Your Name"
            className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;