import { useFetch } from '../../hooks/useFetch';
import { useParams } from "react-router-dom";

const BlogPostDetails = () => {
    const { postId } = useParams();


    const { data, isLoading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    

    return(
        <>
            <h1>Szczegóły postu: {postId} </h1>
            {isLoading && <div>Ładowanie danych</div>}
            {error && <div>Błąd: {error.message}</div>}
            {data && <div>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>}
        </>
    )
}

export default BlogPostDetails;

