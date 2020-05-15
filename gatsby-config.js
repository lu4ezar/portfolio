module.exports = {
  siteMetadata: {
    title: `Projects`,
    description: `Discover my Github page projects in under 5 minutes.`,
    author: `lu4ezar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lu4ezar's portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#e5f0ff`,
        theme_color: `#f2f8fd`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
