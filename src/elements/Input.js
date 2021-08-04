import React from 'react';
import styled from 'styled-components';
import { Text, Grid  } from './index';

const Input = (props) => {
    const { label,placeholder,_onChange } = props;

    return (
        <React.Fragment>
            <Grid>
                <Text margin="0px">{label}</Text>
                <ElInput placeholder={placeholder} onChange={_onChange} />
            </Grid>
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
    border: 1px solid #212121;
    width: 100%;
    padding:12px 4px;
    box-sizing: border-box;
`;
export default Input;