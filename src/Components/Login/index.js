import React, { useState } from 'react';
import InputComponent from '../common/Input';
import Button from '../common/Button/Button';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginAccount = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExist = users.find((user) => user.email === email && user.password === password);

    if (userExist) {
      userExist.token = generateToken();
      localStorage.setItem('currentUser', JSON.stringify(userExist));
      toast.success('Login successfully');
      navigate('/profile');
    } else {
      toast.error('Invalid Email or password');
    }

    if (!email || !password) {
      toast.error('Error: All Fields are Mandatory.');
      return;
    }
  };

  const generateToken = () => {
    let token = '';
    for (let i = 0; i < 16; i++) {
      token += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    return btoa(token);
  }

  return (
    <div className="login">
      <h1>Signin to your PopX account</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis.</p>
      <InputComponent
        type="email"
        value={email}
        setState={setEmail}
        required={true}
        forValue="email"
        labelText="Email address"
      />
      <br />
      <InputComponent
        type="password"
        value={password}
        setState={setPassword}
        required={true}
        forValue="password"
        labelText="Password"
      />
      <div className="register-btn">
        <Button
          text="Login"
          width="90%"
          bgColor="#cbcbcb"
          onClick={loginAccount}
        />
      </div>
    </div>
  );
}

export default Login;
