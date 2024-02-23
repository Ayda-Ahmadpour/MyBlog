import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  successfulSignIn,
  failSignIn,
} from "../../redux/slice/userSlice";
import GoogleBtn from "../../components/GoogleBtn/GoogleBtn";
export default function SignIn() {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState();
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      dispatch(failSignIn("All fields are required"));
    }
    try {
      dispatch(setUser());
      const response = await axios.post(
        `${BASE_URL}/api/auth/signin`,
        formValue
      );
      console.log(response);
      dispatch(successfulSignIn(response.data));
      navigate("/");
    } catch (error) {
      dispatch(failSignIn(error.response.data.error));
    }
  };
  return (
    <section className="mb-20 mt-10">
      <div className="container max-w-xl flex-col md:flex-row md:items-center mx-auto">
        <h1 className="text-3xl font-bold text-center ">Sign In</h1>
        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
              type="email"
              id="email"
              name="email"
              placeholder="email ..."
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
              type="password"
              id="password"
              name="password"
              placeholder="password ..."
              onChange={handleChange}
            />
          </div>

          <button
            className="w-full p-2 rounded-md bg-gradient-to-r from-pink-500 to-rose-300 text-white"
            type="submit"
          >
            {loading ? (
              <>
                <Spinner aria-label="Alternate spinner button example" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </button>
          <GoogleBtn />
        </form>
        <div className="mt-5 text-center">
          <p>
            Don't have an account?{" "}
            <Link className="text-pink-500" to="/SignUp">
              Sign Up
            </Link>
          </p>
        </div>
        {error && (
          <Alert type="danger" color="pink" className="mt-4">
            {error}
          </Alert>
        )}
      </div>
    </section>
  );
}
