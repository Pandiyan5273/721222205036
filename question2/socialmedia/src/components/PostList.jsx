import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';
import PostCard from './PostCard';

const PostList = ({ type }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const postList = await fetchPosts(type);
            setPosts(postList);
        };
        getPosts();
    }, [type]);

    return (
        <div>
            <h2>{type === "popular" ? "Popular Posts" : "Latest Posts"}</h2>
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    );
};

export default PostList;
