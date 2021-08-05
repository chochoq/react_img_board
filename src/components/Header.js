import React from 'react';
import {Button, Grid, Text} from '../elements/index';
import { BrowserRouter, Route,Link } from 'react-router-dom';


const Header = (props) => {
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