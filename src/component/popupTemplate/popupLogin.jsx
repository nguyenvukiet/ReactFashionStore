import React, { useState } from "react";
import Register from "../form/Register";
import Login from "../form/Login";


const PopupLogin = ({ openLogin, handleCloseLogin }) => {

  const [register, setRegister] = useState(false);
  const handleRegister = () => {
    setRegister(true);
  };
  const handleCloseRegister = () => {
    setRegister(false);
  };


  return (
    <div className={`popup popup-login ${openLogin ? "open" : ""}`}>
      <div className="popup-overlay" onClick={handleCloseLogin}></div>

      {!register ? (
        <Login setRegister={setRegister} handleRegister={handleRegister} handleCloseLogin={handleCloseLogin}/>
      ) : (
        <Register setRegister={setRegister} handleCloseRegister={handleCloseRegister} handleCloseLogin={handleCloseLogin} />
      )}
    </div>
  );
};

export default PopupLogin;
