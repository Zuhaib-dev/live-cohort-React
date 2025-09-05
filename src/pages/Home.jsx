import { useEffect } from "react";
import Axios from "../utils/Axios";

const Home = () => {
  const getProducts = async () => {
    try {
      const  {data}  = await Axios.get("/products/1");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    console.log("Home Mounted");
    return()=>{
      console.log("Homw UnMounted");
      
    }
    
  })

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProducts} className="bg-green-500 px-4 py-2 rounded-2xl active:scale-95">
        Get Products
      </button>
    </div>
  );
};

export default Home;
