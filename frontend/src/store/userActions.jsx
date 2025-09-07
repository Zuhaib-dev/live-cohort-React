import Axios from "../api/AxiosConfig";
import { laoduser } from "./userSlice";
export const asyncgetusers = async () => {
  try {
    const res = await Axios.get("/users");
    laoduser(res.data);
  } catch (error) {
    console.log(error);
  }
};
