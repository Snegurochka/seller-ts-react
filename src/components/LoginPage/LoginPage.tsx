import React, { useState } from "react";
import Layout from "../Layout/Layout";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    return (<Layout header='Login' classPage='login'>
        <form action="#" method="post">
            <label><span>Email address</span>
                <input
                    type='text'
                    value={username}
                    name='username'
                    placeholder="example@example.com"
                    onChange={(evt) => { setUsername(evt.currentTarget.value) }}
                />
            </label>
            <label><span>Password</span>
                <input
                    type='password'
                    value={password}
                    name='password'
                    onChange={(evt) => { setPassword(evt.currentTarget.value) }}
                />
            </label>
        </form>
    </Layout>)
}

export default LoginPage;