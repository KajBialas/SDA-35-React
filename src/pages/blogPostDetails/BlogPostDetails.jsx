import { useParams } from "react-router-dom";
const BlogPostDetails = () => {
    const { postId } = useParams();

    // https://jsonplaceholder.typicode.com/posts/5(postID)

    // useEffect z fetch ()

    return(
        <>
            <h1>Szczegóły postu: {postId} </h1>
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