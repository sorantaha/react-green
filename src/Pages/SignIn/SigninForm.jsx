import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import Button from "src/Components/Button";
import useAdminDashboard from "src/Store/useAdminDashboardStore";

// export let username = true;
// export let password = true;
export let adminUsername = "Administrator";
export let adminPassword = "Admin1234";

export default function SigninForm({ className = "", children, method }) {
  const { isAdminDashboard, setAdminDashboard } = useAdminDashboard();

  const [redirect, setRedirect] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleUsernameChange = (event) => {
    //function to get the Username input value
    setUsernameValue(event.target.value);
  };
  let loginUsername = usernameValue;
  console.log(loginUsername);

  const handlePasswordChange = (event) => {
    //function to get the Password input value
    setPasswordValue(event.target.value);
  };
  let loginPassword = passwordValue;
  console.log(loginPassword);

  const handleSignIn = () => {
    if (loginUsername === adminUsername && loginPassword === adminPassword) {
      setAdminDashboard(true);
      setRedirect(true);
    } else {
      setAdminDashboard(false);
    }
  };

  if (redirect) {
    // Redirect to a specific route when `redirect` state is true
    // return <Redirect to="/destination" />;
  }

  return (
    <div
      className={`relative w-[25rem] h-[30rem] rounded-lg border-l-[1px] border-t-[1px] border-gray-50/60 backdrop-blur-sm bg-white/10 shadow-2xl shadow-black/50 ${className}`}
    >
      <form
        className="w-full h-full absolute rounded-3xl mx-auto my-auto flex flex-col justify-center gap-9"
        method="get"
      >
        <span className="w-full text-center text-4xl font-bold font-sans text-white block -mt-1">
          SIGN IN
        </span>
        <div className="w-10/12 mx-auto gap-4 grid">
          <div className="w-full mx-auto">
            <label htmlFor="Username" className="w-full text-white font-bold">
              Username
            </label>
            <input
              className="w-full h-10 bg-white/20 outline-none px-2  rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
              placeholder={"Username"}
              type={"text"}
              id={"signinUsername"}
              name={`signinUsername`}
              value={usernameValue}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="w-full mx-auto">
            <label
              htmlFor="Password"
              className="w-full block text-white font-bold"
            >
              Password
            </label>
            <input
              className="w-full h-10 bg-white/20 outline-none px-2  rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
              placeholder={"Password"}
              type={"Password"}
              id={"signinPassword"}
              name={`signinPassword`}
              value={passwordValue}
              onChange={handlePasswordChange}
              required
            />
            <Link to={"/ForgetPassword"}>
              <span className="w-full h-30 text-white text-sm block tracking-wide mt-1 font-semibold">
                Forget your password?
              </span>
            </Link>
          </div>
        </div>
        <div className="w-10/12 mx-auto h-20 flex flex-col ">
          <Button
            type="submit"
            className="w-full h-full rounded mx-auto text-xl text-white font-bold bg-white/20 shadow-xl"
            id="signinSendBtn"
            name="signinSendBtn"
            value={`Send`}
            onClick={handleSignIn}
          >
            Send
          </Button>
          <Link to={"/SignUp"} className="mx-auto block text-white mt-[6px]">
            Don't have account? <span className="font-semibold">Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
