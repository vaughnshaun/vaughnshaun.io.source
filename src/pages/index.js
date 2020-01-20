import React from "react";
import {graphql} from 'gatsby';
import styled from 'styled-components';

import Layout from "../components/layout";
import { MissionStatement } from "../components/MissionStatement";
import homeImage from "../images/digitalabstract.png";
import PostItem from "../components/PostItem";
import backgroundImage from "../images/honeycombbackground.jpg";

const Mission = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  background-image: url('${backgroundImage}');
  @media (max-width: 1200px) {
    min-height: 400px;
  }
`;

const MissionStatementContainer = styled.div`
  float: left;
  width: 50%;
  min-height: 1px;
  padding: 50px;
  padding-bottom: 0px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  @media (max-width: 800px) {
    width: 100%;
    padding: 20px;
    padding-bottom: 0px;
  }
`;

const MissionImageContainer = styled.div`
  position: relative;
  width: 50%;
  float: left;
  top: -60px;
  right: 0px;
  text-align: right;
  padding-right: 40px;
  max-height: 450px;
  box-sizing: border-box;
  z-index: 1;
  > img {
    max-width: 550px;
    width: 100%;
  }

  @media (max-width: 1200px) {
    min-width: 450px;
    max-width: 500px;
    top: 0px;
    position: absolute;
  }
  @media (max-width: 800px) {
    opacity: .15;
  }
`;

const RecentPost = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  background: white;
  padding: 20px;
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const MissionColor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(45deg, #dadada, transparent);
`;

const IndexPage = ({data}) => (
  <Layout>
    {<Mission className="clearfix">
      <MissionColor/>
      <MissionStatementContainer>
        <MissionStatement
           header="Computers and Anything Worth Learning"
           content="My name is Shaun Vaughn. I am a software engineer. I created this site to provide a wealth of knowledge in different areas of study."/>
      </MissionStatementContainer>
      <MissionImageContainer>
        <img src={homeImage} alt="digital abstraction" />
      </MissionImageContainer>
    </Mission>}
    <div>
      <RecentPost>
      <div className="postItemsList">
        {data.allMarkdownRemark.nodes.map(({frontmatter, ...node}, index) => (
          <PostItem
            excerpt={node.excerpt}
            publishedDate={frontmatter.date}
            title={frontmatter.title}
            tags={frontmatter.tags}
            path={node.fields.slug}
          />

        ))}
      </div>
      </RecentPost>
    </div>
  </Layout>
)

export default IndexPage;

export const query = graphql`
{
  allMarkdownRemark {
    nodes {
      frontmatter {
        date
        tags
        title
      }
      timeToRead
      fields {
        slug
      }
      excerpt(pruneLength: 50, truncate: true)
    }
  }
}
`;
