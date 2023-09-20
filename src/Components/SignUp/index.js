import React, { useState } from 'react';
import InputComponent from '../common/Input';
import Button from '../common/Button/Button';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [pNum, setPNum] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('Yes');
  const [compnyName,setCompnyName] = useState('')
  const navigate = useNavigate();

  const accountCreate = () => {
    if (!fullName || !pNum || !email || !password) {
      toast.error('Error: All Fields are Mandatory.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExist = users.find((user) => user.email === email);
    if (userExist) {
      toast.error('User Already Exist');
      return;
    }

    const newUser = {
      fullName,
      pNum,
      email,
      password,
      compnyName
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    toast.success('SignUp Successful');
    navigate('/login');
  };

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="SignUp">
      <h1 style={{"padding":"0", "margin":0}}>Create Your
       PopX Account</h1>
      <InputComponent
        type="text"
        value={fullName}
        setState={setFullName}
        required={true}
        forValue="fName"
        labelText="Full Name"
      />
      <br />
      <InputComponent
        type="number"
        value={pNum}
        setState={setPNum}
        required={true}
        forValue="pnum"
        labelText="Phone number"
      />
      <br />
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
      <br />
      
      <InputComponent
        type="text"
        value={compnyName}
        setState={setCompnyName}
        required={true}
        forValue="cname"
        labelText="Compny Name"
      />
      <br />
      <label>Are You an Agency?</label>
      <br />
      <input
        type="radio"
        id="yesRadio"
        name="radio-group"
        value="Yes"
        checked={selectedOption === 'Yes'}
        onChange={handleRadioChange}
      />
      <label htmlFor="yesRadio">Yes</label>

      <input
        type="radio"
        id="noRadio"
        name="radio-group"
        value="No"
        checked={selectedOption === 'No'}
        onChange={handleRadioChange}
      />
      <label htmlFor="noRadio">No</label>

      <br />
      <div className="btn">
        <Button
          text="Create Account"
          width="90%"
          bgColor="blue"
          onClick={accountCreate}
        />
      </div>
     
    </div>
  );
}

export default SignUp;
