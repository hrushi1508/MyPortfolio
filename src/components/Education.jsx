import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const eduData = [
        {
            degree: 'B.Tech - Computer Science and Engineering Core',
            institute: 'VIT-AP',
            year: '2023 - 2027',
            score: '8.79 CGPA (Pursuing)'
        },
        {
            degree: 'BIEAP - Mathematics, Physics, and Chemistry',
            institute: 'Bhashyam College',
            year: '2021 - 2023',
            score: '9.2 / 10'
        },
        {
            degree: 'SSC-AP',
            institute: 'Kennedy School',
            year: '2011 - 2021',
            score: '9.3 / 10'
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
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <motion.div
            className="page-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.h1 variants={itemVariants} className="apple-heading">Education.</motion.h1>
            <motion.p variants={itemVariants} className="apple-subheading">My academic foundation.</motion.p>

            <div className="education-timeline">
                {eduData.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} className="timeline-block glass-panel">
                        <div className="year-badge">{item.year}</div>
                        <div className="timeline-info">
                            <h3>{item.degree}</h3>
                            <h4>{item.institute}</h4>
                            <p className="score">Score: {item.score}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Education;
