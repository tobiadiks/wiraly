import axios from "axios"
import { useEffect, useState } from "react"

const useDataFetching=(url,option={})=>{
    const [data, setData]= useState(null)
    const [loading,setLoading]= useState(true)
    const [error,setError]= useState(null)

    useEffect(()=>{
        const fetchData=async ()=>{
            try {
                const response = await axios.get('http://localhost:3001/api/auth/login')
            setData(response.data)
            setLoading(false)
            }catch(error){
                setError(error)
                setLoading(false)
            };
            fetchData();
        }
    },[data, loading,error])
    return [data, loading,error]
}

export default useDataFetching;