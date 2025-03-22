import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/users';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const userList = await fetchUsers();
            setUsers(userList);
        };
        getUsers();
    }, []);

    return (
        <div>
            <h2>Top Users</h2>
            <ul>
                {Object.entries(users).slice(0, 5).map(([id, name]) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
