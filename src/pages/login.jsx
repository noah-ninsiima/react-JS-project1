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

  
    const savedUser = JSON.parse(localStorage.getItem('user'));

    
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      
      localStorage.setItem('isLoggedIn', 'true');
      setError('');
      navigate('/products');
    } else {
      
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
