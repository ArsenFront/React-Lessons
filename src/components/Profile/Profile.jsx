import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://bipbap.ru/wp-content/uploads/2021/09/1577348890_17-730x380.jpg' />
            </div>
            <div>
                avatar + discripshen
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;