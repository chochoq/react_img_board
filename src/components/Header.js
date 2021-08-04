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

                        <Button>회원가입</Button>


                        <Button>로그인</Button>

                </Grid>
            </Grid>
            
        </React.Fragment>
    )
}

Header.defaultProps = {
    pages: [],
};

export default Header;