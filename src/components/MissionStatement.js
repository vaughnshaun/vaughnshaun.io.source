import styled from 'styled-components';
import React, {Fragment} from 'react';
import { Button } from './Button';

const MissionHeader = styled.div`
    font-weight: bold;
    font-size: 50px;
    color: #0f7bc1;
    line-height: 1.1;
    margin-bottom: 30px;
`;

const MissionContent = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
`;

export function MissionStatement(props){
    return (
    <Fragment>
        <MissionHeader>{props.header}</MissionHeader>
        <MissionContent>{props.content}</MissionContent>
    </Fragment>);
}