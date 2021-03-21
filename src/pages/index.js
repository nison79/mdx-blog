import * as React from "react"
import { Link, useStaticQuery ,graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq : "bwelli.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)



  return (
    <Layout>
    <SEO title="Home" />
    <BackgroundImage 
      tag="header"
      fluid={data.file.childImageSharp.fluid}
      style={{ height: "50vh"}}
    />
    <p>
      <Link to="/my-first-post/">Go to posts</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>

  )
}


export default IndexPage
