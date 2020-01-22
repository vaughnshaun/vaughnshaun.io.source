module.exports = {
  siteMetadata: {
    title: `Shaun Vaughn`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Shaun Vaughn`,
  },
  pathPrefix: "/vaughnshaun.github.io",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Transforms content in a markdown to html and frontmatter
    // Use the graphql query
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        //background_color: `#663399`,
        //theme_color: `#663399`,
        theme_color: `#0f7bc1`,
        background_color: `#0f7bc1`,
        display: `minimal-ui`/*,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.*/
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
