import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const LoginSignUp = () => {
  const [login, setLogin] = useState(true);
  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div className="flex flex-col justify-center items-center w-3/5 h-96 border my-50 mx-auto">
      <Login />
      <div className="">
        <button className="" onClick={handleClick}>
          {login ? "Signup" : "LogIn"}
        </button>
      </div>
      <Signup />
    </div>
  );
};

export default LoginSignUp;
