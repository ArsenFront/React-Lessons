import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (
       <div className={s.item}>
        <img src='https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/ee5d54ff-e5b4-443d-a392-604c61c298c6/600x900' />
        {props.message}

            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    );
}

export default Post;