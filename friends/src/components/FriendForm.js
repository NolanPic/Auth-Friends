import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendForm = () => {
    const { id } = useParams();
    const history = useHistory();
    const initialFriend = {
        id: 0,
        name: '',
        age: '',
        email: ''
    };
    const [ friend, setFriend ] = useState(initialFriend);
    const [ error, setError ] = useState('');

    useEffect(() => {
        // if user is editing
        axiosWithAuth().get(`/friends/${id}`)
            .then(res => setFriend(res.data))
            .catch(err => console.warn(err));
        
    }, [id]);

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: [e.target.value]
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        let endpoint;
        let method;
        if(friend.id > 0) {
            endpoint = `/friends/${friend.id}`;
            method = axiosWithAuth().put;
        }
        else {
            endpoint = '/friends';
            method = axiosWithAuth().post;
        }
        method(endpoint, friend)
            .then(res => {
                setFriend(initialFriend);
                history.push('/friends');
            })
            .catch(err => {
                console.warn(err);
                setError(err.message);
            });
    };

    return (

        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    value={friend.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                <p>Age</p>
                <input
                    type="number"
                    name="age"
                    value={friend.age}
                    onChange={handleChange}
                />
            </label>
            <label>
                <p>Email</p>
                <input
                    type="email"
                    name="email"
                    value={friend.email}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default FriendForm;
