import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        // Apply theme on load and when toggled
        if (isDarkTheme) {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    }, [isDarkTheme]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="apple-navbar">
            <div className="navbar-content">
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    V L Hrushikesh
                </NavLink>

                {/* Mobile Menu Toggle & Theme Toggle Container for Mobile */}
                <div className="mobile-controls">
                    <button className="theme-toggle mobile-theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {isDarkTheme ? '☀️' : '🌙'}
                    </button>
                    <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Education
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </li>
                    <li className="desktop-theme-toggle">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                            {isDarkTheme ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
