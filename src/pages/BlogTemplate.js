// import React from 'react'
// const Template = ({ data, pageContext }) => {
//     const { frontmatter, fields } = markdownRemark
//     const { url } = siteMetadata
  
//     return (
//       <Layout page="blog">
//         <SEO title={frontmatter.title} url={`${url}${fields.slug}`} />
//         ...
//       </Layout>
//     )
//   }
  
//   export const pageQuery = graphql`
//     query($slug: String!) {
//       site {
//         siteMetadata {
//           title
//           twitterHandle
//           url
//         }
//       }
//       markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//         html
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           slug
//           title
//           featuredImage {
//             childImageSharp {
//               fluid(maxWidth: 800) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           tags
//         }
//         fields {
//           slug
//         }
//       }
//     }
//   `
