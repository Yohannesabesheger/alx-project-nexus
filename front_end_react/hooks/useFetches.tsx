import { useEffect, useState } from "react";
import axios from 'axios'

const useFetch=()=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError] =useState(null);

const API_URL = 'https://gojo.besheger.com/api/report/';
const API_KEY = 'kjdhfpiuhfpwerrf23423498kjshdfkwhedfig12312oweuyrnsdvvb';
    
const fetchData=async ()=>{
    try{
        const response = await axios.get(API_URL, {
      headers: {
        'x-api-key': API_KEY,
        'Accept': 'application/json',
      },
    });
    setData(response.data);
    setIsLoading(false);

    }catch (error){
        console.log(error)
        setError(error)

    }finally{
        setIsLoading(false)
    }
    }
    useEffect(()=>{
        fetchData()
    },[]);
    const refetch=()=>{
        setIsLoading(true);
        fetchData();
    }
    return {data,isLoading,error,refetch}

}
export default useFetch;