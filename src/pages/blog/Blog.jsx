import { useState, useEffect } from 'react';

const Blog = () => {
    const [ blogData, setBlogData] = useState([]);
    const [ isLoading, setIsLoading] = useState(false);
    const [ error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Błąd pobierania danych');
                }
                return response.json()
            })
            .then(data => {
                setTimeout(() => {
                    setBlogData(data);
                    setError(false);
                    setIsLoading(false);
                }, 3000);
                
            })
            .catch( error => {
                setError(error);
                setIsLoading(false);

            });
    }, []);

    const renderBlogPosts = () => blogData.map(blogPost => (
        <div key={blogPost.id}>
            {blogPost.title}
        </div>
    ));

    
    return (
        <>
            <h1>Blog</h1>
            {isLoading && <div>Ładowanie...</div>}
            {error && <div>Błąd: {error.message}</div>}
            {renderBlogPosts()}
        </>
    )
}

export default Blog;

// Zadanie 3
// Zaimplementuj obsluge błędów oraz statusu ładowania

// Zadanie 3 dodatkowe
// Zaimplementuj graficzną wersję loadera
// Wyświetl informacje o błędzie, zwróconą z kodu