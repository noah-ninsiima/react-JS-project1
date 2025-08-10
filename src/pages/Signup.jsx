import { useState } from 'react';
import './Signup.css';

export default function Signup() {
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: ''
      });

const [error, setError] = useState('');
const handleChange = (e) => {
setFormData(prev => ({
...prev,
[e.target.name]: e.target.value
}));
  };
const handleSubmit = (e) => {
e.preventDefault();

if (formData.password !== formData.confirmPassword) {
setError("Password and Confirm Password do not match.");
      return;
    }

    localStorage.setItem('user', JSON.stringify(formData));

   
    setFormData({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
    });
    setError('');
    alert("Signup successful!");
  };

      return (
  <div className="signup-container">
    <h2>Signup</h2>
    {error && <p className="signup-error">{error}</p>}

    <form className="signup-form" onSubmit={handleSubmit}>
      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />

      <button type="submit">Sign Up</button>
    </form>
  </div>
);

}
