import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);
    const [particles, setParticles] = useState([]);
    const [isHovering, setIsHovering] = useState(false);

    // Track mouse movement
    useEffect(() => {
        let throttleTimer;

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            setMousePosition({ x: clientX, y: clientY });

            // Create trail wave effect (throttle slightly to avoid too many DOM nodes)
            if (!throttleTimer) {
                throttleTimer = setTimeout(() => {
                    setTrail((prev) => [
                        ...prev.slice(-15), // Keep max 15 trail segments
                        { x: clientX, y: clientY, id: Date.now() }
                    ]);
                    throttleTimer = null;
                }, 40); // 40ms throttle
            }
        };

        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    // Clean up old trail segments continuously
    useEffect(() => {
        const cleanup = setInterval(() => {
            setTrail((prev) => {
                if (prev.length === 0) return prev;
                // Remove the oldest segment
                return prev.slice(1);
            });
        }, 50);
        return () => clearInterval(cleanup);
    }, []);

    // Handle clicks for star breaking effect
    useEffect(() => {
        const handleClick = (e) => {
            const { clientX, clientY } = e;

            // Create 8 particles radiating outwards
            const newParticles = Array.from({ length: 8 }).map((_, i) => ({
                id: Date.now() + i,
                x: clientX,
                y: clientY,
                angle: (i * (360 / 8)) * (Math.PI / 180), // Convert to radians
                distance: 50 + Math.random() * 30, // Random travel distance
                size: 3 + Math.random() * 4 // Random size
            }));

            setParticles(prev => [...prev, ...newParticles]);

            // Clean up particles after animation completes
            setTimeout(() => {
                setParticles(prev => prev.filter(p => !newParticles.map(n => n.id).includes(p.id)));
            }, 600); // Wait for transition duration
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    // Detect hovers over links/buttons for brightness effect
    useEffect(() => {
        const handleMouseOver = (e) => {
            const isClickable = e.target.closest('a') !== null ||
                e.target.closest('button') !== null ||
                e.target.closest('.hamburger') !== null ||
                window.getComputedStyle(e.target).cursor === 'pointer';

            setIsHovering(isClickable);
        };

        window.addEventListener("mouseover", handleMouseOver);
        return () => window.removeEventListener("mouseover", handleMouseOver);
    }, []);

    return (
        <div className="cursor-wrapper">
            {/* Trail / Wave Effect */}
            <AnimatePresence>
                {trail.map((point, index) => (
                    <motion.div
                        key={point.id}
                        className="cursor-trail"
                        initial={{ opacity: 0.6, scale: 1 }}
                        animate={{ opacity: 0, scale: 0.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            left: point.x,
                            top: point.y,
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Click Particles (Star Breaking) */}
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="cursor-particle"
                        initial={{
                            x: particle.x,
                            y: particle.y,
                            opacity: 1,
                            scale: 1
                        }}
                        animate={{
                            x: particle.x + Math.cos(particle.angle) * particle.distance,
                            y: particle.y + Math.sin(particle.angle) * particle.distance,
                            opacity: 0,
                            scale: 0
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{
                            width: particle.size,
                            height: particle.size
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Main Cursor (with inverted dynamic brightness) */}
            <motion.div
                className="custom-cursor-main"
                animate={{
                    x: mousePosition.x - 10, // Center based on width
                    y: mousePosition.y - 10,
                    scale: 1, // Fixed size at all times
                    // Animate a glowing box shadow to simulate extreme brightness (default mode)
                    // Dim/low brightness (hover mode)
                    boxShadow: !isHovering
                        ? '0 0 20px 10px rgba(255, 255, 255, 0.4), 0 0 40px 20px var(--accent-color)'
                        : '0 0 0px 0px rgba(255, 255, 255, 0)',
                    background: 'transparent'
                }}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 40,
                    mass: 0.5,
                    boxShadow: { duration: 0.4 }, // Smoother transition for glow
                    background: { duration: 0.4 }
                }}
            />
        </div>
    );
};

export default CustomCursor;
