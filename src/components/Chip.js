import {DropShadow} from './DropShadow';
import styled from 'styled-components';

const colorMap = {
    primary: {background: 'blue', color: 'white'},
    secondary: {background: 'red', color: 'white'}
};

const Chip = styled(DropShadow).attrs({as: 'span'})`
    font-size: 12px;
    padding: 5px;
    border-radius: 2px;
    display: inline;
    background: ${props => !props.color ? '#e1e1e1' : colorMap[props.color].background};
    color: ${props => !props.color ? '#424242' : colorMap[props.color].background};
`;

export default Chip;