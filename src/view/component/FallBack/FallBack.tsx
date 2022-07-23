import React, { Fragment } from 'react'

import { motion } from 'framer-motion'
export default function FallBack() {
  return (
    <Fragment>
      <motion.div
        className='w-40 h-40'
        animate={{ scale: 1.5, rotate: 360 }}
        transition={{
          repeatType: 'reverse',
          repeat: Infinity,
          duration: 1,
        }}
      ></motion.div>
    </Fragment>
  )
}
