import React from 'react';

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <h3>Post ID: {post.id}</h3>
            <p>{post.content}</p>
        </div>
    );
};

export default PostCard;
