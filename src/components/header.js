import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GitHubLogo from "../images/github.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3b3c40`,
      marginBottom: `1.25rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <h1 style={{ margin: 0, flexGrow: 1 }}>
        <Link
          to="/"
          style={{
            color: `#f2f8fd`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a href="https://github.com/lu4ezar" title="github page">
        <GitHubLogo
          style={{
            path: {
              color: `#fff`,
            },
          }}
        />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
