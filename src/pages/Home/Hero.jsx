import React, { useState } from "react"
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const heroText = [
    "Unlock Your Brands Full Potential.",
    "At Frias & Co., we don’t just design—we craft brands that move people. Through striking visuals, smart strategy, and a passion for storytelling, we help businesses stand out and connect deeply with their audience.",
    "Begin Your Next Chapter"
]

function Hero() {
    const handleClick = () => {

    }

    return (
        <>
            <motion.section
                id="hero"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <h1>{heroText[0]}</h1>
                <p>{heroText[1]}</p>
                <button onClick={handleClick} className="cta-1">
                    <FontAwesomeIcon
                        icon={faBookOpen}
                        size="xl"
                        className="icon"
                        style={{ color: "#212223" }}
                    />
                    <span>{heroText[2]}</span>
                </button>
            </motion.section>
        </>
    )
}

export default Hero