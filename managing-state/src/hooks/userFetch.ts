import {useState, useEffect} from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch<T>(url: string){
    const [data, setData] = useState({} as T);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function init(){
            try{
                const response = await fetch(`${baseUrl}/${url}`);
                if (!response.ok){
                    throw response;
                }
                const result = await response.json()
                setData(result);
            }catch (e) {
                setError(e)
            }finally {
                setLoading(false)
            }
        }
        init();
    }, [url]);

    return {
        data,
        error,
        loading
    }
}