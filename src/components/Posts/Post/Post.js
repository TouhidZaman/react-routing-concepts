import React from 'react';
import PostActiveLink from './PostActiveLink/PostActiveLink';

const Post = ({post}) => {
    return (
        <PostActiveLink to={`/posts/${post.id}`}>
            {post.id}
        </PostActiveLink>
    );
};

export default Post;