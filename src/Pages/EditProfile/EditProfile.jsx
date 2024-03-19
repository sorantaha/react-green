import axios from "axios";
import { useState, useEffect } from "react";
import Button from "src/Components/Button";
import useCustomerDataStore from "src/Store/useCustomerDataStore";

export default function EditProfile() {
  const { isCustomerData, setCustomerData } = useCustomerDataStore();
  const [userData, setuserData] = useState({});

  const [idValue, setIdValue] = useState();
  const [usernameValue, setUsernameValue] = useState();
  const [phoneValue, setPhoneValue] = useState();
  const [photoValue, setPhotoValue] = useState();

  useEffect(() => {
    // Fetch the product data for the specified productId
    const fetchUserData = async () => {
      try {
        const response = await axios
          .get(`https://jsonplaceholder.typicode.com/users/6`)
          .then((response) => {
            if (response.status == 200) {
              setuserData(response.data);
              setIdValue(userData.id);
              setUsernameValue(userData.username);
              setPhoneValue(userData.phone);
              setPhotoValue();
              setCustomerData({
                id: idValue,
                username: usernameValue,
                phone: phoneValue,
                email: userData.email,
                photo: photoValue,
                password: userData.password,
              });
              console.log("productData: " + userData.name);
            } else if (response.status == 404) {
              console.log("Error 404");
            }
          });

        console.log(isCustomerData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchUserData();
  }, [userData.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/photos/2`, {
        id: idValue,
        username: usernameValue,
        number: phoneValue,
        photo: photoValue,
      });
      alert("Profile updated successfully");
      console.log(isCustomerData);
      // Optionally, you can redirect the user or perform any other action after successful update
    } catch (error) {
      console.error("Error updating User Profile:", error);
    }
  };

  return (
    <div className="w-full min-h-screen-mt mt-[5.0125rem] bg-white flex justify-center items-center relative">
      <div className="w-96 h-2/4 flex justify-center items-center">
        <form
          className="w-full flex items-center flex-col gap-8"
          method="post"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
            id="editUsername"
            name="editUsername"
            placeholder={`username`}
            value={usernameValue}
            onChange={(event) => setUsernameValue(event.target.value)}
            required
          />
          <input
            type="text"
            className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
            id="editNumber"
            name="editNumber"
            placeholder={`number`}
            value={phoneValue}
            onChange={(event) => setPhoneValue(event.target.value)}
            required
          />
          <div className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold text-gray-400 placeholder:text-gray-400 shadow-xl shadow-black/20 flex items-center cursor-pointer">
            <input
              type={"file"}
              className="file:w-full file:h-full file:hidden cursor-pointer"
              id="editPhoto"
              name="editPhoto"
              placeholder={`photo`}
              value={photoValue}
              onChange={(event) => setPhotoValue(event.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-2/3 h-10 bg-[#087516] text-white font-bold rounded"
            id={`editProfileBtn`}
            name={`editProfileBtn`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
