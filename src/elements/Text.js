import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
    const { bold, color, size, children } = props;
    
    const styles = {
        bold: bold,
        color: color,
        size: size,
    };

    return (
        <TextP {...styles}>
            {children}
        </TextP>
    )
};

Text.defaultProps = {
    bold: false,
    color: '#222831',
    size: '14px',
};

const TextP = styled.p`
    color:${(props) => props.color};
    font-size:${(props) => props.size};
    font-weight:${(props)=> (props.bold? "600":"400")};
`;

export default Text;