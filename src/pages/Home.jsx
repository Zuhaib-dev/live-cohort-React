import axios from "axios";
import Axios from '../utils/Axios'
import React, { useEffect } from "react";

const Home = () => {
  const getProducts = async () => {
    try {
      const { data } = await Axios.get("products/1");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getProducts()
    console.log("Home Mounted");
    return(()=>{
      console.log("Home UnMounted");
      
    })
    
  },[])
  return <div>
    <h1>Home</h1>
    <button onClick={getProducts}>click to get data </button>
  </div>;
};

export default Home;
