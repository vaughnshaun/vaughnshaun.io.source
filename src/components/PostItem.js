import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Chip from './Chip';

const Item = styled.article`
    border-style: solid;
    border-width: 1px;
    border-color: lightgray;
    padding: 10px;
    //box-shadow: 0px 2px 4px 1px rgba(128, 128, 128, .3);
    background: white;
    width: 200px;
    height: 250px;
    z-index: 99;
    position: relative;
`

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 0px;
`;

const PostMeta = styled.div`
    font-size: 14px;
    color: #828282;
`;

const Tags = styled.div`
    > * {
        margin-right: 10px;
    }
`;

const PublishedDate = styled.time.attrs(props => ({
    datetime: props.publishedDate
}))``;

const PostItem = ({title, publishedDate, path, excerpt, tags}) => (
    <Item>
        <header>
            <Title><Link to={path}>{title}</Link></Title>
        </header>
        <PostMeta>
            <PublishedDate>
                {publishedDate}
            </PublishedDate>
        </PostMeta>
        <div>
            {excerpt}
        </div>
        <Tags>
            {tags.map(t => <Chip>{t}</Chip>)}
        </Tags>
    </Item>
);

PostItem.propTypes = {
    title: PropTypes.string,
    publishedDate: PropTypes.any,
    path: PropTypes.string,
    excerpt: PropTypes.string,
    tags: PropTypes.array
};

PostItem.defaultProps = {
    tags: []
};

export default PostItem;