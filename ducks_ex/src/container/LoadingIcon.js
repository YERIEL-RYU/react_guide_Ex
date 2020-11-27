import React from 'react';
import {connect} from 'react-redux'
import {fetchCotents} from '../modules/request'

const LoadingIcon = (props) => {
    let result = null
    if (props.isFetching){
        result = <h1>Loading Completed...</h1>
    }else{
        result = <h1>Loading Ready...</h1>
    }
    return (
        <div>
            {result}
            <button onClick={()=> props.dispatch(fetchCotents())}>Start</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(LoadingIcon);