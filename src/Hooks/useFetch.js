import {useState, useEffect } from "react";

export function useFetch(url, options) {

    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setResult(result))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
            
        }, [options, url]);
        
    return {result, loading, error}
    
}