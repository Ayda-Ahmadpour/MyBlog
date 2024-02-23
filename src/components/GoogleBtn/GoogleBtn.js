import React from "react";
import { Button } from "flowbite-react";
import { SiGoogle } from "react-icons/si";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../fireBase";

export default function GoogleBtn() {
  const auth = getAuth(app);
  const handleGoogleBtn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const response = await signInWithPopup(auth, provider);
      console.log(response);
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
