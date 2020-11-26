const initialState = {count:0}

const inc = "ACTION_INCREASE"
const dec = "ACTION_DECREASE"

//action
export const increaseAction = () => ( {
    type: inc
})
export const decreaseAction = () => ( {
    type: dec
})

//reducer
const counter = (state = initialState, action) => {
    console.log("counter.............")

    let newState = null

    switch(action.type) {
        case inc :
            newState = {count:state.count + 1}
            break
        case dec : 
            newState = {count:state.count -1}
            break
        default:
            newState = state
            break
    }
    return newState
}

export default counter