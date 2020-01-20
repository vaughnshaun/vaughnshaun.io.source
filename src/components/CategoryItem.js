
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    text-align: center;
    position: relative;
    padding: 10px;
    width: 256px;
    min-height: 184px;
    max-height: 184px;
    margin-bottom: 10px;
    transition: transform .5s;
    cursor: pointer;

    :hover {
        transform: scale(1.1);
        z-index: 2;
    }
`;

const ImageContainer = styled.div`
    width: 256px;
    height: 164px;
    overflow: hidden;
    margin-bottom: 10px;
    
    > * {
        max-width: 100%;
    }
`;

const  Content = styled.div``;
const Label = styled.div`
    font-weight: bold;
    text-align: center;
    color: #424242;
`;

export const CategoryItem = ({name, image, imageSrc, imageAlt}) => (
    <Container>
        <ImageContainer>
            {image ? image : <img alt={imageAlt} src={imageSrc}/>}
        </ImageContainer>
        <Content>
            <Label>
                {name}
            </Label>
        </Content>
    </Container>
);

CategoryItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.any,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string
};