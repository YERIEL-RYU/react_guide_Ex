const REQUEST_FETCH = 'REQUEST_FETCH'
const RECEIVE_FETCH = 'RECEIVE_FETCH'

const initialState = {
    isFetching : false,
    data: {}
}

const request = (state = initialState, action) => {
    switch (action.type) {
        //통신 중 상태
        case REQUEST_FETCH :
            return Object.assign({}, state, {
                ...state,
                isFetching : true
            })
        case  RECEIVE_FETCH :
            return Object.assign({},state, {
                ...state,
                isFetching : false,
                data : action.payload
            })
        default :
            return state
    }
}

export default request

const requestFetch = () => {
    return{
        type : REQUEST_FETCH
    }
}

const receiveFetch = (payload) => {
    return {
        type : RECEIVE_FETCH,
        payload
    }
}

export function fetchCotents() {
    return function (dispatch) {
        dispatch(requestFetch());
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => 
                setTimeout(()=>{dispatch(receiveFetch(json))},3000)
            )
    }
}