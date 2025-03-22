import React from "react";
import { useParams } from "react-router-dom";

const Posts = () => {
    const { type } = useParams(); 

    return (
        <div>
            <h1>Showing {type} Posts</h1>
        </div>
    );
};

export default Posts;
