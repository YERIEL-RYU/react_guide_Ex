import React, { Component } from 'react';
import FlagSwitch from './FlagSwitch';
import ViewFlagValue from './ViewFlagValue';

class SwitchContainer extends Component {
    constructor(){
        super();
        this.state={
            flag: false
        }
    }
    handleUpdateFlag() {
        this.setState({
            flag: !this.state.flag
        })
        console.log('onclick')
    }
    render() {
        return (
            <div>
                <FlagSwitch handleUpdateFlag={this.handleUpdateFlag}></FlagSwitch>
                <ViewFlagValue flag={this.state.flag}></ViewFlagValue>
            </div>
        );
    }
}

export default SwitchContainer;