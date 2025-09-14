"use client";
import React from "react";

const SignUp = () => {
  return (
    <form className="flex flex-col gap-3">
      <input type="text" placeholder="Name" className="border p-2 rounded" />
      <input type="email" placeholder="Email" className="border p-2 rounded" />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-800 text-white p-2 rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
