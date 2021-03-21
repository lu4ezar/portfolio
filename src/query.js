import { graphql, useStaticQuery } from "gatsby"

export const usePinnedReposQuery = () => {
  const {
    github: {
      user: {
        pinnedItems: { nodes }
      }
    }
  } = useStaticQuery(graphql`
    query {
      github {
        user(login: "lu4ezar") {
          pinnedItems(first: 4) {
            nodes {
              ... on GitHub_Repository {
                id
                name
                description
                url
                homepageUrl
                primaryLanguage {
                  color
                  name
                }
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      id
                      name
                    }
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return nodes
}
