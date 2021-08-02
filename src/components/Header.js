import React from 'react';
import Button from '../elements/Button';
import Login from '../pages/Login';
import Join from '../pages/Join'; 
import { BrowserRouter, Route,Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <React.Fragment>
            <Link to='/'>
                <Button>메인</Button>
            </Link>
            <Link to='/join'>
                <Button>회원가입</Button>
            </Link>
            <Link to='/login'>
                <Button>로그인</Button>
            </Link>
            
        </React.Fragment>
    )
}

Header.defaultProps = {
    pages: [],
};

export default Header;