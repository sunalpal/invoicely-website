import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import external CSS

import ManImg from "../assets/img3.webp";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sublogin");
  };

  return (
    <>
      <img src={ManImg} className="login-img" alt="Login Visual" />
      <button className="login-button" onClick={handleClick}>
        Click Me for Login
      </button>
    </>
  );
};

export default Login;
