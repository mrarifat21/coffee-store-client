import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const { signinUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signinUser(email, password)
      .then((result) => {
        console.log(result.user);

        const signIninfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        //  update last sing in to the database
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signIninfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F4F1] p-4">
      <div className="w-[450px] bg-[#F4F3F0] rounded-[5px] p-8 shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#374151] mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSignIn} className="space-y-5">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-[#F4F3F0] outline-none"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-[#F4F3F0] outline-none"
            />
          </div>
          {/* Forgot Password */}
          <div>
            <p className="block mb-2 text-sm font-medium text-gray-700">
              Forgot Password
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-black font-semibold py-2 px-4 rounded hover:bg-[#c2a175] transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Optional: Link to sign up */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signUp" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
