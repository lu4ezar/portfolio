import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import styles from "./project.module.css"
import shortenLangName from "../utils/shortenLangName"
import { AnimateSharedLayout, motion } from "framer-motion"

const Project = ({ project, selected, select }) => {
  const {
    id,
    name,
    url,
    homepageUrl,
    description,
    primaryLanguage,
    repositoryTopics: { nodes: topics }
  } = project

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={styles.container}
      onClick={select}
      transition={{
        duration: 0.1
      }}
    >
      <div className={styles.heading}>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.links}>
            <OutboundLink href={url}>repo</OutboundLink>
            <span> | </span>
            <OutboundLink href={homepageUrl}>deploy</OutboundLink>
          </div>
        </div>
        <div
          className={styles.primaryLanguage}
          style={{
            background: primaryLanguage.color,
            color: primaryLanguage.name === "TypeScript" ? `#fff` : `inherit`
          }}
        >
          {shortenLangName(primaryLanguage.name)}
        </div>
      </div>
      <AnimateSharedLayout>
        <motion.div
          layout
          className={styles.description}
          animate={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.div>
        {selected && (
          <motion.div
            layout
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{ duration: 0.4, delay: 0.25 }}
            layoutId={`card-${id}`}
          >
            {topics.map(({ topic: { id, name }, url: topicUrl }) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                key={id}
                href={topicUrl}
                className={styles.topic}
              >
                {name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimateSharedLayout>
    </motion.div>
  )
}

export default Project
