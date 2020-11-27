import React from 'react';
import {connect} from 'react-redux'

import {increaseThenDecrease, decreaseAction} from '../modules/counter'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.increase}>+</button>
            <button onClick={props.decrease}>-</button>
        </div>
    );
};

const mapDispatchToState = (dispatch) => {
    return {
        increase : () => dispatch(increaseThenDecrease()),
        decrease : () => dispatch(decreaseAction()),
    }
}



export default connect(undefined, mapDispatchToState)(Button);