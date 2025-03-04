// 📝 Signup Page
// This page allows users to create an account.
// 1️⃣ Create a form with fields for First Name, Last Name, Email, and Password.
// 2️⃣ Include a "Sign Up" button and a "Sign in with Google" button.
// 3️⃣ Ensure the design follows the Figma UI (background, spacing, colors).

import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="p-8 bg-white shadow-md rounded-lg w-96">
        {/* 🔹 Form Title */}
        <h2 className="text-xl font-bold text-primary">Create an Account</h2>

        {/* 🔹 Signup Form */}
        <form className="mt-4 space-y-4">
          <input type="text" placeholder="First Name" className="input-field" />
          <input type="text" placeholder="Last Name" className="input-field" />
          <input type="email" placeholder="University Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="w-full bg-primary text-white py-2 rounded-lg">Sign Up</button>
        </form>

        {/* 🔹 Google Sign-In Button */}
        <div className="mt-4 text-center">
          <button className="bg-gray-200 py-2 px-4 rounded-lg">Sign up with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
