//handle api request 
//provide a way to manually ivoke functions

import { useEffect, useState } from "react";

//fetchFunction can be as fetchMovies.....
const useFetch = <T>(fetchFunction: () => Promise<T> , autoFetch = true) => {
    const [data, setdata] = useState<T | null>(null);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState<Error | null> (null);

    const fetchData = async() => {
        try{ 
            setLoading(true);
            setError(null);

            const result = await fetchFunction();

            setdata(result);
        }catch(error){
            //@ts-ignore
            setError(err instanceof Error ? err: new Error('An error has occured'));
        }finally{
            setLoading(false);
        }
    }

    const reset = () => {
        setdata(null);
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        if(autoFetch){
            fetchData();
        }
    }, []);

    return {data, loading, error, refetch: fetchData, reset};
}

export default useFetch;