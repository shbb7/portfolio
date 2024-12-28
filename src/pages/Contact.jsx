import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending...' });

    try {
      // For now, just log the form data and show success message
      console.log('Form Data:', formData);
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out! I will get back to you soon.'
      });
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      link: 'mailto:shayaksiraj@gmail.com',
      label: 'shayaksiraj@gmail.com'
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      link: 'https://github.com/shayaksiraj',
      label: 'github.com/shayaksiraj'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      link: 'https://linkedin.com/in/shayaksiraj',
      label: 'linkedin.com/in/shayaksiraj'
    },
    {
      name: 'Twitter',
      icon: <FiTwitter className="w-6 h-6" />,
      link: 'https://twitter.com/shayaksiraj',
      label: '@shayaksiraj'
    }
  ];

  return (
    <div id="contact" className="min-h-screen bg-dark-300 ml-64 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Let's Collaborate</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-200 rounded-xl p-8 mb-12 border border-dark-100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {status.message && (
              <div className={`p-4 rounded-lg ${
                status.type === 'error' ? 'bg-red-500/10 text-red-500' :
                status.type === 'success' ? 'bg-green-500/10 text-green-500' :
                'bg-blue-500/10 text-blue-500'
              }`}>
                {status.message}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-dark-100 rounded-lg text-white focus:outline-none focus:border-accent-yellow"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-dark-100 rounded-lg text-white focus:outline-none focus:border-accent-yellow"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-100 border border-dark-100 rounded-lg text-white focus:outline-none focus:border-accent-yellow"
                placeholder="Project Collaboration"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-dark-100 border border-dark-100 rounded-lg text-white focus:outline-none focus:border-accent-yellow resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent-yellow text-dark-400 rounded-lg font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status.type === 'info'}
            >
              {status.type === 'info' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-4 p-6 bg-dark-200 rounded-xl border border-dark-100 hover:border-accent-yellow transition-colors group"
            >
              <div className="p-3 bg-dark-100 rounded-lg text-accent-yellow group-hover:bg-accent-yellow group-hover:text-dark-400 transition-colors">
                {social.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium mb-1">{social.name}</h3>
                <p className="text-gray-400 text-sm">{social.label}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
