import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Friends = () => {

    const history = useHistory();
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => console.warn(err));
    }, []);

    const addFriend = () => {
        history.push('/friends/0');
    };

    const editFriend = id => {
        history.push(`/friends/${id}`);
    };

    const deleteFriend = id => {
        if(window.confirm('Are you sure you want to remove this friend?')) {
            axiosWithAuth().delete(`/friends/${id}`);
            // update state
            setFriends(friends.filter(friend => friend.id !== id));
        }
    };

    return (
        <>
            <button onClick={addFriend}>Add</button>
            {friends.length ? (
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {friends.map(friend => (
                            <tr key={friend.id}>
                                <td>{friend.name}</td>
                                <td>{friend.age}</td>
                                <td>{friend.email}</td>
                                <td>
                                    <button onClick={() => editFriend(friend.id)}>Edit</button>
                                    <button onClick={() => deleteFriend(friend.id)}>X</button>
                                </td>
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
