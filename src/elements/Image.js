import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
    const { shape, src, size } = props;
    
    const styles = {
        src: src,
        size: size,
    }

    if (shape === "circle") {
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if (shape === "rectangle") {
        return (
            <div></div>
        )
    }

    return (
        <React.Fragment>

        </React.Fragment>
    )
};

Image.defaultProps = {
    shape: "circle",
    src: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/VCEZ4GJJG7PYYYJ3TGVUFY63R4.jpg',
    size: 36,
};

const ImageCircle = styled.div`
    --size:${(props) => props.size}px;
    
    width:var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url('${(props) => props.src}');
    background-size: cover;
    margin:4px;
`;


export default Image;