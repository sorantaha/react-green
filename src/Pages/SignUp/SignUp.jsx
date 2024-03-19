import SignupForm from "src/Pages/SignUp/SignupForm";
// import SigninForm from "src/Pages/SignIn/SigninForm";
// import Account from "src/Pages/Account/Account";
// import useSignupStore from "src/Store/useSignupStore";
// import useLogoutStore from "src/Store/useLogoutStore";

// import { useState } from "react";

export let profile = true;
export let username = true;
export let password = true;
export let adminUsername = "Administrator";
export let adminPassword = "11111111";

export default function SignUp({ className = "", children, alt }) {
//   const { isSignedup } = useSignupStore();
//   const { isLogout } = useLogoutStore();
//   console.log(isSignedup);
  return (
    <div className="w-full h-[31rem] relative min-h-screen-mt mt-[5.0125rem] bg-transparent overflow-hidden">
      <div className="w-full h-[93vh] flex flex-col justify-center">
        <div className="bg-transparent ">
          <img src="Profile-Images/BG-Profile.jpg" className="" alt="" />
          <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <SignupForm className="" method="post"></SignupForm>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
