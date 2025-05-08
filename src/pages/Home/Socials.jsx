import React from 'react'
import { motion } from 'framer-motion'
import InstagramIcon from "../../assets/Icons/Instagram.png"
import FacebookIcon from "../../assets/Icons/Facebook.png"
import TikTokIcon from "../../assets/Icons/TikTok.png"

function Socials() {
    return (
        <motion.div
            className="socials"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <a href="https://www.instagram.com/friasandco/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="instagram" id="ig-icon" />
            </a>
            <div className="line"></div>
            <img src={FacebookIcon} alt="facebook" id="fb-icon" />
            <div className="line"></div>
            <img src={TikTokIcon} alt="tiktok" id="tt-icon" />
        </motion.div>
    )
}

export default Socials