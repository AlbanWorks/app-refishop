import React from 'react'
import st from './Button.module.css'
import { motion } from 'framer-motion'

const VARIANTS = {
    NEGATIVE: 'bigRed',
    POSSITIVE: 'bigGreen',
    PRIMARY:'primary',
    SECONDARY: 'secondary'
}

const Button = ({text, variant, click}) => {
  return (
    <motion.button
        onClick={click}
        className={
            variant === VARIANTS.NEGATIVE ? st.negative:
            variant === VARIANTS.POSSITIVE ? st.possitive:
            variant === VARIANTS.PRIMARY ? st.primary:
            st.secondary
        }
        whileTap={{filter: 'brightness(80%)'}}
    >
        {text}
    </motion.button>
  )
}

export {Button, VARIANTS}