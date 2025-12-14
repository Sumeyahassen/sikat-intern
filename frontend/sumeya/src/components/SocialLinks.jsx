import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-6">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition dark:text-white">
        <FaGithub className="text-3xl" />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition dark:text-white">
        <FaLinkedin className="text-3xl" />
      </a>
      <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition dark:text-white">
        <FaTwitter className="text-3xl" />
      </a>
      <a href="mailto:youremail@example.com" className="text-gray-600 hover:text-red-600 transition dark:text-white">
        <FaEnvelope className="text-3xl" />
      </a>
    </div>
  );
};

export default SocialLinks;