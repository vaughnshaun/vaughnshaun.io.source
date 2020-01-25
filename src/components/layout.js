/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css";
import "./layout.override.css";
import styled from 'styled-components';
import { FooterContent } from "./FooterContent";

const Body = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,#efefef,rgba(200, 200, 200, .1));
`;

const BodyInner = styled.div`
max-width: 1400px;
border-style: solid;
border-width: 0px;
border-left-width: 1px;
border-right-width: 1px;
border-color: lightgray;
margin: auto;
box-sizing: border-box;
font-feature-settings: "kern" 1;
font-kerning: normal;
display: flex;
min-height: 100vh;
flex-direction: column;
position: relative;
background: white;
`;

const Main = styled.main`
  flex: 1;
  /*paddingTop: 75;*/
`;

const Footer = styled.footer`
border-top-style: solid;
border-top-width: 1px;
border-color: #e1e1e1;
padding: 30px;
padding-bottom: 0px;
background: rgba(220,220,220,0.5);
`;

const Layout = ({ children, style }) => {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    function removeNavOnScrollDown(){
      var siteHeader = document.getElementById("my-site-header");
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        siteHeader.style.top = "0";
      } else {
        siteHeader.style.top = -siteHeader.clientHeight + 'px';
      }
      prevScrollpos = currentScrollPos;
    }
    window.addEventListener("scroll", removeNavOnScrollDown);

    return () => {
      window.removeEventListener("scroll", removeNavOnScrollDown);
    };
  }, []);

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
    <Body style={style}>
      <BodyInner>
        {<Header id="my-site-header" siteTitle={data.site.siteMetadata.title} />}
        <Main>{children}</Main>
          <Footer>
            <FooterContent></FooterContent>
          </Footer>
      </BodyInner>
    </Body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
