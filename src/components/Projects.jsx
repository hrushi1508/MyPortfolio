import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const projectList = [
        {
            title: 'Secure Task Management',
            description: 'A To-do list with User Authentication using MERN stack technology where each user corresponds to a separate account and their details are completely abstracted.',
            link: 'https://github.com/hrushi1508/Taskmanagment_app',
            tags: ['MongoDB', 'Express', 'React', 'Node.js']
        },
        {
            title: 'Voice-Based Communication',
            description: 'System helping blind people find objects using voice commands. Users train voice commands without pre-trained models. No camera needed.',
            link: 'https://github.com/hrushi1508/Voice-Based-communication-System-for-Blind',
            tags: ['IoT', 'Python', 'Hardware', 'Accessibility']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <motion.div
            className="page-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.h1 variants={itemVariants} className="apple-heading">Projects.</motion.h1>
            <motion.p variants={itemVariants} className="apple-subheading">Selected works and developments.</motion.p>

            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <motion.div key={index} variants={itemVariants} className="apple-product-card glass-panel">
                        <div className="card-top">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="card-bottom">
                            <div className="tags">
                                {project.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className="subtle-tag">{tag}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="apple-link">
                                View Source &gt;
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
