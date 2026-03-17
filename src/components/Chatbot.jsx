import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { id: Date.now(), sender: 'bot', text: "Hi! I'm Hrushikesh's virtual assistant. Ask me about his education, skills, projects, or how to contact him!" }
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    // Simple keyword extraction intelligence
    const getBotResponse = (userMessage) => {
        const msg = userMessage.toLowerCase();

        if (msg.includes('education') || msg.includes('college') || msg.includes('study') || msg.includes('degree')) {
            return "Hrushikesh is currently pursuing his B.Tech in CSE at VIT-AP (2023-2027) with an 8.7 CGPA. Previously, he completed intermediate at Bhashyam College (9.2/10) and schooling at Kennedy School (9.3/10).";
        }
        if (msg.includes('skill') || msg.includes('tech') || msg.includes('language') || msg.includes('stack')) {
            return "He specializes in the MERN Stack (MongoDB, Express, React, Node.js). He is fluent in Python, Java, C, and SQL, and is also an experienced Figma UI/UX designer!";
        }
        if (msg.includes('project') || msg.includes('work') || msg.includes('built')) {
            return "Some of his key projects include a Secure Task Management app with full MERN stack authentication, and an IoT Voice-Based Communication system designed for blind accessibility. You can find links to them on the Projects page!";
        }
        if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach') || msg.includes('linkedin') || msg.includes('github')) {
            return "You can email him at v.l.hrushi@gmail.com, call at +91 6304363931, or connect with him on LinkedIn and GitHub. Links are available on the Contact page!";
        }
        if (msg.includes('about') || msg.includes('who') || msg.includes('goal') || msg.includes('objective')) {
            return "Hrushikesh is an aspiring Software Developer and UI/UX Designer seeking opportunities to build pixel-perfect, user-friendly applications in a collaborative team setting.";
        }
        if (msg.includes('certif') || msg.includes('achieve') || msg.includes('award')) {
            return "He secured 1st place in the Next-Nexus design-a-thon at VIT-AP for Figma UI Design! He also holds certifications spanning Full Stack MERN (Blackbucks), Data Science Python (Finlatics), and AI Fundamentals (IBM).";
        }
        if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
            return "Hello there! How can I help you learn more about Hrushikesh's portfolio today?";
        }
        if (msg.includes('bye') || msg.includes('see you')) {
            return "Thank you for visiting! Feel free to reach out to Hrushikesh via the Contact page if you have further inquiries.";
        }

        // Fallback response
        return "I'm sorry, I'm just a simple bot and didn't quite catch that! Try asking specifically about his 'education', 'skills', 'projects', or 'contact' details.";
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        const newUserMessage = { id: Date.now(), sender: 'user', text: userMsg };
        setMessages(prev => [...prev, newUserMessage]);
        setInput('');

        // Simulate thinking delay
        setTimeout(() => {
            const botResponseText = getBotResponse(userMsg);
            const newBotMessage = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
            setMessages(prev => [...prev, newBotMessage]);
        }, 600);
    };

    return (
        <div className="chatbot-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-window glass-panel"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        <div className="chat-header">
                            <div>
                                <h3>Virtual Assistant</h3>
                                <div className="status-indicator">
                                    <span className="dot"></span> Online
                                </div>
                            </div>
                            <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close Chat">
                                &times;
                            </button>
                        </div>

                        <div className="chat-body">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    className={`chat-bubble-wrapper ${msg.sender}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div className={`chat-bubble ${msg.sender}`}>
                                        <p>{msg.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form className="chat-input-area" onSubmit={handleSend}>
                            <input
                                type="text"
                                placeholder="Ask about education, skills..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit" className="send-btn" disabled={!input.trim()} aria-label="Send Message">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.01 21L23 12L2.01 3L2 10l15 2-15 2z" fill="currentColor" />
                                </svg>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className={`chat-toggle-fab ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle Assistant"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <motion.svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Antenna connecting line */}
                        <line x1="12" y1="2" x2="12" y2="6" />

                        {/* Wiggling Antenna Bulb */}
                        <motion.circle
                            cx="12" cy="2" r="1.5"
                            fill="currentColor"
                            animate={{ x: [-1, 1, -1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />

                        {/* Floating Robot Body */}
                        <motion.g
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            <rect x="4" y="6" width="16" height="12" rx="3" />

                            {/* Blinking Eyes */}
                            <motion.circle
                                cx="9" cy="11" r="1.5" fill="currentColor"
                                animate={{ scaleY: [1, 0.1, 1], opacity: [1, 0.5, 1] }}
                                transition={{ repeat: Infinity, duration: 4, times: [0, 0.05, 0.1] }}
                            />
                            <motion.circle
                                cx="15" cy="11" r="1.5" fill="currentColor"
                                animate={{ scaleY: [1, 0.1, 1], opacity: [1, 0.5, 1] }}
                                transition={{ repeat: Infinity, duration: 4, times: [0, 0.05, 0.1] }}
                            />

                            {/* Straight Mouth */}
                            <path d="M9 15h6" />
                        </motion.g>
                    </motion.svg>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
