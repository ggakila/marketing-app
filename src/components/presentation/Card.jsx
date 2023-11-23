import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: () => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 3 ,
        type: "tween"
      }
    })
  }

const Card = ({title, description, id}) => {
    let colors = ['cyan-700', 'teal-700', 'slate-700', 'emerald-700', 'fuchsia-700', 'indigo-700', 'orange-700', 'amber-700', 'yellow-700', 'lime-700', 'red-700', 'sky-700', 'blue-700', 'violet-700', 'purple-700', 'rose-700' ]
    let index = parseInt(Math.random() * colors.length)

    const [className, setClassName] = useState("right")
    
    useEffect(() => {
      if(id % 2 === 0) {
        setClassName('left')
    }  
    }, [])
    

  return (
    <motion.div
        key={id}
          className={`checkpoint p-4 shadow-md rounded-md bg-${colors[index]} ${className}`}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}}
          custom={id}
        >
          <img className='timeline-img' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="mb-1 font-semibold text-xl text-center md:">{title}</h2>
            <p>{description}</p>
          </div>
    </motion.div>
  )
}

export default Card