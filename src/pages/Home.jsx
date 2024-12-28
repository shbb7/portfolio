import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profileImage } from '../constants/assets';
import VideoBackground from '../components/VideoBackground';

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <VideoBackground />
      
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Developer
              <span className="text-accent-yellow block mt-2">&amp; Designer</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 max-w-2xl"
              variants={fadeInUp}
            >
              Crafting beautiful, responsive, and user-friendly digital experiences. 
              Specializing in modern web technologies and creative design solutions.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeInUp}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-3 bg-accent-yellow text-dark-400 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                <span>Start a Project</span>
                <motion.svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 border-2 border-accent-yellow text-accent-yellow rounded-full font-medium hover:bg-accent-yellow hover:text-dark-400 transition-colors"
              >
                View Work
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              variants={fadeInUp}
              className="pt-8"
            >
              <p className="text-sm text-gray-400 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-4">
                {['React', 'Node.js', 'TypeScript', 'Tailwind'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 bg-dark-200/50 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-dark-100 hover:border-accent-yellow/50 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 to-transparent rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.img
                src={profileImage}
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-dark-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -z-10 inset-0 bg-gradient-to-r from-accent-yellow/10 to-transparent blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
