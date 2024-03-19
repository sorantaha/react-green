import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "src/Components/Button";
import useCustomerDataStore from "src/Store/useCustomerDataStore";

export default function SignupForm(second, method) {
  const { isCustomerData, setCustomerData } = useCustomerDataStore();
  // const [signupData, setSignupData] = useState({});
  const [usernameValue, setUsernameValue] = useState();
  const [photoValue, setPhotoValue] = useState();
  const [phoneValue, setPhoneValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [addressValue, setAddressValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  console.log(usernameValue);
  // setCustomerData({
  //   username: usernameValue,
  //   address: addressValue,
  //   phone: phoneValue,
  //   email: emailValue,
  //   photo: photoValue,
  //   password: passwordValue,
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          username: usernameValue,
          photo: photoValue,
          phone: phoneValue,
          email: emailValue,
          address: addressValue,
          password: passwordValue,
        }
      );
      console.log(response.data);
      console.log("Account Created successfully:", response.data);
      alert("Account Created successfully:", response.data);
      // Handle success, e.g., redirect to account page
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., display error message to user
    }
  };
  

  return (
    <div
      className={`relative w-[40rem]  h-[30rem] rounded-lg border-l-[1px] border-t-[1px] border-gray-50/60 backdrop-blur-sm bg-white/10 shadow-2xl shadow-black/50`}
    >
      <form
        className="w-full h-full absolute mx-auto my-auto flex flex-col justify-center gap-5"
        // method="POST"
        onSubmit={handleSubmit}
      >
        <span className="w-full text-center text-4xl font-bold font-sans text-white block">
          SIGN UP
        </span>
        <div className="w-11/12 mx-auto gap-4 grid grid-cols-2 ">
          <div className="w-full mx-auto">
            <label htmlFor="Username" className="w-full text-white font-bold">
              Username
            </label>
            <input
              className="w-full h-10 outline-none px-2  bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
              placeholder={"Username"}
              type={"text"}
              id={"signupUsername"}
              name={`signupUsername`}
              onChange={(event) => setUsernameValue(event.target.value)}
              autoComplete={`off`}
            />
          </div>

          <div className="w-full h-auto mx-auto">
            <label htmlFor="Picture" className="w-full text-white font-bold">
              Picture
            </label>
            <div className="w-full h-10 outline-none px-2 bg-white/20 rounded border-l-[1px] border-t-[1px] border-r-0 border-b-0 border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20 flex items-center cursor-pointer">
              <input
                className="file:w-full file:h-full file:hidden cursor-pointer"
                placeholder={"Picture"}
                type={"file"}
                id={"signupPicture"}
                name={`signupPicture`}
                onChange={(event) => setPhotoValue(event.target.value)}
                autoComplete={`off`}
                required
              />
            </div>
          </div>

          <div className="w-full mx-auto">
            <label htmlFor="phone" className="w-full text-white font-bold">
              Phone
            </label>
            <input
              className="w-full h-10 outline-none px-2  bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
              placeholder={"Phone"}
              type={"text"}
              id={"signupPhone"}
              name={`signupPhone`}
              onChange={(event) => setPhoneValue(event.target.value)}
              autoComplete={`off`}
              required
            />
          </div>

          <div className="w-full mx-auto">
            <label htmlFor="email" className="w-full text-white font-bold">
              Email
            </label>
            <input
              className="w-full h-10 outline-none px-2  bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20 "
              placeholder={"Email"}
              type={"email"}
              id={"signupEmail"}
              name={`signupEmail`}
              onChange={(event) => setEmailValue(event.target.value)}
              autoComplete={`off`}
              required
            />
          </div>
          <div className="w-full mx-auto">
            <label
              htmlFor="confirm Password"
              className="w-full text-white font-bold"
            >
              Address
            </label>
            <input
              className="w-full h-10 outline-none px-2 bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
              placeholder={"Address"}
              type={"text"}
              id={"signupAddress"}
              name={`signupAddress`}
              onChange={(event) => setAddressValue(event.target.value)}
              autoComplete={`off`}
              required
            />
          </div>

          <div className="w-full mx-auto">
            <label htmlFor="password" className="w-full text-white font-bold">
              Password
            </label>
            <input
              className="w-full h-10 outline-none px-2 bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
              placeholder={"Password"}
              type={"password"}
              id={"signupPassword"}
              name={`signupPassword`}
              onChange={(event) => setPasswordValue(event.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 mt-4 rounded text-center mx-auto text-xl text-white font-bold bg-white/20 shadow-xl col-span-2"
            id="signupSendBtn"
            name="signupSendBtn"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
