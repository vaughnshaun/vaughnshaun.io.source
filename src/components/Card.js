import styled from 'styled-components';
import React from 'react';

const Root = styled.div`
padding: 10px;
padding-top: 0px;
padding-bottom: 5px;
padding-left: 0px;
min-height: 110px;
margin-bottom: 10px;
line-height: 1.2;
`;

const Logo = styled.div`
float: left;
margin-right: 10px;
width: ${props => !props.logo ? '96px' : 'auto'};
height: ${props => !props.logo ? '96px' : 'auto'};
padding: ${props => !props.logo ? '0' : '5px'};
position: relative;
top: 10px;
border-width: 1px;
border-style: ${props => props.logoBorder ? props.logoBorder: 'solid'};
border-color: lightgray;
`;

const Content = styled.div`
    top: 7px;
    position: relative;
`;

const Header = styled.div`
    font-size: 22px;
`;

const Meta = styled.div`
    color: gray;
`;

const Description = styled.p`
    word-break: break-word;
    position: relative;
    top: 4px;
`;

export const Card = ({logoSrc, logo, logoBorder, header, meta, description}) => (
    <Root>
        <Logo logo={logo} logoBorder={logoBorder}>
            {logo ? logo : <img alt="Logo" src={logoSrc}/>}
        </Logo>
        <Content>
            <Header>
                {header}
            </Header>
            <Meta>
                {meta}
            </Meta>
            <Description>
                {description}
            </Description>
        </Content>
    </Root>
); 