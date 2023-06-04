function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('Prev state  :', prevState)
        console.log('action  :', action)

        const nextState = reducer(prevState, action)

        console.log('NextState', nextState)
        console.groupEnd()
        return nextState
    }
}
export default logger