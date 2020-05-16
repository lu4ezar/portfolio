import { graphql, useStaticQuery } from "gatsby"

export const usePinnedReposQuery = () => {
  const {
    github: {
      user: {
        repositories: { nodes },
      },
    },
  } = useStaticQuery(graphql`
    query {
      github {
        user(login: "lu4ezar") {
          repositories(first: 4) {
            nodes {
              id
              name
              description
              url
            }
          }
        }
      }
    }
  `)
  return nodes
}
