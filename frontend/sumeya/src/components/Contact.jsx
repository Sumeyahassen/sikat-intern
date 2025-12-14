import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs
      .send(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',    // Replace with your Template ID
        formData,
        'YOUR_USER_ID'         // Replace with your EmailJS User ID (public key)
      )
      .then(
        () => {
          setLoading(false);
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          setStatus('error');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start dark:text-white">
          {/* Left: Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">
              Let's Connect!
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed dark:text-white">
              I'm excited to hear from you! Whether it's about a project, job opportunity,
              or just saying hi — drop me a message.
            </p>

            <div className="mb-10">
              <p className="text-gray-600 mb-2 dark:text-white">Email:</p>
              <a href="mailto:youremail@example.com" className="text-xl font-medium text-blue-600 hover:underline dark:text-white">
               sumeyahassenfile@gmail.com
              </a>
            </div>

            <SocialLinks  />
          </motion.div>

          {/* Right: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="mt-6 text-green-600 text-center font-medium">
                  🎉 Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-6 text-red-600 text-center font-medium">
                  ❌ Oops! Something went wrong. Try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;