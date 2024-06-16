import { useState, useEffect } from 'react';

const Blog = () => {
    const [ blogData, setBlogData] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setBlogData(data));
    }, []);

    const renderBlogPosts = () => blogData.map(blogPost => (
        <div key={blogPost.id}>
            {blogPost.title}
        </div>
    ));

    
    return (
        <>
            <h1>Blog</h1>
            {renderBlogPosts()}
        </>
    )
}

export default Blog;