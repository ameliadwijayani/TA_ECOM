
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'id_ID',
          url: 'https://www.url.ie/',
          site_name: 'AmelPlaza',
        },
        twitter: {
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: "sk_test_51L0Zk4A7C8rU4XCnTQkaKv56ZOfqVtWsMc7JV7Wnj7kQvNgoBMZID9UDzgyoIaxGaULbXbWjePme7vCVBHigLd2y00EFNxf0hK",
        downloadFiles: false,
      },
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
        ],
      },
    },

    // {
    //   resolve: 'gatsby-source-vimeo-all',
    //   options: {
    //     clientId: '9bba8cfa0b4d914c9b2508c62623aa6e91ef25ce',
    //     clientSecret: 'VHGB/MNFqSxT5m/L7gqHmywx397FBi21Gag4XmXx2WaMCMwjCzU6dgbU3CE1jI8wWY2wPya1etzAazXPmpR0k/kqrwkswc64UCeFdTdTvR/iQsEDtHdqk+0v0eSFFhX6',
    //     accessToken: 'c6ccb68a21341656fffef77459d5de65'
    //   }
    // },

    // {
    //   resolve: `gatsby-source-vimeo`,
    //   options: {
    //     clientID: '9bba8cfa0b4d914c9b2508c62623aa6e91ef25ce',
    //     clientSecret: 'VHGB/MNFqSxT5m/L7gqHmywx397FBi21Gag4XmXx2WaMCMwjCzU6dgbU3CE1jI8wWY2wPya1etzAazXPmpR0k/kqrwkswc64UCeFdTdTvR/iQsEDtHdqk+0v0eSFFhX6',
    //     transformer (video) {
    //       // Transform the video data [OPTIONAL]
    //       // i.e. Add extra fields or alter existing field
    //       video.newField = 'value'
    //       return video
    //     }
    //   },
    // },
    // {
    //   resolve: `gatsby-source-youtube-v2`,
    //   options: {
    //     channelId: [ 'UCK8sQmJBp8GCxrOtXWBpyEA', 'UCK8sQmJBp8GCxrOtXWBpyXY'],
    //     apiKey:'AIzaSyCChNB-Kt_TJy3OL5kpxIytrmvDICDhkvk' ,
    //     maxVideos: 50 // Defaults to 50
    //   },
    // },
    
    // {
    //   resolve: 'gatsby-source-shopify-storefront',
    //   options: {
    //     siteName: 'ameliashop88',
    //     accessToken: '1cd197642129e2b64849b5530c739a8a',
    //   },
    // },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: "Amel Electric",
              separator: "|",
              author: "Amelia",
              background: require.resolve("./src/images/shop02.png"),
              fontColor: "#011a27",
              titleFontSize: 96,
              subtitleFontSize: 60,
              fontStyle: "monospace",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-plugin-s3`,
        options: {
            bucketName: 'studikasusstripe',
            acl: null
        },
    },
    // {
    //   resolve: `gatsby-plugin-chatwoot`,
    //   options: {
    //       baseUrl: 'BASE_URL', // Required
    //       websiteToken: 'XgBAbNxwrjDTBzDY2EtTQJzj', // Required
    //       includeInDevelopment: false, // Optional
    //       chatwootSettings: {} // Optional
    //   },
    // },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
          {
            allStripePrice {
              nodes {
                product {
                  images
                  name
                  id
                  description
                  default_price
                }
                currency
                unit_amount
                unit_amount_decimal
              }
            }
          }
        `,

        ref: 'id',
        index: ['name'],

        store: ['id','name','description','images','default_price','currency','unit_amount','unit_amount_decimal'],

        normalizer: ({ data }) =>
          data.allStripePrice.nodes.map((node) => ({
            id: node.product.id,
            description: node.product.description,
            name: node.product.name,
            images: node.product.images,
            default_price: node.product.default_price,
            currency: node.currency,
            unit_amount: node.unit_amount,
            unit_amount_decimal: node.unit_amount_decimal,

          })),
      },
    },
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `produk`,
        path: `src/dataproduct`,
      },
    }, 
    "gatsby-remark-embed-video",
    "gatsby-remark-responsive-iframe",
    "gatsby-remark-prismjs",
    "gatsby-remark-images",
    'gatsby-plugin-next-seo'
  ],
}
