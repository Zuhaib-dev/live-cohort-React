import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gray-800">
      <h1 className="text-3xl mb-4">More Services</h1>
      <img
        className="object-cover h-50 w-50 rounded-2xl mb-5"
        src="https://images.unsplash.com/photo-1750210955902-ce0e71765fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt=""
      />
      <button
        onClick={() => navigate(-1)}
        className="bg-rose-400 px-4 py-2 rounded-xl active:scale-95"
      >
        Go back
      </button>
    </div>
  );
};

export default ServiceDetail;
