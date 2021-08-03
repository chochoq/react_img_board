import React from 'react';

import { Input,Button,Text,Grid } from '../elements/index';

const Join = (props) => {
    
    return(
        <React.Fragment>
            <Grid padding='16px'>
                <Grid>
                    <h1>Join</h1>
                    <Text margin='5px'>아이디</Text>
                    <Input placeholder='아이디를 입력해주세요'></Input>
                    <Text margin='5px'>닉네임</Text>
                    <Input placeholder='닉네임을 입력해주세요'></Input>
                    <Text margin='5px'>비밀번호</Text>
                    <Input placeholder='비밀번호를 입력해주세요'></Input>
                    <Text margin='0px'>비밀번호확인</Text>
                    <Input placeholder='비밀번호를 다시 입력해주세요'></Input>
                </Grid>
                <Button margin='10px 0px'>로그인하기</Button>
            </Grid>
        </React.Fragment>
    )
}

export default Join;