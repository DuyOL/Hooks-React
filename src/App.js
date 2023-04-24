import { useState } from "react";
function App() {

  const [tang, setTang] = useState(1)
  const tanggiatri = () => {
    setTang(braveState => braveState + 1)
  }
  const [giam, setGiam] = useState(10)
  const giamgiatri = () => {
    setGiam(ggState => ggState - 1)
  }
  return (
    <div className="App" style={{ padding: 20, }}>
      <h1>{tang}</h1>
      <button onClick={tanggiatri}> Tăng + </button>
      <h1>{giam}</h1>
      <button onClick={giamgiatri}> Giảm - </button>
    </div>
  );
}

export default App;
