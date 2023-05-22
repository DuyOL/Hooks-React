import { useReducer, useRef } from "react"
import reducer, { initState } from "./reducer"
import { addJob, setJob, DeleteJob } from "./action"
import logger from './logger'

function App() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    return (
        <div style={{ padding: '0px  20px' }}>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter Todo..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(DeleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App;
