import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImg from '../assets/my_ai_gen_photo.png';
import './Home.css';

const Home = () => {
    return (
        <motion.div
            className="page-container home-page"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="home-content">
                <motion.div
                    className="profile-container"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                >
                    <img src={profileImg} alt="V L Hrushikesh" className="profile-image" />
                </motion.div>

                <motion.p
                    className="greeting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Aspiring Software Developer
                </motion.p>

                <motion.h1
                    className="apple-heading name"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                    V L Hrushikesh.
                </motion.h1>

                <motion.h2
                    className="apple-subheading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Pursuing B.Tech in CSE at VIT-AP.<br />
                </motion.h2>

                <motion.div
                    className="cta-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <Link to="/projects" className="apple-btn">View works</Link>
                    <Link to="/about" className="apple-link">Learn more &gt;</Link>
                </motion.div>
            </div>

            {/* Subtle background glow replacing the saturated blobs */}
            <div className="subtle-glow"></div>
        </motion.div>
    );
};

export default Home;
