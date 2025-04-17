import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function ListaDeiPost() {

    const [posts, setPosts] = useState([]);

    function getPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
            })
    };

    useEffect(getPosts, []);

    return (
        <>
            <h1>LISTA PRODOTTI</h1>

            <div>
                {posts.map(post =>
                    <div key={post.id}>
                        <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>)}
            </div>
        </>
    )
}