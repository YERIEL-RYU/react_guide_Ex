import React from 'react';
import {connect} from 'react-redux'

const Display = (props) => {
    return (
        <div>
            <h1> COUNT: {props.count}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Display);