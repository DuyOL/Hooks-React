import { SET_TODO_INPUT, ADD_TODO } from "./constants"

const initState = {
    todos: [],
    todoInput: '',
}
function reduce(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todos, action.payload]
            }
        default:
            throw new Error('Invalid action')
    }
}
export { initState }
export default reduce