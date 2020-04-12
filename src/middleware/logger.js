// Middleware to log all actions and the subsequent state to console
const logger = (store) => (next) => (action) => {
    console.groupCollapsed(action.type)
        console.log('The action: ', action)
        const result = next(action)
        console.log('The result: ', store.getState())
    console.groupEnd()
    return result
}

export default logger;
