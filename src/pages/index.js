import * as React from "react"
import { Link, useStaticQuery ,graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPreview = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:2rem;

`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq : "bwelli.jpg"}) {
        childImageSharp {
          gatsbyImageData( width:400 , layout: FULL_WIDTH , quality: 100  )
        }
      }
      allMdx {
        nodes{
          frontmatter{
            title 
            author
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
    <SEO title="Home" />
    <GatsbyImage 
      tag="header"
      image={data.file.childImageSharp.gatsbyImageData}
      alt = " girl in the beach "
    />
    <BlogPreview>
      <h2>Blog Posts</h2>
      {data.allMdx.nodes.map(post => (
        <h2>
        <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
        </h2>
      ))}
    </BlogPreview>
  </Layout>

  )
}


export default IndexPage
