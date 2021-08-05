import React from 'react';
import {Button, Grid, Text} from '../elements/index';
import { BrowserRouter, Route,Link } from 'react-router-dom';
import { getCookie, deleteCookie } from '../shared/Cookie';

const Header = (props) => {

    const [is_login, setIsLogin] = React.useState(false);

    React.useEffect(() => {
        let cookie = getCookie('user_id');
        console.log(cookie);
        if (cookie) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    });

    // 쿠키(setIsLogin) 이 true일 때
    if (is_login) {
        return (
            <React.Fragment>
                <Grid is_flex padding='4px 16px'>
                    <Grid >
                        <Link to='/'>
                            <Text margin="0" bold>메인</Text>
                        </Link>
                    </Grid>
                    <Grid is_flex>
                            <Button text='내정보'/>
                            <Button text='알림'/>
                        <Button text='로그아웃'
                            _onClick={()=>{deleteCookie('user_id');}}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
    // 쿠키(setIsLogin) 이 false일 때
    return (
        <React.Fragment>
            <Grid is_flex padding='4px 16px'>
                <Grid >
                    <Link to='/'>
                        <Text margin="0" bold>메인</Text>
                    </Link>
                </Grid>
                
                <Grid is_flex>
                        <Button text='회원가입'/>
                        <Button text='로그인'/>
                </Grid>
            </Grid>
            
        </React.Fragment>
    )
}

Header.defaultProps = {
    pages: [],
};

export default Header;