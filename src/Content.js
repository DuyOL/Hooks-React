import { useEffect, useState } from "react";
// 1.useEffect(CallBack)
// - Gọi CallBack mỗi khi Component re-render
// - Gọi CallBack sau khi Component thêm Element vào DOM
// 2 useEffect(callback,[])
// - Chỉ gọi CallBack 1 lần sau khi Componet mounted
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    //CallBack luôn được gọi sau khi Commopent mounted
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [])
    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.id}<br></br>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Content;