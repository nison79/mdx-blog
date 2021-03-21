import * as React from "react"
import { Link, useStaticQuery ,graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq : "bwelli.jpg"}) {
        childImageSharp {
          gatsbyImageData( width:400 , layout: FULL_WIDTH , quality: 100  )
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
    <p>
      <Link to="/my-first-post/">Go to posts</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>

  )
}


export default IndexPage
