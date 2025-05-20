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
    isAgency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Created", formData);
    navigate("/profile");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>
          Create your <br /> PopX account
        </h2>

        <div className="fieldset-wrapper">
          <fieldset>
            <legend>
              Full Name <span className="required">*</span>
            </legend>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <div className="fieldset-wrapper">
          <fieldset>
            <legend>
              Phone number <span className="required">*</span>
            </legend>
            <input
              type="tel"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <div className="fieldset-wrapper">
          <fieldset>
            <legend>
              Email Address <span className="required">*</span>
            </legend>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <div className="fieldset-wrapper">
          <fieldset>
            <legend>
              Password <span className="required">*</span>
            </legend>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <div className="fieldset-wrapper">
          <fieldset>
            <legend>Company name</legend>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div style={{ display: "flex" }}>
          <p className="agencyPara">Are you an Agency?</p>
          <span style={{ marginLeft: "5px" }} className="required">
            *
          </span>
        </div>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Yes"
              name="isAgency"
              checked={formData.isAgency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="No"
              name="isAgency"
              checked={formData.isAgency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
