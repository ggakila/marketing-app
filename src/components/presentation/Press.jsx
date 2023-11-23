import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { SlSettings } from "react-icons/sl"

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

const Press = ({title, description, id}) => {

    const [className, setClassName] = useState("odd")
    
    useEffect(() => {
      if(id % 2 === 0) {
        setClassName('even')
    }  
    }, [])
    

  return (
    <motion.div
        key={id}
          className={`text-white relative flex flex-col gap-4 px-4 h-fit `}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}}
          custom={id}
        > 
          <div className='flex gap-4'>
            <div className={`flex justify-center items-center px-8 ${className}`}>
                <SlSettings className='w-10 h-10' />
            </div>
            <div className={`flex flex-col gap-3 px-4  py-2 ${className}`}>
                <h2 className="font-semibold text-xl">{title}</h2> 
               <p className='text-md '>{description}</p> 
            </div> 
          </div>
    </motion.div>
  )
}

export default Press