import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopUsers from "./pages/TopUsers";
import Posts from "./pages/Posts";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-users" element={<TopUsers />} />
            <Route path="/posts/:type" element={<Posts />} />
        </Routes>
    );
};

export default App;
