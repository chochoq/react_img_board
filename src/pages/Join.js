import React from 'react';

import Header from '../components/Header';
import { Input,Button } from '../elements/index';
import Text from '../elements/Text';

const Join = (props) => {
    
    return(
        <React.Fragment>
            <Header width='5px' />
            <h1>Join</h1>
            <Text margin='5px'>아이디</Text>
            <Input placeholder='아이디를 입력해주세요'></Input>
            <Text margin='5px'>닉네임</Text>
            <Input placeholder='닉네임을 입력해주세요'></Input>
            <Text margin='5px'>비밀번호</Text>
            <Input placeholder='비밀번호를 입력해주세요'></Input>
            <Text margin='0px'>비밀번호확인</Text>
            <Input placeholder='비밀번호를 다시 입력해주세요'></Input>

            <Button>로그인하기</Button>

        </React.Fragment>
    )
}

export default Join;