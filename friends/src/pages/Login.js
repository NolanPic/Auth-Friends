import React, { useState } from 'react';

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
