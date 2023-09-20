import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
