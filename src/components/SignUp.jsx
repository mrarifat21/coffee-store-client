import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  // console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // create user with email and password
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata.creationTime,
          lastSignInTime: result.user?.metadata.lastSignInTime,
          uid: result.user.uid,
        };

        console.log(email, password, userProfile);

        //  save profile to db
        fetch("https://coffee-store-server-delta-rouge.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account has created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            console.log("after profile save", data);
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
          Sign Up
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-[#F4F3F0] outline-none"
            />
          </div>
          {/* Address */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-[#F4F3F0] outline-none"
            />
          </div>
          {/* Phone */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              name="number"
              placeholder="Enter your number"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-[#F4F3F0] outline-none"
            />
          </div>
          {/* Photo */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Photo
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photoURL"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-[#F4F3F0] outline-none"
            />
          </div>
          {/* Email */}
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

          {/* Password */}
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
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-[#F4F3F0] outline-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-black font-semibold py-2 px-4 rounded hover:bg-[#c2a175] transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Link to Login */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?
          <Link to="/signIn" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
