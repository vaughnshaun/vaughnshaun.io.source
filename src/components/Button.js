import styled from 'styled-components';

export const Button = styled.button`
    text-decoration: none;
    border-style: solid;
    padding: 10px;
    font-weight: bold;
    border-radius: 4px;
    border-width: 2px;
    color: #2a7ae2;
    border-color: #2a7ae2;
    background: transparent;
    cursor: pointer;
    
    &:hover {
        color: #111;
        border-color: #111;
    }

    &:visited {
        color: #1756a9;
        border-color: #1756a9;
    }
`;