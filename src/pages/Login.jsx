import React, { useState } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const [error, setError] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);

  // const correctEmail = 'test@example.com';
  // const correctPassword = 'password123';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     formData.email === correctEmail &&
  //     formData.password === correctPassword
  //   ) {
  //     setLoggedIn(true);
  //   } else {
  //     setError('Invalid email or password.');
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate account creation
    console.log("Account Created", formData);
    navigate("/profile");
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>
          Signin to your <br /> <h2>PopX account</h2>
        </h2>

        <p>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>
        {/* Email Field */}
        <div className="fieldset-wrapper">
          <fieldset>
            <legend>Email Address</legend>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        {/* Password Field */}
        <div className="fieldset-wrapper">
          <fieldset>
            <legend>Password</legend>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        {/* {error && <p className="error">{error}</p>} */}

        <button className="loginBtn" type="submit">
          Login
        </button>

        {/* {loggedIn && <p className="success">Login successful!</p>} */}
      </form>
    </div>
  );
};

export default Login;
