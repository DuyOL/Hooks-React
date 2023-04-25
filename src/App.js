import { useState } from "react";
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
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'React JS'
  }
]
function App() {
  const [checker, setChecker] = useState([])
  const handleCheck = (id) => {
    setChecker(prev => {
      const isChecker = checker.includes(id)
      if (isChecker) {
        return checker.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      }
    })
  }
  const hendleSubmit = () => {
    console.log({ ids: checker })
  }
  return (
    <div style={{ padding: 32 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input type="checkbox"
            checked={checker.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={hendleSubmit}> Đăng Kí</button>
    </div>
  )
}
export default App;
