import baseURL from "../utils/BaseURL";
import Axios from "axios"

export const getAllProperties=()=>{
    return Axios.get(`${baseURL.backend}/api/property`)
}


export const getPropertyById=(id)=>{
    return Axios.get(`${baseURL.backend}/api/property/view/${id}`)
}