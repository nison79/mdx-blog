import React from 'react'
import Layout from '../components/layout'
import { graphql ,Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const data = graphql`
  query ($slug: String!) {
      mdx(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
          title
          author
        }
        body
      }
    }
`

const BlogPost = ( { data }) => {

  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>Author: {data.mdx.frontmatter.author}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Link to='/'>&larr; Back to Home</Link>
    </Layout>
  )
}

export default BlogPost
