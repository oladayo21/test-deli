module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Test Deli",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: "http://localhost:1337",
    //     collectionTypes: ["offers"],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
