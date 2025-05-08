import React from "react"
import { motion } from 'framer-motion'
import ScrollDown from '../../assets/Icons/Scroll Down.svg'
import FcoPattern from '../../assets/Patterns/Pattern Over Black BG (Sides Masked).png'
import Nav from "./Nav"
import Hero from "./Hero"
import Socials from "./Socials"

function Home() {
    return (
        <div id="landing">
            <Nav />
            <Hero />
            <div className="scroll">
                <motion.img
                    src={ScrollDown}
                    alt="scroll"
                    id="scroll-down"
                    animate={{
                        opacity: [1, 0, 1],
                        y: [0, 10, 0] // moves down 10px then back
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
            <Socials />
            <img src={FcoPattern} alt="" className="pattern" id="pattern-top" />
            <img src={FcoPattern} alt="" className="pattern" id="pattern-bottom" />
        </div>
    )
}

export default Home