import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gray-800">
      <h1 className="text-5xl mb-10">Services</h1>
      <button
        onClick={() => navigate("/services/detail")}
        className="bg-green-500 rounded-2xl px-4 py-2 active:scale-95"
      >
        More servicess
      </button>
      <hr className="my-10 w-100" />
      <Outlet />
    </div>
  );
};

export default Services;
