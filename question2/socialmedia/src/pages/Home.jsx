import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to Home Page</h1>
            <nav>
                <ul>
                    <li><Link to="/top-users">Top Users</Link></li>
                    <li><Link to="/posts/latest">Latest Posts</Link></li>
                </ul>
            </nav>
            <button onClick={() => navigate("/posts/trending")}>Go to Trending Posts</button>
        </div>
    );
};

export default Home;
