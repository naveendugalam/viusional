import React, { useState } from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Your authentication logic goes here
    // For simplicity, always navigate to the home page

    navigate("/home");
  };

    return (
        <div className='wrapper'>
            <form onSubmit={{handleLogin}}>
               <div style={{backgroundImage: `url(${require("../Components/Assets/LogoImage.png")})`, height: "40px", width: "100%", backgroundSize: "contain"}} />
                <h1>Welcome</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="Password" placeholder="Password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button onClick={handleLogin}>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>

            </form>
        </div>
    );
};

export default LoginForm;