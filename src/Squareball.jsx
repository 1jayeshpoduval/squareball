import React from 'react'
import { motion } from 'framer-motion'

const Squareball = (props) => {

  return (
    <motion.div className = 'squareball'
    animate={props.position}
    transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30
    }}>
    </motion.div>
  )
}

export default Squareball