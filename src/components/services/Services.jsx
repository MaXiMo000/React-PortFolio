import { useRef } from "react";
import "./services.scss";
import { motion,useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, {margin:"-80px"});
    
    return (
    <motion.div className="services" variants={variants} 
    initial="initial" ref={ref}
    animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>I Focus on making<br />beautiful Websites</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color: "orange"}}>Unique </motion.b>Ideas</h1>
            </div>
            <div className="title">
                <h1>For Your<motion.b whileHover={{color: "orange"}}> Business</motion.b></h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{backgroundColor:  "lightgray", color: "black"}} variants={variants}>
                <h2>WordPress</h2>
                <p>
                WordPress is a powerful, user-friendly platform for building and managing websites, from blogs to 
                full-scale e-commerce sites. It offers extensive customization through a vast library of themes and plugins, making it 
                easy to tailor your site to your specific needs. With built-in SEO features, responsive design options, and a large community 
                for support, WordPress provides a reliable and flexible solution for any online presence.
                </p>
                <a href={`#Contact`}>GO</a>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:  "lightgray", color: "black"}} variants={variants}>
                <h2>ReactJS</h2>
                <p>
                ReactJS is a fast, efficient JavaScript library for building dynamic and responsive user interfaces, particularly for 
                single-page applications. Developed by Facebook, React simplifies the process of creating complex UIs by breaking them down 
                into reusable components. It offers a virtual DOM for optimized rendering, ensuring high performance. With a strong developer 
                community and extensive ecosystem, ReactJS is a top choice for modern web development.
                </p>
                <a href={`#Contact`}>GO</a>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:  "lightgray", color: "black"}} variants={variants}>
                <h2>HTML and CSS</h2>
                <p>
                HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundational technologies for creating and styling 
                web pages. HTML provides the structure by defining elements such as headings, paragraphs, and links, while CSS enhances visual 
                presentation through layout design, colors, and fonts. Together, they enable the creation of responsive, accessible, and 
                visually appealing websites. Mastery of HTML and CSS is essential for any web development project, ensuring both functionality 
                and aesthetics.
                </p>
                <a href={`#Contact`}>GO</a>
            </motion.div>
        </motion.div>
    </motion.div>
    )
}

export default Services