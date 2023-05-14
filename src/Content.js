// import userEvent from "@testing-library/user-event";
// import { useEffect, useState } from "react";
import { useLayoutEffect, useState } from "react";
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
// Cleanup function luôn được gọi trước khi CallBack được gọi (trừ lần mounted)
// Đây là VD khi thêm ảnh mới vào thì ảnh cũ được xóa để tránh dư thừa dữ liệu (useEffect with preview avatar)
// function Content() {
//     const [avatar, setAvatar] = useState()
//     useEffect(() => {
//         return () => {
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     }, [avatar])
//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0]

//         file.preview = URL.createObjectURL(file)

//         setAvatar(file)
//     }
//     return (
//         <div>
//             <input
//                 type="file"
//                 onChange={handlePreviewAvatar}
//             />
//             {avatar && (
//                 <img src={avatar.preview} alt="" width="20%" />
//             )}
//         </div>
//     )
// }
//  Đây là VD useEffect with fake Chat App
// const lessons = [
//     {
//         id: 1,
//         name: 'Tôi tên là Duy . Tôi Quê ở Hải Dương ',

//     },
//     {
//         id: 2,
//         name: 'Tôi sinh ngày 22-12-2002 . Đang là Sinh Năm 2 trường HPC ',
//     },
//     {
//         id: 3,
//         name: 'Tôi sống lành mạnh , không hút thuốc , và đặc biệt là nhát gái '
//     }
// ]
// function Content() {
//     const [lessonId, setLessonId] = useState(1);
//     useEffect(() => {
//         const handleComment = ({ detail }) => {
//             console.log(detail);
//         };
//         window.addEventListener(`lesson-${lessonId}`, handleComment);
//         return () => {
//             window.removeEventListener(`lesson-${lessonId}`, handleComment);
//         };
//     }, [lessonId]);
//     return (
//         <div>
//             <ul>
//                 {lessons.map((lesson) => (
//                     <li
//                         key={lesson.id}
//                         style={{
//                             color:
//                                 lessonId === lesson.id ? "red" : "#333",
//                         }}
//                         onClick={() => setLessonId(lesson.id)}
//                     >
//                         {lesson.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// Sự khác nhau giữa useEffect vs useLayoutEffect
// useEffect
// 1. Cập nhập đến State
// 2. Cập nhập DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback
// useLayoutEffect
// 1. Cập nhập lại State
// 2. Cập nhập DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
// Đây là ứng dụng chạy từ 0 đến 3 và trở về 0 làm bằng useLayoutEffect
function Content() {
    const [count, setCount] = useState(0)
    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}> Run </button>
        </div>
    )
}
export default Content;
