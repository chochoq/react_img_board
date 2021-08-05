import React from 'react';

import { Input,Button,Text,Grid } from '../elements/index';

const Join = (props) => {
    
    return(
        <React.Fragment>
            <Grid padding='16px'>
                <Text size='32px' bold>Join</Text>
                <Grid padding='10px 0px'>
                    <Input placeholder='아이디를 입력해주세요' label='아이디' _onChange={()=>{console.log('아이디')} }></Input>
                </Grid>
                <Grid padding='10px 0px'>
                    <Input placeholder='닉네임을 입력해주세요' label='닉네임' _onChange={()=>{console.log('닉네임')} }></Input>
                </Grid>
                <Grid padding='10px 0px'>
                    <Input placeholder='비밀번호를 입력해주세요' label='비밀번호' _onChange={()=>{console.log('비밀번호')} }></Input>
                </Grid>
                <Grid padding='10px 0px'>
                    <Input placeholder='비밀번호를 다시 입력해주세요' label='비밀번호 확인' _onChange={()=>{console.log('비번확인')} }></Input>
                </Grid>
                <Grid padding='10px 0px'>
                <Button text='회원가입' _onClick={()=>{console.log('회원가입')} }/>

                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Join;