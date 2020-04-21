module.exports = {
  pathPrefix: "/fun_with_plants",
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-86901256-2",
      },
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
        url: `https://www.instagram.com/fun_with_plants`,
      },
      {
        name: `Facebook`,
        url: `https://www.facebook.com/Fun-with-Plants-109405257412074`,
      },
    ],
  },
}
