import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Blog = () => {
    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    const renderBlogPosts = () => data.map(blogPost => (
        <div key={blogPost.id}>
            {blogPost.title}
            <Link to={`/blog/${blogPost.id}`}>Czytaj więcej</Link>
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


// Zadanie 5
// Stwórz custom hook do pobierania danych
// Zaimplemntuj uniwersalne rozwiązanie w zakładce Blog oraz BlogPostDetails