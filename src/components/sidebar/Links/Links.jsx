import React from 'react'
import { motion } from 'framer-motion';

const variants = {
    open: {
        transition:{
            staggerChildren: 0.3,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.06,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        x: 0,
        opacity: 1,
    },
    closed: {
        x: -80,
        opacity: 0,
    },
};

const Links = () => {
    const items = ["Homepage", "Services", "PortFolio", "Contact"];

    return (
    <motion.div className='links' variants={variants}>
        {items.map(item=>(
            <motion.a variants={itemVariants}  whileHover={{scale: 1.08}} whileTap={{scale: 0.9}}
            href={`#${item}`} key={item}> {item} </motion.a> 
        ))}
    </motion.div>
    )
}

export default Links
