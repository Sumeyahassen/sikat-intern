const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Sumeya Hassen. All rights reserved.</p>
        <p className="mt-2 text-gray-300">I build software not just to code, but to solve problems that matter to society.</p>
      </div>
    </footer>
  );
};

export default Footer;