import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const LinkContainer= styled.div`
  float: right;
  position: relative;
  top: 10px;

  > a {
    color: white;
    text-decoration: none;
    margin-right: 10px;
    :hover {
      color: #24e1ff;
    }
  }
`;

const SiteHeader= styled.h1`
  margin: 0;
  float: left;
  color: #424242;
  font-size: 24px;
  > a {
    color: #424242;
    :visited {
      color: #424242;
    }
    text-decoration: none;
    /*:hover {
      color: #24e1ff;
    }*/
  }
`;

const Header = ({ siteTitle, id }) => (
  <header
    id={id}
    style={{
      background: 'white',
      borderWidth: 1,
      boxShadow: '0px -2px 5px 1px gainsboro',
      borderBottomColor: 'gainsboro',
      borderBottomStyle: 'solid',
      position: 'fixed',
      width: '100%',
      zIndex: 99,
      paddingLeft: 20,
      top: 0,
      left: 0,
      transition: 'top 0.3s' /* Transition effect when sliding down (and up) */
      //marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        padding: 10,
        height: 55,
        maxWidth: 1400,
        margin: 'auto'
      }}
    >
      <SiteHeader>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </SiteHeader>
      {/*<LinkContainer>
        <Link to="/Blog">Blog</Link>
        <Link to="/Profile">Profile</Link>
      </LinkContainer>*/}
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
