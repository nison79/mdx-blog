/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled , { ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

import Header from "./header"
import "./layout.css"

const PageContainer = styled.div`
  display:flex;
  flex-direction:column;
  min-height:100vh;
`

const Container = styled.main`
  flex-grow:1;
  h1 {
    text-align:center;
  }
  /* margin-top:97px; */
`



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Container> { children } </Container>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
      </PageContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
