import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';

class SwitchErrorAlert extends Component {
    constructor(){
        super();
        this.handleShowAlert = this.handleShowAlert.bind(this)
        this.handleHideAlert = this.handleHideAlert.bind(this)
        this.state = {
            show : false
        }
    }
    handleShowAlert(){
        this.setState({
            show:true
        })
    }
    handleHideAlert(){
        this.setState({
            show:false
        })
    }
    render() {
        if(this.state.show){
            return(
                <Alert variant="danger" onDismiss={this.handleHideAlert}>
                    <h4>Error Alert</h4>
                    <Button onClick={this.handleHideAlert}>OK</Button>
                </Alert>
            )
        }
        return <Button onClick={this.handleShowAlert}>Show Alert</Button>
    }
}

export default SwitchErrorAlert;