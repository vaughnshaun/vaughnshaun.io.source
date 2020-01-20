import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: none;
    margin-right: auto;
    margin-left: auto;
    padding-right: 30px;
    padding-left: 30px;

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
    @media screen and (max-width: 600px) {
        float: none;
        width: calc(100% - (30px / 2));
    }
`;

const Col3 = styled(Col).attrs({as: 'div'})`
    width: width: calc(45% - (30px / 2));
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
                        <a href="mailto:vaughnshaun@gmail.com"
                        >
                            vaughnshaun@gmail.com
                        </a>
                    </li>
                </ContactList>
            </Col3>
            <Col3>
                <SocialMediaList>
                    {/*<li>
                        <a href="https://github.com/VaughnShaun">
                            <SvgIcon>
                                <use xlink:href="/assets/minima-social-icons.svg#github"></use>
                            </SvgIcon> 
                            <span class="username">VaughnShaun</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ShaunVaughn">
                            <SvgIcon class="svg-icon">
                                <use xlink:href="/assets/minima-social-icons.svg#linkedin"></use>
                            </SvgIcon> 
                            <span class="username">ShaunVaughn</span>
                        </a>
                    </li>*/}
                </SocialMediaList>
            </Col3>
        </ColWrapper>
    </Wrapper>
);