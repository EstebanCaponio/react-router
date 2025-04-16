import axios from "axios";
import { useState } from "react"

export default function ListaDeiPost() {

    const [posts, setPosts] = useState([]);

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data)
        })

    return (
        <>
            <h1>LISTA PRODOTTI</h1>

            <div>
                {posts.map(post =>
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>)}
            </div>
        </>
    )
}