import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const BlogPostDetails = () => {
    const { postId } = useParams();
    const [ postDeatails, setPostDetails ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect( () => {
        setIsLoading(true);
        setError(null);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Błąd pobierania danych');
                }
                return response.json();
            })
            .then(data => {
                setPostDetails(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            })
    }, [postId]);

    

    return(
        <>
            <h1>Szczegóły postu: {postId} </h1>
            {isLoading && <div>Ładowanie danych</div>}
            {error && <div>Błąd: {error.message}</div>}
            <div>
                <h3>{postDeatails.title}</h3>
                <p>{postDeatails.body}</p>
            </div>
        </>
    )
}

export default BlogPostDetails;


// Zadanie 4
// 1. Utwórz dynamiczny routing dla szczegółów postu
// 2. Wykonaj zapytanie do API i pobierz szczegóły konkretnego postu
// 3. Wyświetl szczegóły postu

// Zadanie 4 dodatkowe
// 1. Obsłuz obsluge ladowania i bledow