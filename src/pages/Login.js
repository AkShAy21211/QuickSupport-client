import React, { useState } from "react";
import LoginForm from "../components/form/LoginForm";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuthContext } from "../context/AuthContext";

const Login = () => {
  // States for email and error
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setLogin } = useAuthContext(AuthContext);

  // Handler function for login
  const onSubmit = async (e) => {
    e.preventDefault();

    //Validate email before submitting
    const regex = /\S+@\S+\.\S+/;

    if (!regex.test(email)) {
      setError("Invalid email address");
      return;
    }

    const response = await login(email);

    if (response) {
      setLogin(response.token);
      navigate("/dashboard");
    }

    try {
      setError("");
    } catch (error) {
      setError("Failed to submit form");
      console.error(error);
    }
  };

  return (
    <div
      id="login-container"
      className="flex justify-center items-center w-full h-[100vh]"
    >
      <div>
        <LoginForm
          email={email}
          setEmail={setEmail}
          error={error}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
