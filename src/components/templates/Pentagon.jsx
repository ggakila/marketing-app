import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (id) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.07 * id ,
        type: "spring"
      }
    })
  }

const Pentagon = ({title, description, id, newTemplate}) => {

    const [className, setClassName] = useState("right")
    
    useEffect(() => {
      if(id % 2 === 0) {
        setClassName('left')
    }  
    }, [])
    

  return (
    <motion.div
          key={id}
          className={`w-[300px] text-white relative flex flex-col gap-4 p-4 shadow-md rounded-md ${className}`}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}}
          custom={id}
        >
          <img className='timeline-img absolute top-[-50px]' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='w-full flex flex-col gap-4 mt-20'>
            <h2 className="mb-1 font-semibold text-xl text-center">{title}</h2>
            <p>{description}</p>
          </div>
    </motion.div>
  )
}

export default Pentagon