import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="contact-wrapper">
                <h1 className="apple-heading">Contact.</h1>
                <p className="apple-subheading">Let's build something great together.</p>

                <motion.div
                    className="contact-card glass-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="contact-links">
                        <a href="mailto:v.l.hrushi@gmail.com" className="contact-row">
                            <span className="label">Email</span>
                            <span className="value">v.l.hrushi@gmail.com</span>
                        </a>
                        <div className="contact-divider"></div>
                        <a href="tel:+916304363931" className="contact-row">
                            <span className="label">Phone</span>
                            <span className="value">+91 6304363931</span>
                        </a>
                        <div className="contact-divider"></div>
                        <a href="https://linkedin.com/in/lakshmihrushikesh-vadlamudi" target="_blank" rel="noopener noreferrer" className="contact-row">
                            <span className="label">LinkedIn</span>
                            <span className="value apple-link">View Profile &gt;</span>
                        </a>
                        <div className="contact-divider"></div>
                        <a href="https://github.com/hrushi1508" target="_blank" rel="noopener noreferrer" className="contact-row">
                            <span className="label">GitHub</span>
                            <span className="value apple-link">View Repositories &gt;</span>
                        </a>
                    </div>

                    <div className="contact-footer">
                        <a href="mailto:v.l.hrushi@gmail.com" className="apple-btn">Start a conversation</a>
                    </div>
                </motion.div>

                <footer className="minimal-footer">
                    <p>&copy; {new Date().getFullYear()} V L Hrushikesh. All rights reserved.</p>
                </footer>
            </div>
        </motion.div>
    );
};

export default Contact;
