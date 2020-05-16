import React from "react"

const Project = ({ project }) => {
  const {
    name,
    url,
    description,
    // labels,
    // languages,
    // primaryLanguage,
    // repositoryTopics,
    // descriptionHTML,
    // shortDescriptionHTML,
    // url,
    // homepageUrl,
    // deployments,
  } = project
  return (
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <a href={url}>
        <div className="name">{name}</div>
      </a>
      <div className="description">{description}</div>
      <div className="tags">
        <span>reactjs</span>
        <span>nextjs</span>
        <span>gatsby</span>
      </div>
      <div className="links">homepage github</div>
    </div>
  )
}

export default Project
