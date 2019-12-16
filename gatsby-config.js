module.exports = {
  siteMetadata: {
    title: `Vita Smile Photography`,
    description: `Main`,
    author: `Hex Zero`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /components/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hex Zero`,
        short_name: `Main`,
        start_url: `/`,
        icon: `src/images/hex.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
