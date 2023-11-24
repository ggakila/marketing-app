import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const fadeInAnimationVariantsLeft = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (id) => ({
      opacity: 1,
      x: 50,
      transition: {
        duration: 1 * id ,
        type: "spring"
      }
    })
  }

  const fadeInAnimationVariantsLeftRight = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (id) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1 * id ,
        type: "spring"
      }
    })
  }

const Card = ({title, description, id}) => {

    const [className, setClassName] = useState("right")
    
    useEffect(() => {
      if(id % 2 === 0) {
        setClassName('left')
    }  
    }, [id])
    

  return (
    <motion.div
        key={id}
          className={`checkpoint p-4 shadow-md rounded-md ${className}`}
          variants={className === 'left' ? fadeInAnimationVariantsLeft : fadeInAnimationVariantsLeftRight}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}}
          custom={id}
        >
          <img className='timeline-img' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div key={id} className='timeline-container'>
            <h2 className="mb-1 font-semibold text-xl text-center md:">{title}</h2>
            <p>{description}</p>
          </div>
    </motion.div>
  )
}

export default Card