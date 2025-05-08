import React from "react"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LogoSmall from '../../assets/Logos/fco-color-capsuled-border.svg'
import LogoMedium from '../../assets/Logos/fco-text-side-med.svg'
import LogoFull from '../../assets/Logos/fco-text-side.svg'

// Update navLinks to include labels and paths
const navLinks = [
    { label: "Home", path: "/" },
    { label: "Packages", path: "/packages" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Our Process", path: "/our-process" },
    { label: "Contact", path: "/contact" }
];


function Nav() {
    const openNav = () => {
        alert("Jesus Lives Forever");
    }

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
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="menu-btn" onClick={openNav} aria-label="Open menu">
                    <FontAwesomeIcon icon={faBars} size="2xl"
                        className='menu-icon' style={{ color: "#e4decc" }} />
                </button>
            </motion.nav>
        </>
    )
}

export default Nav