export const REQUEST_FETCH = 'REQUEST_FETCH'
export const SUCCEEDED_FETCH = 'SUCCEEDED_FETCH'
export const FALIED_FETCH = 'FAILED_FETCH'

export const requestFetch = () => {
    return {
        type: REQUEST_FETCH
    }
}

export const succeededFetch = (payload) => {
    return {
        type: SUCCEEDED_FETCH,
        payload
    }
}

export const failedFetch = (message) => {
    return {
        type : FALIED_FETCH,
        message
    }
}

export const request = (state, action) => {
    console.log(action)
    return state
}

export default request