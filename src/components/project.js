import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import styles from "../styles/project.module.css"
import shortenLangName from "../utils/shortenLangName"
import { motion } from "framer-motion"

const Project = ({ project, onClick, selected, className }) => {
  const items = {
    visible: {
      top: 0,
      transition: {
        type: "spring",
        stiffness: 250,
      },
    },
    hidden: {
      top: "100%",
    },
  }
  const topicContainer = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        delay: 0.4,
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.25,
        delay: 0.2,
        staggerChildren: 0.25,
      },
    },
  }
  const desc = {
    visible: {
      top: 0,
      transition: {
        duration: 0.15,
        delay: 0.15,
      },
    },
    hidden: {
      top: "30%",
      transition: {
        duration: 0.4,
        delay: 0.15,
      },
    },
  }
  const {
    id,
    name,
    url,
    homepageUrl,
    description,
    primaryLanguage,
    repositoryTopics: { nodes: topics },
  } = project
  const classes = `${styles.container__repo} ${selected && styles.selected}`
  return (
    <motion.div
      className={classes}
      onClick={onClick}
      layoutId={`pr-${id}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className={styles.heading}>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.links}>
            <OutboundLink href={url}>repo</OutboundLink>
            <span style={{ margin: "0 .5rem", verticalAlign: "center" }}>
              |
            </span>
            <OutboundLink href={homepageUrl}>view</OutboundLink>
          </div>
        </div>
        <div
          className={styles.primaryLanguage}
          style={{
            background: primaryLanguage.color,
            color: primaryLanguage.name === "TypeScript" ? `#fff` : `inherit`,
          }}
        >
          {shortenLangName(primaryLanguage.name)}
        </div>
      </div>
      <motion.div
        className={styles.description}
        key="topics"
        initial="hidden"
        animate={selected ? "visible" : "hidden"}
        variants={desc}
      >
        {description}
      </motion.div>
      <motion.div
        className={styles.topic_container}
        initial="hidden"
        animate={selected ? "visible" : "hidden"}
        variants={topicContainer}
      >
        {topics.map(({ topic: { id, name }, url: topicUrl }) => (
          <motion.a
            key={id}
            whileHover={{ scale: 1.1 }}
            href={topicUrl}
            className={styles.topic}
            initial="hidden"
            variants={items}
          >
            {name}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Project
