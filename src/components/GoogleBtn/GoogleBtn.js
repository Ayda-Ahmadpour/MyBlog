import React from "react";
import { Button } from "flowbite-react";
import { SiGoogle } from "react-icons/si";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../fireBase";
import { useDispatch } from "react-redux";
import { successfulSignIn } from "../../redux/slice/userSlice";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function GoogleBtn() {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const handleGoogleBtn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const response = await signInWithPopup(auth, provider);
      const res = await axios.post(`${BASE_URL}api/auth/google`, {
        name: response.user.displayName,
        email: response.user.email,
        googlePhoto: response.user.photoURL,
      });

      if (res) {
        console.log(res);
        dispatch(successfulSignIn(response));
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="button"
      outline
      className="w-full p-1 mt-4 rounded-md bg-gradient-to-r from-rose-500 to-pink-300"
      onClick={handleGoogleBtn}
    >
      Continue With Google
      <SiGoogle className="ml-3" />
    </Button>
  );
}
