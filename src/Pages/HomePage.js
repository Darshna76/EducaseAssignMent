import React, { useState } from "react";
import Button from "../Components/common/Button/Button";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();

  const createAccount = () => {
    navigate("/signup")
  }

  const register = () => {
    navigate("/login")
  }
  return (
    <div className="HomePage">

      <p style={{ "fontSize": "1.5rem", "margin": "0rem", "paddingLeft": "0.5rem" }}>Welcome to PopX</p>
      <p style={{ "paddingLeft": "0.5rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, illum.</p>

      <Button text="Create Account"
        width="40vh"
        bgColor="blue"
        onClick={createAccount}
      />

      <Button text=" Already Register? Login."
        width="40vh"
        bgColor="gray"
        color="black"
        onClick={register}
      />

    </div>
  );
}

export default HomePage;