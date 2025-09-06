import { useEffect } from "react";
import Axios from "./api/AxiosConfig";
const App = () => {
  const getProduct = async () => {
    try {
      const  data  = await Axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getProduct()
  },[])
  return <div>App</div>;
};

export default App;
