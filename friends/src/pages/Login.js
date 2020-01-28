import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/axiosWithAuth';

const Login = () => {

    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        axios.post(`${baseURL}/login`, credentials)
            .then(res => {
                // set token
                localStorage.setItem('token', res.data.payload);
            })
            .catch(err => console.warn(err));
    };

    return (
        <form onSubmit={login}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button type="submit">Log in</button>
        </form>
    );
};

export default Login;
