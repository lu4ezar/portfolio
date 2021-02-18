import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import { usePinnedReposQuery } from "../query"

const IndexPage = () => {
  const pinnedRepos = usePinnedReposQuery()
  const [selectedCard, setSelectedCard] = React.useState(null)
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-around`
        }}
      >
        {pinnedRepos.map(repo => (
          <Project
            key={repo.id}
            project={repo}
            selected={repo.id === selectedCard}
            select={() => setSelectedCard(repo.id)}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
