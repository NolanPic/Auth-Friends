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
        <>
            {friends.length ? (
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
                            <tr key={friend.id}>
                                <td>{friend.name}</td>
                                <td>{friend.age}</td>
                                <td>{friend.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            : (
                <p>Loading...</p>
            )}
        </>
        
    );
};

export default Friends;
