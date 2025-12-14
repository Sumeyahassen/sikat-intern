import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-6">
      <a href="https://github.com/sumeyahassen" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900  transition dark:text-white">
        <FaGithub className="text-3xl" />
      </a>
      <a href="https://www.linkedin.com/in/sumeya-hassen-9711092a1/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-600 transition dark:text-white">
        <FaLinkedin className="text-3xl" />
      </a>
      <a href="https://t.me/SumeyaHassen" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:hover:text-blue-400 hover:text-blue-400 transition dark:text-white">
        <FaTelegram className="text-3xl" />
      </a>
      <a href="mailto:sumeyahassenfile@gmail.com" className="text-gray-600 hover:text-red-600 dark:hover:text-red-600  transition dark:text-white">
        <FaEnvelope className="text-3xl" />
      </a>
    </div>
  );
};

export default SocialLinks;