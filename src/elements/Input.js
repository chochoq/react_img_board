import React from 'react';
import styled from 'styled-components';
import { Text, Grid  } from './index';

const Input = (props) => {
    const { label,placeholder,_onChange } = props;

    return (
        <React.Fragment>
                <Text margin="0px">{label}</Text>
                <input placeholder={placeholder} onChange={_onChange}/>
        </React.Fragment>
    );
}

Input.defaultProps = {
    placeholder: '텍스트를 입력해주세요',
    margin:   false,
    label: '라벨텍스트',
    _onChange:()=>{}
};

const ElInput = styled.input`
    
`;
export default Input;