import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import { usePinnedReposQuery } from "../query"

const IndexPage = () => {
  const pinnedRepos = usePinnedReposQuery()
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-around`,
        }}
      >
        {pinnedRepos.map(repo => (
          <Project key={repo.id} project={repo} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
