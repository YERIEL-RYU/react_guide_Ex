const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)

    console.log('nenxt state', store.getState())

    return result
}

export default logger