// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom"

// export default function SinglePost() {
//     const { id } = useParams();
//     const currentId = parseInt(id);

//     const navigate = useNavigate();

//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);

//     function searchPostId() {
//         setLoading(true);
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(res => {
//                 setPost(res.data);
//                 setLoading(false);
//             })
//             .catch(err => console.log(err))
//     }

//     useEffect(searchPostId, [id]);

//     if (loading) {
//         return <div>caricamento...</div>
//     }

//     return (
//         <>
//             <h2>id prodotto: {id}</h2>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//             {/* <button onClick={() => navigate(-1)}>INDIETRO</button> */}
//             <button
//                 onClick={() => navigate(`/blog/${currentId - 1}`)}
//                 disabled={currentId <= 1}>INDIETRO
//             </button>
//             <button
//                 onClick={() => navigate(`/blog/${currentId + 1}`)}
//                 disabled={(currentId >= 100)}>AVANTI
//             </button>
//         </>
//     )
// }

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function SinglePost() {
    const { id } = useParams();
    const currentId = parseInt(id);

    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasNextPost, setHasNextPost] = useState(false);

    function searchPostId() {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data);
                setLoading(false);
                checkNextPost(currentId + 1);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setPost(null);
                setHasNextPost(false);
            });
    }

    useEffect(searchPostId, [id]);

    const checkNextPost = (postId) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(() => {
                setHasNextPost(true);
            })
            .catch(() => {
                setHasNextPost(false);
            });
    };

    useEffect(() => {
        if (post) {
            checkNextPost(currentId + 1);
        } else {
            setHasNextPost(false);
        }
    }, [currentId, post]);

    if (loading) {
        return <div className="loading">caricamento...</div>
    }

    if (!post) {
        return <div>Post non trovato.</div>
    }

    return (
        <>
            <div class="blog-post-card">
                <h3 class="post-card-title">{post.title}</h3>
                <div class="post-card-body">
                    <p class="post-card-text">{post.body}</p>
                    <hr class="post-card-separator" />
                </div>
                <div class="post-card-actions">
                    <button class="btn-prev" onClick={() => navigate(`/blog/${currentId - 1}`)} disabled={currentId <= 1}>
                        INDIETRO
                    </button>
                    <button class="btn-next" onClick={() => navigate(`/blog/${currentId + 1}`)} disabled={!hasNextPost}>
                        AVANTI
                    </button>
                </div>
            </div>
        </>
    )
}