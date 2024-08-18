import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
    <div className="navbar">
        {/* sidebar */}
        <Sidebar/>

        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.4}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:1, delay:0.3}}>
                Ritish Saini
            </motion.span>
            
            <div className="social">
                <a href="https://www.linkedin.com/in/ritish-saini-2540a5253/"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/ritishsaini_0306/?hl=en"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.youtube.com/@ritishsaini2239"><img src="/youtube.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/ritish-saini-2540a5253/"><img src="/dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
    )
}

export default Navbar