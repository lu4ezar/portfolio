import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import styles from "./project.module.css"
import shortenLangName from "../utils/shortenLangName"

const Project = ({ project }) => {
  const {
    name,
    url,
    homepageUrl,
    description,
    primaryLanguage,
    repositoryTopics: { nodes: topics },
  } = project

  return (
    <div className={styles.container}>
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
            color: primaryLanguage.name === "TypeScript" ? `#fff` : `inherit`,
          }}
        >
          {shortenLangName(primaryLanguage.name)}
        </div>
      </div>
      <div className={styles.description}>{description}</div>
      <div>
        {topics.map(({ topic: { id, name }, url: topicUrl }) => (
          <a key={id} href={topicUrl} className={styles.topic}>
            {name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Project
