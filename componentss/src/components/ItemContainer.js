import React, { Component } from 'react';
import ItemList from './ItemList';
import MainTitle from './MainTitle';

class ItemContainer extends Component {
    constructor() {
        super();

        this.state={
            items: ['Item1','Item2','Item3','Item4',]
        }

        this.handleUpdateFlag = this.handleUpdateFlag.bind(this);
    }
    handleUpdateFlag(){
        this.state.items.push("AAA");
        this.setState({
            items : this.state.items
        })
    }
    render() {
        return (
            <div>
                <MainTitle text="My Items Page" url="https://r-0o0-j.tistory.com"/>
                <ItemList items={this.state.items}/>
            </div>
        );
    }
}

export default ItemContainer;