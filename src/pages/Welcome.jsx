import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/welcome.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="content">
        <h2>Welcome to PopX</h2>
        <p>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>
        <button className="primary" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button className="secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
