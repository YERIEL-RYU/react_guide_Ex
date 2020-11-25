import React, { Component } from 'react';

class InformationArea extends Component {
    constructor(props) {
        super(props);
        this.handleOpenEverything = this.handleOpenEverything.bind(this);
        this.state = {
            flag : false
        }
    }
    handleOpenEverything() {
        this.setState({
            flag : !this.state.flag
        })
    }
    render() {
        return (
            <div>
                <p>전화번호 : <a href={`tel:${this.props.tel}`}>{this.props.tel}</a></p>
                <p>이메일 주소  : <a href={`tel:${this.props.mail}`}>{this.props.mail}</a></p>
                <button onClick={this.handleOpenEverything}>더 자세한 정보보기</button>
                {/* 자신의 state를 확인하여 css 변경 */}
                <div style={{display: this.state.flag?'block':'none'}}>
                <p>소속  : <a href={`tel:${this.props.organization}`}>{this.props.organization}</a></p>
                <p>SNS 계정  : <a href={`tel:${this.props.account}`}>{this.props.account}</a></p>
                </div>
            </div>
        );
    }
}

export default InformationArea;