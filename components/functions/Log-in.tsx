"use client";
import React from "react";

const LogIn = () => {
  return (
    <form className="flex flex-col gap-3">
      <input type="email" placeholder="Email" className="border p-2 rounded" />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-800 text-white p-2 rounded">
        Log In
      </button>
    </form>
  );
};

export default LogIn;
