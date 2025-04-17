import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function SinglePost() {
    const { id } = useParams();
    const currentId = parseInt(id);

    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    function searchPostId() {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }

    useEffect(searchPostId, [id]);

    if (loading) {
        return <div>caricamento...</div>
    }



    return (
        <>
            <h2>id prodotto: {id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {/* <button onClick={() => navigate(-1)}>INDIETRO</button> */}
            <button
                onClick={() => navigate(`/blog/${currentId - 1}`)}
                disabled={currentId <= 1}>INDIETRO
            </button>
            <button
                onClick={() => navigate(`/blog/${currentId + 1}`)}
                disabled={(currentId >= 100)}>AVANTI
            </button>
        </>
    )
}