import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiGit, SiHtml5, SiCss3, SiMongodb, SiFirebase ,SiFlutter,      // New: Flutter icon
  SiPython,
  SiPostgresql,SiExpress, SiSqlite} from 'react-icons/si';

const skills = [
  { name: 'React', level: 90, icon: <SiReact className="text-4xl text-cyan-500" /> },
  { name: 'JavaScript', level: 85, icon: <SiJavascript className="text-4xl text-yellow-400" /> },
  { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
  { name: 'Flutter', level: 90, icon: <SiFlutter className="text-4xl text-blue-500" /> },
  { name: 'Node.js', level: 80, icon: <SiNodedotjs className="text-4xl text-green-600" /> },
  { name: 'Express.js', level: 85, icon: <SiExpress className="text-4xl text-gray-800" /> },
  { name: 'Python', level: 85, icon: <SiPython className="text-4xl text-yellow-500" /> },
  { name: 'PostgreSQL', level: 80, icon: <SiPostgresql className="text-4xl text-blue-600" /> },
  { name: 'SQLite', level: 80, icon: <SiSqlite className="text-4xl text-blue-500" /> },
  { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-4xl text-green-500" /> },
  { name: 'Firebase', level: 70, icon: <SiFirebase className="text-4xl text-yellow-500" /> },
  { name: 'Git & GitHub', level: 85, icon: <SiGit className="text-4xl text-orange-600" /> },
  { name: 'HTML5', level: 95, icon: <SiHtml5 className="text-4xl text-orange-500" /> },
  { name: 'CSS3', level: 90, icon: <SiCss3 className="text-4xl text-blue-600" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                />
              </div>
              <span className="text-sm text-gray-600 mt-2 block">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;