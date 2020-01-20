import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Wrapper = styled.div`
    max-width: none;
    margin-right: auto;
    margin-left: auto;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 0px;

    @media screen and (max-width: 800px){
        padding-right: 15px;
        padding-left: 15px;
    }

    :after {
        content: "";
        display: table;
        clear: both;
    }
`;

const Header = styled.h2`
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 400
`;

const ColWrapper = styled.div`
    font-size: 15px;
    color: #828282;
`;

const Col = styled.div`
    float: left;
    @media screen and (max-width: 600px) {
        float: none;
        width: calc(100% - (30px / 2));
    }
`;

const Col3 = styled(Col).attrs({as: 'div'})`
    width: calc(45% - (30px / 2));
    @media screen and (max-width: 800px) {
        width: calc(100% - (30px / 2));
    }
`;

const SvgIcon = styled.svg`
    width: 16px;
    height: 16px;
    display: inline-block;
    fill: #828282;
    padding-right: 5px;
    vertical-align: text-top;
`;

const ContactList = styled.ul`
    list-style: none;
    margin-left: 0;
    > li {
        margin-bottom: 0
    }
`;

const SocialMediaList = styled.ul`
    list-style: none;
    margin-left: 0;
    > li {
        margin-bottom: 0
    }
`;

export const FooterContent = ({name, image, imageSrc, imageAlt}) => (
    <Wrapper>
        <Header>
            Shaun Vaughn
            <div style={{fontSize: 16}}>
                <p>The personal blog of Shaun Vaughn</p>
            </div>
        </Header>
        <ColWrapper>
            <Col3>
                <ContactList>
                    <li>
                        Shaun Vaughn
                    </li>
                    <li>
                        <a href="mailto:vaughnshaun@gmail.com">
                            vaughnshaun@gmail.com
                        </a>
                    </li>
                </ContactList>
            </Col3>
            <Col3>
                <SocialMediaList>
                    <li>
                    <FontAwesomeIcon style={{marginRight: 5}} size="lg" icon={faGithub} />
                        <a href="https://github.com/VaughnShaun" target="_blank">
                            <span className="username">VaughnShaun</span>
                        </a>
                    </li>
                    <li>
                    <FontAwesomeIcon style={{marginRight: 5}} size="lg" icon={faLinkedin} />
                        <a href="https://www.linkedin.com/in/ShaunVaughn" target="_blank">
                            <span className="username">ShaunVaughn</span>
                        </a>
                    </li>
                </SocialMediaList>
            </Col3>
        </ColWrapper>
    </Wrapper>
);