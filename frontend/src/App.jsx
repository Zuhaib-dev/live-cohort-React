import { useEffect } from "react";
import axios from "./api/axiosconfig";

const App = () => {
  const getuser = async () => {
    try {
      const { data } = await axios.get("/users");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getuser()
  },[])

  return <div>App</div>;
};

export default App;
