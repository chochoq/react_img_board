import React from 'react';

import { Input } from '../elements/index';
import Text from '../elements/Text';

const Login = (props) => {
    
    return(
        <React.Fragment>
            <h1>login</h1>
            <Text margin='5px'>아이디</Text>
            <Input placeholder='아이디를 입력해주세요'></Input>
            <Text margin='0px'>비밀번호</Text>
            <Input placeholder='비밀번호를 입력해주세요'></Input>

        </React.Fragment>
    )
}

export default Login;