


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../style/login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
   
//     email: "",
//     password: "",
  
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate account creation
//     console.log("Account Created", formData);
//     navigate("/profile");
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>
//           Signin your <br /> <h2>PopX account</h2>
//         </h2>

//         <p>
//           Lorem ipsum dolor sit amet,
//           <br /> consectetur adipiscing elit.
//         </p>

//         <label>Email address*</label>
//         <input
//           type="email"
//           name="email"
//           required
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter email address"
//         />

//         <label>Password*</label>
//         <input
//           type="password"
//           name="password"
//           required
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Enter password"
//         />

  


//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import '../style/login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const correctEmail = 'test@example.com';
  const correctPassword = 'password123';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email === correctEmail &&
      formData.password === correctPassword
    ) {
      setLoggedIn(true);
    } else {
      setError('Invalid email or password.');
    }
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
            <legend>
              Email Address 
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

        {/* Password Field */}
        <div className="fieldset-wrapper">
          <fieldset>
            <legend>
              Password 
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

        {error && <p className="error">{error}</p>}

        <button className='loginBtn' type="submit">Login</button>

        {loggedIn && <p className="success">Login successful!</p>}
      </form>
    </div>
  );
};

export default Login;
