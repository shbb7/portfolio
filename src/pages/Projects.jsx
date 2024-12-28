import { motion } from 'framer-motion';
import { projectImages } from '../constants/assets';

const ProjectCard = ({ title, category, duration, role, technologies, description, metrics, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-dark-200 rounded-xl overflow-hidden shadow-xl"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-60"></div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-accent-yellow">{category}</p>
        </div>
        <span className="text-sm text-gray-400">{duration}</span>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Role</h4>
        <p className="text-gray-400">{role}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-dark-100 text-accent-blue rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white mb-2">Key Metrics</h4>
        <ul className="list-disc list-inside text-gray-400">
          {metrics.map((metric, index) => (
            <li key={index}>{metric}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website Development",
      category: "Web Development",
      duration: "2 months (Nov - Dec 2023)",
      role: "Full-stack Developer",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      description: "A modern portfolio website with dark theme and responsive design.",
      metrics: [
        "95% Lighthouse score",
        "100% mobile-friendly",
        "< 2s initial load"
      ],
      image: projectImages.portfolio
    },
    {
      title: "E-commerce Platform",
      category: "Web Development",
      duration: "3 months (Aug - Oct 2023)",
      role: "Front-end Developer",
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "Redux"],
      description: "A full-featured e-commerce platform with secure payment processing.",
      metrics: [
        "92% Lighthouse score",
        "3.5% conversion rate",
        "1.5s average load time"
      ],
      image: projectImages.ecommerce
    },
    {
      title: "Social Media Dashboard",
      category: "Web Development",
      duration: "2 months (Jun - Jul 2023)",
      role: "UI/UX Designer & Developer",
      technologies: ["React", "Material-UI", "Chart.js", "Firebase"],
      description: "A comprehensive analytics dashboard with real-time data visualization.",
      metrics: [
        "4.8/5 user rating",
        "99.9% accuracy",
        "< 500ms updates"
      ],
      image: projectImages.dashboard
    }
  ];

  return (
    <div className="min-h-screen bg-dark-300 ml-64 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-gray-400 mb-12">
          Here are some of my recent projects that showcase my skills and experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
