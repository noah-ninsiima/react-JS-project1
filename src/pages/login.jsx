import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Step 1: Get saved user from localStorage
    const savedUser = JSON.parse(localStorage.getItem('user'));

    // Step 2: Check if saved user exists and matches input
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      // Successful login
      localStorage.setItem('isLoggedIn', 'true');
      setError('');
      navigate('/products');
    } else {
      // Show error
      setError('Invalid email or password');
    }
  };

  return (
  <div className="login-container">
    <h2>Login</h2>
    {error && <p className="login-error">{error}</p>}

    <form className="login-form" onSubmit={handleLogin}>
      <input
      type="email"
      placeholder="Email"
      value={email}
      required
      onChange={(e) => setEmail(e.target.value)}
      />
    <input
    type="password"
    placeholder="Password"
    value={password}
    required
    onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  </div>
);
}
