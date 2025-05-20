import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    company: "",
    isAgency: "Yes"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate account creation
    console.log("Account Created", formData);
    navigate("/profile");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create your <br /> <h2>PopX account</h2></h2>

        <label>Full Name*</label>
        <input name="fullName" required value={formData.fullName} onChange={handleChange} />

        <label>Phone number*</label>
        <input name="phoneNumber" required value={formData.phoneNumber} onChange={handleChange} />

        <label>Email address*</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange} />

        <label>Password*</label>
        <input type="password" name="password" required value={formData.password} onChange={handleChange} />

        <label>Company name</label>
        <input name="company" value={formData.company} onChange={handleChange} />

        <p>Are you an Agency?*</p>
        <div className="radio-group">
          <label>
            <input type="radio" value="Yes" name="isAgency" checked={formData.isAgency === "Yes"} onChange={handleChange} />
            Yes
          </label>
          <label>
            <input type="radio" value="No" name="isAgency" checked={formData.isAgency === "No"} onChange={handleChange} />
            No
          </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
