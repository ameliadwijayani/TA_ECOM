exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
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
            allShopifyProduct {
                edges {
                  node {
                    id
                  }
                }
              }
        }
    `)
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
        createPage({
            path: node.id,
            component: path.resolve(`./src/templates/index.js`),
            context: {
                id: node.id,
            }
        })
    })
}
