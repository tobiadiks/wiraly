import axios, { AxiosRequestConfig } from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const useDataFetching = (url, option?: AxiosRequestConfig<any>) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
 const router= useRouter()
    useEffect(() => {
        const fetchData = async () => {
            try {
                if(router.isReady){
                    const response = await axios.get(url, option)
                    setData(response.data)
                    setLoading(false)
                }
                else{
                    null
                }
                
            } catch (error) {
                setError(error)
                setLoading(false)
            };
            
        }
        fetchData();
    }, [router.isReady])
    return { data, loading, error }
}

export default useDataFetching;