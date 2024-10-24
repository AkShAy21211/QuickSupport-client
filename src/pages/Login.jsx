import React from "react";
import LoginForm from "../components/form/LoginForm"
;

const Login = () => {
  return (
    <div id="login-container" className="flex justify-center items-center w-full h-[100vh]">
      <div>
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;
