module.exports = {
  pathPrefix: "/fun_with_plants",
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Fun with Plants`,
    author: `Alla`,
    description: `Sharing my experience of growing, caring and sometimes unfortunately killing plants at home.`,
    social: [
      {
        name: `Instagram`,
        url: `https://www.instagram.com/fun_with_plants/`,
      },
      {
        name: `Twitter`,
        url: `https://www.instagram.com/fun_with_plants/`,
      },
    ],
  },
}
