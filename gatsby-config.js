module.exports = {
  siteMetadata: {
    siteUrl: "https://jaxandnono.party",
    title: "Jacqi & Noah Make it Official | June 4, 2022",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-remark-images",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jacqi & Noah Make it Official",
        short_name: "Jacqi & Noah Make it Official",
        start_url: "/",
        background_color: "#ffeee6",
        theme_color: "#196355",
        display: "standalone",
        icon: "src/images/monogram.png",
      },
    },
  ],
};
