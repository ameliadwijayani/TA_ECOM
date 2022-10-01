
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
let createJobV2
exports.onPluginInit = ({ actions }) => {
  // store job creation action to use it later
  createJobV2 = actions.createJobV2
}
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    optionA: Joi.boolean().required().description(`Enables optionA.`),
    message: Joi.string()
      .required()
      .description(`The message logged to the console.`),
    optionB: Joi.boolean().description(`Enables optionB.`),
  })
}
exports.onPreInit = ({ actions }) => {
  console.log("onPreInit!")
}
exports.onPreExtractQueries = ({ actions }) => {
  console.log("onPreExtractQueries")
}
exports.onPreInit = ({ actions }) => {
  console.log("onPreInit!")
}
exports.onPostBootstrap = () => {
  console.log("onPostBootstrap!")
}
exports.onPreBootstrap = () => {
  console.log("onPreBootstrap!")
}
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
exports.onPreBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has not been built!`)
}
exports.onCreateDevServer = ({ app }) => {
  app.get('/hello', function (req, res) {
    res.send('hello world')
  })
}
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type AuthorJson implements Node {
      joinedAt: Date
    }
  `
  createTypes(typeDefs)
}
// try {
//   require.resolve(`babel-plugin-styled-components`)
// } catch (e) {
//   throw new Error(
//     `'babel-plugin-styled-components' is not installed which is needed by plugin 'gatsby-plugin-styled-components'`
//   )
// }

exports.onCreateBabelConfig = ({ actions }) => {
  // actions.setBabelPlugin({
  //   name: `babel-plugin-styled-components`,
  //   options: {}
  // })
}
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
      SanityCourses: {
          playlist: {
              type: "[SanityVideo]",
              url: {
                  type: "String",
                  resolve(source, args, context, info) {
                      return "nope"
                  },
              }
          },
      },
  }
  createResolvers(resolvers)
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions}) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const id = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `id`,
            value: id,
        })
    }
}
exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
          allStripePrice {
            edges {
              node {
                id
              }
            }
          }
        }
    `)
    result.data.allStripePrice.edges.forEach(({ node }) => {
        createPage({
            path: node.id,
            component: path.resolve(`./src/templates/index.js`),
            context: {
                id: node.id,
            }
        })
    })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/,
            use: loaders.null(),
          },
        ],
      },
    });
   }
 };
