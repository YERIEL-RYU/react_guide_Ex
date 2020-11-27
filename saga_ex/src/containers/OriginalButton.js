import React, { Component } from 'react';
import {connect} from 'react-redux'
import {requestFetch} from '../modules/request'
import {bindActionCreators} from 'redux'


class OriginalButton extends Component {
    sendAction = () => {
        this.props.dispatch(requestFetch())
    }
    render() {
        return (
            <button onClick={this.sendAction}>Hello, world!</button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    const result = bindActionCreators({requestFetch}, dispatch)
    return result
}
export default connect(mapDispatchToProps)(OriginalButton);