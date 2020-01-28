import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();

    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState(null);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        if(credentials.username.length && credentials.password.length) {
            axios.post(`${baseURL}/login`, credentials)
                .then(res => {
                    // set token
                    localStorage.setItem('token', res.data.payload);
                    setError(null);
                    history.push('/friends');
                })
                .catch(err => {
                    console.warn(err);
                    setError('Invalid credentials.');
                });
            }
        else {
            setError('Username and password are required.');
        }
    };

    return (
        <form onSubmit={login}>
            {error && <p>{error}</p>}
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
