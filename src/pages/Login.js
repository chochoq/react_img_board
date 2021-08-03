import React from 'react';

import { Input,Button,Text,Grid } from '../elements/index';

const Login = (props) => {
    
    return(
        <React.Fragment>
            <Grid padding='16px'>
                <h1>login</h1>
                <Grid>
                    <Text margin='5px'>아이디</Text>
                    <Input placeholder='아이디를 입력해주세요'></Input>
                    <Text margin='0px'>비밀번호</Text>
                    <Input placeholder='비밀번호를 입력해주세요'></Input>
                </Grid>
                <Button margin='10px 0px'>로그인하기</Button>
            </Grid>

        </React.Fragment>
    )
}

export default Login;