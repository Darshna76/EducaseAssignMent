import React from "react";
import "./style.css";


function Button({ text, onClick, width, bgColor, color }) {
  return (
    <div
      onClick={onClick}
      className="custom-btn"
      style={{ width: width, backgroundColor: bgColor, color: color }}
    >
      {text}

    </div>
  );
}

export default Button;