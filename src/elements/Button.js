import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const { text,_onClick } = props;
    
    return (
        <React.Fragment>
            <Btn onClick={_onClick}>{text}</Btn>
        </React.Fragment>
    );
}

Button.defaultProps = {
    text: "텍스트",
    _onClick:()=>{}
};

const Btn = styled.button`
    width: 100%;
    height:100%;
    padding: 12px;
    background-color:#212121;
    color: #ffffff;
    box-sizing: border-box;
    border: none;
`;

export default Button;