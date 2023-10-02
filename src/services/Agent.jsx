import baseURL from "../utils/BaseURL";
import Axios from "axios"

export const adminLogin=(email,password)=>{
    return Axios.post(`${baseURL.local}/agent_user/login`,{email,password})
}