const path = require('path');

module.exports = {
  siteMetadata: {
    author: `Electriapp`,
    title: `Picks`,
    description: `A novel random generator iOS app that picks for you!`,
    image: '/images/cover.png',
    twitterUsername: '@electriapp',
    url: 'https://picks.electriapp.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-ZRE41HF2XS`],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        assets: path.join(__dirname, 'src', 'assets'),
        components: path.join(__dirname, 'src', 'components'),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-relative-linked-files`,
          {
            resolve: `gatsby-remark-videos`,
            options: {
              pipelines: [
                {
                  name: 'h264',
                  transcode: (chain) =>
                    chain
                      .videoCodec('libx264')
                      .noAudio()
                      .addOption('-profile:v', 'main')
                      .addOption('-pix_fmt', 'yuv420p')
                      .outputOptions(['-movflags faststart'])
                      .videoBitrate('1000k'),
                  maxHeight: 480,
                  maxWidth: 900,
                  fileExtension: 'mp4',
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-content`,
        path: `${__dirname}/src/pages/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Picks`,
        short_name: `Picks`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#c6a3ff`,
        display: `minimal-ui`,
        icon: `src/assets/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utilities/typography`,
      },
    },
  ],
};
