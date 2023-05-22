import TodoApp from './Todo'
// import { useState } from "react";
// import { useRef } from "react";
// import { useState, useMemo } from "react";
// import { useReducer, useRef } from "react"
// import { useState, useCallback } from "react";
// import { memo } from 'react'
// import Content from './Content'
// useState tăng giá trị lên +1 và giảm trá trị đi trừ -1
// function App() {
//   const [introduce, setIntroduce] = useState({
//     name: 'Nguyễn Đức Duy',
//     age: 21,
//     address: 'HaiDuong'
//   })
//   const handleUpdater = () => {
//     setIntroduce({
//       ...introduce,
//       bio: 'Gussi'
//     })
//   }
//   // Tăng giá trị của useState lên + 1 or giảm đi - 1
//   const [tang, setTang] = useState(1)
//   const tanggiatri = () => {
//     setTang(braveState => braveState + 1)
//   }
//   const [giam, setGiam] = useState(10)
//   const giamgiatri = () => {
//     setGiam(ggState => ggState - 1)
//   }
//   return (
//     <div className="App" style={{ padding: 20 }}>
//       {/* Tăng giá trị của useState lên + 1 or giảm đi -1 */}
//       <h1>{tang}</h1>
//       <button style={{ padding: '10px', backgroundColor: "violet", color: "white" }} onClick={tanggiatri}> Tăng + </button>
//       <h1>{giam}</h1>
//       <button style={{ padding: '10px', backgroundColor: "#f49000", color: "white" }} onClick={giamgiatri}> Giảm - </button>
//       <h1>{JSON.stringify(introduce)}</h1>
//       <button style={{ padding: '20px', backgroundColor: "#58cc02", color: "white" }} onClick={handleUpdater}> Cập Nhật </button>

//     </div>
//   );
// }
// RandomGifts khi nhấn nhận phần thưởng sẽ random ra 1 phần thưởng có giá trị ngẫu nhiên trong mảng
// const gifts = [
//   'RTX 4090ti',
//   'Ram 128gb',
//   'CPU I9 11900K'
// ]
// function App() {
//   const [gift, setGift] = useState()

//   const randomGifts = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index]);
//   }
//   return (
//     <div style={{ padding: 32 }}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGifts}> Nhận Thưởng </button>
//     </div>
//   );
// }
// Two-Way binding trong React : Ràng Buộc 2 Chiều
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'JavaScript'
//   },
//   {
//     id: 3,
//     name: 'React JS'
//   }
// ]
// function App() {
//   const [checker, setChecker] = useState([])
//   const handleCheck = (id) => {
//     setChecker(prev => {
//       const isChecker = checker.includes(id)
//       if (isChecker) {
//         return checker.filter(item => item !== id)
//       }
//       else {
//         return [...prev, id]
//       }
//     })
//   }
//   const hendleSubmit = () => {
//     console.log({ ids: checker })
//   }
//   return (
//     <div style={{ padding: 32 }}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input type="checkbox"
//             checked={checker.includes(course.id)}
//             onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={hendleSubmit}> Đăng Kí</button>
//     </div>
//   )
// }
// Todolist with useState khi reset lại trang web sẽ loading lại trang nhưng dữ liệ dữ nguyên và lưu lại
// function App() {
//     const [job, setJob] = useState('');
//     const [jobs, setJobs] = useState(() => {
//         const storageJobs = JSON.parse(localStorage.getItem('jobs'));
//         console.log(storageJobs);
//         return storageJobs || [];
//     });
//     const handleSubmit = () => {
//         setJobs(prevJobs => {
//             const newJobs = [...prevJobs, job];
//             const jsonJobs = JSON.stringify(newJobs);
//             localStorage.setItem('jobs', jsonJobs);
//             console.log(jsonJobs);
//             return newJobs;
//         });
//         setJob('');
//     };

//     return (
//         <div style={{ padding: 32 }}>
//             <input value={job} onChange={e => setJob(e.target.value)} />
//             <button onClick={handleSubmit}>Add</button>
//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>{job}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default App;
// Phần mềm chạy lùi từ 60 đến âm vô cùng khi nhấn stop sẽ dừng lại
// useRef() Lưu các giá trị qua một tham chiếu bên ngoài Function component 
// function App() {
//     const [count, setcount] = useState(60)

//     const timeID = useRef()
//     const prevCount = useRef()

//     useEffect(() => {
//         prevCount.current = count
//     }, [count])

//     const handleStart = () => {
//         timeID.current = setInterval(() => {
//             setcount(prevCount => prevCount - 1)
//         }, 1000)
//         console.log('Start --> ', timeID.current)
//     }
//     const handleStop = () => {
//         clearInterval(timeID.current)
//         console.log('Stop --> ', timeID.current)
//     }
//     console.log(count, prevCount.current)
//     return (
//         <div style={{ padding: 20 }}>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }
// 1 Memo() --> Higher Order Component (HOC) (Memo = Ghi nhớ)
// function App() {
//     const [count, setCount] = useState(0)

//     const hendleIncrease = useCallback(() => {
//         setCount(prevCount => prevCount + 1)
//     }, [])

//     return (
//         <div style={{ padding: '10px 32px' }}>
//             <Content
//                 onIncrease={hendleIncrease}
//             />
//             <h1>{count}</h1>
//         </div>
//     )
// }
// Dưới đây sử dụng Memo Hook
// function App() {
//     const [name, setName] = useState('')
//     const [price, setPrice] = useState('')
//     const [products, setProducts] = useState([])

//     const nameRef = useRef()

//     const handleSubmit = () => {
//         setProducts([...products, {
//             name,
//             price: +price
//         }])
//         setName('')
//         setPrice('')

//         nameRef.current.focus()
//     }
//     const total = useMemo(() => {
//         const result = products.reduce((result, prod) => {
//             console.log('Tính toán lại')
//             return result + prod.price
//         }, 0)
//         return result
//     }, [products])
//     return (
//         <div style={{ padding: '10px 32px' }}>
//             <input
//                 ref={nameRef}
//                 value={name}
//                 placeholder="Enter name..."
//                 onChange={e => setName(e.target.value)}
//             />
//             <br />
//             <input
//                 value={price}
//                 placeholder="Enter price..."
//                 onChange={e => setPrice(e.target.value)}
//             />
//             <br />
//             <button onClick={handleSubmit}> ADD </button>
//             <br />
//             Total:{total}
//             <ul>
//                 {products.map((products, index) => (
//                     <li key={index} >{products.name} - {products.price}</li>
//                 ))}
//             </ul>
//         </div>
//     )

// }
// Dưới đây là useReduce VD 1
// const initState = 0
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// const reducer = (state, action) => {
//     switch (action) {
//         case UP_ACTION:
//             return state + 1
//         case DOWN_ACTION:
//             return state - 1
//         default:
//             throw new Error('Invalid action')
//     }
// }
// function App() {
//     const [count, dispatch] = useReducer(reducer, initState)

//     return (
//         <div style={{ padding: '0px 32px' }}>
//             <h1>{count}</h1>
//             <button
//                 onClick={() => dispatch(DOWN_ACTION)}
//             >
//                 Down
//             </button>
//             <button
//                 onClick={() => dispatch(UP_ACTION)}
//             >
//                 Up
//             </button>
//         </div>
//     )
// }
// Dưới đây là useReduce VD 2
function App() {
    return <TodoApp />
}
export default App