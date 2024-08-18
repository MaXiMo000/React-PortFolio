import {motion} from "framer-motion";
import "./hero.scss";


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1, 
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>RITISH SAINI</motion.h2>
            <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
            <div className="buttons">
                <motion.a href={`#Portfolio`} variants={textVariants}>See my latest works</motion.a>
                <motion.a href={`#Contact`} variants={textVariants}>Contact Me</motion.a>
            </div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
            Ritish Saini: Web developer and UI designer
        </motion.div>
        <div className="imageContainer">
            <img src="/Astronaut.png" alt="" />
        </div>
    </div>
    )
}

export default Hero
