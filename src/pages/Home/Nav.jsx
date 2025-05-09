import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import LogoSmall from '../../assets/Logos/fco-color-capsuled-border.svg';
import LogoMedium from '../../assets/Logos/fco-text-side-med.svg';
import LogoFull from '../../assets/Logos/fco-text-side.svg';
import FullPattern from '../../assets/Patterns/Pattern Over Black BG.svg';

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Packages", path: "/packages" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Our Process", path: "/our-process" },
    { label: "Contact", path: "/contact" }
];

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="logo">
                    <img src={LogoSmall} id="sm-logo" alt="Frias & Co. (Small)" />
                    <img src={LogoMedium} id="md-logo" alt="Frias & Co. (Medium)" />
                    <img src={LogoFull} id="lg-logo" alt="Frias & Co. (Full)" />
                </div>

                <div className="links">
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? 'active-link' : ''}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="menu-btn" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                    <FontAwesomeIcon icon={faBars} size="2xl" className="menu-icon" style={{ color: "#e4decc" }} />
                </button>
            </motion.nav>

            {/* Animated Popup Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        id="popup-menu"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div id="logo-area"
                            style={{
                                backgroundImage: `url(${FullPattern})`,
                                backgroundSize: '110%'
                            }}>
                            <img src={LogoSmall} id="sm-logo-menu" alt="Frias & Co. (Small)" />
                        </div>

                        <div id="link-area">
                            <ul>
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) => isActive ? 'active-link' : ''}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div id="close-area">
                            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}

export default Nav;
