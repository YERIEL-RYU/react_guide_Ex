import React, { Component } from 'react';

class DefaultButton extends Component {
    render() {
        return (
            // <button type="button" onClick={this.props.onClick.bind(this)}>
            //     {this.props.label}
            // </button>
            
            <button type="button" className={this.props.label.length > 10 ? 'long':'small'}>
                {this.props.label}
            </button>
        );
    }
}

export default DefaultButton;