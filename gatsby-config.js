module.exports = {
  siteMetadata: {
    title: `Matthew Barton`,
    description: `All things Matthew Barton :)`,
    author: `@MatthewNavy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#0d6efd`,
        theme_color: `#0d6efd`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /\.inline\.svg$/,
            options: {
              tag: "symbol",
              name: "MyIcon",
              props: {
                className: "my-class",
                title: "example"
              },
              filters: [value => console.log(value)]
            }
          }
        }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          // You have got to be one messed up person to use my tracking id to send extra data to me. Messed up.
          "G-VNTZLTM38M",
        ],
      },
    },
  ],
}
