import Axios from "../api/AxiosConfig";
export const asyncgetusers = async () => {
    try {
        const res = await Axios.get('/users')
        console.log(res);
        
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}