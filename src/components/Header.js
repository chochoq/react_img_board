import React from 'react';
import Button from '../elements/Button';


const Header = (props) => {
    return (
        <React.Fragment>
            <Button>메인</Button>
            <Button>회원가입</Button>
            <Button>로그인</Button>
        </React.Fragment>
    )
}

Header.defaultProps = {
    pages: [],
};

export default Header;