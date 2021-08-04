import React from 'react';

import { Input,Button,Text,Grid } from '../elements/index';

const Login = (props) => {
    
    return(
        <React.Fragment>
            <Grid padding='16px'>
                <Text size='32px' bold>login</Text>
                <Grid padding='10px 0px'> 
                    <Input label='아이디' placeholder='아이디를 입력해주세요' _onChange={()=>{console.log('아이디')} }/>
                </Grid>
                <Grid padding='10px 0px'> 
                    <Input label='비밀번호' placeholder='비밀번호를 입력해주세요' _onChange={() => { console.log('비밀번호') }} />
                </Grid>
                <Button margin='10px 0px' text='로그인하기' _onClick={()=>{console.log('로그인')} }/>
            </Grid>
        </React.Fragment>
    )
}

export default Login;