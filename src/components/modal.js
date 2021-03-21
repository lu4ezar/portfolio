import React from "react"
import { motion } from "framer-motion"
import styles from "../styles/modal.module.css"

const Modal = ({ children, handleClick }) => (
  <motion.div
    exit={{ opacity: 0 }}
    transition={{ duration: 0.75 }}
    onClick={handleClick}
    className={styles.modal}
    layout
  >
    {children}
  </motion.div>
)

export default Modal
