/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css";
import "./layout.override.css";
import styled from 'styled-components';
import { FooterContent } from "./FooterContent";

const BodyInner = styled.div`
max-width: 2000px;
border-style: solid;
border-width: 0px;
border-left-width: 2px;
border-right-width: 2px;
border-color: lightgray;
margin: auto;
box-sizing: border-box;
font-feature-settings: "kern" 1;
font-kerning: normal;
display: flex;
min-height: 100vh;
flex-direction: column;
position: relative;
`;

const Footer = styled.footer`
border-top-style: solid;
border-top-width: 1px;
border-color: #e1e1e1;
padding: 30px 0;
background: rgba(220,220,220,0.5);
`;

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
    <BodyInner>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{flex: 1, paddingTop: 75}}>{children}</main>
        <Footer>
          <FooterContent></FooterContent>
        </Footer>
    </BodyInner>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
