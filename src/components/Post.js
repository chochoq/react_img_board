import React from 'react';

import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';

const Post = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex padding='16px'>
                    <Image shape="circle" src={props.src}></Image>

                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                    <button>수정</button>

                </Grid>
                <Grid >
                    <Image shape="rectangle" src={props.src}></Image>
                </Grid>
                <Grid padding='16px'>
                    <Text>{props.contents}</Text>

                </Grid>
                <Grid padding='16px'>
                    <Text bold>댓글 {props.comment_cnt}개</Text>
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