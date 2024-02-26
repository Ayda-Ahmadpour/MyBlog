import React, { useState } from "react";
import "./SignUp.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Spinner } from "flowbite-react";
import GoogleBtn from "../../components/GoogleBtn/GoogleBtn";

export default function SignUp() {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValue.username || !formValue.email || !formValue.password) {
      return setError("All fields are required");
    }
    try {
      setError(null);
      setLoading(true);
      const response = await axios.post(
        `${BASE_URL}/api/auth/signup`,
        formValue
      );
      console.log(response.data.error);
      console.log(response);
      setLoading(false);
      navigate("/SignIn");
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
      setLoading(false);
    }
  };
  return (
    <section className="mb-20 mt-10">
      <div className="container max-w-xl flex-col md:flex-row md:items-center mx-auto">
        <h1 className="text-3xl font-bold text-center ">Sign Up</h1>
        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-2 text-gray-900 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
              type="text"
              id="username"
              name="username"
              placeholder="username ..."
              onChange={handleChange}
            />
          </div>
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
              "Sign Up"
            )}
          </button>
          <GoogleBtn />
        </form>
        <div className="mt-5 text-center">
          <p>
            Already have an account?{" "}
            <Link className="text-pink-500" to="/SignIn">
              Login
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
