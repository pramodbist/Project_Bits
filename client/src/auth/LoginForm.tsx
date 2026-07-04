import { useState } from 'react';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div style={{ maxWidth: '320px', margin: '50px auto', fontFamily: 'sans-serif' }}>
            <h2>Login Form</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
            />
            <button type="button" style={{ padding: '8px 12px' }}>
                Login
            </button>
        </div>
    );
}