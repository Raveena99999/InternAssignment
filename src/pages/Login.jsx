import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // Example navigation after successful sign-in
    // navigate('/dashboard'); // Or wherever
  };

  return (
    // <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="container">
        <h1 className="heading">Sign in to your Popex account</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><br />
        <div className="button-container">
            <form onSubmit={handleSignIn} className="form-container">

  <div className="input-group">
    <input
      type="email"
      id="email"
      placeholder=" "
      value={email}
      required
      onChange={(e) => setEmail(e.target.value)}
      className="input-field"
    />
    <label htmlFor="email">Email Address</label>
  </div>

  <div className="input-group">
    <input
      type="password"
      id="password"
      placeholder=" "
      value={password}
      required
      onChange={(e) => setPassword(e.target.value)}
      className="input-field"
    />
    <label htmlFor="password">Password</label>
  </div>

  <button type="submit" className="primary-button">Login</button>
</form>

          {/* <form onSubmit={handleSignIn} className="form-container">
            <span>Email Address</span><br/>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            /><br/><br/>
          <span>Password</span><br/>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            /> <br/><br/>
            <button type="submit" className="primary-button">Login</button>
          </form><br/> */}
         
        </div>
      </div>
    // </div>
  );
}
