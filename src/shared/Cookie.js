
//저장 된 쿠키 가져오기
const getCookie = (name) => {
    // 쿠키 값 가져오기
    let value ='; '+ document.cookie;

    // `; ${name}=` 기준으로 나눠서 파싱
    let parts = value.split(`; ${name}=`);
    // 
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
};

// 쿠키를 저장하는 함수
const setCookie = (name, value, exp = 5) => {
    let date = new Date();
    // 만료하기위한 날짜를 만들어준다
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    // 저장
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

// 쿠키삭제
const deleteCookie = (name) => {
    let date = new Date('2020-01-01').toUTCString();

    console.log(date);
    
    document.cookie = name + '=; expires=' + date;
};

export {getCookie,setCookie,deleteCookie};