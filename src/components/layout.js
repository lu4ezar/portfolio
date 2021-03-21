/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{ flexGrow: 1, margin: `0 auto`, maxWidth: 960 }}>
        {children}
      </main>
      <footer
        style={{
          display: "flex",
          placeContent: "center",
          placeItems: "center",
          flexGrow: 1,
        }}
      >
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
