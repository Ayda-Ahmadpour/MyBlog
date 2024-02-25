import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Label, TextInput } from "flowbite-react";
import { updateStart } from "../../redux/slice/userSlice";
import axios from "axios";

export default function DashboardMain() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const [formValueData, setformValueData] = useState({});

  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromLocalStorage) {
      setformValueData(userDataFromLocalStorage);
    }
  }, []);

  const handleChange = (e) => {
    setformValueData({
      ...formValueData,
      [e.target.id]: e.target.value.trim(),
    });
    console.log(formValueData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      dispatch(updateStart());
      if (user && user._id) {
        const response = await axios.put(
          `${BASE_URL}/api/user/update/${user._id}`,
          formValueData
        );
        console.log(response);
      } else {
        console.log("User data is not available.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="flex max-w-md flex-col gap-4 justify-center w-1/2"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your email" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="name"
            required
            defaultValue={formValueData.username || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="email"
            required
            defaultValue={formValueData.email || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <Button
          className="w-full p-2 rounded-md bg-gradient-to-r from-pink-500 to-rose-300 text-white"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
