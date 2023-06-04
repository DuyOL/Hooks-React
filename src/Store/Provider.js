import Context from "./Context"
import { useReducer } from 'react'
import reduce, { initState } from "./reducer"
import logger from "./logger"

function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reduce), initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider