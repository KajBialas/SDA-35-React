import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [ data, setData] = useState(null); 
    const [ isLoading, setIsLoading] = useState(false);
    const [ error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Błąd pobierania danych');
                }
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsLoading(false);                
            })
            .catch( error => {
                setError(error);
                setIsLoading(false);

            });
    }, []);

    return {data, isLoading, error}

}


