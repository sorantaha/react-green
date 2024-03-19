import { useState } from "react";
import Button from "src/Components/Button";
import useCustomerDataStore from "src/Store/useCustomerDataStore";

export default function ChangePassword() {
  const { isCustomerData, setCustomerData } = useCustomerDataStore();
  // console.log(isCustomerData);

  return (
    <div className="w-full min-h-screen-mt mt-[5.0125rem] bg-white flex justify-center items-center relative">
      <div className="w-96 h-96 flex justify-center items-center">
      <form
            className="w-full flex items-center flex-col gap-8"
            method="post"
          >
            <input
              type="text"
              className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
              id="newPassword"
              name="newPassword"
              placeholder={`Old Password`}
            />
            <input
              type="text"
              className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
              id="newPassword"
              name="newPassword"
              placeholder={`New Password`}
            />
            <input
              type="text"
              className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
              id="newPassword"
              name="newPassword"
              placeholder={`Confirm New Password`}
            />
            <Button className="w-2/3 h-10 bg-[#087516] text-white font-bold rounded"
            id={`newPasswordBtn`}
            name={`newPasswordBtn`}
            >
              Send
            </Button>
          </form>
      </div>
    </div>
  );
}
