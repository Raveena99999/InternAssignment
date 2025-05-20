import React, { useState } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className="fieldset-wrapper">
          <fieldset>
            <legend>Email Address</legend>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />
          </fieldset>
        </div>

        <div className="fieldset-wrapper">
          <fieldset>
            <legend>Password</legend>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </fieldset>
        </div>

        <button className="loginBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
