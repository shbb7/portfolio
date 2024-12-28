import { motion } from 'framer-motion';

const skillsData = {
  'Graphic Design': {
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Logo Design', 'Brand Identity', 'Typography'],
    description: 'Creating stunning visual designs and branding solutions',
    color: 'bg-purple-500',
  },
  'Web Development': {
    skills: ['React.js', 'HTML/CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
    description: 'Building modern and responsive web applications',
    color: 'bg-blue-500',
  },
  'App Development': {
    skills: ['Mobile UI Design', 'React Native', 'App Architecture', 'User Experience', 'Cross-platform'],
    description: 'Developing intuitive mobile applications',
    color: 'bg-green-500',
  },
  'Logo Design': {
    skills: ['Vector Graphics', 'Color Theory', 'Brand Guidelines', 'Minimalist Design', 'Logo Animation'],
    description: 'Crafting memorable brand identities',
    color: 'bg-red-500',
  }
};

const SkillCard = ({ title, skills, description, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-200 rounded-xl shadow-lg overflow-hidden border border-dark-100"
    >
      <div className={`${color} h-2`} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-dark-100 rounded-full text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-dark-300 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and creative capabilities
            across multiple disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([title, data], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard title={title} {...data} />
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { name: 'Adobe Creative Suite', level: 90 },
              { name: 'Frontend Development', level: 85 },
              { name: 'UI/UX Design', level: 88 },
              { name: 'Mobile Development', level: 82 },
            ].map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-dark-100 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-yellow to-yellow-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React.js', 'Node.js', 'React Native', 'HTML5/CSS3',
              'JavaScript', 'Git', 'Figma', 'Adobe Photoshop',
              'Adobe Illustrator', 'Tailwind CSS', 'RESTful APIs', 'MongoDB',
              'UI/UX Design', 'Responsive Design', 'Brand Identity', 'Vector Graphics'
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="px-6 py-3 bg-dark-200 text-gray-300 rounded-full text-sm hover:bg-dark-100 transition-colors border border-dark-100 hover:text-white cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
