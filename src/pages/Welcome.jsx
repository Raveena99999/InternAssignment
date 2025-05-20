// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// export default function Welcome() {
//   const navigate = useNavigate();

//   return (
//     <div className='mobile-container'>
//       <div className="container">
//         <h1>Welcome to Popex</h1>
//        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
//         <div className="button-container">
//           <button className="primary-button">Create Account</button>
//           <button className="secondary-button" onClick={() => navigate('/login')}>Already Registered?</button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { useNavigate } from "react-router-dom";
import '../style/welcome.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="content">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
        <button className="primary" onClick={() => navigate("/create-account")}>
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
