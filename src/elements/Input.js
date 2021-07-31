import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
    const { width, height, placeholder,padding,margin, children } = props;

    const styles = {
        width: width,
        height: height,
        padding:padding,
        placeholder: placeholder,
        margin:margin,
    }
    return (
        <InputBox {...styles}>
            {children}
        </InputBox>
    );
}

Input.defaultProps = {
    placeholder: false,
    margin: false,
};

const InputBox = styled.input`
    placeholder:${(props)=>props.placeholder};
    width: 80%;
    height:100%;
    padding: 5px;
    margin: ${(props)=>props.margin};
`;

export default Input;