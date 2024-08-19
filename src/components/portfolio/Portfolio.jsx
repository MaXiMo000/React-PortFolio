import { useRef } from "react";
import "./portfolio.scss";
import { motion,useScroll,useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Blog Website",
        img:"/blog.jpg",
        description: "The blog website is crafted using HTML, CSS, and JavaScript to provide a seamless user experience. It features a responsive design, ensuring accessibility across devices, and includes dynamic elements for enhanced interactivity. The site showcases well-structured content, with visually appealing layouts and smooth navigation. Custom animations and effects add a modern touch to the overall design.",
        link: "https://maximo000.github.io/Front-End-Blog-Website/",
    },
    {
        id: 2,
        title: "To-Do List App",
        img:"/todo.jpg",
        description: "The to-do list application is built using ReactJS, offering a sleek and responsive interface for task management. It features real-time updates and state management, allowing users to add, edit, and delete tasks with ease. The app includes intuitive filtering options to organize tasks by status and priority. React's component-based architecture ensures a smooth and efficient user experience.",
        link: "https://ritish-todo-list.netlify.app/",
    },
    {
        id: 3,
        title: "Digital Clock",
        img:"/clock.jpg",
        link: "https://ritish-digital-clock.netlify.app/",
        description: "The digital clock application, developed with ReactJS, displays the current time with real-time updates in a sleek, modern design. It features a responsive layout, ensuring clear visibility across all device sizes. The app uses React's efficient rendering to smoothly display hours, minutes, and seconds. With its minimalistic interface, the clock is both functional and visually appealing.",
    },
    {
        id: 4,
        title: "EduMain Website",
        img:"/edu.jpg",
        link: "https://maximo000.github.io/Educational-Website/main.html",
        description: "The educational website is designed using HTML, CSS, and JavaScript, offering an interactive platform for learning. It features a responsive design with well-structured content that is easily accessible on all devices. The site includes dynamic elements like quizzes, animations, and interactive lessons to enhance the learning experience. Clear navigation and visually appealing layouts ensure a user-friendly interface for students and educators alike.",
    },
]

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="image" />
                    </div>

                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.link}>See Website</a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 40,
    });

    return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>

        {items.map(item => 
        <Single item={item} key={item.id}/>
        )}
    </div>
    )
}

export default Portfolio
