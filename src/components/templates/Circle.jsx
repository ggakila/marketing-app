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
        duration: 0.07 * id ,
        type: "spring"
      }
    })
  }

const Circle = ({title, description, id}) => {

    const [className, setClassName] = useState("right")
    
    useEffect(() => {
      if(id % 2 === 0) {
        setClassName('left')
    }  
    }, [])
    

  return (
    <motion.div
          key={id}
          className={`w-[300px] h-[300px] text-white relative flex flex-col border border-solid gap-4 p-4 shadow rounded-full ${className}`}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}}
          custom={id}
        >
          <div className='absolute inset-0 border border-[3px] border-white rounded-full'></div>  
          <div className='w-full flex flex-col items-center gap-4'>
            <h2 className="mt-3 font-semibold text-md text-center w-[200px]">{title}</h2>
            <p className='text-center text-md'>{description}</p>
          </div>
    </motion.div>
  )
}

export default Circle