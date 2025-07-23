import React from 'react';
import { useNavigate } from 'react-router-dom';
useNavigate
const Login = () => {

  const navigate=useNavigate();

  const handleClick=()=>{
    navigate("/sublogin");
  }
  return (
    <>
      <style>
        {`
          .login-button {
            background-color:   background: linear-gradient(135deg, #007bff, #00c6ff);
            color: white;
            margin-top: 2rem;
            padding: 12px 24px;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .login-button:hover {
            background-color: oklch(60.9% 0.126 221.723);
          }

          .login-img {
            max-width: 300px;
            width: 100%;
            height: auto;
            display: block;
            margin: 3rem auto 1rem auto;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <img src="src/assets/img3.webp" alt="Login" className="login-img" />
      <button className="login-button" onClick={handleClick}>Click Me for Login</button>
    </>
  );
};

export default Login;
