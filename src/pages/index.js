import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import { usePinnedReposQuery } from "../query"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import styles from "../styles/project.module.css"
import Modal from "../components/modal"

const IndexPage = () => {
  const pinnedRepos = usePinnedReposQuery()
  const [selectedProjectId, setSelectedProjectId] = React.useState(null)
  const selectedProject = pinnedRepos.find(
    repo => repo.id === selectedProjectId
  )
  return (
    <Layout>
      <SEO title="Home" />
      <AnimateSharedLayout type="crossfade">
        <motion.div className={styles.container} key="page">
          {pinnedRepos.map(repo => (
            <Project
              key={repo.id}
              selected={selectedProjectId === repo.id}
              project={repo}
              onClick={() => setSelectedProjectId(repo.id)}
            />
          ))}
          <AnimatePresence>
            {selectedProjectId && (
              <Modal key="modal">
                <Project
                  selected
                  project={selectedProject}
                  onClick={() => setSelectedProjectId(null)}
                />
              </Modal>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimateSharedLayout>
    </Layout>
  )
}

export default IndexPage
