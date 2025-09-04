import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Product Details</h1>
      <img
        className="h-100 w-100 mb-5"
        src="https://images.unsplash.com/photo-1750210955902-ce0e71765fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt="Product detail"
      />
      <button onClick={()=>navigate(-1)} className="bg-green-500 text-black px-4 py-2 rounded-2xl active:scale-95">
        Go Back
      </button>
    </div>
  );
};

export default ProductDetail;
