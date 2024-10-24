import React from "react";
import SocialButton from "../button/SocialButton";
import googleIcon from "../../assests/google.png";
import appleIcon from "../../assests/apple.png";

const LoginForm = ({ email, setEmail, error, onSubmit }) => {
  return (
    <div
      id="login-container"
      className="bg-white/10 border p-10 rounded-3xl w-auto md:w-[423px] h-[461px] flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl font-bold text-white float-start w-full mb-5">
        Login
      </h2>
      <div id="form-container" className="w-full">
        <form action="" className="flex flex-col w-full" onSubmit={onSubmit}>
          <label htmlFor="email" className="text-white mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="rounded-md border border-gray-300 p-2 mb-4 bg-transparent "
            placeholder="Email"
          />
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <input
            type="submit"
            value="Login"
            className=" bg-white/30 text-white rounded-md p-2 mb-4 cursor-pointer"
          />
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-t border-white" />
            <span className="mx-2 text-white">or</span>
            <hr className="flex-grow border-t border-white" />
          </div>
          <div id="social-wrapper" className="flex flex-col gap-6">
            <SocialButton label={"Continue with Google"} image={googleIcon} />
            <SocialButton label={"Continue with Google"} image={appleIcon} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
