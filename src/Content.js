import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
// 1.useEffect(CallBack)
// - Gọi CallBack mỗi khi Component re-render
// - Gọi CallBack sau khi Component thêm Element vào DOM
// 2 useEffect(callback,[])
// - Chỉ gọi CallBack 1 lần sau khi Componet mounted
// 3 useEffect (CallBack, [deps])
// - CallBack sẽ được gọi lại mỗi khi deps thay đổi
// const tabs = ['posts', 'comments', 'albums']

// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')
//     const [showGotoTop, setShowGoToTop] = useState(false)
// Gọi API và khi cuộn xuống 200px thì sẽ hiện ra GO TO TOP
// 1 CallBack luôn được gọi sau khi Commopent mounted
// 2 Cleanup fuction luôn được gọi trước khi Component Unmounted
// useEffect(() => {

//     console.log('Title Changed')
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//         .then(res => res.json())
//         .then(posts => {
//             setPosts(posts);
//         })
// }, [type])
// useEffect(() => {
//     const handleScroll = () => {
//         if (window.scrollY >= 200) {
//             setShowGoToTop(true)
//         } else {
//             setShowGoToTop(false)
//         }
//     }
//     window.addEventListener('scroll', handleScroll)
//     console.log('addEventListener')
//     // Cleanup Function
//     return () => {
//         window.removeEventListener('scroll', handleScroll)
//         console.log('removeEventListener')

//     }
// }, [])
// return (
//     <div>
//         {tabs.map(tab => (
//             <button
//                 key={tab}
//                 style={type === tab ? {
//                     color: '#fff',
//                     backgroundColor: '#333',
//                 } : {}}
//                 onClick={() => setType(tab)}
//             >
//                 {tab}
//             </button>
//         ))}
//         <input
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//         />
//         <ul>
//             {posts.map(post => (
//                 <li key={post.id}>{post.title || post.name}</li>
//             ))}
//             {showGotoTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20,
//                     }}
//                 >
//                     Go To Top
//                 </button>
//             )}
//         </ul>
//     </div>
// )
// }
// Đây là ứng dụng khi nhấn vào Nút Bấm giá trí sẽ tăng lên +1
// function Content() {
//     const [countdown, setCountDown] = useState(0)
//     useEffect(() => {
//         const timeID = setInterval(() => {
//             setCountDown(prevState => prevState + 1)
//         }, 1000)
//         return () => clearInterval(timeID)
//     }, [])
//     return (
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
// }
function Content() {
    const [avatar, setAvatar] = useState()
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }
    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="20%" />
            )}
        </div>
    )
}
export default Content;