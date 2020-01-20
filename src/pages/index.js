import React from "react";
import {graphql} from 'gatsby';
import styled from 'styled-components';

import Layout from "../components/layout";
import { MissionStatement } from "../components/MissionStatement";
import homeImage from "../images/digitalabstract.png";
import iConImage from "../images/iconstituentlogo.jpg";
import rockdoveImage from "../images/rockdovelogo.jpg";
import catalystImage from "../images/catalystlogo.png";
import backgroundImage from "../images/honeycombbackground.jpg";
import { Card } from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faJava, faJs } from "@fortawesome/free-brands-svg-icons";

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

const PostItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  .svg-inline--fa {
    color: #0f7bc1;
  }
`;

const ProfileSection = styled.div`
  width: 50%;
  @media (max-width: 800px) {
    width: auto;
  }
  padding-left: 10px;
  padding-right: 10px;
  word-break: break-word;
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
           header="Hi my name is Shaun Vaughn"
           content={`I am a software engineer. My love of software started with videogames. 
           As a kid, I played all types of games: Mario Brothers, Golden Eye, Final Fantasy, Counter-Strike, and many more.
           As I got older, I slowly transitioned from living in simulations to building simulations. I wanted to build the worlds that
          I played. In short, after high school I studied game design and development which eventually lead to my career as a software engineer.
          `}/>
      </MissionStatementContainer>
      <MissionImageContainer>
        <img src={homeImage} alt="digital abstraction" />
      </MissionImageContainer>
    </Mission>}
    <ProfileContainer>
      <ProfileSection>
        <h3>Experience</h3>
        <Card
          header="RockDove Solutions"
          meta="Crisis Management"
          logoSrc={rockdoveImage}
          description={`
            Currently working with the .NET/.NET Core stack, docker, and the cloud. 
            Developed many key applications: data analytics dashboard, issue management, import/export tools, 
            and team collaboration applications.
          `}
        />
        <Card
          header="iConstituent"
          meta="Congressional CRM"
          logoSrc={iConImage}
          description={`
          CRM developed using .NET stack. 
          Developed reports, constituent mail and case work modules, and reusable UI components.
          `}
        />
        <Card
          header="Catalyst IT Services"
          meta="Software Consulting"
          logoSrc={catalystImage}
          description={`
          Worked as a developer/consultant. Work consisted of onsite client meetings and software development.
          Developed many applications using a pleothra of technologies to meet clients' specifications.
          `}
        />
      </ProfileSection>
      <ProfileSection>
        <h3>Skills</h3>
        <Card
          header="JavaScript"
          logo={<FontAwesomeIcon icon={faJs} size="6x" />}
          logoBorder="none"
          description={` 
            10+ years of  extensive work experince with Javascript. I am highly proficient. I having an understanding of the
            in and outs of the both ES5 and ES6. In addition to language depth, I also have in depth knowledge of
            various libraries and frameworks. These include React, Redux, AngularJS, Jquery, Telerik, RiotJS, and more.
          `}
        />

      <Card
          header="Microsoft"
          logo={<FontAwesomeIcon icon={faMicrosoft} style={{fontSize: '6.2em'}} />}
          logoBorder="none"
          description={`
            6+ years of working in the Microsoft stack. This includes SQL Server, .NET Framework and
            .NET Core. I have done everything from data warehousing and ETL to application work
            in the backend, middle tier, and front end.
          `}
        />

      <Card
          header="Java"
          logo={<FontAwesomeIcon icon={faJava} style={{fontSize: '5em'}} />}
          logoBorder="none"
          description={`
            3+ years of work experience with Java. I have built many services using Java Spring. In addition to Spring, I have also worked with Android.
          `}
        />
      <Card
          header="Algorithms and Data Structures"
          logo={<FontAwesomeIcon icon={faLaptopCode} style={{fontSize: '4.2em'}} />}
          logoBorder="none"
          description={
          <React.Fragment>
            Proficient with alogrithms and data structures in multiple languages including: C#, C++, JavaScript, and Java.
            I Have used and implemented various algorithms and data structures for work and as a hobby. This is evident but
            not limited to work shown at
            <a style={{marginLeft: '5px'}} target="_blank" href="https://github.com/vaughnshaun/ComputerScience">
              https://github.com/vaughnshaun/ComputerScience
            </a>.
          </React.Fragment>
          }
        />
      </ProfileSection>
    </ProfileContainer>
    {/*<div>
      <RecentPost>
      <PostItemsList>
        {data.allMarkdownRemark.nodes.map(({frontmatter, ...node}, index) => (
          <PostItem
            excerpt={node.excerpt}
            publishedDate={frontmatter.date}
            title={frontmatter.title}
            tags={frontmatter.tags}
            path={node.fields.slug}
          />

        ))}
      </PostItemsList>
      </RecentPost>
        </div>*/}
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
