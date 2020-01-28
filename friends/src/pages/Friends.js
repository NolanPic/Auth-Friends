import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Friends = () => {

    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => console.warn(err));
    }, []);

    return (
        <table style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {friends.map(friend => (
                    <tr>
                        <td>{friend.name}</td>
                        <td>{friend.age}</td>
                        <td>{friend.email}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    );
};

export default Friends;
