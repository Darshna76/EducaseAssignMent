import React, { useEffect, useState } from 'react';
import './style.css';
import profileImage from './img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';

function Profile() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    if (!userData) {
      alert('You have to login or signup first');
      navigate('/');
    } else {
      setFullName(userData.fullName);
      setEmail(userData.email);
      setImage(userData.profilePhoto)
    }
  }, []);

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        setImage(imageData);
        let user = JSON.parse(localStorage.getItem("currentUser"));
        user.profilePhoto = imageData;
        localStorage.setItem("currentUser", JSON.stringify(user));
        
      };
     
      reader.readAsDataURL(selectedImage);
    }
  };

  const logOut = () => {
    localStorage.removeItem("currentUser")
    navigate('/')
  }

  return (
    <div className="profile">
      <nav className="nav">
      Account Settings
      

      </nav>
      <div className="flex">
        <img src={image || profileImage } alt="profilePhoto" />
       
          <p className="span">
            <p>{fullName}</p>
            <span>{email}</span>
          </p>
        
      </div>
      <label htmlFor="fileInput" className="file-upload">
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => handleImage(e)}
        />
        <span className="camera-icon">
          <FontAwesomeIcon
            icon={faCamera}
            style={{
              color: 'white',
              backgroundColor: 'blue',
              border: '3px solid blue',
              borderRadius: '50%',
            }}
          />
        </span>
      </label>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum harum
        itaque, amet, maxime est quo doloremque illum, in voluptatibus nostrum
        laudantium expedita. Praesentium.
      </p>
      <Button
          text="Logout"
          width="20%"
          bgColor="#cbcbcb"
          color="black"
          onClick={logOut}
        />
    </div>
  );
}

export default Profile;
