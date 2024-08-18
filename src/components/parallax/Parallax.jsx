import { useRef } from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({type}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]); // y position 0 to 500%
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "105%"]); // y position 0 to 500%

    return (
    <div className="parallax" ref={ref}
    style={{background: type === "services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"}}>
        <motion.h1 style={{y: yText}} >{(type) === "services" ? "What We Do?" : "What We Did ?"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{y: yBg, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"} )`}}></motion.div>
        <motion.div className="stars" style={{x: yText}}></motion.div>
    </div>
    )
}

export default Parallax
