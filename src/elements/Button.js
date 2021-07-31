import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const { width, height, padding, margin, bg, children } = props;
    
    const styles = {
        width: width,
        height: height,
        padding: padding,
        margin: margin,
        bg: bg,
    }
    return (
        <React.Fragment>
            <Btn {...styles}>
                {children}
            </Btn>
        </React.Fragment>
    );
}

Button.defaultProps = {
    bg: false,
    width: '80%',
    margin: '10px',
};

const Btn = styled.button`
    width: ${(props)=>props.width};
    height:100%;
    padding: 5px;
    margin: ${(props) => props.margin};
    bg:${(props)=>props.bg? `background-color: ${props.bg}`:''};
`;

export default Button;