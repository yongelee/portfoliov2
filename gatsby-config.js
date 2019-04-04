module.exports = {
  siteMetadata: {
    title: 'Yongelee | Developer / Designer',
    description: 'The portfolio website for Yongelee.',
    author: 'Yongelee',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
