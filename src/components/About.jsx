import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <motion.div
            className="page-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.h1 variants={itemVariants} className="apple-heading">About.</motion.h1>
            <motion.p variants={itemVariants} className="apple-subheading">A closer look at my journey.</motion.p>

            <div className="about-bento-grid">
                <motion.div variants={itemVariants} className="bento-box glass-panel col-span-2">
                    <h3>Career Objective</h3>
                    <p className="bento-text">
                        Computer Science undergraduate with little hands-on experience in full-stack web development(MERN Stack) and UI/UX prototyping.Ability to build secure applications of my knowledge, and collaborate in technical teams. Currently Seeking a Software / Full Stack Development Internship to apply skills in real-world systems and learn industry best practices.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bento-box glass-panel">
                    <h3>Technical Skills</h3>
                    <ul className="clean-list">
                        <li><strong>Languages:</strong> Python, C, Java, SQL</li>
                        <li><strong>Web:</strong> HTML, CSS, JS, MERN Stack</li>
                        <li><strong>Tools:</strong> GitHub, Figma</li>
                    </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="bento-box glass-panel">
                    <h3>Certifications</h3>
                    <ul className="clean-list">
                        <li>Full Stack MERN (Blackbucks)</li>
                        <li>Data Science Python (Finlatics)</li>
                        <li>AI Fundamental (IBM)</li>
                    </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="bento-box glass-panel col-span-2">
                    <h3>Positions & Achievements</h3>
                    <ul className="clean-list flex-col">
                        <li>🏆 1st place in design-a-thon by Next-Nexus at VIT-AP (Figma UI design).</li>
                        <li>Ex-Technical Team Member at QHub, MSC in VIT-AP.</li>
                        <li>Technical Team Member at NGC in VIT-AP.</li>
                        <li>UI/UX Intern at Cothon Solutions through AICTE.</li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
