import React from 'react';

import Grid from '../elements/Grid';
import Image from '../elements/Image';

const Post = (props) => {
    return (
        <React.Fragment>
            <Grid padding='16px' >
                <Grid is_flex>
                    <Image shape="circle" src={props.src}></Image>
                    
                    <div>유저사진/유저이름/ㄱㅔ시글작석시간/수정버튼</div>
                </Grid>
                <Grid padding='16px'>
                    <div>내용이미지</div>
                </Grid>
                <Grid>
                    <div>내용</div>
                </Grid>
                <Grid padding='16px'>
                <div>댓글 카운트</div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info: {
        user_name: 'junho',
        user_profile: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/VCEZ4GJJG7PYYYJ3TGVUFY63R4.jpg',   
    },
    image_url: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/VCEZ4GJJG7PYYYJ3TGVUFY63R4.jpg',
    contents: '내용',
    comment_cnt: '10',
    insert_dt: "2021-07-31 10:00:00",
};



export default Post;