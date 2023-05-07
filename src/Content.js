import { useEffect, useState } from "react";
// 1.useEffect(CallBack)
// - Gọi CallBack mỗi khi Component re-render
// - Gọi CallBack sau khi Component thêm Element vào DOM
// 2 useEffect(callback,[])
// - Chỉ gọi CallBack 1 lần sau khi Componet mounted
// 3 useEffect (CallBack, [deps])
// - CallBack sẽ được gọi lại mỗi khi deps thay đổi
const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGotoTop, setShowGoToTop] = useState(false)
    // 1 CallBack luôn được gọi sau khi Commopent mounted
    // 2 Cleanup fuction luôn được gọi trước khi Component Unmounted
    useEffect(() => {

        console.log('Title Changed')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        console.log('addEventListener')
        // Cleanup Function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('removeEventListener')

        }
    }, [])
    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
                {showGotoTop && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20,
                        }}
                    >
                        Go To Top
                    </button>
                )}
            </ul>
        </div>
    )
}
export default Content;